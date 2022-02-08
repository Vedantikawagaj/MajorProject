const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Exam = db.exam;
const Question = db.question;

exports.generateExam = (req, res) => {
    const exam = new Exam({
        examid: req.body.examid,
        title: req.body.title,
        duration: req.body.duration,
        totalMarks: req.body.totalMarks
    });

    exam.save((err, exam) => {
        if (err) {
            res.status(500).send({ message: err });
            console.log(err)
            return;
        }

        if (req.body) {
            exam.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    console.log(err)
                    return;
                }

                res.send({ message: "Exam created successfully!" });
            });

        }
    });
};

exports.viewExam = (req, res) => {
    
    Exam.find().then((data)=>{
        if(!data)
            res.status(404).send({
                message: "No Exams found"
            })
        else{
            res.status(200).send(data);
        }    
    }).catch((err)=>{
        res.status(500).send({
            message: "Server error"
        })
    })
    
};

exports.deleteExam = (req, res) => {
    
    const examid = req.params.examid;
    Exam.findByIdAndRemove(examid).then((data)=>{
        if(!data)
            res.status(404).send({
                message: "No Exam found"
            })
        else{
            res.status(200).send(data);
        }    
    }).catch((err)=>{
        res.status(500).send({
            message: "Server error"
        })
    })
    
};

exports.updateExam = (req, res) => {
    
    const examid = req.params.examid;
    Exam.findByIdAndUpdate(examid,{
        examid: parseInt(examid),
        title: req.body.title,
        duration: req.body.duration,
        totalMarks: req.body.totalMarks
    },{useFindAndModify:false}).then((data)=>{
        if(!data)
            res.status(404).send({
                message: "No Exam found"
            })
        else{
            res.status(200).send(data);
        }    
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({
            message: "Server error"
        })
    })
    // Exam.findByIdAndRemove(examid)
    
};

exports.generateQuestion = (req, res) => {
    const question = new Question({
        examid: req.body.examid,
        question: req.body.question,
        a: req.body.a,
        b: req.body.b,
        c: req.body.c,
        d: req.body.d,
        ans: req.body.ans,
        marks: req.body.marks
    });

    question.save((err, question) => {
        if (err) {
            res.status(500).send({ message: err });
            console.log(err)
            return;
        }

        if (req.body.examid) {
            Exam.findOne(
                {
                    examid: req.body.examid
                },
                (err) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        console.log(err)
                        return;
                    }

                    //   user.roles = roles.map(role => role._id);
                    question.save(err => {
                        if (err) {
                            res.status(500).send({ message: err });
                            console.log(err)
                            return;
                        }

                        res.send({ message: "Question was entered successfully!" });
                    });
                }
            );
        }
    });
};



