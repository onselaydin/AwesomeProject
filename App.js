//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './pages/Task';
import TaskList from './pages/TaskList';
import Login from './pages/Login';
import Person from './pages/Person';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

const myOptions={
  title: 'Giriş', 
  headerTintColor:"white", 
  headerStyle:{
    backgroundColor:"#006aff"
  }
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Stack.Navigator da headerMode="none" yaparsak geri buttonu headerı gösterilmez */}
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={Login} options={myOptions} />
        <Stack.Screen name="TaskList" component={TaskList} options={myOptions}/>
        <Stack.Screen name="Task" component={Task} options={{...myOptions,title:"Create Task"}}/>
        <Stack.Screen name="Person" component={Person} options={{...myOptions,title:"Create Person"}}/>
        <Stack.Screen name="Profile" component={Profile} options={{...myOptions,title:"Profile"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
