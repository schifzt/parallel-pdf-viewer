window.addEventListener('load', evt => {
    var openFile = document.getElementById("openFile");
    var parent = openFile.parentElement;
    openFile.addEventListener('blur', evt => {
        parent.removeChild(openFile);
    });
});