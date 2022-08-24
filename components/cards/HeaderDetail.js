import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';




const HeaderDetail = () => {

    const[ showThisCat, setShowThisCat] = useState(false);
    const navigation = useNavigation();



  return (
 
        <View style={styles.header}>
            <View style={styles.left}>
                <View style={styles.logo}>
                    <Text style={styles.logo_text}>YoTuBe</Text>
                    <View style={styles.logo_icon}>
                        <Icon 
                            name="play-circle-outline"
                            color="yellow"
                            size={30} 
                            onPress={() => console.log('hello')}/>
                    </View>
                </View>   
            </View>
            <View style={styles.logo_icon}>
                <Icon 
                    name="playlist-play"
                    color="yellow"
                    size={30} 
                    onPress={() => setShowThisCat(!showThisCat)}/> 
            </View>  
            
                { showThisCat ? ( <Text>Hello</Text>) : null
                }
                
        </View>
    
           
    
    
      
    
    )
}
export default HeaderDetail

const styles = StyleSheet.create({})