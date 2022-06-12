function dropDown(){

    let visibility = document.getElementById("dropdown-menu");
    if (visibility.style.display == "none") {
        visibility.style.display = "initial";
    } else {
        visibility.style.display = "none";
    }

    let allMsButtonActive = document.getElementById("all-ms-active-background-color");
    if( allMsButtonActive.style.backgroundColor == "rgb(255, 255, 255)"){
        allMsButtonActive.style.backgroundColor = "rgb(240, 240, 240)";
    } else {
        allMsButtonActive.style.backgroundColor = "rgb(255, 255, 255)";
    }

    allMsButtonActive.classList.toggle("all-ms-active");

    let hoverAllMs = document.getElementsByClassName("all-ms-active");

}

dropDown();


function searchBar(){
let searchBox = document.getElementById("search-box");
let menu = document.getElementById("menu");
let cancelButton = document.getElementById("search-cancel");
    searchBox.style.display = "initial";
    menu.style.display = "none";
    cancelButton.style.display = "initial";
}

searchBar();

function cancelSearch(){
        let cancelButton = document.getElementById("search-cancel");
        menu.style.display = "flex";
        document.getElementById("search-box").style.display = "none";
        cancelButton.style.display = "none";
}

cancelSearch();