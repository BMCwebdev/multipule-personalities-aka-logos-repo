console.log('loaded');
jQuery(document).ready(function(){
  
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
    console.log('1');
    console.log(templateData);
    template = Handlebars.compile(templateData);
    console.log(template);
    console.log('2');
    renderLogos();
    console.log('dun rendering');
  });
  function renderLogos() {
    var altLogoContainer = jQuery('[data-portlet-container="alternativeLogos"]');
    console.log(altLogoContainer);
    var elementID = jQuery(altLogoContainer).attr('id');
    console.log(elementID);
    jQuery.ajax({
//          url: jQuery(this).data('portletUrl'),
      url: 'testing.json',
//            data: { x_ts: new Date().getTime()},
      dataType: 'json',
      type: 'GET',
      success: function(logoData) {
        console.log('success!');
        source = logoData;
        var html = template(source); 
        jQuery('#' + elementID).append(html);
      }
    });
  }
  
//  function renderLogos() {
//    jQuery('[data-portlet-container="alternativeLogos"]', function(altLogoContainer){
//      console.log(altLogoContainer);
//      var elementID = this.id;
//      console.log(elementID);
//      jQuery.ajax({
//  //    url: jQuery(this).data('portletUrl'),
//        url: 'testing.json',
//  //    data: { x_ts: new Date().getTime()},
//        dataType: 'json',
//        type: 'GET',
//        success: function(logoData) {
//          console.log('success!');
//          source = logoData;
//          var html = template(source); 
//          jQuery('#' + elementID).append(html);
//        }
//      });
//    });
//  }
});