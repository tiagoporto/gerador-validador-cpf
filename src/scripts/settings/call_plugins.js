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

    // outdatedBrowser({
    //     bgColor: '#f25648',
    //     color: '#ffffff',
    //     lowerThan: 'transform',
    //     languagePath: 'lang/outdated_browser/{-}.html'
    // }),

	//$('#logo').downloadTip({ 'position': 'right' })
	$('#cpf-validacao').mask('000.000.000-00')

);
