// construct class for page content
class MyPage {
    constructor(page_title, page_description, page_offer) {
        this.page_title = page_title;
        this.page_description = page_description;
        this.page_offer = page_offer;
    }
}

// Assign tags to variables
let head = document.getElementsByTagName('h1');
let art = document.getElementsByTagName('article');
let work = document.getElementsByTagName('section');

// Dummy instance of page content class
const webPage = new MyPage('Retest Site', 'This is a site to test my project out. Lets see what we can do. Lorem upsem epsim letsum upsoleum. Doselum. Lorem upsem epsim letsum upsoleum. Doselum. Lorem upsem epsim letsum upsoleum. Doselum. Lorem upsem epsim letsum upsoleum. Doselum. Lorem upsem epsim letsum upsoleum. Doselum. Lorem upsem epsim letsum upsoleum. Doselum. Lorem upsem epsim letsum upsoleum. Doselum. Lorem upsem epsim letsum upsoleum. Doselum. ', 'Buy Now')
//create a variable for updating page title
//let docTitle;
// setting the title
if(!head[0].textContent){
    head[0].textContent = webPage.page_title;
    //styling
    head[0].setAttribute('class', 'primary');
    document.title = webPage.page_title;


} 
//declare a variable for content beyond the 2 nodes deep we have now
let offer;
// setting the description
if (head[0].textContent) {
    work[0].textContent = webPage.page_description;
    //style
    art[0].setAttribute('class', 'section');
    work[0].setAttribute('class', 'section-content');
    //define our element|assign it an element
    offer = document.createElement('button');
    //construct it
    offer.textContent = webPage.page_offer;
    //style it
    offer.setAttribute('class', 'btn mt-2');
    //append it
    art[0].appendChild(offer);
}

