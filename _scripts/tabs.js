var tabLinks;
   var tabPanels;
   //tabbed panels
   window.onload = function() {
     tabLinks = document.getElementById("tabs").getElementsByTagName("li");
     tabPanels = document.getElementById("containers").getElementsByTagName("div");

     displayPanel(tabLinks[0]);

     for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function () {
          displayPanel(this);
          return false;
        }
        tabLinks[i].onfocus = function () {
          displayPanel(this);
          return false;
        }
     }

   }
   function displayPanel(tabToActivate) {
     for (var i = 0; i < tabLinks.length; i++) {
      if (tabLinks[i] == tabToActivate) {
          tabLinks[i].classList.add("active");
          tabPanels[i].style.display = "block";
      } else {
          tabLinks[i].classList.remove("active");
          tabPanels[i].style.display = "none";
      } 
     }
   }