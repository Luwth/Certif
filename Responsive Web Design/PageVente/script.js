document.addEventListener('DOMContentLoaded', (event) => {
  const scrollButton = document.getElementById('scrollButton');
  window.onscroll = function() {
      if (window.scrollY > 1000) {
          scrollButton.classList.remove('hidden');
      } else {
          scrollButton.classList.add('hidden');
      }
  };
});


var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
    }

    function toggle_light_mode() {
        var app = document.getElementsByTagName("BODY")[0];
        if (localStorage.lightMode == "dark") {
            localStorage.lightMode = "light";
            app.setAttribute("light-mode", "light");
        } else {
            localStorage.lightMode = "dark";
            app.setAttribute("light-mode", "dark");
        }
    }
    
    window.addEventListener(
        "storage",
        function () {
            if (localStorage.lightMode == "dark") {
                app.setAttribute("light-mode", "dark");
            } else {
                app.setAttribute("light-mode", "light");
            }
        },
        false
    );
    