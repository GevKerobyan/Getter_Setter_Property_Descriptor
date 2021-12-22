`use strict`

let getBestStudent = {
    John: [100, 90, 80],
    Bob: [100, 70, 80],
    Jack: [80, 60, 50],
}

console.log(topGPA(getBestStudent));

function topGPA(studScores) {

    let scoreCount = 0;
    let theDude;

    for (key in studScores) {
        function count(acc, item) {
            return (acc += item);
        }

        if (studScores[key].reduce(count) / studScores[key].length > scoreCount) {
            theDude = key;
            scoreCount = studScores[key].reduce(count) / studScores[key].length;
        }
    }
    return (`The dude is ${theDude} with the score of ${scoreCount.toFixed(2)}!!!`);
}