"use strict";

const nom = document.getElementById("nom");
const nomErreur = document.getElementById("erreur_nom");

const prenom = document.getElementById("prenom");
const prenomErreur = document.getElementById("erreur_prenom");

const email = document.getElementById("email");
const emailErreur = document.getElementById("erreur_email");

const date = document.getElementById("date");
const dateErreur = document.getElementById("erreur_date");

const adresse = document.getElementById("adresse");
const adresseErreur = document.getElementById("erreur_adresse");

const password = document.getElementById("password");
const passwordErreur = document.getElementById("erreur_password");

const confirmPassword = document.getElementById("confirm_password");
const confirm_passwordErreur = document.getElementById("erreur_confirm_password");

const button = document.getElementById("valider");

button.addEventListener("click", (event) => {
    event.preventDefault();

    // Réinitialiser les messages d'erreur
    const existingErrors = document.querySelectorAll(".erreur_message");
    existingErrors.forEach((error) => (error.innerHTML = ""));

    let isValid = true;

    // Vérification des champs
    if (nom.value.trim() === "") {
        nomErreur.innerHTML = '<p>Veuillez saisir un nom.</p>';
        isValid = false;
    } else if (nom.value.trim().length < 5 || nom.value.trim().length > 15) {
        nomErreur.innerHTML = '<p>Le nom doit contenir entre 5 et 15 caractères maximum.</p>';
        isValid = false;
    }

    if (prenom.value.trim() === "") {
        prenomErreur.innerHTML = '<p>Veuillez saisir un prénom.</p>';
        isValid = false;
    } else if (prenom.value.trim().length < 5 || prenom.value.trim().length > 15) {
        prenomErreur.innerHTML = '<p>Le prénom doit contenir entre 5 et 15 caractères maximum.</p>';
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailErreur.innerHTML = '<p>Veuillez saisir une adresse email.</p>';
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())) {
        emailErreur.innerHTML = '<p>Veuillez saisir une adresse email valide.</p>';
        isValid = false;
    }
    
    const dateMaintenant = new Date();
    const dateNaissance = new Date(date.value);
    if (date.value.trim() === "") {
        dateErreur.innerHTML = '<p>Veuillez saisir une date de naissance.</p>';
        isValid = false;
    } else if(dateNaissance > dateMaintenant){
        dateErreur.innerHTML = "<p>La date de naissance ne peut pas être ultérieure à la date d'aujourd'hui.</p>";
        isValid = false;
    }

    if (adresse.value.trim() === "") {
        adresseErreur.innerHTML = '<p>Veuillez saisir une adresse.</p>';
        isValid = false;
    }

    if (password.value.trim() === "") {
        passwordErreur.innerHTML = '<p>Veuillez saisir un mot de passe.</p>';
        isValid = false;
    } else if (password.value.trim().length < 8) {
        passwordErreur.innerHTML = '<p>Le mot de passe doit contenir au moins 8 caractères.</p>';
        isValid = false;
    }

    if (confirmPassword.value.trim() === "") {
        confirm_passwordErreur.innerHTML = '<p>Veuillez confirmer votre mot de passe.</p>';
        isValid = false;
    } else if (confirmPassword.value.trim() !== password.value.trim()) {
        confirm_passwordErreur.innerHTML = '<p>Les mots de passe ne sont pas les mêmes.</p>';
        isValid = false;
    }

    // Si tout est valide, soumettre le formulaire
    if (isValid) {
        alert("Formulaire valide !");
        document.querySelector("form").reset();
    }
});