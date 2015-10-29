module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
          server: {
            options: {
                port: process.env.PORT || 9000,
                base: 'client',
                hostname: '0.0.0.0',
                livereload: 35270
            }
          }
        },
        watch: {
            css: {
                files: [
                    '**/*.sass',
                    '**/*.css'
                ],
                tasks: ['sass']
            },
            js: {
                files: [
                    'client/js/**/*.js',
                    'client/js/*.js'
                ],
                tasks: ['jshint']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'client/js/*.js', 'client/js/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('serve', ['connect', 'watch']);
}
