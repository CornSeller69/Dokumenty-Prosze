//  MUSIC
const mus_mainmenu = new Audio('Materials/Music/main_menu.mp3');
const mus_death = new Audio('Materials/Music/death.mp3');
const mus_victory = new Audio('Materials/Music/victory.mp3');
mus_mainmenu.loop = true; mus_death.loop = true; mus_victory.loop = true;

//  SOUND EFFECTS
const ambience1 = new Audio('Materials/Sounds/ambience_street.mp3');
const ambience2 = new Audio('Materials/Sounds/ambience_birds.mp3');
const ambience3 = new Audio('Materials/Sounds/ambience_monster.mp3');
ambience1.loop = true; ambience2.loop = true; ambience3.loop = true;
const sfx_pageflip = new Audio('Materials/Sounds/flip.mp3');
const sfx_foghorn = new Audio('Materials/Sounds/foghorn.mp3');
const sfx_talk1 = new Audio('Materials/Sounds/talk1.mp3');
const sfx_talk2 = new Audio('Materials/Sounds/talk2.mp3');
const sfx_talk3 = new Audio('Materials/Sounds/suicider.mp3');
const sfx_next = new Audio('Materials/Sounds/talk_next.mp3');
const sfx_shout = new Audio('Materials/Sounds/talk_guard.mp3');
const sfx_shutter = new Audio('Materials/Sounds/shutter.mp3');
const sfx_stamp = new Audio('Materials/Sounds/stamp.mp3');
const sfx_siren = new Audio('Materials/Sounds/siren.mp3'); sfx_siren.loop = true;
const sfx_panic = new Audio('Materials/Sounds/panic.mp3');
const sfx_alarm = new Audio('Materials/Sounds/call-alt.mp3');
const sfx_boom = new Audio('Materials/Sounds/explosion.mp3');
const sfx_boom2 = new Audio('Materials/Sounds/explosion-old.mp3');
const sfx_footsteps = new Audio('Materials/Sounds/concrete-footsteps.mp3');
const sfx_print = new Audio('Materials/Sounds/printer.mp3');
const sfx_beep = new Audio('Materials/Sounds/printed.mp3');
const sfx_nobuzz = new Audio('Materials/Sounds/button11.wav'); sfx_nobuzz.volume = 0.5;
const easter_marston = new Audio('Materials/Sounds/gay.mp3');

//  VALUES
let skipTitle = false;
let money = 5;
let introBegun = false;
let guidePage = 1;
let currentDay = 1; let data = '01.01.1984'; //  dd/mm/yyyy
let petentsLeft = 8;
let currentPetent = 0;
let currentPType = '';
let wykroczenia = 0; // resetuj; daily
let earns = 0; // resetuj; daily
let rent = 5;
let food = 10;
let heat = 5;
let amtEntered = 0;
let amtDenied = 0;
let amtArrested = 0;
let amtWykrocz = 0;
let letDay4GuyIn = false;
let day5needtip = true;
let reqDoc = `<b>Ciechocinianie:</b><br>
1. Paszport<br>
<br><b>Obcokrajowcy:</b><br>
Zakaz wstępu dla obcokrajowców.<br>
<br><b>Dyplomaci:</b><br>
Zakaz wstępu dla obcokrajowców.<br>
<br><b>Azylanci:</b><br>
Nie przyjmujemy obecnie azylantów.`;
let newChapters = ``;
let entryRules = `1. Wszystkie dokumenty muszą być aktualne<br>2. Zakaz wstępu dla obcokrajowców.`;
let currentTranscript = ``;
let boothEmpty = true;
let somethingOpenError = false; // PAMIĘTAJ: Używaj w razie wyskakujących elementów na ekranie, ale nie wszystkich, niektórym zrób poprostu pierwszeństwo z-indexem.
let shutterOpen = false; let playShutter = true;
let approvedEntry = Boolean(undefined);
let shouldEnter = Boolean(undefined); //jeżeli wygeneruje sie ktoś z błędami w dokumentach/poszukiwany/itd to false, iykyk
let shouldArrested = Boolean(undefined); //czy dobrze że aresztowaliśmy
let beenArrested = Boolean(undefined); //sprawdzane podczas sprawdzania odrzucenia wizy
let niezgodne = ``; //niezgodne dane na dokumentach, wypełniane przy CheckMistakes();
let whatsWrong = ''; // in-testing...
let isExpired = Boolean(undefined);
let hasEntryTicket = true; // false if someone isn't meant to have one (events)
let properfilesave = false;
let isDiplomat = false;

// ENTRANT DATA
let name = '';
let surname = '';
let birth = '';
let gender = ''; // Implement later! (maybe)
let nation = '';
let expiration = '';
let IssCity = '';

// RANDOM NUMBER GENERATOR LISTS
let names = [
      'Arnold', 'Adolf', 'Adrian', 'Charles', 'Henryk', 'Bronisław', 'Bratislav', 'Omar', 'Mohammed', 'Donald', 'Jerzy', 'Adam',
      'Jakub', 'Krzysztof', 'Chris', 'Vladimir', 'Aleksander', 'Darius', 'Sławomir',
      'Bartlomei', 'Galileo', 'Norbert', 'Truman', 'Leonard', 'Karl', 'Johann', 'Ludwig', 'Louis', 'Robert', 'Joseph',
      'Józef', 'Grzegorz', 'Gregor', 'Stevan', 'Iwo', 'Igor', 'Feofil', 'Ignacy', 'Kazimir', 'Lazar'
]; //40
let surnames = ['Müller','Schneider','Fischer','Weber',
'Meyer','Wagner','Becker','Hoffmann','Schäfer',
'Nowak','Kowalski','Wiśniewski','Dąbrowski','Lewandowski',
'Wójcik','Kamiński','Kowalczyk','Zieliński','Szymański',
'Cready','Johnson','Swanson','Wilson',
'Davis','Clark','McGill','McWalker',
'Ivanov','Smirnov','Kuznetsov','Popov','Sokolov',
'Kovalenko','Bondarenko','Shevchenko','Petrov','Melnyk',
'Dupont','Rossi','García'] //40

let nations = ['Unia Ciechocińska', 'Księstwo Ostaszewskie', 'Wielki Inowrocław', 'Hrabstwo Golubsko-Dobrzyńskie', 'Federacja Włocławska', 'Hrabstwo Lipnowskie'];
let citiesCiech = ['Ciechocinek', 'Raciążek', 'Lubicz Dolny'];
let citiesOstaszew = ['Toruń', 'Łysomice', 'Papowo Ost.'];
let citiesWloc = ['Włocławek', 'Szpetal Grn.', 'Kowal']
let citiesLipno = ['Lipno', 'Biskupin'];
let citiesGolD = ['Bielsk', 'Ciechocin'];
let citiesInowr = ['Inowrocław', 'Bydgoszcz', 'Solec Kuj.'];

// EVENTS:
let eventWillHappen = false;
let events = [false, false, false, false, false];
/*
0 = Day 1, 6th Entrant (Dissapointed Ostaszewian)
1 = Day 2, 7th Entrant (Suicide Bomber)
2 = Day 4, 2nd Entrant (Pissed-off Foreigner with no Entry Pass 1)
3 = Day 4, 5th Entrant (First Diplomat)
4 = Day 5. 1st Entrant (Pissed-off Foreigner with no Entry Pass 2)
5 = 
*/