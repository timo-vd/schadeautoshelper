let bgCarData;
var bgAutoscoutUrl;

// message ontvang functie en wat hij met de message moet doen
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) 
  {

    // als de message saveBgCarData is dan slaat hij de cardata op op het achtergrond script
    if (request.todo === "saveBgCarData")
    {
      sendResponse({farewell: "carData message ontvangen."});
      bgCarData = request;
      console.log("database opgeslagen auto data = " + bgCarData.merk + " " + bgCarData.model + "" + bgCarData.jaartal);
    }

    // als d message linkopenen is format hij de goede autoscout url en opened hij hem in een nieuwe tab
    if (request.todo === "linkOpenen")
    {
      sendResponse({farewell: "popup geklikt en link geopend."})
      bgAutoscoutUrl = "https://www.autoscout24.nl/lst/" + bgCarData.merk + "/" + bgCarData.model + "/ft_" + bgCarData.brandstof + "?fregfrom=" + (parseInt(bgCarData.jaartal-2)) + "&fregto=" + (parseInt(bgCarData.jaartal)+2) + "&kmfrom="+ (((Math.round(parseInt(bgCarData.tellerstand)/25)*25)-25)*1000) + "&kmto=" + (((Math.round(parseInt(bgCarData.tellerstand)/25)*25)+25)*1000);
      chrome.tabs.create({ url: bgAutoscoutUrl});
      console.log("autoscout geopend: " + bgAutoscoutUrl);
    }
  }
);
