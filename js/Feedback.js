
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

/* Dark/White Mode*/
/*Copy*/

const options = {
  bottom: '10px', // default: '32px'
  right: '5px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff;', // default: '#fff'
  backgroundColor: 'white',  // default: '#fff'
  buttonColorDark: 'yellow',  // default: '#100f2c'
  buttonColorLight: 'black', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

function myFunctionDarkWhiteMode() {
   var element = document.body;
  /* element.classList.toggle("dark-mode");*/

  const darkmode = new Darkmode(element);
darkmode.showWidget();

const darkmodee =  new Darkmode();
darkmodee.toggle();
console.log(darkmode.isActivated()) // will return true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();



/*Menu Bar */


/* Header color */
const headers = document.querySelectorAll("h2");

// Call function when show dialog btn is clicked
document.getElementById("btn-show-dialog").onclick = function(){show_dialog()};
var overlayme = document.getElementById("dialog-container");

function show_dialog() {
 /* A function to show the dialog window */
    overlayme.style.display = "block";
}

// If confirm btn is clicked , the function confim() is executed
function red(){
  $(":header").css({ color:'red' });
   /* code executed if cancel is clicked */  
    overlayme.style.display = "none";
}
function green(){
  $(":header").css({ color:'green' });
   /* code executed if cancel is clicked */  
    overlayme.style.display = "none";
}
function orange(){
  $(":header").css({ color:'orange' });
   /* code executed if cancel is clicked */  
    overlayme.style.display = "none";
}
function standart(){
  $(":header").css({ color:'white' });
   /* code executed if cancel is clicked */  
    overlayme.style.display = "none";
}

/* Size */


var min = 10;
var max = 80;

function increaseFontSize() {
   var elems = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  for (i = 0; i < elems.length; i++) {
    if (elems[i].style.fontSize) {
      var s = parseInt(elems[i].style.fontSize.replace("px", ""));
    } else {
      var s = 40;
    } if (s != max) {
      s += 1;
    }
    elems[i].style.fontSize = s + "px"
  }
}

function decreaseFontSize() {
  var elems = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  for (i = 0; i < elems.length; i++) {
    if (elems[i].style.fontSize) {
      var s = parseInt(elems[i].style.fontSize.replace("px", ""));
    } else {
      var s = 40;
    } if (s != min) {
      s -= 1;
    }
    elems[i].style.fontSize = s + "px"
  }
}

document.querySelector('#increase').addEventListener('click', increaseFontSize);


document.querySelector('#decrease').addEventListener('click', decreaseFontSize);



/* Menu bar after select stay on */

/*$('#myDropdown').on('hide.bs.dropdown', function (e) {
    return false;
});
*/
$('.keep-open').on({
    "shown.bs.dropdown": function() { $(this).attr('closable', false); },
    //"click":             function() { }, // For some reason a click() is sent when Bootstrap tries and fails hide.bs.dropdown
    "hide.bs.dropdown":  function() { return $(this).attr('closable') == 'true'; }
});

$('.keep-open').children().first().on({
  "click": function() {
    $(this).parent().attr('closable', true );
  }
})






/*Message box */
     var tenure = prompt("What's your name ?", "Daniel");
    document.getElementById("validationDefault1").value = tenure;
    


    /* Button */
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
    

function myFunction(){

x = document.getElementById("validationDefault1").value; /* FirstName */
xx = document.getElementById("validationDefault2").value; /* LastName*/
xxx = document.getElementById("validationDefault3").value;
xxxx = document.getElementById("validationDefault4").value;




const regexForPhone = /^(((86|\+3706) \d{3} \d{4})|((86|\+3706)\d{3}\d{4})|((86|\+3706) \d{3}\d{4})|((86|\+3706)\d{3} \d{4}))$/;
const regexNoNumbers = /^[a-zA-Z]+$/;
const regexUsername = /^[a-zA-Z0-9._]{8,20}$/;
var error = false;

/*^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$
 └─────┬────┘└───┬──┘└─────┬─────┘└─────┬─────┘ └───┬───┘
       │         │         │            │           no _ or . at the end
       │         │         │            │
       │         │         │            allowed characters
       │         │         │
       │         │         no __ or _. or ._ or .. inside
       │         │
       │         no _ or . at the beginning
       │
       username is 8-20 characters long
*/
if(! regexNoNumbers.test(x)){
    document.getElementById("validationDefault1").classList.remove("form-control");

    var div = document.getElementById('First-Name-Text');
    div.innerHTML = 'Not Valid FirstName(Enter Please correct Without Numbers)';
     div.style.color = 'red';
     error = true;
  }
  else{ /*alert("Good PhoneNumber");*/

document.getElementById("validationDefault1").classList.add("form-control");

var div = document.getElementById('First-Name-Text');

div.innerHTML = 'Good First Name...';
div.style.color = 'green';
  
}



if(! regexNoNumbers.test(xx)){
      document.getElementById("validationDefault2").classList.remove("form-control");  

    var divv = document.getElementById('Last-Name-Text');
    divv.innerHTML = 'Not Valid LastName(Enter Please correct Without Numbers)';
        divv.style.color = 'red';
   error = true;
  }
  else{ /*alert("Good PhoneNumber");*/

document.getElementById("validationDefault2").classList.add("form-control");


var divv = document.getElementById('Last-Name-Text');

divv.innerHTML = 'Good Last Name...';
  divv.style.color = 'green';
   }


if(! regexUsername.test(xxx)){
      document.getElementById("validationDefault3").classList.remove("form-control");  

    var divv = document.getElementById('UserName-Text');
    divv.innerHTML = 'Not Valid Username({8,20} characters, without symbols)';
        divv.style.color = 'red';
 error = true;
  }
  else{ /*alert("Good PhoneNumber");*/

document.getElementById("validationDefault3").classList.add("form-control");


var divv = document.getElementById('UserName-Text');

divv.innerHTML = 'Good Username...';
  divv.style.color = 'green';
   }


if(! regexForPhone.test(xxxx)){
      document.getElementById("validationDefault4").classList.remove("form-control");  

    var divv = document.getElementById('Phone-Text');
    divv.innerHTML = 'Not Valid PhoneNumber(Lithuanian Number Starts By 86 or +3706';
        divv.style.color = 'red';
         error = true;
  }
  else{ 

document.getElementById("validationDefault4").classList.add("form-control");


var divv = document.getElementById('Phone-Text');

divv.innerHTML = 'Good PhoneNumber';
divv.style.color = 'green';
}

if(! error){
  var buttonChecked = document.getElementById('invalidCheck');
  if(buttonChecked.checked)
{
 var obj = { name: x ,
            surname: xx,
            nickname: xxx,
            phone: xxxx};
            /* value , replacer , space */
  alert("Successful data\n\n" + JSON.stringify(obj, null, 4));

console.table(JSON.stringify(obj, null, 4));
}
}
if(error){
  
 return;
}





}