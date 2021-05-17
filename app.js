var shop = [
    {
      title: 'Chihuahua' ,
      image: './chihuahua-puppy.jpg',
      price: '500',
      description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
    
    },


    {
      title: 'Golden Retriever',
      image:'./goldenRT.jpg' ,
      price: '1000' ,
      description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
    },
    
    {
      title:"German Shepard" ,
      image: "./germanshepard.jpg",
      price: "750",
      description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
    },
    
    {
      title: "Pomeranian",
      image: "./download.jpg",
      price: "800",
      description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
    },
    
  
    
    ]
    
    var postHTML = " "
  
  
  
  

  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img style="border:  solid #2D5D7B 10px; height: 200px; width: 200px" src="' + shop[i].image + '"/'
        var price = '<p><br> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p style="font-size:10px">'+ shop[i].description + '</p><button type="button" class="btn" style="background-color:silver"> select</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML



    var shop = [
      {
        title: 'Beneful' ,
        image: './beneful.jpg',
        price: '19.99',
        description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
      
      },
  
  
      {
        title: 'Pedigree',
        image:'./Pedigree.jpg' ,
        price: '12.99' ,
        description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
      },
      
      {
        title:"Blue Buffalo" ,
        image: "./BlueBuffalo.jpg",
        price: "17.99",
        description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
      },
      
      {
        title: "Iams",
        image: "./Iams.jpg",
        price: "16.99",
        description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
      },
      
    
      
      ]
      
      var postHTML = " "
    
    
    
    
  
    
      for (var i=0; i < shop.length; i++){
          var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
          var image = '<img style="border:  solid #C0C0C0 10px; height: 200px; width: 200px" src="' + shop[i].image + '"/'
          var price = '<p><br> $' + shop[i].price + '</p></span>'
          var description = '<div class=""><p style="font-size:10px">'+ shop[i].description + '</p><button type="button" class="btn" style="background-color:silver"> select</button></div></div>'
          var concatThis = heading + image + price + description;
          postHTML = postHTML + concatThis
      }
      document.getElementById('foodmarket').innerHTML = postHTML

      var shop = [
        {
          title: 'Puff Bed' ,
          image: './orthopuff.jpg',
          price: '199.99',
          description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
        
        },
    
    
        {
          title: 'Lounge Bed',
          image:'./BlackdgBed.jpg' ,
          price: '99.99' ,
          description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
        },
        
        {
          title:"Traditional Bed" ,
          image: "./greydgbed.jpg",
          price: "74.99",
          description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
        },
        
        {
          title: "Amazon Bed",
          image: "./whitedgbed.jpg",
          price: "124.99",
          description: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br> Iste aliquam nemo itaque dolorum excepturi.'
        },
        
      
        
        ]
        
        var postHTML = " "
      
      
      
      
    
      
        for (var i=0; i < shop.length; i++){
            var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
            var image = '<img style="border:  solid #2D5D7B 10px; height: 200px; width: 200px" src="' + shop[i].image + '"/'
            var price = '<p><br> $' + shop[i].price + '</p></span>'
            var description = '<div class=""><p style="font-size:10px">'+ shop[i].description + '</p><button type="button" class="btn" style="background-color:silver"> select</button></div></div>'
            var concatThis = heading + image + price + description;
            postHTML = postHTML + concatThis
        }
        document.getElementById('bedmarket').innerHTML = postHTML



