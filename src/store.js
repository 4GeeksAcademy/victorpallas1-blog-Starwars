export const initialStore=()=>{
  return{
    people:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'load_people':
      console.log("People loaded")
      let newStore={...store}
      newStore.people=action.payload
      return newStore
      //lo comentado abajo es igual a lo de arriba pero en una linea
      //return {...store,people:action.payload}
    default:
      throw Error('Unknown action.')

  }
}