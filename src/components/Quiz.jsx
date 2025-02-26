import { useCallback, useState } from "react";
import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz({userLanguage,practiceLanguage}){   
    const [userAnswers,setUserAnswers] = useState([]); 

    const activeQuestionIndex = userAnswers.length;
    const questionSetKey = `${userLanguage}To${practiceLanguage}`;
    const questionSet = QUESTIONS[questionSetKey];  

    const quizIsComplete = activeQuestionIndex === questionSet.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUserAnswers)=>{
            return [...prevUserAnswers,selectedAnswer];
        });
    },[]);

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer] );

    if(quizIsComplete){
        return <Summary userAnswers={userAnswers} userLanguage={userLanguage} practiceLanguage={practiceLanguage} />;
    }

    return( 
        <div id="quiz">
            <Question 
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                userLanguage={userLanguage}
                practiceLanguage={practiceLanguage}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />     
        </div>
    ); 
 }