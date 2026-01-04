 let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv = document.getElementById("cartItems");
let total = 0;

cart.forEach(item => {
    cartDiv.innerHTML += `
        <p>${item.name} × ${item.quantity} = Rs.${item.price * item.quantity}</p>
    `;
    total += item.price * item.quantity;
});

document.getElementById("totalAmount").innerText = "Rs." + total;
document.getElementById("totalAmountInput").value = total;

function goToSuccessPage() {
    let name = document.getElementById("payerName").value;
    let upi = document.getElementById("payerUpi").value;

    if (name === "" || upi === "") {
        alert("Please enter Name and UPI ID");
        return;
    }

    localStorage.setItem("payerName", name);
    localStorage.setItem("payerUpi", upi);
    localStorage.setItem("paidAmount", total);

    window.location.href = "payment-success.html";
}
