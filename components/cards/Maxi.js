import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

// import {categories} from '../../constantes/categorie'
import { BackgroundImage, Icon } from '@rneui/base'




const Maxi = ({item }) => {

 return (
   
    <View style={styles.item_card}>
        <View style={styles.image_container}>
            <BackgroundImage style={styles.item_image} source={item.image}>
            <Icon 
                name="play-circle-outline"
                color="yellow"
                size={80} 
                onPress={() => console.log('hello')}/> 
            </BackgroundImage>
        </View>
        
        <View style={styles.item_bandeau}>
            <Text style={styles.item_text}>
                {item.titre.substring(0,40)}
            </Text>
        </View>
    </View>
  )
}



export default Maxi

const styles = StyleSheet.create({
    item_text : {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        color:'black',
    
    },

    item_card : {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#D8EA17',
        padding:10,
        margin: 10,
        height: 260,
        width: 355,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        
    },

    item_image: {
        borderWidth: 1,
        width: 335,
        height:182,
        borderColor:"yellow",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,
        justifyContent: 'center',

    },

    item_bandeau: {
        width: 335,
        height: 50,
        padding:5,
        backgroundColor: '#D8EA17', 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // backgroundColor: 'blue'
        borderWidth:1,
        borderColor:"yellow"
    },

    image_container : {
        flex: 1,
        flexDirection: 'column',
    }

})