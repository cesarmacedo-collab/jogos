```javascript
/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("open");

    const menuAberto = mainNav.classList.contains("open");

    menuToggle.textContent = menuAberto ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});


/* =========================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    });

});
```
