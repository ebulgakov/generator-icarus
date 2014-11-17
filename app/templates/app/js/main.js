'use strict';

function Yeoman () {
	this.welcome = '';
}

Yeoman.prototype.say = function() {
	console.log(this.welcome);
};

var site = new Yeoman();
site.welcome = 'Hello World!';
site.say();
