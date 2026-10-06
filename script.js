function searchCrop() {

    let search = document
        .getElementById("search")
        .value
        .toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let name = product
            .getAttribute("data-name")
            .toLowerCase();

        if (name.includes(search)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


function contactFarmer(name) {

    alert(
        "Thank you for your interest! 🌾\n\n" +
        "Farmer: " + name +
        "\nPlease contact the local market office."
    );

}
