$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,

    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
    
})