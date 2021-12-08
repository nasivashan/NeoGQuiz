// Quiz about me 

var readLineSync = require("readline-sync");
var username = readLineSync.question("Please Enter your name");
console.log("Hola!"+username);
console.log("Let's check how much you know me well");

var question = [ 
{
  question: "Am I 21 yr old",
  answer: "yes"
},

{
 question: "Where am I Living?",
 answer: "bangalore"
},

{
  question: "what's my favourite bike",
  answer: "ninja400"
}
]

var score =0;


function quiz (question,answer )
{
  var userinput = readLineSync.question(question);

  if(userinput == answer)
  {
    console.log("Wow! you got the answer");
    score = score ++;
  }
  else
  {
    console.log("Opps! you are wrong")
    score = score --; 
  }
 console.log("--------------------")
} 

for (i=0;i<question.length;i++)
{
  quiz(question[i].question,question[i].answer);
  console.log(score);

}
