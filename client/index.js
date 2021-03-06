 document.addEventListener('DOMContentLoaded', function () {
         fetch('http://tutorialnodejscrudapipipe-env.eba-ac7mk4vc.us-east-2.elasticbeanstalk.com')
         .then(response => response.json())
         .then(data => loadHTMLTable(data['data']));    
});
    
//     // document.querySelector('table tbody').addEventListener('click', function(event) {
//     //     console.log(event.target);
//     //     if (event.target.className === "delete-row-btn") {
//     //         console.log(event.target);
//     //         // send id to back-end for deletion
//     //         deleteRowById(event.target.dataset.id);        
//     //     }
//     //     if (event.target.className === "edit-row-btn") { //this matches the back-end button id
//     //         handleEditRow(event.target.dataset.id); // called editRowById in vid
//     //     }
//     // });
    
//     // const updateBtn = document.querySelector('#update-row-btn');
     
    
//     searchBtn.onclick = function() { // callback function
//         const searchValue = document.querySelector('#search-input').value;
    
//         if (searchValue != "") {
//             fetch('http://localhost:5000/search/' + searchValue)
//             .then(response => response.json())
//             .then(data => loadHTMLTable(data['data']));
//         }
//     }
    
//     // function deleteRowById(id) {
//     //     fetch('http://localhost:5000/delete/' + id, 
//     //             { method: 'DELETE' }
//     //     ).then(response => response.json()
//     //     ).then(data => {
//     //         if (data.success) { // if object state is true, reload page
//     //             location.reload();
//     //         }
//     //     });
//     // }
    
//     // function handleEditRow(id) {
//     //     const updateSection = document.querySelector('#update-row');
//     //     updateSection.hidden = false; // Clicking the 'edit' button changes the state of that div or
//     //                                   // section's state from from hidden to appear
//     //     document.querySelector('#update-name-input').dataset.id = id; // update-row-btn in video
//     // }
    
//     // updateBtn.onclick = function() {
//     //     const updateNameInput = document.querySelector('#update-name-input');
//     //     const updateName = updateNameInput.value;
//     //     //updateNameInput.value = "";
    
//     //     console.log(updateNameInput);
    
//     //     fetch('http://localhost:5000/update', {
//     //         method: 'PATCH',
//     //         headers: {
//     //             'Content-type' : 'application/json'
//     //         },
//     //         body: JSON.stringify({
//     //             id: updateNameInput.dataset.id,
//     //             name: updateNameInput.value
//     //         })
//     //     })
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         if (data.success) {
//     //             location.reload();
//     //         }
//     //     })
//     // }
    
//     const addBtn = document.querySelector('#add-name-btn');
const lrnBtn = document.querySelector('#search-btn');
lrnBtn.onclick = function () {
            //const nameInput = document.querySelector('#name-input');
            const productId = 10001;
            //nameInput.value = "";
        
            fetch('http://tutorialnodejscrudapipipe-env.eba-ac7mk4vc.us-east-2.elasticbeanstalk.com/product', {
                headers: {
                    'Content-type': 'application/json'
                },
                method: 'GET',
                body: JSON.stringify({ productId : productId})
            })
            .then(response => response.json())
            .then(data => insertRowIntoTable(data['data']));
        }
    
//     addBtn.onclick = function () {
//         const nameInput = document.querySelector('#name-input');
//         const name = nameInput.value;
//         nameInput.value = "";
    
//         fetch('http://localhost:5000/insert', {
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             method: 'POST',
//             body: JSON.stringify({ name : name})
//         })
//         .then(response => response.json())
//         .then(data => insertRowIntoTable(data['data']));
//     }
    
    function insertRowIntoTable(data) {
        console.log(data);
        const table = document.querySelector('table tbody');
        const isTableData = table.querySelector('.no-data'); // checks if table is from no-data class
    
        let tableHtml = "<tr>";
    
        for (var key in data) {  // loop through array
            if (data.hasOwnProperty(key)) {    // if key has a..
                if (key === 'dateAdded') {     // ..date added
                    data[key] = new Date(data[key]).toLocaleString(); 
                }
                tableHtml += `<td>${data[key]}</td>`; //add to table's HTML
            }
        }
    
        // tableHtml += `<td><button class="delete-row-btn" data-id=${data.id}>Delete</td>`;
        // tableHtml += `<td><button class="edit-row-btn" data-id=${data.id}>Edit</td>`;
    
        tableHtml += "</tr>";
    
        if (isTableData) { // if table is empty..set table to all new HTML
            table.innerHTML = tableHtml;
        } else {           // else, add HTML to innerHTML
            const newRow = table.insertRow();
            newRow.innerHTML = tableHtml;
        }
    }
    
    function loadHTMLTable(data) {
        const table = document.querySelector('table tbody');
    
        if (data.length === 0) {
            table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
            return;
        }
    
        let tableHtml = "";
    
        data.forEach(function ({id, color, price}) {
            tableHtml += "<tr>";
            tableHtml += `<td>${id}</td>`;
            tableHtml += `<td>${color}</td>`;
            tableHtml += `<td>${price}</td>`;            
            tableHtml += "</tr>";
        });
    
        table.innerHTML = tableHtml;
    }