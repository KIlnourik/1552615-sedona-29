const formButton = document.querySelector(".form-opening-button");
const searchForm = document.querySelector(".hotel-search-form");
let displayFormClass = document.querySelector(".display-default")





let classChanger = function () {
    if (displayFormClass !== "search-form-hide" || displayFormClass !== "search-form-open") {
        displayFormClass = "search-form-hide";  
    }
    if (displayFormClass === "search-form-hide" || displayFormClass !== "search-form-open" || displayFormClass !== "display-default") {
        displayFormClass = "display-form-open";
    }
    if (displayFormClass === "search-form-open" || displayFormClass !== "search-form-hide" || displayFormClass !== "display-default") {
        displayFormClass = "display-form-hide";
    }
};

formButton.addEventListener('click', function () {
    classChanger();
});


