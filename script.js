let sidebar = document.getElementById('socialscontainer');
let sidearrow = document.getElementById('sidebtn');

function sideBar() {
    sidebar.classList.toggle('active');
    sidearrow.classList.toggle('active');
}

const text = document.querySelector(".introname");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
} 

// Second header & button animations
const secondHeader = document.getElementById('secondHeader');
setTimeout(function() {
    homePageAnimation();
}, 1000);

function homePageAnimation() {
    secondHeader.classList.add('transition');
}

/* Burger Menu Features */
let burgercontainer = document.querySelector('.burgercontainer');
let dropdownmenu = document.querySelector('.dropdownmenu');
function burger() {
    burgercontainer.classList.toggle('active');
    dropdownmenu.classList.toggle('active');
}

/* About Section -> Tag Cloud */
const myTags = ['HTML', 'CSS', 'Javascript', 'React', 'Python', 'Flask', 'Java', 'SQL', 'C',];

var tagCloud = TagCloud('.content', myTags, {
    radius: 150,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});

/* About Section -> Timeline */
(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

class Project {
    constructor(title, brief, image, description, techstack, weblink, gitlink) {
        this.title = title;
        this.brief = brief;
        this.image = image;
        this.description = description;
        this.techstack = techstack;
        this.weblink = weblink;
        this.gitlink = gitlink;
    }
}

const artempo = new Project(
    'Art Emporium', 
    'Display website for Old Saybrook\'s Art Emporium', 
    'images/artempo.png',
    'This website serves as a display for the Art Emporium of Old Saybrook. It features all the major aspects of the store and the wonderful family background of the shop.',
    ['HTML', 'CSS', 'JavaScript'],
    "https://jackf-22.github.io/artemporium/",
    "https://github.com/JackF-22/artemporium"
);

const bluehound = new Project(
    'Blue Hound',
    'Local Restaurant Website',
    'images/bluehoundbg.png',
    'Displaying the local restaurant Blue Hound, including lunch, dinner, and dessert. It also includes the story of Blue Hound and further details.',
    ['HTML', 'CSS', 'JavaScript'],
    "https://jackf-22.github.io/bluehound",
    "https://github.com/JackF-22/bluehound"
);

const projects = [artempo, bluehound];

/* sb stands for side bar - Details all places of information */

let sb = document.querySelector('.sidebar');
let cover = document.querySelector('.entirecover');
let ca = document.getElementById('circlearrow');

let sb1 = document.getElementById('title');
let sb2 = document.getElementById('brief');
let sb3 = document.getElementById('image');
let sb4 = document.getElementById('description');
let sb5 = document.getElementById('techlist');
let sb6 = document.getElementById('weblink');
let sb7 = document.getElementById('gitlink');

function projectInfo(button) {
    sb.style.marginRight = "0px";
    cover.style.zIndex = "50";
    cover.style.opacity = "0.6";

    let p = projects[button.value];

    sb1.innerHTML = p.title;
    sb2.innerHTML = p.brief;
    sb3.src = `${p.image}`;
    sb4.innerHTML = p.description;

    for (i=0; i < p.techstack.length; i++) {
        let item = document.createElement('li')
        item.innerHTML = p.techstack[i];
        sb5.appendChild(item);
    }

    sb6.setAttribute('href', `${p.weblink}`);
    sb7.setAttribute('href', `${p.gitlink}`);
}

const returnPage = async () => {
    sb.style.marginRight = "-350px";
    cover.style.zIndex = "-1";
    cover.style.opacity = "0";

    while (sb5.firstChild) {
        sb5.removeChild(sb5.firstChild);
    }
}

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveals');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 0;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
  }
}

document.querySelectorAll(".linkslist a").forEach((a, i) => {
    setTimeout(() => {
      a.classList.add('show');
    }, 500 * i);
  });

document.querySelectorAll(".btncontainer a").forEach((a, i) => {
    setTimeout(() => {
        a.classList.add('show');
    }, 500 * i);
  });


/* Contact Form Phone Format */
function phoneMask() { 
  var num = $(this).val().replace(/\D/g,''); 
  $(this).val(num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11)); 
}
$('[type="tel"]').keyup(phoneMask);