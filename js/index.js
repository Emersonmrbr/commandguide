/**
 * Attaches a click event to all <code> elements to enable copying their content to the clipboard.
 * Displays a temporary tooltip with feedback after copying.
 */
function attachCodeCopyListeners() {
    // Select all <code> elements in the document
    document.querySelectorAll("code").forEach(element => {
        // Add a click event listener to each <code> element
        element.addEventListener("click", async () => {
            document.body.focus(); // Ensure the document has focus to avoid clipboard issues

            try {
                // Copy the text content of the clicked <code> element to the clipboard
                await navigator.clipboard.writeText(element.textContent);

                // Provide visual feedback by adding a tooltip
                element.setAttribute("data-tooltip", "Copied!");

                // Remove the tooltip after 2 seconds
                setTimeout(() => element.removeAttribute("data-tooltip"), 2000);

                console.log("Text copied to clipboard."); // Log success
            } catch (err) {
                // Handle any errors that occur during the copying process
                console.error("Failed to copy text:", err);
            }
        });
    });
}

/**
 * Initializes the script by attaching event listeners to <code> elements.
 */
function initializeCodeCopyFeature() {
    attachCodeCopyListeners();
}

// Call the initialization function when the script loads
initializeCodeCopyFeature();
