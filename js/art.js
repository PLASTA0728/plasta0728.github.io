// Function to create a popup
function createPopup(popupId) {
    let popupNode = document.querySelector(`#${popupId}`);
    let overlay = popupNode.querySelector(".overlay");

    function openPopup() {
        popupNode.classList.add("active");
    }

    overlay.addEventListener("click", () => popupNode.classList.remove("active")); // Close the popup when overlay is clicked

    return openPopup; // Return function to open the popup
}

// Loop through all images with the class "open-popup"
document.querySelectorAll(".open-popup").forEach(image => {
    let popupId = image.getAttribute("data-popup-id"); // Get the ID of the popup
    let openPopup = createPopup(popupId); // Create the popup function for this ID

    image.addEventListener("click", openPopup); // Trigger the popup when image is clicked
});
