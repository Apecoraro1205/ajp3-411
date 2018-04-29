 var scores = [];
        var score = (prompt("Please enter your favorite word or end to stop entering words")); //prompt users for their favorite word
        while (score != 'end') { //end will terminate the loop
            scores.push(score);
            score = (prompt("Please enter your favorite word or end to stop entering words"));
        }

        var total_score = 0;
        for (var index = 0; index < scores.length; index++) {
            total_score += scores[index];
        }

        document.write("<h1>Your favorite words are " + scores.sort().join(", ") + "</h1>"); //sort will alphabetize word list