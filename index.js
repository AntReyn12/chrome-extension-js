const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#list-el");
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

let listItems = "";

for (i = 0; i < myLeads.length; i++) {
  listItems += "<li>" + myLeads[i] + "</li>";
  ulEl.innerHTML = listItems;
  //*Another way to create elements*//
  //const li = document.createElement("li");
  //li.textContent += myLeads[i];
  //ulEl.append(li);
}
