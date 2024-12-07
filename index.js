const apiUrl = '.'

function clearEverything() {
    fetch(`${apiUrl}/person`, {
        method: 'DELETE',
    })
    .then(() => {
        console.log("Cleared person table");
    })
    .catch((error) => console.error("Error deleting people:", error));

    fetch(`${apiUrl}/article`, {
        method: 'DELETE',
    })
    .then(() => {
        console.log("Cleared person table");
    })
    .catch((error) => console.error("Error deleting people:", error));
}

document.addEventListener('DOMContentLoaded', () => {

    clearEverything();

})