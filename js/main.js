// challenge
//make hero section with button that will disappear when clicked and open a survey form on top of hero
// when survey is filled out and submitted, answers will appear in a results table summary section at the bottom of then
//page with a thank you for submitting message
//solution:

//hero section with button that will disappear when clicked and open a survey form on top of hero

var intro = document.getElementById('introBtn')
intro.onclick = function() {
  hideIntro();
  showIntro();
  function hideIntro() {
    var introElmt =
    document.getElementById('run1');
    introElmt.classList.add("hide-element");
  };

  showIntro()
    function showIntro() {
      var introElmtTwo =
    document.getElementById('run2');
    introElmtTwo.classList.remove("run2-hidden");
  };
}


// survey is filled out and submitted, - fix html to add value for gender and create formInput
var age = document.getElementById('Gender').value;
var age = document.getElementById('Age').value;

//answers will appear in a results table summary section at the bottom of the page with message thanks for sumbitting
// var resultsBtn = document.getElementById('resultsBtn');
// results()
// function showResults (){
//   document.getElementById("age").innerHTML = Age;
//   document.getElementById("gender").innerHTML = Gender;
// }



//page will scroll to new results section when button is submitted
