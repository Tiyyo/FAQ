function FAQ() {
  const btn_1 = document.querySelector(".btn_1");
  const btn_2 = document.querySelector(".btn_2");
  const btn_3 = document.querySelector(".btn_3");
  const btn_4 = document.querySelector(".btn_4");
  const btn_5 = document.querySelector(".btn_5");
  const answer1 = document.querySelector(".answer_1");
  const answer2 = document.querySelector(".answer_2");
  const answer3 = document.querySelector(".answer_3");
  const answer4 = document.querySelector(".answer_4");
  const answer5 = document.querySelector(".answer_5");
  const question_1 = document.querySelector(".question_1");
  const question_2 = document.querySelector(".question_2");
  const question_3 = document.querySelector(".question_3");
  const question_4 = document.querySelector(".question_4");
  const question_5 = document.querySelector(".question_5");

  btn_1.addEventListener("click", () => {
    btn_1.classList.toggle("spin__arrow");
    answer1.classList.toggle("answers__active");
    question_1.classList.toggle("text__active");
  });
  btn_2.addEventListener("click", () => {
    btn_2.classList.toggle("spin__arrow");
    answer2.classList.toggle("answers__active");
    question_2.classList.toggle("text__active");
  });
  btn_3.addEventListener("click", () => {
    btn_3.classList.toggle("spin__arrow");
    answer3.classList.toggle("answers__active");
    question_3.classList.toggle("text__active");
  });
  btn_4.addEventListener("click", () => {
    btn_4.classList.toggle("spin__arrow");
    answer4.classList.toggle("answers__active");
    question_4.classList.toggle("text__active");
  });
  btn_5.addEventListener("click", () => {
    btn_5.classList.toggle("spin__arrow");
    answer5.classList.toggle("answers__active");
    question_5.classList.toggle("text__active");
  });
}
FAQ();
