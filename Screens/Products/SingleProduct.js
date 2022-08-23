import React, { useEffect, useState} from 'react';
import { Image, View, Text, StyleSheet, ScrollView, 
    Button, TouchableOpacity } from 'react-native';
import { Left, Right, Container, H1 } from 'native-base';

const SingleProduct = (props) => {

    const [item, setItem ] = useState(props.route.params.item)
    const [availability, setAvailability ] = useState('')
    //  let tf = (item.image) ? true : false;
    // console.log( " item.image",tf)
    return (
        <Container style = {styles.container}>
            <ScrollView style = {styles.scrlVw}>
                <View>
                    <Image 
                        style = {styles.image}
                        
                        // source={{
                        //     uri : (item.image) ? (item.image) : 'https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png',
                        // }}
                        source={{
                            uri : 'https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png',
                        }}
                        resizeMode='contain'

                    />
                </View>

                <View style = {styles.contentContainer}>
                        <H1 style = {styles.contentHeader}>
                            {item.name}
                        </H1>
                        <Text style = {styles.contentText}>
                            {item.brand}
                        </Text>
                </View>
                {/* TODO :  Description, Rich Description, and Availability */}
            </ScrollView>
            <View style = {styles.botomtContainer}>
                        <Left>
                            <Text style = {styles.price}>
                                ${item.price}
                            </Text>
                        </Left>
                        <Right>
                            <Button style = {styles.button}
                            title="Add" />
                        </Right>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    container : {
        position : 'relative',
        height : '100%'
    },
    imageContainer  :{
        backgroundColor : 'white',
        padding : 0,
        margin : 0
    },
    scrlVw : {
        marginBottom : 80,
        padding : 5
    },
    image  : {
        width : '100%',
        height : 250
    },
    contentContainer :{
        marginTop : 20,
        justifyContent : 'center',
        alignItems : 'center'
    },
    contentHeader:{
        fontWeight : 'bold',
        marginBottom : 20
    },
    contentText : {
        fontSize :18,
         fontWeight : 'bold',
         marginBottom : 20
    },
    botomtContainer : {
        flexDirection : 'row',
        position : 'absolute',
        bottom : 0,
        left: 0,
        backgroundColor : 'white'
    },
    price:{
        fontWeight : 'bold',
        fontSize : 24,
        margin : 20,
        color : 'red'
    }
})
export default SingleProduct;