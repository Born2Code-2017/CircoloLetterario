var menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', function(e) {
    var menuNav = document.querySelector('#menuNav');
    menuNav.classList.toggle('change1');
    menuButton.classList.toggle('change');
    e.stopPropagation();
});

(function () {
	
	var App =  {	
		users : [],
		currentEventiIdx : 0,
		
		eventHadler : function () 
		{
		},

		init : function () 
		{
			App.eventHadler();
		}		
	}
	$(document).ready(App.init);
})();