import React, { Component } from 'react';
import { ActionTypes } from '../constants/actionTypes';
import { connect } from 'react-redux';
import '../ComponentCSS/Questions.css'
import FaceApi from './FaceApi';
const mapStateToProps = state => ({ ...state.quiz, ...state.mode, ...state.pager });

const mapDispatchToProps = dispatch => ({
    onAnswer: payload => dispatch({ type: ActionTypes.QuizAnswer, payload })
});

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ans: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, q) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            },
            () => {
                this.onAnswer(q, this.state.ans)
            });
        // console.log(q)
    }
    onAnswer(question, a) {
        let quiz = JSON.parse(JSON.stringify(this.props.quiz));
        let q = quiz.question.find(x => x._id === question._id);

        q.selected = true;
        q.s_ans = a;

        // q.options.find(x => x.id === option.id).selected = true;
        this.props.onAnswer(quiz);
        // console.log(this.state.ans)
    }


    render() {

        let questions = (this.props.quiz.question) ?
            this.props.quiz.question.slice(this.props.pager.index, this.props.pager.index + this.props.pager.size) : [];

        return (
            <div id="quiz">
                {/* <h2 className="text-center font-weight-normal">{this.props.quiz.name}</h2> */}
                <hr />
                {questions.map(q =>
                    <div key={q._id}>
                        <div className="badge badge-info">Question {this.props.pager.index + 1} of {this.props.pager.count}</div>
                        <h3 className="font-weight-normal">{this.props.pager.index + 1}. <span>{q.question}</span></h3>
                        <div className="row text-left options" onChange={e => { this.handleChange(e, q) }}>

                            <div className="col-6">
                                <div className="option">
                                    <label className="font-weight-normal" >
                                        <input type="radio" name="ans" value={q.a} checked={q.s_ans === q.a} />
                                        {q.a}
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="option">
                                    <label className="font-weight-normal" >
                                        <input type="radio" name="ans" value={q.b} checked={q.s_ans === q.b} />
                                        {q.b}
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="option">
                                    <label className="font-weight-normal" >
                                        <input type="radio" name="ans" value={q.c} checked={q.s_ans === q.c} />
                                        {q.c}
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="option">
                                    <label className="font-weight-normal" >
                                        <input type="radio" name="ans" value={q.d} checked={q.s_ans === q.d} />
                                        {q.d}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <hr />
                <div className="text-center">
                    {this.props.quiz.config.allowBack && <button id="first" className="btn btn-secondary" onClick={this.props.move}>First</button>}
                    {this.props.quiz.config.allowBack && <button id="prev" className="btn btn-secondary" onClick={this.props.move}>Prev</button>}
                    <button id="next" className="btn btn-secondary" onClick={this.props.move}>Next</button>
                    <button id="last" className="btn btn-secondary" onClick={this.props.move}>Last</button>
                </div>
                <FaceApi  examid={this.props.examid}/>
            </div >
            
        )


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);