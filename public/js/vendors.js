// Google Analytics: change UA-XXXXX-X to be your site's ID.

(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-32351360-4', 'auto');
ga('send', 'pageview');


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

	// Highlight
	hljs.initHighlightingOnLoad(),

	new Clipboard('#copy-cpf'),

	$('#cpf-validacao').mask('999.999.999-99')

);
