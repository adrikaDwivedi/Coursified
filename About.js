import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from './styles/GlobalStyles'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={[styles.mainHeader , {fontSize: 30}]}>Adrika Dwivedi</Text>
      <Text style={styles.paraStyle}> Developer | Open Source Enthusiast | Problem Solver </Text>
      <View>
        <Image
          style={styles.imgStyle}
          source={require('./assets/imgAD.jpg')}
        />
      </View>
      <View style={styles.aboutlayout}>
        <Text style={styles.subHeader}>
          About Me
        </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
       I’m Adrika Dwivedi, a passionate full-stack and mobile developer who loves building seamless apps with clean code and striking UI. 
       I love challenges, enjoy learning new tech, and create projects that make an impact. Beyond coding, I explore photography and content creation.
          </Text>
      </View>
      <Text style={styles.mainHeader}>Follow me below for latest updates:</Text>
      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/adrika-dwiv/")}
        >
          <Image style={styles.iconImage}
            source={require('./assets/linkedin.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => Linking.openURL("https://github.com/adrikaDwivedi")}
        >
          <Image style={styles.iconImage}
            source={require('./assets/github.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  imgStyle: {
    width: GlobalStyles.scale(200),
    height: GlobalStyles.scale(200),
    borderRadius: GlobalStyles.scale(100),
  },
  mainHeader: {
    fontSize: GlobalStyles.moderateScale(20),
    color: '#344055',
    fontWeight: '500',
    marginTop: GlobalStyles.verticalScale(30),
    marginBottom: GlobalStyles.verticalScale(10),
    lineHeight: GlobalStyles.moderateScale(20),
  },
  paraStyle: {
    fontSize: GlobalStyles.moderateScale(16),
    color: GlobalStyles.Colors.gray,
    paddingBottom: GlobalStyles.verticalScale(30),
  },
  aboutlayout: {
    backgroundColor: GlobalStyles.Colors.primary,
    paddingHorizontal: GlobalStyles.scale(30),
    marginVertical: GlobalStyles.verticalScale(35),
  },
  subHeader: {
    fontSize: GlobalStyles.moderateScale(18),
    color: GlobalStyles.Colors.white,
    fontWeight: '500',
    marginVertical: GlobalStyles.verticalScale(12),
    lineHeight: GlobalStyles.moderateScale(20),
    alignSelf: 'center',
  },
  aboutPara: {
    color: GlobalStyles.Colors.white,
    fontSize: GlobalStyles.moderateScale(16),
    marginTop: GlobalStyles.verticalScale(12),
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconStyle: {
    width: GlobalStyles.scale(60),
    height: GlobalStyles.scale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: GlobalStyles.scale(50),
    height: GlobalStyles.scale(50),
    borderRadius: GlobalStyles.scale(10),
  },
})
export default About