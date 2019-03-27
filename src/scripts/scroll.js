
var linkNav = document.querySelectorAll('[href^="#"]'),
  TimeScroll = 0.4;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener("click", function(e) {
      e.preventDefault();
      var winPageOfset = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, "$1");
      (topWin = document.querySelector(hash).getBoundingClientRect().top),
        (start = null);
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            topWin < 0
              ? Math.max(winPageOfset - progress / TimeScroll, winPageOfset + topWin)
              : Math.min(winPageOfset + progress / TimeScroll, winPageOfset + topWin);
        window.scrollTo(0, r);
        if (r != winPageOfset + topWin) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    },
    false
  );
}
