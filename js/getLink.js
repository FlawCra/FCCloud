function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

//(c) 2020 FlawCra
var dlBtn = document.getElementById("dlBtn");
var dlPane = document.getElementById("dlPane");
$.get( "https://api.flawcra.cc/fcmod/api/download/", function( data ) {
	dlBtn.setAttribute("onclick", 'downloadURI("'+data+'", "'+data.substring(data.lastIndexOf('/')+1)+'");');
	dlBtn.style.display = "block";
	dlBtn.style.cursor = "pointer";
	dlPane.style.display = "none";
});
