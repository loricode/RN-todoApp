import { Action } from '../../../domain/interfaces';
import { GET_TASKS, ADD_TASK, DONE_TASK} from '../actions/actionTask';

export const stateTask = {
   listTask:[
      { id:1, title:"Making Wireframe", done:false },
      { id:2, title:"Create UI elements", done:true },
      { id:3, title:"Create UI elements", done:true }
   ]
}

export function TaskReducer(state = stateTask, action:Action){

   switch(action.type){
      case GET_TASKS:
         return {
            listTask:state.listTask
         }
      case ADD_TASK:
         return{
            listTask:[...state.listTask, action.payload!]
         } 
         
      case DONE_TASK:
      const result = state.listTask.filter(item=>item.id === action.payload)[0] 
      const filtered = state.listTask.filter(item=>item.id !== action.payload)  
      return{
         listTask:[...filtered, {...result, done:!result.done}] 
      }

      default:
       return state;
  }
}
