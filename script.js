function searchCrop() {
    var input = document.getElementById("search");
    var filter = input.value.toLowerCase();

    var products = document.getElementsByClassName("product");

    for (var i = 0; i < products.length; i++) {

        var text = products[i].innerText.toLowerCase();

        if (text.includes(filter)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}

function contactFarmer(name) {
    alert("Farmer Name: " + name);
}
