console.log("hello world");

// cible bouton
const button=document.querySelector("button")
// click bouton
button.addEventListener('click', () => {
    const text = document.querySelector(".hidden");
    text.style.display="block";
})
