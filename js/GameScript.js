
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






/* GAME */



/* document.addEventListener('DOMContentLoaded' suveikia
tik tada kai pilnai paleistas HTML dokumentas*/
document.addEventListener('DOMContentLoaded', () => {
  /* querySelector  - metodas, leidziantis
  paimti visus metodus is HTMl */
  const grid = document.querySelector('.grid')
  /* Sukuriame div su vardu doodler*/
  const doodler = document.createElement('div')
  let isGameOver = false
  let speed = 3
  let platformCount = 5 /* Kiek tu borduku*/
  let platforms = []
  let score = 0
  let doodlerLeftSpace = 50
  let startPoint = 150
  let doodlerBottomSpace = startPoint
  const gravity = 0.9
  let upTimerId
  let downTimerId
  let isJumping = true
  let isGoingLeft = false
  let isGoingRight = false
  let leftTimerId
  let rightTimerId

/* Naudojamas butent sukurti ir 
atvaizduoti ta nauja borduka */
  class Platform {
    constructor(newPlatBottom) {
      /* 400px(grid) -85px(platform) */
      /* Tas left space dabar bus pas mus
      randominis is 0 - 315 px .. */ 
      this.left = Math.random() * 315 
      /* Tas atstumas*/
      this.bottom = newPlatBottom
      /* Sukuriame div elementa */
      this.visual = document.createElement('div')

      /* consts nes del saugojimo
      Store -- greiciausias dalykas 
      naudojant const.. */
      const visual = this.visual
      visual.classList.add('platform')
      visual.style.left = this.left + 'px'
      visual.style.bottom = this.bottom + 'px'

      /* Viska putinam i musu General grid*/
      grid.appendChild(visual)
    }
  }

 /* Pirminis dalykas */
  function createPlatforms() {
    for(let i =0; i < platformCount; i++) {
      /* Cia tiesiog aprasyta tokia logika
      kaip sutraukti bordukus */ 
      let platGap = 600 / platformCount /* dydis gapo */
      /* Cia yra atstumai tarp borduku
      nuo buttono 100 + 0 .. 120 .. 240 */
      let newPlatBottom = 100 + i * platGap
      /* make new borduka, sukuriant ir iskvieciant
      ta nauja sukurta klase*/
      let newPlatform = new Platform (newPlatBottom)
      /* i platforms masyva, mes pushinam
      visus naujai sukurtas platformas, kad
      po to su jais dirbti .. */
      platforms.push(newPlatform)
      console.log(platforms)
    }
  }

  function movePlatforms(){
    /* kai zmogeliukas yra > 200 
    height */
    if (doodlerBottomSpace > 200) {
        platforms.forEach(platform => {
          /* musu platformu atstumas 
          nuo apacios mazeja ...*/
          platform.bottom -= 4

          /* paimame vizualizavima */
          let visual = platform.visual

          visual.style.bottom = platform.bottom + 'px'

          /* Jeigu kokia nors is platformu
          yra tame < 10 px bottom , tai 
          sukuriame nauja ...*/ 
          if(platform.bottom < 10) {
            let firstPlatform = platforms[0].visual
            firstPlatform.classList.remove('platform')

            /* Javascript vienas is metodu 
            kuris leidzia pasalinti is 
            null elementa, po to pagal numeracija
            [1] pristumti i [0] vieta ... */
            platforms.shift()

            console.log(platforms)
            score++
            var newPlatform = new Platform(600)
            platforms.push(newPlatform)
          }
      }) 
    }
    
  }

  function createDoodler() {
    /* Sukurta diva vardu doodle, pridedame
    i html grid klase */
    grid.appendChild(doodler)
    /* pridedame sita klase doodler
    kuri yra aprasyta css */
    doodler.classList.add('doodler')
   
   /* Pries game Starta
    Nukreipia musu DOdleri prie [0] platformos*/
    doodlerLeftSpace = platforms[0].left
     /* is (...) tam tikros
     puses padaro toki paddinga(atstuma) ir
     ten nustato ta pointa */
    doodler.style.left = doodlerLeftSpace + 'px'
    doodler.style.bottom = doodlerBottomSpace + 'px'
  }

function fall() {
  isJumping = false
  /* nusako kad kilti aukstin jau nebereikia*/
    clearInterval(upTimerId)
    downTimerId = setInterval(function () {
      doodlerBottomSpace -= 5
      doodler.style.bottom = doodlerBottomSpace + 'px'
      if (doodlerBottomSpace <= 0) {
        gameOver()
      }
      platforms.forEach(platform => {
        if (
          (doodlerBottomSpace >= platform.bottom) &&
          (doodlerBottomSpace <= (platform.bottom + 15)) && /* 15 ilgis platformos*/
          ((doodlerLeftSpace + 60) >= platform.left) && /* 60 zmogeliugo plits*/
          (doodlerLeftSpace <= (platform.left + 85)) &&
          !isJumping
          ) {
            console.log('tick')

            /* Vat ta vieta yra butent 
            reset starting point, nes
            be jo musu zmogeliukas soktu
            pagal seted ammount, ne auksciau ... */
            startPoint = doodlerBottomSpace
            /* Jeigu leidesi ant platformos
            tai vel darom jumpa */
            jump()
            console.log('start', startPoint)
            isJumping = true
          }
      })

    },20)
}

  function jump() {
    clearInterval(downTimerId)
    isJumping = true

    /* Dalykas/Animacija kai mes norime daryti
    musu mooving */
    upTimerId = setInterval(function () {
      console.log(startPoint)
      console.log('1', doodlerBottomSpace)
      /* doodlerBottomSpace padaro ta pliusavima
      doodler.style.bottom paciame html dokumente
      tai realizuoja ...*/
      doodlerBottomSpace += 20
      doodler.style.bottom = doodlerBottomSpace + 'px'
      console.log('2',doodlerBottomSpace)
      console.log('s',startPoint)
      if (doodlerBottomSpace > (startPoint + 200)) {
        fall() /* Funckcija kai krentame..*/
        isJumping = false
      }
    },30)
  }

  function moveLeft() {
    if (isGoingRight) {
        clearInterval(rightTimerId)
        isGoingRight = false
    }
    isGoingLeft = true
    leftTimerId = setInterval(function () {
        if (doodlerLeftSpace >= 0) {
          console.log('going left')
          doodlerLeftSpace -=5
           doodler.style.left = doodlerLeftSpace + 'px'
        } else moveRight()
    },20)
  }

  function moveRight() {
    if (isGoingLeft) {
        clearInterval(leftTimerId)
        isGoingLeft = false
    }
    isGoingRight = true
    rightTimerId = setInterval(function () {
      //changed to 313 to fit doodle image
      if (doodlerLeftSpace <= 313) {
        console.log('going right')
        doodlerLeftSpace +=5
        doodler.style.left = doodlerLeftSpace + 'px'
      } else moveLeft()
    },20)
  }
  
  function moveStraight() {
    isGoingLeft = false
    isGoingRight = false
    clearInterval(leftTimerId)
    clearInterval(rightTimerId)
  }

  //assign functions to keyCodes
  function control(e) {
    doodler.style.bottom = doodlerBottomSpace + 'px'
    if(e.key === 'ArrowLeft') {
      moveLeft()
    } else if (e.key === 'ArrowRight') {
      moveRight()
    } else if (e.key === 'ArrowUp') {
      moveStraight()
    }
  }

  function gameOver() {
    console.log('Game Over')
    isGameOver = true
    while (grid.firstChild) {
      console.log('remove')
      grid.removeChild(grid.firstChild)
    }
    grid.innerHTML = score
    clearInterval(upTimerId)
    clearInterval(downTimerId)
    clearInterval(leftTimerId)
    clearInterval(rightTimerId)
  }


  function start() {
    if (!isGameOver) {
      /* Jeigu zaidimas nepralostas,
      mes kuriame elementus */
      createPlatforms()
      createDoodler()
      /* Kaip kart ir atsakingas uz ta
      live refreshinima, kas 30 milisek ..*/
      setInterval(movePlatforms,30)
      jump(startPoint)
      /* mo mygtuko paspaudimo kvieciamas 
      control .. */
      document.addEventListener('keyup', control)
    

/*eventTarget.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }*/
    } 
  }

  /* Gali buti prirista prie button ... 
     kad pradeti ta zaidima */
  start()
})