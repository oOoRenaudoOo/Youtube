import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import {categories} from '../../constantes/categorie'




const Mini = ({item }) => {
    const navigation = useNavigation();
 return (
   
    <View View style={styles.item_card}>

        <View style={styles.item_bandeau}>
            <Text style={styles.item_bandeau_text}>{categories[item.categorie].nom}</Text>
        </View>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Detail", {item})}>
            <Image style={styles.item_image}
                source={item.image}
            /> 
        </TouchableOpacity>
        
        <View style={styles.item_footer}>
            <Text style={styles.item_footer_text}>
                {
                    (item.titre.length >= 25) ?
                    item.titre.substring(0,20) + '...' : item.titre }
            </Text>
        </View>

    </View>
  )
}

export default Mini

const styles = StyleSheet.create({
    item_text : {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
        justifyContext:'center',
        color:'black'
    },

    item_card : {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 190,
        width: 210,
    },

    item_image: {
        width: 200,
        height: 100,
    },

    item_footer: {
        width: 200,
        height: 30,
        padding:2,
        backgroundColor: '#D8EA17', 
    },
    item_footer_text:{
        fontSize: 18,
        fontWeight: 'bold',
        color:'black'

    },

    item_bandeau: {
        justifyContent:'center',
        width: 200,
        height: 30,
        backgroundColor: '#D8EA17', 

    },
    item_bandeau_text: {
        fontSize: 13,
        fontWeight:'bold',
        color:'black',
        marginLeft:5
    }
})