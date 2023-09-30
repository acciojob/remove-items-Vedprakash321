//your JS code here. If required.
// script.js
function removeColor() {
    const selectElement = document.getElementById("colorSelect");
    const selectedColor = selectElement.value;

    // Check if a color is selected
    if (selectedColor) {
        // Find the index of the selected color in the dropdown list
        const index = Array.from(selectElement.options).findIndex(option => option.value === selectedColor);
        
        // Remove the selected color from the dropdown list
        if (index !== -1) {
            selectElement.remove(index);
        }
    }
}
