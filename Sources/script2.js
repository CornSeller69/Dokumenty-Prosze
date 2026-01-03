
let amb = false;
function playAm() {
      if (!amb) {
            ambience1.currentTime = 0; ambience3.currentTime = 0;
            ambience1.volume = 0.1; ambience3.volume = 0.11;
            ambience1.play(); ambience3.play();
            amb = true;
      }
      updateTopBar();
      petentUpd();
      updateGuideBook();
}

// USE AT BEGINNING OF DAYS!!
function updateTopBar() {
      if (currentDay < 10) {
            data = '0'  + currentDay + '.01.1984';
      } else if (currentDay >= 10) {
            data = currentDay + '.01.1984';
      }
      document.getElementById('topheader').innerHTML = data + ` | Pozostało dzisiejszych petentów: ` + petentsLeft + ` | Twoje wykroczenia: ` + wykroczenia;
}

function callNext() {
      if(boothEmpty) {
            boothEmpty = false;
            sfx_next.currentTime = 0;
            sfx_next.play();
            petentMaker();
            setTimeout(function() {
                  let petent = document.getElementById("petent");
                  petent.style.transform = "rotate(10deg)";
                  sfx_footsteps.currentTime = 1.1;
                  sfx_footsteps.play();
                  petent.style.left = 0;
                  setTimeout(function() {
                        petent.style.transform = "rotate(0deg)";
                        petent.style.opacity = 1;
                        sfx_footsteps.pause();
                        sfx_talk1.currentTime = 0;
                        sfx_talk1.play();
                        document.getElementById("dialog-box").style.visibility = 'visible';
                        if (isDiplomat) {
                              document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                              <p id="dialog-words">Dokumenty, Proszę.</p><button onclick="introSpeechDip()">DALEJ...</button>`;
                        } else if(letDay4GuyIn && events[4] == true) {
                              document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                              <p id="dialog-words">Dokumenty, Proszę.</p><button onclick="introSpeechDay4in5(0)">DALEJ...</button>`;
                        } else if(!letDay4GuyIn && events[4] == true) {
                              document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                              <p id="dialog-words">Dokumenty, Proszę.</p><button onclick="introSpeechDay4in5N()">DALEJ...</button>`;
                        } else {
                              document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                              <p id="dialog-words">Dokumenty, Proszę.</p><button onclick="showPass()">DALEJ...</button>`;
                        }
                        currentTranscript = currentTranscript + `<p style="color:indianred;">Dokumenty, proszę.</p>`;
                  }, 2000);
            }, 1800);
            currentTranscript = ``;
      }
}
function introSpeechDip() {
      sfx_talk2.currentTime = 0; sfx_talk2.play();
      document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
            <p id="dialog-words">Zażądano tutaj mojej obecności.</p><button onclick="showPass()">DALEJ...</button>`;
      currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Zażądano tutaj mojej obecności.</p>`;
}
function introSpeechDay4in5(hf) {
      switch(hf) {
            case 0:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                  <p id="dialog-words">Cześć byłem tu wczoraj!</p><button onclick="introSpeechDay4in5(1)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Cześć byłem tu wczoraj!</p>`;
                  break;
            case 1:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                  <p id="dialog-words">Zapomniałem tego całego biletu wstępu.. Ale dzisiaj go mam!</p><button onclick="showPass()">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Zapomniałem tego całego biletu wstępu.. Ale dzisiaj go mam!</p>`;
                  break;
      }
}
function introSpeechDay4in5N() {
      sfx_talk2.currentTime = 0; sfx_talk2.play();
      document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
            <p id="dialog-words">Mówiłem, że wrócę! Mam bilet.</p><button onclick="showPass()">DALEJ...</button>`;
      currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Mówiłem, że wrócę! Mam bilet.</p>`;
}

function walkAway() {
      petentsLeft--;
      updateTopBar(); // dla aresztów bo nie działa coś znowu <3
      if (beenArrested) {beenArrested = false; amtArrested++; document.getElementById("dialog-box").style.visibility = 'hidden';} // j.w.
      sfx_footsteps.currentTime = 1.1;
      sfx_footsteps.play();
      let petent = document.getElementById("petent");
      petent.style.left = '-115%'; petent.style.opacity = '0.75';
      petent.style.transform = "rotate(-10deg)";
}

function showPass() {
      if (isDiplomat) {
            document.getElementById("passport-opener").style.visibility = 'hidden';
            document.getElementById("dialog-box").style.visibility = 'hidden';
            document.getElementById("legitymacja").style.visibility = 'visible';
      } else {
            document.getElementById("passport-opener").style.visibility = 'hidden';
            document.getElementById("dialog-box").style.visibility = 'hidden';
            document.getElementById("passport").style.visibility = 'visible';
            if (currentDay >= 3 && hasEntryTicket == true && nation !== "Unia Ciechocińska") {
                  document.getElementById("entrypass").style.visibility = 'visible';
            } else if (currentDay >= 3 && hasEntryTicket == true && nation == "Unia Ciechocińska") {
                  document.getElementById("citizenid").style.visibility = 'visible';
            }
      }
}
function hidePass() {
      document.getElementById("passport").style.visibility = 'hidden';
      document.getElementById("passport-opener").style.visibility = 'visible';
      if (currentDay >= 3) {
            document.getElementById("entrypass").style.visibility = 'hidden';
            document.getElementById("citizenid").style.visibility = 'hidden';
      }
}
function hideLegit() {
      document.getElementById("legitymacja").style.visibility = 'hidden';
      document.getElementById("passport-opener").style.visibility = 'visible';
}

function openGuide() {
      if (!somethingOpenError) {
            somethingOpenError = true;
            //document.getElementById("playerguide").style.visibility = 'visible';
            document.getElementById("playerguide").style.bottom = '10%';
            loadGuidePages();
      }
}

// - c
function flipPage(x) {
      sfx_pageflip.currentTime = 0;
      sfx_pageflip.play();
      if (x == 1) {
            if (guidePage == 1) {
                  document.getElementById("playerguide").style.bottom = '-100%';
                  //setTimeout(function() {document.getElementById("playerguide").style.visibility = 'hidden';},501);
                  somethingOpenError = false;
            }
            if (guidePage != 1) {guidePage--;}
            console.log("Page: " + guidePage);
      } else if (x == 2) {
            
            guidePage++;
            console.log("Page: " + guidePage);
      }
      loadGuidePages();
      if (guidePage == 1) {document.getElementById("gb1").innerHTML = "ZAMKNIJ";} else {document.getElementById("gb1").innerHTML = "&#8592";}
}

function closeBulletin() {
      document.getElementById("bulletin").style.bottom = '-100%';
      //setTimeout(function() {document.getElementById("bulletin").style.visibility = 'hidden';},501);
      sfx_pageflip.currentTime = 0;
      sfx_pageflip.play();
      somethingOpenError = false;
}

function openTranscript() {
      if (!somethingOpenError) {
            somethingOpenError = true;
            //document.getElementById('transcript').style.visibility = 'visible';
            document.getElementById("transcript").style.bottom = '10%';
            let content = document.getElementById('tscript-content');
            content.innerHTML = currentTranscript;
      }
}
function closeTranscript() {
      document.getElementById("transcript").style.bottom = '-100%';
      //setTimeout(function() {document.getElementById("transcript").style.visibility = 'hidden';},501);
      sfx_pageflip.currentTime = 0;
      sfx_pageflip.play();
      somethingOpenError = false;
}

function toggleGate() {
      if (playShutter) {
            playShutter = false;
            setTimeout(function() {playShutter = true;},3001);
            sfx_shutter.currentTime = 0;
            sfx_shutter.play();
      }
      switch(shutterOpen) {
            case false:
                  document.getElementById("gate-switch").src = 'Materials/items/turn-off.png';
                  document.getElementById("shutter").style.top = '-100%';
                  setTimeout(function() {shutterOpen = true;},3001);
                  break;
            case true:
                  document.getElementById("gate-switch").src = 'Materials/items/turn-on.png';
                  document.getElementById("shutter").style.top = '0%';
                  setTimeout(function() {shutterOpen = false;},3001);
                  break;
      }
}

function stampEntry() {
      if (!boothEmpty && !somethingOpenError) {
            document.getElementById("stampPopup").style.visibility = 'visible';
            somethingOpenError = true;
      }
}
function closeSPopup() {
      document.getElementById("stampPopup").style.visibility = 'hidden';
      somethingOpenError = false;
}
function issueStamp(x) {
      if(isDiplomat) {isDiplomat = false;}
      sfx_stamp.currentTime = 0;
      sfx_stamp.play();
      approvedEntry = x;
      closeSPopup();
      if(!eventWillHappen) {setTimeout(function() {boothEmpty = true;},2222);}
      updateTopBar();
      document.getElementById("passport-opener").style.visibility = 'hidden';
      checkMistakes();
}

function checkMistakes() {
      document.getElementById("dialog-box").style.visibility = 'hidden'; // to jest dla aresztów aby dialogi zamykało..
      if (!eventWillHappen) {
            walkAway();
            if (shouldEnter) {
                  if(approvedEntry) {
                        amtEntered++;
                        money = money + 5; earns += 5;
                        if (petentsLeft == 0) {endWorkDay('');}
                  } else if (!approvedEntry) {
                        amtDenied++;
                        cite(`Petent miał wszystko zgodne, powinien był być wpuszczony.`);
                        checkWyk();
                  }
            } else if (!shouldEnter) {
                  if (beenArrested) {
                        amtArrested++;
                        if (!shouldArrested) {
                              cite(`Bezpodstawnie aresztowano petenta.`);
                              checkWyk();
                              beenArrested = false;
                        } else if (shouldArrested) {
                              money = money + 5; earns += 5;
                              if (petentsLeft == 0) {endWorkDay('');}
                              shouldArrested = false;
                              beenArrested = false;
                        }
                  }
                  if(!approvedEntry) {
                        amtDenied++;
                        money = money + 5; earns += 5;
                        if (petentsLeft == 0) {endWorkDay('');}
                  } else if (approvedEntry) {
                        amtEntered++;
                        cite(`Niezgodne dane na dokumentach: ` + niezgodne);
                        checkWyk();
                  }
            }
      } else {
            if (events[0] == true) {event_disptOst();}
            if (events[1] == true) {event_suicideDay2();}
            if (events[2] == true) {event_noentryticket1();}
            if (events[3] == true) {event_diplomat1();}
            if (events[4] == true) {event_noentryticket2();}
            if (events[5] == true) {event_criminal1();}
      }
}

function cite(c) {
      wykroczenia++;
      amtWykrocz++;
      updateTopBar();
      sfx_print.currentTime = 0;
      sfx_print.play();
      document.getElementById("cite-desc").innerHTML = c;
      let h = document.getElementById("citation");
      h.style.visibility = 'visible';
      h.style.bottom = '-40%';
      setTimeout(function() {
            h.style.bottom = '-15%';
            setTimeout(function() {
                  h.style.bottom = '10%';
                  sfx_beep.currentTime = 0;
                  sfx_beep.play();
                  setTimeout(function() {
                        h.style.bottom = '35%';
                  },600)
            },600);
      },600);
}
function closeCite() {
      document.getElementById("citation").style.visibility = 'hidden';
      document.getElementById("citation").style.bottom = '-60%';
      if (petentsLeft == 0) {endWorkDay('');}
}

function checkWyk() {
      let hh = document.getElementById("cite-penalty");
      if (wykroczenia >= 3) {
            money = money - 5;  earns -= 5;
            hh.innerHTML = 'Grzywna: 5 złotych';
      } else if (wykroczenia == 1) {
            hh.innerHTML = 'Grzywna: Wydano ostrzeżenie';
      } else if (wykroczenia == 2) {
            hh.innerHTML = 'Grzywna: Ostatnie ostrzeżenie!';
      }
}

function callGuards() {
      if (currentDay >= 5) {beenArrested = true; document.getElementById("passport-opener").style.visibility = 'hidden';}
      if (!boothEmpty && currentDay >= 5 && !eventWillHappen) {
            sfx_alarm.currentTime = 0;
            sfx_alarm.play();
            if (shutterOpen) {toggleGate();}
            setTimeout(function() {
                  sfx_shout.currentTime = 0;
                  sfx_shout.play();
                  document.getElementById("dialog-box").style.visibility = 'visible';
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:cadetblue;" id="dialog-actor">Ochrona</h1>
                        <p id="dialog-words">Wyłaź stamtąd!</p><button onclick="document.getElementById('dialog-box').style.visibility = 'hidden'; walkAway();">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:cadetblue;">Wyłaź stamtąd!</p>`;
            },2500);
      } else if (!boothEmpty && currentDay >= 5 && eventWillHappen) {
            sfx_alarm.currentTime = 0;
            sfx_alarm.play();
            if (shutterOpen) {toggleGate();}
            setTimeout(()=>{boothEmpty = true;},2222);
            if (events[4]) {
                  day5needtip = false;
                  eventWillHappen = false; events[4] = false;
                  somethingOpenError = false;
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
            document.getElementById("dialog-box").style.visibility = 'visible';
            document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                  <p id="dialog-words">Uh, co się dzieje?</p><button onclick="arrestPostdialog()">DALEJ...</button>`;
            currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Uh, co się dzieje?</p>`;
            }
            if (events[5]) {
                  eventWillHappen = false; events[4] = false;
                  sfx_talk1.currentTime = 0; sfx_talk1.play();
                  document.getElementById("dialog-box").style.visibility = 'visible';
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                        <p id="dialog-words">Nie powinniście byli tutaj przychodzić.</p><button onclick="arrestDay5dialog(0)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:indianred;">Nie powinniście byli tutaj przychodzić.</p>`;
            }
      } else if (currentDay < 5) {
            sfx_nobuzz.currentTime = 0;
            sfx_nobuzz.play();
      }
}
function arrestPostdialog() {
      sfx_shout.currentTime = 0;
      sfx_shout.play();
      document.getElementById("dialog-box").style.visibility = 'visible';
      document.getElementById("dialog-box").innerHTML = `<h1 style="color:cadetblue;" id="dialog-actor">Ochrona</h1>
            <p id="dialog-words">Wyłaź stamtąd!</p><button onclick="walkAway()">DALEJ...</button>`;
      currentTranscript = currentTranscript + `<p style="color:cadetblue;">Wyłaź stamtąd!</p>`;
}
function arrestDay5dialog(hf) {
      switch(hf) {
            case 0:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                  <p id="dialog-words">Będziesz tego żałował.</p><button onclick="arrestDay5dialog(1)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Będziesz tego żałował.</p>`;
                  break;
            case 1:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                  <p id="dialog-words">Śmieszne, że dziś tu przyszliście... akurat jak zaczęliśmy łapać.</p><button onclick="arrestPostdialog()">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:indianred;">Śmieszne, że dziś tu przyszliście... akurat jak zaczęliśmy łapać.</p>`;
                  break;
      }
}

function event_disptOst() {
      eventWillHappen = false; events[0] = false;
      if (approvedEntry) {
            walkAway();
            cite(niezgodne);
            setTimeout(function() {boothEmpty = true;},2222);
            checkWyk();
      } else {
            sfx_talk2.currentTime = 0; sfx_talk2.play();
            document.getElementById("dialog-box").style.visibility = 'visible';
            document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                  <p id="dialog-words">Odmowa? Moje dokumenty są aktualne!</p><button onclick="event1_6_talk(0)">DALEJ...</button>`;
            currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Odmowa? Moje dokumenty są aktualne!</p>`;
      }
}
function event1_6_talk(ab) {
      switch (ab) {
            case 0:
                  sfx_talk1.currentTime = 0; sfx_talk1.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                        <p id="dialog-words">Nie wpuszczamy obcokrajowców.</p><button onclick="event1_6_talk(1)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:indianred;">Nie wpuszczamy obcokrajowców.</p>`;
                  break;
            case 1:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">Och...</p><button onclick="event1_6_talk(2)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Och...</p>`;
                  break;
            case 2:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">To po cholerę otwieraliście w ogóle tą granicę?</p><button onclick="event1_6_talk(3)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">To po cholerę otwieraliście w ogóle tą granicę?</p>`;
                  break;
            case 3:
                  eventWillHappen = false; events[0] = false;   // brochacho just remember to reset events, this shit can break weirdly lmfao :P
                  document.getElementById("dialog-box").style.visibility = 'hidden';
                  setTimeout(function() {boothEmpty = true;},2222);
                  money = money + 5; earns += 5;
                  walkAway();
                  break;
      }
}

function event_suicideDay2() {
      walkAway();
      events[1] = false; eventWillHappen = false;
      setTimeout(function() {
            sfx_talk3.currentTime = 0;
            sfx_talk3.play();
            document.getElementById("dialog-box").style.visibility = 'visible';
            document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">CHWAŁA OSTASZEWO!</p><button onclick="event2_suicide()">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">CHWAŁA OSTASZEWO!</p>`;
      },5000);
}
function event2_suicide() {
      document.getElementById("dialog-box").style.visibility = 'hidden';
      sfx_boom.currentTime = 0;
      sfx_boom2.currentTime = 0;
      sfx_boom2.play();
      sfx_boom.play();
      if (shutterOpen) {sfx_shutter.volume = 0.3; toggleGate();}
      setTimeout(function() {
            sfx_siren.currentTime = 0; sfx_siren.play();
            sfx_panic.currentTime = 0; sfx_panic.play();
            ambience1.pause();
            endWorkDay('Dzień pracy zakończono wcześniej ze względu na atak terrorystyczny.');
            sfx_shutter.volume = 1;
      },400);
}

function event_noentryticket1() {
      events[2] = false; eventWillHappen = false;
      if (approvedEntry) {
            letDay4GuyIn = true;
            walkAway();
            cite(niezgodne);
            setTimeout(function() {boothEmpty = true;},2222);
            checkWyk();
      } else {
            letDay4GuyIn = false;
            sfx_talk2.currentTime = 0; sfx_talk2.play();
            document.getElementById("dialog-box").style.visibility = 'visible';
            document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                  <p id="dialog-words">Odmowa? Z jakiej racji?</p><button onclick="event3_talk(0)">DALEJ...</button>`;
            currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Odmowa? Z jakiej racji?</p>`;
      }
}
function event3_talk(ab) {
      switch (ab) {
            case 0:
                  sfx_talk1.currentTime = 0; sfx_talk1.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                        <p id="dialog-words">Nie macie przy sobie Biletu Wstępu.</p><button onclick="event3_talk(1)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:indianred;">Nie macie przy sobie Biletu Wstępu.</p>`;
                  break;
            case 1:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">To takie coś jest potrzebne?</p><button onclick="event3_talk(2)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">To takie coś jest potrzebne?</p>`;
                  break;
            case 2:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">Wczoraj tego nawet nie było. Wy Ciechocinianie zawsze coś wymyślicie!</p><button onclick="event3_talk(3)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Wczoraj tego nawet nie było. Wy Ciechocinianie zawsze coś wymyślicie!</p>`;
                  break;
            case 3:
                  sfx_talk1.currentTime = 0; sfx_talk1.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                        <p id="dialog-words">To wszystko w celu bezpieczeństwa.</p><button onclick="event3_talk(4)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:indianred;">To wszystko w celu bezpieczeństwa.</p>`;
                  break;
            case 4:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">Tyle mnie to obchodzi, że aż wcale. Wrócę tu jutro.</p><button onclick="event3_talk(5)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Tyle mnie to obchodzi, że aż wcale. Wrócę tu jutro.</p>`;
                  break;
            case 5:
                  // brochacho just remember to reset events, this shit can break weirdly lmfao :P
                  document.getElementById("dialog-box").style.visibility = 'hidden';
                  setTimeout(function() {boothEmpty = true;},2222);
                  money += 5; earns += 5;
                  walkAway();
                  break;
      }
}

function event_diplomat1() {
      if (approvedEntry) {
            setTimeout(function() {boothEmpty = true;},2222);
            walkAway();
            eventWillHappen = false; events[3] = false;
            money += 5; earns += 5;
      } else {
            sfx_talk2.currentTime = 0; sfx_talk2.play();
            document.getElementById("dialog-box").style.visibility = 'visible';
            document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                  <p id="dialog-words">Przecież mnie tutaj wzywaliście..?</p><button onclick="event4_talk(0)">DALEJ...</button>`;
            currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Przecież mnie tutaj wzywaliście..?</p>`;
      }
}
function event4_talk(ab) {
      switch (ab) {
            case 0:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">Zgłoszę to w raporcie!</p><button onclick="event4_talk(1)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Zgłoszę to w raporcie!</p>`;
                  break;
            case 1:
                  eventWillHappen = false; events[3] = false;
                  document.getElementById("dialog-box").style.visibility = 'hidden';
                  setTimeout(function() {boothEmpty = true;},2222);
                  walkAway();
                  cite(niezgodne);
                  checkWyk();
                  break;
      }
}

function event_noentryticket2() {
      if (approvedEntry) {
            eventWillHappen = false; events[4] = false;
            walkAway();
            cite(niezgodne);
            setTimeout(function() {boothEmpty = true;},2222);
            checkWyk();
      } else {
            sfx_talk2.currentTime = 0; sfx_talk2.play();
            document.getElementById("dialog-box").style.visibility = 'visible';
            document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                  <p id="dialog-words">Odmowa? Znowu?! Przecież mam teraz ten bilet!</p><button onclick="eventNET2_talk(0)">DALEJ...</button>`;
            currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Odmowa? Znowu?! Przecież mam teraz ten bilet!</p>`;
      }
}
function eventNET2_talk(ab) {
      shouldArrested = true; // adding this here cause you will lowkirk forget
      switch(ab) {
            case 0:
                  sfx_talk1.currentTime = 0; sfx_talk1.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                        <p id="dialog-words">Ten bilet stracił już ważność...</p><button onclick="eventNET2_talk(1)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:indianred;">Ten bilet stracił już ważność...</p>`;
                  break;
            case 1:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">Absurd! Zapłaciłem za to dobre peniądze!</p><button onclick="eventNET2_talk(2)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Absurd! Zapłaciłem za to dobre pieniądze!</p>`;
                  break;
            case 2:
                  sfx_talk2.currentTime = 0; sfx_talk2.play();
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:DarkSlateGray;" id="dialog-actor">Petent</h1>
                        <p id="dialog-words">Nie. Nie. Ja się stąd nie ruszam!</p><button onclick="eventNET2_talk(3)">DALEJ...</button>`;
                  currentTranscript = currentTranscript + `<p style="color:DarkSlateGray;">Nie. Nie. Ja się stąd nie ruszam!</p>`;
                  break;
            case 3:
                  document.getElementById("dialog-box").style.visibility = 'hidden';
                  somethingOpenError = true;
                  setTimeout(function() {
                        if (day5needtip) {
                              document.getElementById("dialog-box").style.visibility = 'visible';
                        document.getElementById("dialog-box").innerHTML = `<h1 style="color:DodgerBlue;" id="dialog-actor">Podpowiedź</h1>
                              <p id="dialog-words">Możesz od teraz aresztować petenta używając czerwonego przycisku po prawej.</p><button onclick="document.getElementById('dialog-box').style.visibility = 'hidden';">DALEJ...</button>`;
                  }}, 5500);
                  break;
      }
}

function event_criminal1() {
      events[5] = false; eventWillHappen = false;
      if (!beenArrested) {
            walkAway();
            cite(niezgodne);
            setTimeout(function() {boothEmpty = true;},2222);
            checkWyk();
      }
}

function endWorkDay(ccc) {
      if (currentDay !== 2) {sfx_foghorn.currentTime = 0; sfx_foghorn.play();}
      setTimeout(function() {
            boothEmpty = true;
            sfx_siren.pause();
            ambience1.pause(); ambience3.pause();
            mus_mainmenu.currentTime = 0; mus_mainmenu.play();
            console.warn("Koniec dnia pracy!");
            document.getElementById("endinfos").innerHTML = ccc;
            document.getElementById("enddtitle").innerHTML = 'DZIEŃ ' + currentDay;
            document.getElementById("citaearns").innerHTML = 'Wykroczenia: ' + wykroczenia + '   Zarobiono: ' + earns;
            document.getElementById("endrent").innerHTML = rent;
            document.getElementById("endfood").innerHTML = food;
            document.getElementById("endheat").innerHTML = heat;
            money = money - rent - food - heat;
            document.getElementById("endsaldo").innerHTML = 'Łączne saldo: ' + money;
            document.getElementById("DaySummary").style.visibility = 'visible';
            document.getElementById("DaySummary").style.pointerEvents = 'auto';
            document.getElementById("DaySummary").style.opacity = 1;
            setTimeout(function() {
                  sfx_stamp.currentTime = 0; sfx_stamp.play();
                  document.getElementById("citaearns").style.visibility = 'visible';
                  setTimeout(function() {
                        sfx_stamp.currentTime = 0; sfx_stamp.play();
                        document.getElementById("endstable").style.visibility = 'visible';
                        setTimeout(function() {
                              sfx_stamp.currentTime = 0; sfx_stamp.play();
                              document.getElementById("endsaldo").style.visibility = 'visible';
                              setTimeout(function() {
                                    sfx_stamp.currentTime = 0; sfx_stamp.play();
                                    document.getElementById("gosleepb").style.visibility = 'visible';
                              },500);
                        },500);
                  },500);
            },500);
      },5000);
      document.getElementById("gazeta2").style.opacity = 1;
}
function nextDay() {
      if (money < 0) {gameover(0);} else {
            currentDay++;
            petentsLeft = 8;
            wykroczenia = 0;
            currentTranscript = ``;
            earns = 0;
            updateTopBar();
            petentUpd();
            updateGuideBook();
            document.getElementById("DaySummary").style.opacity = 0;
            document.getElementById("gazeta2").style.visibility = 'visible';
            let sauce = "Materials/gazety/gazeta" + currentDay + ".png";
            document.getElementById('gazetaimg').src = sauce;
            setTimeout(function() {
                  document.getElementById("DaySummary").style.visibility = 'hidden';
                  document.getElementById("DaySummary").style.pointerEvents = 'none';
                  document.getElementById("citaearns").style.visibility = 'hidden';
                  document.getElementById("endstable").style.visibility = 'hidden';
                  document.getElementById("endsaldo").style.visibility = 'hidden';
                  document.getElementById("gosleepb").style.visibility = 'hidden';
            },1000);
            if (document.getElementById("savecheck1").checked) {saveGameFile();}
      }
}
function closeGazette2() {
     document.getElementById('gazeta2').style.opacity = 0;
     //document.getElementById('gazeta').style.pointerEvents = 'none';
     mus_mainmenu.Volume = 0.9;
     setTimeout(function() {mus_mainmenu.Volume = 0.9;}, 200);
     setTimeout(function() {mus_mainmenu.Volume = 0.7;}, 400);
     setTimeout(function() {mus_mainmenu.Volume = 0.5;}, 600);
     setTimeout(function() {mus_mainmenu.Volume = 0.3;}, 800);
     setTimeout(function() {mus_mainmenu.Volume = 0.1; document.getElementById('gazeta2').style.visibility = 'hidden';}, 1000);
     setTimeout(function() {mus_mainmenu.pause();}, 1200);
     setTimeout(function() {
               document.getElementById('gazeta2').style.opacity = 0;
     }, 500);
     document.getElementById('biuro').style.visibility = 'visible';                       // ngl this is all just a copypaste            lol
          ambience1.currentTime = 0; ambience3.currentTime = 0;                                     // i clearly see this shit doesnt make sense
          ambience1.play(); ambience3.play();
}

function gameover(typ) {
      document.getElementById("finisheddays").innerHTML = currentDay;
      document.getElementById("entereds").innerHTML = amtEntered;
      document.getElementById("denieds").innerHTML = amtDenied;
      document.getElementById("arresteds").innerHTML = amtArrested;
      document.getElementById("wykroczs").innerHTML = amtWykrocz;

      mus_mainmenu.pause();
      mus_death.currentTime = 0; mus_death.play();
      document.getElementById("DaySummary").style.opacity = 0;
      setTimeout(function() {
                  document.getElementById("DaySummary").style.visibility = 'hidden';
                  document.getElementById("DaySummary").style.pointerEvents = 'none';
            },1000);
      switch(typ) {
            case 0:
                  document.getElementById("broke1").style.visibility = "visible";
                  break;
      }
}
function switchBroke(a) {
      switch(a) {
            case 1:
                  document.getElementById("broke1").style.visibility = "hidden";
                  document.getElementById("brokegameover2").style.visibility = "visible";
                  break;
            case 2:
                  document.getElementById("brokegameover2").style.visibility = "hidden";
                  document.getElementById("brokegameover3").style.visibility = "visible";
                  break;
            case 3:
                  document.getElementById("brokegameover3").style.visibility = "hidden";
                  document.getElementById("brokegameover4").style.visibility = "visible";
                  break;
            case 4:
                  setTimeout(function() {document.getElementById("brokegameover4").style.visibility = "hidden";},5000);
                  document.getElementById("gameSummary").style.visibility = "visible";
                  document.getElementById("gameSummary").style.opacity = 1;
      }
}