//sticky headers need static height

var resumeLeftArr = document.querySelectorAll('.resume-left');

function updateStickyHeaders(){
  resumeLeftArr.forEach(function(e){
    e.style.height = e.parentElement.offsetHeight-50+'px';
  });
}

window.addEventListener("load", function(event) {
  if(window.innerWidth>480)updateStickyHeaders();

  window.addEventListener("resize", function(){
    if(window.innerWidth>480)updateStickyHeaders();
  });
});
