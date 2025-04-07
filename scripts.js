// Event listener for "Buy Now" buttons of all chairs
document.querySelectorAll(".buy-now-btn").forEach(function(button) {
    button.addEventListener("click", function () {
        alert("Thank you for your interest! Purchase options will be available soon.");
    });
});

// Event listener for "Learn More" button of the first chair
document.getElementById("learn-more-btn").addEventListener("click", function () {
    alert("Learn more about the ErgoLux Gaming Chair on our website.");
});
