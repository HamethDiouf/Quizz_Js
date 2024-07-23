// Form
const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2')
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    //  console.log(tableauResultats);
     verifFunc(tableauResultats)
     tableauResultats = []
})

// Fonction de vérification
function verifFunc(tabResultats) {
    
    for(let a = 0; a < 5; a++) {
        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true)
        } else {
            verifTableau.push(false)
        }
    }
    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleurFonction(verifTableau);
    verifTableau = [];
}
 
// Fonction d'affichage des résultats
function afficherResultats(tabCheck) {
   
    let nbFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbFautes);

    switch(nbFautes) {

        case 0:
            titreResultat.innerText = "✔️ Bravo, c'est un sans faute ! ✔️";
            aideResultat.innerText = '';
            noteResultat.innerText = '5/5';
        break;
        case 1:
            titreResultat.innerText = "✨ Vous y êtes presque ! ✨"
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '4/5';
        break;
        case 2: 
            titreResultat.innerText = "✨ Encore un effort ...👀 !"
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '3/5';
        break;
        case 3:
            titreResultat.innerText = "👀 Il reste quelques erreurs. 😭"
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '2/5';
        break;
        case 4:
            titreResultat.innerText = "😭 Peux mieux faire 😭 !"
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '1/5';
        break;
        case 5:
            titreResultat.innerText = "👎 Peux mieux faire 👎 !"
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '0/5';
            default:
            titreResultat.innerText = "😢 Oups ! Cas innatendu. Réfléchissez bien et réessayez.";
    }
}

// couleur de fonction
function couleurFonction(tabValBool) {
  
    for(let j = 0; j < tabValBool.length; j++) {

        if(tabValBool[j] === true) {
            toutesLesQuestions[j].style.backgroundColor = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.backgroundColor = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }

    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = 'white';       
    })
})