	var exp = document.getElementById('fullMenu');
	var title = document.getElementById('pran');
	var title2 = document.getElementById('web');
	var button = document.getElementById('menu');
	var button2 = document.getElementById('menu2');

document.getElementById('menu').addEventListener("click", function showMenu() {

		
		exp.style.display = "block";
	    button.style.display = "none";
	    button2.style.display = "flex";
	    exp.classList.add("animated", "fadeInDown")
	    
	    
	 
		
	    

})





document.getElementById('menu2').addEventListener("click", function hideMenu() {
        exp.style.display = "none";
        button2.style.display = "none";
	    button.style.display = "flex";
	   
		


})

