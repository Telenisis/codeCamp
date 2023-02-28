let dropDown = document.getElementById("quickBtn");
let nav = document.getElementById("navbar")
let main = document.getElementById("main-doc")

dropDown.addEventListener('click', () => {
    nav.style.maxHeight = '275px';
    main.style.marginTop = '270px'
    console.log("hello");
});

function closeDrop(){

}