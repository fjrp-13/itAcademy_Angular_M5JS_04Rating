const removeClass = function (elements, className) {
    while (elements.length > 0) {
        elements[0].classList.remove(className);
    }
}; // removeClass

const selectStar = function (star, event) {
    const SELECTED_CLASS = 'selected';
    var starWraper = (star ? star.parentElement : document);
    var oldSelectedStar = starWraper.getElementsByClassName("star " + SELECTED_CLASS);
    removeClass(oldSelectedStar, SELECTED_CLASS);
    if (star) {
        star.classList.add(SELECTED_CLASS);
    }
    event.stopPropagation();
};