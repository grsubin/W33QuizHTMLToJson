const cherrio = require("cheerio");
const fs = require('fs');


let questions = [];
const test = ` <h3>Question 1:</h3>
    <p>What are the three main 'simple types' in TypeScript?</p>
    <div class="radiocontainer correct selected" id="label3" style="padding-right:135px">
        <div class="markcontainer"><i class="fa fa-check"></i></div>Boolean, Number, String&nbsp;&nbsp;<span
            class="answercomment">&nbsp;&nbsp;Your answer&nbsp;&nbsp;</span>
    </div>
    <div class="radiocontainer" id="label2">Array, Object, Boolean</div>
    <div class="radiocontainer" id="label1">Object, String, Number</div>
    <div class="radiocontainer" id="label4">Object, Array, Symbol</div>
    <hr>
    <h3>Question 2:</h3>
    <p>What type of assignment is this variable, \`const fullName: string = 'Dylan Israel';\`?</p>
    <div class="radiocontainer wrong" id="label2" style="padding-right:135px">
        <div class="markcontainer"><i class="fa fa-times"></i></div>Implicit&nbsp;&nbsp;<span
            class="answercomment">&nbsp;&nbsp;Your answer&nbsp;&nbsp;</span>
    </div>
    <div class="radiocontainer correct" id="label1" style="padding-right:160px">Explicit&nbsp;&nbsp;<span
            class="answercomment">&nbsp;&nbsp;Correct answer&nbsp;&nbsp;</span></div>
    <hr>`;

const htmlFile = fs.readFileSync('./quiz.html', 'utf-8');
const $ = cherrio.load(htmlFile);

$("p").each((i, el) => {
  const question = $(el).text().trim();
  let answer;
  let choices = [];
//   console.log("next");

  $(el)
    .nextUntil("hr")
    .each((i, el) => {
      if (el.attributes[0].value.toString().includes("correct")) {
        answer = $(el).text().trim().replace("Your answer", "").replace("Correct answer", "").trimEnd();
        // console.log('answer:',answer);
      }
      if(el.attributes[0].value.toString().includes("correct selected")){
        let choice = $(el).text().trim().replace("Your answer", "").trimEnd();
        choices.push(choice);
      }else if(el.attributes[0].value.toString().includes("correct")){

        let choice = $(el).text().trim().replace("Correct answer", "").trimEnd();
        choices.push(choice);
      }else if(el.attributes[0].value.toString().includes("wrong")){
        let choice = $(el).text().trim().replace("Your answer", "").trimEnd();
        choices.push(choice);

      }else{

        let choice = $(el).text().trim();
        choices.push(choice);
      }
    });

    // console.log(choices);
  questions.push({ Question: question,Info: '', Options: choices, Answer: answer });
});
// console.log(JSON.stringify(questions));
const result = [
    {
        Name: 'Typescript',
        Id: 'TS',
        Questions: questions
    }
];
// console.log("const questions = ["+ JSON.stringify(result) + "]");

fs.writeFileSync("./Quiz Json.json", JSON.stringify(result));
console.log('Find the results is in "Quiz Json.json" file');
