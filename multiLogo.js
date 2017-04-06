
jQuery(document).ready(function(){
  
  
jQuery( "[name='eg_config_form']" ).on( "submit", function( event ) {
  event.preventDefault();
  console.log( jQuery( this ).serialize() );
});
  
  
  
  var allLogoData = {};
  
  Handlebars.registerHelper('ifIdIsBrandBy', function(thisID, selectedID, options){
    if (thisID === selectedID) {
      return options.fn(this);
    };
  });

  Handlebars.registerHelper('ifMatchToOptions', function(brandingId, brandingIds, options){
    if (brandingIds.indexOf(brandingId) >= 0) {
      return options.fn(this);
    };
  });

  var template = {};
  jQuery.get('/includes/altLogoTest/demo-template.html', function(templateData) {
    template = Handlebars.compile(templateData);
    renderLogos();
  });
  
  function renderLogos() {
    var logoContainer = jQuery('#alternateLogo');
    var elementID = (logoContainer).attr("id");
    jQuery.ajax({
      url: jQuery(logoContainer).attr('alternate-logo-url'),
      dataType: 'json',
      type: 'GET',
      success: function(logoData) {
        allLogoData = logoData;
        combineTemplateAndData();
      }
    });
  }
  
  function combineTemplateAndData() {
    var logoContainer = jQuery('#alternateLogo');
    var elementID = (logoContainer).attr("id");
    var html = template(allLogoData); 
    jQuery('#' + elementID).append(html);
    postRenderingFunctions();
    registerAddMoreButton();
  }
  
  function registerAddMoreButton(){
    jQuery('#add-more-logos-button').click (function(e){
      e.preventDefault();
      addNewAltLogoBlock();
    });
    jQuery('#brand-by-option-selector').change(function(e){
      e.preventDefault();
      jQuery('.additionalLogosContainer').html("");
//      allLogoData.brandBy = jQuery('#brand-by-option-selector').val();
//      console.log(allLogoData.brandBy);
    });
  }
  function postRenderingFunctions(){
    jQuery('#logo-preview-button').click (function(e) {
      e.preventDefault();
      var newLogo = jQuery('#default-logo-input').val();
      jQuery('#default-logo').attr('src', newLogo);
    });
    jQuery('.preview-button').click (function(e){
      e.preventDefault();
      var grabFullClass = jQuery(this).attr('class');
      var altLogoBlockIdentifier = grabFullClass.replace('preview-button ', '');
      var newLogo = jQuery('input.'+altLogoBlockIdentifier).val();
      jQuery('img.'+altLogoBlockIdentifier).attr('src', newLogo);
    });
    jQuery('.preview-input').keypress(function(e){
      if(e.which == 13){
        e.preventDefault();
        var grabFullClass = jQuery(this).attr('class');
        var altLogoBlockIdentifier = grabFullClass.replace('preview-input ', '');
        jQuery('.preview-button.'+altLogoBlockIdentifier).click();
      }
    });
//    jQuery('.preview-input').blur(function(e){
//      e.preventDefault();
//      var grabFullClass = jQuery(this).attr('class');
//      var altLogoBlockIdentifier = grabFullClass.replace('preview-input ', '');
//      jQuery('.preview-button.'+altLogoBlockIdentifier).click();
//    });
    jQuery('.logo-delete-button').click (function(e){
      e.preventDefault();
      var grabFullClass = jQuery(this).attr('class');
      var altLogoBlockIdentifier = grabFullClass.replace('button logo-delete-button ', '');
      jQuery('.individual-logo-container.'+altLogoBlockIdentifier).remove();
      postRenderingFunctions();
    });
    jQuery('input[name^="logo-"]').each(function(i){
      jQuery(this).attr('name', 'logo-' + ((i+1)-1));
    });
    jQuery('select[name^="logo-"]').each(function(i){
      jQuery(this).attr('name', 'logo-' + ((i+1)-1));
    });
  }

  function addNewAltLogoBlock(){
    var emptyTemplate = "";
    jQuery.get('/includes/altLogoTest/empty-add-template.html', function(emptyTemplateData) {
      emptyTemplate = Handlebars.compile(emptyTemplateData);
      Handlebars.registerHelper('uniqueClass', function(object) {
        var uniqueClass = jQuery('.individual-logo-container').length;
        return new Handlebars.SafeString(
          'logo-'+uniqueClass
        );
      });
      renderEmptyLogos();
    });

    function renderEmptyLogos() {
      var logoContainer = jQuery('#alternateLogo');
      var elementID = (logoContainer).attr("id");
      jQuery.ajax({
        url: jQuery(logoContainer).attr('alternate-logo-url'),
        dataType: 'json',
        type: 'GET',
        success: function(emptyLogoData) {
          emptyLogoData.brandBy = jQuery('#brand-by-option-selector').val();
          var html = emptyTemplate(emptyLogoData); 
          jQuery('.additionalLogosContainer').append(html);
          postRenderingFunctions();
        }
      });
    }
  }
  
//  function refreshSelectBoxes(){
//    var refreshSelectBoxesTemplate = "";
//    jQuery.get('/includes/altLogoTest/refresh-select-boxes.html', function(refreshSelectBoxesData) {
//      refreshSelectBoxesTemplate = Handlebars.compile(refreshSelectBoxesData);
//      renderRefreshSelectBoxes();
//    });
//
//    function renderRefreshSelectBoxes() {
//      allLogoData.brandBy = jQuery('#brand-by-option-selector').val();
//      var html = refreshSelectBoxesTemplate(allLogoData); 
//      jQuery('.formSelectMulti').replaceWith(html);
//      postRenderingFunctions();
//    }
//  }
});