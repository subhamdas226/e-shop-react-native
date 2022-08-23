import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "../../../Shared/Form/Input";
import { Picker, Item } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import FormContainer from "../../../Shared/Form/FormContainer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MultiSelect from 'react-native-multiple-select';

import { connect } from "react-redux";

const countries = require("../../../assets/data/countries.json");

const Checkout = (props) => {
  
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setcountry] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);

    return () => {
      setOrderItems();
    };
  }, []);

  const CheckOut = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
    };
    console.log("payment navigate");
    props.navigation.navigate("Payment", { order: order });
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Shipping Adress"}>
        <Input
          placeholder={"phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Shipping Adress 1"}
          name={"ShippingAdress1"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder={"Shipping Adress 2"}
          name={"ShippingAdress2"}
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder={"City"}
          name={"city"}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={"Zip Code"}
          name={"zip"}
          value={zip}
          onChangeText={(text) => setZip(text)}
        />
        {/* <Item picker>
          <Picker
            mode="dropdown"
            // iosIcon={<Icon name = "arrow-down" color={"#007aff"} />}
            // Icon={ <Icon name = "arrow-down" color="#007aff" />}
            icon = {<Icon name = "arrow-down" color={"#007aff"} />}
            
            style={{ width: undefined }}
            selectedValue={country}
            placeholder="select your contry"
            placeholderStyle={{ color: "#007aff" }}
            placeholderIconColor="007aff"
            onValueChange={(e) => setcountry(e)}
          >
            {countries.map((c) => {
              return <Picker.Item key={c.code} label={c.name} value={c.name} />
            })}
          </Picker>
        </Item> */}
        <View style = {{width : '75%'}}>
        <MultiSelect
          hideTags
          items={countries}
          uniqueKey="code"
          onSelectedItemsChange={(text)=> setcountry(text)}
          selectedItems={country}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> setcountry(text)}
          single = {true}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="red"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="green"
          selectedItemIconColor="green"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title="Confirm" onPress={() => CheckOut()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};
const mapStateToProps = (state) => {
  const { cartItems } = state;

  return {
    cartItems: cartItems,
  };
};
export default connect(mapStateToProps)(Checkout);
