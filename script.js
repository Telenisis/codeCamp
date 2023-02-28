let dropDown = document.getElementById("quickBtn");
let nav = document.getElementById("navbar")
let main = document.getElementById("main-doc")
let link = document.getElementById("navClick")

dropDown.addEventListener('click', () => {
    nav.style.maxHeight = '409px';
    main.style.marginTop = '400px';
    link.style.display = 'block';
    link.style.height = '326px';
    console.log("hello");
});

function closeDrop(){

}