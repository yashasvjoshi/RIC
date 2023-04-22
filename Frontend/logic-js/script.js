let ptitle = "RAJYASH IT CONSULTENCY ";
let path = document.location.pathname.split("/");

document.head = document.head || document.getElementsByTagName("head")[0];

let winWidth = window.screen.width;
let af = document.getElementById("a-f");
let otb = document.getElementById("o-tb");
let apf = document.getElementById("ap-f");
let menuBtn = document.getElementById("menu-btn");
let title = document.getElementById("title");
let mContent = document.getElementById("m-content");
let componentsBorder = document.querySelector("#C-B");

mContent.style.visibility = "hidden";
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
  document.title = ptitle + "-Contact Us";
} else if (path[3] == "index.html") {
  document.title = ptitle;
} else if (path[3] == "clients.html") {
  document.title = ptitle + " -Clients";
} else if (path[3] == "career.html") {
  document.title = ptitle + " -Career";
} else if (path[3] == "about-us-OT.html") {
  document.title = ptitle + " -Our Team";
} else if (path[3] == "service-Man.html") {
  document.title = ptitle + "-Manpower Supply";
} else if (path[3] == "service-Soft.html") {
  document.title = ptitle + "-Software Developement";
} else if (path[3] == "service-Web.html") {
  document.title = ptitle + "-Web Design & Developement";
} else if (path[3] == "service-Net.html") {
  document.title = ptitle + "-Networking";
}
 else if (path[3] == "phone-services.html") {
  document.title = ptitle + "-Services";
}

// On click in nav

// let mContentUl = document.getElementById("m-c-ul");

if (winWidth < 920) {
  menuBtn.addEventListener("pointerdown", () => {
    if (mContent.style.visibility == "hidden") {
      mContent.style.visibility = "visible";
      mContent.style.height = "auto";

      componentsBorder.classList.remove("YesBorder");
      componentsBorder.classList.add("NoBorder");

      console.log();
    } else {
      mContent.style.height = "0px";
      mContent.style.visibility = "hidden";

      componentsBorder.classList.remove("NoBorder");
      componentsBorder.classList.add("YesBorder");
    }

    // alert("hi");
  });
}

// PAGE CAREER

// af.addEventListener("click", () => {
//   alert("huufufhh");
// });
if (path[3] == "career.html") {
  // else {
  af.addEventListener("change", (e) => {
    if (e.target.value == "Others...") {
      af.classList.remove("select-visiblity-visible");
      af.classList.add("select-visiblity-hidden");
      otb.classList.remove("o-tb-hidden");
      otb.classList.add("o-tb-visible");
      // }
    }
  });
  apf.addEventListener("click", () => {
    if (
      af.classList.contains("select-visiblity-hidden") &&
      otb.classList.contains("o-tb-visible")
    ) {
      af.classList.add("select-visiblity-visible");
      af.classList.remove("select-visiblity-hidden");
      otb.classList.add("o-tb-hidden");
      otb.classList.remove("o-tb-visible");
    } else {
    }
  });
}
