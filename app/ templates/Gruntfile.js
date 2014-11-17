// Generated on 2014-10-23 using generator-bootstrap-less 3.2.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);
	// show elapsed time at the end
	require('time-grunt')(grunt);

	// configurable paths
	var yeomanConfig = {
		app: require('./bower.json').appPath || 'app',
		dist: 'dist'
	};

	grunt.initConfig({
		yeoman: yeomanConfig,
		watch: {
			bower: {
				files: ['bower.json'],
				tasks: ['bower:app']
			},
			less: {
				files: ['<%%= yeoman.app %>/{,*/}{,*/}*.less'],
				tasks: ['less', 'autoprefixer']
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			includereplace: {
				files: ['<%%= yeoman.app %>/{,*/}*.html'],
				tasks: ['includereplace:app']
			},
			sprite: {
				files: ['<%%= yeoman.app %>/img/i/*.png', '!<%%= yeoman.app %>/img/i/sprite.png'],
				tasks: ['clean:sprite', 'sprite']
			},
			livereload: {
				options: {
					livereload: '<%%= connect.options.livereload %>'
				},
				files: [
					'.tmp/{,*/}*.html',
					'{.tmp,<%%= yeoman.app %>}/{,*/}*.css',
					'{.tmp,<%%= yeoman.app %>}/js/{,*/}*.js',
					'<%%= yeoman.app %>/img/{,*/}*.{png,jpg,gif}'
				]
			}
		},

		connect: {
			options: {
				port: 9000,
				hostname: '0.0.0.0',
				livereload: 9001
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp/app',
						'<%%= yeoman.app %>'
					]
				}
			},
			dist: {
				options: {
					base: '<%%= yeoman.dist %>'
				}
			}
		},

		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp/*',
						'<%%= yeoman.dist %>/*',
						'!<%%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp/*',
			sprite: '<%%= yeoman.app %>/img/i/sprite.png'
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%%= yeoman.app %>/js/{,*/}*.js',
				'!<%%= yeoman.app %>/js/vendor/*'
			]
		},

		validation: {
			options: {
				reset: true,
				stoponerror: false,
				relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.']
			},
			files: {
				src: ['.tmp/app/*.html']
			}
		},

		includereplace: {
			options: {
				globals: {
					requirePath: 'require__development.html'
				}
			},
			files: {
				'.tmp/': ['<%%= yeoman.app %>/*.html']
			}
		},

		less: {
			dist: {
				files: {
					'<%%= yeoman.app %>/css/styles.css': ['<%%= yeoman.app %>/css/styles.less'],
				},
				options: {
					sourceMap: true,
					sourceMapFilename: '<%%= yeoman.app %>/css/styles.css.map',
					sourceMapBasepath: '<%%= yeoman.app %>/',
					sourceMapRootpath: '/'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 9', 'ios 7', 'Opera 12.1']
			},
			files: {
				'<%%= yeoman.app %>/css/styles.css': ['<%%= yeoman.app %>/css/styles.less'],
			}
		},

		useminPrepare: {
			html: [
				'<%= yeoman.app %>/include/header.html',
				'<%= yeoman.app %>/include/footer.html'
			],
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},

		rev: {
			dist: {
				files: {
					src: [
						'<%%= yeoman.dist %>/js/{,*/}*.js',
						'<%%= yeoman.dist %>/css/{,*/}*.css'
					]
				}
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%%= yeoman.app %>/img',
					src: '{,*/}{,*/}*.{png,jpg,jpeg}',
					dest: '<%%= yeoman.dist %>/img'
				}]
			}
		},

		htmlmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/app',
					src: '*.html',
					dest: '<%%= yeoman.dist %>'
				}]
			}
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%%= yeoman.app %>',
					dest: '<%%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'styles.css',
						'template_styles.css',
						'fonts/{,*/}*.*',
						'.htaccess',
						'img/{,*/}*.{webp,gif}'
					]
				}, {
					expand: true,
					dot: true,
					cwd: '.tmp/',
					dest: '<%%= yeoman.dist %>/js',
					src: [
						'main.js'
					]
				}, {
					expand: true,
					dot: true,
					cwd: '<%%= yeoman.app %>/js/vendor/',
					dest: '<%%= yeoman.dist %>/js/vendor/',
					src: [
						'*',
						'!multifile.js'
					]
				}]
			},
			server: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%%= yeoman.app %>/bower_components/requirejs/',
					dest: '<%%= yeoman.app %>/js/vendor/',
					src: [
						'require.js'
					]
				}, {
					expand: true,
					dot: true,
					cwd: '<%%= yeoman.app %>/bower_components/es5-shim/',
					dest: '<%%= yeoman.app %>/js/vendor/',
					src: [
						'es5-shim.js'
					]
				}, {
					expand: true,
					dot: true,
					cwd: '<%%= yeoman.app %>/bower_components/json3/lib/',
					dest: '<%%= yeoman.app %>/js/vendor/',
					src: [
						'json3.js'
					]
				}]
			}
		},
		concurrent: {
			dist: [
				'imagemin',
				'htmlmin'
			]
		},
		sprite: {
			'all': {
				// Sprite files to read in
				'src': ['<%%= yeoman.app %>/img/i/*.png'],

				// Location to output spritesheet
				'destImg': '<%%= yeoman.app %>/img/i/sprite.png',

				// Stylus with variables under sprite names
				'destCSS': '<%%= yeoman.app %>/less/icons/icons.less',

				'cssTemplate': '<%%= yeoman.app %>/less/icons/icons.template.mustache',

				// OPTIONAL: Manual override for imgPath specified in CSS
				'imgPath': '@{icon-path}sprite.png',

				// OPTIONAL: Specify algorithm (top-down, left-right, diagonal [\ format],
						// alt-diagonal [/ format], binary-tree [best packing])
				// Visual representations can be found below
				'algorithm': 'binary-tree',

				// OPTIONAL: Specify padding between images
				'padding': 2,

				// OPTIONAL: Specify engine (auto, phantomjs, canvas, gm, pngsmith)
				'engine': 'auto',

				// OPTIONAL: Specify CSS format (inferred from destCSS' extension by default)
						// (stylus, scss, scss_maps, sass, less, json, json_array, css)
				'cssFormat': 'css',

				// OPTIONAL: Specify settings for algorithm
				'algorithmOpts': {
					// Skip sorting of images for algorithm (useful for sprite animations)
					'sort': false
				},

				// OPTIONAL: Specify settings for engine
				'engineOpts': {
					'imagemagick': true
				},

				// OPTIONAL: Specify img options
				'imgOpts': {
					 // Format of the image (inferred from destImg' extension by default) (jpg, png)
					 'format': 'png',

					 // gm only: Quality of image
					 'quality': 90,

					 // phantomjs only: Milliseconds to wait before terminating PhantomJS script
					 'timeout': 10000
				}
			}
		},

		<% if (reqirejs) { %>bower: {
			app: {
				rjsConfig: '<%%= yeoman.app %>/js/main.js',
				options: {
					exclude: ['requirejs', 'json3', 'es5-shim']
				}
			}
		},
		requirejs: {
			dist: {
				options: {
					dir: '.tmp',
					modules: [{
						name: 'main'
					}],
					preserveLicenseComments: true, // remove all comments
					removeCombined: true,
					baseUrl: '<%%= yeoman.app %>/js',
					mainConfigFile: '<%%= yeoman.app %>/js/main.js',
					optimize: 'none',
					uglify2: {
						mangle: true
					}
				}
			}
		},
		ngAnnotate: {
			dist: {
				files: [{
					expand: true,
					src: ['<%%= yeoman.app %>/js/**/*.js', '!<%%= yeoman.app %>/js/oldieshim.js'],
					dest: '.tmp'
				}]
			}
		},
		uglify: {
			custom: {
				files: [{
					expand: true,
					cwd: '<%%= yeoman.dist %>/js/vendor',
					src: 'require.js',
					dest: '<%%= yeoman.dist %>/js/vendor'
				}]
			}
		},<% } %>


	});

	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'clean:sprite',
			'bower:app',
			'sprite',
			'less',
			'autoprefixer',
			'includereplace:app',
			'copy:server',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});


	grunt.registerTask('test', [
		'clean:server',
		'clean:sprite',
		'sprite',
		'less',
		'autoprefixer',
		'includereplace:dist',
		'copy:server',
		'validation'
	]);


	grunt.registerTask('build', [
		'clean:dist',
		'copy:server',
		'bower:app',
		'ngAnnotate',
		'requirejs:dist',
		'includereplace:dist',
		'less',
		'autoprefixer',
		'concurrent',
		'copy',
		'uglify:custom'
	]);

	grunt.registerTask('default', [
		'jshint',
		'test',
		'build'
	]);
};
