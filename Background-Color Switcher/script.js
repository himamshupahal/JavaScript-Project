const buttons = document.querySelectorAll('.button') ;
const body = document.querySelector('body') ;

/*

console.log(buttons);
console.log(body);

// NOTE :- All Above Console.log() 's Result get in console . To Know querySelectorAll do work or not //

*/

buttons.forEach( function(button) {
//    console.log(button);
   button.addEventListener('click',function(e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey' ) {
        body.style.backgroundColor = "grey"
    }

    if(e.target.id === 'white' ) {
        body.style.backgroundColor = "white"
    }

    if(e.target.id === 'blue' ) {
        body.style.backgroundColor = "blue"
    }

    if(e.target.id === 'yellow' ) {
        body.style.backgroundColor = "yellow"
    }
    
    if(e.target.id === 'red' ) {
        body.style.backgroundColor = "red"
    }
    if(e.target.id === 'green' ) {
        body.style.backgroundColor = "green"
    }
    if(e.target.id === 'purple' ) {
        body.style.backgroundColor = "purple"
    }
    if(e.target.id === 'orange' ) {
        body.style.backgroundColor = "orange"
    }
    if(e.target.id === 'pink' ) {
        body.style.backgroundColor = "pink"
    }
    if(e.target.id === 'brown' ) {
        body.style.backgroundColor = "brown"
    }

}
)
}
)