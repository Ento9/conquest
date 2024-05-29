
let race = "human";
let classe = "bard";

let name = "";

let strength; 
let dexterity; 
let constitution; 
let intelligence; 
let wisdom; 
let charisma;

let currentQuest = 0;

let totalPoints = 27;

let bonusPoint = "For All +1";



function initialize() {
    strength = 8;
    dexterity = 8;
    constitution = 8;
    intelligence = 8; 
    wisdom  = 8;
    charisma = 8;

    if (race == "dragonborn") {
        race = "dragonborn";
        bonusPoint = "Strength +2";
        console.log("dragonborn bonus");
        strength += 2;
    }

    if (race == "dwarf") {
        race = "dwarf";
        bonusPoint = "Constitution +2";
        console.log("dwarf bonus");
        constitution += 2;
    }

    if (race == "elf") {
        race = "elf";
        bonusPoint = "Dexterity +2";
        console.log("elf bonus");
        dexterity += 2;
    }

    if (race == "gnome") {
        race = "gnome";
        bonusPoint = "Intelligence +2";
        console.log("gnome bonus");
        intelligence += 2;
    }

    if (race == "halfElf") {
        race = "halfElf";
        bonusPoint = "Charisma +2";
        console.log("halfElf bonus");
        charisma += 2;
    }

    if (race == "halfing") {
        race = "halfing";
        bonusPoint = "Dexterity +2";
        console.log("halfing bonus");
        dexterity += 2;
    }

    if (race == "halfOrc") {
        race = "halfOrc";
        bonusPoint = "Strength +2 Constitution +1";
        console.log("halfOrc bonus");
        strength += 2;
        constitution += 1;
    }

    if (race == "human") {
        race = "human";
        bonusPoint = "For All +1";
        console.log("human bonus");
        strength += 1;
        dexterity += 1;
        constitution += 1;
        intelligence += 1;
        wisdom += 1;
        charisma += 1;
    }

    if (race == "tiefling") {
        race = "tiefling";
        bonusPoint = "Intelligence +1 Charisma +2";
        console.log("tiefling bonus");
        intelligence += 1;
        charisma += 2;
    }
}

//=============================================================================================

function dragonborn() {
    document.getElementById('race-selected').value = 'Dragonborn';
    document.getElementById('race-img').src = 'avatar/dragonborn.png';
    totalPoints = 27;
    race = "dragonborn"
    initialize();
    fetch('description-race/dragonborn.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function dwarf() {
    document.getElementById('race-selected').value = 'Dwarf';
    document.getElementById('race-img').src = 'avatar/dwarf.png';
    var totalPoints = 27;
    race = "dwarf"
    initialize();
    fetch('description-race/dwarf.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function elf() {
    document.getElementById('race-selected').value = 'Elf';
    document.getElementById('race-img').src = 'avatar/elf.png';
    var totalPoints = 27;
    race = "elf"
    initialize();
    fetch('description-race/elf.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function gnome() {
    document.getElementById('race-selected').value = 'Gnome';
    document.getElementById('race-img').src = 'avatar/gnome.png';
    var totalPoints = 27;
    race = "gnome";
    initialize();
    fetch('description-race/gnome.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function halfElf() {
    document.getElementById('race-selected').value = 'Half-Elf';
    document.getElementById('race-img').src = 'avatar/half-elf.png';
    var totalPoints = 27;
    race = "halfElf";
    initialize();
    fetch('description-race/half-elf.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function halfing() {
    document.getElementById('race-selected').value = 'Halfing';
    document.getElementById('race-img').src = 'avatar/halfing.png';
    var totalPoints = 27;
    race = "halfing";
    initialize();
    fetch('description-race/halfing.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function halfOrc() {
    document.getElementById('race-selected').value = 'Half-Orc';
    document.getElementById('race-img').src = 'avatar/half-orc.png';
    var totalPoints = 27;
    race = "halfOrc";
    initialize();
    fetch('description-race/half-orc.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function human() {
    document.getElementById('race-selected').value = 'Human';
    document.getElementById('race-img').src = 'avatar/human.png';
    var totalPoints = 27;
    race = "human";
    initialize();
    fetch('description-race/human.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function tiefling() {
    document.getElementById('race-selected').value = 'Tiefling';
    document.getElementById('race-img').src = 'avatar/tiefling.png';
    var totalPoints = 27;
    race = "tiefling";
    initialize();
    fetch('description-race/tiefling.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('race-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}


//-------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

function barbarian() {
    document.getElementById('class-selected').value = 'Barbarian';
    document.getElementById('ability').value = 'Strength';
    classe = "barbarian"
    fetch('description-class/barbarian.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function bard() {
    document.getElementById('class-selected').value = 'Bard';
    document.getElementById('ability').value = 'Charisma';
    classe = "bard"
    fetch('description-class/bard.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function cleric() {
    document.getElementById('class-selected').value = 'Cleric';
    document.getElementById('ability').value = 'Wisdom';
    classe = "cleric"
    fetch('description-class/cleric.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function druid() {
    document.getElementById('class-selected').value = 'Druid';
    document.getElementById('ability').value = 'Wisdom';
    classe = "druid"
    fetch('description-class/druid.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function fighter() {
    document.getElementById('class-selected').value = 'Fighter';
    document.getElementById('ability').value = 'Strength or Dexterity';
    classe = "fighter"
    fetch('description-class/fighter.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function monk() {
    document.getElementById('class-selected').value = 'Monk';
    document.getElementById('ability').value = 'Dexterity & Wisdom';
    classe = "monk"
    fetch('description-class/monk.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function paladin() {
    document.getElementById('class-selected').value = 'Paladin';
    document.getElementById('ability').value = 'Strength & Charisma';
    classe = "paladin"
    fetch('description-class/paladin.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function ranger() {
    document.getElementById('class-selected').value = 'Ranger';
    document.getElementById('ability').value = 'Dexterity & Wisdom';
    classe = "ranger"
    fetch('description-class/ranger.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function rogue() {
    document.getElementById('class-selected').value = 'Rogue';
    document.getElementById('ability').value = 'Dexterity';
    classe = "rogue"
    fetch('description-class/rogue.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function sorcerer() {
    document.getElementById('class-selected').value = 'Sorcerer';
    document.getElementById('ability').value = 'Charisma';
    classe = "sorcerer"
    fetch('description-class/sorcerer.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function warlock() {
    document.getElementById('class-selected').value = 'Warlock';
    document.getElementById('ability').value = 'Charisma';
    classe = "warlock"
    fetch('description-class/warlock.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function wizard() {
    document.getElementById('class-selected').value = 'Wizard';
    document.getElementById('ability').value = 'Intelligence';
    classe = "wizard"
    fetch('description-class/wizard.txt')
                .then(response => response.text())
                .then(text => {
                    document.getElementById('class-desc').innerText = text;
                })
                .catch(error => console.error('Error fetching text file:', error));
}

function nextClass() {

    document.getElementById('global-point').value = totalPoints;

    const classes = document.getElementsByClassName("class");
    const classe = classes[0];
    classe.style.display = "none";

    const points = document.getElementsByClassName("point");
    const point = points[0];
    point.style.display = "block";
    
    

    console.log(strength);
    console.log(dexterity);
    console.log(constitution);
    console.log(intelligence);
    console.log(wisdom);
    console.log(charisma);

    document.getElementById('race-bonus').value = bonusPoint;

    document.getElementById('strength').value = strength; 
    document.getElementById('dexterity').value = dexterity;
    document.getElementById('constitution').value = constitution;
    document.getElementById('intelligence').value = intelligence;
    document.getElementById('wisdom').value = wisdom;
    document.getElementById('charisma').value = charisma;
}

// Initial total global points


// Function to adjust total global points when a point is added in any category
function adjustTotalPointsAdd() {
    if (totalPoints > 0) {
        totalPoints -= 1;
        updateGlobalPointsDisplay();
    } else {
        console.error("No more available points.");
        showNoPointsMessage();
    }
}

// Function to adjust total global points when a point is removed from any category
function adjustTotalPointsRemove() {
    if (totalPoints < 27) {
        totalPoints += 1;
        updateGlobalPointsDisplay();
    } else {
        console.error("No points to return.");
    }
}

// Function to update the display of remaining global points
function updateGlobalPointsDisplay() {
    document.getElementById('global-point').value = totalPoints;
}

// Function to show no points message
function showNoPointsMessage() {
    const message = document.getElementById('no-point');
    message.style.display = "block";
    setTimeout(() => {
        message.style.display = "none";
    }, 2000);
}


function minStrength() {
    
    // Get the current value of strength from the input field
    //let strength = parseInt(document.getElementById('strength').value, 10);                          s
    console.log("3S: " + strength);
    // Check if the parsed value is a valid number
    if (isNaN(strength)) {
        console.error("Invalid strength value");
        return;
    }

    // Decrease strength
    strength -= 1;
    totalPoints += 1;
    

    // If strength is less than 8, reset to 8 and display the message
    if (strength < 8) {
        strength = 8;
        totalPoints -= 1;
        const messages = document.getElementsByClassName("minimal-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new strength value
    document.getElementById('strength').value = strength;
    console.log("Strength: " + strength);

    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);

    console.log("4S: " + strength);
}

function plusStrength() {

    
    // Get the current value of strength from the input field
    //let strength = parseInt(document.getElementById('strength').value, 10);                                 s
    console.log("5S: " + strength);
    // Check if the parsed value is a valid number
    if (isNaN(strength)) {
        console.error("Invalid strength value");
        return;
    }

    // Increase strength
    strength += 1;
    totalPoints -= 1;

    // If strength is more than 20, reset to 20 and display the message
    if (strength > 20) {
        totalPoints += 1;
        strength = 20;
        const messages = document.getElementsByClassName("maximum-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    if (totalPoints < 0) {
        strength -= 1;
        totalPoints += 1;
        const messages = document.getElementsByClassName("no-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new strength value
    document.getElementById('strength').value = strength;
    console.log("Strength: " + strength);

    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
    console.log("6S: " + strength);
}


function minDexterity() {
    // Get the current value of dexterity from the input field
    //let dexterity = parseInt(document.getElementById('dexterity').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(dexterity)) {
        console.error("Invalid dexterity value");
        return;
    }

    // Decrease dexterity
    dexterity -= 1;
    totalPoints += 1;

    // If dexterity is less than 8, reset to 8 and display the message
    if (dexterity < 8) {
        totalPoints -= 1;
        dexterity = 8;
        const messages = document.getElementsByClassName("minimal-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new dexterity value
    document.getElementById('dexterity').value = dexterity;
    console.log("Dexterity: " + dexterity);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function plusDexterity() {
    // Get the current value of dexterity from the input field
    //let dexterity = parseInt(document.getElementById('dexterity').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(dexterity)) {
        console.error("Invalid dexterity value");
        return;
    }

    // Increase dexterity
    dexterity += 1;
    totalPoints -= 1;

    // If dexterity is more than 20, reset to 20 and display the message
    if (dexterity > 20) {
        totalPoints += 1;
        dexterity = 20;
        const messages = document.getElementsByClassName("maximum-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    if (totalPoints < 0) {
        dexterity -= 1;
        totalPoints += 1;
        const messages = document.getElementsByClassName("no-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new dexterity value
    document.getElementById('dexterity').value = dexterity;
    console.log("Dexterity: " + dexterity);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function minConstitution() {
    // Get the current value of constitution from the input field
    //let constitution = parseInt(document.getElementById('constitution').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(constitution)) {
        console.error("Invalid constitution value");
        return;
    }

    // Decrease constitution
    constitution -= 1;
    totalPoints += 1;

    // If constitution is less than 8, reset to 8 and display the message
    if (constitution < 8) {
        totalPoints -= 1;
        constitution = 8;
        const messages = document.getElementsByClassName("minimal-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new constitution value
    document.getElementById('constitution').value = constitution;
    console.log("Constitution: " + constitution);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function plusConstitution() {
    // Get the current value of constitution from the input field
    //let constitution = parseInt(document.getElementById('constitution').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(constitution)) {
        console.error("Invalid constitution value");
        return;
    }

    // Increase constitution
    constitution += 1;
    totalPoints -= 1;

    // If constitution is more than 20, reset to 20 and display the message
    if (constitution > 20) {
        totalPoints += 1;
        constitution = 20;
        const messages = document.getElementsByClassName("maximum-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    if (totalPoints < 0) {
        constitution -= 1;
        totalPoints += 1;
        const messages = document.getElementsByClassName("no-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new constitution value
    document.getElementById('constitution').value = constitution;
    console.log("Constitution: " + constitution);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function minIntelligence() {
    // Get the current value of intelligence from the input field
    //let intelligence = parseInt(document.getElementById('intelligence').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(intelligence)) {
        console.error("Invalid intelligence value");
        return;
    }

    // Decrease intelligence
    intelligence -= 1;
    totalPoints += 1;

    // If intelligence is less than 8, reset to 8 and display the message
    if (intelligence < 8) {
        totalPoints -= 1;
        intelligence = 8;
        const messages = document.getElementsByClassName("minimal-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new intelligence value
    document.getElementById('intelligence').value = intelligence;
    console.log("Intelligence: " + intelligence);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function plusIntelligence() {
    // Get the current value of intelligence from the input field
    //let intelligence = parseInt(document.getElementById('intelligence').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(intelligence)) {
        console.error("Invalid intelligence value");
        return;
    }

    // Increase intelligence
    intelligence += 1;
    totalPoints -= 1;

    // If intelligence is more than 20, reset to 20 and display the message
    if (intelligence > 20) {
        totalPoints += 1;
        intelligence = 20;
        const messages = document.getElementsByClassName("maximum-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    if (totalPoints < 0) {
        intelligence -= 1;
        totalPoints += 1;
        const messages = document.getElementsByClassName("no-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new intelligence value
    document.getElementById('intelligence').value = intelligence;
    console.log("Intelligence: " + intelligence);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function minWisdom() {
    // Get the current value of wisdom from the input field
    //let wisdom = parseInt(document.getElementById('wisdom').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(wisdom)) {
        console.error("Invalid wisdom value");
        return;
    }

    // Decrease wisdom
    wisdom -= 1;
    totalPoints += 1;

    // If wisdom is less than 8, reset to 8 and display the message
    if (wisdom < 8) {
        totalPoints -= 1;
        wisdom = 8;
        const messages = document.getElementsByClassName("minimal-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new wisdom value
    document.getElementById('wisdom').value = wisdom;
    console.log("Wisdom: " + wisdom);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function plusWisdom() {
    // Get the current value of wisdom from the input field
    //let wisdom = parseInt(document.getElementById('wisdom').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(wisdom)) {
        console.error("Invalid wisdom value");
        return;
    }

    // Increase wisdom
    wisdom += 1;
    totalPoints -= 1;

    // If wisdom is more than 20, reset to 20 and display the message
    if (wisdom > 20) {
        totalPoints += 1;
        wisdom = 20;
        const messages = document.getElementsByClassName("maximum-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    if (totalPoints < 0) {
        wisdom -= 1;
        totalPoints += 1;
        const messages = document.getElementsByClassName("no-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new wisdom value
    document.getElementById('wisdom').value = wisdom;
    console.log("Wisdom: " + wisdom);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function minCharisma() {
    // Get the current value of charisma from the input field
    //let charisma = parseInt(document.getElementById('charisma').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(charisma)) {
        console.error("Invalid charisma value");
        return;
    }

    // Decrease charisma
    charisma -= 1;
    totalPoints += 1;

    // If charisma is less than 8, reset to 8 and display the message
    if (charisma < 8) {
        totalPoints -= 1;
        charisma = 8;
        const messages = document.getElementsByClassName("minimal-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new charisma value
    document.getElementById('charisma').value = charisma;
    console.log("Charisma: " + charisma);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}

function plusCharisma() {
    // Get the current value of charisma from the input field
    //let charisma = parseInt(document.getElementById('charisma').value, 10);

    // Check if the parsed value is a valid number
    if (isNaN(charisma)) {
        console.error("Invalid charisma value");
        return;
    }

    // Increase charisma
    charisma += 1;
    totalPoints -= 1;

    // If charisma is more than 20, reset to 20 and display the message
    if (charisma > 20) {
        totalPoints += 1;
        charisma = 20;
        const messages = document.getElementsByClassName("maximum-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    if (totalPoints < 0) {
        charisma -= 1;
        totalPoints += 1;
        const messages = document.getElementsByClassName("no-point");
        if (messages.length > 0) {
            const message = messages[0];
            message.style.display = "block";

            // Hide the message after 2 seconds
            setTimeout(() => {
                message.style.display = "none";
            }, 2000);
        }
    }

    // Update the input field with the new charisma value
    document.getElementById('charisma').value = charisma;
    console.log("Charisma: " + charisma);
    document.getElementById('global-point').value = totalPoints;
    console.log(totalPoints);
}



document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons avec la classe 'bouton-son'
    var boutons = document.querySelectorAll('.btns');

    // Définir une variable pour l'audio
    var audio = new Audio('sound/btn-sound.wav'); // Spécifiez le chemin vers votre fichier audio
    audio.volume = 0.5; // Définir le volume initial

    // Précharger le son
    audio.preload = 'auto';
    audio.load(); // Charger le son immédiatement

    // Ajouter un gestionnaire d'événements à chaque bouton
    boutons.forEach(function(bouton) {
        bouton.addEventListener('click', function() {
            playSound(audio); // Jouer le son à chaque clic sur un bouton
        });
    });

    // Fonction pour jouer un son avec le volume actuel
    function playSound(audio) {
        audio.currentTime = 0; // Rembobiner le son à zéro
        audio.play();
    }
});

// Tableau des chemins des images
let imagess = [
    "avatar-perso/1.png",
    "avatar-perso/2.png",
    "avatar-perso/3.png",
    "avatar-perso/4.png",
    "avatar-perso/5.png",
    "avatar-perso/6.png",
    "avatar-perso/7.png",
    "avatar-perso/8.png",
    "avatar-perso/9.png",
    "avatar-perso/10.png",
    "avatar-perso/11.png"
];

// Index de l'image actuellement affichée
let currentIndex = 7;

// Sélectionner l'élément img
let imgElement = document.getElementById('image-display');

// Fonction pour afficher l'image précédente
function imagePrecedente() {
    currentIndex = (currentIndex - 1 + imagess.length) % imagess.length;
    imgElement.src = imagess[currentIndex];
    console.log(currentIndex);
}

// Fonction pour afficher l'image suivante
function imageSuivante() {
    currentIndex = (currentIndex + 1) % imagess.length;
    imgElement.src = imagess[currentIndex];
    console.log(currentIndex);
}

function nextPoint() {

    myData.race = race;
    myData.class = classe;
    myData.strength = strength;
    myData.dexterity = dexterity;
    myData.constitution = constitution;
    myData.intelligence = intelligence;
    myData.wisdom = wisdom;
    myData.charisma = charisma;
    myData.totalPoints = totalPoints;
    myData.currentQuest = currentQuest;
    
    const points = document.getElementsByClassName("point");
    const point = points[0];
    point.style.display = "none";

    const finals = document.getElementsByClassName("final");
    const final = finals[0];
    final.style.display = "block";
    
    console.log("7S: " + strength);

    document.getElementById('strength2').value = strength; 
    document.getElementById('dexterity2').value = dexterity;
    document.getElementById('constitution2').value = constitution;
    document.getElementById('intelligence2').value = intelligence;
    document.getElementById('wisdom2').value = wisdom;
    document.getElementById('charisma2').value = charisma;

    document.getElementById('race-input').value = race;
    document.getElementById('class-input').value = classe;

    
}



function finishCharacter() {
    name = document.getElementById('playerName').value;
    
    if (name == "") {
        const messages = document.getElementsByClassName("no-name");
        const message = messages[0];
            message.style.display = "block";

            setTimeout(() => {
                message.style.display = "none";
            }, 1500);
    } else {
        myData.name = name;
        const windows = document.getElementsByClassName("reconfirmation");
        const window = windows[0];
        window.style.display = "block";

        const blacks = document.getElementsByClassName("black");
        const black = blacks[0];
        black.style.display = "block";
        
    }
}

function noConfirmation() {
        const windows = document.getElementsByClassName("reconfirmation");
        const window = windows[0];
        window.style.display = "none";

        const blacks = document.getElementsByClassName("black");
        const black = blacks[0];
        black.style.display = "none";

        console.log(race);
}

function downloadJSON(filename, jsonData) {
    // Convertir les données en chaîne JSON
    const jsonString = JSON.stringify(jsonData);

    // Créer un Blob à partir de la chaîne JSON
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Ajouter le lien au document et simuler un clic pour télécharger le fichier
    document.body.appendChild(link);
    link.click();

    // Supprimer le lien du document après le téléchargement
    document.body.removeChild(link);

    const characters = document.getElementsByClassName("creatCharacter");
    const character =  characters[0];
    character.style.display = "none";
    const loads = document.getElementsByClassName("load");
    const load =  loads[0];
    load.style.display = "block";
}

const myData = {
    race: race,
    class: classe, 
    strength: strength,
    dexterity: dexterity,
    constitution: constitution,
    intelligence: intelligence,
    wisdom: wisdom,
    charisma: charisma,
    name: name,
    currentIndex: currentIndex,
    currentQuest: currentQuest,
    totalPoints: totalPoints
};

