import React, { Component } from 'react';
import FaceApi from './FaceApi';
class Review extends Component {
    isAnswered = (q) => {
        return q.selected ? 'Answered' : 'Not Answered';
    }

    render() {
        return (
            <div>
                {/* <h2 className="text-center font-weight-normal">Review Quiz: {this.props.quiz.name}</h2> */}
                
                <h2 className="text-center font-weight-normal">Review Quiz:</h2>
                <hr />
                <div className="row text-center">
                    {this.props.quiz.question.map((q, index) =>
                        <div key={q._id} className="col-4 cursor-pointer">
                            <div id={index} onClick={this.props.move} className={`p-3 mb-2 ${this.isAnswered(q) === 'Answered' ? 'bg-info' : 'bg-warning'}`}>{index + 1}. {this.isAnswered(q)}</div>
                        </div>
                    )}
                </div>
                <FaceApi/>
            </div >
        )
    }
}

export default Review;