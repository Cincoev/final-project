let buttonref = document.getElementById("theme");
let divref = document.querySelector("body");
let navref = document.getElementsByClassName("nav_items");
let main = document.getElementsByClassName('main');

console.log(divref);
console.log(buttonref);
console.log(navref);
console.log(main);

// Set initial color for elements with the "main" class
for (let i = 0; i < main.length; i++) {
    main[i].style.color = 'white';
}

// Set initial background color for the body
divref.style.backgroundColor = 'black';

buttonref.onclick = function () {
    if (divref.style.backgroundColor === 'black') {
        divref.style.backgroundColor = 'white';
        divref.style.color = 'black'; 
        
        for (let i = 0; i < navref.length; i++) { 
            navref[i].style.color = 'black';
        }
        for (let i = 0; i < main.length; i++) {
            main[i].style.color = 'black';
        }
    } else {
        divref.style.backgroundColor = 'black'; 
        divref.style.color = 'white';
        
        for (let i = 0; i < navref.length; i++) { 
            navref[i].style.color = 'white';
        }
        for (let i = 0; i < main.length; i++) {
            main[i].style.color = 'white';
        }    
    }
};
