/*jslint browser: true, plusplus: true, unparam:true*/
/*global require*/
(function () {
    'use strict';

    require.config({
        shim: {
            'jquery': {},
            'jquery.csv': {deps: ['jquery']},
            'jquery.tablesorter': {deps: ['jquery']},
            'jquery.tmpl': {deps: ['jquery']}
        },
        paths: {
            'jquery':           '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
            'jquery.csv':       '//cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.71/jquery.csv-0.71.min',
            'jquery.tablesorter': '//cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.13.3/jquery.tablesorter.min',
            'jquery.tmpl':      '//ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min'
        }
    });

    require(['jquery', 'jquery.csv', 'jquery.tmpl', 'jquery.tablesorter'], function ($) {
        $(function () {
            $.ajax({
                url: './data/content.csv',
                dataType: 'text'
            }).then(function (csvText) {
                return $.Deferred(function (dfd) {
                    $.csv.toObjects(csvText, {}, function (err, data) {
                        return dfd.resolve(data);
                    });
                }).promise();
            }).done(function (data) {
                $('#tableTmpl').tmpl(data).appendTo('#tagList');
                $('.table').tablesorter();
            });
        });
    });
}());
