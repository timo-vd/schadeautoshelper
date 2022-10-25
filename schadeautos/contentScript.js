// functie om de goede data uit de table te halen.
function selectData(temp){
  const rows = document.querySelectorAll('body > section:nth-child(5) > div > div > div.col9.col12-sm.content > div.col12.m-b-lg.specifications > table > tbody > tr');
  let temp2;

  rows.forEach(row => {
    if(row.firstChild.innerHTML == temp)
    {
      console.log(row.children[1].textContent);
      temp2 = row.children[1].textContent;
      return;
    }
  });
  return temp2;
}

// object aangemaakt om mee te sturen met de message naar de background script.
let carData = 
{
  todo: "saveBgCarData",
  merk: selectData("merk:"), 
  model: selectData("model:").split(" ")[0], 
  brandstof: selectData("brandstof:"),
  jaartal: selectData("1ste toelating:").split(" ")[0],
  tellerstand:  selectData("tellerstand:").split(" ")[0]
};

// message naar background script
chrome.runtime.sendMessage(carData, function(response) {
  console.log(response.farewell);
});