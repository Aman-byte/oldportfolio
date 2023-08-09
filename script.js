// JavaScript to handle the hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});
  // Function to toggle dark mode
  function toggleDarkMode() {
    const body = document.body;
    const logoLight = document.querySelector('.logo-light');
    const logoDark = document.querySelector('.logo-dark');

    if (body.classList.contains('dark-mode')) {
      logoLight.style.display = 'none'; // Hide logo for light mode
      logoDark.style.display = 'block'; // Show logo for dark mode
    } else {
      logoLight.style.display = 'block'; // Show logo for light mode
      logoDark.style.display = 'none'; // Hide logo for dark mode
    }

    body.classList.toggle('dark-mode');
  }

  // Event listener to toggle dark mode when 'Right Control' key is pressed
  document.addEventListener('keydown', function (event) {
    if (event.code === 'ControlRight') {
      toggleDarkMode();
    }
  });

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    // Show reminder message as an alert

      alert("Reminder: To view in dark mode, press the 'Right Control' key on your keyboard. Or the toggle key at the bottom.");
      
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
    document.body.appendChild(css);
};
