let readline = require('readline');
let grade = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

grade.question('Enter your grade: ', function (answer){
    console.log('Your grade is ' + answer)

})
