//(c) 2020 FlawCra
var dlBtn = document.getElementById("dlBtn");
var dlPane = document.getElementById("dlPane");
$.get( "https://api.flawcra.cc/fcmod/api/download/", function( data ) {
	dlBtn.setAttribute("onclick", 'open("'+data+'");');
	dlBtn.style.display = "block";
	dlBtn.style.cursor = "pointer";
	dlPane.style.display = "none";
});