// functie om de goede data uit de table te halen.
function selectData(temp){
  let rows = document.querySelectorAll('div.col12.m-b-lg.specifications > table > tbody > tr');
  let temp2;
  const filter = ["Mercedes"];

  rows.forEach(row => {
    if(row.firstChild.innerHTML == temp && row.children[1].textContent != filter)
    {
      temp2 = row.children[1].textContent;
    }
    else
    {
      if(row.children[1].textContent == "Mercedes")
      {
        console.log("Mercedes gevonden dus gefilterd naar Mercedes-Benz");
        temp2 = "Mercedes-benz";
      }
    }
  });
  console.log(temp2);
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

console.log(carData);
// message naar background script
chrome.runtime.sendMessage(carData, function(response) {
  console.log(response.farewell);
});