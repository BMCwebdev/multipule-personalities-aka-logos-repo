
jQuery(document).ready(function(){
  if (jQuery('#alternateLogo').length >= 1) {
    var allLogoData = {};
    var currentVal = "";
    var emptyTemplate = "";
    var template = "";
    var getCurrentVal = function(){
      return jQuery('#brand-by-option-selector').val();
    }

    // Loading Spinner
    jQuery('#alternateLogo').html('<div class="large-loading-icon"></div>');

    //Register Handlebars Helpers  
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

    // Get JSON
    if (jQuery.isEmptyObject(allLogoData)) {
      jQuery.ajax({
        url: jQuery('#alternateLogo').attr('alternate-logo-url'),
        dataType: 'json',
        type: 'GET',
        success: function(logoData) {
          allLogoData = logoData;
          getMainTemplate();
        }
      });
    }

    // Get Main template
    function getMainTemplate() {
      jQuery.get('/includes/templates/alt_logos/main-template.html', function(templateData) {
        template = Handlebars.compile(templateData);
        renderLogos();
      });
    }

    // Get empty add more template
    if (emptyTemplate == ""){
      jQuery.get('/includes/templates/alt_logos/empty-add-template.html', function(emptyTemplateData) {
        emptyTemplate = Handlebars.compile(emptyTemplateData);
      });
    }

    // Combine Main Template and JSON and render html
    function renderLogos(){
      jQuery('#alternateLogo').html('');
      var html = template(allLogoData); 
      jQuery('#alternateLogo').append(html);
      cgBuildTooltips();
      postRenderingFunctions();
      registerButtonFunctions();
      ajaxifyFormPost();
    }

    // Render an empty new logo block
    function renderEmptyLogos() {
      allLogoData.brandBy = jQuery('#brand-by-option-selector').val();
      var html = emptyTemplate(allLogoData); 
      jQuery('.additionalLogosContainer').append(html);
      postRenderingFunctions();
  //    registerButtonFunctions();
    }

    // Ajax Posting
    function ajaxifyFormPost() {
      jQuery("[name='eg_config_form']").on('submit', function(event) {
        event.preventDefault();
        var form = jQuery(this);
        var formAction = form.attr('action');
        var formData = form.serialize();
        jQuery.ajax(formAction, {
          data: formData,
          type: 'POST',
          dataType: 'text json',
          success: handleFormResponse
        });
      });
    }
    //Ajax response 
    function handleFormResponse(response) {
      jQuery.each(response, function(index, element) {
        if (index === 'success') {
            jQuery('#message-container').html("");
            jQuery('#message-container').append('<div class="formSuccess"><h3>Success!</h3><p>'+this+'</p></div>');
            jQuery('html').animate({ scrollTop: 0 }, 'slow');
        } else if (index === 'errors') {
            jQuery('#message-container').html('<div class="formErrors"><h3>Error!</h3><p>Please fix the following errors;</p><ul></ul></div>');
            jQuery('.formErrors').find('ul').append(this);
            jQuery('html').animate({ scrollTop: 0 }, 'slow');
        }
      });
    }

    function registerButtonFunctions(){
      jQuery('#add-more-logos-button').click (function(e){
        e.preventDefault();
        renderEmptyLogos();
      });
      jQuery('#brand-by-option-selector').change(function(e){
        e.preventDefault();
        var newVal = jQuery(this).val();
        if (confirm("Are you sure you want to change this? You current settings will be deleted upon save.")) {
          jQuery(this).val(newVal);
          jQuery('.additionalLogosContainer').html("");
          postRenderingFunctions();
          } else {
            jQuery(this).val(currentVal);
            postRenderingFunctions();
        }
      });
    }

    function postRenderingFunctions(){
      // Do All The Inputs!!!!!
      jQuery('#logo-preview-button').click (function(e) {
        e.preventDefault();
        var newLogo = jQuery('#default-logo-input').val();
        var testPathSlash = (/^\//.test(newLogo));
        var testPathHttp = (/^http/.test(newLogo));
        var testPathEmpty = (/ /.test(newLogo));
        if (testPathSlash === false && testPathHttp === false && testPathEmpty === true || testPathSlash === true && testPathHttp === false && testPathEmpty === false) {
          jQuery(this).next().addClass('hidden');
          jQuery('#default-logo').attr('src', newLogo);
        } else if (testPathSlash === false && testPathHttp === false && testPathEmpty === false || testPathSlash === false && testPathEmpty === true && testPathEmpty === false) {
          jQuery(this).next().removeClass('hidden');
        }
      });
      jQuery('.preview-button').click (function(e){
        e.preventDefault();
        var grabName = jQuery(this).attr('name');
        var nameMarkup = '[name="'+grabName+'"]';
        var newLogo = jQuery('input'+nameMarkup).val();
        var testPathSlash = (/^\//.test(newLogo));
        console.log(testPathSlash);
        var testPathHttp = (/^http/.test(newLogo));
        console.log(testPathHttp);
        var testPathEmpty = (/^\s*$/.test(newLogo));
        console.log(testPathEmpty);
        if (testPathSlash === false && testPathHttp === false && testPathEmpty === true || testPathSlash === true && testPathHttp === false && testPathEmpty === false) {
          jQuery(this).next().addClass('hidden');
          jQuery('img'+nameMarkup).attr('src', newLogo);
        } else if (testPathSlash === false && testPathHttp === false && testPathEmpty === false || testPathSlash === false && testPathEmpty === true && testPathEmpty === false) {
          jQuery(this).next().removeClass('hidden');
        }
      });
      jQuery('.preview-input').keypress(function(e){
        if(e.which == 13){
          e.preventDefault();
          var grabName = jQuery(this).attr('name');
          var nameMarkup = '[name="'+grabName+'"]';
          jQuery('.preview-button'+nameMarkup).click();
        }
      });
      jQuery('.preview-input').blur(function(e){
        e.preventDefault();
        var grabName = jQuery(this).attr('name');
        var nameMarkup = '[name="'+grabName+'"]';
        jQuery('.preview-button'+nameMarkup).click();
      });
      jQuery('.logo-delete-button').click (function(e){
        e.preventDefault();
        var grabName = jQuery(this).attr('name');
        var nameMarkup = '[name="'+grabName+'"]';
        jQuery('.individual-logo-container'+nameMarkup).remove();
      });
      if (jQuery('#brand-by-option-selector').val() === "") {
        jQuery('#add-more-logos-button').addClass('hidden');
        jQuery('.additionalLogosContainer').html("");
      } else {
        jQuery('#add-more-logos-button').removeClass('hidden');
      }

      // get current val of "branding by" to save for change confirm box
      currentVal = getCurrentVal();

      //  set the index of all elements
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
  }
});