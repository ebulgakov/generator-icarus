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
				files: [
					'<%%= yeoman.app %>/css/{,*/}*.less'
				],
				tasks: ['less_imports', 'less', 'autoprefixer']
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
					sourceMap: <% if (lessmap) { %>true<% } else { %>false<% } %>,
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
				'src': ['<%%= yeoman.app %>/img/i/*.png'],
				'dest': ['<%%= yeoman.app %>/img/i/sprite.png',
				'destCss': ['<%%= yeoman.app %>/css/icons/_.less',
				'imgPath': '@{icon-path}sprite.png',
				'algorithm': 'binary-tree',
				'padding': 2,
				'cssTemplate': '<%%= yeoman.app %>/css/icons/icons.template.mustache',
				'engineOpts': {
					'imagemagick': true
				},
				'cssFormat': 'css',
				'imgOpts': {
					 'format': 'png',
					 'quality': 90,
					 'timeout': 10000
				}
			}
		},
		/*jshint camelcase: false */
		less_imports: { /*jshint camelcase: true */
			options: {
				banner: '// The file is automatically generated'
			},
			make: {
				files: [
					{
						src:  '<%%= yeoman.app %>/css/box/*',
						dest: '<%%= yeoman.app %>/css/box/_.less'
					},
					{
						src:  '<%%= yeoman.app %>/css/elem/*',
						dest: '<%%= yeoman.app %>/css/elem/_.less'
					},
					{
						src:  '<%%= yeoman.app %>/css/form/*',
						dest: '<%%= yeoman.app %>/css/form/_.less'
					},
					{
						src:  '<%%= yeoman.app %>/css/list/*',
						dest: '<%%= yeoman.app %>/css/list/_.less'
					},
					{
						src:  '<%%= yeoman.app %>/css/nav/*',
						dest: '<%%= yeoman.app %>/css/nav/_.less'
					},
					{
						src:  '<%%= yeoman.app %>/css/plugins/*',
						dest: '<%%= yeoman.app %>/css/plugins/_.less'
					}
				]
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
			'less_imports',
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
		'includereplace',
		'jshint',
		'validation'
	]);


	grunt.registerTask('build', [
		'clean',
		'copy:server',
		'includereplace',
		'useminPrepare',
		'sprite',
		'less_imports',
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
