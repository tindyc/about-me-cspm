function myFunction() {
  var x = document.getElementsByClassName("navbar__container")[0];
  if (x.style.display === "block") {
     x.style.display = "none";
  } else {
     x.style.display = "block";
  }
 }