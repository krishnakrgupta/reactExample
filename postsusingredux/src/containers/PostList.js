import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllPosts }  from '../actions/post.actions'

class PostList extends Component {
    

    componentDidMount(){
        this.props.getAllPosts(); 
    }

    render(){
        console.log("props=>",this.props.postObj);
        if(this.props.postObj)
        return (<div>
            {this.props.postObj.map((data,index) => (
                <p key={index}>Hello, {data.title}</p>
            ))}
            </div>);
    }
}

const mapStateToProps = state => {
    //console.log(state);
    return {
        postObj: state.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllPosts: bindActionCreators(getAllPosts,dispatch)
        //getAllPosts: getAllPosts(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);