import React from 'react'
import Menu from './component/Menu'
import { Image, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from './styles/GlobalStyles'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const description = "Coursified – Learning made simple, by students, for students. Discover, share, and master courses while connecting with a community that learns together"
  const navigation = useNavigation()

  return (

    <View style={styles.maincontainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode='contain'
    source={require('./assets/headerimg.jpeg')}
        />
        <Text style={[styles.mainHeader , {textTransform: 'uppercase'}]}>Welcome to</Text>
        <Text style={[styles.mainHeader,
        {
          fontSize: 33,
          color: "#4c5dab",
          marginTop: 0,
          fontWeight: '700',
        }

        ]}>Coursified</Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
  <Menu navigation={navigation} />
        <View style={[styles.lineStyle,
        {
          marginVertical: 20,
        }
        ]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    display: 'flex',
    paddingHorizontal: GlobalStyles.scale(20),
    backgroundColor: GlobalStyles.Colors.white,
    textAlign: 'center',
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: GlobalStyles.verticalScale(50),
    borderRadius: GlobalStyles.scale(20),
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: GlobalStyles.scale(10),
  },
  mainHeader: {
    fontSize: GlobalStyles.moderateScale(30),
    color: '#344055',
  },
  paraStyle: {
    textAlign: 'center',
    fontSize: GlobalStyles.moderateScale(19),
    color: GlobalStyles.Colors.gray,
    marginTop: GlobalStyles.verticalScale(30),
    paddingBottom: GlobalStyles.verticalScale(50),
    lineHeight: GlobalStyles.moderateScale(26),
  },
  lineStyle: {
    marginBottom: GlobalStyles.scale(20),
    borderWidth: 1,
    borderColor: 'grey',
  },
})
export default Home

