/*!*************************************************************************************************
 * pbk-custom.js
 * -------------------------------------------------------------------------------------------------
 * SUMMARY: JS code specific to the WSU Phi Beta Kappa website.
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
// §1: Execution entry point...................................................................34
// §2: Addition of page headers to news websites...............................................58
////////////////////////////////////////////////////////////////////////////////////////////////////

/* -------------------------------------------------------------------------------------------------
** §1: Execution entry point
*/

/**
 * IIFE for main execution.
 */
( function ( $ ) {

"use strict";

/**
 * jQuery call for executing statements after the DOM has loaded.
 */
$( function () {
	// Tweak HTML source to work around some quirks of WordPress setup
	var htmlNewsHeader = '<section id="news-section-header" class="row single article-header'
		+ ' article-header--colored h--192px"><div style="" class="column one black-back"><div'
		+ ' class="gray-er-text wrapper"><ol class="breadcrumb-list"><li'
		+ ' class="breadcrumb-list__breadcrumb"><a class="breadcrumb-list__link"'
		+ ' href="/">Home</a></li></ol><h1 class="tt--uppercase">News</h1></div></div></section>';
	addPageHeaderOnNewsPages( htmlNewsHeader );
} );

/* -------------------------------------------------------------------------------------------------
** §2: Addition of page headers to news websites
*/

/**
 * Inspect the body tag to add a header to news pages when certain classes are in use.
 *
 * @param {String} htmlNewsHeader - The HTML comprising the page header to be added to the DOM.
 */
function addNewsHeaderViaClassUtilization( htmlNewsHeader ) {
	var $body = $( 'body' ).first();
	if ( $body.hasClass( 'single-post' ) || ( $body.hasClass( 'archive' ) &&
			( $body.hasClass( 'category' ) ||  $body.hasClass( 'tag' ) ) ) ) {
		$body.find( '.column.one' ).first().parent( '.row' ).before( htmlNewsHeader );
	}
}

/**
 * Use the browser's location to add a header to news pages.
 *
 * @param {String} htmlNewsHeader - The HTML comprising the page header to be added to the DOM.
 */
function addNewsHeaderViaLocation( htmlNewsHeader ) {
	var siteURL = window.location.pathname;
	switch( siteURL ) {
		case '/news/':
			$( '.column.one' ).first().parent( '.row' ).before( htmlNewsHeader );
			break;
	}	
}

/**
 * Add page headers to news pages.
 *
 * @param {String} htmlNewsHeader - The HTML comprising the page header to be added to the DOM.
 */
function addPageHeaderOnNewsPages( htmlNewsHeader ) {
	addNewsHeaderViaLocation( htmlNewsHeader );
	addNewsHeaderViaClassUtilization( htmlNewsHeader );
}

} )( jQuery );
