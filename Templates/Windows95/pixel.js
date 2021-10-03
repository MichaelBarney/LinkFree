/*!

=========================================================
* Pixel Bootstrap 4 UI Kit
=========================================================

* Product Page: http://pixel.themesberg.com
* Copyright 2018 Themesberg (https://www.themesberg.com)

* Coded by themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

"use strict";
$(document).ready(function () {

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Popover
    $('[data-toggle="popover"]').each(function () {
        var popoverClass = '';
        if ($(this).data('color')) {
            popoverClass = 'popover-' + $(this).data('color');
        }
        $(this).popover({
            trigger: 'focus',
            template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });

    // Additional .focus class on form-groups
    $('.form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    // When in viewport
    $('[data-toggle="on-screen"]')[0] && $('[data-toggle="on-screen"]').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            //alert();
        },
        doOut: function () {
            // Do something to the matched elements as they get off scren
        },
        tolerance: 200,
        throttle: 50,
        toggleClass: 'on-screen',
        debug: false
    });

    // Scroll to anchor with scroll animation
    $('[data-toggle="scroll"]').on('click', function (event) {
        var hash = $(this).attr('href');
        var offset = $(this).data('offset') ? $(this).data('offset') : 0;

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top - offset
        }, 600);

        event.preventDefault();
    });

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    $('.time').text(formatAMPM(new Date()));

    // copy docs
    $('.copy-docs').on('click', function () {
        var $copy = $(this);
        var htmlEntities = $copy.parents('.nav-wrapper').siblings('.card').find('.tab-pane:last-of-type').html();
        var htmlDecoded = $('<div/>').html(htmlEntities).text().trim();

        var $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(htmlDecoded).select();
        document.execCommand('copy');
        $temp.remove();

        $copy.text('Copied!');
        $copy.addClass('copied');

        setTimeout(function () {
            $copy.text('Copy');
            $copy.removeClass('copied');
        }, 1000);
    });

});   
