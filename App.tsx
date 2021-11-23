import React from 'react';
import { AppRouter } from './src/app/views/router/AppRouter';
import * as reducer from './src/app/views/store/reducers';
import { TaskContext } from './src/app/views/store/contexts/TaskContext';

function App () {

   const [ tasks, dispatchTask ] = React.useReducer( reducer.TaskReducer, reducer.stateTask );

   return (
     <TaskContext.Provider value={{tasks, dispatchTask}}>
       <AppRouter/>
     </TaskContext.Provider>
   );
 };

export default App;