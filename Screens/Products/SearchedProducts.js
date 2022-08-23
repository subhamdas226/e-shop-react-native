import React from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { Content, ListItem, Thumbnail, Text, Container, NativeBaseProvider, Header ,Left,Right, Body, Item, Icon, Input,} from 'native-base';

var {width} = Dimensions.get('window')
const SearchedProducts = ( props ) => {
    const { productFiltered }  = props;
    // console.log("productFiltered",productFiltered)
    return (
        <Content style = {{width : width}}>
            {productFiltered.length > 0 ? (
                productFiltered.map((item) => {
                    return (
                        <ListItem 
                                onPress = {() =>{
                                    props.navigation.navigate('Product Detail',{ item : item})
                                }}
                                key={ item._id.$oid  } 
                                avatar
                        > 
                            <Left>
                                <Thumbnail 
                                    // source={{
                                    //     uri : item.image ? item.image :'https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png',
                                    // }}
                                    source={{
                                        uri : 'https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png',
                                    }}
                                />
                            </Left>
                            <Body>
                                <Text>
                                    {item.name}
                                </Text>
                                <Text note>{item.description}</Text>
                            </Body>
                        </ListItem>
                    )
                   
                })
            ) : (
                    // <View style = {styles.center}>
                        <Text style = {{ alignSelf : 'center'}}>
                            No products match the selected criteria
                        </Text>
                    // </View>
                )
            }  
        </Content>
    );
}

const styles = StyleSheet.create({
    center : {
        alignSelf : 'center'
    }
})
export default SearchedProducts;