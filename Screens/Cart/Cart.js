import React from 'react';
import {  Button, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';
// import cartItems from '../../Redux/Reducers/cartItems';
import CartItem from './CartItem';
import { 
    Container,
    Text,
    Left,
    Right,
    H1,
    ListItem,
    Thumbnail,
    Body,
    
 } from 'native-base';

 import Icon from 'react-native-vector-icons/FontAwesome';
 import { SwipeListView } from 'react-native-swipe-list-view';


var {height, width} = Dimensions.get("window")
const Cart = (props) => {
    var total = 0
    props.cartItems.forEach(cart =>{
        return (total += cart.product.price)
    });
    return (

        <>
            {props.cartItems.length ? (
                <Container>
                    <H1 style={{alignSelf : 'center'}}>Cart</H1>
                    {/* {props.cartItems.map(data =>{
                        return (
                            <CartItem Item = {data}/>
                        )
                    })} */}
                    <SwipeListView 
                        data={props.cartItems}
                        renderItem = {(data)=>(
                            <CartItem Item = {data}/>
                        )}
                        renderHiddenItem = {(data)=>{
                            return (
                                <View style = {styles.hiddenContainer}>
                                    <TouchableOpacity style = {styles.hiddenButton}
                                        onPress ={() => props.removeFromCart(data.item)}
                                    >
                                        <Icon name='trash' color={'white'} size = {30}/>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        disableRightSwipe = {true}
                        previewOpenDelay = {3000}
                        friction = {1000}
                        tension = {40}
                        leftOpenValue = {75}
                        stopLeftSwipe = {75}
                        rightOpenValue = {-75}
                    />
                    <View style={styles.bottomConatiner}>
                        <Left>
                            <Text style={styles.price}>₹ {total}</Text>
                        </Left>
                        <Right>
                            <Button title = "Clear"
                                onPress={()=> props.clearCart()}
                            />
                        </Right>
                        <Right>
                            <Button title = "Checkout"
                                onPress={()=> props.navigation.navigate('Checkout')}
                            />
                        </Right>
                    </View>
                </Container>
            ): (
                <Container style = {styles.emptyCart}>
                    <Text>Looks like your cart is empty</Text>
                    <Text>Add products to your cart to get started</Text>
                </Container>
            )}
        </>
        // <View style = {{ flex : 1}}>
        //     {props.cartItems.map(x =>{
        //         return (
        //             <Text>{x.product.name}</Text>
        //         )
        //     })}
            
        //     <Text>cart works</Text>
        //     <Text>{props.brand}</Text>
        // </View>

    );
}

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems : cartItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        clearCart : () => dispatch(actions.clearCart()),
        removeFromCart : (item) => dispatch(actions.removeFromCart(item))
    }
}

const styles = StyleSheet.create({
    emptyCart : {
        height : height,
        alignItems : 'center',
        justifyContent : 'center'
    },
    bottomConatiner : {
        flexDirection : 'row',
        position : 'absolute',
        bottom : 0,
        left : 0,
        backgroundColor : 'white'
    },
    price  :{
        fontSize : 18,
        color : 'red',
        margin : 20
    },
    hiddenContainer : {
        flex : 1,
        justifyContent : 'flex-end',
        flexDirection : 'row',
    },
    hiddenButton : {
        backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'flex-end',
        paddingRight : 25,
        height : 70,
        width : width / 1.2 
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);