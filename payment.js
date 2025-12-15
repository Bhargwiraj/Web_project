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

 function paymentDone() {
    let name = document.getElementById("payerName").value;
    let upi = document.getElementById("payerUpi").value;

    if (name === "" || upi === "") {
        alert("Please enter name and UPI ID");
        return;
    }

    document.getElementById("successName").innerText = "Paid by: " + name;
    document.getElementById("successUpi").innerText = "UPI ID: " + upi;

    document.getElementById("paymentSuccess").style.display = "block";
}
function goToSuccessPage() {
    let name = document.getElementById("payerName").value;
    let upi = document.getElementById("payerUpi").value;

    if (name === "" || upi === "") {
        alert("Please enter Name and UPI ID");
        return;
    }

    localStorage.setItem("payerName", name);
    localStorage.setItem("payerUpi", upi);

    window.location.href = "payment-success.html";
}

