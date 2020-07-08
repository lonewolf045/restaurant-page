//window.alert("ALL IS GOING WELL !!! YOHOOOOOOO!!!");
import homePageLoader from './homePage.js';
import menuPageLoader from './menuPage';
import contactPageLoader from './contactPage';

const loadPage = () => {
    const mainDiv = document.querySelector('#content');
    const navBar = document.createElement('div');
    const restName = document.createElement('h1');
    const imageRest = document.createElement('img');
    const navButtons = document.createElement('div');
    const body = document.querySelector('body');
    restName.innerHTML = "ICHIRAKU RAMEN";
    restName.setAttribute('id','restName');
    navBar.appendChild(restName);
    imageRest.src = 'https://cdn.shopify.com/s/files/1/1869/0319/products/art-file-color-hgr_4326abc3-10e9-481a-a68b-191d89a8ff85_1024x1024.jpg?v=1572541687';
    imageRest.setAttribute('id','imageRest');
    navBar.appendChild(imageRest);
    navButtons.setAttribute('id','navButtons');
    let tabs = ['Home','Menu','Contact'];
    tabs.forEach(tab => {
        let button = document.createElement('a');
        button.href = "#";
        button.classList.add('tab');
        button.id = 'tab' + tab;
        button.textContent = tab;
        /*if(tab === 'Home')
            button.addEventListener('click',(e) => {
                
                homePageLoader(mainDiv)});
        if(tab === 'Menu')
            button.addEventListener('click',(e) => {menuPageLoader(mainDiv)});
        if(tab === 'Contact')
            button.addEventListener('click',(e) => {contactPageLoader(mainDiv)});
        */
        button.addEventListener('click',(e) => {
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(butt => {
                butt.classList.remove('active');
            });
            e.target.classList.add('active');
            if(tab === 'Home') {
                mainDiv.innerHTML = `<img src = "./gifs/ajax-loader.gif" id = 'loading'>`;
                setTimeout(() => {homePageLoader(mainDiv);},500);
            }
            if(tab === 'Menu') {
                mainDiv.innerHTML = `<img src = "./gifs/ajax-loader.gif" id = 'loading'>`;
                setTimeout(() => {menuPageLoader(mainDiv);},500);
            }
            if(tab === 'Contact') {
                mainDiv.innerHTML = `<img src = "./gifs/ajax-loader.gif" id = 'loading'>`;
                setTimeout(() => {contactPageLoader(mainDiv);},500);
            }
        });
        navButtons.appendChild(button);
    });
    navBar.appendChild(navButtons);
    navBar.id = 'navBar';
    body.insertBefore(navBar,mainDiv);

    mainDiv.innerHTML = `<img src = "./gifs/ajax-loader.gif" id = 'loading'>`;
    setTimeout(() => {document.querySelector('#tabHome').click();},500);
    //homePageLoader(mainDiv);
};

loadPage();