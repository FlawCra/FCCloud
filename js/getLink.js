//(c) 2020 FlawCra
var dlBtn = document.getElementById("dlBtn");
var dlPane = document.getElementById("dlPane");
$.get( "http://api.flawcra.cc/fcmod/api/download", function( data ) {
  dlBtn.href = data;
  dlBtn.style.display = "block";
  dlPane.style.display = "none";
});