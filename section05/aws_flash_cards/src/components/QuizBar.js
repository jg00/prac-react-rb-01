import React from "react";
import QuizType from "./QuizType";

function QuizBar(props) {
  const quizArray = [
    { icon: "dice", type: "Random" },
    { icon: "file-alt", type: "Regular" },
    { icon: "dumbbell", type: "Weighted" },
    { icon: "font", type: "Multi" }
  ];

  const quizTypes = quizArray.map((qt, index) => {
    return (
      <QuizType
        key={index}
        icon={qt.icon}
        quizType={qt.type}
        userChoice={props.userChoice}
      />
    );
  });

  return (
    <div className="quiz-bar">
      <h1>Choose your study type</h1>
      <ul className="nav nav-pills nav-fill">
        {quizTypes}

        {/* <QuizType icon="dice" quizType="Random" userChoice={props.userChoice} />
        <QuizType
          icon="file-alt"
          quizType="Regular"
          userChoice={props.userChoice}
        />
        <QuizType
          icon="dumbbell"
          quizType="Weighted"
          userChoice={props.userChoice}
        />
        <QuizType icon="font" quizType="Multi" userChoice={props.userChoice} /> */}
      </ul>
    </div>
  );
}

export default QuizBar;

/*
https://github.com/FortAwesome/react-fontawesome
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome
*/
