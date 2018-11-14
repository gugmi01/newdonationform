document.addEventListener('DOMContentLoaded', function() {
  var occurInput = document.getElementById("pc_donation_occurrences");
  var donbuttons = document.querySelectorAll('input[type="radio"]');
  var otherButton = donbuttons[donbuttons.length-1];
  var Button5 = document.querySelector("td:nth-child(5) > label");
  var Button4 = document.querySelector("td:nth-child(4) > label");
  var Button3 = document.querySelector("td:nth-child(3) > label");
  var Button2 = document.querySelector("td:nth-child(2) > label");
  var Button1 = document.querySelector("td:nth-child(1) > label");
  var otherInput = document.getElementById("siteDonationPage:SiteTemplate:mainForm:donationInputFieldHoriz");
  var occurInput = document.getElementById("pc_donation_occurrences");
  var mobNav = document.getElementById("toggle-main-navigation");
  var top = document.getElementById("top");
  var textarea = document.getElementById('siteDonationPage:SiteTemplate:donationPageHtmlContent');
  var otherplaceholder = document.getElementById('siteDonationPage:SiteTemplate:mainForm:donationInputFieldHoriz');


  function create(htmlStr) {
      var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
      }
      return frag;
  }

  //Replace header and policy ae
  var fragment = create('<div class="bbutton"><a href="http://www.breakthrough.org">Back to Breakthrough.org</a></div>');
  var policyfrag = create('<p><span style="font-size: small;"><em>View our </em></span><em><a href="http://www.breakthrough.org/privacy-policy"><span style="font-size: small;">Donor Privacy Policy</span></a></em><span style="font-size: small;"><em>.</em></span></p>');

  top.appendChild(fragment);
  textarea.appendChild(policyfrag);
  mobNav.className += " hideNow";
  // credits.className += " hideNow";
  otherInput.className += " hideNow";
  otherplaceholder.setAttribute("placeholder", "Other amount");


  otherButton.addEventListener("click", function() {
    if (otherInput.classList.contains("hideNow")) {
      otherInput.classList.remove("hideNow");
    } else if (otherInput.checked = false) {
      otherInput.className += " hideNow";
    } else {

    }
  });

  Button1.addEventListener("click", function() {
    if (otherInput.classList.contains("hideNow")) {
    } else {
      otherInput.className += " hideNow";
    }
  });
  Button2.addEventListener("click", function() {
    if (otherInput.classList.contains("hideNow")) {
    } else {
      otherInput.className += " hideNow";
    }
  });
  Button3.addEventListener("click", function() {
    if (otherInput.classList.contains("hideNow")) {
    } else {
      otherInput.className += " hideNow";
    }
  });
  Button4.addEventListener("click", function() {
    if (otherInput.classList.contains("hideNow")) {
    } else {
      otherInput.className += " hideNow";
    }
  });
  Button5.addEventListener("click", function() {
    if (otherInput.classList.contains("hideNow")) {
    } else {
      otherInput.className += " hideNow";
    }
  });


  var checkbox = document.querySelector("#pc_recurring_donation_options > input");

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      occurInput.classList.remove("hideNow");
    } else {
      occurInput.className += " hideNow";
    }
  });
}, false);
