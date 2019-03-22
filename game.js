    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["rock", "paper", "scissors"];
    var userScoreView = document.getElementById('user-score');

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);
      
    if ((userGuess === "r") && (computerGuess === computerChoices[2])){
        alert("User Wins!");
    }
    else if ((userGuess === "r") && (computerGuess === computerChoices[0])){
        alert("Its a Tie");
    }
    else if ((userGuess === "r") && (computerGuess === computerChoices[1])){
        alert("User Loses!");
    }
    else if ((userGuess === "p") && (computerGuess === computerChoices[1])){
        alert("Its a Tie");
    }
    else if ((userGuess === "p") && (computerGuess === computerChoices[0])){
        alert("User Wins!");
    }
    else if ((userGuess === "p") && (computerGuess === computerChoices[2])){
        alert("User Loses!");
    }
    else if ((userGuess === "s") && (computerGuess === computerChoices[1])){
        alert("User Wins!");
    }
    else if ((userGuess === "s") && (computerGuess === computerChoices[0])){
        alert("User Loses!");
    }
    else 
        alert("Its a Tie");
    };