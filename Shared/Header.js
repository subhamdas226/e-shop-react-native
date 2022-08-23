import React from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet, Button, Pressable } from 'react-native';

const Header = () => {
    return (
        <SafeAreaView style = {[styles.header , styles.droidSafeArea]} >
            {/* <View> */}
                <Image 
                    source={ require("../assets/bat.png")}
                    resizeMode="contain"
                    style = {styles.logo}
                />
                {/* <Text>EasyShop</Text> */}
            {/* </View> */}
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo :{
        height : 50,
    },
    header : {
        width : "100%",
        flexDirection : 'row',
        alignContent : 'center',
        justifyContent : 'center',
        padding : 20,
        // marginTop : 80,
        // marginLeft : 80,
    },
    // droidSafeArea : {
    //     flex: 1,
    //     justifyContent : 'center',
    //     alignItems: 'center',
    //     // flexDirection : 'column',
    //     backgroundColor: 'transparent',
    //     paddingTop: Platform.OS === 'android' ? 20 : 0
    // },
    logoTitle :{
        fontSize : 10,
        fontWeight : 'bold',
        // height : 100,
        // width : 100,
        color: 'red',
        marginTop : 20
        
    }
})

export default Header;