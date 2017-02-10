$(function () {

    $("html").niceScroll({scrollspeed: 90});

    //WOW animate
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0
    });
    wow.init();

    $(".bad-vk").magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true
    });

    $('#s-about').parallax({imageSrc: './img/bg2.jpg'});

    $(".slider").flexslider({
        animation: "slide",
        itemMargin: 0,
        animationSpeed: 2000
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

    //E-mail Ajax Send
    $('form').submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: 'POST',
            url: 'mail.php', //Change
            data: th.serialize()
        }).done(function () {
            $('.form-callback .success').addClass('active');
            setTimeout(function () {
                // Done Functions
                $('.form-callback .success').removeClass('active');
                th.trigger('reset');
                $.magnificPopup.close();
            }, 2000);
        });
        return false;
    });


});
