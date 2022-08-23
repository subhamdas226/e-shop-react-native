import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import ProductContainer from '../Screens/Products/ProductContainer';
import CartIcon from '../Shared/CartIcon';
import Checkout from '../Screens/Cart/Checkout/Checkout';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                keyboardHidesTabBar: true,
                showLabel: false,
                activeTintColor: '#e91e63'
            }}
        >
            <Tab.Screen
                name='Home'
                component={HomeNavigator}
                options={{
                    headerShown : false,
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon
                                name='home'
                                style={{ position: 'relative' }}
                                color={color}
                                size={30}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Cart'
                component={CartNavigator}
                options={{
                    headerShown : false,
                    tabBarIcon: ({ color }) => {
                        return (
                            <View>
                                <Icon
                                name='shopping-cart'
                                color={color}
                                size={30}
                            />
                            <CartIcon />
                            </View>
                        )
                    }
                }}
            />
            {/* <Tab.Screen
                name='Admin'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ((color) => {
                        return (
                            <Icon
                                name='cog'
                                color={color}
                                size={30}
                            />
                        )
                    })
                }}
            />

            <Tab.Screen
                name='Cart'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ((color) => {
                        return (
                            <Icon
                                name='shopping-cart'
                                style={{ position: 'relative' }}
                                color={color}
                                size={30}
                            />
                        )
                    })
                }}
            />
            <Tab.Screen
                name='User'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ((color) => {
                        return (
                            <Icon
                                name='user'
                                style={{ position: 'relative' }}
                                color={color}
                                size={30}
                            />
                        )
                    })
                }}
            /> */}
        </Tab.Navigator>
    );
}

export default Main;
