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

  // Show reminder message as an alert
  window.onload = function () {
    alert("Reminder: To view in dark mode, press the 'Right Control' key on your keyboard.");
  };
