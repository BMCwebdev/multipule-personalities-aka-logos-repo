
jQuery(document).ready(function(){
  
  Handlebars.registerHelper('ifIdIsBrandBy', function(thisID, selectedID, options){
    if (thisID === selectedID) {
      return options.fn(this);
    };
    console.log('ifIdIsBrandBy');
  });

  Handlebars.registerHelper('ifMatchToOptions', function(brandingId, brandingIds, options){
    if (brandingIds.indexOf(brandingId) >= 0) {
      return options.fn(this);
    };
    console.log('ifMatchToOptions');
  });
  

  
  var template = "";
  jQuery.get('demo-template.html', function(templateData) {
    console.log('1');
    console.log(templateData);
    template = Handlebars.compile(templateData);
    console.log(template);
    console.log('2');
    renderLogos();
    console.log('dun rendering');
  });

  function renderLogos() {
    var logoContainer = jQuery('[data-portlet-container="alternativeLogos"]');
    var elementID = (logoContainer).attr("id");
    console.log(elementID);
    jQuery.ajax({
      url: jQuery(logoContainer).data('portletUrl'),
      data: { x_ts: new Date().getTime()},
      dataType: 'json',
      type: 'GET',
      success: function(logoData) {
        console.log('success');
        var html = template(logoData); 
        jQuery('#' + elementID).append(html);
        postRenderingFunctions();
      }
    });
  }
  function postRenderingFunctions(){
    jQuery('#logo-preview-button').click (function() {
      var newLogo = jQuery('#default-logo-input').val();
      console.log(newLogo);
      jQuery('#default-logo').attr('src', newLogo);
    });
    jQuery('#add-more-logos-button').click (function(){
      addNewAltLogoBlock();
    });
  }



  function addNewAltLogoBlock(){
    var emptyTemplate = "";
    jQuery.get('demo-empty-add-template.html', function(emptyTemplateData) {
      emptyTemplate = Handlebars.compile(emptyTemplateData);
      console.log(emptyTemplate);
      Handlebars.registerHelper('uniqueClass', function(object) {
        var uniqueClass = new Date().getTime();
        return new Handlebars.SafeString(
          uniqueClass
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
        }
      });
    }
  }
  
  
});