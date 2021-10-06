function bigImg(x) {
  x.style.height = "102%";
  x.style.boxShadow = "0 4px 8px 0 #638404, 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  x.style.transition = "0.5s";
}

function normalImg(x) {
  x.style.height = "100%";
  x.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  x.style.transition = "0.5s";
}

var modal = document.getElementById("about-image-modal");

var img = document.getElementById("about-image-me");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}