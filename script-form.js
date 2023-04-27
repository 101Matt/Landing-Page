// Seleziona l'elemento del menu "Contacts" e l'icona X per chiudere il form
var contactsLink = document.getElementById("contact-link");
var closeButton = document.getElementById("close-button");

// Seleziona il form
var contactForm = document.getElementById("contact-form");
var menu = document.getElementById("menu");

// Aggiungi un listener per il click sull'elemento "Contacts"
contactsLink.addEventListener("click", function(event) {
  event.preventDefault(); // Previeni il comportamento di default del link

  // Nascondi il menu e mostra il contact form
  menu.style.display = "none";
  contactForm.style.display = "block";
});

// Aggiungi un listener per il click sull'icona X per chiudere il form
closeButton.addEventListener("click", function(event) {
  event.preventDefault(); // Previeni il comportamento di default del pulsante

// Nascondi il form e mostra il menu
  contactForm.style.display = "none";
  menu.style.display = "block";
});

// Seleziona l'elemento del menu "Contacts"
var contactsLink = document.getElementById("contact-link");

// Aggiungi un listener per il click sull'elemento "Contacts"
contactsLink.addEventListener("click", function(event) {
  event.preventDefault(); // Previeni il comportamento di default del link
  var contactForm = document.getElementById("contact-form");
  var menu = document.getElementById("menu");

  // mostra il contact form
  contactForm.style.display = "block";
});