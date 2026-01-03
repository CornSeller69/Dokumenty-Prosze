let entrants = [];
let petentSrcs = [
      'Materials/people/green1.png', 'Materials/people/green2.png', 'Materials/people/green3.png',
      'Materials/people/purple1.png', 'Materials/people/purple2.png',
      'Materials/people/red1.png', 'Materials/people/red2.png', 'Materials/people/red3.png',
      'Materials/people/orange1.png', 'Materials/people/orange2.png'
]; //petents to choose from. 0, 1, 2 = green; 3, 4 = purple; 5, 6, 7 = red; 8, 9 = orange;
let petentDocSrcs = ['Materials/people/green-mug.png', 'Materials/people/purple-mug.png', 'Materials/people/red-mug.png', 'Materials/people/orange-mug.png'
]; // 0 = green, 1 = purple, 2 = red, 3 = orange,

function petentUpd() {
      // Petent Setup for specific days
      switch (currentDay) {
            case 1:
                  entrants = ['random1', 'random1', 'random1', 'random1', 'random1', 'disptd-osta', 'random1', 'random1'];
                  break;
            case 2:
                  entrants = ['random2', 'random2', 'random2', 'random2', 'random2', 'random2', 'suicide-bomber'];
                  break;
            case 3:
                  entrants = ['random3', 'random3', 'random3', 'random3', 'random3', 'random3', 'random3', 'random3'];
                  break;
            case 4:
                  entrants = ['random3', 'day4noentry', 'random3', 'random3', 'day4diplomat', 'random3', 'random3', 'random3'];
                  break;
            case 5:
                  entrants = ['day5noentry', 'random3', 'random3', 'random3', 'random3', 'random3', 'day5criminal', 'random3'];
                  break;
            default:
                  entrants = ['random', 'random', 'random', 'random', 'random', 'random', 'random', 'random'];
                  break;
      }
}

function petentMaker() {
      currentPetent = 8 - petentsLeft;
      currentPType = entrants[currentPetent];

      shouldEnter = true; shouldArrested = false; // for resetting..
      
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
                  cityFisher();
                  getUnexpired();
                  shouldEnter = false; shouldArrested = false;
                  niezgodne = 'Nie wpuszczamy obcokrajowców.'
                  events[0] = true;
                  eventWillHappen = true;
                  break;
            case 'random2':
                  nameFisher();
                  birthFisher();
                  mugFisher();
                  Math.random() < 0.95 ? nationFisher() : getFakeNation();
                  Math.random() < 0.7 ? getUnexpired() : getExpired();
                  break;
            case 'suicide-bomber':
                  name = "Alan"; surname = "Fisher";
                  birthFisher();
                  document.getElementById("petent").src = petentSrcs[6];
                  document.getElementById("pass-pic").src = petentDocSrcs[2];
                  nation = 'Księstwo Ostaszewskie';
                  IssCity = 'Łysomice';
                  getUnexpired();
                  shouldEnter = true;
                  events[1] = true;
                  eventWillHappen = true;
                  break;
            case 'random3':
                  nameFisher();
                  birthFisher();
                  mugFisher();
                  Math.random() < 0.95 ? nationFisher() : getFakeNation();
                  Math.random() < 0.7 ? getUnexpired() : getExpired();
                  Math.random() < 0.8 ? document.getElementById("entrypdate").innerHTML =  `Na datę: ` + data : getFakeEntryDate();
                  hasEntryTicket = true;
                  break;
            case 'day4noentry':
                  name = 'Henryk';
                  surname = 'Fischer';
                  birth = '03.05.1965';
                  document.getElementById("petent").src = petentSrcs[4];
                  document.getElementById("pass-pic").src = petentDocSrcs[1];
                  nation = 'Federacja Włocławska';
                  hasEntryTicket = false;
                  IssCity = 'Szpetal Grn.';
                  document.getElementById("passexp").innerHTML = '13.01.1984';
                  shouldEnter = false; shouldArrested = false;
                  niezgodne = 'Petent nie posiadał Biletu Wstępu.'
                  events[2] = true;
                  eventWillHappen = true;
                  break;
            case 'day4diplomat':
                  shouldEnter = true;
                  niezgodne = 'Petent posiadał poprawną Legitymację Dyplomatyczną.';
                  isDiplomat = true;
                  document.getElementById("petent").src = petentSrcs[8];
                  document.getElementById("leg-pic").src = petentDocSrcs[3];
                  name = 'Alistair';
                  surname = 'Pietrucha';
                  document.getElementById("legname").innerHTML = name + " " + surname;
                  nation = "Księstwo Ostaszewskie";
                  document.getElementById("legnat").innerHTML = nation;
                  document.getElementById("legpel").innerHTML = `
                  <ul>
                        <li>Unia Ciechocińska</li>
                        <li>Księstwo Ostaszewskie</li>
                        <li>Hrabstwo Golubsko-Dobrzyńskie</li>
                  </ul>`;
                  eventWillHappen = true;
                  events[3] = true;
                  break;
            case 'day5noentry':
                        name = 'Henryk';
                        surname = 'Fischer';
                        birth = '03.05.1965';
                        document.getElementById("petent").src = petentSrcs[4];
                        document.getElementById("pass-pic").src = petentDocSrcs[1];
                        nation = 'Federacja Włocławska';
                        IssCity = 'Szpetal Grn.';
                        document.getElementById("passexp").innerHTML = '13.01.1984';
                        document.getElementById("entrypdate").innerHTML = 'Na datę: 04.01.1984';
                        shouldEnter = false; shouldArrested = false;
                        niezgodne = 'Bilet Wstępu stracił ważność.'
                        events[4] = true;
                        eventWillHappen = true;
                  break;
            case 'day5criminal':
                  name = 'Danne';
                  surname = 'Schmidt';
                  birthFisher();
                  document.getElementById("petent").src = petentSrcs[6];
                  document.getElementById("pass-pic").src = petentDocSrcs[2];
                  nation = 'Wielki Inowrocław';
                  IssCity = 'Bydgoszcz';
                  getUnexpired();
                  document.getElementById("entrypdate").innerHTML =  `Na datę: ` + data;
                  shouldEnter = false; shouldArrested = true;
                  niezgodne = 'Petent był poszukiwanym przestępcą.'
                  events[5] = true;
                  eventWillHappen = true;
                  break;
      }

      document.getElementById("passname").innerHTML = name + " " + surname;
      document.getElementById("idname").innerHTML = name + " " + surname;
      document.getElementById("passbirth").innerHTML = birth;
      document.getElementById("idbirth").innerHTML = birth;
      document.getElementById("passnat").innerHTML = nation;
      document.getElementById("passcity").innerHTML = IssCity;
      
      //document.getElementById("passexp").innerHTML = expiration;  ----  deprecated
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
                  document.getElementById("idimg").src = petentDocSrcs[0];
                  break;
            case 1:
                  document.getElementById("pass-pic").src = petentDocSrcs[0];
                  document.getElementById("idimg").src = petentDocSrcs[0];
                  break;
            case 2:
                  document.getElementById("pass-pic").src = petentDocSrcs[0];
                  document.getElementById("idimg").src = petentDocSrcs[0];
                  break;
            case 3:
                  document.getElementById("pass-pic").src = petentDocSrcs[1];
                  document.getElementById("idimg").src = petentDocSrcs[1];
                  break;
            case 4:
                  document.getElementById("pass-pic").src = petentDocSrcs[1];
                  document.getElementById("idimg").src = petentDocSrcs[1];
                  break;
            case 5:
                  document.getElementById("pass-pic").src = petentDocSrcs[2];
                  document.getElementById("idimg").src = petentDocSrcs[2];
                  break;
            case 6:
                  document.getElementById("pass-pic").src = petentDocSrcs[2];
                  document.getElementById("idimg").src = petentDocSrcs[2];
                  break;
            case 7:
                  document.getElementById("pass-pic").src = petentDocSrcs[2];
                  document.getElementById("idimg").src = petentDocSrcs[2];
                  break;
            case 8:
                  document.getElementById("pass-pic").src = petentDocSrcs[3];
                  document.getElementById("idimg").src = petentDocSrcs[3];
                  break;
            case 9:
                  document.getElementById("pass-pic").src = petentDocSrcs[3];
                  document.getElementById("idimg").src = petentDocSrcs[3];
                  break;
            default:
                  document.getElementById("pass-pic").src = 'Materials/temp/empty/bin/nothinghere/bro/stop/funny.png';
                  break;
      }
}
function nationFisher() {
      let abc = Math.floor(Math.random() * nations.length);
      switch (abc) {
            case 0:
                  nation = 'Unia Ciechocińska';
                  break;
            case 1:
                  nation = 'Księstwo Ostaszewskie';
                  break;
            case 2:
                  nation = 'Hrabstwo Golubsko-Dobrzyńskie';
                  break;
            case 3:
                  nation = 'Federacja Włocławska';
                  break;
            case 4:
                  nation = 'Hrabstwo Lipnowskie';
                  break;
            case 5:
                  nation = 'Wielki Inowrocław';
                  break;
            default:
                  nation = "Demokratyczna Republika Korei";
                  break;
      }
      cityFisher();
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
            case 'Hrabstwo Lipnowskie':
                  IssCity = citiesLipno[Math.floor(Math.random() * 2)];
                  break;
            case 'Hrabstwo Golubsko-Dobrzyńskie':
                  IssCity = citiesGolD[Math.floor(Math.random() * 2)];
                  break;
            case 'Federacja Włocławska':
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
            if (dd < 10) {dd = "0" + dd;}
            h = dd + "." + mm + '.1984';
      }
      expiration = h;
      document.getElementById("passexp").innerHTML = expiration;
      document.getElementById("idexp").innerHTML = expiration;
      console.log(expiration);
      isExpired = true;
      shouldEnter = false; //idk just making sure
      niezgodne = `Dokument stracił ważność`;
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
      document.getElementById("idexp").innerHTML = expiration;
      console.log(expiration);
      isExpired = false;
}

function getFakeNation() {
      shouldEnter = false; shouldArrested = false;
      niezgodne  = 'Nie wpuszczamy mieszkańców z tego kraju.';
      let aa = Math.floor(Math.random() * 4);
      switch (aa) {
            case 0:
                  nation = 'Stany Zjednoczone';
                  IssCity = Math.random() < 0.5 ? 'Boston' : 'Waszyngton';
                  break;
            case 1:
                  nation = 'Zachodnie Emiraty Niemieckie';
                  IssCity = Math.random() < 0.5 ? 'Frankfurt' : 'Hamburg';
                  break;
            case 2:
                  nation = 'Królestwo Mazowieckie';
                  IssCity = Math.random() < 0.5 ? 'Warszawa' : 'Mińsk Maz.';
                  break;
            case 3:
                  nation = 'III Cesarstwo Tybetańskie';
                  IssCity = Math.random() < 0.5 ? 'Lhasa' : 'Xining';
      }
}

function getFakeEntryDate() {
      let pp = currentDay + Math.floor(Math.random() * 8);
      if (pp >= 10) {pp = String(pp) + ".01.1984";} else {pp = "0" + String(pp) + ".01.1984";}
      document.getElementById("entrypdate").innerHTML =  `Na datę: ` + pp;
      shouldEnter = false; // just to be sure
}