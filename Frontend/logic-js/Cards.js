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
   else if (serviceName == cardsContent[4].service) {
    HrefForCard = "./service-CSC.html";
  }
   else if (serviceName == cardsContent[5].service) {
    HrefForCard = "./service-ConSer.html";
  }
   else if (serviceName == cardsContent[6].service) {
    HrefForCard = "./service-CE.html";
  }
   else if (serviceName == cardsContent[7].service) {
    HrefForCard = "./service-ERP_App.html";
  }
   else if (serviceName == cardsContent[8].service) {
    HrefForCard = "./service-CS.html";
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
                    <a href="${HrefForCard}"><span class="card-btn
                   <!-- ${serviceName.split(" ")[0]}-->
                    ">Read More</span></a>
                    </div>
                    </div>`;
};

let cards = document.getElementById("cards");

let cardsContent = [
  {
    service: "Software Developement",
    desc: `At our company, we specialize in software development services that help businesses harness the power of technology to streamline their operations and achieve their goals. Our team of experienced developers has expertise in a wide range of programming languages and platforms, enabling us to build custom software solutions that meet your specific needs.<br>

    We follow a rigorous development process that includes requirements gathering, design, development, testing, and deployment. Our approach is collaborative, with regular communication and feedback from our clients to ensure that we deliver software solutions that meet their exact specifications.<br>
    
    Whether you need a web application, mobile app, or desktop software, we have the knowledge and expertise to build innovative solutions that drive your business forward. We stay up-to-date with the latest technologies and best practices to ensure that our solutions are cutting-edge and optimized for performance, security, and scalability.<br>
    
    Partner with us for your software development needs and experience the benefits of having a reliable and responsive technology partner that helps you stay ahead of the competition.`,
    imgURL:
      "../css/images/services/sd.jpg",
  },
  {
    service: "Web Design & Developement",
    desc: `Our company specializes in web development and design services that help businesses create a powerful online presence. We understand that a well-designed and user-friendly website is essential for attracting and engaging customers, building brand awareness, and driving conversions.<br>

    Our team of experienced developers and designers works collaboratively with our clients to create custom websites that meet their unique needs and objectives. We follow a comprehensive development process that includes planning, design, development, testing, and deployment, ensuring that we deliver websites that are optimized for performance, security, and search engine optimization.<br>
    
    We have expertise in a wide range of web development and design technologies, including HTML, CSS, JavaScript, WordPress, and more. Whether you need a simple brochure website or a complex e-commerce platform, we have the skills and knowledge to deliver solutions that exceed your expectations.<br>
    
    Partner with us for your web development and design needs and experience the benefits of having a responsive and professional website that helps you achieve your business goals.`,

    imgURL:
      "../css/images/services/wd.jpg",
  },
  {
    service: "Networking",
    desc: `Our company specializes in computer networking services that help businesses establish reliable and secure connections between their devices, systems, and users. We understand the importance of having a robust and scalable network infrastructure to support your business operations and enable seamless communication and collaboration.<br>

    Our team of certified network engineers has extensive experience in designing, implementing, and maintaining network solutions for businesses across various industries. We use the latest technologies and best practices to ensure that our solutions are optimized for performance, security, and reliability.<br>
    
    We offer a wide range of networking services, including network design and architecture, installation and configuration, network monitoring and management, and security and compliance. Whether you need a simple LAN/WAN setup or a complex multi-site network, we have the expertise to deliver solutions that meet your unique needs and requirements.<br>
    
    Partner with us for your computer networking needs and experience the benefits of having a robust and reliable network infrastructure that enables you to stay connected and productive at all times.`,
    imgURL:
      "../css/images/services/nw.jpg",
  },
  {
    service: "Manpower Supply",
    desc: `
    Our company specializes in providing manpower supply services to businesses across various industries. We understand the importance of having a skilled and reliable workforce to support the growth and success of your business.<br>
    
    Our team of recruitment experts sources and selects top-quality candidates with the necessary skills and experience to meet your specific needs. We conduct rigorous screening and verification processes to ensure that all our candidates meet the highest standards of professionalism and competence.<br>
    
    Whether you need temporary staff for a short-term project or long-term employees to support your ongoing operations, we have the resources and expertise to deliver timely and efficient staffing solutions. We pride ourselves on our ability to build strong partnerships with our clients, providing personalized and flexible services that meet their unique requirements.<br>
    
    Partner with us for all your manpower supply needs and experience the benefits of having a skilled and dedicated workforce that drives your business forward.`,
    imgURL:
      "../css/images/services/ms.jpg",
  },
  {
    service: "Customer Support Center",
    desc: `
    At our company, we specialize in providing exceptional customer support services to businesses across various industries. We understand that delivering outstanding customer experiences is crucial for building customer loyalty and driving business growth.<br>
    
    Our dedicated customer support center is staffed with highly trained and empathetic professionals who excel in customer service. We prioritize understanding your business and your customers to provide tailored solutions that meet their needs and exceed their expectations.<br>
    
    Our services encompass various communication channels, including phone, email, live chat, and social media, ensuring that your customers can reach us through their preferred method. We handle a wide range of customer inquiries, from product inquiries and technical support to billing and order assistance, with efficiency and professionalism.<br>
    
    We leverage advanced customer support technologies and systems to ensure seamless ticket management, timely responses, and accurate issue resolution. Our commitment to quality assurance and continuous improvement guarantees that we consistently deliver exceptional service to your valued customers.<br>
    
    Partner with us for your customer support needs and experience the benefits of having a dedicated team that represents your brand with excellence and provides an exceptional customer experience at every interaction.`,
    imgURL:
      "../css/images/services/csc.jpg",
  },
  {
    service: "Consultency Services",
    desc: `
    Our company specializes in consultancy services, offering expert guidance and strategic solutions to businesses across various industries. We understand the complex challenges and dynamic nature of the business landscape, and we are committed to helping our clients navigate these complexities and achieve their goals.<br>

Our team of experienced consultants brings a wealth of knowledge and expertise to the table. We work closely with our clients to understand their unique needs, objectives, and pain points, and we tailor our consultancy services to address their specific requirements.<br>

We offer a comprehensive range of consultancy services, including but not limited to business strategy, process improvement, operational efficiency, market research, financial analysis, and technology implementation. Whether you are a startup in need of guidance for growth or an established company looking to enhance your operations, we have the skills and insights to assist you.<br>

Our consultancy approach is collaborative and results-driven. We work side by side with our clients, leveraging our industry expertise and best practices to develop practical and sustainable solutions. We prioritize long-term partnerships, and our aim is to empower our clients with the knowledge and tools they need to thrive in a competitive business landscape.<br>

Partner with us for your consultancy needs and experience the benefits of having a trusted advisor who can guide you through challenges, identify opportunities, and help you make informed decisions that drive your business forward.`,
    imgURL:
      "../css/images/services/CS1.jpg",
  },
  {
    service: "Computer Education",
    desc: `Our company is dedicated to providing comprehensive computer education services to individuals and organizations. We understand the vital role that technology plays in today's world, and we aim to empower our students with the knowledge and skills they need to thrive in the digital age.<br>

    Our team of experienced instructors are experts in various computer disciplines, ranging from basic computer literacy to advanced programming and software development. We offer a wide range of courses and training programs that cater to students of all skill levels, from beginners to experienced professionals seeking to upgrade their skills.<br>
    
    Our computer education programs are designed to be interactive, hands-on, and practical, ensuring that students gain real-world experience and proficiency in utilizing various computer technologies. We provide a supportive and engaging learning environment where students can ask questions, collaborate with peers, and receive personalized attention from our instructors.<br>
    
    Whether you are looking to enhance your career prospects, start a new career in the technology field, or simply expand your knowledge and capabilities, we have the right computer education programs for you. We stay up-to-date with the latest industry trends and technologies to ensure that our curriculum is relevant and aligned with current industry demands.<br>
    
    Partner with us for your computer education needs and unlock the vast potential that technology offers. Join our community of learners and embark on a journey of lifelong learning and professional growth in the exciting world of computers and technology.`,
    imgURL:
      "../css/images/services/CE1.jpg",
  },
  {
    service: "ERP Application",
    desc: `Our company specializes in developing and implementing ERP (Enterprise Resource Planning) applications that streamline business processes, enhance operational efficiency, and drive growth. We understand the critical role that ERP systems play in managing and integrating various aspects of a business, and we are dedicated to delivering tailored solutions that meet our clients' unique needs.<br>

    Our team of experienced developers and consultants possesses extensive knowledge and expertise in ERP application development. We work closely with our clients to understand their business requirements and challenges, enabling us to design and deploy customized ERP solutions that optimize their operations.<br>
    
    Our ERP applications are designed to centralize and automate key business functions, including finance, supply chain management, human resources, inventory management, and customer relationship management. By integrating these functions into a unified system, our ERP solutions provide real-time visibility, data-driven insights, and streamlined workflows, enabling our clients to make informed decisions and improve overall productivity.<br>
    
    We prioritize scalability, flexibility, and user-friendliness in our ERP applications, ensuring that they can adapt and grow with our clients' businesses. We provide comprehensive support and training to ensure a smooth transition and successful implementation of the ERP system.<br>
    
    Partner with us for your ERP application needs and experience the benefits of having a robust and integrated system that optimizes your business processes, improves efficiency, and drives sustainable growth. Let us empower your organization with the power of ERP technology.`,
    imgURL:
      "../css/images/services/CS1.jpg",
  },
  {
    service: "Computer Stationery",
    desc: `Our company is a leading provider of high-quality computer stationery products for businesses and individuals. We understand the importance of reliable and professional stationery supplies to support your day-to-day computer operations and document management needs.<br>

    We offer a comprehensive range of computer stationery products that cater to a variety of requirements. From premium paper for printing professional documents to envelopes, labels, and forms, we have you covered. Our stationery products are carefully selected to ensure optimal performance, compatibility with various printers, and durability.<br>
    
    At our company, we value customer satisfaction and strive to deliver exceptional service. We maintain a large inventory of computer stationery products, enabling us to fulfill orders promptly and efficiently. Our dedicated customer support team is available to assist you in finding the right stationery products for your specific needs and to answer any questions you may have.<br>
    
    We understand that every business is unique, and we offer customization options for our computer stationery products. Whether you require personalized letterheads, branded envelopes, or custom-designed forms, we can accommodate your requirements, helping you create a professional and cohesive brand identity.<br>
    
    Partner with us for your computer stationery needs and experience the convenience of a one-stop-shop for all your stationery requirements. We are committed to providing you with top-notch products, excellent customer service, and timely delivery, ensuring that you have the necessary supplies to support your computer-based operations effectively.`,
    imgURL:
      "../css/images/services/CS1.jpg",
  },
];


let rows = Array.from(document.getElementsByClassName("row"));

const AddCardsToRows = ()=>{
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
     else if (index == 4 || index == 5) {
      rows[2].innerHTML += cardTemp(
        cardContent.service,
        cardContent.desc,
        cardContent.imgURL
      );
    }
     else if (index == 6 || index == 7) {
      rows[3].innerHTML += cardTemp(
        cardContent.service,
        cardContent.desc,
        cardContent.imgURL
      );
    }
     else if (index == 8|| index == 9) {
      rows[4].innerHTML += cardTemp(
        cardContent.service,
        cardContent.desc,
        cardContent.imgURL
      );
    }
  });
}



if (window.location.pathname.split("/")[3].split(".")[0] ==("index")||window.location.pathname.split("/")[3].split(".")[0] =="phone-services") {
  AddCardsToRows()
}
// else if (window.location.pathname.split("Frontend")[1]==("/pages/")||window.location.pathname.split("Frontend")[1]==("/pages/index.html")) {
//   AddCardsToRows()
// }

let cardBtns = document.querySelectorAll(".card-btn");


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
}
 else if (
  window.location.pathname.split("/")[3].split(".")[0] == "service-CSC"
) {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  // console.log(TempClassName);
  sTitle.innerHTML = cardsContent[4].service;
  sDesc.innerHTML = cardsContent[4].desc;
  // console.log(sImg);
  sImg.setAttribute("src", cardsContent[4].imgURL);
}
 else if (
  window.location.pathname.split("/")[3].split(".")[0] == "service-ConSer"
) {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  // console.log(TempClassName);
  sTitle.innerHTML = cardsContent[5].service;
  sDesc.innerHTML = cardsContent[5].desc;
  // console.log(sImg);
  sImg.setAttribute("src", cardsContent[5].imgURL);
}
 else if (
  window.location.pathname.split("/")[3].split(".")[0] == "service-CE"
) {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  // console.log(TempClassName);
  sTitle.innerHTML = cardsContent[6].service;
  sDesc.innerHTML = cardsContent[6].desc;
  // console.log(sImg);
  sImg.setAttribute("src", cardsContent[6].imgURL);
}
 else if (
  window.location.pathname.split("/")[3].split(".")[0] == "service-ERP_App"
) {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  // console.log(TempClassName);
  sTitle.innerHTML = cardsContent[7].service;
  sDesc.innerHTML = cardsContent[7].desc;
  // console.log(sImg);
  sImg.setAttribute("src", cardsContent[7].imgURL);
}
 else if (
  window.location.pathname.split("/")[3].split(".")[0] == "service-CS"
) {
  // Getting all elements we need
  let sImg = document.getElementById("s-img");
  let sDesc = document.getElementById("s-desc");
  let sTitle = document.getElementById("s-title");
  // console.log(TempClassName);
  sTitle.innerHTML = cardsContent[8].service;
  sDesc.innerHTML = cardsContent[8].desc;
  // console.log(sImg);
  sImg.setAttribute("src", cardsContent[8].imgURL);
}
 else {
}
