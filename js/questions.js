(function () {
  const titleQuestions = [...document.querySelectorAll(".questions__title")];
  console.log(titleQuestions);

  titleQuestions.forEach((question) => {
    question.addEventListener("click", (e) => {
      let height = 0;
      let answer = question.nextElementSibling;

      question.children[0].classList.toggle("questions__arrow--rotate");

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      answer.style.height = `${height}px`;
    });
  });
})();
