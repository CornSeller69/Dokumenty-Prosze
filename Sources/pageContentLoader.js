//    =======     PORADNIK
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
                  <b>I: Ogląd Biura<br>II: Dane na Dokumentach<br>III: Traktowanie Petentów<br>IV: Wykroczenia i pouczenie` + newChapters + `</b>`;
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
                  Niektórzy petenci jednakże mogą otrzymać specjalne traktowanie (Nie potrzebują innych dokumentów oprócz swojej legitymacji). Należą do nich Dyplomaci oraz Osoby poszukujące Azylu politycznego w Ciechocinku.`;
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
                        3. Federacja Włocławska:<br>
                        - Włocławek, Szpetal Górny, Kowal<br>
                        4. Hrabstwo Lipnowskie:<br>
                        - Lipno, Biskupin<br>
                        5. Hrabstwo Golubsko-Dobrzyńskie:<br>
                        - Bielsk, Ciechocin<br>
                        6. Wielki Inowrocław:<br>
                        - Inowrocław, Bydgoszcz, Solec Kujawski`;
                        page2.innerHTML = pb2 + `<br><br><br><img src='Materials/temp/empty/bin/nothinghere/bro/stop/funny.png' alt='Mapa here' style='width: 100%; margin-top: 5%;'>`; 
                  } else {
                        page1.innerHTML = pb1 + ``;
                        page2.innerHTML = pb2 + ``;
                  }
                  break;
            case 5:
                  if (currentDay >= 5) {
                        page1.innerHTML = pb1 + `<br>
                        <b>VI: Aresztowania</b><br><br>
                        Czasem zdarzyć może się sytuacja, gdzie petenta trzeba będzie się pozbyć przy użyciu siły.<br>
                        W razie takiego niefortunnego przypadku, w waszym biurze zamontowano czerwony przycisk z wykryknikiem. Wciśnijcie go, a ochrona przyjdzie w krótkim czasie.
                        <br><br><br><u>Nadużycie przycisku będzie skutkowało w wydaniu pouczenia.</u><br><br><br>
                        Na następnej stronie spodziewajcie się otrzymywania danych osób poszukiwanych listem gończym. Gdy te odwiedzą twój punkt, wciśnijcie przycisk, aby je aresztować.`;
                        page2.innerHTML = pb2 + `<br>
                        <b>POSZUKIWANY</b><br>`;
                        if(currentDay = 5) {page2.innerHTML = page2.innerHTML + `<img src="Materials/people/red-mug.png" style="width: 70%;"><br><h2>Danne Schmidt</h2><p>Uciekinier zakładu karnego w Bydgoszczy. Morderca i włamywacz. Szczególne: Zranił oko podczas ucieczki.</p>`;}
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
function updateGuideBook() {
      if (currentDay >= 2) {
            reqDoc = `<b>Ciechocinianie:</b><br>
            1. Paszport<br>
            <br><b>Obcokrajowcy:</b><br>
            1. Paszport<br>
            <br><b>Dyplomaci:</b><br>
            1. Paszport<br>
            <br><b>Azylanci:</b><br>
            Nie przyjmujemy obecnie azylantów.`;
            newChapters = `<br>V. Mapa narodów`;
            entryRules = `1. Wszystkie dokumenty muszą być aktualne`;
      }
      if (currentDay >= 3) {
            reqDoc = `<b>Ciechocinianie:</b><br>
            1. Paszport<br>
            2. Dowód Osobisty<br>
            <br><b>Obcokrajowcy:</b><br>
            1. Paszport<br>
            2. Bilet Wstępu<br>
            <br><b>Dyplomaci:</b><br>
            1. Legitymacja dyplomatyczna<br>
            <br><b>Azylanci:</b><br>
            Nie przyjmujemy obecnie azylantów.`;
            entryRules = `1. Wszystkie dokumenty muszą być aktualne<br>2. Ciechocinianie muszą mieć Dowód osobisty<br>3. Obcokrajowcy muszą mieć Bilet wstępu`;
      }
      if (currentDay >= 5) {
            newChapters = `<br>V. Mapa narodów<br>VI. Aresztowania`;
      }
}

//    =======     BIULETYN
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
                        Możecie od teraz wpuszczać Obcokrajowców, pod warunkiem, że mają przy sobie paszport, który nie stracił jeszcze ważności.<br>
                        Wasz poradnik otrzymał nowy wpis na temat krajów, z jakich zezwalamy na wstęp ludności.<br><br>
                        W przypadku, problemów, wlepcie pieczątkę odmowy, a jeżeli będzie więcej problemów, wciśnijcie przycisk alarmu w waszym biurze.<br><br>Niech żyje Unia Ciechocińska!`;
                        break;
                  case 3:
                        content.innerHTML = `Biuletyn na datę 03.01.1984<br><br>Inspektorze! Ministerstwo Ochrony Granicy ogłasza, że przez wczorajszy atak terrorystyczny, wprowadzamy nowe zabezpieczenia.<br>
                        Obcokrajowcy, aby mieć wstęp do kraju, muszą również mieć przy sobie ważny Bilet Wstępu.<br>
                        Zdajemy sobie sprawę jednakże, że przestępcy będą próbowali podszywać się pod Naszych rodaków skradzionymi paszportami. Od teraz, Ciechocinianie muszą również mieć przy sobie Dowód Osobisty.<br><br>
                        W przypadku, braku dodatkowych dokumentów, wlepcie pieczątkę odmowy.<br><br>Niech żyje Unia Ciechocińska!`;
                        break;
                  case 4:
                        content.innerHTML = `Biuletyn na datę 04.01.1984<br><br>Inspektorze! Wieści o nowych wymogach na granicy Ciechocińsko-Ostaszewskiej rozeszły się międzynarodowo.<br>
                        Dzisiaj odbędzie się wywiad w parlamencie. Spodziewamy się wizyty od Ostaszewskiego dyplomaty.<br>Sprawdź swój poradnik żeby wiedzieć, jakie dokumenty potrzebne są dyplomatom.<br>
                        <br>Niech żyje Unia Ciechocińska!`;
                        break;
                  case 5:
                        content.innerHTML = `Biuletyn na datę 05.01.1984<br><br>Inspektorze! Dla bezpieczeństwa waszego oraz granicy, autoryzujemy ci dostęp do przycisku alarmu, którym możesz wezwać ochronę.
                        <br>Wedle wczorajszej konferencji w parlamencie, spodziewaj się jutro ważnej zmiany związanej z tym przyciskiem. Więcej przeczytasz w rozdziale VI swojego Poradnika.<br>
                        <br>Niech żyje Unia Ciechocińska!`;
                        break;
                  default:
                        content.innerHTML = `Nie ma żadnych wieści dla dzisiejszego biuletynu, kontynuujcie pracę podług poprzednio danych nakazów.`;
                        break;
            }
      }
}