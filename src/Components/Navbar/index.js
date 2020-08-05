import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chat from '../../Screens/Chat';
import Friend from '../../Screens/Friend';
import Realtime from '../../Screens/Realtime';
import Topbar from '../Topbar';
import { color } from '../../Assets/Styles';

const Tab = createMaterialBottomTabNavigator();

const Navbar = () => {
    return (
        <>
            <Topbar />
            <Tab.Navigator
                activeColor={color.secondary}
                inactiveColor={color.default}
                barStyle={{ backgroundColor: color.light }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName = route.name === 'Chat' ? 'chatbubbles-outline' : 'people-outline';
                        return <Ionicons name={iconName} size={20} color={color} />;
                    },
                })}>
                <Tab.Screen name="Chat" component={Chat} />
                {/* <Tab.Screen name="Friend" component={Realtime} /> */}
                <Tab.Screen name="Friend" component={Friend} />
            </Tab.Navigator>
        </>
    );
}

export default Navbar;