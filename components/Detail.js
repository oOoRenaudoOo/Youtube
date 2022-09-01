import { StyleSheet, View } from 'react-native'
import React from 'react'

import Videoplayer from './Videoplayer';
import Index from './Header';
import InfoVideo from './InfoVideo';





const Detail = ({route, navigation}) => {
  
  const { item } = route.params;
  console.log(item)
 
  
  return (
    <View style={styles.body}>

      <Videoplayer style={styles.container} item={item}></Videoplayer>  
      <Index menu={false} search={false} playList={true}></Index>
      <InfoVideo item={item}/>
  </View>
  )
}


export default Detail;




const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        justifyContext:'center',
      },

})