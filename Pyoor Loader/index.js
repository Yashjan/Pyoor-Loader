window.addEventListener("load", () => {
    const loaderText = document.querySelector(".loader-text");

    // GSAP animation for the loader text
    gsap.from("h1 .a",{
      y:70,
      duration:0.8,
      delay:0.5,
      stagger:0.15,
      opacity:0,
      repeat:-1,
      repeatDelay:0.9,
      yoyo:true
    })

    gsap.from("h1 .b",{
      y:70,
      duration:0.8,
      delay:0.5,
      stagger:-0.23,
      opacity:0,
      repeat:-1,
      repeatDelay:1,
      yoyo:true
    })

    // Remove loader after some time or once the page is fully loaded
    setTimeout(() => {
      gsap.to(".loader", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          document.querySelector(".loader").style.display = "none";
        },
      });
    }, 100000000); // Adjust time as needed
  });