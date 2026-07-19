/* Simple interactive quiz engine.
   Each story page defines a global QUIZ array:
   [{ q: "question", opts: ["a","b","c","d"], answer: 1, yay: "...", nope: "..." }, ...]
   and includes <div id="quiz"></div> plus this script. */

(function () {
  var root = document.getElementById("quiz");
  if (!root || typeof QUIZ === "undefined") return;

  var answered = 0;
  var score = 0;
  var cheers = ["Amazing! 🎉", "Wise as King Solomon! 👑", "Brave as Joshua! 🎺", "Brilliant! ⭐"];

  var box = document.createElement("div");
  box.className = "quiz-box";
  box.innerHTML =
    '<h2>🧠 Story Check!</h2>' +
    '<p class="quiz-intro">Were you paying attention, young explorer? Pick an answer for each question!</p>';

  QUIZ.forEach(function (item, qi) {
    var q = document.createElement("div");
    q.className = "q";
    var qt = document.createElement("div");
    qt.className = "q-text";
    qt.textContent = (qi + 1) + ". " + item.q;
    q.appendChild(qt);

    var opts = document.createElement("div");
    opts.className = "opts";

    var feedback = document.createElement("div");
    feedback.className = "feedback";

    item.opts.forEach(function (optText, oi) {
      var b = document.createElement("button");
      b.className = "opt";
      b.type = "button";
      b.textContent = String.fromCharCode(65 + oi) + ". " + optText;
      b.addEventListener("click", function () {
        // lock all buttons in this question
        var btns = opts.querySelectorAll("button");
        for (var i = 0; i < btns.length; i++) btns[i].disabled = true;
        btns[item.answer].classList.add("correct");
        if (oi === item.answer) {
          score++;
          feedback.textContent = "✅ " + item.yay;
          feedback.classList.add("yay");
        } else {
          b.classList.add("wrong");
          feedback.textContent = "❌ " + item.nope;
          feedback.classList.add("nope");
        }
        feedback.classList.add("show");
        answered++;
        if (answered === QUIZ.length) showScore();
      });
      opts.appendChild(b);
    });

    q.appendChild(opts);
    q.appendChild(feedback);
    box.appendChild(q);
  });

  var scoreEl = document.createElement("div");
  scoreEl.className = "quiz-score";
  box.appendChild(scoreEl);
  root.appendChild(box);

  function showScore() {
    var msg;
    if (score === QUIZ.length) msg = "🏆 PERFECT! " + score + "/" + QUIZ.length + " — " + cheers[Math.floor(Math.random() * cheers.length)];
    else if (score >= QUIZ.length - 1) msg = "🌟 So close! " + score + "/" + QUIZ.length + " — almost perfect!";
    else if (score >= Math.ceil(QUIZ.length / 2)) msg = "👍 Nice work! " + score + "/" + QUIZ.length + " — read again to catch the tricky ones!";
    else msg = "📖 You got " + score + "/" + QUIZ.length + ". Read the story once more — the answers are hiding in there!";
    scoreEl.textContent = msg;
    scoreEl.classList.add("show");
    scoreEl.scrollIntoView({ behavior: "smooth", block: "center" });
  }
})();
