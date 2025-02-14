import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import DrawerItems from './constants/DrawerItems';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {
          DrawerItems.map((item, index) => (
            <Drawer.Screen key={index} name={item.name} component={item.component}
              options={{
                title: item.name,
                drawerIcon: ({focused, size}) => (
                  <Ionicons 
                    name={item.iconName}
                    size={size}
                    color={focused? '#7cc': '#ccc'}
                  />
                )
              }}
            />
          ))
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;