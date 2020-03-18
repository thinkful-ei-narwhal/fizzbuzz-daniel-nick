'use strict';
function fizzBuzz(){
  $('#number-chooser').submit(event => {
    event.preventDefault();
    const num = parseInt($(event.currentTarget).find('input[name="number-choice"]').val());
    
    let result = [];

    for (let i = 1; i <= num; i++) {
      if (i % 15 === 0) {
        result.push($('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>')); 
      } else if (i % 5 === 0) {
        result.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
      } else if (i % 3 === 0) {
        result.push($('<div class="fizz-buzz-item fizz"><span>fizz</span></div>')); 
      } else {
        result.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
      }
      $('.js-results').append(result);
    }
  });
}

$(fizzBuzz);