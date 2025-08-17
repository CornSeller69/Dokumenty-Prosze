// REMEMBER: Ustaw jakiś normalny odtwarzacz ambientu po skończeniu prac!!
/*let amb = false;
function playAm() {
      if (!amb) {
            ambience1.currentTime = 0; ambience3.currentTime = 0;
            ambience1.volume = 0.1; ambience3.volume = 0.11;
            ambience1.play(); ambience3.play();
            amb = true;
      }
      updateTopBar();
      petentUpd();
}*/

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
                        document.getElementById("dialog-box").innerHTML = `<h1 style="color:indianred;" id="dialog-actor">Ty</h1>
                              <p id="dialog-words">Dokumenty, Proszę.</p><button onclick="showPass()">DALEJ...</button>`;
                        currentTranscript = currentTranscript + `<p style="color:indianred;">Dokumenty, proszę.</p>`;
                  }, 2000);
            }, 1800);
            currentTranscript = ``;
      }
}

function walkAway() {
      sfx_footsteps.currentTime = 1.1;
      sfx_footsteps.play();
      let petent = document.getElementById("petent");
      petent.style.left = '-115%'; petent.style.opacity = '0.75';
      petent.style.transform = "rotate(-10deg)";
}

// beta feature, might change/remove
function showPass() {
      document.getElementById("passport-opener").style.visibility = 'hidden';
      document.getElementById("dialog-box").style.visibility = 'hidden';
      document.getElementById("passport").style.visibility = 'visible';
}
function hidePass() {
      document.getElementById("passport").style.visibility = 'hidden';
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

function loadGuidePages() {
      let page1 = document.getElementById('gpage1');
      let page2 = document.getElementById('gpage2');
      let pb1 = `<button class="gbut" onclick="flipPage(1)" id="gb1">ZAMKNIJ</button>`;
      let pb2 = `<button class="gbut" onclick="flipPage(2)">&#8594</button>`;

      switch(guidePage) {
            case 1:
                  page1.innerHTML = pb1 + `
                        <img src='Materials/herb.png' alt='Unia Ciechocińska' style='height: 80%; margin-top: 5%; margin-left: -60px;'>
                        <br><b>Własność Ministerstwa Ochrony Granicy<br>Wydano: 01.01.1984</b>`;
                  page2.innerHTML = pb2 + `<br>
                  Witajcie Inspektorze! Ten poradnik powie wam o wszystkich ważnych aspektach pracy na tym stanowisku. Poniżej jest spis treści:<br><br>
                  <b>I: Ogląd Biura<br>II: Dane na Dokumentach<br>III: Traktowanie Petentów<br>IV: Wykroczenia i pouczenie</b>` + newChapters;
                  break;
            case 2:
                  page1.innerHTML = pb1 + `<br>
                  <b>I: Ogląd Biura</b><br><br>
                  Wasze biuro jest wyposażone w niezbędne elementy przejścia granicznego. W razie potrzeby, Ministerstwo zapewnia ulepszenia na koszt kraju.<br><br>
                  Twój inwentarz uzupełniają:<br>1. Zielony poradnik, który właśnie czytasz.<br>2. Biuletyn, który powinniście sprawdzać codziennie dla nowości i rozkazów.<br>3. Pieczątki, do nadawania lub odmawiania wstępu do kraju.<br>4. Mikrofon, do informowania petentów o przejściu kolejki dalej.<br>5. Kontrola zasłony, w celach zamknięcia/otwarcia biura.<br>6. Alarm, do przyzywania ochrony, która aresztuje petenta.<br>7. Ekrany nad głową, pokazujące dane waszej służby.
                  <br><br>Dodatkowo, gdy będziecie zaczynać oraz kończyć zmianę pamiętajcie o użyciu zasłony (podpunkt 5). Koniec zmiany dobiegnie, gdy na górnym ekranie liczba pozostałych petentów wyniesie zero oraz rozlegnie się sygnał zamknięcia granicy.<br><br><br><u>Spodziewajcie się zwiększenia asortymentu, w razie gdyby zwiększono środki ochrony.</u>`;
                  page2.innerHTML = pb2 + `<br>
                  <b>II: Dane na Dokumentach</b><br><br>
                  Dokumenty jakie wymagane są przez petentów posiadają na sobie takie informacje jak imię i nazwisko, data urodzenia, data ważności dokumentu, numer identyfikacyjny, wygląd petenta (zdjęciowo/opisowo), itp.<br>
                  Niektóre niepoprawności w dokumentach, takie jak wygaśnięcie ważności czy niezgodna długość pobytu są karane odmową wstępu, natomiast rzeczy takie jak błędne numery identyfikacyjne czy różne imiona są podstawą do aresztowania petenta ku przesłuchaniom.<br><br>
                  Pamiętaj, aby również nie odmawiać petentowi odrazu przy okazji braku wymaganych dokumentów. Czasami poprostu zapominają ich wyjąć.<br><br><br><b><u>Wszystkie wymagane od petentów dokumenty na dzień dzisiejszy:</u></b><br>` + reqDoc;
                  break;
            case 3:
                  page1.innerHTML = pb1 + `<br>
                  <b>III: Traktowanie Petentów</b><br><br>
                  Pamiętajcie! Traktujcie każdego Petenta jako potencjalne zagrożenie! Każde, choćby małe niedopatrzenie może kosztować życie naszych cywilów!<br>
                  Używając mikrofonu wzywajcie petentów do waszego biura. Każdy petent musi przedstawić wszystkie wymagane dokumenty na dany dzień (poprzednia strona). Również, co jakiś czas wprowadzane mogą być specyficzne regulacje co do wpuszczania poszczególnych osób.<br><br>
                  <b>Obecne zasady wpuszczania petentów:</b><br>` + entryRules + `<br><br>
                  Niektórzy petenci jednakże mogą otrzymać specjalne traktowanie (Nie potrzebują innych dokumentów oprócz paszportu oraz swojej legitymacji). Należą do nich Dyplomaci oraz Osoby poszukujące Azylu politycznego w Ciechocinku.`;
                  page2.innerHTML = pb2 + `<br>
                  <b>IV: Wykroczenia i pouczenie</b><br><br>
                  Jeżeli zdarzy się, że rzeczywiście popełniliście błąd podczas sprawdzania petenta, otrzymacie pouczenie w formie ostrzeżenia. Ostrzeżenie będzie zawierało wszystkie wykroczenia jakie popełniliście.<br>
                  W przypadku nie wpuszczenia petenta, który powinien być wpuszczony, dostaniecie poprostu ostrzeżenie za błędny werdykt. Jeżeli wpuścicie petenta z błędnymi papierami, wszystkie błędy będą zanotowane.<br>
                  Pouczenia również będą wydawane za: Wpuszczenie/jedynie odmawianie wstępu osobom poszukiwanym listem gończym, nieuzasadnione aresztowanie czy również jedzenie pizzy z ananasem.<br><br>
                  <b>Uwaga! Ministerstwo Ochrony Granicy zezwala na jedynie 2 wykroczenia podczas pojedynczej zmiany. Wykroczenie numer 3 lub wyższe będą karane finansowo.`; 
                  break;
            case 4:
                  if (currentDay >= 2) {
                        page1.innerHTML = pb1 + `<br>
                        <b>V: Mapa narodów</b><br><br>
                        Upewnijcie się czy naród, zgadza się z listą wpuszczanych narodów.<br>
                        Rzadka sytacja może się natrafić, że będziecie jednak musieli wpuścić kogoś spoza listy krajów, jako, iż będą to raczej jedynie dyplomaci, będziecie o takim sytuacjach powiadamiani w biuletynie.
                        <br><u>Upewniaj się również czy miasto wydające paszport zgadza się z miastami wydającymi w poszczególnych krajach!</u><br><br>
                        <b>Miasta wydające paszporty:</b><br>
                        1. Unia Ciechocińska:<br>
                        - Ciechocinek, Raciążek, Lubicz Dolny<br>
                        2. Księstwo Ostaszewskie:<br>
                        - Toruń, Łysomice, Papowo Ostaszewskie<br>
                        3. Hrabstwo Włocławskie:<br>
                        - Włocławek, Szpetal Górny, Kowal<br>
                        4. Obwód Lipnowski:<br>
                        - Lipno, Biskupin<br>
                        5. Księstwo Golub-Dobrzyń:<br>
                        - Bielsk, Ciechocin<br>
                        6. Wielki Inowrocław:<br>
                        - Inowrocław, Bydgoszcz, Solec Kujawski`;
                        page2.innerHTML = pb2 + `<br><br><br><img src='Materials/temp/empty/bin/nothinghere/bro/stop/funny.png' alt='Mapa here' style='width: 100%; margin-top: 5%;'>`; 
                  } else {
                        page1.innerHTML = pb1 + ``;
                        page2.innerHTML = pb2 + ``;
                  }
                  break;
            
            default:
                  page1.innerHTML = pb1 + ``; // Dodaj jakieś warunki odblokowania (np if day == x) czy coś :P przy okazji jak już wszystkie strony będą gotowe wprowadź limit ile kartek w przód można przerzucić
                  page2.innerHTML = pb2 + ``;
                  break;
      }
}

function openBulletin() {
      if (!somethingOpenError) {
            somethingOpenError = true;
            //document.getElementById('bulletin').style.visibility = 'visible';
            document.getElementById("bulletin").style.bottom = '10%';
            let content = document.getElementById('bull-content');
      
            switch (currentDay) {
                  case 1:
                        content.innerHTML = `Biuletyn na datę 01.01.1984<br><br>Witajcie nowy inspektorze! Nowo otwarta granica wymaga waszego uważnego oka podczas sprawdzania dokumentów.<br>
                        Jako iż nasi żołnierze mogą znowu bezpiecznie wrócić do domu, zacznijcie przepuszczać Ciechocinian, ale <u>jedynie</u> Ciechocinian. Nie przepuszczajcie obcokrajowców!<br><br>
                        W przypadku, gdyby jednakże zjawił się na granicy ktoś spoza naszego kraju, wlepcie mu pieczątkę odmowy, a jeżeli będzie sprawiał więcej problemów, wciśnijcie przycisk alarmu w waszym biurze.<br><br>Niech żyje Unia Ciechocińska!`;
                        break;
                  case 2:
                        content.innerHTML = `Biuletyn na datę 02.01.1984<br><br>Inspektorze! Po wczorajszym sukcesie granicy stwierdziliśmy, że nadszedł czas otworzyć kraj w pełni!<br>
                        Możecie od teraz wpuszczać Obcokrajowców, pod warunkiem, że mają przy sobie paszport, który nie stracił jeszcze ważności.<br><br>
                        W przypadku, problemów, wlepcie pieczątkę odmowy, a jeżeli będzie więcej problemów, wciśnijcie przycisk alarmu w waszym biurze.<br><br>Niech żyje Unia Ciechocińska!`;
                        break;
                  case 3:
                        content.innerHTML = `Biuletyn na datę 03.01.1984<br><br>Inspektorze! Ministerstwo Ochrony Granicy ogłasza, że przez wczorajszy atak terrorystyczny, wprowadzamy nowe zabezpieczenia.<br>
                        Obcokrajowcy, aby mieć wstęp do kraju, muszą również mieć przy sobie ważny Bilet Wstępu.<br>
                        Zdajemy sobie sprawę jednakże, że przestępcy będą próbowali podszywać się pod Naszych rodaków skradzionymi paszportami. Od teraz, Ciechocinianie muszą również mieć przy sobie Dowód Osobisty.<br><br>
                        W przypadku, braku dodatkowych dokumentów, wlepcie pieczątkę odmowy.<br><br>Niech żyje Unia Ciechocińska!`;
                        break;
                  default:
                        content.innerHTML = `Nie ma żadnych wieści dla dzisiejszego biuletynu, kontynuujcie pracę podług poprzednio danych nakazów.`
                        break;
            }
      }
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
      sfx_shutter.currentTime = 0;
      sfx_shutter.play();
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
      sfx_stamp.currentTime = 0;
      sfx_stamp.play();
      approvedEntry = x;
      closeSPopup();
      if(!eventWillHappen) {setTimeout(function() {boothEmpty = true;},2222);}
      petentsLeft--;
      updateTopBar();
      document.getElementById("passport-opener").style.visibility = 'hidden';
      checkMistakes();
}

function checkMistakes() {
      if (!eventWillHappen) {
            walkAway();
            if (shouldEnter) {
                  if(approvedEntry) {
                        money = money + 5;
                        if (petentsLeft == 0) {endWorkDay();}
                  } else if (!approvedEntry) {
                        cite(`Petent miał wszystko zgodne, powinien był być wpuszczony.`);
                        wykroczenia++;
                        checkWyk();
                  }
            } else if (!shouldEnter) {
                  if (beenArrested) {
                        if (!shouldArrested) {
                              cite(`Bezpodstawnie aresztowano petenta.`);
                              wykroczenia++;
                              checkWyk();
                        } else if (shouldArrested) {
                              money = money + 5;
                              if (petentsLeft == 0) {endWorkDay();}
                        }
                  }
                  if(!approvedEntry) {
                        money = money + 5;
                        if (petentsLeft == 0) {endWorkDay();}
                  } else if (approvedEntry) {
                        cite(`Niezgodne dane na dokumentach: ` + niezgodne);
                        wykroczenia++;
                        checkWyk();
                  }
            }
      } else {
            if (events[0]) {
                  event_disptOst();
            }
      }
}

function cite(c) {
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
      if (petentsLeft == 0) {endWorkDay();}
}

function checkWyk() {
      console.log(wykroczenia);
      updateTopBar();
      let hh = document.getElementById("cite-penalty");
      if (wykroczenia >= 3) {
            money = money - 5; // refine later idk
            hh.innerHTML = 'Grzywna: 5 złotych';
      } else if (wykroczenia = 1) {
            hh.innerHTML = 'Grzywna: Wydano ostrzeżenie';
      } else if (wykroczenia = 2) {
            hh.innerHTML = 'Grzywna: Ostatnie ostrzeżenie!';
      }
}

function callGuards() {
      if (!boothEmpty) {
            beenArrested = true;
            sfx_alarm.currentTime = 0;
            sfx_alarm.play();
            if (shutterOpen) {toggleGate();}
            setTimeout(function() {
                  sfx_shout.currentTime = 0;
                  sfx_shout.play();
                  document.getElementById("dialog-box").style.visibility = 'visible';
                  document.getElementById("dialog-box").innerHTML = `<h1 style="color:cadetblue;" id="dialog-actor">Ochrona</h1>
                        <p id="dialog-words">Wyłaź stamtąd!</p><button onclick="arrestProcess()">DALEJ...</button>`; // zrób tak aby arrestProcess() działało :trollface4k:
                  currentTranscript = currentTranscript + `<p style="color:cadetblue;">Wyłaź stamtąd!</p>`;
            },2500);
      }
}

function event_disptOst() {
      if (approvedEntry) {
            walkAway();
            cite(niezgodne);
            setTimeout(function() {boothEmpty = true;},2222);
            wykroczenia++; checkWyk();
            eventWillHappen = false; events[0] = false;
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
                  money = money + 5;
                  walkAway();
                  break;
      }
}

function endWorkDay() {
      sfx_foghorn.currentTime = 0; sfx_foghorn.play();
      console.warn("Koniec dnia pracy!");
      setTimeout(function(){
            document.getElementById("playtest-wall").style.visibility = 'visible';
            document.getElementById("playtest-wall").style.opacity = 1;                   // All this is temporary btw..
            mus_death.currentTime = 0; mus_death.play();
      },1100);
}