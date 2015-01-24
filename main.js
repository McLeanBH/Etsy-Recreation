(function(){
  'use strict';


  var chimps = rawChimpData.results; // figure out what i need here using the console.

  $(document).ready(function(){ // runs the function on document ready

    var $list = $('.chimps-list'); // targets ul with class chimp in the html


    $(".dropdown").change(function(sortStuff) {
      if ($(".dropdown option:selected").text() == "Lowest Price") {
        chimps = _.sortBy(chimps, "price");
      } else if ($(".dropdown option:selected").text() == "Highest Price") {
        chimps = _.sortBy(chimps, "price").reverse();
      }
      renderListings(chimps);
    });

    function renderListings(data) {
      $list.empty();
      data.forEach(function(chimp) {
        var chimpText = renderTemplate('chimpResults', {
          title: chimp.title,
          price: chimp.price,
          currency: chimp.currency_code,
          description: chimp.description,
          images: chimp.Images[0].url_170x135,
          shop: chimp.Shop.shop_name,
          url: chimp.url,
        });
        $list.append(chimpText);
      });
    }

    chimps.forEach(function(chimp){
      var chimpText = renderTemplate('chimpResults', {
        title: chimp.title,
        price: chimp.price,
        currency: chimp.currency_code,
        description: chimp.description,
        images: chimp.Images[0].url_170x135,
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
