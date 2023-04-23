let omain = document.getElementById('main');
// let picons = document.querySelectorAll('.p-c-icons')

const head =  ` <div id="our-team-head">
<span>Our Team</span>
</div>`

omain.innerHTML =head+"<br>"+ omain.innerHTML 
let main = document.getElementById('main-o-au');

const teamMeambers = [
    {fname:'Yashasv',
lname:"Joshi",
twitterLink:"https://twitter.com/yashasvjoshi",
githubLink:"https://github.com/yashasvjoshi",
imgTS:"https://avatars.githubusercontent.com/u/115701902?s=400&u=a0a6945336e81335f27833bb88057f1bc94c293c&v=4"
},
    {fname:'Yash',
lname:"Sharma",
twitterLink:"https://twitter.com/0xYashSharma",
githubLink:"https://github.com/yash-sharma1",
imgTS:"https://avatars.githubusercontent.com/u/44340561?v=4"
}
];




const inserter = ()=>{
    teamMeambers.forEach(member => { 
        main.innerHTML+=
(        `  <div class="p-card">
        <div class="p-img">
        <img src="${member.imgTS}" alt="">
        </div>
        <div class="p-name">${member.fname} ${member.lname}</div>
        <!-- <div class="p-desc">the best</div> -->
        <div class="p-c-icons"><ul class="p-c-icon-c">
        <li class="p-c-icon"><a target="_blank" href="${member.twitterLink}"><img src="../css/images/logos/twitter.png" alt="twitter"></a></li>
        <li class="p-c-icon"><a target="_blank" href="${member.githubLink}"><img src="../css/images/logos/github.jpg" alt="github"></a></li>
        </ul></div>
        </div>
        `)
    });
    
};
inserter()
// main.innerHTML = pcardTemp;
// alert('ffbyrf')