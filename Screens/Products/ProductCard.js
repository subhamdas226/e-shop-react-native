import React from 'react'
import { Text, View, Dimensions, Image, StyleSheet, Button, Pressable, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

var { width } = Dimensions.get('window')

const ProductCard = (props) => {
    const {name , price, image, countInStock } = props;
    return (
        <View style = { styles.container}>
            <Image resizeMode='contain'
                // source={{uri:props.image? props.image : 'https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png'}}
                source={{
                    // uri: 'https://reactnative.dev/img/tiny_logo.png',
                    uri : 'https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png',
                  }}
                style = { styles.image}/>
            <View style = { styles.card}>
                <Text style = { styles.title}>
                    {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name }
                </Text>
                <Text style = { styles.price} >
                    ${price}
                </Text>
                {
                    countInStock > 0 ? (
                        <View style = { {marginBottom : 60, height:50, }}>
                            {/* <Button title={'Add'} color={'green'} /> */}
                            <TouchableOpacity
                                onPress={()=>{
                                    props.addItemToCart(props)
                                }}
                            >
                                <Text style = { styles.add}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    ) : <Text style = { {marginTop : 20 }}>Currently Unavailable</Text>
                }
            </View>
        </View>
    );
}

const mapDispatchToProps = (dispatch )=>{
    return {
        addItemToCart : (product) => {
            dispatch(actions.addToCart({quantity : 1, product}))
            //calls action function and tells to reducer that state is updated  
        }

    }
}
const styles = StyleSheet.create({
    container: {
        
        width: width / 2 - 20,
        height : width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop : 55,
        marginBottom : 5,
        marginLeft: 10,
        justifyContent : 'center',
        alignItems: 'center',
        elevation: 8,
        backgroundColor: '#fff'
      },
      image : {
          width : width / 2 - 20 - 10,
          height : width / 2 - 20 -30,
          backgroundColor: 'transparent',
          position: 'absolute',
          top: -55,
      },
      card : {
          marginBottom : 10,
          height : width / 2 - 20 - 90,
          backgroundColor: 'transparent',
          width :  width / 2 - 20 - 10,
          alignItems:'center'
      },
      title : {
          marginTop : 30,
          fontWeight: "bold",
          fontSize : 14,
        //   textAlign : 'center'
      },
      price : {
          fontSize : 20,
          color : "orange",
          marginTop: 10,
        //   display : 'flex',
        //   justifyContent : 'center',
        //   alignItems: 'center',
      },
      add : {
          color : 'green',
          fontWeight: "bold",
          fontSize : 14,
      }
})
// export default ProductCard;
export default connect(null, mapDispatchToProps)(ProductCard);