import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Page
import Navbar from './Components/Navbar';
import Room from './Screens/Room';
import FriendDetail from './Screens/FriendDetail';
import Setting from './Screens/Setting';
import Auth from './Screens/Auth';
import RealTime from './Screens/Realtime';

const Stack = createStackNavigator();

const Routes = (props) => {
    return (
        <NavigationContainer>
            {props.auth.isLogin ?
                <Stack.Navigator>
                    <Stack.Screen name="Index" component={Navbar} options={{ headerShown: false }} />
                    <Stack.Screen name="Room" component={Room} options={{ headerShown: false }} />
                    <Stack.Screen name="FriendDetail" component={FriendDetail} options={{ headerShown: false }} />
                    <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
                    <Stack.Screen name="RealTime" component={RealTime} options={{ headerShown: false }} />
                </Stack.Navigator>
                :
                <Stack.Navigator>
                    <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Routes);