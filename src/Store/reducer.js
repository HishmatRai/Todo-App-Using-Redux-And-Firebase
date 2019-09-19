const INITIAL_STATE = {
    name : []
}

const reducer = (state= INITIAL_STATE,action)=>{
    console.log(action)

switch (action.type) {
    case "todoData" : state.name.push(action.payload)
    return{
        name : state.name
    }


    case "Add" : 
    // state.name.push(action.todo)
    return {
        name : state.name
    }

    case "DELETE" : 
    state.name.splice(action.ind,1)
    return {
        name : state.name
    }
    case "EDIT" : 
    console.log(action.ind)
  state.name[action.ind].edit = false
  console.log(state.name[action.ind])
    return {
        name : state.name
    }
    case "CANCEL" : 
    state.name[action.ind].edit = true
      return {
          name : state.name
      }
      case "UPDATE" : 
      state.name[action.ind].edit = true
    //   state.name[action.ind].name = action.updValue;
        return {
          ...state, name : state.name.concat()
        }
    default : return state
}

}
export default reducer