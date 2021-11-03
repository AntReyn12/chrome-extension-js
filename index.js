const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
const ulEl = document.querySelector("#list-el");
let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    console.log(tabs);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (i = 0; i < leads.length; i++) {
    listItems += `<li> 
                    <a 
                      href= "${leads[i]}" target="_blank"> ${leads[i]} 
                    </a>
                  </li>`;
    //*Another way to create elements*//
    //const li = document.createElement("li");
    //li.textContent += leads[i];
    //ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
});
