function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        console.log('Text copiedto clipboard!');
    }, function (err) {
        console.error('Failed to copy text:: ', err);
    });
}
