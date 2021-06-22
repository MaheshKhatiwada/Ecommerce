const initialState=[
    { id:1,name:"hello",age:23},
    {id:2,name:"world",age:25}
]

const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SET_PRODUCT":{
            return state;
        } 
        case "something":{
            return state;
        }
        default:
            return state;
    }
}

export default productReducer;