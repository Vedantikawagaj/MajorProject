const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Exam = db.exam;
const Question = db.question;
const ReportLog = db.reportlog
const nodemailer = require("nodemailer");
exports.generateExam = (req, res) => {
    console.log(req.body);
    const uid = req.params.uid;
    const exam = new Exam({
        userid: uid,
        title: req.body.title,
        duration: req.body.duration,
        totalMarks: req.body.totalMarks,
        examDate: req.body.examDate,
        examMonth: req.body.examMonth,
        _id: Math.floor(Math.random() * 9945365487)
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
    const uid = req.params.uid;
    Exam.find({ userid: uid })
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: "No Exams found"
                })
            else {
                // console.log(data[2].duration.getUTCMinutes());
                res.status(200).send(data);

            }
        }).catch((err) => {
            console.log(err)
            res.status(500).send({
                message: "Server error"
            })
        })

};

exports.viewParticularExam = (req, res) => {
    const eid = req.params.eid;
    Exam.find({ _id: eid })
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: "No Exams found"
                })
            else {
                // console.log(data[2].duration.getUTCMinutes());
                res.status(200).send(data);

            }
        }).catch((err) => {
            res.status(500).send({
                message: "Server error"
            })
        })

};

exports.generateLog = (req, res) => {
    console.log(req.body);
    const uid = req.body.uid;
    const log = new ReportLog({
        userid: uid,
        log: req.body.log,
        timestamp: req.body.timestamp,
        examid: req.body.examid,
        _id: Math.floor(Math.random() * 9945365487)
    });

    log.save((err, log) => {
        if (err) {
            res.status(500).send({ message: err });
            console.log(err)
            return;
        }

        if (req.body) {
            log.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    console.log(err)
                    return;
                }

                res.send({ message: "log created successfully!" });
            });

        }
    });
};

exports.viewLogOfExam = (req, res) => {
    const eid = req.body.eid;
    ReportLog.find({ examid: eid })
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: "No Exams found"
                })
            else {
                // console.log(data[2].duration.getUTCMinutes());
                res.status(200).send(data);

            }
        }).catch((err) => {
            res.status(500).send({
                message: "Server error"
            })
        })

};

exports.searchExam = (req, res) => {
    const eid = req.body.eid;
    Exam.find({ _id: eid })
        .then((data) => {
            if (data.length === 0)
                res.status(404).send({
                    status: 404
                })
            else {
                res.status(200).send({
                    status: 200,
                    msg: data
                })

            }
        }).catch((err) => {
            res.status(500).send({
                status: 500
            })
        })

};

exports.deleteExam = (req, res) => {

    const examid = req.params.examid;
    Exam.findByIdAndRemove(examid).then((data) => {
        if (!data)
            res.status(404).send({
                message: "No Exam found"
            })
        else {
            res.status(200).send(data);
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Server error"
        })
    })

};

exports.updateExam = (req, res) => {

    const examid = req.params.examid;
    Exam.findByIdAndUpdate(examid, {
        // examid: parseInt(examid),
        title: req.body.title,
        duration: req.body.duration,
        totalMarks: req.body.totalMarks,
        examDate: req.body.examDate
    }, { useFindAndModify: false }).then((data) => {
        if (!data)
            res.status(404).send({
                message: "No Exam found"
            })
        else {
            res.status(200).send(data);
        }
    }).catch((err) => {
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
        marks: req.body.marks,
        _id: Math.floor(Math.random() * 9945365487)
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
                    _id: req.body.examid
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

exports.viewQuestion = (req, res) => {
    const examid = req.params.examid;
    Question.find({ examid: examid }, (err, data) => {
        if (!data)
            res.status(404).send({
                message: "No Questions found"
            })
        else {
            res.status(200).send(data);
        }

    })

};

exports.deleteQuestion = (req, res) => {

    const qid = req.params.qid;
    Question.findByIdAndRemove(qid).then((data) => {
        if (!data)
            res.status(404).send({
                message: "No questions found"
            })
        else {
            res.status(200).send(data);
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Server error"
        })
    })

};

exports.updateQuestion = (req, res) => {

    const qid = req.params.qid;
    Question.findByIdAndUpdate(qid, {
        // examid: parseInt(examid),
        examid: req.body.examid,
        question: req.body.question,
        a: req.body.a,
        b: req.body.b,
        c: req.body.c,
        d: req.body.d,
        ans: req.body.ans,
        marks: req.body.marks
    }, { useFindAndModify: false }).then((data) => {
        if (!data)
            res.status(404).send({
                message: "No Question found"
            })
        else {
            res.status(200).send(data);
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            message: "Server error"
        })
    })
    // Exam.findByIdAndRemove(examid)

};

exports.viewParticularQuestion = (req, res) => {
    const qid = req.params.qid;
    Question.find({ _id: qid })
        .then((data) => {
            if (!data)
                res.status(404).send({
                    message: "No question found"
                })
            else {
                // console.log(data[2].duration.getUTCMinutes());
                res.status(200).send(data);

            }
        }).catch((err) => {
            res.status(500).send({
                message: "Server error"
            })
        })

};


exports.sendmail = async (req, res) => {
    console.log("hello", req.body)
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "rajsahoo7350@gmail.com", // generated ethereal user
            pass: "apnakaamkar", // generated ethereal password
        },
    });

    // send mail with defined transport object
    transporter.sendMail({
        from: '<noreply@apnakaamkar.gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Exam Credentials", // Subject line
        text: "Hello Students...This is your test id " + req.body.examid, // plain text body
        //   html: "<b>Hello world?</b>", // html body
    }, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(info.messageId);
        }
    });

    // console.log("Message sent: %s", info);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>





};
