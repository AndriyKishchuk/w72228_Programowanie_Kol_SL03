const ksiazki = [
    {
        tytul: "Galka",
        rokWydania: 1911,
        imieAutora: "Vasia",
        nazwiskoAutora: "Vmes",
        ImieINazwisko: function() {
            return this.imieAutora + " " + this.nazwiskoAutora;
        }
    },
    {
        tytul: "Pan Tadeusz",
        rokWydania: 1134,
        imieAutora: "Adam",
        nazwiskoAutora: "Mickiewicz",
        ImieINazwisko: function() {
            return this.imieAutora + " " + this.nazwiskoAutora;
        }
    },
    {
        tytul: "Lys Mykyta",
        rokWydania: 1896,
        imieAutora: "Iwan",
        nazwiskoAutora: "Franko",
        ImieINazwisko: function() {
            return this.imieAutora + " " + this.nazwiskoAutora;
        }
    },
   {
        tytul: "Bad Profesor",
        rokWydania: 2000,
        imieAutora: "Nikol",
        nazwiskoAutora: "Tundra",
        ImieINazwisko: function() {
            return this.imieAutora + " " + this.nazwiskoAutora;
        }
    }
];

const Rok = 2000;

console.log(`Ksiażki jest w roku ${Rok}:`);
ksiazki.forEach(ksiazka => {
    if (ksiazka.rokWydania === Rok) {
        console.log(`Tytuł: ${ksiazka.tytul}, Autor: ${ksiazka.ImieINazwisko()}`);
    }
});

