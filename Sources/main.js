function showMainMenu() {
     let logo1 = document.getElementById('logo');
     document.getElementById('enter-thought').style.visibility = 'hidden';
     document.getElementById('main-menu').style.visibility = 'visible';
     mus_mainmenu.play();
     
     let topPosition = parseInt(logo1.style.top.replace('%', '')) || 100; // \
     topPosition -= 5;                                                                                           //   } It looks like there are a couple of issues with your code that could be causing the problem: The style.top property should be a string with a unit, but in the showMainMenu function, it is being subtracted directly from another string, which won't work as intended.Also, logo1.style.top - '5%' should be parseInt(logo1.style.top) - 5 + '%' or a similar approach to ensure the math operation is valid.
     logo1.style.top = topPosition + '%';                                                          // /

     let logolift = setInterval(function() {
          topPosition -= 5;
          logo1.style.top = topPosition + '%';
          if(logo1.style.top == '20%') {clearInterval(logolift); beginLogojump();}
     }, 1190);
}

function beginLogojump() {
     document.getElementById('menubutton1').style.visibility = 'visible';
     document.getElementById('menubutton2').style.visibility = 'visible';
     let logo1 = document.getElementById('logo');
     let topPosition = parseInt(logo1.style.top.replace('%', '')) || 100;
     let logojump = setInterval (function() {
          if(introBegun) {clearInterval(logojump);}
          topPosition += 3;
          logo1.style.top = topPosition + '%';
          setTimeout(function() {
               topPosition -= 3;
          logo1.style.top = topPosition + '%';
          }, 1130);
     }, 2260);
}

function showIntro() {
     introBegun = true;
     document.getElementById('main-menu').style.opacity = 0;
     document.getElementById('main-menu').style.pointerEvents = 'none';
     setTimeout(function() {document.getElementById('main-menu').style.visibility = 'hidden';},300);
     document.getElementById('intro').style.visibility = 'visible';
}

function switchIntro(r) {
     switch(r) {
          case 1:
               document.getElementById('intro').style.visibility = 'hidden';
               document.getElementById('intro2').style.visibility = 'visible';
               document.getElementById('intro').style.pointerEvents = 'none';
               break;
          case 2:
               document.getElementById('intro2').style.pointerEvents = 'none';
               document.getElementById('intro2').style.visibility = 'hidden';
               document.getElementById('intro3').style.visibility = 'visible';
               break;
          case 3:
               document.getElementById('intro3').style.pointerEvents = 'none';
               document.getElementById('intro3').style.visibility = 'hidden';
               document.getElementById('intro4').style.visibility = 'visible';
               break;
     }
}

function endIntro() {
     document.getElementById('intro4').style.opacity = 0;
     document.getElementById('intro4').style.pointerEvents = 'none';
     setTimeout(function() {
               document.getElementById('intro4').style.visibility = 'hidden';
     }, 500);
     document.getElementById('gazeta').style.visibility = 'visible';
}

function closeGazette() {
     document.getElementById('gazeta').style.opacity = 0;
     //document.getElementById('gazeta').style.pointerEvents = 'none';
     mus_mainmenu.Volume = 0.9;
     setTimeout(function() {mus_mainmenu.Volume = 0.9;}, 200);
     setTimeout(function() {mus_mainmenu.Volume = 0.7;}, 400);
     setTimeout(function() {mus_mainmenu.Volume = 0.5;}, 600);
     setTimeout(function() {mus_mainmenu.Volume = 0.3;}, 800);
     setTimeout(function() {mus_mainmenu.Volume = 0.1; document.getElementById('gazeta').style.visibility = 'hidden';}, 1000);
     setTimeout(function() {mus_mainmenu.pause();}, 1200);
     setTimeout(function() {
               document.getElementById('gazeta').style.opacity = 0;
     }, 500);
     document.getElementById('biuro').style.visibility = 'visible';
     document.getElementById('biuro').style.opacity = 1;
     updateTopBar(); petentUpd();

          // THIS IS WHERE YOU PUT THE AMBIENT, DUMBASS.
          ambience1.currentTime = 0; ambience3.currentTime = 0;
          ambience1.volume = 0.1; ambience3.volume = 0.11;
          ambience1.play(); ambience3.play();
          // CAUSE I KNOW YOU WILL SEARCH FOR IT LATER FOR STOPPING/PLAYING WITH HOW SHITFULLY YOU MANAGED THIS. CONGRATS.
}


const targetSequence = ['M', 'A', 'R', 'S', 'T', 'O', 'N'];
let currentIndex = 0;

document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();

  if (key === targetSequence[currentIndex]) {
    currentIndex++;
    if (currentIndex === targetSequence.length) {
      triggerFunction(); // Call your function here
      currentIndex = 0;  // Reset for future detection
    }
  } else {
    currentIndex = key === targetSequence[0] ? 1 : 0; // Restart if first key matches
  }
});

function triggerFunction() {
  console.warn("It's John Marston, Micah!!");
  easter_marston.currentTime = 0; easter_marston.play();
}

let clickeds = 0;
function secret2() {
     clickeds++;
     if (clickeds >= 10) {
          window.location.replace('Materials/temp/empty/bin/nothinghere/bro/stop/funny.png');
     }
}