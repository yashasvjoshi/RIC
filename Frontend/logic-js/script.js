let ptitle = "RAJYASH IT CONSULTENCY ";
let path = document.location.pathname.split("/");

if (path[3] == "contact.html") {
  // console.log(path[3]);
  document.title = ptitle + "-Contact Us";
} else if (path[3] == "index.html") {
  document.title = ptitle;
}
