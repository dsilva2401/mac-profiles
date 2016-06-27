var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var shell = require('shelljs');

inquirer.prompt([
	{
		type: 'list',
		name: 'profile',
		message: 'Choose a profile',
		choices: fs.readdirSync(path.join(__dirname, './profiles'))
	}
]).then(function (answers) {
	console.log('Openning profile:', answers.profile.split('.')[0]);
	shell.exec('node '+path.join(__dirname, 'profiles', answers.profile));
});