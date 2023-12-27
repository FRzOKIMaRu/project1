const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-Btn");
const noBtn = document.querySelector(".no-Btn");

yesBtn.addEventListener("click",() =>{
    question.innerHTML = "Aaaaa, I like you too" ;
    gif.src="https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp"
});

noBtn.addEventListener("mouseover", () => {
    const noBtn = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = maxY.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})