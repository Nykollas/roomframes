import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Create from './screens/Create';
import Search from './screens/Search';
import Header from './components/Header';
import Icon from './components/Icon';
import Show from './screens/Show';
import ShowSearch from './screens/ShowSearch';
import ShowCreate from './screens/ShowCreate';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabConfig = {
  showLabel:false
}



tabBarConfig = ({ route }) => ({
  tabBarIcon:({focused, color, size}) => {
    if(route.name == "MainNavigator"){
      const icon = focused ? "active-squares" : "squares";
      return <Icon name={icon}></Icon>
    }else if(route.name == "SearchNavigator"){
      const icon = focused ? "active-search" : "search";
      return <Icon name={icon}></Icon>
    }else{
      const icon = "create";
      return <Icon name={icon}></Icon>
    }
  },
  style:{
    
  }
})

const headerSettings = ({ scene, previous, navigation }) => {
  
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
        ? options.title
        : scene.route.name;
  if(title=="Search" ){
    return <Header  screen="Main" backButton title={title}></Header>
  }else if(title=="Show"){
    return <Header screen="Main" backButton ></Header>
  }else if(title == "ShowSearch"){
    return <Header screen="Search" backButton ></Header>
  }else if(title == "Create" || title=="AddPhoto"){
    return <Header backButton saveButton></Header>
  }else if(title == "Create"){
    return <Header backButton saveButton></Header>
  }else if(title == "Create"){
    return <Header backButton saveButton ></Header>
  }else{
    return <Header  title={title}></Header>
  }

};

const headerConfigs = {
  main: {
    header: headerSettings,
    headerTitleAlign: 'center', 
    headerTitle:'Explore memories',
    
  },
  show: {
    header: headerSettings,

  },
  create: {
    header: headerSettings,
    headerTitleAlign:'center',

  },
  search: {
    header: headerSettings,
    headerTitleAlign: 'center',
  },

}



function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen  options={headerConfigs.main} name="Main" component={Main}></Stack.Screen>
      <Stack.Screen options={headerConfigs.show} name="Show" component={Show}></Stack.Screen>
    </Stack.Navigator>
  )
}
function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={headerConfigs.search} name="Search" component={Search}></Stack.Screen>
      <Stack.Screen options={headerConfigs.show} name="ShowSearch" component={ShowSearch}></Stack.Screen>
    </Stack.Navigator>
  )
}
function GalleryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={headerConfigs.main} name="Main" component={Gallery}></Stack.Screen>
    </Stack.Navigator>
  )
}
function CreateNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={headerConfigs.create} name="Create" component={Create}></Stack.Screen>
      <Stack.Screen options={headerConfigs.create} name="AddPhoto" component={ShowCreate}></Stack.Screen>
      
    </Stack.Navigator>
  )
}

export default function App(props) {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={tabBarConfig}
        tabBarOptions={tabConfig}
      >
        <Tab.Screen name="MainNavigator" component={MainNavigator} />
        <Tab.Screen name="CreateNavigator" component={CreateNavigator} />
        <Tab.Screen name="SearchNavigator" component={SearchNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


