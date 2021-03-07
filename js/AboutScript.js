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