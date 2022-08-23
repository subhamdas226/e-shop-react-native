import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Text,
  Left,
  Right,
  H1,
  ListItem,
  Thumbnail,
  Body,
} from "native-base";

const CartItem = (props) => {
    console.log("cart orops.....", props)
  const data = props.Item.item.product;
  console.log("cart data.....", data)
  const [quantity, setQuantity] = useState(props.Item.item.quantity);

  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/03/18/01/09/cupcake-1264214_960_720.png",
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>₹ {data.price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({
    listItem : {
        alignItems : 'center',
        backgroundColor : '#fff',
        justifyContent : 'center'
    },
    body : {
        margin : 10,
        alignItems : 'center',
        flexDirection : 'row'
    },
})

export default CartItem;
