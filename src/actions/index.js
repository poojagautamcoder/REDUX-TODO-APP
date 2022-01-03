export const addTodo = (data) =>{
    return {
        type : "ADD_ITEM",
        payload : {
            id : new Date().getTime().toString(),
            data : data,
            status : false,
            edit : false
       
        } 
      
    }
}
export const deleteTodo = (id) =>{
    console.log(id, 'ggggggggggggggggggggg');
    return {
        type : "DELETE_ITEM",
        payload : {
            id: id
        }
    }
}
export const editTodo = () =>{
    return {
        type : "EDIT_ITEM"
    }
}
export const updateTodo = () =>{
    return {
        type : "UPDATE_ITEM"
    }
}

export const checkStatus = () =>{
    return {
        type : "STATUS_ITEM"
    }
}

export const FilterTodo = () => {
    return {
        type : "FILTER_ITEM"
    }
}
export const RemoveTodo = () => {
    return {
        type : "REMOVE_TODO"
    }
}

