function testFunc() {
    alert("testtting");        
}


const searchButton = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');  
 
//searchInput.value = "";
searchButton.onclick = function (searchInput) {
    alert("testtting "+searchInput);           
}
