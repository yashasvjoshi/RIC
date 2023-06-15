// const axios = require("axios");

// const { default: axios } = require("axios");

let ptitle = "RAJYASH IT CONSULTENCY ";
let path = document.location.pathname.split("/");
let sideSerBarEle = document.querySelector("#sidebar");
let contcact_post_request_data;

try {
  
  let contactInfoCon = document.getElementById('contact-info')
  
  
  
contactInfoCon.innerHTML=`<div class="container flex">
<div class="info flex items-center">
<a href="tel:844-193-3833" class="flex align-center">
  <div class="m-number items-center flex">
  <img
  class="call-icon"
  src="../css/images/logos/Call-icon.png"
  alt=""
  />
  <span class="align-middle">(+91) 8441933833</span>
  </div>
  </a>
  <a href="mailto:rajyashit@gmail.com" class="flex align-center">
  <div class="email flex items-center">
  <img class="m-img" src="../css/images/logos/mail.jpg" alt="Mail" />
    <span id="mail-id" class="ml-2">rajyashit@gmail.com</span>
    </div>
    </a>
</div>
<div class="imgs flex justify-self-end">
<ul class="flex">
    <li>
      <a href="https://www.facebook.com/profile.php?id=100093508664646" target="_blank"
      ><img
          src="../css/images/logos/fb.png"    
          class="image mx-2"
          alt="fb"
      /></a>
    </li>
    <li>
    <a href=""    target="_blank"
    ><img
          src="../css/images/logos/insta.png"
          class="image mx-2"
          alt="insta"
          /></a>
    </li>
    <li>
      <a href="https://twitter.com/rajyashit"
      target="_blank"
        ><img
          src="../css/images/logos/twitter.png"
          class="image mx-2"
          alt="twitter"
          /></a>
    </li>
    <li>
      <a href=""    target="_blank"
        ><img
        src="../css/images/logos/in.png"
        class="image mx-2"
          alt="linked-in"
          /></a>
    </li>
  </ul>
</div>
</div>`

} catch (error) {
 console.log(error); 
}


let needHelpCont = document.getElementById('need-help-cont')

needHelpCont.innerHTML = `<ul>
<li><a href="tel:844-193-3833">+91-8441933833</a></li>
<li><a href="">Compliance Management</a></li>
<li><a href="https://rajyashit.in">www.rajyashit.in</a></li>
<li><a href="mailto:info@rajyashit.in">info@rajyashit.in</a></li>
</ul>`



try {
} catch (error) {
  console.log(error);
}
try {
  let subBtn = document.querySelector('#conSubBtn')
  
  subBtn.addEventListener('click',e=>{
    // alert("YJITB")
    ContactFormSender(e)
  })
} catch (error) {
  console.log(error);
}
  
// }


// This function is to store Contact Form data in database


const ContactFormSender =async (e)=>{
  let emptyWarning = document.querySelector('#empty-warning')
  let feedback_obj = {name:null,email:null,phone_no:null,subject:null,message:null}
  let feedback_inputs = Array.from(document.querySelectorAll('.feedback-inputs'))
  feedback_inputs.forEach((input,index)=>{
    if (input.value != ''){
      
      if (index==0){
        feedback_obj.name = input.value;
      }
      else if (index==1){
        feedback_obj.email = input.value;
      }
      else if (index==2){
        feedback_obj.phone_no = Number.parseInt(input.value);
      }
      else if (index==3){
        feedback_obj.subject = input.value;
      }
      else if (index==4){
        feedback_obj.message = input.value;
      }
      
      // // console.log(feedback_obj)
    }
    else{
      emptyWarning.style.visibility = 'visible'
      setTimeout(()=>{
        emptyWarning.style.visibility = 'hidden'
      },1800)
    }
  })
  
  // post request using fetch
  
  let response = axios.post('http://localhost:7777/contact', feedback_obj)
  .then(async(response) => {
    return response.data
  }).then((data)=>{
    
    if (data.hasOwnProperty("errors")){
      emptyWarning.style.visibility = 'visible'
      emptyWarning.innerHTML = data.errors[0].msg
      setTimeout(()=>{
        emptyWarning.style.visibility = 'hidden'
      },1800)
      if (data.errors[0].hasOwnProperty('AE')) {
        if (Object.keys(data.errors[0].AE.keyValue)[0]=="email") {
          emptyWarning.innerHTML = "The given Email Already Exists."
        }
        else if(Object.keys(data.errors[0].AE.keyValue)[0]=="phone_no"){
          emptyWarning.innerHTML = "The given Phone Number Already Exists."
        }
      }
    }
    else{
      emptyWarning.innerHTML = "Message Successfully Sent!"
      setTimeout(()=>{
        emptyWarning.style.visibility = 'visible'
      },1800)
      emptyWarning.style.visibility = 'visible'
    }
  })
}
  
  







// Submiting form of Career page -Post Request 
try {
  let CareerSubBtn = document.querySelector('#career-sub-btn')
  CareerSubBtn.addEventListener("click",e=>{
    e.preventDefault()
    CareerFormSender(e)
    // console.log(CareerForm);
  })
} catch (error) {
  console.log(error);
}

const CareerFormSender = async(e)=>{
  let emptyWarning = document.querySelector('#empty-warning-career')
  // emptyWarning.style.visibility = 'visible'
  let formData = new FormData()
  let CareerInputElements = Array.from(document.querySelectorAll('.p-o-h'))
  let CareerFileInput = document.querySelector('#career-file')
  // console.log(CareerFileInput.files[0]);
  formData.append('cv_upload',CareerFileInput.files[0])
  let applyFor;
  CareerInputElements.forEach((inputElement,index)=>{
    switch (index) {
      case 0:
        formData.append("name",inputElement.value)
        break;
      case 1:
        formData.append("dob",inputElement.value)
        break;
      case 2:
        formData.append("email",inputElement.value)
        break;
      case 3:
        formData.append("phone_no",inputElement.value)
        break;
      case 4:
        applyFor = inputElement.value
          break;
      case 5:
        if(applyFor == "Others..."){
          applyFor = inputElement.value
        }
        else{
        }
        // console.log(inputElement.value);
        formData.append("apply_for",applyFor)
        break;
      case 6:
        formData.append("message",inputElement.value)
        break;
      case 7:
        formData.append("state",inputElement.value)
        break;
      case 8:
        formData.append("city",inputElement.value)
        break;
      case 9:
        formData.append("educational_qualification",inputElement.value)
        break;
      case 10:
        formData.append("total_experience",inputElement.value)
        break;
      case 11:
        formData.append("lc_company",inputElement.value)
        break;
      case 12:
        formData.append("designation",inputElement.value)
        break;
      case 13:
        formData.append("lc_ctc",inputElement.value)
        break;
      case 14:
        formData.append("expected_ctc",inputElement.value)
        break;
    
      default:
        break;
    }
  })
  // console.log(formData);
  // for (var key of formData.entries()) {
  //   console.log(key[0] + ', ' + key[1])
  // }

let careerData;
try{

  // Send Data to DB using Post Request -axios
  let CareerRes = await axios.post('http://localhost:7777/career',formData,{
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((data)=>{
    careerData = data.data
    console.log(careerData);
  })
  if (careerData.hasOwnProperty("ERROR")||careerData.hasOwnProperty("errors")){
  // CareerRes = await CareerRes.json()
  
  }
  else{
  emptyWarning.innerHTML = "Successfully Uploaded!"
  setTimeout(()=>{
    emptyWarning.style.visibility = 'hidden'
  },1800)
  emptyWarning.style.visibility = 'visible'
  }
}
  catch(err){emptyWarning.innerHTML='Some Error Occured Plrase Try again Later'}


}









// /*-------------------Err init-----------------------------------------------------------------------
// Creating the Right Service NavBar.
// console.log("ON way");
try {
  
  sideSerBarEle.innerHTML = `
  </ul>
  <ul id="s-options">
    <li class="s-li-head">Serveices</li>
    <a href="./service-Soft.html"><li class="s-li-elements">Software Developement</li></a>
    <a href="./service-Web.html"><li class="s-li-elements">Website Design &amp; Developement</li></a>
    <a href="./service-Net.html"><li class="s-li-elements">Computer Networking</li></a>
    <a href="./service-Man.html"><li class="s-li-elements">Manpower Supply</li></a>
    <a href="./service-CSC.html"><li class="s-li-elements">Customer Support Center</li></a>
    <a href="./service-ConSer.html"><li class="s-li-elements">Consultancy Services</li></a>
    <a href="./service-CE.html"><li class="s-li-elements">Computer Education</li></a>
    <a href="./service-ERP_App.html"><li class="s-li-elements">ERP Applications</li></a>
    <a href="./service-CS.html"><li class="s-li-elements">Computer Stationery</li></a>
  </ul>
  `
  // console.log(sideSerBarEle.innerHTML);
  // console.log("N bang");
  
} catch (error) {
  // console.log(error);
}
// -------------------Err init-----------------------------------------------------------------------*/
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
} 
if ((path[3] == "index.html")||(path[3] == "")) {
  document.title = ptitle;
}
 if (path[3] == "clients.html") {
  document.title = ptitle + " -Clients";
}
 if (path[3] == "career.html") {
  document.title = ptitle + " -Career";
} if (path[3] == "about-us-OT.html") {
  document.title = ptitle + " -Our Team";
}
 if (path[3] == "service-Man.html") {
  document.title = ptitle + "-Manpower Supply";
}
 if (path[3] == "service-Soft.html") {
  document.title = ptitle + "-Software Developement";
}
 if (path[3] == "service-Web.html") {
  document.title = ptitle + "-Web Design & Developement";
}
 if (path[3] == "service-Net.html") {
  document.title = ptitle + "-Networking";
}
if (path[3] == "service-ConSer.html") {
  document.title = ptitle + "-Consultency Services";
}
 if (path[3] == "service-CS.html") {
  document.title = ptitle + "-Computer Stationery";
}
 if (path[3] == "service-CSC.html") {
  document.title = ptitle + "-Customer Support Center";
}
 if (path[3] == "./service-CE.html") {
  document.title = ptitle + "-Computer Education";
}
 if (path[3] == "./service-ERP_App.html") {
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
      
      // console.log();
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
// if (document.title == (ptitle + "-Contact Us")){



// let sideSerBarEle = document.querySelectorAll('#s-options')
// // sideSerBarEle.innerHTML = "fndfn"
// // Higilighting the Servie name At the Right Service NavBar.

// let innerContent_Array = Array.from(sideSerBarEle[0].childNodes)
// var i =1;
// // console.log(typeof(innerContent_Array[i]));
// // console.log(innerContent_Array[i]);
// // if (window.location.pathname.split("/")[3] == 'service-Soft.html'){

// // 

// console.log("All clear");
