// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
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
			less: {
				files: ['<%%= yeoman.app %>/css/{,*/}*.less'],
				tasks: ['less', 'autoprefixer']
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			includereplace: {
				files: ['<%%= yeoman.app %>/{,*/}*.html'],
				tasks: ['includereplace']
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
					'{.tmp,<%%= yeoman.app %>}/css/{,*/}*.css',
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
						'.tmp',
						'<%%= yeoman.dist %>/*',
						'!<%%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp',
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
				}
			},
			files: {
				src: '<%%= yeoman.app %>/*.html', // Source files
				dest: '.tmp/', // Destination directory
			}
		},
		less: {
			server: {
				files: {
					'<%%= yeoman.app %>/css/styles.css': ['<%%= yeoman.app %>/css/styles.less']
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
			/* jshint camelcase:false */
			single_file: {
				src: '<%%= yeoman.app %>/css/styles.css',
				dest: '<%%= yeoman.app %>/css/styles.css'
			}
			/* jshint camelcase:true */
		},
		useminPrepare: {
			html: [
				'<%%= yeoman.app %>/about.html',
				'<%%= yeoman.app %>/include/header.html',
				'<%%= yeoman.app %>/include/footer.html'
			],
			options: {
				dest: '<%%= yeoman.dist %>'
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
		usemin: {
			html: ['<%%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%%= yeoman.dist %>/css/{,*/}*.css'],
			options: {
				dirs: ['<%%= yeoman.dist %>']
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
		cssmin: {
			dist: {
				files: {
					'<%%= yeoman.dist %>/css/styles.css': [
						'<%%= yeoman.app %>/css/{,*/}*.css'
					]
				}
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
		uglify: {
			custom: {
				files: [{
					expand: true,
					cwd: '<%%= yeoman.dist %>/js/vendor',
					src: '*.js',
					dest: '<%%= yeoman.dist %>/js/vendor'
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
						'fonts/{,*/}*.*',
						'.htaccess',
						'images/{,*/}*.{webp,gif}'
					]
				}, {
					expand: true,
					dot: true,
					cwd: '.tmp/concat/js',
					dest: '<%%= yeoman.dist %>/js',
					src: [
						'{,*/}*'
					]
				}]
			},
			server: {
				files: [<% if (fontawesome) { %>
					{
						expand: true,
						dot: true,
						cwd: '<%%= yeoman.app %>/bower_components/font-awesome/fonts/',
						dest: '<%%= yeoman.app %>/fonts/font-awesome',
						src: ['*']
					}, <% } %><% if (bootstrap) { %>
					{
						expand: true,
						dot: true,
						cwd: '<%%= yeoman.app %>/bower_components/bootstrap/dist/fonts/',
						dest: '<%%= yeoman.app %>/fonts/glyphicons',
						src: ['*']
					}, <% } %>
				]
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
				'destCSS': '<%%= yeoman.app %>/css/icons/icons.less',

				'cssTemplate': '<%%= yeoman.app %>/css/icons/icons.template.mustache',

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
		}
	});

	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'clean:sprite',
			'sprite',
			'less',
			'autoprefixer',
			'includereplace',
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
		'includereplace',
		'copy:server',
		'validation'
	]);


	grunt.registerTask('build', [
		'clean:dist',
		'copy:server',
		'includereplace',
		'useminPrepare',
		'less',
		'autoprefixer',
		'concurrent',
		'cssmin',
		'concat',
		'copy',
		'usemin',
		'uglify:custom'
	]);

	grunt.registerTask('default', [
		'jshint',
		'test',
		'build'
	]);
};
