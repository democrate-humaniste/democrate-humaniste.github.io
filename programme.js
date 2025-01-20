//Définition des éléments
const imgEconomie = document.getElementById('img-economie');
const textEconomie = document.getElementById('text-economie');

const imgSocial = document.getElementById('img-social');
const textSocial = document.getElementById('text-social');

const imgEcologie = document.getElementById('img-ecologie');
const textEcologie = document.getElementById('text-ecologie');

const imgEducation = document.getElementById('img-education');
const textEducation = document.getElementById('text-education');

const imgImmigration = document.getElementById('img-immigration');
const textImmigration = document.getElementById('text-immigration');

const imgInternationale = document.getElementById('img-internationale');
const textInternationale = document.getElementById('text-internationale');

const imgJustice = document.getElementById('img-justice');
const textJustice = document.getElementById('text-justice');

const imgOutreMer = document.getElementById('img-outre_mer');
const textOutreMer = document.getElementById('text-outre_mer');

const imgLogement = document.getElementById('img-logement');
const textLogement = document.getElementById('text-logement');

const imgAgriculture = document.getElementById('img-agriculture');
const textAgriculture = document.getElementById('text-agriculture');

const imgDefense = document.getElementById('img-defense');
const textDefense = document.getElementById('text-defense');

const imgTechnologie = document.getElementById('img-technologie');
const textTechnologie = document.getElementById('text-technologie');

const imgCultureSport = document.getElementById('img-culture_sport');
const textCultureSport = document.getElementById('text-culture_sport');

const imgDemocratie = document.getElementById('img-democratie');
const textDemocratie = document.getElementById('text-democratie');

// Fonction pour faire disparaître les textes
function clear() {
    textEconomie.style.display = "none";
    textSocial.style.display = "none";
    textEcologie.style.display = "none";
    textEducation.style.display = "none";
    textImmigration.style.display = "none";
    textInternationale.style.display = "none";
    textJustice.style.display = "none";
    textOutreMer.style.display = "none";
    textLogement.style.display = "none";
    textAgriculture.style.display = "none";
    textDefense.style.display = "none";
    textTechnologie.style.display = "none";
    textCultureSport.style.display = "none";
    textDemocratie.style.display = "none";
}

clear();

// Les différentes interactions

imgEconomie.addEventListener('click', () => {
    clear();
    textEconomie.style.display = "block";
});

imgSocial.addEventListener('click', () => {
    clear();
    textSocial.style.display = "block";
});

imgEcologie.addEventListener('click', () => {
    clear();
    textEcologie.style.display = "block";
});

imgEducation.addEventListener('click', () => {
    clear();
    textEducation.style.display = "block";
});

imgImmigration.addEventListener('click', () => {
    clear();
    textImmigration.style.display = "block";
});

imgInternationale.addEventListener('click', () => {
    clear();
    textInternationale.style.display = "block";
});

imgJustice.addEventListener('click', () => {
    clear();
    textJustice.style.display = "block";
});

imgOutreMer.addEventListener('click', () => {
    clear();
    textOutreMer.style.display = "block";
});

imgLogement.addEventListener('click', () => {
    clear();
    textLogement.style.display = "block";
});

imgAgriculture.addEventListener('click', () => {
    clear();
    textAgriculture.style.display = "block";
});

imgDefense.addEventListener('click', () => {
    clear();
    textDefense.style.display = "block";
});

imgTechnologie.addEventListener('click', () => {
    clear();
    textTechnologie.style.display = "block";
});

imgCultureSport.addEventListener('click', () => {
    clear();
    textCultureSport.style.display = "block";
});

imgDemocratie.addEventListener('click', () => {
    clear();
    textDemocratie.style.display = "block";
});
