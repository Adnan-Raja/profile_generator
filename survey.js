// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.question(`What's an activity you like doing?`, (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the first Name ? ', (answer1) => {
  rl.question(`Please enter the last Name : `, (answer2) => {
    rl.question(`What's an activity you like doing ? `, (answer3) => {
      rl.question(`What do you listen to while doing that ? `, (answer4) => {
        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) ? `, (answer5) => {
          rl.question(`What's your favourite thing to eat for that meal ? `, (answer6) => {
            rl.question(`Which sport is your absolute favourite ? `, (answer7) => {
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer8) => {

                console.log(` First Name: ${answer1} \n Last Name: ${answer2} \n Favourite Activity: ${answer3} \n Favourite Music:  ${answer4} \n Favourite Meal: ${answer5} \n Favourite Food: ${answer6} \n Favourite Sport: ${answer7} Superpower: ${answer8}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});
