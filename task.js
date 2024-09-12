let dropdown = document.querySelector(".dropdown__value");

let dropdownList = document.querySelector(".dropdown__list");

dropdown.addEventListener("click", () => {
  
  if (dropdownList.classList == "dropdown__list") {
    dropdownList.classList.add("dropdown__list_active");
  } else (
    dropdownList.classList = "dropdown__list"
  );
});

let allItems = document.querySelectorAll(".dropdown__item");

allItems.forEach((item) => {
  
  item.addEventListener("click", (event) => {
    
    event.preventDefault();
    
    dropdownList.classList = "dropdown__list";
    dropdown.textContent = item.textContent;
  });
});