const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#list-el");
let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
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
    console.log(listItems);
    //*Another way to create elements*//
    //const li = document.createElement("li");
    //li.textContent += myLeads[i];
    //ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}
