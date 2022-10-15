import { animate, stagger, scroll } from "https://cdn.skypack.dev/motion";

("use strict");

window.addEventListener("DOMContentLoaded", start);

function start() {
  const modalWrap = document.querySelector(".modal-wrapper");
  const modal = document.querySelector(".modal");

  modalWrap.style.display = "none";

  const uiBtn = document.querySelector("#ui-btn");
  const animBtn = document.querySelector("#anim-btn");
  const resBtn = document.querySelector("#res-btn");
  const frameBtn = document.querySelector("#frame-btn");

  //   each button updates modal info

  uiBtn.addEventListener("click", openModal);
  animBtn.addEventListener("click", openModal);
  resBtn.addEventListener("click", openModal);
  frameBtn.addEventListener("click", openModal);

  function openModal() {
    const projectName = this.value;

    modalWrap.style.display = "flex";
    modal.style.display = "grid";

    const h2 = document.querySelector(".modal-h2");
    const p1 = document.querySelector(".modal-p1");
    const p2 = document.querySelector(".modal-p2");
    const img1 = document.querySelector(".image1");
    const img2 = document.querySelector(".image2");
    const img3 = document.querySelector(".image3");
    const link = document.querySelector(".modal-link");

    // reset everything
    h2.textContent = "";
    p1.innerHTML = "";
    p2.innerHTML = "";
    link.href = "#";
    img1.style.backgroundImage = "";
    img1.style.aspectRatio = "";
    img2.style.backgroundImage = "";
    img2.style.aspectRatio = "";
    img3.style.backgroundImage = "";
    img3.style.aspectRatio = "";

    // console.log(projectName);
    if (projectName === "ui") {
      h2.textContent = "Fonts and UI components";
      p1.innerHTML = "A digital concept on balancing fonts and ui components.";
      p2.innerHTML =
        "I styled the call to action buttons to have the opposite colors when hovered and used the accent color on them. <br/> The display font is in a more `fun` genre so to balance it out, I chose a mild sans-serif font for all other text types.";
      link.href = "https://emma673r.github.io/13c_01_01_fonts_and_ui_components/";
      img1.style.backgroundImage = "url(./img/ui_1.png)";
      img2.style.backgroundImage = "url(./img/ui_2.png)";
      img2.style.aspectRatio = "73/25";
      img3.style.backgroundImage = "url(./img/ui_3.png)";
      img3.style.aspectRatio = "68/33";
    } else if (projectName === "anim") {
      h2.textContent = "Colors and animations";
      p1.innerHTML = "A digital concept on having a nice color palette and animate call to action elements.";
      p2.innerHTML =
        "I chose a really monochromatic color palette with a very saturated accent color. I feel they work nicely together. <br/> I then chose to animate nearly everything that could be animated and added a random timing animation to the demo buttons. <br/> The 3 svgs are animated when the buttons they answer to are clicked. <br/> Obviously there are way too many animations for the page to be a real page, but I really wanted to work on how to animate different things.";
      link.href = "https://emma673r.github.io/13c_01_02_colors_and_animations/";
      img1.style.backgroundImage = "url(./img/anim_1.png)";
      img2.style.backgroundImage = "url(./img/anim_2.png)";
      img2.style.aspectRatio = "29/28";
      img3.style.backgroundImage = "url(./img/anim_3.png)";
      img3.style.aspectRatio = "29/17";
    } else if (projectName === "res") {
      h2.textContent = "Responsive design";
      p1.innerHTML = "A digital solution for a simple responsive one-pager (that also uses knowledge of colors and fonts from earlier assignments). <br/> I created a dark theme with prefered color scheme on the portfolio site instead of this project.";
      p2.innerHTML =
        "I used grid and flex to get the different elements to be where i wanted them to, that way it made the whole website responsive aswell.";
      link.href = "https://emma673r.github.io/13c_02_01_responsive_design/";
      img1.style.backgroundImage = "url(./img/responsive_1.png)";
      img2.style.backgroundImage = "url(./img/responsive_2.png)";
      img2.style.aspectRatio = "74/82";
      img3.style.backgroundImage = "url(./img/responsive_3.png)";
      img3.style.aspectRatio = "68/47";
    } else if (projectName === "frame") {
      h2.textContent = "Designing with frameworks";
      p1.innerHTML = "A simple one-pager styled only with frameworks.";
      p2.innerHTML = `I used Pico to make the website. I tried bootstrap and don't agree with it (design and practicality wise) <br/> and as for tailwind, I'd need help to get it started as i had troubles fetching it to begin with.`;
      link.href = "https://emma673r.github.io/13c_02_02_designing_with_frameworks/";
      img1.style.backgroundImage = "url(./img/framework_1.png)";
      img2.style.backgroundImage = "url(./img/framework_2.png)";
      img2.style.aspectRatio = "74/44";
      img3.style.backgroundImage = "url(./img/framework_3.png)";
      img3.style.aspectRatio = "68/37";
    }
  }

  // close button modals

  document.querySelector(".close").addEventListener("click", closeModal);

  function closeModal() {
    modal.style.display = "none";
    modalWrap.style.display = "none";
  }

  //   const items = document.querySelectorAll(".card");
  //   scroll(
  //     animate(".scroll_section", {
  //       transform: `translateX(calc(-${items.length - 1}*(100vw - 20rem) ))`,
  //     }),
  //     { target: document.querySelector(".scroll_section") }
  //   );

  scroll(
    animate(
      ".card",
      { transform: `translateX(90vw)rotate(45deg) scale(0.5)  ` },
      //   { transform: `rotate(90deg) ` },
      {
        delay: stagger(0.2),
        duration: 0.9,
        easing: [0.22, 0.03, 0.26, 1],
      }
    ),
    { target: document.querySelector(".card") }
  );

  scroll(
    animate(
      "#headline",
      {
        transform: "scale(0)",
      },
      {
        delay: stagger(0),
        duration: 0.3,
        // easing: [0.22, 0.03, 0.26, 1],
      }
    ),
    { target: document.querySelector("#headline h2") }
  );

  scroll(
    animate(
      "#conclusion p",
      {
        transform: "translateX(-90vw)",
      },
      {
        delay: stagger(0.1),
        duration: 0.3,
        easing: [0.22, 0.03, 0.26, 1],
      }
    ),
    { target: document.querySelector("#conclusion div") }
  );
}
