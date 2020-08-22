//(c) 2020 FlawCra
var imgs = document.getElementsByTagName("img");
for (let img of imgs) {
    img.setAttribute("loading", "lazy");
}