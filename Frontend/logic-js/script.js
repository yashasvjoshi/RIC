// const { text } = require("express");

let ptitle = "RAJYASH IT CONSULTENCY ";
let path = document.location.pathname.split("/");



/*-------------------Err init-----------------------------------------------------------------------
// Creating the Right Service NavBar.
console.log("ON way");
sideSerBarEle.innerHTML = `
<ul id="s-options">
<li class="s-li-head">Serveices</li>
<a id="side-nav-SD" href="./service-Soft.html"><li class="s-li-elements">Software Developement</li></a>
<a id="side-nav-WDD" href="./service-Web.html"><li class="s-li-elements">Website Design & Developement</li></a>
<a id="side-nav-CN" href="./service-Net.html"><li class="s-li-elements">Computer Networking</li></a>
<a id="side-nav-MS" href="./service-Man.html"><li class="s-li-elements">Manpower Supply</li></a>
<a id="side-nav-CSC" href="./service-CSC.html">     <li class="s-li-elements">Customer Support Center</a></li>
<a id="side-nav-CE" href="./service-CE.html">      <li class="s-li-elements">Computer Education</a></li>
<a id="side-nav-ConSer" href="./service-ConSer.html">  <li class="s-li-elements">Consultancy Services</a></li>
<a id="side-nav-EA" href="./service-ERP_App.html"> <li class="s-li-elements">ERP Applications</a></li>
<a id="side-nav-CS" href="./service-CS.html" >      <li class="s-li-elements">Computer Stationery</a></li>
</ul>
`
console.log(sideSerBarEle.innerHTML);
console.log("N bang");

-------------------Err init-----------------------------------------------------------------------*/
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
} else if ((path[3] == "index.html")||(path[3] == "")) {
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
else if (path[3] == "service-ConSer.html") {
  document.title = ptitle + "-Consultency Services";
}
 else if (path[3] == "service-CS.html") {
  document.title = ptitle + "-Computer Stationery";
}
else if (path[3] == "service-CSC.html") {
  document.title = ptitle + "-Customer Support Center";
}
 else if (path[3] == "./service-CE.html") {
  document.title = ptitle + "-Computer Education";
}
 else if (path[3] == "./service-ERP_App.html") {
  document.title = ptitle + "-ERP Applications";
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




// Adding same thing to every Page 


let s_dropdown = document.getElementById('s-dropdown')

s_dropdown.innerHTML = `<li><a href="./service-Net.html" target="_blank">Networking</a></li>
<li><a href="./service-Web.html" target="_blank">Website Design & Development</a></li>
<li><a href="./service-Soft.html" target="_blank">Software Developement</a></li>
<li><a href="./service-Man.html" target="_blank">Manpower Outsourcing</a></li>
<li><a href="./service-CSC.html" target="_blank">Customer Support Center</a></li>
<li><a href="./service-ConSer.html" target="_blank">Consultancy Services</a></li>
<li><a href="./service-CE.html" target="_blank">Computer Education</a></li>
<li><a href="./service-ERP_App.html" target="_blank">ERP Applications</a></li>
<li><a href="./service-CS.html" target="_blank">Computer Stationery</a></li>`





// Contact Submit Handler 
if (document.title == (ptitle + "-Contact Us")){
  let subBtn = document.querySelector('#conSubBtn')
  
  subBtn.addEventListener('click',e=>feedbackToCompany(e))
  
}



const feedbackToCompany =async (e)=>{
  let emptyWarning = document.querySelector('#empty-warning')
  let feedback_inputs = Array.from(document.querySelectorAll('.feedback-inputs'))
  feedback_obj = {name:null,email:null,phoneNo:null,subject:null,message:null}
  feedback_inputs.forEach((input,index)=>{
    if (input.value != ''){
      if (index==0){
        feedback_obj.name = input.value;
      }
      else if (index==1){
        feedback_obj.email = input.value;
      }
      else if (index==2){
        feedback_obj.phoneNo = input.value;
      }
      else if (index==3){
        feedback_obj.subject = input.value;
      }
      else if (index==4){
        feedback_obj.message = input.value;
      }
      
      // console.log(feedback_obj)
    }
    else{
      emptyWarning.style.visibility = 'visible'
      setTimeout(()=>{
        emptyWarning.style.visibility = 'hidden'
      },1800)
    }
  })
  console.log(feedback_obj);
is_FeedBack_OBJ_Ready_To_Be_Posted_in_DB = true

// post request using fetch

// let headers = {
  
// }
// fetch('http:localhost:7777/contact',headers)
}




// let sideSerBarEle = document.querySelectorAll('#s-options')
// // sideSerBarEle.innerHTML = "fndfn"
// // Higilighting the Servie name At the Right Service NavBar.

// let innerContent_Array = Array.from(sideSerBarEle[0].childNodes)
// var i =1;
// console.log(typeof(innerContent_Array[i]));
// console.log(innerContent_Array[i]);
// // if (window.location.pathname.split("/")[3] == 'service-Soft.html'){

// // 