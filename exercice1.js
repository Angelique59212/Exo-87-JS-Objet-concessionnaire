let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Constructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

//Insert Title
let title = document.createElement("h1");
title.innerHTML = voiture.Nom  + ", voiture futuriste fonctionnant à l'énergie solaire.";

document.body.appendChild(title);


//Insert Image
let image = document.createElement("img");
image.src  = voiture.imgUrl;

document.body.appendChild(image);

//Insert properties
let text = document.createElement("p");
text.innerHTML = `Ma voiture s'appelle ${voiture.Nom} , elle a ${voiture.nombresRoues}roues , elle est de couleur  
    ${voiture.Couleur}, et possède ${voiture.nombrePortes}portes . <br>Elle est de type ${voiture.Constructeur} , 
    son énergie est ${voiture.Carburant} , elle a une autonomie de ${voiture.Autonomie} , sa vitesse maxi est de 
    ${voiture.vitesseMaxi}. `;

document.body.appendChild(text);

