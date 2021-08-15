function left_menu() {
    document.getElementById('leftblok').style.display='flex';
    document.getElementById('leftmenu').style.cssText = "transform: translateX(0);";
  }

  document.getElementById("close").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("leftblok").style.display='none';
  document.getElementById("leftmenu").style.transform='translateX(-240px)';
}

function lfblok() {
  document.getElementById("leftblok").style.display='none';
  document.getElementById("leftmenu").style.transform='translateX(-240px)';
}
