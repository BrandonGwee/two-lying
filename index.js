const apiUrl = '.'

function selectRole() {
    const playerButton = document.getElementById('player');
    const guesserButton = document.getElementById('guesser');

    let personRole = '';

    // Note: onclick is a property, not a method()
    playerButton.onclick = () => {
        personRole = 'player';
        enterName(personRole);
    }

    guesserButton.onclick = () => {
        personRole = 'guesser';
        enterName(personRole);
    }

    
}

function enterName(role) {
    const gameScreenDiv = document.getElementById('gameScreen');

    gameScreenDiv.innerHTML = null;

    gameScreenDiv.innerHTML = 
        `<p>You can call me:</p>
            <div class="name">
                <input id="personName" placeholder="Enter a name">
                <button type="button" id="submitButton">Enter</button>
            </div>`;
            

    const submitButton = document.getElementById('submitButton');

    submitButton.onclick = () => {
        const personName = document.getElementById('personName').value;

        fetch(`${apiUrl}/person`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: personName,
                role: role,
            })
        })
        .then((response) => response.json())
        .then( () => {
                if (role == 'player') {
                    enterArticle(gameScreenDiv);
                }
                else {
                    waitForArticles(gameScreenDiv);
                }
            }
        )
        .catch((error) => console.error('Error adding task:', error));
    }
}

document.addEventListener('DOMContentLoaded', () => {

    selectRole();

})