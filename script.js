// preloading

function preloading() {
  const tl = gsap.timeline();

  tl.to(".preloader .yellow", {
    yPercent: -100,
    delay: 0.5,
    duration: 0.8,
    ease: "power4.out",
  });
  tl.to(
    ".preloader .yellow2",
    {
      yPercent: -100,
      duration: 0.6,
      ease: "power4.out",
    },
    "anim"
  );
  tl.to(
    ".preloader .hero-preload .navbar .logo svg",
    {
      fill: "#000",
    },
    "-=0.5"
  );
  tl.to(
    ".preloader .hero-preload .navbar ul li a, .preloader .hero-preload .navbar ul i ",
    {
      color: "#000",
    },
    "-=0.5"
  );
  tl.to(
    ".preloader .hero-footer a, .preloader .hero-footer i, .preloader .hero-preload .hero-content p ",
    {
      color: "#000",
    },
    "anim"
  );

  tl.to(".preloader .yellow, .preloader video", {
    opacity: 0,
    display: "none",
  });
}
preloading();

// locomotive scrolling

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#wrapper"),
    smooth: true,
  });

  // top-button scroll

  const topButton = document.querySelector(".gallery .top-button");

  topButton.addEventListener("click", () => {
    scroll.scrollTo(1);
  });
}
loco();

// background change of option - section

function backgroundChange() {
  const elems = document.querySelectorAll(".elems");
  const elemsText = document.querySelector(".elems h1.text-xxl");
  const optionSection = document.querySelector(".option-section");

  elems.forEach((elem) => {
    elem.addEventListener("mouseover", () => {
      const image = elem.getAttribute("data-image");
      optionSection.style.backgroundImage = `url(${image})`;
      optionSection.style.backgroundRepeat = "no-repeat";
      optionSection.style.backgroundSize = "cover";
      optionSection.style.backgroundPosition = "center";
    });
  });
}
backgroundChange();