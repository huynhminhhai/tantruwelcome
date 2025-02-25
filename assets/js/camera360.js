$(document).ready(function () {

    function activateIframe($item) {
        const $iframeWrap = $item.find('.iframe-wrap');
        const $iframe = $item.find('.vr360-iframe');
        const src = $item.data('src');

        $('.iframe-wrap').removeClass('active');
        $('.vr360-iframe').attr('src', '');

        $iframeWrap.addClass('active');
        $iframe.attr('src', src);
    }

    $('.camera360-item .card').on('click', function () {
        const $item = $(this).closest('.camera360-item');
        activateIframe($item);
    });

    $('.camera360-item .button-close').on('click', function () {
        const $iframeWrap = $(this).closest('.iframe-wrap');
        const $iframe = $iframeWrap.find('.vr360-iframe');

        $iframeWrap.removeClass('active');
        $iframe.attr('src', '');
    });

    const hash = window.location.hash.substring(1);
    if (hash) {
        const $targetItem = $('.camera360-item[data-id="' + hash + '"]');
        if ($targetItem.length) {
            activateIframe($targetItem);
        }
    }
})