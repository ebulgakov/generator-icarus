'use strict';
var path = require('path');
var assert = require('assert');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var _ = require('underscore');

describe('Icarus generator', function () {
	// not testing the actual run of generators yet
	it('the generator can be required without throwing', function () {
		this.app = require('../app');
	});

	describe('run test', function () {

		var expectedContent = [
			['bower.json', /"name": "tmp"/],
			['package.json', /"name": "tmp"/]
		];
		var expected = [
			'Gruntfile.js',
			'package.json',
			'.gitignore',
			'.gitattributes',
			'.bowerrc',
			'bower.json',
			'.jshintrc',
			'.editorconfig',
			'app/css/styles.less',
			'app/.htaccess',
			'app/404.html',
			'app/css/icons/icons.template.mustache',
			'app/favicon.ico',
			'app/img/i/icon-yeoman.png',
			'app/include/footer.html',
			'app/include/header.html',
			'app/js/main.js',
			'app/robots.txt',
			'app/main.html'
		];

		var options = {
			'skip-install-message': true,
			'skip-install': true,
			'skip-welcome-message': true,
			'skip-message': true
		};

		var runGen;

		beforeEach(function () {
			runGen = helpers
				.run(path.join(__dirname, '../app'))
				.inDir(path.join(__dirname, '.tmp'))
				.withGenerators([[helpers.createDummyGenerator(), 'mocha:app']]);
		});

		it('creates expected files', function (done) {
			runGen.withOptions(options).on('end', function () {

				assert.file([].concat(
					expected,
					'app/css/system/variables.less',
					'app/css/system/bootstrap.less',
					'app/css/system/mixins.less',
					'app/css/system/structure.less',
					'app/css/system/type.less',
					'app/css/system/utilities.less'
				));
				assert.noFile([
					'app/css/bootstrap/variables.less'
				]);

				assert.fileContent(expectedContent);
				assert.noFileContent([
          ['Gruntfile.js', /bootstrap/],
          ['app/main.html', /bootstrap/],
          ['bower.json', /bootstrap/]
        ]);
				done();
			});
		});

		it('creates expected bootstrap components', function (done) {
			runGen.withOptions(options).withPrompt({features: ['bootstrap']})
			.on('end', function () {
				assert.file([].concat(
					expected,
					'app/css/bootstrap/variables.less'
				));
				assert.noFile([
					'app/css/system/variables.less',
					'app/css/system/bootstrap.less',
					'app/css/system/mixins.less',
					'app/css/system/structure.less',
					'app/css/system/type.less',
					'app/css/system/utilities.less'
				]);
				done();
			});
		});
	});
});
