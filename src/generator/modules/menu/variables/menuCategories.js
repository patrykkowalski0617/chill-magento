// subcategoryOther valid values are: "not-allowed", "allowed" or "force"

const menuCategories = [
  {
    categoryName: "AGD wolnostojące",
    icon: "ico_mda1",
    subcategories: [
      {
        subcategoryName: "Lodówki i zamrażarki",
        subcategoryOther: "not-allowed",
        codes: [
          { categoryCode: "100000095", codeName: "Lodówki jednodrzwiowe" },
          { categoryCode: "100000096", codeName: "Lodówko-zamrażarki" },
          { categoryCode: "100000097", codeName: "Lodówki Side by Side" },
          { categoryCode: "100000373", codeName: "Lodówki retro" },
          { categoryCode: "100000411", codeName: "Lodówki turystyczne" },
          { categoryCode: "100013", codeName: "Lodówki i zamrażarki" },
          { categoryCode: "101071", codeName: "Lady i witryny chłodnicze" },
        ],
      },
      {
        subcategoryName: "Zamrażarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100021", codeName: "Zamrażarki" }],
      },
      {
        subcategoryName: "Pralki",
        subcategoryOther: "not-allowed",
        codes: [
          { categoryCode: "100018", codeName: "Pralki wirnikowe / Wirówki" },
          { categoryCode: "100017", codeName: "Pralki" },
        ],
      },
      {
        subcategoryName: "Pralko-suszarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100019", codeName: "Pralko-suszarki" }],
      },
      {
        subcategoryName: "Suszarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100020", codeName: "Suszarki" }],
      },
      {
        subcategoryName: "Kuchenki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100014", codeName: "Kuchenki wolnostojące" }],
      },
      {
        subcategoryName: "Zmywarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100022", codeName: "Zmywarki" }],
      },
      {
        subcategoryName: "Kuchenki mikrofalowe",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100015", codeName: "Kuchenki mikrofalowe" }],
      },
    ],
  },
  {
    categoryName: "AGD do zabudowy",
    icon: "ico_bi",
    subcategories: [
      {
        subcategoryName: "Płyty",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100031", codeName: "Płyty do zabudowy" }],
      },
      {
        subcategoryName: "Piekarniki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100038", codeName: "Piekarniki" }],
      },
      {
        subcategoryName: "Zmywarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100036", codeName: "Zmywarki do zabudowy" }],
      },
      {
        subcategoryName: "Lodówki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100026", codeName: "Lodówki do zabudowy" }],
      },
      {
        subcategoryName: "Pralki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100032", codeName: "Pralki do zabudowy" }],
      },
      {
        subcategoryName: "Pralko-suszarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100033", codeName: "Pralko-suszarki" }],
      },
      {
        subcategoryName: "Suszarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100034", codeName: "Suszarki" }],
      },
      {
        subcategoryName: "Kuchnie mikrofalowe",
        subcategoryOther: "not-allowed",
        codes: [
          {
            categoryCode: "100029",
            codeName: "Kuchnie mikrofalowe do zabudowy",
          },
        ],
      },
      {
        subcategoryName: "Kuchnie",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100039", codeName: "Kuchnie do zabudowy" }],
      },
      {
        subcategoryName: "Okapy",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100030", codeName: "Okapy kuchenne" }],
      },
      {
        subcategoryName: "Zamrażarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100035", codeName: "Zamrażarki do zabudowy" }],
      },
      {
        subcategoryName: "Szuflady grzewcze",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101572", codeName: "Szuflady grzewcze" }],
      },
      {
        subcategoryName: "Zlewozmywaki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101263", codeName: "Zlewozmywaki" }],
      },
      {
        subcategoryName: "Panele do lodówek Samsung BESPOKE",
        subcategoryOther: "allowed",
        codes: [
          {
            categoryCode: "101609",
            codeName: "Panele do lodówek Samsung BESPOKE",
          },
        ],
      },
      {
        subcategoryName: "Zestawy AGD do zabudowy",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101623", codeName: "Zestawy AGD do zabudowy" },
        ],
      },
      {
        subcategoryName: "Baterie kuchenne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101264", codeName: "Baterie kuchenne" }],
      },
    ],
  },
  {
    categoryName: "Telewizory",
    icon: "ico_ce",
    subcategories: [
      {
        subcategoryName: "Telewizory",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100129", codeName: "Telewizory" }],
      },
      {
        subcategoryName: "Akcesoria",
        subcategoryOther: "not-allowed",
        codes: [
          { categoryCode: "100777", codeName: "Anteny" },
          { categoryCode: "100134", codeName: "Kable" },
          { categoryCode: "101360", codeName: "Kable HDMI" },
          { categoryCode: "100127", codeName: "Akcesoria do TV" },
          { categoryCode: "100769", codeName: "Tunery DVB-T" },
          { categoryCode: "101650", codeName: "Uchwyty" },
          { categoryCode: "100778", codeName: "Pozostałe" },
          {},
        ],
      },
    ],
  },
  {
    categoryName: "Małe AGD",
    icon: "ico_sda_hair_dryer",
    subcategories: [
      {
        subcategoryName: "Ekspresy do kawy",
        subcategoryOther: "not-allowed",
        codes: [
          { categoryCode: "100027", codeName: "Ekspresy do kawy" },
          { categoryCode: "100046", codeName: "Ekspresy do kawy" },
          { categoryCode: "100047", codeName: "Przelewowe" },
        ],
      },
      {
        subcategoryName: "Odkurzacze",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100062", codeName: "Odkurzacze" }],
      },
      {
        subcategoryName: "Roboty, blendery, miksery",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100042", codeName: "Blendery kielichowe" },
          { categoryCode: "100043", codeName: "Blendery ręczne" },
          { categoryCode: "100067", codeName: "Roboty kuchenne" },
          { categoryCode: "100060", codeName: "Miksery ręczne" },
        ],
      },
      {
        subcategoryName: "Czajniki",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100044", codeName: "Czajniki elektryczne" },
          { categoryCode: "101455", codeName: "Czajniki tradycyjne" },
        ],
      },
      {
        subcategoryName: "Grille, opiekacze, gofrownice",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101425", codeName: "Grille i akcesoria grillowe" },
          { categoryCode: "100145", codeName: "Gofrownice" },
          { categoryCode: "100077", codeName: "Tostery" },
          { categoryCode: "100050", codeName: "Grille elektryczne" },
          { categoryCode: "100063", codeName: "Opiekacze do kanapek" },
        ],
      },
      {
        subcategoryName: "Oczyszczacze powietrza",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100822", codeName: "Oczyszczacze powietrza" }],
      },
      {
        subcategoryName: "Szczoteczki elektryczne i irygatory",
        subcategoryOther: "allowed",
        codes: [
          {
            categoryCode: "100074",
            codeName: "Szczoteczki elektryczne i irygatory",
          },
          {
            categoryCode: "101520",
            codeName: "Irygatory",
          },
          { categoryCode: "100706", codeName: "Końcówki do szczoteczek" },
          {
            categoryCode: "100053",
            codeName: "Końcówki do szczoteczek elektrycznych",
          },
        ],
      },
      {
        subcategoryName: "Golenie męskie",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100049", codeName: "Golarki" },
          { categoryCode: "100078", codeName: "Trymery" },
          { categoryCode: "100057", codeName: "Maszynki do strzyżenia włosów" },
          { categoryCode: "101435", codeName: "Akcesoria do golarek" },
        ],
      },
      {
        subcategoryName: "Żelazka",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100083", codeName: "Żelazka" }],
      },
      {
        subcategoryName: "Stylizacja włosów",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100055", codeName: "Lokówki" },
          { categoryCode: "100071", codeName: "Suszarki do włosów" },
          { categoryCode: "100072", codeName: "Suszarko-lokówki" },
          { categoryCode: "100066", codeName: "Prostownice i karbownice" },
        ],
      },
      {
        subcategoryName: "Maszyny do szycia",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100059", codeName: "Maszyny do szycia" }],
      },
      {
        subcategoryName: "Pielęgnacja dłoni i stóp",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101534", codeName: "Pielęgnacja dłoni i stóp" },
        ],
      },
      {
        subcategoryName: "Krajalnice do chleba",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100054", codeName: "Krajalnice do chleba" }],
      },
      {
        subcategoryName: "Parowary i kombiwary",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100064", codeName: "Parowary i kombiwary" }],
      },
      {
        subcategoryName: "Akcesoria dla dzieci",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101481", codeName: "Akcesoria dla dzieci" }],
      },
      {
        subcategoryName: "Ciśnieniomierze",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100076", codeName: "Ciśnieniomierze" }],
      },
      {
        subcategoryName: "Żarówki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101336", codeName: "Żarówki" }],
      },

      {
        subcategoryName: "Bidony i butelki sportowe",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101462", codeName: "Bidony i butelki sportowe" },
        ],
      },
      {
        subcategoryName: "Mini piekarniki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100825", codeName: "Mini piekarniki" }],
      },
      {
        subcategoryName: "Oczyszczacze i mopy parowe",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100326", codeName: "Oczyszczacze i mopy parowe" },
        ],
      },
      {
        subcategoryName: "Wypiekacze do chleba",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100082", codeName: "Wypiekacze do chleba" }],
      },
      {
        subcategoryName: "Czujniki czadu i gazu",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101490", codeName: "Czujniki czadu i gazu" }],
      },
      {
        subcategoryName: "Chłodziarki turystyczne",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100084", codeName: "Chłodziarki turystyczne" },
        ],
      },
      {
        subcategoryName: "Suszarki  do bielizny",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100785", codeName: "Suszarki  do bielizny" }],
      },
      {
        subcategoryName: "Deski do prasowania",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100705", codeName: "Deski do prasowania" },
          { categoryCode: "101463", codeName: "Deski do prasowania" },
        ],
      },
      {
        subcategoryName: "Dodatkowe wyposażenie do pralek",
        subcategoryOther: "allowed",
        codes: [
          {
            categoryCode: "101469",
            codeName: "Dodatkowe wyposażenie do pralek",
          },
        ],
      },
      {
        subcategoryName: "Akcesoria do sprzątania",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101450", codeName: "Środki czyszczące" },
          { categoryCode: "101631", codeName: "Wkłady do mopa" },
          { categoryCode: "101632", codeName: "Akcesoria do sprzątania" },
          {
            categoryCode: "100786",
            codeName: "Mopy i akcesoria do sprzątania",
          },
          { categoryCode: "101630", codeName: "Mopy" },
          { categoryCode: "101629", codeName: "Myjki do okien" },
          {
            categoryCode: "101479",
            codeName: "Środki czyszczące i odświeżacze",
          },
        ],
      },
      {
        subcategoryName: "Frytownice",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100048", codeName: "Frytownice" }],
      },
      {
        subcategoryName: "Przybory kuchenne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101458", codeName: "Przybory kuchenne" }],
      },
      {
        subcategoryName: "Kuchenki turystyczne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100790", codeName: "Kuchenki turystyczne" }],
      },
      {
        subcategoryName: "Koce elektryczne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101494", codeName: "Koce elektryczne" }],
      },
      {
        subcategoryName: "Urządzenia wielofunkcyjne AGD",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101134", codeName: "Urządzenia wielofunkcyjne AGD" },
        ],
      },
      {
        subcategoryName: "Masażery",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100056", codeName: "Masażery" }],
      },
      {
        subcategoryName: "Młynki elektryczne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100061", codeName: "Młynki elektryczne" }],
      },
      {
        subcategoryName: "Klimatyzatory",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100051", codeName: "Klimatyzatory" }],
      },
      {
        subcategoryName: "Pokrowce na deski do prasowania",
        subcategoryOther: "allowed",
        codes: [
          {
            categoryCode: "101464",
            codeName: "Pokrowce na deski do prasowania",
          },
        ],
      },
      {
        subcategoryName: "Suszarki do owoców, warzyw, grzybów",
        subcategoryOther: "allowed",
        codes: [
          {
            categoryCode: "100073",
            codeName: "Suszarki do owoców, warzyw, grzybów",
          },
        ],
      },
      {
        subcategoryName: "Formy do pieczenia",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101460", codeName: "Formy do pieczenia" }],
      },
      {
        subcategoryName: "Stacje pogodowe",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100712", codeName: "Stacje pogodowe" },
          { categoryCode: "101491", codeName: "Stacje pogodowe" },
          { categoryCode: "100711", codeName: "Stacje pogodowe" },
        ],
      },
      {
        subcategoryName: "Kawy i herbaty",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101497", codeName: "Kawy ziarniste" },
          { categoryCode: "101498", codeName: "Kawy mielone i herbaty" },
          { categoryCode: "101607", codeName: "Herbaty" },
          { categoryCode: "101496", codeName: "Kawy kapsułkowe" },
        ],
      },
      {
        subcategoryName: "Filtrowanie do wody",
        subcategoryOther: "allowed",
        codes: [
          {
            categoryCode: "101575",
            codeName: "Filtry nakranowe, podzlewozmywakowe i baterie",
          },
          { categoryCode: "101438", codeName: "Dzbanki filtrujące do wody" },
          { categoryCode: "101437", codeName: "Wkłady filtrujące" },
          { categoryCode: "100687", codeName: "Filtry węglowe" },
          { categoryCode: "101439", codeName: "Butelki filtrujące wodę" },
        ],
      },
      {
        subcategoryName: "Wentylatory",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100080", codeName: "Wentylatory" }],
      },
      {
        subcategoryName: "Echosondy",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101594", codeName: "Echosondy" }],
      },
      {
        subcategoryName: "Sprzęt grzejny",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100070", codeName: "Sprzęt grzejny" }],
      },
      {
        subcategoryName: "Termometry",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100075", codeName: "Termometry" }],
      },
      {
        subcategoryName: "Dodatkowe wyposażenie",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101453", codeName: "Dodatkowe wyposażenie" }],
      },
      {
        subcategoryName: "Roboty sprzątające",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100898", codeName: "Roboty sprzątające" }],
      },
      {
        subcategoryName: "Golarki do ubrań",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100322", codeName: "Golarki do ubrań" }],
      },
      {
        subcategoryName: "Latarki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100876", codeName: "Latarki" }],
      },
      {
        subcategoryName: "Osuszacze powietrza",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101493", codeName: "Osuszacze powietrza" }],
      },
      {
        subcategoryName: "Kostkarki do lodu",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101608", codeName: "Kostkarki do lodu" }],
      },
      {
        subcategoryName: "Dodatkowe wyposażenie",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100787", codeName: "Dodatkowe wyposażenie" }],
      },
      {
        subcategoryName: "Wagi kuchenne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100323", codeName: "Wagi kuchenne" }],
      },
      {
        subcategoryName: "Inhalatory",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101306", codeName: "Inhalatory" }],
      },
      {
        subcategoryName: "Dezynfekcja",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101591", codeName: "Dezynfekcja" }],
      },
      {
        subcategoryName: "Maszynki do mięsa",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100058", codeName: "Maszynki do mięsa" }],
      },
      {
        subcategoryName: "Termosy",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101461", codeName: "Termosy" }],
      },
      {
        subcategoryName: "Pojemniki na żywność",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101451", codeName: "Pojemniki na żywność" }],
      },
      {
        subcategoryName: "Sztućce",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101459", codeName: "Sztućce" }],
      },
      {
        subcategoryName: "Patelnie i garnki",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100065", codeName: "Patelnie i garnki" },
          { categoryCode: "101641", codeName: "Patelnie grillowe" },
          { categoryCode: "101643", codeName: "Zestawy garnków" },
          { categoryCode: "101642", codeName: "Woki" },
          { categoryCode: "101638", codeName: "Patelnie" },
          { categoryCode: "101645", codeName: "Rondle" },
          { categoryCode: "101639", codeName: "Patelnie z pokrywką" },
          { categoryCode: "101637", codeName: "Pokrywki" },
          { categoryCode: "101640", codeName: "Patelnie do naleśników" },
          {
            categoryCode: "101606",
            codeName: "Brytfanny i naczynia żaroodporne",
          },
          { categoryCode: "101644", codeName: "Garnki" },
        ],
      },

      {
        subcategoryName: "Noże kuchenne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101457", codeName: "Noże kuchenne" }],
      },
      {
        subcategoryName: "Nawilżacze powietrza",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100146", codeName: "Nawilżacze powietrza" }],
      },
      {
        subcategoryName: "Wyciskarki do cytrusów",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100081", codeName: "Wyciskarki do cytrusów" }],
      },
      {
        subcategoryName: "Wyciskarki wolnoobrotowe",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101413", codeName: "Wyciskarki wolnoobrotowe" },
        ],
      },
      {
        subcategoryName: "Tabletki do zmywarek",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101476", codeName: "Tabletki do zmywarek" }],
      },
      {
        subcategoryName: "Sokowirówki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100068", codeName: "Sokowirówki" }],
      },
      {
        subcategoryName: "Depilatory",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100045", codeName: "Depilatory" }],
      },
      {
        subcategoryName: "Wagi łazienkowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100079", codeName: "Wagi łazienkowe" }],
      },
      {
        subcategoryName: "Szybkowary",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101636", codeName: "Szybkowary" }],
      },
      {
        subcategoryName: "Akcesoria do odkurzaczy",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101428", codeName: "Filtry do odkurzaczy" },
          { categoryCode: "100268", codeName: "Worki do odkurzaczy" },
          {
            categoryCode: "101516",
            codeName: "Akcesoria do odkurzaczy automatycznych",
          },
          { categoryCode: "101424", codeName: "Szczotki do odkurzaczy" },
        ],
      },
      {
        subcategoryName: "Nabłyszczacze do zmywarek",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101478", codeName: "Nabłyszczacze do zmywarek" },
        ],
      },
      {
        subcategoryName: "Golarki do ubrań",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100322", codeName: "Golarki do ubrań" }],
      },
      {
        subcategoryName: "Saturatory i akcesorie",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101589", codeName: "Saturatory do wody" },
          { categoryCode: "101628", codeName: "Butelki do saturatorów" },
          { categoryCode: "101627", codeName: "Syropy do saturatorów" },
          { categoryCode: "101626", codeName: "Cylindry do saturatorów" },
        ],
      },
      {
        subcategoryName: "Pozostałe",
        subcategoryOther: "force",
        codes: [
          { categoryCode: "100490", codeName: "Inne do pielęgnacji urody" },
          { categoryCode: "101526", codeName: "Pozostałe" },
          { categoryCode: "101275", codeName: "Akcesoria do ekspresów" },
          { categoryCode: "100327", codeName: "Pozostałe" },
          { categoryCode: "101474", codeName: "Dodatkowe wyposażenie" },
          { categoryCode: "101458", codeName: "Przybory kuchenne" },
          { categoryCode: "101634", codeName: "Środki czyszczące" },
          { categoryCode: "101468", codeName: "Środki czyszczące" },
          { categoryCode: "101489", codeName: "Środki czyszczące" },
          { categoryCode: "101487", codeName: "Akcesoria czyszczące" },
          { categoryCode: "101307", codeName: "Akcesoria sportowe" },
          { categoryCode: "101472", codeName: "Środki czyszczące" },
          { categoryCode: "101467", codeName: "Środki piorące" },
          { categoryCode: "101449", codeName: "Akcesoria do mikrofalówek" },
          {
            categoryCode: "101635",
            codeName: "Akcesoria do suszarek na pranie",
          },
          {
            categoryCode: "101523",
            codeName: "Akcesoria do maszynek do mielenia mięsa",
          },
          { categoryCode: "100132", codeName: "Akcesoria drobne RTV" },
          {
            categoryCode: "101470",
            codeName: "Dodatkowe wyposażenie do suszarek",
          },
          {
            categoryCode: "101522",
            codeName: "Akcesoria do robotów kuchennych",
          },
          {
            categoryCode: "101485",
            codeName: "Dodatkowe wyposażenie do okapów",
          },
          {
            categoryCode: "101452",
            codeName: "Pochłaniacze i wkłady filtrujące",
          },
          { categoryCode: "101484", codeName: "Akcesoria do żelazek" },
          { categoryCode: "101524", codeName: "Akcesoria do maszyn do szycia" },
          { categoryCode: "100784", codeName: "Akcesoria montażowe" },
          {
            categoryCode: "101525",
            codeName: "Filtry do oczyszczaczy i nawilżaczy powietrza",
          },
          { categoryCode: "101477", codeName: "Sól do zmywarek" },
        ],
      },
    ],
  },
  {
    categoryName: "Sprzęt IT",
    icon: "ico_it",
    subcategories: [
      {
        subcategoryName: "Laptopy",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100728", codeName: "Laptopy" }],
      },
      {
        subcategoryName: "Komputery",
        subcategoryOther: "not-allowed",
        codes: [
          { categoryCode: "101346", codeName: "Komputery All In One" },
          { categoryCode: "101406", codeName: "Mini PC" },
          { categoryCode: "100197", codeName: "Komputery PC" },
        ],
      },
      {
        subcategoryName: "Monitory",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100144", codeName: "Monitory" }],
      },
      {
        subcategoryName: "Tablety",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100733", codeName: "Tablety" }],
      },
      {
        subcategoryName: "Tablety graficzne",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100159", codeName: "Tablety graficzne" }],
      },
      {
        subcategoryName: "Drukarki i urządzenia wielofunkcyjne",
        subcategoryOther: "not-allowed",
        codes: [
          { categoryCode: "100279", codeName: "Drukarki atramentowe" },
          { categoryCode: "100284", codeName: "Urządzenia wielofunkcyjne" },
          { categoryCode: "100281", codeName: "Drukarki laserowe" },
        ],
      },
    ],
  },
  {
    categoryName: "Akcesoria IT",
    icon: "ico_it_accessories",
    subcategories: [
      {
        subcategoryName: "Głośniki komputerowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100328", codeName: "Głośniki komputerowe" }],
      },
      {
        subcategoryName: "Fotele Gamingowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101531", codeName: "Fotele Gamingowe" }],
      },
      {
        subcategoryName: "Routery",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100258", codeName: "Routery" }],
      },
      {
        subcategoryName: "Wzmacniacze sygnału",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101362", codeName: "Wzmacniacze sygnału" }],
      },
      {
        subcategoryName: "Kamery IP",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101363", codeName: "Kamery IP" }],
      },
      {
        subcategoryName: "Podkładki pod myszy",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100223", codeName: "Podkładki pod myszy" }],
      },
      {
        subcategoryName: "Etui",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101350", codeName: "Etui" }],
      },
      {
        subcategoryName: "Czytniki E-booków",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100630", codeName: "Czytniki E-booków" }],
      },
      {
        subcategoryName: "Odtwarzacze DVD przenośne",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100118", codeName: "Odtwarzacze DVD przenośne" },
        ],
      },
      {
        subcategoryName: "Akcesoria do tabletów",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100770", codeName: "Akcesoria do tabletów" }],
      },
      {
        subcategoryName: "Podkładki chłodzące pod laptopy",
        subcategoryOther: "allowed",
        codes: [
          {
            categoryCode: "101341",
            codeName: "Podkładki chłodzące pod laptopy",
          },
        ],
      },
      {
        subcategoryName: "Adaptery Bluetooth",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100263", codeName: "Adaptery Bluetooth" }],
      },
      {
        subcategoryName: "Akcesoria do konsol",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100392", codeName: "Akcesoria do konsol" },
          { categoryCode: "100236", codeName: "Kierownice do konsol" },
          {
            categoryCode: "101023",
            codeName: "Akcesoria do konsol",
          },
        ],
      },
      {
        subcategoryName: "Torby do laptopów",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100148", codeName: "Torby do laptopów" }],
      },
      {
        subcategoryName: "Listwy zasilające",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100221", codeName: "Listwy zasilające" }],
      },
      {
        subcategoryName: "Zasilacze i baterie do laptopów",
        subcategoryOther: "allowed",
        codes: [
          {
            categoryCode: "100771",
            codeName: "Zasilacze i baterie do laptopów",
          },
          { categoryCode: "100265", codeName: "Zasilacze" },
        ],
      },
      {
        subcategoryName: "Baterie i akumulatorki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100802", codeName: "Baterie i akumulatorki" }],
      },
      {
        subcategoryName: "Akcesoria do dysków",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100312", codeName: "Akcesoria do dysków" }],
      },
      {
        subcategoryName: "Artykuły czyszczące",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100492", codeName: "Artykuły czyszczące" }],
      },
      {
        subcategoryName: "Słuchawki z mikrofonem",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101359", codeName: "Słuchawki z mikrofonem" }],
      },
      {
        subcategoryName: "Kamery internetowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100230", codeName: "Kamery internetowe" }],
      },
      {
        subcategoryName: "Akcesoria do notebooków",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100218", codeName: "Akcesoria do notebooków" },
        ],
      },
      {
        subcategoryName: "Kable",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100229", codeName: "Kable komputerowe" },
          { categoryCode: "100224", codeName: "Przełączniki i rozdzielacze" },
          { categoryCode: "101349", codeName: "Kable USB do drukarek" },
          { categoryCode: "101358", codeName: "Kable i ładowarki" },
          { categoryCode: "100220", codeName: "Adaptery i przejściówki" },
        ],
      },
      {
        subcategoryName: "Blu-Ray, DVD, Nagrywarki ",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100117", codeName: "Blu-Ray, DVD, Nagrywarki " },
        ],
      },
      {
        subcategoryName: "Mikrofony",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100135", codeName: "Mikrofony" }],
      },
      {
        subcategoryName: "Gadżety dla graczy",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101170", codeName: "Gadżety dla graczy" }],
      },
      {
        subcategoryName: "Baterie do laptopów",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100772", codeName: "Baterie do laptopów" }],
      },
      {
        subcategoryName: "Akcesoria do czytników",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101595", codeName: "Akcesoria do czytników" }],
      },
      {
        subcategoryName: "Klawiatury i Myszki",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100200", codeName: "Zestawy (Mysz + Klawiatura)" },
          { categoryCode: "100157", codeName: "Klawiatury" },
          { categoryCode: "100235", codeName: "Myszki" },
        ],
      },
      {
        subcategoryName: "Programy",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101132", codeName: "Programy biurowe" },
          { categoryCode: "101131", codeName: "Programy antywirusowe" },
        ],
      },
      {
        subcategoryName: "Kody cyfrowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101573", codeName: "Kody cyfrowe" }],
      },
      {
        subcategoryName: "Czytniki kart SD",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100406", codeName: "Czytniki kart SD" }],
      },
      {
        subcategoryName: "Tonery",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100408", codeName: "Tonery" }],
      },
      {
        subcategoryName: "Tusze",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100407", codeName: "Tusze" }],
      },
      {
        subcategoryName: "Konsole i gry",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100381", codeName: "Gry PS5" },
          { categoryCode: "100387", codeName: "Gry Xbox One" },
          { categoryCode: "100487", codeName: "Gry na PC" },
          { categoryCode: "100391", codeName: "Gry Nintendo" },
          { categoryCode: "101022", codeName: "Konsole i gry" },
        ],
      },
      {
        subcategoryName: "Karty sieciowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100253", codeName: "Karty sieciowe" }],
      },
      {
        subcategoryName: "Ekrany projekcyjne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100511", codeName: "Ekrany projekcyjne" }],
      },
      {
        subcategoryName: "Karty pamięci i PenDrive",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100104", codeName: "Karty pamięci" },
          { categoryCode: "100385", codeName: "PenDrive" },
        ],
      },
      {
        subcategoryName: "Modemy 3G/LTE",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100255", codeName: "Modemy 3G/LTE" }],
      },
      {
        subcategoryName: "Dyski",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101339", codeName: "Dyski SSD" },
          { categoryCode: "100325", codeName: "Wewnętrzne" },
          { categoryCode: "100228", codeName: "Dyski zewnętrzne" },
        ],
      },
      {
        subcategoryName: "UPS (Zasilanie awaryjne)",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100329", codeName: "UPS (Zasilanie awaryjne)" },
        ],
      },
      {
        subcategoryName: "Pozostałe",
        subcategoryOther: "force",
        codes: [{ categoryCode: "100815", codeName: "Pozostałe" }],
      },
    ],
  },
  {
    categoryName: "Telefony",
    icon: "ico_gsm",
    subcategories: [
      {
        subcategoryName: "Smartfony",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100289", codeName: "Smartfony" }],
      },
      {
        subcategoryName: "Telefony komórkowe",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "100087", codeName: "Telefony komórkowe" }],
      },
      {
        subcategoryName: "Telefony stacjonarne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100141", codeName: "Telefony stacjonarne" }],
      },
    ],
  },
  {
    categoryName: "Smartwatche",
    icon: "ico_smartwatch",
    subcategories: [
      {
        subcategoryName: "Smartwatche i zegarki",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "101581", codeName: "Smartwatche i zegarki" }],
      },
      {
        subcategoryName: "Paski i akcesoria do zegarków",
        subcategoryOther: "not-allowed",
        codes: [
          { categoryCode: "101559", codeName: "Paski i akcesoria do zegarków" },
        ],
      },
    ],
  },
  {
    categoryName: "Akcesoria GSM",
    icon: "ico_smartwatch",
    subcategories: [
      {
        subcategoryName: "Powerbanki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101352", codeName: "Powerbanki" }],
      },
      {
        subcategoryName: "Etui do telefonów ",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100803", codeName: "Etui do telefonów " }],
      },
      {
        subcategoryName: "Szkła i folie ochronne",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100805", codeName: "Szkła i folie ochronne" }],
      },
      {
        subcategoryName: "Selfie sticki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101622", codeName: "Selfie sticki" }],
      },
      {
        subcategoryName: "Zestawy słuchawkowe/głośnomówiące",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100089", codeName: "Zestawy słuchawkowe Bluetooth" },
          { categoryCode: "100088", codeName: "Zestawy głośnomówiące" },
        ],
      },
      {
        subcategoryName: "Ładowarki i akumulatory",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100804", codeName: "Ładowarki i akumulatory" },
        ],
      },
      {
        subcategoryName: "Kable",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101553", codeName: "Kable" }],
      },
      {
        subcategoryName: "Pozostałe",
        subcategoryOther: "force",
        codes: [{ categoryCode: "100927", codeName: "Pozostałe" }],
      },
    ],
  },
  {
    categoryName: "Audio",
    icon: "ico_rtv",
    subcategories: [
      {
        subcategoryName: "High Power Audio",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101421", codeName: "High Power Audio" }],
      },
      {
        subcategoryName: "Mikro i Mini Wieże",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100130", codeName: "Mikro i Mini Wieże" }],
      },
      {
        subcategoryName: "Radia i budziki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100137", codeName: "Radia i budziki" }],
      },
      {
        subcategoryName: "Kina domowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100115", codeName: "Kina domowe" }],
      },
      {
        subcategoryName: "Słuchawki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100140", codeName: "Słuchawki" }],
      },
      {
        subcategoryName: "Mp3/Mp4",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100136", codeName: "Mp3/Mp4" }],
      },
      {
        subcategoryName: "Głośniki Bluetooth",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "100823", codeName: "Głośniki Bluetooth" },
          { categoryCode: "101335", codeName: "Głośniki przenośne" },
        ],
      },
      {
        subcategoryName: "Soundbary",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101266", codeName: "Soundbary" }],
      },
      {
        subcategoryName: "Boomboxy",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100139", codeName: "Boomboxy" }],
      },
      {
        subcategoryName: "Kontrolery DJ",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101532", codeName: "Kontrolery DJ" }],
      },
      {
        subcategoryName: "Zestawy kolumn",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100124", codeName: "Zestawy kolumn" }],
      },
      {
        subcategoryName: "Gramofony",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100126", codeName: "Gramofony" }],
      },
      {
        subcategoryName: "Inteligentne głośniki",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101584", codeName: "Inteligentne głośniki" }],
      },
      {
        subcategoryName: "Amplitunery",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100121", codeName: "Amplitunery" }],
      },
      {
        subcategoryName: "Systemy multiroom",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101577", codeName: "Systemy multiroom" }],
      },
      {
        subcategoryName: "Wzmacniacze",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100122", codeName: "Wzmacniacze" }],
      },
      {
        subcategoryName: "Odtwarzacze CD",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100125", codeName: "Odtwarzacze CD" }],
      },
    ],
  },
  {
    categoryName: "Akcesoria samochodowe",
    icon: "ico_navi",
    subcategories: [
      {
        subcategoryName: "Kamery samochodowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100949", codeName: "Kamery samochodowe" }],
      },
      {
        subcategoryName: "Navigacja GPS",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100094", codeName: "Navigacja GPS" }],
      },
      {
        subcategoryName: "Akcesoria do nawigacji",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100310", codeName: "Akcesoria do nawigacji" }],
      },
      {
        subcategoryName: "Uchwyty samochodowe",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101353", codeName: "Uchwyty samochodowe" },
          { categoryCode: "100806", codeName: "Uchwyty do telefonów" },
        ],
      },
      {
        subcategoryName: "Akcesoria do kamer sportowych",
        subcategoryOther: "allowed",
        codes: [
          { categoryCode: "101521", codeName: "Akcesoria do kamer sportowych" },
        ],
      },
      {
        subcategoryName: "Radia samochodowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100095", codeName: "Radia samochodowe" }],
      },
      {
        subcategoryName: "Alkomaty",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101084", codeName: "Alkomaty" }],
      },
      {
        subcategoryName: "Głośniki samochodowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100093", codeName: "Głośniki samochodowe" }],
      },
      {
        subcategoryName: "Akcesoria CarAudio",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100091", codeName: "Akcesoria CarAudio" }],
      },
      {
        subcategoryName: "Akcesoria GSM i GPS",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100086", codeName: "Akcesoria GSM i GPS" }],
      },
    ],
  },
  {
    categoryName: "Rozrywka",
    icon: "ico_entertainment",
    subcategories: [
      {
        subcategoryName: "Hulajnogi",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "101482", codeName: "Hulajnogi" }],
      },
      {
        subcategoryName: "Rowery elektryczne",
        subcategoryOther: "not-allowed",
        codes: [{ categoryCode: "101667", codeName: "Rowery elektryczne" }],
      },
      {
        subcategoryName: "Auta akumulatorowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101500", codeName: "Auta akumulatorowe" }],
      },
      {
        subcategoryName: "Kamery sportowe",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "100801", codeName: "Kamery sportowe" }],
      },
      {
        subcategoryName: "Drony",
        subcategoryOther: "allowed",
        codes: [{ categoryCode: "101334", codeName: "Drony" }],
      },
    ],
  },
];

export default menuCategories;
