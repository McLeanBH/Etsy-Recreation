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











  // data.results.forEach(function(item){
  //
  //   var title = item.title;
  //   var short_text = $.trim(title).substring(0,10);
  //   //console.log(title);
  //   console.log(item.Shop);
  //
  //   $('.main_area').append('<div class="image_container"><div class="item_image"><a href="' + item.url + '"><img src="' + item.Images[0].url_170x135 + '"></a><p>' + item.title.substring(0,34) + "..." + "<p>" + item.Shop.shop_name + "</p>" + "<p>" + item.price + " " + item.currency_code + "</p>" + '</p></div><!-- .item_image --></div><!-- .image_container -->');
  // });
