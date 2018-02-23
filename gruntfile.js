module.exports = function(grunt) {

    grunt.initConfig({       
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['main.sass'],
                    dest: 'css',
                    ext:'.css'
                }]
            }
        },
        
        postcss: {
            options: {
                map: {
                  inline: false 
                },        
                processors: [
                    require('pixrem')(), 
                    require('autoprefixer')({ browsers: 'last 2 versions' }), 
                    require('cssnano')() 
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', "!*.min.css"],
                    dest: 'css',
                    ext:'.min.css'
                }]
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.{png,jpg,jpeg,gif}'],
                    dest: 'img'
                }]
            }
        },
        
        jshint: {
            all: ['js/*.js', '!js/*.min.js']
        },

        watch: {
            sass: {
                files: ['sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: true,
                },
            },

            css: {
                files: ['css/*.css', '!css/*.min.css'],
                tasks: ['postcss:dist'],
                options: {
                    spawn: true,
                },
            },

            scripts: {
                files: ['js/**/*.js', '!js/**/*.min.js'],
                tasks: ['jshint'],
                options: {
                    spawn: true,
                },
            },

        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : ['css/*.css','*.html','*.css', 'js/*.js']
                },
                options: {
                    spawn: false,
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browser-sync');
    
    grunt.registerTask('default', ['sass', 'jshint', 'postcss:dist', 'browserSync', 'imagemin', 'watch']);
};