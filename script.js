const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navBar');

if(bar){
	bar.addEventListener('click',()=>{
		nav.classList.add('active');
	})
}
if(close){
	close.addEventListener('click',()=>{
		nav.classList.remove('active');
	})
}

var modal = document.getElementById("modal");

var closeBtn = document.getElementsByClassName("close")[0];

var overlay = document.getElementById("overlay");

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}