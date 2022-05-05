import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../ComponentCSS/QuizPage.css';
import Quiz from './Quiz';
import { connect } from 'react-redux';
import { ActionTypes } from '../constants/actionTypes';



const mapStateToProps = state => { return { ...state.quiz } };

const mapDispatchToProps = dispatch => ({
  onQuizLoad: payload => dispatch({ type: ActionTypes.QuizLoad, payload }),
  onPagerUpdate: payload => dispatch({ type: ActionTypes.PagerUpdate, payload })
});

class QuizPage extends Component {
  
  
  state = {
    quizes: [
      { id: 'data/javascript.json', name: 'Javascript' },
      { id: 'data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ],
    quizId: 'data/javascript.json',
    
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  }

  componentDidMount() {
    this.load(this.state.quizId);
  }

  load(quizId) {

    const examid = this.props.examid
    fetch('http://localhost:8080/api/question/vq/' + examid).then(res => res.json()).then(res => {
      // let quiz = res;
      let quiz = {};
      quiz.question = res;
      console.log(quiz);
      quiz.question.forEach(q => {
        q.selected = false;
        q.s_ans = "";
      });
      quiz.config = Object.assign(this.props.quiz.config || {}, quiz.config);
      console.log(quiz.config)
      this.pager.count = quiz.question.length / this.pager.size;
      this.props.onQuizLoad(quiz);
      this.props.onPagerUpdate(this.pager);
    });
  }

  onChange = (e) => {
    this.setState({ quizId: e.target.value });
    this.load(e.target.value);
  }

  render() {
    
    return (
      <div className="container">
    
        
        <Quiz quiz={this.state.quiz} quizId={this.state.quizId} mode={this.state.mode} />
        
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
