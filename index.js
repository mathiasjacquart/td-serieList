// 1 Selectionner le point d'entrée
const ul = document.querySelector("ul");

//référence pour le form et l'input

const input = document.querySelector("input")
const form = document.querySelector("form")
// simulation API
const series = [
  {
    name: "Breaking Bad",
    seen: false,
  },
  {
    name: "The Wire",
    seen: true,
  },
];


// ecoute de l'evenement submit pour le formulaire

form.addEventListener('submit', (event) => {
  //empeche le rechargement par défaut 
  event.preventDefault();
  // récupération de la valeur saisie
  const value = input.value
  console.log(value);
  //réinitilisation du champ de saisie
  input.value = "";
  addSerie(value)
});


// 3 Création de la méthode principale qui boucle sur le tableau de données
const displaySeries = () => {
  const seriesNode = series.map((serie, index) => {
    return createSerieElement(serie, index);
  });
  // on réinitialise le point d'entrée (le ul) pour ne pas avoir de doublonss
  ul.innerHTML="";
  ul.append(...seriesNode);
};

// 2 créer la méthode qui affiche un élément
const createSerieElement = (serie, index) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  let buttonState = true
  span.classList.add("todo");
  //   condition si la série a été vu
  // if (serie.seen) {
  //   span.classList.add("done");
  // } 
  const p = document.createElement("p");
  p.innerText = serie.name;
  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit";
  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("delete");
  li.append(span, p, btnEdit, btnDelete);

// evenement 
  btnDelete.addEventListener('click', ()=> { 
  removeSerie(index)
})

// evenement changement de couleur click
  span.addEventListener('click',()=> {
    buttonState = !buttonState
    if (!buttonState){
      span.classList.add("done")
    } else {
      span.classList.remove("done")
    }
  
    
  })





  return li;
  
};

  // Modification du span

// création méthode pour ajouter
const addSerie = (value) => {
  //ajout d'un objet avec la clée qui correspond au nom de la série et la clé seen a false
  series.push({name:value , seen: false });
  // on relance l'affichage avec invocation de la fonction principale
  displaySeries();
}
// function seenSerie(index) {
//   series[index].seen = !series[index].seen
//   console.log(series[index].seen);
//   }

// // création méthode pour supprimer 
const removeSerie = (index) => { 
  series.splice(index, 1)
  displaySeries()
}

// 4 invocation de la série principale

displaySeries();