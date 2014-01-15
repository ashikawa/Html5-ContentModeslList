/*jslint node:true, nomen:true, unparam:true*/
/*global module*/

module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        'closure-compiler': {
            'production': {
                'closurePath': '/usr/local/opt/closure-compiler/libexec/',
                'js': 'js/src/main.js',
                'jsOutputFile': 'js/main.js',
                'options': {}
            }
        },
        'less': {
            'production': {
                'files': {
                    'css/style.css': 'less/style.less'
                },
                'options': {
                    'paths': ['less'],
                    'compress': true
                }
            }
        },
        'watch': {
            'js': {
                'files': ['js/src/*.js'],
                'tasks': ['closure-compiler']
            },
            'less': {
                'files': 'less/*.less',
                'tasks': ['less']
            }
        }
    });

    grunt.registerTask('default', ['closure-compiler', 'less']);
};
