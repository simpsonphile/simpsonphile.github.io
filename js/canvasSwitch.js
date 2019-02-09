window.addEventListener("load", function(event) {
  checkCanvasCookie();
});

function checkCanvasCookie() {
    var canvasSwitch = getCookie('canvasSwitch');
    if(canvasSwitch != ""){//istnieje
      if(canvasSwitch == 'off'){
        CanvaSwitchCheckbox.checked = false;
      } else {
        CanvaSwitchCheckbox.checked = true;
      }
    } else {//nie istnieje
      setCookie('canvasSwitch', 'off', 360);
    }
    checkCanvasAnimation();
}


//CanvasSwitch
  var CanvaSwitch = document.getElementById('switch');
  var CanvaSwitchCheckbox = document.getElementById('checkbox-switch');

  function checkCanvasAnimation(){
    if(!CanvaSwitchCheckbox.checked){
      doAnim = false;
      canvas.style.display = "none";
    }
    else {
      doAnim = true;
      canvas.style.display = "block";
      c=canvas.getContext('2d');
      animation();
    }
  }

  CanvaSwitch.addEventListener('click', function(){

    checkCanvasAnimation();
    if(!CanvaSwitchCheckbox.checked){
      setCookie('canvasSwitch', 'off', 360);
    } else {
      setCookie('canvasSwitch', 'on', 360);
    }
  });
