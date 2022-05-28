import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
// import { ILSplash } from '../../assets'
import { ILSplash } from '../../assets/images/illustration'
import { size } from '../../theme/fonts'
// import { Button, Gap } from '../../components'
// import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {
    // useEffect(() => {
    //     setTimeout(() => {
    //       navigation.replace('ContactLists')
    //     }, 2000)
    //   }, [navigation])

    return (
        <ImageBackground source={ILSplash} style={styles.page}>
          <View style={styles.overlay}></View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Contact.</Text>
          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // opacity: 0.5,
    // backgroundColor:'rgba(255,0,0,0.9)'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.2
  },
  logo: {
    height: 75,
    width: 75
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium'
  }
})

export default Splash