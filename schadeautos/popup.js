// message object aangemaakt
let msg = 
{
  todo: "linkOpenen",
  message: "clicked"
};

// als de knop word ingedrukt stuurd hij het object naar de background script.
document.addEventListener('DOMContentLoaded', function() 
{
  var checkButton = document.getElementById('check');

  checkButton.addEventListener('click', function() 
  {
    chrome.runtime.sendMessage(msg, function(response) {
      console.log(response.farewell);
    });
  }, false);
}, false);