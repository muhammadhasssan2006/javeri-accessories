
// footer text start-------
var messages = [
  "Welcome to Javeri Accessories",
  "Worldwide Shipping Available",
  "We are happy to help! WhatsApp: +923268947900"
];

var index = 0;
var footerMessage = document.getElementById("footerMessage");

function showNextMessage() {
  footerMessage.style.opacity = 0;
  footerMessage.style.transform = "translateY(-20px)"; 

  setTimeout(function() {
    footerMessage.innerHTML = messages[index];
    footerMessage.style.transform = "translateY(20px)";
    footerMessage.style.opacity = 0;

    setTimeout(function() {
      footerMessage.style.transform = "translateY(0)";
      footerMessage.style.opacity = 1;
    }, 50);

    index = (index + 1) % messages.length;
  }, 800); 
}

footerMessage.innerHTML = messages[index];
footerMessage.style.textAlign = "center";
footerMessage.style.padding = "8px";
footerMessage.style.transition = "all 0.8s ease-in-out"; 
index++;

setInterval(showNextMessage, 4000);


// footer text end ---------
