        // Battle data
        const battles = [
            {
                id: 1,
                name: "Battle of Waterloo",
                year: 1815,
                location: [50.68, 4.41], // [lat, lng]
                image: "images/waterloo.webp",
                description: "The Battle of Waterloo marked Napoleon Bonaparte's final defeat. On June 18, 1815, near Waterloo in present-day Belgium, the French army under Napoleon was defeated by two armies of the Seventh Coalition: a British-led coalition including units from the United Kingdom, the Netherlands, Hanover, Brunswick, and Nassau, under the command of the Duke of Wellington, and a Prussian army under the command of Field Marshal Blücher."
            },
            {
                id: 2,
                name: "Battle of Gettysburg",
                year: 1863,
                location: [39.81, -77.23],
                image: "images/gettysburg.jpg",
                description: "The Battle of Gettysburg was fought July 1–3, 1863, in and around the town of Gettysburg, Pennsylvania. It was the battle with the largest number of casualties in the American Civil War and is often described as the war's turning point. Union Major General George Meade's Army of the Potomac defeated attacks by Confederate General Robert E. Lee's Army of Northern Virginia, halting Lee's invasion of the North."
            },
            {
                id: 3,
                name: "Battle of Stalingrad",
                year: 1942,
                location: [48.7, 44.5],
                image: "images/stalingrad.webp",
                description: "The Battle of Stalingrad was a major battle on the Eastern Front of World War II where Nazi Germany and its allies fought the Soviet Union for control of the city of Stalingrad in Southern Russia. The battle took place between August 23, 1942, and February 2, 1943, and is often regarded as the largest and bloodiest battle in the history of warfare. The German defeat at Stalingrad marked the turning point of the war in the European theater."
            },
            {
                id: 4,
                name: "Battle of Hastings",
                year: 1066,
                location: [50.91, 0.48],
                image: "images/hastings.jpg",
                description: "The Battle of Hastings took place on October 14, 1066, between the Norman-French army of William, the Duke of Normandy, and an English army under the Anglo-Saxon King Harold Godwinson. It began the Norman conquest of England and was a decisive Norman victory. King Harold II was killed in the battle—legend has it that he was shot through the eye with an arrow."
            },
            {
                id: 5,
                name: "Battle of Thermopylae",
                year: -480, // BCE
                location: [38.8, 22.53],
                image: "images/thermopylae.jpg",
                description: "The Battle of Thermopylae was fought between an alliance of Greek city-states, led by King Leonidas I of Sparta, and the Achaemenid Empire of Xerxes I in 480 BCE. It was fought over the course of three days during the second Persian invasion of Greece. The battle took place at the narrow coastal pass of Thermopylae ('The Hot Gates'). The Persian invasion was a delayed response to the defeat of the first Persian invasion of Greece at the Battle of Marathon."
            },
            {
                id: 6,
                name: "Battle of Trafalgar",
                year: 1805,
                location: [36.2, -6.15],
                image: "images/trafalgar.jpg",
                description: "The Battle of Trafalgar was a naval engagement fought by the British Royal Navy against the combined fleets of the French and Spanish Navies on October 21, 1805, during the War of the Third Coalition of the Napoleonic Wars. The battle took place in the Atlantic Ocean off the coast of Spain, just west of Cape Trafalgar. The Franco-Spanish fleet lost twenty-two ships, without a single British vessel being lost."
            },
            {
                id: 7,
                name: "Battle of Midway",
                year: 1942,
                location: [28.2, -177.35],
                image: "images/midway.webp",
                description: "The Battle of Midway was a decisive naval battle in the Pacific Theater of World War II that took place on June 4-7, 1942. The United States Navy under Admirals Chester W. Nimitz, Frank Jack Fletcher, and Raymond A. Spruance defeated an attacking fleet of the Imperial Japanese Navy under Admirals Isoroku Yamamoto, Chuichi Nagumo, and Nobutake Kondo near Midway Atoll, inflicting devastating damage on the Japanese fleet."
            },
            {
                id: 8,
                name: "Battle of Marathon",
                year: -490, // BCE
                location: [38.11, 23.94],
                image: "images/marathon.jpg",
                description: "The Battle of Marathon took place in 490 BCE during the first Persian invasion of Greece. It was fought between the citizens of Athens, aided by Plataea, and a Persian force commanded by Datis and Artaphernes. The battle was the culmination of the first attempt by Persia, under King Darius I, to subjugate Greece. The Greek victory at Marathon marked the end of the first Persian invasion of Greece."
            },
            {
                id: 9,
                name: "Battle of Yorktown",
                year: 1781,
                location: [37.23, -76.5],
                image: "images/yorktown.jpg",
                description: "The Siege of Yorktown, also known as the Battle of Yorktown, was a decisive victory by combined American and French forces led by General George Washington and the Comte de Rochambeau over a British army commanded by General Lord Cornwallis. The siege took place from September 28 to October 19, 1781, and was the last major land battle of the American Revolutionary War."
            },
            {
                id: 10,
                name: "Battle of Vienna",
                year: 1683,
                location: [48.21, 16.37],
                image: "images/vienna.webp",
                description: "The Battle of Vienna took place at Kahlenberg Mountain near Vienna on September 12, 1683, after the imperial city had been besieged by the Ottoman Empire for two months. The battle was fought by the Habsburg Monarchy, the Polish-Lithuanian Commonwealth and the Holy Roman Empire against the invading Ottoman Empire. The battle marked the beginning of the political hegemony of the Habsburg dynasty in the Eastern European region."
            }
        ];

        // Game state
        let gameState = {
            currentBattle: null,
            roundsPlayed: 0,
            totalRounds: 5,
            totalScore: 0,
            guessLocation: null,
            guessYear: null,
            map: null,
            marker: null,
            resultMap: null,
            originalMarker: null,
            guessMarker: null
        };

        // DOM Elements
        const splashScreen = document.getElementById('splashScreen');
        const gameArea = document.getElementById('gameArea');
        const resultArea = document.getElementById('resultArea');
        const endGameScreen = document.getElementById('endGameScreen');
        const startGameBtn = document.getElementById('startGameBtn');
        const submitGuessBtn = document.getElementById('submitGuessBtn');
        const nextRoundBtn = document.getElementById('nextRoundBtn');
        const endGameBtn = document.getElementById('endGameBtn');
        const playAgainBtn = document.getElementById('playAgainBtn');
        const yearGuessInput = document.getElementById('yearGuess');
        const locationSelected = document.getElementById('locationSelected');
        const roundNumber = document.getElementById('roundNumber');
        const totalScoreElement = document.getElementById('totalScore');
        const battleImage = document.getElementById('battleImage');
        const resultBattleImage = document.getElementById('resultBattleImage');
        const battleNameElement = document.getElementById('battleName');
        const battleYearElement = document.getElementById('battleYear');
        const battleDescriptionElement = document.getElementById('battleDescription');
        const distanceResultElement = document.getElementById('distanceResult');
        const yearResultElement = document.getElementById('yearResult');
        const locationProgressBar = document.getElementById('locationProgressBar');
        const yearProgressBar = document.getElementById('yearProgressBar');
        const roundScoreElement = document.getElementById('roundScore');
        const finalScoreElement = document.getElementById('finalScore');
        const scoreBreakdownElement = document.getElementById('scoreBreakdown');

        // Constants for scoring
        const MAX_DISTANCE_KM = 5000; // Maximum distance for scoring
        const MAX_YEAR_DIFF = 500; // Maximum year difference for scoring

        // Initialize map
        function initMap() {
            // Create game map
            gameState.map = L.map('map').setView([30, 10], 2);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(gameState.map);

            // Add click event to map
            gameState.map.on('click', function(e) {
                if (gameState.marker) {
                    gameState.map.removeLayer(gameState.marker);
                }
                
                gameState.guessLocation = [e.latlng.lat, e.latlng.lng];
                gameState.marker = L.marker(gameState.guessLocation).addTo(gameState.map);
                
                locationSelected.textContent = `Selected: ${e.latlng.lat.toFixed(2)}°, ${e.latlng.lng.toFixed(2)}°`;
            });
        }

        // Initialize result map
        function initResultMap() {
            if (gameState.resultMap) {
                gameState.resultMap.remove(); // Clean up existing map
            }
            gameState.resultMap = L.map('resultMap').setView([30, 10], 2);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(gameState.resultMap);
        }

        // Calculate distance between two points using Haversine formula
        function calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371; // Earth's radius in km
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        }

        // Format years to display BCE/CE
        function formatYear(year) {
            if (year < 0) {
                return Math.abs(year) + " BCE";
            } else {
                return year + " CE";
            }
        }

        // Start new game
        function startGame() {
            gameState.roundsPlayed = 0;
            gameState.totalScore = 0;
            startNewRound();
            
            splashScreen.style.display = 'none';
            endGameScreen.style.display = 'none';
            gameArea.style.display = 'block';
            resultArea.style.display = 'none';
            
            // Initialize map if not already done
            if (!gameState.map) {
                initMap();
            }
        }

        // Start a new round
        function startNewRound() {
            // Reset state
            gameState.guessLocation = null;
            gameState.guessYear = null;
            yearGuessInput.value = '';
            locationSelected.textContent = 'No location selected yet';
            
            // Remove previous marker if exists
            if (gameState.marker) {
                gameState.map.removeLayer(gameState.marker);
                gameState.marker = null;
            }

            // Force map redraw
            setTimeout(() => {
                if (gameState.map) {
                    gameState.map.invalidateSize();
                }
            }, 100);
            
            // Select a random battle that hasn't been used in this game
            let availableBattles = battles.filter(battle => {
                return !gameState.usedBattles || !gameState.usedBattles.includes(battle.id);
            });
            
            // If all battles have been used or it's the first round, reset
            if (availableBattles.length === 0) {
                gameState.usedBattles = [];
                availableBattles = battles;
            }
            
            // Select random battle
            const randomIndex = Math.floor(Math.random() * availableBattles.length);
            gameState.currentBattle = availableBattles[randomIndex];
            
            // Track used battles
            if (!gameState.usedBattles) {
                gameState.usedBattles = [];
            }
            gameState.usedBattles.push(gameState.currentBattle.id);
            
            // Update UI
            battleImage.src = gameState.currentBattle.image;
            roundNumber.textContent = `Round ${gameState.roundsPlayed + 1}/${gameState.totalRounds}`;
            totalScoreElement.textContent = `Total Score: ${gameState.totalScore}`;
            
            // Reset map view
            if (gameState.map) {
                gameState.map.setView([30, 10], 2);
            }
        }

        // Submit guess
        function submitGuess() {
            gameState.guessYear = parseInt(yearGuessInput.value);
            
            // Validate inputs
            if (!gameState.guessLocation || isNaN(gameState.guessYear)) {
                alert('Please select a location on the map and enter a valid year.');
                return;
            }
            
            // Calculate distance
            const distance = calculateDistance(
                gameState.guessLocation[0],
                gameState.guessLocation[1],
                gameState.currentBattle.location[0],
                gameState.currentBattle.location[1]
            );
            
            // Calculate year difference
            const yearDiff = Math.abs(gameState.guessYear - gameState.currentBattle.year);
            
            // Calculate scores (0-100 for each category)
            const locationScore = Math.max(0, 100 - (distance / MAX_DISTANCE_KM * 100));
            const yearScore = Math.max(0, 100 - (yearDiff / MAX_YEAR_DIFF * 100));
            const roundScore = Math.round((locationScore + yearScore) / 2);
            
            // Update game state
            gameState.roundsPlayed++;
            gameState.totalScore += roundScore;
            
            // Update UI for results
            battleNameElement.textContent = gameState.currentBattle.name;
            battleYearElement.textContent = `Year: ${formatYear(gameState.currentBattle.year)}`;
            resultBattleImage.src = gameState.currentBattle.image;
            battleDescriptionElement.textContent = gameState.currentBattle.description;
            
            distanceResultElement.textContent = `${Math.round(distance)} km away`;
            yearResultElement.textContent = `${yearDiff} years off`;
            locationProgressBar.style.width = `${locationScore}%`;
            yearProgressBar.style.width = `${yearScore}%`;
            roundScoreElement.textContent = roundScore;
            
            // Color the progress bars based on score
            if (locationScore > 75) {
                locationProgressBar.style.backgroundColor = '#10b981'; // green
            } else if (locationScore > 50) {
                locationProgressBar.style.backgroundColor = '#f59e0b'; // orange
            } else {
                locationProgressBar.style.backgroundColor = '#ef4444'; // red
            }
            
            if (yearScore > 75) {
                yearProgressBar.style.backgroundColor = '#10b981'; // green
            } else if (yearScore > 50) {
                yearProgressBar.style.backgroundColor = '#f59e0b'; // orange
            } else {
                yearProgressBar.style.backgroundColor = '#ef4444'; // red
            }
            
            // Initialize result map if needed
            initResultMap(); // Always reinitialize to clear previous markers
            
            // Clear any existing markers and lines
            if (gameState.originalMarker) {
                gameState.resultMap.removeLayer(gameState.originalMarker);
                gameState.originalMarker = null;
            }
            if (gameState.guessMarker) {
                gameState.resultMap.removeLayer(gameState.guessMarker);
                gameState.guessMarker = null;
            }
            if (gameState.resultLine) {
                gameState.resultMap.removeLayer(gameState.resultLine);
                gameState.resultLine = null;
            }
            
            // Add markers for actual and guessed locations
            gameState.originalMarker = L.marker(gameState.currentBattle.location, {
                icon: L.divIcon({
                    className: 'marker-icon',
                    html: '<div style="background-color: green; border-radius: 50%; width: 12px; height: 12px; border: 2px solid white;"></div>',
                    iconSize: [12, 12]
                })
            }).addTo(gameState.resultMap).bindPopup('Actual location');
            
            gameState.guessMarker = L.marker(gameState.guessLocation, {
                icon: L.divIcon({
                    className: 'marker-icon',
                    html: '<div style="background-color: red; border-radius: 50%; width: 12px; height: 12px; border: 2px solid white;"></div>',
                    iconSize: [12, 12]
                })
            }).addTo(gameState.resultMap).bindPopup('Your guess');
            
            // Draw line between actual and guess
            if (gameState.resultLine) {
                gameState.resultMap.removeLayer(gameState.resultLine);
            }
            gameState.resultLine = L.polyline([
                gameState.currentBattle.location,
                gameState.guessLocation
            ], { color: 'red', dashArray: '5, 10' }).addTo(gameState.resultMap);
            
            // Adjust map to show both points
            const bounds = L.latLngBounds(gameState.currentBattle.location, gameState.guessLocation);
            gameState.resultMap.fitBounds(bounds, { padding: [50, 50] });
            
            // Switch to result screen
            gameArea.style.display = 'none';
            resultArea.style.display = 'block';

            // Check if game is over
            if (gameState.roundsPlayed >= gameState.totalRounds) {
                nextRoundBtn.textContent = 'See Final Score';
            }

            // Force map redraw after display change
            setTimeout(() => {
                gameState.resultMap.invalidateSize();
                gameState.resultMap.fitBounds(bounds, { padding: [50, 50] });
            }, 100);
        }

        // Handle next round
        function nextRound() {
            // Check if game is over
            if (gameState.roundsPlayed >= gameState.totalRounds) {
                showEndGame();
                return;
            }
            
            // Start new round
            startNewRound();
            
            // Switch back to game screen
            resultArea.style.display = 'none';
            gameArea.style.display = 'block';
        }

        // Show end game screen
        function showEndGame() {
            const averageScore = Math.round(gameState.totalScore / gameState.totalRounds);
            
            finalScoreElement.textContent = gameState.totalScore;
            scoreBreakdownElement.textContent = `Average score per round: ${averageScore}`;
            
            // Display different message based on score
            let message = '';
            if (averageScore >= 80) {
                message = 'Exceptional! You\'re a history master!';
            } else if (averageScore >= 60) {
                message = 'Well done! You know your battles!';
            } else if (averageScore >= 40) {
                message = 'Not bad! Keep studying those history books!';
            } else {
                message = 'Room for improvement. Try again!';
            }
            
            document.getElementById('scoreBreakdown').insertAdjacentHTML('afterend', 
                `<p class="mb-4">${message}</p>`);
            
            // Show end game screen
            gameArea.style.display = 'none';
            resultArea.style.display = 'none';
            endGameScreen.style.display = 'block';
        }

        // Event listeners
        startGameBtn.addEventListener('click', startGame);
        submitGuessBtn.addEventListener('click', submitGuess);
        nextRoundBtn.addEventListener('click', nextRound);
        endGameBtn.addEventListener('click', showEndGame);
        playAgainBtn.addEventListener('click', startGame);

        // Initialize the game
        document.addEventListener('DOMContentLoaded', function() {
            // Do nothing, wait for user to click start
        });