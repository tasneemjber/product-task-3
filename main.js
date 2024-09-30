var registerForm = document.querySelector("form");
var nameInput = document.querySelector("#name");
var descriptionInput = document.querySelector("#description");
var priceInput = document.querySelector("#price");

var users = [];

registerForm.onsubmit = function(e) {
    e.preventDefault();
    
    var user = {
        name: nameInput.value,
        description: descriptionInput.value,
        price: priceInput.value
    };

    users.push(user); 
    console.log(users);
    printData(); 
};

function printData() {
    var data = ``;

    for (var i = 0; i < users.length; i++) {
        data += `
        <tr>
            <td>${users[i].name}</td>
            <td>${users[i].description}</td>
            <td>${users[i].price}</td>
        </tr>
        `;
    }
    
    document.querySelector("tbody").innerHTML = data; }