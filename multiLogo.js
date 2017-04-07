
jQuery(document).ready(function(){

  function ajaxifyFormPost() {
    jQuery("[name='eg_config_form']").on('submit', function(event) {
      event.preventDefault();
      var form = jQuery(this);
      var formAction = form.attr('action');
      var formData = form.serialize();
      jQuery.ajax(formAction, {
        data: formData,
        type: 'POST',
        dataType: 'html',
        success: handleFormResponse
      });
    });
  }

  function handleFormResponse(response) {
    var successResponse = jQuery(response);
    console.log(successResponse);
  }
  
  var allLogoData = {};
  
  jQuery('#alternateLogo').html('<div class="large-loading-icon"></div>');
  
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
        ajaxifyFormPost();
      }
    });
  }
  
  function combineTemplateAndData() {
    var logoContainer = jQuery('#alternateLogo');
    var elementID = (logoContainer).attr("id");
    jQuery('#alternateLogo').html('');
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
      var grabName = jQuery(this).attr('name');
      var nameMarkup = '[name="'+grabName+'"]';
      var newLogo = jQuery('input'+nameMarkup).val();
      jQuery('img'+nameMarkup).attr('src', newLogo);
    });
    jQuery('.preview-input').keypress(function(e){
      if(e.which == 13){
        e.preventDefault();
        var grabName = jQuery(this).attr('name');
        var nameMarkup = '[name="'+grabName+'"]';
        jQuery('.preview-button'+nameMarkup).click();
      }
    });
//    jQuery('.preview-input').blur(function(e){
//      e.preventDefault();
//      var grabName = jQuery(this).attr('name');
//      jQuery('.preview-button.'+grabName).click();
//    });
    jQuery('.logo-delete-button').click (function(e){
      e.preventDefault();
      var grabName = jQuery(this).attr('name');
      console.log(grabName);
      var nameMarkup = '[name="'+grabName+'"]';
      console.log(nameMarkup);
      jQuery('.individual-logo-container'+nameMarkup).remove();
    });
    //set the index of all elements
    var targetText = '[name^="x_logo"]';
    jQuery('div'+targetText).each(function(i){
      jQuery(this).attr('name', 'x_logo' + (i+1));
    });
    jQuery('img'+targetText).each(function(i){
      jQuery(this).attr('name', 'x_logo' + (i+1));
    });
    jQuery('input'+targetText).not('input[name="x_logo_path"]').each(function(i){
      jQuery(this).attr('name', 'x_logo' + (i+1));
    });
    jQuery('button.preview-button'+targetText).each(function(i){
      jQuery(this).attr('name', 'x_logo' + (i+1));
    });
    jQuery('select[name^="x_brand_id"]').each(function(i){
      jQuery(this).attr('name', 'x_brand_id' + (i+1));
    });
    jQuery('button.logo-delete-button'+targetText).each(function(i){
      jQuery(this).attr('name', 'x_logo' + (i+1));
    });   
  }

  function addNewAltLogoBlock(){
//    more global if empty = " " then else
//    if (jQuery('.brand-by-option-selector').hasClass('hidden')) || (jQuery('.individual-logo-container').length > 0) {
//      jQuery('.brand-by-option-selector').removeClass('hidden').addClass('visible');
//    }
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
});