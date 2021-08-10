 
import React, {Component} from 'react';
import PostListItem from '../post-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
// import { DetailsList,
//     MarqueeSelection,
//     DetailsRow,
//     SelectionMode,
//     DetailsRowCheck,
//     } from '@fluentui/react/lib/DetailsList';
// import { setIconOptions } from '@fluentui/react/lib/Styling';
import {postLoaded, postRequested, postError, deleteFromPost} from '../../actions';

import Spinner from '../spinner';
import Error from '../error';

import './post-list.scss';


// setIconOptions({
//     disableWarnings: true
//   });
class PostList extends Component {

    componentDidMount() {
        this.props.postRequested();
    
        const {RestoService} = this.props;
        RestoService.getPostItems()
            .then(res => this.props.postLoaded(res))
            .catch(error => this.props.postError());
    }

    render() {
        const {postItems, loading, error, deleteFromPost} = this.props;
        if (error){
            return <Error/>
        }
        if (loading) {
            return <Spinner/>
        }
        const items = postItems.map(postItem => {
            // let columns = [
            //     {key: 'column1', name: 'Name', fieldName: 'title', minWidth: 400, maxWidth: 600,  isResizable: true},
            //     { key: 'column2', name: 'Value',fieldName: 'body', minWidth: 400, maxWidth: 600,  isResizable: true},
            // ];
            
            
            return ( 
                
                    // <DetailsList
                    
                    //     items={postItems}
                    //     columns={columns}
                    //     selectionMode={console.log("hi")}
                    // />
                <PostListItem 
                    key = {postItem.id} 
                    postItem = {postItem }
                    onRemoveToPost = {() => {
                        if(window.confirm("You want to delete ?")){
                                deleteFromPost(postItem.id)
                        }
                    }
                }/>
            )
            
   
        })
        return (
            <View items = {items}/> 
            )
        
    }
   
    
    
};

const mapStateToProps =  (state) =>{
    return {
        postItems: state.reducer.post,
        loading: state.reducer.loading,
        error: state.reducer.error
    }
}


const mapDispatchToProps = {
    postLoaded: postLoaded,
    postRequested,
    postError,
    deleteFromPost
}


const View = ({items}) => {

    return (
        <ul className="post__list">
            {items}
        </ul>
    ) 
}

export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(PostList) );