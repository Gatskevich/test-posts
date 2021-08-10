const initialState = {
    post: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_LOADED':
            return {
                ...state,
                post: action.payload,
                loading: false,
                error: false
            };
        case 'POST_REQUESTED':
            return {
                ...state,
                post: state.post,
                loading: true,
                error: false
            };
        case 'POST_ERROR':
            return {
                ...state,
                post: state.post,
                loading: true,
                error: true
            };
        case 'ITEM_REMOVE_FROM_CART':
            return {
                ...state,
                post: state.post.filter(item => item.id !== action.payload),
                loading: false,
                error: false
            };    
        case 'ITEM_ADD_FROM_CART':
            let  maxid = 0;
            state.post.map(function(obj){     
                if (obj.id > maxid) 
                    maxid = obj.id;    
            });
            action.payload.id = ++maxid;
            return {
                ...state,
                post: [...state.post, action.payload],
                loading: false,
                error: false,
            };       
        default: 
            return state;
    }
}

export default reducer;