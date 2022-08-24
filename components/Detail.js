import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import DetailVideo from './cards/DetailVideo';
import HeaderDetail from './cards/HeaderDetail';


const Detail = ({route, navigation}) => {
  const { item } = route.params;
  console.log(item)
  return (
    <View style={styles.body}>
      <DetailVideo style={styles.container} item={item}></DetailVideo>
    </View>

  )
}

export default Detail




const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        // padding: 2
      },
})