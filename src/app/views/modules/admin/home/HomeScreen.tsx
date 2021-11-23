import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { interfaces } from '../../includes';
import { TaskContext } from '../../../store/contexts/TaskContext';
import { CheckBox } from 'react-native-elements';
import { DONE_TASK } from '../../../store/actions/actionTask';


export  function HomeScreem({navigation}:any){
    
   const { tasks, dispatchTask }: any = React.useContext(TaskContext);
 
   return (
      <View style={{flex:1, backgroundColor:'#FFF'}}>
           <Text style={styles.title}>Completed tasks</Text>    
         { tasks.listTask.map((item:interfaces.Task) => {

           if(item.done){
              return (
              <CheckBox
                key={item.id}
                checkedColor={'red'}
                containerStyle={{backgroundColor:'#FFF', borderWidth:0}}
                onPress={()=>dispatchTask({type:DONE_TASK, payload:item.id})}
                title={item.title}
                checked={item.done}
           /> );
           }   
         })}
       
       <Text style={styles.title}>Pending tasks</Text>  
         { tasks.listTask.map((item:interfaces.Task)=>{

            if(!item.done){
               return (
               <CheckBox
                 key={item.id}
                 checkedColor={'red'}
                 containerStyle={{backgroundColor:'#FFF',borderWidth:0}}
                 onPress={()=>dispatchTask({type:DONE_TASK, payload:item.id})}
                 title={item.title}
                 checked={item.done}
            /> );
            } 
          })}
 
        <View style={{flex:2, flexDirection:'column-reverse'}}>
       <TouchableHighlight style={styles.button}
       onPress={()=>navigation.navigate('Task')}
       >
          <Text style={styles.textButton}>Add to task</Text>
       </TouchableHighlight>
       </View>
      </View>
   );
}


const styles = StyleSheet.create({
  title:{
     fontSize:18,
     marginLeft:15,
     fontWeight:"bold",
     color:'gray',
     paddingTop:15
  },
  button:{
     flexDirection:'column-reverse',
     padding:10,
     backgroundColor:'green',
     marginHorizontal:10,
     borderRadius:8,
     marginBottom:10
  },
  textButton:{
     color:'#FFF',
     textAlign:'center'
  }
})