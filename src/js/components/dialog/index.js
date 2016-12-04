(function(){
	require('./dialog.css');
	var html = require('./dialog.html');

	module.exports=function(text){
		$('body').append(html);
		$('.dialog>span').last().text(text);
	};
})();