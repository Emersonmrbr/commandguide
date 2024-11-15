// var code = document.getElementsByTagName("code");

// for (let index = 0; index < code.length; index++) {
//     let element = code[index].innerHTML;
//     document.body.focus();
//     let element2 = code[index]
//     element2.addEventListener("click", function (e) {
//         let copy = e.srcElement.childNodes[0].data;
//         document.body.focus();
//         navigator.clipboard.writeText(copy);
//     })
// }


// Select all <code> elements in the document
document.querySelectorAll("pre").forEach(element => {
    // Add a click event listener to each <code> element
    element.addEventListener("click", () => {
        // Ensure the document is focused
        document.body.focus();

        // Copy the text content of the clicked <code> element to the clipboard
        navigator.clipboard.writeText(element.textContent)
            .then(() => {
                // Log success message to the console
                console.log("Text copied to clipboard.");
                alert("Text copied to clipboard.");
            })
            .catch(err => {
                // Log any errors to the console
                console.error("Failed to copy text: ", err);
            });
    });
});

