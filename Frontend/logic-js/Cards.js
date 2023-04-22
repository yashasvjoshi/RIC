const cardTemp = (serviceName, desc, imgurl) => {
  let shortDesc = "";
  let maxlimitOfDesc = 170;
  for (let i = 0; i <= maxlimitOfDesc; i++) {
    let element = desc[i];
    shortDesc += element;
  }

  let HrefForCard;
  if (serviceName == cardsContent[0].service) {
    HrefForCard = "./service-Soft.html";
  } else if (serviceName == cardsContent[1].service) {
    HrefForCard = "./service-Web.html";
  } else if (serviceName == cardsContent[2].service) {
    HrefForCard = "./service-Net.html";
  } else if (serviceName == cardsContent[3].service) {
    HrefForCard = "./service-Man.html";
  }
  return `
<div class="card">
    <div class="card-img">
                        <img src="${imgurl}" alt="">
                        </div>
                    <div class="card-title">${serviceName}</div>
                    <div class="card-text">${
                      desc.length >= maxlimitOfDesc ? shortDesc + "..." : desc
                    }</div>
                    <div class="card-c-btn">
                    <a href="${HrefForCard}"><span class="card-btn ${
    serviceName.split(" ")[0]
  }">Read More</span></a>
                    </div>
                    </div>`;
};

let cards = document.getElementById("cards");

let cardsContent = [
  {
    service: "Software Developement",
    desc: "At our company, we specialize in software development services that help businesses harness the power of technology to streamline their operations and achieve their goals. Our team of experienced developers has expertise in a wide range of programming languages and platforms, enabling us to build custom software solutions that meet your specific needs.<br>We follow a rigorous development process that includes requirements gathering, design, development, testing, and deployment. Our approach is collaborative, with regular communication and feedback from our clients to ensure that we deliver software solutions that meet their exact specifications.<br>Whether you need a web application, mobile app, or desktop software, we have the knowledge and expertise to build innovative solutions that drive your business forward. We stay up-to-date with the latest technologies and best practices to ensure that our solutions are cutting-edge and optimized for performance, security, and scalability.<br>Partner with us for your software development needs and experience the benefits of having a reliable and responsive technology partner that helps you stay ahead of the competition.",
    imgURL:
      "https://imgs.search.brave.com/CY77FdrK7U-FxqYW6zv8-3N34oRyyEpc3tpMwxWtZGE/rs:fit:656:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/MEgwOTU0YWZ2UTNt/MUpTRUFjaDZ3SGFG/VyZwaWQ9QXBp",
  },
  {
    service: "Web Design & Developement",
    desc: "Our company specializes in web development and design services that help businesses create a powerful online presence. We understand that a well-designed and user-friendly website is essential for attracting and engaging customers, building brand awareness, and driving conversions.<br>Our team of experienced developers and designers works collaboratively with our clients to create custom websites that meet their unique needs and objectives. We follow a comprehensive development process that includes planning, design, development, testing, and deployment, ensuring that we deliver websites that are optimized for performance, security, and search engine optimization.<br>We have expertise in a wide range of web development and design technologies, including HTML, CSS, JavaScript, WordPress, and more. Whether you need a simple brochure website or a complex e-commerce platform, we have the skills and knowledge to deliver solutions that exceed your expectations.<br>Partner with us for your web development and design needs and experience the benefits of having a responsive and professional website that helps you achieve your business goals.",

    imgURL:
      "https://imgs.search.brave.com/dQa9HFLdViQtSe8JQ3WuSNl9ih1tRyiIAdzvs99aDKw/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/aV9WWTU0VjUzNWh6/dEh6MTFWVHlRSGFG/TCZwaWQ9QXBp",
  },
  {
    service: "Networking",
    desc: "Our company specializes in computer networking services that help businesses establish reliable and secure connections between their devices, systems, and users. We understand the importance of having a robust and scalable network infrastructure to support your business operations and enable seamless communication and collaboration.<br>Our team of certified network engineers has extensive experience in designing, implementing, and maintaining network solutions for businesses across various industries. We use the latest technologies and best practices to ensure that our solutions are optimized for performance, security, and reliability.<br>We offer a wide range of networking services, including network design and architecture, installation and configuration, network monitoring and management, and security and compliance. Whether you need a simple LAN/WAN setup or a complex multi-site network, we have the expertise to deliver solutions that meet your unique needs and requirements.<br>Partner with us for your computer networking needs and experience the benefits of having a robust and reliable network infrastructure that enables you to stay connected and productive at all times.",
    imgURL:
      "https://imgs.search.brave.com/VjwAkqpG6TCx0QKWdz0PtIM2lLAShvHFD3C2CXAQ_eE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC41/X1RZaEZMZ09kREsz/QmIwOGEzZlFRSGFF/OCZwaWQ9QXBp",
  },
  {
    service: "Manpower Supply",
    desc: "Our company specializes in providing manpower supply services to businesses across various industries. We understand the importance of having a skilled and reliable workforce to support the growth and success of your business.<br> Our team of recruitment experts sources and selects top-quality candidates with the necessary skills and experience to meet your specific needs. We conduct rigorous screening and verification processes to ensure that all our candidates meet the highest standards of professionalism and competence.<br>Whether you need temporary staff for a short-term project or long-term employees to support your ongoing operations, we have the resources and expertise to deliver timely and efficient staffing solutions. We pride ourselves on our ability to build strong partnerships with our clients, providing personalized and flexible services that meet their unique requirements.<br>Partner with us for all your manpower supply needs and experience the benefits of having a skilled and dedicated workforce that drives your business forward.",
    imgURL:
      "https://imgs.search.brave.com/4JgzwdOZGhUP7fx_KS_KkR9f2FDHx5TuDBmAuUrZMeA/rs:fit:1140:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/VGktRGE3T2dFbU5W/dWNsM3lLWC1nSGFE/RiZwaWQ9QXBp",
  },
];

// const insertRows = async () => {
//   let rowsToInsert = "";
//   for (let j = 0; j < cardsContent.length; j++) {
//     rowsToInsert += await '<div class="row"> </div>';
//     j++;
//   }
//   cards.innerHTML = rowsToInsert;
//   console.log(cards.innerHTML);
//   //   return rowsToInsert;
// };

let rows = Array.from(document.getElementsByClassName("row"));

// insertRows();
// rows.forEach((card, index) => {
//   card.addEventListener("pointerdown", (e) => {
//     card.children[1].innerHTML = cardContent[index].service;
//     card.children[2].innerHTML = cardContent[index].desc;
//     console.log();

//     console.log(index);
//   });
// });

if (window.location.pathname.split("/")[3].split(".")[0] == "index") {
  cardsContent.forEach((cardContent, index) => {
    if (index == 0 || index == 1) {
      rows[0].innerHTML += `    ${cardTemp(
        cardContent.service,
        cardContent.desc,
        cardContent.imgURL
      )}
      
    `;
    } else if (index == 2 || index == 3) {
      rows[1].innerHTML += cardTemp(
        cardContent.service,
        cardContent.desc,
        cardContent.imgURL
      );
    }
  });
}

let cardBtns = document.querySelectorAll(".card-btn");

// On click "read more button"
// let TempClassName;
// let serviceDet;

// cardBtns.forEach((btn) => {
//   btn.addEventListener("pointerdown", async (e) => {
//     TempClassName = await e.target.classList[1];
//     console.log(TempClassName);
//     serviceDet = await cardsContent.filter(
//       (e) => e.service.split(" ")[0] == TempClassName
//     );
//     console.log(serviceDet);

//     // Rediret to another Page
//     // window.location.href = await "./service.html";
//   });
// });

 if (window.location.pathname.split("/")[3].split(".")[0] == "service-Web") {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  sTitle.innerHTML = cardsContent[1].service;
  sDesc.innerHTML = cardsContent[1].desc;
  sImg.setAttribute("src", cardsContent[1].imgURL);
} else if (
  window.location.pathname.split("/")[3].split(".")[0] == "service-Soft"
) {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  sTitle.innerHTML = cardsContent[0].service;
  sDesc.innerHTML = cardsContent[0].desc;
  // console.log(sImg);
  sImg.setAttribute("src", cardsContent[0].imgURL);
} else if (
  window.location.pathname.split("/")[3].split(".")[0] == "service-Net"
) {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  // console.log(TempClassName);
  sTitle.innerHTML = cardsContent[2].service;
  sDesc.innerHTML = cardsContent[2].desc;
  // console.log(sImg);
  sImg.setAttribute("src", cardsContent[2].imgURL);
} else if (
  window.location.pathname.split("/")[3].split(".")[0] == "service-Man"
) {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  // console.log(TempClassName);
  sTitle.innerHTML = cardsContent[3].service;
  sDesc.innerHTML = cardsContent[3].desc;
  // console.log(sImg);
  sImg.setAttribute("src", cardsContent[3].imgURL);
} else {
}
