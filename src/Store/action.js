import firebase from './../Config/Firebase/firebase'
let database = firebase.database().ref("/")
function getData() {
  return dispatch => {
    firebase.database().ref('/').child('Todo').on('child_added', (tau) => {
       let data = tau.val()
       console.log(data)
        dispatch({
            type : "todoData",
            payload : data
        })
    })

    dispatch({
        type: "GetData"
    })
}
}

function add (todo) {
    let key = database.child("Todo").push().key
    todo.id= key;
    console.log(todo)
    database.child('Todo/' + key).set(todo)

return {
    type : "Add",
    // todo : todo
}
}

const delTodo= (ind,id)=>{
database.child('Todo/' + id).remove()
    console.log(ind,id)
    return{
        type:"DELETE",
        ind:ind
    }
}

const editTodo= (ind)=>{
 

    console.log(ind)
    return{
        type:"EDIT",
        ind:ind
    }
}

const cancel = (ind)=>{
    return{
        type:"CANCEL",
        ind:ind
    }
}

const update = (ind,updValue,id)=>{
    console.log(updValue);
    database.child('Todo/'+id).set(updValue)

return {
    type : "UPDATE",
    // updValue:updValue,
    ind:ind
    
}
}

export {add,delTodo,editTodo,cancel,update,getData}