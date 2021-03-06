/**
 * grunt-phpdocumentor
 * https://github.com/gomoob/grunt-phpdocumentor
 *
 * Copyright (c) 2013 Baptiste Gaillard
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    
    // Internal lib.
    var phpDocumentor = require('./lib/phpdocumentor').init(grunt);
    
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('phpdocumentor', 'Runs the PHPDocumentor documentation generator tool.', function() {
        
        // This function setup the plugin, it create a string which represents the phpDocumentor command line to execute
        phpDocumentor.setup(this);
        
        // This function first checks if PHP is available on command line and the executes phpDocumentor
        phpDocumentor.checkPhp();

    });

};
