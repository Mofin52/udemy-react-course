import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure, you want to live in Moscow?</div>
            </ApprovalCard>
            <ApprovalCard>                
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    commentText="Super! Love it!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    commentText="Not as fresh idea as it could be"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Julia"
                    timeAgo="Yesterday at 5:00PM"
                    commentText="React is awesome"
                    avatar={faker.image.avatar()
                }/>
            </ApprovalCard>

        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));