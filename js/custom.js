$(function () {

    // typed js part
    $(".typed").typed({
        strings: ["Kamrul Islam.", "Font-End Developers.", "Graphic Designers.", ],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 100,
        // time before typing starts
        startDelay: 1000,
        // backspacing speed
        backSpeed: 40,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });
    // Project slider

    $('.project-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 2500,
        speed: 2000,
        responsive:[
            {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                }
            },
             {
                breakpoint: 768,
                settings:{
                    slidesToShow:2,
                }
            }
        ]

    });
    // testimonial slider
     $('.testi-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow:'.next',
        prevArrow:'.preview',
        responsive:[
            {
                breakpoint: 576,
                settings:{
                    slidesToShow:1,
                }
            },
             {
                breakpoint: 768,
                settings:{
                    slidesToShow:1,
                }
            }
        ]

        
    });
    //navbar bg add
    $(window).scroll(function(){
        var scrolling =$(this).scrollTop();
        if(scrolling>200){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
    });

});
