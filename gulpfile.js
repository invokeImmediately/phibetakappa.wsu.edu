/*!*************************************************************************************************
 * gulpfile.js
 * -------------------------------------------------------------------------------------------------
 * SUMMARY: Gulp automation task definition file for setting up tasks that build CSS and JS
 * files for use on the WSUWP website of the WSU Phi Beta Kappa website.
 *
 * DESCRIPTION: This gulp automation task definition file is designed for use on the following
 *   project that is maintained on GitHub:
 *   https://github.com/invokeImmediately/phibetakappa.wsu.edu
 *
 * AUTHOR: Daniel Rieck [daniel.rieck@wsu.edu] (https://github.com/invokeImmediately)
 *
 * LICENSE: ISC - Copyright (c) 2020 Daniel C. Rieck.
 *
 *   Permission to use, copy, modify, and/or distribute this software for any purpose with or
 *   without fee is hereby granted, provided that the above copyright notice and this permission
 *   notice appear in all copies.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS" AND DANIEL C. RIECK DISCLAIMS ALL WARRANTIES WITH REGARD TO
 *   THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT
 *   SHALL DANIEL C. RIECK BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR
 *   ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF
 *   CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 *   PERFORMANCE OF THIS SOFTWARE.
 **************************************************************************************************/

////////////////////////////////////////////////////////////////////////////////////////////////////
// TABLE OF CONTENTS
// -----------------
// §1: Gulp task dependencies..................................................................42
// §2: Specificiation of build settings .......................................................47
//   §2.1: getCssBuildSettings()...............................................................50
//   §2.2: getJsBuildSettings()...............................................................105
// §3: Entry point: Set up of build taks......................................................137
////////////////////////////////////////////////////////////////////////////////////////////////////

( function() {

'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////
// §1: Gulp task dependencies

var gulpBuilder = require( './WSU-UE---JS/gulpBuilder.js' );

////////////////////////////////////////////////////////////////////////////////////////////////////
// §2: Specificiation of build settings 

////////
// §2.1: getCssBuildSettings()

/**
 * Get the settings for a gulp-mediated custom CSS build from Less source files.
 *
 * @return {object} - Instance of gulpBuilder.CssBuildSettings.
 */
function getCssBuildSettings() {
	var commentRemovalNeedle = /^(?:[ \t]*)?\/\*[^!].*$\n(?:^\*\*?[^/].*$\n)*\*\*?\/\n\n?/gm;
	var dependenciesPath = './WSU-UE---CSS/';
	var destFolder = './CSS/';
	var fontImportStr = '@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:300,300i' +
		',400,400i,600,600i,700,700i|Roboto+Condensed:400,400i,700,700i|Cormorant+Garamond:300,30' +
		'0i,400,400i,700,700i|Roboto+Mono:400,400i,700,700i&display=swap\');\r\n';
	var insertingMediaQuerySectionHeader = {
			'before': /^@media/,
			'lineBefore': '/*! ==================================================================' +
				'==============================\r\n*** Media queries section\r\n*** =============' +
				'================================================================================' +
				'===\r\n*** SUMMARY: Media queries built from precompiled CSS written in the Less' +
				' language extension of\r\n***   CSS. Queries in this section are a combination o' +
				'f those designed for use on DAESA websites\r\n***   and those intended specifica' +
				'lly for use on the WSU Phi Beta Kappa website.\r\n***\r\n*** DESCRIPTION: Fully ' +
				'documented, precompiled source code from which this section of the custom\r\n***' +
				'   stylesheet was built is developed and maintained on the following two GitHub ' +
				'projects:\r\n***   https://github.com/invokeImmediately/WSU-UE---CSS/\r\n***   h' +
				'ttps://github.com/invokeImmediately/phibetakappa.wsu.edu/\r\n***\r\n*** AUTHOR: ' +
				'Daniel Rieck [daniel.rieck@wsu.edu] (https://github.com/invokeImmediately)\r\n**' +
				'*\r\n*** LICENSE: ISC - Copyright (c) 2020 Daniel C. Rieck.\r\n***\r\n***   Perm' +
				'ission to use, copy, modify, and/or distribute this software for any purpose wit' +
				'h or\r\n***   without fee is hereby granted, provided that the above copyright n' +
				'otice and this permission\r\n***   notice appear in all copies.\r\n***\r\n***   ' +
				'THE SOFTWARE IS PROVIDED "AS IS" AND DANIEL C. RIECK DISCLAIMS ALL WARRANTIES WI' +
				'TH REGARD TO\r\n***   THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANT' +
				'ABILITY AND FITNESS. IN NO EVENT\r\n***   SHALL DANIEL C. RIECK BE LIABLE FOR AN' +
				'Y SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR\r\n***   ANY DAMAGES WH' +
				'ATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF\r' +
				'\n***   CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONN' +
				'ECTION WITH THE USE OR\r\n***   PERFORMANCE OF THIS SOFTWARE.\r\n*** ===========' +
				'================================================================================' +
				'=====\r\n**/',
			'stopAfterFirstMatch': true
		};
	var minCssFileExtension = '.min.css';
	var minCssFileHeaderStr = '/*! Built with the Less CSS preprocessor [http://lesscss.org/]. Plea\
se see [https://github.com/invokeImmediately/phibetakappa.wsu.edu] for a repository of source code.\
 */\r\n';
 	var sourceFile = './CSS/pbk-custom.less';

	return new gulpBuilder.CssBuildSettings(commentRemovalNeedle, dependenciesPath,
 		destFolder, fontImportStr, insertingMediaQuerySectionHeader, minCssFileExtension,
 		minCssFileHeaderStr, sourceFile);
}

////////
// §2.2: getJsBuildSettings()

/**
 * Get the settings for a gulp-mediated custom JS build.
 *
 * @return {object} - Simple collection of settings for JS builds.
 */
function getJsBuildSettings() {
	return {
		buildDependenciesList: [
			'./WSU-UE---JS/jQuery.oue-custom.js',
			'./WSU-UE---JS/jQuery.cookieObjs.js',
			'./WSU-UE---JS/jQuery.css-data.js',
			'../jQuery.AreYouSure/jquery.are-you-sure.js',
			'./WSU-UE---JS/jQuery.are-you-sure.js',
			'./WSU-UE---JS/jQuery.forms.js',
			'./WSU-UE---JS/jquery.media.js',
			'../qTip2/dist/jquery.qtip.min.js',
			'./WSU-UE---JS/jQuery.qTip.js',
			'./WSU-UE---JS/jQuery.textResize.js',
			'./WSU-UE---JS/jQuery.masonry-custom.js',
			'./JS/pbk-custom.js'
		],
		commentNeedle: /^(\/\*)(?!!)/g,
		compiledJsFileName: 'pbk-build.js',
		destFolder: './JS/',
		minJsFileExtension: '.min.js',
		replaceCallback: gulpBuilder.fixFileHeaderComments
	};
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// §3: Entry point: Set up of build taks

gulpBuilder.setUpCssBuildTask( getCssBuildSettings() );
gulpBuilder.setUpJsBuildTask( getJsBuildSettings() );

} )();