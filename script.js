window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const scrollBtn = document.getElementById("scrollBtn");
  const section1 = document.getElementById("section1");
  const content = document.getElementById('content');
  const section2 = document.getElementById("section2");

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > 0) {
      navbar.classList.add("scrolling-down");
    } else {
      navbar.classList.remove("scrolling-down");
    }

    // calculate opacity
    const contentHeight = section1.offsetHeight;
    const fadePoint = 200; // start fade at this scroll position
    let opacity = 1 - currentScrollTop / (contentHeight - fadePoint);
    if (opacity >= 0) {
      content.style.opacity = opacity;
    }
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToElement = (element, duration, offsetSubtraction = 0) => {
    const startPosition = window.pageYOffset;
    const targetPosition = element.offsetTop - offsetSubtraction;
    const distanceToScroll = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = easeInOutQuad(timeElapsed, startPosition, distanceToScroll, duration);
      window.scrollTo(0, progress);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(animation);
      }
    };

    window.requestAnimationFrame(animation);
  };

  scrollBtn.addEventListener("click", () => {
    scrollToElement(section2, 1200, 50); // Scrolls to 50 pixels above the top of secondaryPage
  });
});

/*
function moveFolders(index) {
  const folders = document.querySelectorAll('.folder');
  folders.forEach((folder, i) => {
    if (i !== index) {
      folder.style.top = `${50 * (i - index)}vh`;
    } else {
      folder.style.top = '0';
      folder.style.zIndex = '5';
    }
  });
}

*/



trigger = function () {
      Slider.classList.toggle("slide-down")
      //Slider.classList.toggle("slideup")
    };

trigger1 = function () {
      Slider1.classList.toggle("slide-down")
      //Slider1.classList.toggle("slideup")
    };

trigger2 = function () {
      Slider2.classList.toggle("slide-down")
      //Slider2.classList.toggle("slideup")
    };

trigger3 = function () {
      Slider3.classList.toggle("slide-down")
      //Slider3.classList.toggle("slideup")
    };









window.onload = function () {
  // Make the DIV element draggable
  dragElement(document.getElementById("mydiv"));
  dragElement(document.getElementById("mydiv2"));
  dragElement(document.getElementById("mydiv3"));
  dragElement(document.getElementById("mydiv4"));
  dragElement(document.getElementById("mydiv5"));



  function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
          // If present, the header is where you move the DIV from:
          document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
          // Otherwise, move the DIV from anywhere inside the DIV:
          elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // Get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // Call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // Calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // Set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
          // Stop moving when the mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
      }
  }
};















    