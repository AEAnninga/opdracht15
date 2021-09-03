const age = 18;
const isFemale = true;
const driverStatus = 'bob';

let ageKoos = 17;
let toegang = 'Welkom ladie, je mag naar binnen.';
let geenToegang = 'Sorry vriend, ladies only.';
let tejongFemale = 'Sorry dame, je bent te jong.'
let tejongMan = 'Sorry, te jong en je bent geen dame.';

let yesBob = 'In orde, je mag rijden.';
let yesBobNoInvite = 'Je mag weer terug naar huis rijden';
let notBobNoInvite = 'Maar je kunt ook niet meer rijden, ik bel een taxi.'
let notBob = 'Jij mag helaas niet rijden.';
let noDrivingLicense = 'En je hebt geen rijbewijs, dus loop of fiets weer naar huis.'

if (age >= 18 && isFemale && driverStatus === 'bob') {  // 18+ female en bob:
    console.log(toegang, yesBob);                       // 'Welkom ladie, je mag naar binnen.' 'In orde, je mag rijden.'
} else if (age >= 18 && isFemale){                      // 18+ female geen bob:
    console.log(toegang, notBob);                       // 'Welkom ladie, je mag naar binnen.' 'Jij mag helaas niet rijden.'
} else if (age >= 18 && driverStatus === 'bob') {       // 18+ geen female wel bob:
    console.log(geenToegang, yesBobNoInvite);           // 'Sorry vriend, ladies only.' 'Je mag weer terug naar huis rijden'
} else if (age >= 18) {                                 // 18+ geen female geen bob:   
    console.log(geenToegang, notBobNoInvite);           // 'Sorry vriend, ladies only.' 'Maar je kunt ook niet meer rijden, ik bel een taxi.'
} else if (age < 18 && isFemale) {                      // wel female, nog geen 18 (dus ook geen rijbewijs of auto):
    console.log(tejongFemale, noDrivingLicense);        // 'Sorry dame, je bent te jong.' 'En je hebt geen rijbewijs, dus loop of fiets weer naar huis.'
} else {                                                // geen female en geen 18 (dus ook geen rijbewijs of auto):
    console.log(tejongMan, noDrivingLicense);           // 'Sorry, te jong en je bent geen dame.' 'En je hebt geen rijbewijs, dus loop of fiets weer naar huis.'
}

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting!');
} else {
    console.log('Helaas, geen korting voor jou!');
}

let firstName = 'Sarah';
let freeBeer = 'Gefeliciteerd, je krijgt een gratis biertje!';
let noFreeBeer = 'Mooie naam, maar helaas geen gratis biertje...';

if (firstName === 'Abraham' || firstName === 'Sarah') {
    console.log(freeBeer);
} else {
    console.log(noFreeBeer);
}

const totalAmount = 24;
let bitterBallen = 'Mooi, je krijgt van ons gratis bitterballen!';
let nachos = 'Geweldig, je krijgt van ons gratis nachos!';
let champagne = 'Fantastisch, je krijgt gratis een fles champagne!';

if (totalAmount >= 25 && totalAmount < 50) {                   
    console.log(bitterBallen);
} else if (totalAmount >= 50 && totalAmount < 100) {          
    console.log(nachos);
}else if (totalAmount >= 100) {
    console.log(champagne);
}else {
    console.log('Tip: Geef nog een rondje.')
}