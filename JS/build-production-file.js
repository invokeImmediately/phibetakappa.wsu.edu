/* NODE.JS - Build Production JavaScript File */
var concat = require('../../../../AppData/Roaming/npm/node_modules/concat-files');
concat([
 './dsp-custom.js',
 '../WSU-UE---JS/jQuery.oue-custom.js',
 '../WSU-UE---JS/jQuery.cookieObjs.js',
 '../WSU-UE---JS/jQuery.forms.js',
 '../WSU-UE---JS/jQuery.are-you-sure.js',
 '../WSU-UE---JS/jQuery.qTip.js',
 '../WSU-UE---JS/jQuery.textResize.js',
 '../WSU-UE---JS/jQuery.masonry.min.js'
 ], './pbk-custom.js', function() {
    console.log('Concatenation complete.');     
 });
 