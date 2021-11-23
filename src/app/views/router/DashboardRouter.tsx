import React from 'react';
import { Button, Alert,TouchableHighlight, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import * as admin from '../modules/admin';

export function DashboardRouter(){
   return (
      <Stack.Navigator>
        <Stack.Screen   
          name="Home"
          component={admin.HomeScreem}
          options={
            {    
              headerTitle:"To-Do App" ,
              headerRight: () => (
                <View style={{flexDirection:'row'}}>
                   <TouchableHighlight style={{marginRight:10}}>
                    <Ionicons name="search" size={24} color={"gray"} />
                  </TouchableHighlight>

                  <TouchableHighlight style={{marginRight:10}}>
                    <Ionicons name="notifications-outline" size={24} color={"gray"} />
                  </TouchableHighlight>

                  <TouchableHighlight style={{marginRight:12}}>
                    <Ionicons name="menu-outline" size={24} color={"gray"} />
                  </TouchableHighlight>
              </View>
              ),        
            }
          }
        />
        <Stack.Screen 
          options={{ headerTitle:"Add task" }}
          name="Task"
          component={admin.TaskHome}
       />
      </Stack.Navigator>
   );
}