let ptitle = "RAJYASH IT CONSULTENCY ";
let path = document.location.pathname.split("/");

document.head = document.head || document.getElementsByTagName("head")[0];

let af = document.getElementById("a-f");

function changeFavicon(src) {
  var link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

changeFavicon("../css/images/ric-logos/logo.png");

if (path[3] == "contact.html") {
  // console.log(path[3]);
  document.title = ptitle + "-Contact Us";
} else if (path[3] == "index.html") {
  document.title = ptitle;
} else if (path[3] == "clients.html") {
  document.title = ptitle + " -Clients";
} else if (path[3] == "career.html") {
  document.title = ptitle + " -Career";
} else if (path[3] == "about-us-OT.html") {
  document.title = ptitle + " -Our Team";
}

// On click in nav

let menuImg = document.getElementById("menu-img");
let title = document.getElementById("title");
let mContent = document.getElementById("m-content");
let mContentUl = document.getElementById("m-c-ul");

// menuImg.addEventListener("pointerdown", () => {
//   if (mContentUl.style.visibility == "visible") {
//     mContentUl.style.visibility = "hidden";
//     mContent.style.visibility = "hidden";
//     mContent.style.height = "0px";
//   } else {
//     mContentUl.style.visibility = "visible";
//     mContent.style.visibility = "visible";
//     // mContentUl.style.backgroundColor = "white";
//     // mContentUl.style.width = "100%";
//     title.style.display = "top";
//     // mContent.style.display = "block";
//   }
// });

// PAGE CAREER

// af.addEventListener("click", () => {
//   alert("huufufhh");
// });
af.addEventListener("change", (e) => {
  if (e.target.value == "Others...") {
    alert(e.target.value);
    console.log(af);
    af.classList.add()
  }
});
