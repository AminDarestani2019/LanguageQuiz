import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from '../questions.js';

export default function Question({
    index,
    userLanguage,
    practiceLanguage,
    onSelectAnswer,
    onSkipAnswer
}){
    const [answer,setAnswer] = useState({
        selectedAnswer:'',
        isCorrect:null
    });

    const questionSetKey = `${userLanguage}To${practiceLanguage}`;
    const questionSet = QUESTIONS[questionSetKey];
    const question = questionSet[index];

    let timer = 10000;
    if(answer.selectedAnswer){
        timer=1000;
    }
    if(answer.isCorrect !== null){
        timer=2000;
    }

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
        });

        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                isCorrect:question.answers[0] === answer 
            });

            setTimeout(() =>{
                onSelectAnswer(answer);
            },2000);
        },1000);
    }

    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect?'correct':'wrong';
    }else if(answer.selectedAnswer){
        answerState='answered';
    }
    return (
        <div id="question">
            <QuestionTimer 
                key={timer}
                timeout={timer} 
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer:null} 
                mode={answerState}
            />
            <h2>{question.text}</h2>
            <Answers 
                answers={question.answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
}