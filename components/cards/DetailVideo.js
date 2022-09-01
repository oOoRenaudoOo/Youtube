import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'
import Index from '../Header';
import {categories} from '../../constantes/categorie'
import { Icon } from '@rneui/base';




export default function DetailVideo({route, navigation}) {
    const { item } = route.params;
    console.log(item)
    console.log("categorie",item.categorie)
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
            <View style={styles.cat_container}>  
                <Text style={styles.cat_text}>{categories[item.categorie].nom}</Text>
            </View>
            <Text style={styles.title}>{item.titre} </Text>
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
        backgroundColor: 'black',
        padding:5
   
    },
    detail_container: {
        flex:1,
        marginTop:10,
        margin: 30,
  
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
        width:110,
        height:25,
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 20
    },
    cat_text: {
        color:'black',
    },
    description_container: {
        flex:1,
        marginTop: 10,
        backgroundColor:"#ffffff30",
        borderRadius:10
        
    },
    description_text: {
        fontSize: 15,
        color:'white',
        padding: 10
    },
    lecteur: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})