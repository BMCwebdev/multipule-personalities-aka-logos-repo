  console.log('loaded');
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
      jQuery('[data-portlet-container="alternativeLogos"]')
        .each(function () {
          var elementID = this.id;
          console.log(elementID);
          jQuery.ajax({
            url: jQuery(this).data('portletUrl'),
            data: { x_ts: new Date().getTime()},
            dataType: 'json',
            type: 'GET',
            success: function(eventsData) {
              console.log('success');
              var modifiedData = eventsData;
              var html = template(modifiedData); 
              jQuery('#' + elementID).append(html);
            }
          });
        });
    }
});