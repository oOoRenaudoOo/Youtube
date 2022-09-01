import { StyleSheet,  View, ImageBackground } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';


export default function Videoplayer({item}) {
    console.log("categorie", item.categorie)
    return (
        <View>
            <ImageBackground style={styles.image} source={item.image} >
                <Icon 
                    name="play-circle-outline"
                    color="yellow"
                    size={80} 
                    onPress={() => console.log('hello')}/> 
            </ImageBackground>
        </View>)
};






const styles = StyleSheet.create({
    
    lecteur: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})