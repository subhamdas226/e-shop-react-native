import React from 'react';
import { View,Text, StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';

var { width } = Dimensions.get('window');

const FormContainer = (props) => {
    return (
        <ScrollView contentContainerStyle = {styles.container}>
                <Text style = {styles.title}>
                    {props.title}
                    
                </Text>
                {props.children}
        </ScrollView>
        // props.children is used cause we are receiving elements which is written inside <FormContainer> as a 
        // children. Those elements are displayed from here.
        // <FormContainer>

        // </FormContainer>
    );
}

const styles = StyleSheet.create({
    container : {
        marginTop : 30,
        marginBottom : 400,
        width : width,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize: 30,
    }
})

export default FormContainer;