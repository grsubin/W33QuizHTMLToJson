# W33QuizHTMLToJson

Add Html quizcontainer id = 'quizcontainer' after taking hte w33 quiz in to quiz.html

remove the initial p tag, so it should look something like this:

"<div id="quizcontainer">
    <h3>Question 1:</h3>
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
    <hr>
</div>"



