import React from 'react';
import { StyleSheet, TouchableOpacity,ScrollView  } from 'react-native';
import { ListItem, Badge, Text } from 'native-base';


const CategoryFilter = (props) => {
    return (
        
        <ScrollView
            bounces = {true}
            horizontal = {true}
            style  = {styles.scrllStyles}

        >
            <ListItem
                style = {styles.ListItemStyles}
            >
                <TouchableOpacity
                    key={1}
                    onPress = {() =>{
                        props.CategoryFilter('all'), props.setActive(-1)
                    }}

                >
                    <Badge
                        style = {[styles.badge,styles.center,
                        props.active == -1 ? styles.active : styles.inactive]}
                    >
                        <Text
                        style = {styles.text}>
                            All
                        </Text>
                    </Badge>

                </TouchableOpacity>
                {props.categories.map((item) =>{
                    // {console.log(props.categories.length)}
                    return (<TouchableOpacity
                    key={item._id.$oid}
                    // key={-1}
                    onPress = {() =>{
                        props.CategoryFilter(item._id.$oid),
                         props.setActive(props.categories.indexOf(item))
                        // props.setActive(-1)
                    }}
                    
                >
                    {/* <Text>name</Text> */}
                    <Badge
                        style = {[styles.badge,styles.center,
                        props.active == props.categories.indexOf(item) ? styles.active : styles.inactive]}
                        // props.active == -1 ? styles.active : styles.inactive]}
                    >
                        <Text
                        style = {styles.text}>
                            {item.name }
                        </Text>
                    </Badge>

                </TouchableOpacity>)
                })}
                
            </ListItem>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrllStyles: {
        backgroundColor : '#f2f2f2'
    },
    ListItemStyles: {
        margin : 0,
        padding : 0,
        borderRadius : 0
    },
    badge : {
        margin : 5
    },
    center : {
        justifyContent: 'center',
        alignItems : 'center'
    },
    text : {
        color : 'white',

    },
    active : {
        backgroundColor : '#03bafc'
    },
    inactive : {
        backgroundColor : '#a0e1eb'
    }
})

export default CategoryFilter;