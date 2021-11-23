import 'react-native-gesture-handler';
import React from 'react';
import { DashboardRouter } from './DashboardRouter';
import { NavigationContainer } from '@react-navigation/native';

export function AppRouter(){

   return(
       <NavigationContainer>
         <DashboardRouter/>
       </NavigationContainer>
   
   );
}





