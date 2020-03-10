const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav links
let links =  document.querySelector("nav").getElementsByTagName('a');
console.log(links);
links[0].textContent = siteContent.nav["nav-item-1"];
links[1].textContent = siteContent.nav["nav-item-2"];
links[2].textContent = siteContent.nav["nav-item-3"];
links[3].textContent = siteContent.nav["nav-item-4"];
links[4].textContent = siteContent.nav["nav-item-5"];
links[5].textContent = siteContent.nav["nav-item-6"];
//new nav links #1
const newLink = document.createElement("links");
newLink.textContent = "Append";
const parentElement = document.querySelector('nav');
parentElement.append(newLink);
newLink.style.color = 'green';
//new nav links #2
const newLink2 = document.createElement("links");
newLink2.textContent = "Prepend";
const parentElement2 = document.querySelector('nav');
parentElement2.prepend(newLink2);
newLink2.style.color = 'green';
//changing nav text color
const navTextColor = document.querySelectorAll('a');
navTextColor.forEach(element => {
  element.style.color = "green";
});

//DOM is Awesome 
const DIA =  document.getElementsByTagName('h1');
DIA[0].textContent = siteContent.cta["h1"];
//causes breaks between each word
document.querySelector(".cta-text h1").innerHTML = siteContent.cta.h1.split(" ").join("<br> ");

//button styling
const button = document.getElementsByTagName('button');
button[0].textContent = siteContent["cta"]["button"];
button[0].style.color = 'green';

//cta image
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

//main section - features heading
const features = document.querySelector('.top-content div:nth-of-type(1) h4');
features.innerText = siteContent["main-content"]["features-h4"]
;
//main section - features content
const featuresCont = document.querySelector('.top-content div:nth-of-type(1) p');
featuresCont.innerText = siteContent["main-content"]["features-content"]
;

//main section - about heading
const about = document.querySelector('.top-content div:nth-of-type(2) h4');
about.innerText = siteContent["main-content"]["about-h4"]
;
//main section - about content
const aboutCont = document.querySelector('.top-content div:nth-of-type(2) p');
aboutCont.innerText = siteContent["main-content"]["about-content"]
;

//middle image
const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom section - services header
const services = document.querySelector('.bottom-content div:nth-of-type(1) h4');
services.innerText = siteContent["main-content"]["services-h4"]
;
//bottom section - services content
const servicesCont = document.querySelector('.bottom-content div:nth-of-type(1) p');
servicesCont.innerText = siteContent["main-content"]["services-content"]
;
//bottom section - product header
const product = document.querySelector('.bottom-content div:nth-of-type(2) h4');
product.innerText = siteContent["main-content"]["product-h4"]
;
//bottom section - product content
const productCont = document.querySelector('.bottom-content div:nth-of-type(2) p');
productCont.innerText = siteContent["main-content"]["product-content"]
;
//bottom section - vision header
const vision = document.querySelector('.bottom-content div:nth-of-type(3) h4');
vision.innerText = siteContent["main-content"]["vision-h4"]
;
//bottom section - vision content
const visionCont = document.querySelector('.bottom-content div:nth-of-type(3) p');
visionCont.innerText = siteContent["main-content"]["vision-content"]
;

//contact section
const contact = document.querySelector('.contact h4');
contact.innerText = siteContent["contact"]["contact-h4"]
//address
const address = document.querySelector('.contact p:nth-of-type(1)' );
address.innerText = siteContent.contact.address
//get proper breaks in the address
let wordsArray = siteContent.contact.address.split(" ");;
document.querySelector('.contact p:nth-of-type(1)').innerHTML = wordsArray[0]+" "+wordsArray[1]+" "+wordsArray[2]+ " "+wordsArray[3]+ "<br>" + wordsArray[4] + wordsArray[5] ;
//phone number
const phone = document.querySelector('.contact p:nth-of-type(2)' );
phone.innerText = siteContent.contact.phone;
//email address
const email = document.querySelector('.contact p:nth-of-type(3)' );
email.innerText = siteContent.contact.email;

//footer
const footer = document.querySelector('footer');
footer.innerText = siteContent.footer.copyright;








//!!!!STRETCH GOALS!!!!
//button hover
document.querySelector('button').onmouseover = function() {mouseOver()} 
function mouseOver() {
  document.querySelector('button').style.backgroundColor = 'dodgerblue'
}
document.querySelector('button').onmouseout = function() {mouseOut()} 
function mouseOut() {
  document.querySelector('button').style.backgroundColor = 'white'
}

//button shaping
document.querySelector('button').style.borderRadius = '15px';

