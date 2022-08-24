import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'
import Index from '../Header';
import {categories} from '../../constantes/categorie'
import { Icon } from '@rneui/base';

export default function DetailVideo({item}) {
    return (
    <View style={styles.body}>
        <View style={styles.lecteur}>
            <ImageBackground style={styles.image} source={item.image} >
                <Icon 
                    name="play-circle-outline"
                    color="yellow"
                    size={80} 
                    onPress={() => console.log('hello')}/> 
            </ImageBackground>
        </View>
        <Index menu={false} search={false} playList={true}></Index>
        <View style={styles.detail_container}>
            <Text style={styles.title}>{item.titre} </Text>
            <View style={styles.cat_container}>  
                <Text style={styles.cat_text}>{categories[item.categorie].nom}</Text>
            </View>
            <View style={styles.description_container}>  
                <Text style={styles.description_text}>{item.description}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        flexDirection: 'column',
        justifyContext:'center',
   
    },
    detail_container: {
        flex:1,
        margin: 30,
        padding: 10,
        color: '#fff',
    },

    title: {
        fontSize: 22,
        fontWeight:'bold',
        color:'white',
        marginBottom: 10
    },
    image : {
        flex: 1,
        justifyContent: 'center',
        aligItems: 'center',
        width: 360,
        height: 300, 
        margin: 5,  
    },
    cat_container: {
        backgroundColor: "yellow", 
        borderRadius: 5,
        width:110
    },
    cat_text: {
        textAlign:'center',
        color:'black',
        marginLeft: 7,
        height: 25
    },
    description_container: {
        marginTop: 20,
        
    },
    description_text: {
        marginTop: 20,
        TextAlign:'center',
        fontSize: 15,
        color:'white'
    },
    lecteur: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})