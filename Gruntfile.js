module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                files: {
                    'assets/css/st-bt.css': 'less/smiletrain-bootstrap.less'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
                }]
            }
        },
        compress: {
          main: {
            options: {
              mode: 'zip',
              archive: 'smiletrain.zip'
            },
            files: [ {
              src: ['assets/**'],
              dest: '/'
            }
            ]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compress');


    // Default task(s).
    grunt.registerTask('default', ['less', 'cssmin', 'compress']);

};
