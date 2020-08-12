// Code Test challenge Redesign reference page using bootstrap or Bulma
//make hero section with button that will disappear when clicked and open a survey form on top of hero
// when survey is filled out and submitted, answers will appear in a results  summary section at the bottom of then
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


// survey is filled out and submitted,
//answers will appear in a results table summary section at the bottom
// of the page with message thanks for sumbitting


function showProfile(){
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var gender = document.getElementById('gender').value;
var age = document.getElementById('age').value;


document.getElementById('showName').innerHTML = name;
document.getElementById('showEmail').innerHTML = email;
document.getElementById('showGender').innerHTML = gender;
document.getElementById('showAge').innerHTML = age;

 }

 //click to call function
 document.getElementById("submit").onclick = function() {
   showProfile();
 };


//page will pop up thanks  section when button is submitted
