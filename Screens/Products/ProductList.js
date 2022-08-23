import React from 'react'
import { TouchableOpacity, Dimensions, Text, View, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

var {width} = Dimensions.get('window')

const ProductList = (props) => {
    
    const { item } = props;
    return (
        <TouchableOpacity style = {styles.touchable}
            onPress = {() => {
                props.navigation.navigate('Product Detail', { item : item})
            }}
        >
            <View style = { styles.tochView}>
                <ProductCard {...item} />
                {/* [passing all props] */}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchable : {
        width: '50%'
        // padding:5,
        // position : 'relative',
        // alignItems : 'center',
        // height : 200,
        // marginBottom : 8
    },
    tochView : {
        width : width / 2,
        backgroundColor : 'gainsboro'
        
    }
})

export default ProductList;