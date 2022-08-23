import React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductContainer from '../Screens/Products/ProductContainer';
import SingleProduct from '../Screens/Products/SingleProduct';
const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={ProductContainer}
                options = {{
                    headerShown : false, 
                }}
            />

            <Stack.Screen 
                name='Product Detail'
                component={SingleProduct}
                options = {{
                    headerShown : false, 
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeNavigator;