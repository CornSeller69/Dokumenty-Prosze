let entrants = [];
let petentSrcs = [
      'Materials/people/green1.png', 'Materials/people/green2.png', 'Materials/people/green3.png',
      'Materials/people/purple1.png', 'Materials/people/purple2.png'
]; //petents to choose from. 0, 1, 2 = green; 3, 4 = purple;
let petentDocSrcs = ['Materials/people/green-mug.png', 'Materials/people/purple-mug.png'
]; // 0 = green, 1 = purple,

function petentUpd() {
      // Petent Setup for specific days
      switch (currentDay) {
            case 1:
                  entrants = ['random1', 'random1', 'random1', 'random1', 'random1', 'disptd-osta', 'random1', 'random1'];
                  break;
            case 2:
                  entrants = ['random', 'random', 'random', 'random', 'random', 'suicide-bomber'];
                  break;

            default:
                  entrants = ['random', 'random', 'random', 'random', 'random', 'random', 'random', 'random'];
                  break;
      }
}

function petentMaker() {
      currentPetent = 8 - petentsLeft;
      currentPType = entrants[currentPetent];
      
      switch (currentPType) {
            case 'random1':
                  nameFisher();
                  birthFisher();
                  mugFisher();
                  nation = Math.random() < 0.8 ? 'Unia Ciechocińska' : nations[Math.floor(Math.random() * nations.length)];
                  cityFisher();
                  Math.random() < 0.8 ? getUnexpired() : getExpired();
                  if (nation != 'Unia Ciechocińska') {
                        shouldEnter = false; shouldArrested = false;
                        niezgodne = 'Nie wpuszczamy obcokrajowców.';
                  } else if (nation == 'Unia Ciechocińska') {
                        shouldEnter = true; shouldArrested = false;
                        if (isExpired) {
                              shouldEnter = false; shouldArrested = false;
                              niezgodne = 'Dokument stracił ważność.';
                        } else if (!isExpired) {
                              shouldEnter = true; shouldArrested = false;
                        }
                  }
                  break;
            case 'disptd-osta':
                  nameFisher();
                  birthFisher();
                  mugFisher();
                  nation = 'Księstwo Ostaszewskie';
                  IssCity = 'Łysomice';
                  getUnexpired();
                  shouldEnter = false; shouldArrested = false;
                  niezgodne = 'Nie wpuszczamy obcokrajowców.'
                  events[0] = true;
                  eventWillHappen = true;
                  break;
      }

      document.getElementById("passname").innerHTML = name + " " + surname;
      document.getElementById("passbirth").innerHTML = birth;
      document.getElementById("passnat").innerHTML = nation;
      document.getElementById("passcity").innerHTML = IssCity;
      //document.getElementById("passexp").innerHTML = expiration;  ----  depracated
}

function nameFisher() {
      name = names[Math.floor(Math.random() * names.length)];
      surname = surnames[Math.floor(Math.random() * surnames.length)];
}
function birthFisher() {
      let h = '';
      let yy = String(1900 + Math.floor(Math.random() * (66 - 33 + 1)) + 33);
      let mm = Math.floor(Math.random() * 12) + 1;
      if (mm < 10) {mm = '0' + String(mm);} else {mm = String(mm);}
      let dd = Math.floor(Math.random() * 30) + 1;
      if (dd < 10) {dd = '0' + String(dd);}
      if (mm == '02' && dd > 27) {dd = 27;}
      dd = String(dd);
      h = dd + "." + mm + "." + yy;
      birth = h;
      console.log(birth);
}
function mugFisher() {
      let abc = Math.floor(Math.random() * petentSrcs.length);
      document.getElementById("petent").src = petentSrcs[abc];
      switch (abc) {
            case 0:
                  document.getElementById("pass-pic").src = petentDocSrcs[0];
                  break;
            case 1:
                  document.getElementById("pass-pic").src = petentDocSrcs[0];
                  break;
            case 2:
                  document.getElementById("pass-pic").src = petentDocSrcs[0];
                  break;
            case 3:
                  document.getElementById("pass-pic").src = petentDocSrcs[1];
                  break;
            case 4:
                  document.getElementById("pass-pic").src = petentDocSrcs[1];
                  break;

            default:
                  document.getElementById("pass-pic").src = 'Materials/temp/empty/bin/nothinghere/bro/stop/funny.png';
                  break;
      }
}
function cityFisher() {
      switch (nation) {
            case 'Unia Ciechocińska':
                  IssCity = citiesCiech[Math.floor(Math.random() * 3)];
                  break;
            case 'Księstwo Ostaszewskie':
                  IssCity = citiesOstaszew[Math.floor(Math.random() * 3)];
                  break;
            case 'Wielki Inowrocław':
                  IssCity = citiesInowr[Math.floor(Math.random() * 3)];
                  break;
            case 'Obwód Lipnowski':
                  IssCity = citiesLipno[Math.floor(Math.random() * 2)];
                  break;
            case 'Księstwo Golub-Dobrzyń':
                  IssCity = citiesGolD[Math.floor(Math.random() * 2)];
                  break;
            case 'Hrabstwo Włocławskie':
                  IssCity = citiesWloc[Math.floor(Math.random() * 3)];
                  break;
            default:
                  IssCity = 'Detroit, MI';
                  break;
      }
}

function getExpired() {
      let h = '';
      if (currentDay == 1 || currentDay == 2) {
            mm = String(11 + Math.floor(Math.random() * 2));
            dd = Math.floor(Math.random() * 30) + 1;
            if (dd < 10) {dd = '0' + String(dd);} else {dd = String(dd);}
            h = dd + "." + mm + '.1983';
      } else {
            mm = '01';
            dd = Math.floor(Math.random() * 30) + 1;
            if (dd > currentDay) {dd = String(currentDay - 1);} else {dd = String(dd);}
            h = dd + "." + mm + '.1984';
      }
      expiration = h;
      document.getElementById("passexp").innerHTML = expiration;
      console.log(expiration);
      isExpired = true;
}
function getUnexpired() {
      let mm = Math.floor(Math.random() * 12) + 1;
      if (mm < 10) {mm = '0' + String(mm);} else {mm = String(mm);}
      let dd = Math.floor(Math.random() * 30) + 1;
      if (mm == '01' && dd < currentDay) {dd = currentDay + Math.floor(Math.random() * 5); if (dd > 30) {dd = 30}}
      if (mm == '02' && dd > 27) {dd = 27;}
      if (dd < 10) {dd = '0' + String(dd);} else {dd = String(dd);}
      let h = dd + "." + mm + '.1984';
      expiration = h;
      document.getElementById("passexp").innerHTML = expiration;
      console.log(expiration);
      isExpired = false;
}