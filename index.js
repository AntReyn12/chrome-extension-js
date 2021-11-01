const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#list-el");
let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (i = 0; i < myLeads.length; i++) {
    listItems += `<li> 
                    <a 
                      href= "${myLeads[i]}" target="_blank"> ${myLeads[i]} 
                    </a>
                  </li>`;
    //*Another way to create elements*//
    //const li = document.createElement("li");
    //li.textContent += myLeads[i];
    //ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}
