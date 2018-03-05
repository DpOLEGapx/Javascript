document.addEventListener('DOMContentLoaded', function(){
	
	// 1. Действие при клике вне объекта
	document.addEventListener("click", function() { 
		var item = document.getElementById("test");
		item.parentNode.removeChild(item);
	});

	document.getElementById("test").addEventListener("click", function(e) { 
		e.stopPropagation();
	});
	
});