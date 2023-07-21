var textWrapper = document.querySelector('.home.header');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline()
  .add({
    targets: '.header .letter',
    opacity: [0,1],
    scale: [0.85, 1],
    skewX: [5, 0],
    filter: blur[13, 0],
    easing: "cubicBezier(0.65,0.06,0.37,0.93)",
    duration: 800,
    delay: anime.stagger(100, {start: 500})
  });