
//Déclaration des variables
var Inputinteger = document.querySelector("#integer");
var InputintegerFactors = document.getElementById("integer-factors");
var Inputroman = document.getElementById("roman");
var InputromanFactors = document.getElementById("roman-factors");



//Objet contenant nos fonctions

var listennersFunctions = {

    //fonction qui renvoie les n facteurs premiers d'un nombre

    primFactors: (ev) => { 

        let element = ev.target;
        let n = element.value;  // n représente le nombre tapé par l'utilisateur

        if (Inputinteger.value == "") {
            InputintegerFactors.value = "";
            return;
        }
        if (n <= 1 || isNaN(n)) {
            InputintegerFactors.value = "on veut un entier supérieur à 1 petit!!"; //juste pr le fun!!
            return;
        }

        var factorsTable = []; //je défini un tableau vide "factorsTable"
        var divisor = 2; // je défini mon diviseur le plus petit nombre premier qui peut diviser "n"

        while (n >= 2) { //tant que n>2 on a :
            if (n % divisor == 0) { //si le reste de la division nous donne 0 , alors le diviseur est un facteur premier
                factorsTable.push(divisor); //on l'insère donc dans notre tableau
                n = n / divisor; //puis on redéfini "n" qui devient alors le "quotient" trouvé lors de cette division (lorsqu'il sera inférieure à 2 la boucle s'arrêtera)
            }
            else {   // si le reste de la division n'est pas égale à 0, notre diviseur n'est pas un facteur premier :
                divisor++; // on l'incréménte donc de 1, et on revient dns le "if"
            }

        }

        // boucle qui vérifie que  les n facteurs premiers du nombre saisie sont inférieures à 9!
        for (let index = 0; index < factorsTable.length; index++) {
            const factors = factorsTable[index];
            if (factors >= 9) {
                factorsTable = [];
                factorsTable.push("les facteurs sont >= 9");
                InputintegerFactors.value = factorsTable.toString();
                console.log(factorsTable);
                return;
            }
        }

        InputintegerFactors.value = factorsTable.toString();
        console.log(factorsTable);
    },


    //fonction qui renvoie en notation romaine les n facteurs premiers d'un nombre 

    primFactorsRoman: (ev) => { 

        let element = ev.target;
        let n = element.value;  // n représente le nombre tapé par l'utilisateur

        if (Inputroman.value == "") {
            InputromanFactors.value = "";
            return;
        }
        if (n <= 1 || isNaN(n)) {
            InputromanFactors.value = "on veut un entier supérieur à 1 petit!!"; //juste pr le fun!!
            return;
        }

        var factorsTable = []; //je défini un tableau vide "factorsTable" qui va contenir mes facteurs premiers
        var factorsTableRoman = []; //je défini un tableau vide "factorsTableRoman" qui va contenir mes facteurs premiers en notation romaine
        var divisor = 2; // je défini mon diviseur le plus petit nombre premier qui peut diviser "n"

        while (n >= 2) { //tant que n>2 on a :
            if (n % divisor == 0) { //si le reste de la division nous donne 0 , alors le diviseur est un facteur premier
                factorsTable.push(divisor); //on l'insère donc dans notre tableau
                n = n / divisor; //puis on redéfini "n" qui devient alors le "quotient" trouvé lors de cette division (lorsqu'il sera inférieure à 2 la boucle s'arrêtera)
            }
            else {   // si le reste de la division n'est pas égale à 0, notre diviseur n'est pas un facteur premier :
                divisor++; // on l'incréménte donc de 1, et on revient dns le "if"
            }
        }

        // boucle qui vérifie que  les n facteurs premiers du nombre saisie sont inférieures à 9!
        for (let index = 0; index < factorsTable.length; index++) {
            const factors = factorsTable[index];
            var factorsRoman = listennersFunctions.convertToRoman(factors);
            factorsTableRoman.push(factorsRoman);
            if (factors >= 9) {
                factorsTableRoman = [];
                factorsTableRoman.push("les facteurs sont >= 9")
                InputromanFactors.value = factorsTableRoman.toString();
                console.log(factorsTableRoman);
                return;
            }
        }

        InputromanFactors.value = factorsTableRoman.toString(); // on affiche notre tableau de facteurs premiers en notation romaine
        console.log(factorsTableRoman); 
    },


    // fonction qui Converti des entiers en romains

    convertToRoman: (number) => {
        var roman = ''; //on défini la variable roman
        var integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; // on défini notre tableau de nombres en entiers qui sont les valeurs des chiffres romains du bas
        var romanNumber = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; // on  defini notre alphabet romain 
        for (var i = 0; i < integer.length; i++) { //on parcourt notre tableau d'entier(integer)
            while (number >= integer[i]) { //tant que le nombre saisi est supérieur ou égale à un nombre à une position i du tableau :
                roman += romanNumber[i]; //on ajoute un chiffre romain qui est à cette même position i à notre variable roman
                number -= integer[i]; // et on soustrait ce nombre du nombre saisi
                //lorsque number == 0 , on sortira de la boucle

            }
        }
        return roman; // on retourne la valeur de roman
    }

}





//fonctions contenant nos abonnements

var setupListenners = () => {

    Inputinteger.addEventListener("input", listennersFunctions.primFactors); //1er abonnement
     Inputroman.addEventListener("input", listennersFunctions.primFactorsRoman); //2e abonnement

}