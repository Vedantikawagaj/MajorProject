import React from 'react';
import { useParams } from 'react-router-dom'
import QuizPage from './QuizPage';



function FunctionalQuiz() {

    const { eid } = useParams();
    // console.log(eid);

    return (
        <div>
            <QuizPage examid={eid}/>
        </div>
    );
}

export default FunctionalQuiz;