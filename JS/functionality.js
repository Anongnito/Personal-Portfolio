$(window).load(function () {

    $.fn.fullpage.reBuild();
    setTimeout(function () {
        $('#secondBall').remove();
        $('.typewriter')
            .text('Welcome')
            .css({'opacity': '1', '-webkit-animation': 'none', '-moz-animation': 'none', '-ms-animation': 'none'});
        $('#loadingScreen').addClass("slideUpLoading");

        browserCheck();
    }, 2200);
});

$(document).ready(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("bgVideo").remove();

    }

    $('#fullpage').fullpage({

        css3: true,
        easing: 'easeOutSine',
        'keyboardScrolling': false,
        'autoScrolling': false,
        loopHorizontal: false,
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('nav li a').removeClass('navigationActive');
                $('.backgroundEffect').removeClass('backgroundEffectAnimation');
                $('.content').removeClass('contentAnimation');
                $('nav li a').css('color', 'black');
                $('#introButton').addClass('navigationActive');
                $('#intro h1').addClass('introPopIn');
                $('#aboutMeContent h2, #aboutMeContent p').removeClass('textOpacityChange');
                $('#aboutMeContent li').removeClass('textMovement');
                $('#aboutMeContent').css('display', 'none');
            }

            if (index == 2) {
                $('nav li a').removeClass('navigationActive');
                $('.backgroundEffect').removeClass('backgroundEffectAnimation');
                $('.content').removeClass('contentAnimation');
                $('nav li a').css('color', 'black');
                $('#aboutMeButton').addClass('navigationActive');
                $('#intro h1').removeClass('introPopIn');
                $('#aboutMeContent h2, #aboutMeContent p').addClass('textOpacityChange');

            }

            if (index == 3) {
                $('nav li a').removeClass('navigationActive');
                port1Functionality();
                $('#portfolioButton').addClass('navigationActive');
                $('#intro h1').removeClass('introPopIn');
                $('#aboutMeContent h2, #aboutMeContent p').removeClass('textOpacityChange');
                $('#aboutMeContent li').removeClass('textMovement');
                $('#aboutMeContent').css('display', 'none');


            }
            if (index == 4) {
                $('nav li a').removeClass('navigationActive');
                $('.backgroundEffect').removeClass('backgroundEffectAnimation');
                $('.content').removeClass('contentAnimation');
                $('#contactButton').addClass('navigationActive');
                $('#intro h1').removeClass('introPopIn');
                $('#aboutMeContent h2, #aboutMeContent p').removeClass('textOpacityChange');
                $('#aboutMeContent li').removeClass('textMovement');
                $('#aboutMeContent').css('display', 'none');

            }
            if (index == 3 && $('#port2').hasClass('active')) {
                port2Functionality();
            }
            if (index == 3 && $('#port3').hasClass('active')) {
                port3Functionality();
            }
            if (index == 3 && $('#port4').hasClass('active')) {
                port4Functionality();
            }
        },

        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            if (slideIndex == 0) {

                port1Functionality();
            }
            if (slideIndex == 1) {
                port2Functionality();
            }
            if (slideIndex == 2) {
                port3Functionality();
            }
            if (slideIndex == 3) {
                port4Functionality();
            }
        },
        onLeave: function (index) {
            $('#aboutMeContent li').addClass('textMovement');
            $('#aboutMeContent').css('display', 'block');

            if (index == 2 || index == 1) {
                $('.fp-prev').css('border-color', 'transparent #00d9ae transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #00d9ae');
                $('.buttonTop').css('border-color', 'transparent transparent #00d9ae transparent');
                $('.buttonBottom').css('border-color', '#00d9ae transparent transparent transparent');
                $('nav li a').css('color', '#00d9ae');
            }
            if (index == 3 && $('#port2').hasClass('active') || index == 1 && $('#port2').hasClass('active') || index == 2 && $('#port2').hasClass('active')) {
                $('.fp-prev').css('border-color', 'transparent #de4545 transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #de4545');
                $('.buttonTop').css('border-color', 'transparent transparent #de4545 transparent');
                $('.buttonBottom').css('border-color', '#de4545 transparent transparent transparent');
                $('nav li a').css('color', '#de4545');
            }
            if (index == 3 && $('#port3').hasClass('active') || index == 1 && $('#port3').hasClass('active') || index == 2 && $('#port3').hasClass('active')) {
                $('.fp-prev').css('border-color', 'transparent #6a2d91 transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #6a2d91');
                $('.buttonTop').css('border-color', 'transparent transparent #6a2d91 transparent');
                $('.buttonBottom').css('border-color', '#6a2d91 transparent transparent transparent');
                $('nav li a').css('color', '#6a2d91');
            }
            if (index == 3 && $('#port4').hasClass('active') || index == 1 && $('#port4').hasClass('active') || index == 2 && $('#port4').hasClass('active')) {
                $('.fp-prev').css('border-color', 'transparent #5bb75b transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #5bb75b');
                $('.buttonTop').css('border-color', 'transparent transparent #5bb75b transparent');
                $('.buttonBottom').css('border-color', '#5bb75b transparent transparent transparent');
                $('nav li a').css('color', '#5bb75b');
            }
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction) {
            if (slideIndex == 0 && direction == "right") {
                $('.fp-prev').css('border-color', 'transparent #de4545 transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #de4545');
                $('.buttonTop').css('border-color', ' transparent transparent #de4545 transparent');
                $('.buttonBottom').css('border-color', ' #de4545 transparent transparent transparent');
                $('nav li a').css('color', '#de4545');
            }

            if (slideIndex == 1 && direction == "right") {
                $('.fp-prev').css('border-color', 'transparent #6a2d91 transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #6a2d91');
                $('.buttonTop').css('border-color', ' transparent transparent #6a2d91 transparent');
                $('.buttonBottom').css('border-color', ' #6a2d91 transparent transparent transparent');
                $('nav li a').css('color', '#6a2d91');
            }

            if (slideIndex == 1 && direction == "left") {
                $('.fp-prev').css('border-color', 'transparent #00d9ae transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #00d9ae');
                $('.buttonTop').css('border-color', ' transparent transparent #00d9ae transparent');
                $('.buttonBottom').css('border-color', ' #00d9ae transparent transparent transparent');
                $('nav li a').css('color', '#00d9ae');
            }
            if (slideIndex == 2 && direction == "right") {
                $('.fp-prev').css('border-color', 'transparent #5bb75b transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #5bb75b');
                $('.buttonTop').css('border-color', ' transparent transparent #5bb75b transparent');
                $('.buttonBottom').css('border-color', ' #5bb75b transparent transparent transparent');
                $('nav li a').css('color', '#5bb75b');
            }

            if (slideIndex == 2 && direction == "left") {
                $('.fp-prev').css('border-color', 'transparent #de4545 transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #de4545');
                $('.buttonTop').css('border-color', ' transparent transparent #de4545 transparent');
                $('.buttonBottom').css('border-color', ' #de4545 transparent transparent transparent');
                $('nav li a').css('color', '#de4545');
            }

            if (slideIndex == 3 && direction == "left") {
                $('.fp-prev').css('border-color', 'transparent #6a2d91 transparent transparent');
                $('.fp-next').css('border-color', 'transparent transparent transparent #6a2d91');
                $('.buttonTop').css('border-color', ' transparent transparent #6a2d91 transparent');
                $('.buttonBottom').css('border-color', ' #6a2d91 transparent transparent transparent');
                $('nav li a').css('color', '#6a2d91');
            }
        }
    });


    function port1Functionality() {
        $('.backgroundEffect').remove();
        $('.content').removeClass('contentAnimation');
        $("<div class='backgroundEffect backgroundEffectAnimation'></div>").insertBefore('#port1 .fp-tableCell');
        $('#port1 .content').addClass('contentAnimation');
        $('#contact').css('background', '#00d9ae');
        $('.info h1, .copyright').css({'color': '#005847', 'text-shadow': '0 1px 0 #40e5c4'});
        $('.socialMediaIcon').css('color', '#00d9ae');
        $('.hoverIcon').removeClass('re el em').addClass('le');
    }

    function port2Functionality() {
        $('.backgroundEffect').remove();
        $('.content').removeClass('contentAnimation');
        $("<div class='backgroundEffect backgroundEffectAnimation'></div>").insertBefore('#port2 .fp-tableCell');
        $('#port2 .content').addClass('contentAnimation');
        $('#contact').css('background', '#de4545');
        $('.info h1, .copyright').css({'color': '#782525', 'text-shadow': '0 1px 0 #ff5656'});
        $('.socialMediaIcon').css('color', '#de4545');
        $('.hoverIcon').removeClass('le el em').addClass('re');
    }

    function port3Functionality() {
        $('.backgroundEffect').remove();
        $('.content').removeClass('contentAnimation');
        $("<div class='backgroundEffect backgroundEffectAnimation'></div>").insertBefore('#port3 .fp-tableCell');
        $('#port3 .content').addClass('contentAnimation');
        $('#contact').css('background', '#6a2d91');
        $('.info h1, .copyright').css({'color': '#3a184f', 'text-shadow': '0 1px 0 #833db0'});
        $('.socialMediaIcon').css('color', '#6a2d91');
        $('.hoverIcon').removeClass('re le em').addClass('el');

    }

    function port4Functionality() {
        $('.backgroundEffect').remove();
        $('.content').removeClass('contentAnimation');
        $("<div class='backgroundEffect backgroundEffectAnimation'></div>").insertBefore('#port4 .fp-tableCell');
        $('#port4 .content').addClass('contentAnimation');
        $('#contact').css('background', '#5bb75b');
        $('.info h1, .copyright').css({'color': '#214521', 'text-shadow': '0 1px 0 #6edb6e'});
        $('.socialMediaIcon').css('color', '#5bb75b');
        $('.hoverIcon').removeClass('re le el').addClass('em');
    }

});
function moveToIntro() {
    $.fn.fullpage.moveTo(1);
}
function moveToAboutMe() {
    $.fn.fullpage.moveTo(2);
}
function moveToPortfolio() {
    $.fn.fullpage.moveTo(3);
}
function moveToContact() {
    $.fn.fullpage.moveTo(4);
}

function browserCheck() {
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var isChrome = !!window.chrome && !isOpera;
    var isIE = !!document.documentMode;
    if (isChrome || isSafari) {
        document.getElementById("loadingScreen").addEventListener("webkitAnimationEnd", function () {
            afterLoadingScreenFunctions();
        }, false);
    } else if (isFirefox) {
        document.getElementById("loadingScreen").addEventListener("animationend", function () {
            afterLoadingScreenFunctions();
            $('.thumb').css('top', '-35px');
        }, false);
    } else if (isIE) {
        document.getElementById("loadingScreen").addEventListener("MSAnimationEnd", function () {
            ieFullScreenJsWidthFix();
            $(window).resize(function () {
                ieFullScreenJsWidthFix();
            });
            afterLoadingScreenFunctions();
        }, false);
    } else if (isOpera) {
        document.getElementById("loadingScreen").addEventListener("oanimationend", function () {
            afterLoadingScreenFunctions();
        }, false);
    }
    function afterLoadingScreenFunctions() {
        $('#loadingScreen').remove();
        $('#introButton').addClass('navigationActive');
        $('#intro').find('h1').addClass('introPopIn');
        $('.buttonBottom').css({'border-color': 'white transparent transparent transparent'});

        $.fn.fullpage.setAutoScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);

        verticalAlignText();
        videoControls();
        exampleHoverFunctionality();
        disableEnableScrollLightbox();

        function videoControls() {
            var video = document.getElementById("bgVideo");
            video.loop = false;
            video.addEventListener('ended', function () {
                video.currentTime = 0.1;
                video.play();
            }, false);
            video.play();
        }

        function verticalAlignText() {
            $('.exampleInfoContainer p').each(function () {
                var paragraphHeight = $(this).height();
                var containerHeight = $(this).parent().height();
                var calculatedMargin = (containerHeight - paragraphHeight) / 2;
                $(this).css('margin-top', calculatedMargin);
            })
        }
    }

    function disableEnableScrollLightbox() {
        $('.exampleImg').click(function () {

            $.fn.fullpage.setAutoScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
            setTimeout(function () {

                $('.lb-dataContainer').animate({opacity: 1}, 'fast');
            }, 1000)
        });
        $('#lightbox, .lb-close').click(function () {
            $("#lightboxOverlay").promise().done(function () {
                $.fn.fullpage.setAutoScrolling(true);
                $.fn.fullpage.setKeyboardScrolling(true);
                $('.lb-dataContainer').css('opacity', '0');
            });
        });
        window.addEventListener("keydown", checkKeyPressed, false);

        function checkKeyPressed(e) {
            if (e.keyCode == "27") {
                $.fn.fullpage.setAutoScrolling(true);
                $.fn.fullpage.setKeyboardScrolling(true);
                $('.lb-dataContainer').css('opacity', '0');
            }
        }
    }
}

function exampleHoverFunctionality() {
    $('.exampleInfoContainer').hover(function () {
        $(this).children('.exampleInfoContainerBG').stop().animate({opacity: 1, left: "52.5%"}, 'fast');
        $(this).children('p').stop().animate({opacity: 1}, 'fast');
    }, function () {
        $(this).children('.exampleInfoContainerBG').stop().animate({left: "2.5%", opacity: 0}, 'fast');
        $(this).children('p').stop().animate({opacity: 0.2}, 'fast');
    });
    $('.exampleInfo, iframe').hover(function () {
        $(this).prev().children('.exampleInfoContainerBG').stop().animate({opacity: 1, left: "52.5%"}, 'fast');
        $(this).prev().children('p').stop().animate({opacity: 1}, 'fast');
    }, function () {
        $(this).prev().children('.exampleInfoContainerBG').stop().animate({left: "2.5%", opacity: 0}, 'fast');
        $(this).prev().children('p').stop().animate({opacity: 0.2}, 'fast');
    });
}

function ieFullScreenJsWidthFix() {
    var screenWidth = $(window).width();
    $('#introContent').css('width', screenWidth);
}

