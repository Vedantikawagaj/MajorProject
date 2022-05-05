import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import QuizPage from './QuizPage';
import Timer from './Timer';



function FunctionalQuiz() {
    let [exams, setexams] = useState([]);
    let [time, settime] = useState([]);
    const { eid } = useParams();
    const GetExam = async () => {

        const res = await fetch('http://localhost:8080/api/exam/vpe/' + eid, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'

            },
        })

        const data = await res.json();
        const date = new Date(data[0].duration);
        settime(date.getTime())
        setexams(data)
    }
    useEffect(() => {
  
        GetExam()
    }, [])

    return (
        <div>
            <Timer timer={time}/>
            <QuizPage examid={eid}/>
        </div>
    );
}

export default FunctionalQuiz;