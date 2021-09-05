
class Card { //this class holds the data for each card
    constructor (suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {  //this class puts the deck of cards together and shuffles it
    constructor () {
        this.cards = [];
    }

    createDeck() {
        let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let s = 0; s < suits.length; s++) {
            for (let r = 0; r < ranks.length; r++) {
                this.cards.push(new Card (suits[s], ranks[r], values[r]));
            }
        }
    }
  
    shuffleDeck() {
        const { cards } = this;
    let m = cards.length, i;

    while(m){
      i = Math.floor(Math.random() * m--);

      [cards[m], cards[i]] = [cards[i], cards[m]];
    }

    return this;
  }
}
   const deckInPlay = new Deck();
   deckInPlay.createDeck();
   deckInPlay.shuffleDeck();
   console.log(deckInPlay.cards) //wanted to create a checkpoint to make sure the above code was working

class Player {  //this class holds the data for the players, their name, what cards are in their hand, and what their score is
    constructor (name, playerCards) {
        this.playerName = name;
        this.playerCards = playerCards;
        this.playerScore = 0;
    }
    
    playCard() {  //this function takes a card from the playerCards array to pass into the playGame function
        return this.playerCards.pop();
    }

    tallyScore() {  //this function allows the player score to be increased by one if they win the turn
        this.playerScore++
    }
}
const player1 = new Player("Porthos", deckInPlay.cards.slice(0, 26)); //let's create a couple of players (Porthos is my dog and Trigger is my cat)!
const player2 = new Player("Trigger", deckInPlay.cards.slice(26, 52)); //I chose const instead of let because I wanted to make it consistant

console.log(player1); //another checkpoint to make sure everything populated correctly for each player object
console.log(player2);

function playGame(player1, player2) { //the function that actually executes the gameplay
    for (let i = 0; i < player1.playerCards.length; i++){
        if (player1.playerCards[i].value > player2.playerCards[i].value){
            player1.tallyScore();
            console.log(`${player1.playerName} receives a point.`);
        }
        else if (player1.playerCards[i].value < player2.playerCards[i].value){
            player2.tallyScore();
            console.log(`${player2.playerName} receives a point.`);
    }
        else {
            console.log(`${player1.playerName}'s card is the same value as ${player2.playerName}'s card. No points awarded.`)
    }
}
}
playGame(player1, player2); //let's play!

let player1Score = player1.playerScore; //creating a less bulky way to call the player's scores
let player2Score = player2.playerScore;

console.log(`${player1.playerName}'s final score is: ${player1Score}!`); //reporting the final scores
console.log(`${player2.playerName}'s final score is: ${player2Score}!`);

if (parseInt(player1Score) > parseInt(player2Score)){ //declaring the winner, my dog and cat seem to constantly be trying to prove who's best!
    console.log(`${player1.playerName} is the winner. Let the record show that dogs are better than cats.`);
}
else if (parseInt(player1Score) < parseInt(player2Score)){
    console.log(`${player2.playerName} is the winner. Let the record show that cats are better than dogs.`);
}
else console.log(`A draw. This question must be resolved, play again.`);