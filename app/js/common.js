$(function() {

    $("html").niceScroll();

    $('#s-about').parallax({imageSrc: '../img/bg2.jpg'});

    $(".slider").flexslider({
        animation: "slide",
        itemMargin: 0,
        animationSpeed: 2000
    });

    $(".owl-carousel").owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4
    });

    $(".works-slider").flexslider({
        animation: "slide",
        animationLoop: true,
        itemwidth: 500,
        itemMargin: 5
    });

    //Magnific Popup
    var callBack = $('a[href="#callback"]');
    callBack.magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });
    callBack.on('click', function () {
        var dataForm = $(this).data('form');
        var dataText = $(this).data('text');
        $('.form-callback h4').text(dataText);
        $('.form-callback [name=admin-data]').val(dataForm);
    });

    $(".bad-vk").magnificPopup({type: "image"});
    var slide = $('.slide');
    slide.each(function (e) {
        var th = $(this);
        th.attr('href', '#slide-' + e)
            .find('.slide-popup')
            .attr('id', 'slide-' + e);
    });
    slide.magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: 'inline'
    });
});
