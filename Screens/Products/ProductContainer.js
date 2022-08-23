import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Pressable, 
    Dimensions,FlatList,ActivityIndicator,Text,ScrollView } from 'react-native';
import ProductList from './ProductList';
import { Container, NativeBaseProvider, Header ,Left,Right, Body,Box, Item, Icon, Input,} from 'native-base';
import SearchedProducts from './SearchedProducts'
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const data = require('../../assets/data/products.json')
const productCategories = require('../../assets/data/categories.json')
var {height} = Dimensions.get('window')

const ProductContainer = (props) => {
    const [txt , setText] = useState("");
    const [products, setProducts] = useState([]);
    const [productFiltered, setproductFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories,setCategories] = useState([]);
    const [active, setActive] = useState();
    const [productCtg, setProductCtg] = useState([])
    const [initialState, setInitialState] = useState([])
    useEffect( () => {
        // console.log(data)
        setProducts(data);
        setproductFiltered(data);
        setFocus(false)
        setCategories(productCategories)
        setProductCtg(productCategories)
        setActive(-1)
        setInitialState(data)
        return ()=>{
            setProducts([])
            setproductFiltered([])
            setFocus()
            setCategories([])
            setActive()
            setInitialState()
        }
        // return
    }, [])

    const searchProduct = (text) =>{
        setText(text);
        setproductFiltered(
            products.filter((i) =>{
                return i.name.toLowerCase().includes(text.toLowerCase())
            })
        )
    }

    const openList = () =>{
        setFocus(true);
    }
    const onBlur = () =>{
        setText("");
        setFocus(false);
    }

    // Categories
    const changeCtg = (ctg) =>{
        {
            ctg == 'all'
            ? [setProductCtg(initialState), setActive(true)]
            : [
                setProductCtg(
                    products.filter((i) => {
                        console.log(i.category.$oid)
                        return i.category.$oid === ctg
                    }),
                    setActive(true)
                )
            ]
        }
    }
    return (
        // <NativeBaseProvider config={config}>
        
        <Container >
            <Header searchBar rounded>
                <Item>
                    <Icon name="search" />
                    <Input 
                        onFocus={openList}
                        placeholder='Search'
                        onChangeText={(text) => searchProduct(text)}
                        value={txt}
                        />
                    {
                        focus == true ? (
                            <Icon onPress = {onBlur} name = "close" />
                        ) : null
                    }
                </Item>

            </Header>
            { 
                focus == true ? (
                    <SearchedProducts 
                        navigation = {props.navigation}
                        productFiltered = {productFiltered}
                    />
                ) : 
                (
                    <ScrollView>
                        <View >
                        <View>
                            <Banner />
                        </View>
                        <View>
                            <CategoryFilter 
                                categories = {categories}
                                CategoryFilter = {changeCtg}
                                productCtg = {productCtg}
                                active = {active}
                                setActive = {setActive}

                            />
                        </View>
                        {/* <Text> Product cont</Text>
                         */}

                         {productCtg.length > 0 ? (
                             <View style = { styles.flatView}>
                             {/* <FlatList 
                                 numColumns={2}
                                 data = {products}
                                 renderItem = { ({item}) => {
                                     return (
                                         // <Text>{item.brand} </Text>
                                         <ProductList key = {item.id} item = {item} />
                                     )
                                 }}
                                 keyExtractor = { (item) => item.name }
                             /> */}

                             {productCtg.map((item) => {
                                 return (
                                     <ProductList 
                                        navigation = { props.navigation}
                                        key = {item._id.$oid}
                                        item = {item}
                                     />
                                 )
                             })}
                         </View>
                         ) : (
                             <View style = {styles.center}>
                                 <Text>
                                     No Product Found
                                 </Text>
                             </View>
                         )}
                        
                    </View>
                    </ScrollView>
                    
                )
            }
            
        </Container>
        // </NativeBaseProvider>
        
    );
}

const styles = StyleSheet.create({
    cont : {
        marginTop :  10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      flatView : {
          height : height + height,
          margin : 5,
          marginTop : 30,
          flex : 1,
          backgroundColor : 'gainsboro',
          flexDirection : 'row',
          flexWrap : 'wrap',
          alignItems : 'flex-start'
      },
      center :{
          alignContent:'center',
          justifyContent : 'center',
          alignItems : 'center',
          fontSize : 35,
          fontWeight : 'bold',
          height : height /2
      }
})
export default ProductContainer;