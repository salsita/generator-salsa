/*
 * generator-salsa
 * https://github.com/salsita/generator-salsa
 *
 * Copyright (c) 2013 Salsita Software
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Read package info.
    pkg: grunt.file.readJSON('package.json'),

    // Concatenate README.md.
    concat: {
      readme: {
        src: [
          'docs/about.md',
          'docs/features.md',
          'docs/getting-started.md',
          'docs/usage.md',
          'docs/options.md',
          'docs/contributing.md',
          'docs/roadmap.md',
          'CHANGELOG.md',
          'LICENSE.md',
        ],
        dest: 'README.md',
      },
    },

    // Lint sources.
    jshint: {
      all: [
        'Gruntfile.js',
        'app/*.js',
        'test/**/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/temp'],
    },

    // Unit tests.
    mochaTest: {
      options: {
        reporter: 'spec',
      },
      src: ['test/**/*.js'],
    },

    // Watch sources and run tests.
    delta: {
      js: {
        files: ['test/**', 'app/*.js', 'Gruntfile.js'],
        tasks: ['jshint', 'test'],
      },
      jshintrc: {
        files: ['.jshintrc'],
        tasks: ['jshint'],
      },
      readme: {
        files: ['docs/**.md', 'LICENSE.md', 'CHANGELOG.md'],
        tasks: ['concat:readme'],
      },

    },
  });

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'concat']);

  // On watch, run both default and delta (original watch).
  grunt.renameTask('watch', 'delta');
  grunt.registerTask('watch', ['default', 'delta']);

  // On test, do cleanup and then run Mocha tests.
  grunt.registerTask('test', ['clean', 'mochaTest']);

};
