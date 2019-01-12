const fs = require('fs');
const readline = require('readline');

let filename = "teachers.csv";

const rl = readline.createInterface({
    input: fs.createReadStream(filename),
    crlfDelay: Infinity
});

line();
console.log("email addresses");
line();

rl.on('line', (line) => {
    let name = line.split(';');
    let email = getMailAddress(name[1], name[0]);
    console.log(email)
}).on('close', () => {
    line();
});

function line() {
    console.log("---------------------------------")
}

function getMailAddress(firstName, lastName) {
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    lastName = lastName.replace("ä", "ae");
    lastName = lastName.replace("ö", "oe");
    lastName = lastName.replace("ü", "ue");
    return firstName.charAt(0) + "." + lastName + "@htl-leonding.ac.at";
}

