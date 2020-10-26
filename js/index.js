const formButton = document.querySelector(".form-opening-button");
const searchForm = document.querySelector(".hotel-search-form");
const arrivalDateInput = document.querySelector(".arrival-date-input");
const departureDateInput = document.querySelector(".departure-date-input");
const adultInput = document.querySelector(".adults-input");
const childrenInput = document.querySelector(".children-input");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("adults");
    storage = localStorage.getItem("chidren");
} catch (err) {
    isStorageSupport = false;
}

formButton.addEventListener("click", function () {
    searchForm.classList.toggle("search-form-hide");
    searchForm.classList.toggle("search-form-open");
});

searchForm.addEventListener("submit", function (evt) {
    if (!arrivalDateInput.value || !departureDateInput.value || !adultInput.value || !childrenInput.value) {
        evt.preventDefault();
        searchForm.classList.toggle("search-form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adultInput.value);
            localStorage.setItem("chidren", childrenInput.value);
        }

    }
})

