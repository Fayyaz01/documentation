console.log('This would be the main JS file.');

// to top right away
if (window.location.hash) scroll(0, 0);
// void some browsers issue
setTimeout(function () {
    scroll(0, 0);
}, 1);

// any position
$(function () {
    // *only* if we have anchor on the url
    if (window.location.hash) {
        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: ($(window.location.hash).offset().top - 148) + 'px'
        }, 1000, 'swing');
    }
});


// Smooth Scroll


// Mobile Menu toggle

$('.mobile-menu-btn').on('click', function (e) {
    $('header.header-main').toggleClass("mobile-menu");
    $('body').toggleClass("no-scroll");
});


// Copy link to section on page

$('.copy').on('click', function (e) {
    var link = $(this).prev();
    copyToClipboard(link);
    console.log('element: ' + link)

    $(this).attr('data-tooltip', 'Copied!');

});

$('.copyCode').on('click', function (e) {
    var link = $(this).prev($('code'));
    copyCodeToClipboard(link);
    console.log('element: ' + link)

    $(this).attr('data-tooltip', 'Copied!');

});

$( "<span class='copyCode'>Copy to clipboard!</span>" ).insertAfter( "pre code" );


$(".copy").hover(
    function () {
        //$(this).attr('data-tooltip', 'Copied!');
    },
    function () {
        $(this).attr('data-tooltip', 'Click to copy direct link.');
    }
);

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);

    $temp.val(window.location.href.split('#')[0] + $(element).attr("href")).select();
    document.execCommand("copy");
    $temp.remove();
    console.log('yes');
}

function copyCodeToClipboard(element) {
    var $fickleElement = $("<input>");
    $("body").append($fickleElement);

    $fickleElement.val(element.html()).select();
    document.execCommand("copy");
    $fickleElement.remove();
    console.log('yes');
}


$('.toggle-sidebar').on('click', function (e) {
    $('.--sidebar-container').toggleClass("show");
    $('.toggle-sidebar').toggleClass("on");

});
$('.--sidebar-container').not('.toggle-sidebar').on('click', function (e) {
    $('.--sidebar-container').removeClass("show");
    $('.toggle-sidebar').removeClass("on");
    //console.log('clicked');
});

// Sidebar toggle
$(document).ready(function() {


});

$("a[href^='#']").on('click', function(event) {
    var target;
    target = this.hash;

    event.preventDefault();

    var navOffset;
    navOffset = 148;

    return $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 128
    }, 300, function() {
        return window.history.pushState(null, null, target);
    });
});


