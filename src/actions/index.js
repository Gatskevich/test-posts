
const postLoaded = (newPost) => {
    return {
        type: 'POST_LOADED',
        payload: newPost
    }
}

const postRequested = () => {
    return {
        type: 'POST_REQUESTED',
    }
}

const postError = () => {
    return {
        type: 'POST_ERROR',
    }
}

const deleteFromPost = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
}

const addFromCart = (newItem) => {
    return {
        type: 'ITEM_ADD_FROM_CART',
        payload: newItem
    }
}

export {
    postLoaded,
    postRequested,
    postError,
    deleteFromPost,
    addFromCart
    
};