document.addEventListener("DOMContentLoaded", function () {
          const sidebar = document.getElementById("sidebarNav");
          const topNavbar = document.getElementById("topNavbar");
          const aboutSection = document.getElementById("about");

          function toggleNavigation() {
            const scrollY = window.scrollY;
            const aboutY = aboutSection.offsetTop;

            if (scrollY >= aboutY - 100) {
              sidebar.classList.add("d-none");
              topNavbar.classList.remove("d-none");
            } else {
              sidebar.classList.remove("d-none");
              topNavbar.classList.add("d-none");
            }
          }

          window.addEventListener("scroll", toggleNavigation);
          toggleNavigation();
        });


  