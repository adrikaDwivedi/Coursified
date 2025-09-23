import { View, Text, FlatList, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from './Api/Course';
import GlobalStyles from './styles/GlobalStyles'
const Course = (navigation) => {

  const courseCard = ({ item }) => {
    return <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>

        <View >
          <Image style={styles.cardImage}
            source={item.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.mainHeader}>
          {item.title}
        </Text>
        <Text style={styles.mainHeader}>
          {item.description}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}
          onPress={()=>navigation.navigate("CourseDetails")} 
          >
            <Text style={styles.buttonText}>Course Details</Text>
          </TouchableOpacity>

        </View>
      </View>

    </View>
  }

  return (
    <FlatList data={Courses}
      keyExtractor={(item) => item.id}
      renderItem={courseCard}
    />
  )
}
const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: GlobalStyles.scale(20),

  },
  courseContainer: {
    padding: GlobalStyles.scale(30),
    backgroundColor: 'rgba(255,255,255,0.90)',
    textAlign: 'center',
    borderRadius: GlobalStyles.scale(5),
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: GlobalStyles.scale(30),
  },
  mainHeader: {
    fontSize: GlobalStyles.moderateScale(22),
    color: '#344055',
    fontWeight: '500',
    paddingTop: GlobalStyles.verticalScale(15),
    paddingBottom: GlobalStyles.verticalScale(15),
  },
  description: {
    textAlign: 'left',
    paddingBottom: GlobalStyles.verticalScale(15),
    lineHeight: GlobalStyles.moderateScale(20),
    fontSize: GlobalStyles.moderateScale(16),
    color: GlobalStyles.Colors.gray,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: GlobalStyles.Colors.primary,
    borderBottomRightRadius: GlobalStyles.scale(5),
    borderTopRightRadius: GlobalStyles.scale(5),
    paddingVertical: GlobalStyles.verticalScale(10),
    paddingHorizontal: GlobalStyles.scale(18),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: GlobalStyles.moderateScale(20),
    color: '#eee',
  },
});
export default Course