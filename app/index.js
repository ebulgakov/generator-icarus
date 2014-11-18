'use strict';
var util = require('util');
var path = require('path');
var fs = require('fs');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var IcarusGenerator = module.exports = function IcarusGenerator (args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'main.html'));

	this.on('end', function () {

		if (!this.options['skip-install']) {
			this.installDependencies({
				skipMessage: options['skip-install-message'],
				skipInstall: options['skip-install']
			});
		}

		fs.symlinkSync('../bower_components', 'app/include/bower_components', 'dir');
		fs.symlinkSync('../css', 'app/include/css', 'dir');
		fs.symlinkSync('../img', 'app/include/img', 'dir');
		fs.symlinkSync('../js', 'app/include/js', 'dir');
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(IcarusGenerator, yeoman.generators.Base);

IcarusGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// welcome message
	if (!this.options['skip-welcome-message']) {
		this.log(require('yosay')());
		this.log(chalk.magenta(
			'Out of the box I include HTML5 Boilerplate, Bootstrap with less, and a ' +
			'Gruntfile.js to build your app.'
		));
	}

	var prompts = [{
		type: 'checkbox',
		name: 'features',
		message: 'What more would you like?',
		choices: [
			{
				name: 'Bootstrap',
				value: 'bootstrap',
				checked: true
			},
			{
				name: 'FontAwesome',
				value: 'fontawesome',
				checked: false
			},
			{
				name: 'Less Map',
				value: 'lessmap',
				checked: false
			}
		]
	}];

	this.prompt(prompts, function (answers) {
		var features = answers.features;

		function hasFeature(feat) {
			return features && features.indexOf(feat) !== -1;
		}

		this.bootstrap = hasFeature('bootstrap');
		this.fontawesome = hasFeature('fontawesome');
		this.lessmap = hasFeature('lessmap');

		cb();
	}.bind(this));
};

IcarusGenerator.prototype.gruntfile = function gruntfile() {
	this.template('Gruntfile.js');
};

IcarusGenerator.prototype.packageJSON = function packageJSON() {
	this.template('_package.json', 'package.json');
};

IcarusGenerator.prototype.git = function git() {
	this.copy('gitignore', '.gitignore');
	this.copy('gitattributes', '.gitattributes');
};

IcarusGenerator.prototype.bower = function bower() {
	this.copy('bowerrc', '.bowerrc');
	this.copy('_bower.json', 'bower.json');
};

IcarusGenerator.prototype.jshint = function jshint() {
	this.copy('jshintrc', '.jshintrc');
};

IcarusGenerator.prototype.editorConfig = function editorConfig() {
	this.copy('editorconfig', '.editorconfig');
};

IcarusGenerator.prototype.mainStylesheet = function mainStylesheet() {
	var css = '\n@import "box/_";\n@import "elem/_";\n@import "form/_";\n@import "icons/_";\n@import "list/_";\n@import "nav/_";\n@import "plugins/_";';
	var bsPath = '';
	var deps = '';

	deps += '@icon-path: "../img/i/";\n';
	deps += '@img-path: "../img/d/";\n';

	if (this.fontawesome) {
		deps += '@fa-font-path: "../fonts/font-awesome";\n';
		bsPath += '@import "../bower_components/font-awesome/less/font-awesome";\n';
	}

	if (this.bootstrap) {
		deps += '@icon-font-path: "../fonts/glyphicons/";\n';
		bsPath += '@import "../bower_components/bootstrap/less/bootstrap";\n@import "bootstrap/variables";\n';
		this.write('app/css/bootstrap/variables.less', deps);
	} else {
		bsPath += '@import (css) "../bower_components/normalize.css/normalize.css";\n@import "system/bootstrap";\n';
		this.write('app/css/system/variables.less', deps);

		var customBs = '@import "variables";\n@import "mixins";\n@import "structure";\n@import "type";\n@import "utilities";\n';
		this.write('app/css/system/bootstrap.less', customBs);
	}


	this.write('app/css/styles.less', bsPath + css);
};

IcarusGenerator.prototype.writeIndex = function writeIndex() {
	// prepare default content text
	var defaults = ['HTML5 Boilerplate', 'Bootstrap'];
	var contentText = [
		'<div class="container">',
		'	<div class="jumbotron">',
		'		<h1><i class="icon-yeoman"></i> \'Allo, \'Allo!</h1>',
		'		<p>You now have</p>',
		'		<ul>'
	];



	if (this.fontawesome) {
		defaults.push('Font Awesome <i class="fa fa-flag"></i>');
	}


	// iterate over defaults and create content string
	defaults.forEach(function (el) {
		contentText.push('			<li>' + el  + '</li>');
	});

	contentText = contentText.concat([
		' 		</ul>',
		'		<p>installed.</p>',
		'		<h3>Enjoy coding! - Yeoman</h3>',
		'	</div>',
		'</div>'
	]);

	// append the default content
	this.indexFile = this.indexFile.replace('<div class="container"></div>', contentText.join('\n'));

};

IcarusGenerator.prototype.app = function app() {
	this.directory('app');
	this.write('app/main.html', this.indexFile);

	if (!this.bootstrap) {
		this.write('app/css/system/mixins.less', '/* Mixins */\n\n');
		this.write('app/css/system/structure.less', '/* Custom structure Cols */\n\n');
		this.write('app/css/system/type.less', '/* Typography */\n\n');
		this.write('app/css/system/utilities.less', '/* Utilities Classes */\n\n');
	}
};
