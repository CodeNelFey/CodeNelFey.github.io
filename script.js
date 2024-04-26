function changeLanguage(lang) {
    if (lang === 'fr') {
        window.location.href = 'index.html';
    } else if (lang === 'en') {
        window.location.href = 'index-en.html';
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.querySelector(".navbar");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 300 && scrollTop < 400) {
        navbar.classList.add("scrolled");
        navbar.style.marginTop = "-200px"; // Changer la marge à -100px
    } else if (scrollTop >= 400) {
        navbar.style.marginTop = "0px";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.marginTop = "0"; // Retour à la marge d'origine
    }
}

// Sélection du bouton
var btnmail = document.getElementById("copyMail");
var btntel = document.getElementById("copyTel");
var btndiscord = document.getElementById("copyDiscord");


// Ajout d'un écouteur d'événement au bouton
btnmail.addEventListener("click", function() {
  var texteACopier = document.getElementById("mail");

  texteACopier.select();
  texteACopier.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texte copié : " + texteACopier.value);
});

btntel.addEventListener("click", function() {
    var texteACopier = document.getElementById("tel");
  
    texteACopier.select();
    texteACopier.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texte copié : " + texteACopier.value);
});

btndiscord.addEventListener("click", function() {
  var texteACopier = document.getElementById("discord");

  texteACopier.select();
  texteACopier.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texte copié : " + texteACopier.value);
});
