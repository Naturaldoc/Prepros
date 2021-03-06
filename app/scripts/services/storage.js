/**
 * Prepros
 * (c) Subash Pathak
 * sbshpthk@gmail.com
 * License: MIT
 */

/*jshint browser: true, node: true*/
/*global prepros,  _, angular, $ */

//Storage
prepros.factory('storage', function (notification, config) {

    'use strict';

	var fs = require('fs-extra'),
        path = require('path');

	//function to save files list
	function saveFiles(files) {

        localStorage.PreprosFiles = angular.toJson(files, false);
	}

	//Function to save project list to json
	function saveProjects(projects) {

        localStorage.PreprosProjects = angular.toJson(projects, false);

	}

	//Function to save imports list to json
	function saveImports(imports) {

        localStorage.PreprosImports = angular.toJson(imports, false);
	}

	//Get projects list from projects.json file
	function getProjects() {

        return $.parseJSON(localStorage.PreprosProjects || '[]');
	}

	//Get files list from files.json file
	function getFiles() {

        return $.parseJSON(localStorage.PreprosFiles || '[]');
	}

	//Get files from files.json file
	function getImports() {

        return $.parseJSON(localStorage.PreprosImports || '[]');
	}

	//Return projects list and files list
	return {

		getProjects : getProjects,
		saveProjects: saveProjects,

		getFiles    : getFiles,
		saveFiles   : saveFiles,

		getImports  : getImports,
		saveImports : saveImports
	};
});