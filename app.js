var shop = [
    {
      title: 'Chihuahua' ,
      image: './Chihuahua.jpg',
      price: '500',
      description: 'Big cuteness in a small package. Chihuahuas are great dogs no matter how diminutive they are.'
    
    },


    {
      title: 'Golden Retriever',
      image:'./goldenRT.jpg' ,
      price: '1000' ,
      description: 'Not Airbud himself, but the quintessential family dog.'
    },
    
    {
      title:"German Shepard" ,
      image: "./germanshepard.jpg",
      price: "750",
      description: "Many people consider this a guard dog, but they're actually just as fun loving as any other."
    },
    
    {
      title: "Pomeranian",
      image: "./download.jpg",
      price: "800",
      description: "This overly furry friend is here for all the snuggles"
    },
    
  
    
    ]
    
    var postHTML = " "
  
  
  
  

  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i].image + '"/'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> select</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML