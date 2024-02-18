const form = document.querySelector('form');

// This Usercase will be gtive empty value . //
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e) {
 e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height)){
 results.innerHTML = `Please give a valid height ${height}` ;
}

else if( weight === '' ||  weight < 0 || isNaN(weight)){
 results.innerHTML = `Please give a valid weight ${weight}` ;
}

else{
    const BMI = (weight / ((height*height)/10000 )).toFixed(2);

    // Show The RESULT //

    results.innerHTML = `<span>${BMI}</span>`;
}

}
)

/*

Q1 :- What is preventDeafult ?
Ans :- The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

+> Clicking on a "Submit" button, prevent it from submitting a form
=> Clicking on a link, prevent the link from following the URL
=> Note: Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.

=> Note: The preventDefault() method does not prevent further propagation of an event through the DOM. Use the stopPropagation() method to handle this.

Q2 :- What is ParseInt ?
Ans :- The parseInt method parses a value as a string and returns the first integer.

If you write This :- results.innerHTML = `${height}` 

// -: After :- //

if(height === '' || height < 0 || isNaN(height)){
 results.innerHTML = `Please give a valid height ${height}` ;
}

// When You do Open it in Internet Explorer :- If you type 4 in Height and do calculate then Answer Come :- 4 and If you type a in Height and do calculate then Answer Come :- a //

*/