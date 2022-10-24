const navBar = document.querySelector(".nav");
const menu = document.querySelector(".fa-bars");
const upButton = document.getElementById("upBtn");


/*When a client refresh the page it goes back to the beginning */

window.onload = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: `smooth`
    })

};



/* When a client stay at certain point, the up Button will be available */

window.onscroll = function () { showUpButton() };

function showUpButton() {
    return (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) ? upButton.style.display = "block" : upButton.style.display = "none";
}

/*The upButton function */

function goTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

/* It shows the menu if there is a mobile client */
function showMenu() {
    navBar.style.overflow == "visible" ? navBar.style.overflow = "hidden" : navBar.style.overflow = "visible";
}






