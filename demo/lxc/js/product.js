//#region product
document.querySelectorAll('.btn-toggle').forEach(button => {
    let targetID = button.getAttribute('data-bs-target');
    let target = document.querySelector(targetID);
    let icon = button.querySelector('.toggle-icon');

    // Khi danh mục mở ra -> đổi icon thành "-"
    target.addEventListener('shown.bs.collapse', function () {
        icon.classList.remove('fi-rr-plus');
        icon.classList.add('fi-rr-minus');
    });

    // Khi danh mục đóng lại -> đổi icon thành "+"
    target.addEventListener('hidden.bs.collapse', function () {
        icon.classList.remove('fi-rr-minus');
        icon.classList.add('fi-rr-plus');
    });
});
function decreaseQuantity(idCounter) {
    let quantityInput = document.getElementById(`${idCounter}`);
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
    }
}
function increaseQuantity(idCounter) {
    let quantityInput = document.getElementById(`${idCounter}`);
    let quantity = parseInt(quantityInput.value);
    quantityInput.value = quantity + 1;
}

const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function updatePrice() {
    let price = parseInt(priceRange.value);
    priceValue.textContent = '0 VND - ' + new Intl.NumberFormat("vi-VN").format(price) + " VND";
}
if(priceRange)
{
    priceRange.addEventListener("input", updatePrice);
    updatePrice();
}
//#endregion