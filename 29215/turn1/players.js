const players = [
    {name: "Leonel Messi", ovr: 91, image: "https://sportsclassicstore.com/cdn/shop/files/MESSIU.webp?v=1684950584&width=360"},
{name:"Christiano Ronaldo", ovr:90 , image: "https://sportsclassicstore.com/cdn/shop/files/RONALDO_1.webp?v=1684776295&width=360"},
{name:"Karim Benzema", ovr: 91, image: "https://sportsclassicstore.com/cdn/shop/files/BENZEMAU.webp?v=1684950847&width=360"},
{name:"Robert Lewandowski", ovr:91 , image: "https://sportsclassicstore.com/cdn/shop/files/LEWANDOWSKIU.webp?v=1684951081&width=360"},
{name:"Kylian Mbappe", ovr:91 , image: "https://sportsclassicstore.com/cdn/shop/files/MBAPPEU.webp?v=1684950429&width=360"},
{name:"Neymar Jr", ovr: 89, image: "https://sportsclassicstore.com/cdn/shop/files/NEYMARU.webp?v=1684950648&width=360"},
{name:"Erling Haaland", ovr:88 , image: "https://sportsclassicstore.com/cdn/shop/products/HAALANDU.webp?v=1684950289&width=360"},
{name: "Thomas Muller", ovr:87, image: "https://sportsclassicstore.com/cdn/shop/files/MULLERU.webp?v=1684951367&width=360"},
{name:"Bruno Fernandes", ovr:86 , image: "https://sportsclassicstore.com/cdn/shop/files/BRUNOEU.webp?v=1684951526&width=360"},
{name:"Vinicius Jr", ovr:86 , image: "https://sportsclassicstore.com/cdn/shop/files/VINIJRU.webp?v=1684950737&width=360"},
{name:"Gavi", ovr: 79 , image: "https://sportsclassicstore.com/cdn/shop/files/GAVIU.webp?v=1684950999&width=360"},
{name:"Pedri", ovr:85 , image: "https://sportsclassicstore.com/cdn/shop/files/PEDRIU.webp?v=1684951132&width=360"},
{name:"Kai Havertz", ovr:84 , image: "https://sportsclassicstore.com/cdn/shop/files/HAVERTZU.webp?v=1684955886&width=360"},
{name:"Jack Grealish", ovr: 84 , image: "https://sportsclassicstore.com/cdn/shop/files/GREALISHU.webp?v=1684955468&width=360"},
{name:"Odegaard", ovr: 84, image: "https://sportsclassicstore.com/cdn/shop/files/ODEGAARDEU.webp?v=1684956270&width=360"},
{name:"Mason Mount", ovr: 84, image: "https://sportsclassicstore.com/cdn/shop/files/MOUNTU.webp?v=1684955974&width=360"},
{name:"Darwin Nunez", ovr:82 , image:"https://sportsclassicstore.com/cdn/shop/files/NUNEZU.webp?v=1684955675&width=360"},
{name:"Bukayo saka", ovr:82 , image: "https://sportsclassicstore.com/cdn/shop/files/SAKAEU.webp?v=1684956192&width=360"},
{name:"Marcus Rashford", ovr: 81, image: "https://sportsclassicstore.com/cdn/shop/files/RASHFORDEU.webp?v=1684951590&width=360"},
{name:"Martinelli", ovr: 78 , image: "https://sportsclassicstore.com/cdn/shop/files/MARTINELLIEU.webp?v=1684956336&width=360"},
];


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Football Draft Game</title>
    <style>
        /* General Styling */
        body {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f9fafb;
        }
        .player {
            width: 45%;
            text-align: center;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        .player:hover {
            transform: translateY(-5px);
        }
        h2 {
            font-size: 24px;
            color: #34495e;
            margin-bottom: 20px;
        }

        /* Cards */
        .cards {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }
        .card {
            width: 120px;
            height: 180px;
            background-color: grey;
            cursor: pointer;
            perspective: 1000px;
            transition: transform 0.5s ease, box-shadow 0.3s ease;
            border-radius: 15px;
            overflow: hidden;
        }
        .card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s ease;
            transform-style: preserve-3d;
        }
        .card.flipped .card-inner {
            transform: rotateY(180deg);
        }
        .card-front, .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 15px;
        }
        .card-back {
            background-color: #1e272e;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
        }
        .card-front {
            background-color: white;
            transform: rotateY(180deg);
        }
        .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
        }

        /* Teams */
        .team {
            margin-top: 20px;
        }
        .team-list {
            list-style: none;
            padding: 0;
        }
        .team-list li {
            background-color: #3498db;
            color: #fff;
            margin: 5px 0;
            padding: 10px;
            cursor: pointer;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }
        .team-list li:hover {
            background-color: #2980b9;
        }

        /* Buttons */
        .steal-button, #draftPlayer1, #draftPlayer2 {
            margin-top: 20px;
            padding: 12px 20px;
            background-color: #2ecc71;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .steal-button:hover, #draftPlayer1:hover, #draftPlayer2:hover {
            background-color: #27ae60;
            transform: translateY(-3px);
        }
        .steal-button:disabled, #draftPlayer1:disabled, #draftPlayer2:disabled {
            background-color: #95a5a6;
            cursor: not-allowed;
            box-shadow: none;
        }

        /* Modal styling */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .modal-content h2 {
            margin: 0 0 20px;
            font-size: 24px;
            color: #27ae60;
        }
        .modal-content button {
            padding: 12px 20px;
            background-color: #2ecc71;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .modal-content button:hover {
            background-color: #27ae60;
            transform: translateY(-3px);
        }

        /* Show modal */
        .modal.show {
            display: flex;
            opacity: 1;
        }
    </style>
</head>
<body>

    <!-- Player 1 Section -->
    <div class="player">
        <h2>Player 1</h2>
        <button id="draftPlayer1">Draft Players</button>
        <div id="cardsPlayer1" class="cards"></div>
        <div class="team">
            <h3>Player 1's Team</h3>
            <ul id="teamPlayer1" class="team-list"></ul>
            <button id="stealPlayer1" class="steal-button" style="display:none;">Steal from Player 2</button>
        </div>
    </div>

    <!-- Player 2 Section -->
    <div class="player">
        <h2>Player 2</h2>
        <button id="draftPlayer2">Draft Players</button>
        <div id="cardsPlayer2" class="cards"></div>
        <div class="team">
            <h3>Player 2's Team</h3>
            <ul id="teamPlayer2" class="team-list"></ul>
            <button id="stealPlayer2" class="steal-button" style="display:none;">Steal from Player 1</button>
        </div>
    </div>

    <!-- Modal for winner -->
    <div id="winnerModal" class="modal">
        <div class="modal-content">
            <h2 id="winnerMessage">Congratulations!</h2>
            <button id="closeModal">Close</button>
        </div>
    </div>

    <script>
        const players = [
            { name: "Leonel Messi", ovr: 91, image: "https://sportsclassicstore.com/cdn/shop/files/MESSIU.webp?v=1684950584&width=360" },
            { name: "Christiano Ronaldo", ovr: 90, image: "https://sportsclassicstore.com/cdn/shop/files/RONALDO_1.webp?v=1684776295&width=360" },
            { name: "Karim Benzema", ovr: 91, image: "https://sportsclassicstore.com/cdn/shop/files/BENZEMAU.webp?v=1684950847&width=360" },
            { name: "Robert Lewandowski", ovr: 91, image: "https://sportsclassicstore.com/cdn/shop/files/LEWANDOWSKIU.webp?v=1684951081&width=360" },
            { name: "Kylian Mbappe", ovr: 91, image: "https://sportsclassicstore.com/cdn/shop/files/MBAPPEU.webp?v=1684950429&width=360" },
            { name: "Neymar Jr", ovr: 89, image: "https://sportsclassicstore.com/cdn/shop/files/NEYMARU.webp?v=1684950648&width=360" },
            { name: "Erling Haaland", ovr: 88, image: "https://sportsclassicstore.com/cdn/shop/products/HAALANDU.webp?v=1684950289&width=360" },
            { name: "Thomas Muller", ovr: 87, image: "https://sportsclassicstore.com/cdn/shop/files/MULLERU.webp?v=1684951367&width=360" },
            { name: "Bruno Fernandes", ovr: 86, image: "https://sportsclassicstore.com/cdn/shop/files/BRUNOEU.webp?v=1684951526&width=360" },
            { name: "Vinicius Jr", ovr: 86, image: "https://sportsclassicstore.com/cdn/shop/files/VINIJRU.webp?v=1684950737&width=360" }
        ];

        let currentPlayerTurn = 1;
        let availablePlayers = [...players];
        let player1StolenCard = null;
        let player2StolenCard = null;
        let player1HasStolen = false;
        let player2HasStolen = false;
        let player1TeamCount = 0;
        let player2TeamCount = 0;

        function draftPlayers() {
            if (availablePlayers.length === 2) {
                return availablePlayers;
            } else {
                let shuffledPlayers = [...availablePlayers].sort(() => 0.5 - Math.random());
                return shuffledPlayers.slice(0, 3);
            }
        }

        function displayCards(playerId, cards) {
            const cardContainer = document.getElementById(playerId);
            cardContainer.innerHTML = ''; // Clear previous cards
            cards.forEach((card) => {
                let cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                cardDiv.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="${card.image}" alt="Player Image" data-player='${JSON.stringify(card)}'>
                        </div>
                        <div class="card-back">Flip Me</div>
                    </div>`;
                cardDiv.addEventListener('click', revealCard);
                cardContainer.appendChild(cardDiv);

                setTimeout(() => {
                    cardDiv.classList.add('flipped');
                }, 200);
            });
        }

        function revealCard() {
            const cardInner = this.querySelector('.card-inner');
            if (cardInner.classList.contains('flipped')) return;

            cardInner.classList.add('flipped');
            const playerData = JSON.parse(this.querySelector('.card-front img').dataset.player);
            const isPlayer1 = this.parentElement.id === 'cardsPlayer1';

            const teamList = document.getElementById(isPlayer1 ? 'teamPlayer1' : 'teamPlayer2');
            let teamItem = document.createElement('li');
            teamItem.innerText = `${playerData.name} (OVR: ${playerData.ovr})`;
            teamItem.dataset.player = JSON.stringify(playerData);
            teamList.appendChild(teamItem);

            availablePlayers = availablePlayers.filter(player => player.name !== playerData.name);
            
            // Track the team count for each player
            if (isPlayer1) {
                player1TeamCount++;
            } else {
                player2TeamCount++;
            }

            // Check if both players have finished drafting
            if (player1TeamCount === 5 && player2TeamCount === 5) {
                document.getElementById('stealPlayer1').style.display = 'block';
                document.getElementById('stealPlayer2').style.display = 'block';
            }

            currentPlayerTurn = currentPlayerTurn === 1 ? 2 : 1;
            toggleDraftButtons();
        }

        function toggleDraftButtons() {
            document.getElementById('draftPlayer1').disabled = currentPlayerTurn !== 1;
            document.getElementById('draftPlayer2').disabled = currentPlayerTurn !== 2;
        }

        document.getElementById('stealPlayer1').addEventListener('click', () => {
            if (!player1HasStolen) {
                activateStealMode(1, 2);
                document.getElementById('stealPlayer1').disabled = true;  // Disable after click
            }
        });

        document.getElementById('stealPlayer2').addEventListener('click', () => {
            if (!player2HasStolen) {
                activateStealMode(2, 1);
                document.getElementById('stealPlayer2').disabled = true;  // Disable after click
            }
        });

        function activateStealMode(playerStealing, opponentPlayer) {
            const opponentTeam = document.getElementById(opponentPlayer === 1 ? 'teamPlayer1' : 'teamPlayer2');
            Array.from(opponentTeam.children).forEach(card => {
                card.style.cursor = 'pointer';
                card.addEventListener('click', event => stealCard(event, playerStealing, opponentPlayer));
            });
        }

        function stealCard(event, playerStealing, opponentPlayer) {
            const stolenCard = event.currentTarget;  // Ensure the correct li element is targeted
            const playerTeam = document.getElementById(playerStealing === 1 ? 'teamPlayer1' : 'teamPlayer2');
            const opponentTeam = document.getElementById(playerStealing === 1 ? 'teamPlayer2' : 'teamPlayer1');
            const playerData = JSON.parse(stolenCard.dataset.player);  // Get the player data from the li element

            // Check if the card being stolen was already stolen from the same player
            if ((playerStealing === 1 && player2StolenCard === playerData.name) ||
                (playerStealing === 2 && player1StolenCard === playerData.name)) {
                alert('You cannot steal the same card that was stolen from you.');
                return;
            }

            // Add the stolen card to the current player's team
            playerTeam.appendChild(stolenCard);
            player1HasStolen = true;


            // Track the stolen card
            if (playerStealing === 1) {
                player1StolenCard = playerData.name;
                player1HasStolen = true;
            } else {
                player2StolenCard = playerData.name;
                player2HasStolen = true;
            }

            // Remove the stolen card from the opponent's team using correct parent element
            opponentTeam.removeChild(event.currentTarget);
            player2HasStolen = true;

            // Remove click event listeners and reset the cursor
            Array.from(opponentTeam.children).forEach(card => {
                card.style.cursor = 'default';
                card.removeEventListener('click', stealCard);
            });

            // If both players have stolen, determine the winner
            if (player1HasStolen && player2HasStolen) {
                document.getElementById('stealPlayer1').disabled = true;
                document.getElementById('stealPlayer2').disabled = true;
                determineWinner();  // Call determineWinner when both players have stolen
            }
        }

        function determineWinner() {
            const player1Team = document.getElementById('teamPlayer1').children;
            const player2Team = document.getElementById('teamPlayer2').children;

            let player1TotalOVR = Array.from(player1Team).reduce((sum, item) => {
                const playerData = JSON.parse(item.dataset.player);
                return sum + playerData.ovr;
            }, 0);

            let player2TotalOVR = Array.from(player2Team).reduce((sum, item) => {
                const playerData = JSON.parse(item.dataset.player);
                return sum + playerData.ovr;
            }, 0);

            let winnerMessage = '';

            if (player1TotalOVR > player2TotalOVR) {
                winnerMessage = 'Congratulations Player 1, You Won!';
            } else if (player2TotalOVR > player1TotalOVR) {
                winnerMessage = 'Congratulations Player 2, You Won!';
            } else {
                winnerMessage = 'It\'s a Tie!';
            }

            showWinnerModal(winnerMessage);
        }

        function showWinnerModal(message) {
            const modal = document.getElementById('winnerModal');
            document.getElementById('winnerMessage').innerText = message;
            modal.classList.add('show');  // Add the 'show' class to display modal
        }

        document.getElementById('closeModal').addEventListener('click', () => {
            document.getElementById('winnerModal').classList.remove('show');
        });

        document.getElementById('draftPlayer1').addEventListener('click', () => {
            const draftedPlayers = draftPlayers();
            displayCards('cardsPlayer1', draftedPlayers);
        });

        document.getElementById('draftPlayer2').addEventListener('click', () => {
            const draftedPlayers = draftPlayers();
            displayCards('cardsPlayer2', draftedPlayers);
        });

        toggleDraftButtons(); // Initialize button states
    </script>
</body>
</html>
