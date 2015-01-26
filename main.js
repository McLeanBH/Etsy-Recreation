(function(){
  'use strict';

  $(document).ready(function(){ // runs the function on document ready

    var results = rawData.results;
    var $list = $('.items-list'); // targets ul with class item in the html

/* sorting instructions
1. Write a function that returns sorted data by the property we passed to the function.
2. Write an event handler. --> on event.
3. Remove the current listings. --> on event.
4. Append the sorted data.
*/

// make form to not refresh the page, get it to log the search term entered. what's inside the event -- see beer example

    $('.search-form').on('submit', function(event) {
      event.preventDefault();
      console.log(event); //
      $(this).find('input');
    });

    $.ajax({
      url: "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=tacos&includes=Images,Shop",
      type: "GET",
      dataType: 'jsonp',
    }).done(function(event){
      // console.log(data);
    });


    $(".dropdown").change(function(sortStuff) {
      if ($(".dropdown option:selected").text() == "Lowest Price") {
        results = _.sortBy(results, "price");
      } else if ($(".dropdown option:selected").text() == "Highest Price") {
        results = _.sortBy(results, "price").reverse();
      } else if ($(".dropdown option:selected").text() == "Relevance") {
        results = rawData.results;
      }
      renderListings(results);
    });

    function renderListings(data) {
      $list.empty();
      data.forEach(function(item) {
        var itemText = renderTemplate('itemResults', {
          title: item.title,
          price: item.price,
          currency: item.currency_code,
          description: item.description,
          images: item.Images[0].url_170x135,
          shop: item.Shop.shop_name,
          url: item.url,
        });
        $list.append(itemText);
      });
    }

    results.forEach(function(item){
      var itemText = renderTemplate('itemResults', {
        title: item.title,
        price: item.price,
        currency: item.currency_code,
        description: item.description,
        images: item.Images[0].url_170x135,
        shop: item.Shop.shop_name,
        url: item.url,
      });
      $list.append(itemText);
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
