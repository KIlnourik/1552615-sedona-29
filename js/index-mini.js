const formButton = document.querySelector(".form-opening-button"), searchForm = document.querySelector(".hotel-search-form"), arrivalDateInput = document.querySelector(".arrival-date-input"), departureDateInput = document.querySelector(".departure-date-input"), adultInput = document.querySelector(".adults-input"), childrenInput = document.querySelector(".children-input"); let isStorageSupport = !0, storage = ""; try { storage = localStorage.getItem("adults"), storage = localStorage.getItem("chidren") } catch (e) { isStorageSupport = !1 } formButton.addEventListener("click", function () { searchForm.classList.toggle("search-form-hide"), searchForm.classList.toggle("search-form-open") }), searchForm.addEventListener("submit", function (e) { arrivalDateInput.value && departureDateInput.value && adultInput.value && childrenInput.value ? isStorageSupport && (localStorage.setItem("adults", adultInput.value), localStorage.setItem("chidren", childrenInput.value)) : (e.preventDefault(), searchForm.classList.toggle("search-form-error")) });