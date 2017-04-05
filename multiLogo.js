
jQuery(document).ready(function(){
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

  var template = "";
  jQuery.get('demo-template.html', function(templateData) {
    template = Handlebars.compile(templateData);
    renderLogos();
  });
  
  function renderLogos() {
    var logoContainer = jQuery('[data-portlet-container="alternativeLogos"]');
    var elementID = (logoContainer).attr("id");
    jQuery.ajax({
      url: jQuery(logoContainer).data('portletUrl'),
      data: { x_ts: new Date().getTime()},
      dataType: 'json',
      type: 'GET',
      success: function(logoData) {
        allLogoData = logoData;
        combineTemplateAndData();
      }
    });
  }
  
  function combineTemplateAndData() {
    var logoContainer = jQuery('[data-portlet-container="alternativeLogos"]');
    var elementID = (logoContainer).attr("id");
    var html = template(allLogoData); 
    jQuery('#' + elementID).append(html);
    postRenderingFunctions();
    registerAddMoreButton();
  }
  
  function registerAddMoreButton(){
    jQuery('#add-more-logos-button').click (function(){
      addNewAltLogoBlock();
    });
    jQuery('#brand-by-option-selector').change(function(){
      refreshSelectBoxes();
    });
  }
  function postRenderingFunctions(){
    jQuery('#logo-preview-button').click (function() {
      var newLogo = jQuery('#default-logo-input').val();
      jQuery('#default-logo').attr('src', newLogo);
    });
    jQuery('.preview-button').click (function(){
      var grabFullClass = jQuery(this).attr('class');
      var altLogoBlockIdentifier = grabFullClass.replace('preview-button ', '');
      var newLogo = jQuery('input.'+altLogoBlockIdentifier).val();
      jQuery('img.'+altLogoBlockIdentifier).attr('src', newLogo);
    });
    jQuery('.preview-input').keypress(function(e){
      if(e.which == 13){
        var grabFullClass = jQuery(this).attr('class');
        var altLogoBlockIdentifier = grabFullClass.replace('preview-input ', '');
        jQuery('.preview-button.'+altLogoBlockIdentifier).click();
      }
    });
    jQuery('.preview-input').blur(function(){
      var grabFullClass = jQuery(this).attr('class');
      var altLogoBlockIdentifier = grabFullClass.replace('preview-input ', '');
      jQuery('.preview-button.'+altLogoBlockIdentifier).click();
    });
    jQuery('.logo-delete-button').click (function(){
      var grabFullClass = jQuery(this).attr('class');
      var altLogoBlockIdentifier = grabFullClass.replace('button logo-delete-button ', '');
      jQuery('.individual-logo-container.'+altLogoBlockIdentifier).remove();
    });
  }

  function addNewAltLogoBlock(){
    var emptyTemplate = "";
    jQuery.get('demo-empty-add-template.html', function(emptyTemplateData) {
      emptyTemplate = Handlebars.compile(emptyTemplateData);
      Handlebars.registerHelper('uniqueClass', function(object) {
        var uniqueClass = jQuery('.newLogoBlockIndex').length;
        return new Handlebars.SafeString(
          'newLogoBlockIndexIs'+uniqueClass
        );
      });
      renderEmptyLogos();
    });

    function renderEmptyLogos() {
      var logoContainer = jQuery('[data-portlet-container="alternativeLogos"]');
      var elementID = (logoContainer).attr("id");
      jQuery.ajax({
        url: jQuery(logoContainer).data('portletUrl'),
        data: { x_ts: new Date().getTime()},
        dataType: 'json',
        type: 'GET',
        success: function(emptyLogoData) {
          var html = emptyTemplate(emptyLogoData); 
          jQuery('#' + elementID).append(html);
          postRenderingFunctions();
        }
      });
    }
  }
  
  function refreshSelectBoxes(){
    var refreshSelectBoxesTemplate = "";
    jQuery.get('refresh-select-boxes.html', function(refreshSelectBoxesData) {
      refreshSelectBoxesTemplate = Handlebars.compile(refreshSelectBoxesData);
      renderRefreshSelectBoxes();
    });

    function renderRefreshSelectBoxes() {
      // test.json
      // allLogoData.brandBy = parseInt(jQuery('#brand-by-option-selector').val());
      // testTai.json
      allLogoData.brandBy = jQuery('#brand-by-option-selector').val();
      var html = refreshSelectBoxesTemplate(allLogoData); 
      jQuery('.formSelectMulti').replaceWith(html);
      postRenderingFunctions();
    }
  }
});