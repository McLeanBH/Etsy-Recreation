$.ajax({
    url: "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=tacos&includes=Images,Shop",
    type: "GET",
    dataType: 'jsonp',
    data: {
      title: item.title,
      price: item.price,
      currency: item.currency_code,
      images: item.Images[0].url_170x135,
      shop: item.Shop.shop_name,
      url: item.url,
    }
  }).done(function(data){
    console.log(data);
});
