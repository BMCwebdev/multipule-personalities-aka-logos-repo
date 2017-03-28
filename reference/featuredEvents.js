jQuery(document).ready(function() {
  if (jQuery('[data-portlet-container="featuredEvents"]').length >= 1) {
    var template = "";
    var featuredEventText = "";
    var viewMoreFE = "";
    var go = "";
    var viewMore = "";

    window.cgTranslations.getTranslations().done(function() {
      featuredEventText = window.CyberGrants.l10n.constants.L_FEATURED_EVENT;
      viewMoreFE = window.CyberGrants.l10n.constants.L_VIEW_MORE_EVENTS;
      go = window.CyberGrants.l10n.constants.B_GO;
      viewMore = window.CyberGrants.l10n.constants.I_VIEW_MORE;
      jQuery.get('/includes/templates/featured-events.html', function(templateData) {
        template = Handlebars.compile(templateData);
        renderPortlets();
      });
    });
  }

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
