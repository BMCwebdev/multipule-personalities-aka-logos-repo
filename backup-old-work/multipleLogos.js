jQuery(document).ready(function() {
  var template = "";

  jQuery.get('multiple-logos.html', function(templateData) {
    template = Handlebars.compile(templateData);
    renderPortlets();
  });

  function renderPortlets() {
    jQuery('[data-portlet-container="featuredEvents"]')
      .each(function () {
          var elementID = this.id;
          jQuery.ajax({
              url: jQuery(this).data('portletUrl'),
              data: { x_ts: new Date().getTime()},
              dataType: 'json',
              type: 'GET',
              success: function(eventsData) {
                var modifiedData = eventsData;
                modifiedData.featuredEventText = featuredEventText;
                modifiedData.viewMoreFE = viewMoreFE;
                modifiedData.go = go;
                modifiedData.viewMore = viewMore;
                var html = template(modifiedData); 
                jQuery('.loading-spinner', '#' + elementID).remove();
                jQuery('#' + elementID).append(html);
              }
          });
      });
  }
});