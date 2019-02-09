//Loader
checkCookieAgreementCookie();
window.addEventListener("load", function(event) {
    document.querySelector('.loader-wrapper').classList.add('loader-wrapper-hidden');
    document.querySelector('.site-wrapper').style.opacity = "1";
    document.querySelector('body').classList.remove('block-scroll');
  });

  //cookies

  //cookies - agreement
  var cookieBtn = document.querySelector('#cookie-agree');
  cookieBtn.addEventListener('click', function(){
    setCookie('cookieAgreement', 'true', 360);
    document.querySelector('.cookie-information').style.display = 'none';

  });

  function checkCookieAgreementCookie() {
      var cookieAgreement = getCookie('cookieAgreement');
      if(cookieAgreement != ""){//istnieje
        if(cookieAgreement == 'true'){
          document.querySelector('.cookie-information').style.display = 'none';
        }
        else if(cookieAgreement == 'false'){
          document.querySelector('.cookie-information').style.display = 'flex';
        }
      } else {//nie istnieje
        setCookie('cookieAgreement', 'false', 360);
        document.querySelector('.cookie-information').style.display = 'flex';

      }
  }

  //cookies - saving preference about canvas
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }

//menu
//mobile menu hide after li click
var menuEls = document.querySelectorAll('.main-nav li');
for (var i = 0; i < menuEls.length; i++) {
  menuEls[i].addEventListener('click',function(){
    if(window.outerWidth<1025){
      document.querySelector('#show-menu').checked = false;
      document.querySelector('.ham').classList.toggle('active');
      document.querySelector('body').classList.toggle('block-scroll');
    }
  });
}

//add block-scroll on body after mobile menu activation
document.querySelector('.ham').addEventListener('click',function(){
  document.querySelector('body').classList.toggle('block-scroll');
});
