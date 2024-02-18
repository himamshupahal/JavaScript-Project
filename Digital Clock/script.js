const clock = document.getElementById('clock')

// const clock = document.querySelector('#clock') //

/*

let date = new Date();
console.log(date.toLocaleDateString());
// RESULT :-  18/2/2024 //
// NOTE :- Its  RESULT get in console of internet Explorer //

*/

/*

setInterval( function () {
    let date = new Date();
    console.log(date.toLocaleDateString());
},1000

)

// RESULT :- seconds are start in console of Internet Explorer // 

*/

setInterval( function () {
    let date = new Date();

    // console.log(date.toLocaleDateString());

    clock.innerHTML = date.toLocaleTimeString();

},1000

)


