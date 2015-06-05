/*global $, chrome*/

(function () {
    'use strict';
    var $favicon = $('link[rel$=icon]'),
        $head = $('head'),
        icons,
        i;

    if ($favicon.length > 0) { return; }

    $.get(chrome.extension.getURL('icons.txt'), function (data) {
        icons = data.split('\n');
        // (icons.length - 1) : ignore the last empty line
        i = Math.floor(Math.random() * (icons.length - 1));

        $favicon = $('<link>', {
            rel: 'shortcut icon',
            type: 'image/ico',
            href: chrome.extension.getURL('images/favicon/fa-' + icons[i] + '.ico')
        });

        if ($head.length === 0) {
            $head = $('<head>');
            $('body').before($head);
        }

        $('head').append($favicon);
    });
}());
