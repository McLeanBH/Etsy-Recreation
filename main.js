(function(){
  'use strict';


  var chimps = rawChimpData.results; // figure out what i need here using the console.

  $(document).ready(function(){ // runs the function on document ready

    var $list = $('.chimps-list'); // targets ul with class chimp in the html

    chimps.forEach(function(chimp){
      var chimpText = renderTemplate('chimpResults', {
        title: chimp.title,
        price: chimp.price,
        currency: chimp.currency_code,
        description: chimp.description,
        images: chimp.Images[0].url_fullxfull,
        shop: chimp.Shop.shop_name,
        url: chimp.url,
      });
      $list.append(chimpText);
    });

    function renderTemplate(name, data) {
      var $template = $('[data-template-name=' + name + ']').text();
      $.each(data, function(prop, value) {
        $template = $template.replace('<% ' + prop + ' %>', value);
      });
      return $template;
    }

  });
})();
