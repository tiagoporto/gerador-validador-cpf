//event listener: DOM ready
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}
addLoadEvent(
	//call plugins after DOM ready

	hljs.initHighlightingOnLoad(),

	new Clipboard('.generate-section__copy-button, .format-section__copy-button'),

	$('#validate-section__input--to-format').mask('999.999.999-99')
);
