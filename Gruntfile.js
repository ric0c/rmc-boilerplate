module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			appStyles: {
				options: {
					style: 'compact'
				}, 
				files: {
					'style.dev.css': 'css/main.sass'
				}
			},
  		appStylesMinified: {
  			options: {
  				style: 'compressed',
  				sourcemap: 'none'
  			}, 
  			files: {
  				'style.css': 'style.dev.css'
  			}
  		}
		},

		watch: {
			css: {
				files: ['css/**/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		},

		copy: {
			main: {
				src: 'bower_components/jquery/dist/jquery.min.js',
				dest: 'js/jquery.min.js',
			},
		},

		concat: {
			dist: {
				src: ['js/html5shiv.js', 'js/jquery.min.js'],
				dest: 'js/framework-files.js',
			},
		},

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['copy', 'concat', 'sass', 'watch']);

};