import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
    
    renderActions() {
        return (  
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className='ui button negative'>Delete</button>
                <Link to="/" className='ui button'>Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        return `Are you Are you sure you want to delete stream - ${this.props.stream ? this.props.stream.title : ''}?`
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        console.log(this.props.match.params.id)
    }
    
    render() {
        return(
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);