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

	// Highlight
	hljs.initHighlightingOnLoad(),

	new Clipboard('#copy-cpf'),

	$('#cpf-validacao').mask('999.999.999-99')

);
