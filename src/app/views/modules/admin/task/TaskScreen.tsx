import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function TaskHome(){
   
   return (
     <View style={{flex:1, marginHorizontal:10}}>
         
         <Text>Title</Text>
         <TextInput  style={styles.input} placeholder="Design Team meeting"/>
         
         <Text>Deadline</Text>
         <View >
         <TouchableHighlight style={styles.button}
          onPress={()=> null}
         >
               <Ionicons name="chevron-down" size={24} color={"gray"} />
       </TouchableHighlight>
       </View>

   
     </View>
   );
}

const styles = StyleSheet.create({
   input:{
      backgroundColor:'#E7EDEE',
      padding:10,
      borderRadius:6,
      marginBottom:6
   },
   button:{
      flexDirection:'column-reverse',
      padding:10,
      marginHorizontal:10,
      borderRadius:8,
      marginBottom:10
   },
   textButton:{
      color:'gray',
      textAlign:'center'
   }
})