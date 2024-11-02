
const games = [
    { title: 'Super Mario 64', developer: 'Nintendo', rating: 10, played: true },
    { title: 'Dark Souls', developer: 'FromSoftware', rating: 9, played: true }
];

function renderGames() {
    const tableBody = document.getElementById('gamesTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    
    games.forEach(game => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = game.title;
        row.insertCell(1).textContent = game.developer;
        row.insertCell(2).textContent = game.rating;
        row.insertCell(3).textContent = game.played ? 'Yes' : 'No';
    });
}

document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const developer = document.getElementById('developer').value;
    const rating = parseInt(document.getElementById('rating').value);
    const played = document.getElementById('played').checked;
    
    const newGame = { title, developer, rating, played };
    games.push(newGame);
    this.reset();
    renderGames();
});

renderGames();
