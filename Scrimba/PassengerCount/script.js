let count = 0;
let totalCount = 0;
let showCount = document.getElementById("show-count");
let updateCount = document.getElementById("total-count");

//Increase Count
incCount = () => {
    showCount.innerText = ++count;
}

//Decrease Count
decCount = () => {
    showCount.innerText = --count;
}

//Update Count
addCount = () => {
    totalCount += count;
    updateCount.innerText = totalCount;
}

//Clear Count
clearCount = () => {
    totalCount = 0;
    updateCount.innerText = totalCount;
}
