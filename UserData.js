import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Animated, Pressable } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import GlobalStyles from './styles/GlobalStyles'

const UserData = () => {

  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
      // console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getUserData();
    }
    fetchData();
  }, []);

  // fade-in animation for the list and summary
  const fadeAnim = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim.current, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [myData.length]);

  // render the students cards
  const StudentCard = ({ item }) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const onPressIn = () => {
      Animated.spring(scaleAnim, { toValue: 1.04, useNativeDriver: true, friction: 7 }).start();
    };
    const onPressOut = () => {
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true, friction: 7 }).start();
    };

    return (
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}> 
          <View style={styles.imgContainer}>
            <Image style={styles.imgStyle} source={{ uri: item.image }} />
          </View>
          <View>
            <View style={styles.bioDataContainer}>
              <Text style={styles.bioData}> Bio-Data </Text>
              <Text style={styles.idNumber}>
                {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
              </Text>
            </View>
            <View style={styles.mainContain}>
              <Text style={styles.myName}> Name: {item.name} </Text>
              <Text style={styles.myName}> email: {item.email} </Text>
              <Text style={styles.myName}> mobile: {item.mobile} </Text>
            </View>
          </View>
        </Animated.View>
      </Pressable>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>List of Students</Text>
      <Animated.View style={{ opacity: fadeAnim.current }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={myData}
          renderItem={({ item }) => <StudentCard item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Animated.View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>{`Total students: ${myData.length}`}</Text>
        <TouchableOpacity style={styles.refreshButton} onPress={getUserData}>
          <Text style={styles.refreshText}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>@Copyrights</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: GlobalStyles.verticalScale(50),
    backgroundColor: '#ebedee',
  },
  card: {
    width: GlobalStyles.scale(260),
    backgroundColor: GlobalStyles.Colors.card,
    borderRadius: GlobalStyles.scale(10),
    marginHorizontal: GlobalStyles.scale(12),
    paddingBottom: GlobalStyles.scale(8),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    paddingVertical: GlobalStyles.verticalScale(10),
  },
  idNumber: {
    fontSize: GlobalStyles.moderateScale(20),
    color: 'rgba(255, 255, 255, 0.5)',
    paddingRight: GlobalStyles.scale(10),
  },
  bioData: {
    fontSize: GlobalStyles.moderateScale(30),
    color: '#fff',
  },
  mainHeader: {
    fontSize: GlobalStyles.moderateScale(30),
    color: GlobalStyles.Colors.primary,
    textAlign: 'center',
    paddingVertical: GlobalStyles.verticalScale(50),
    fontWeight: 'bold',
  },
  imgContainer: {
    padding: GlobalStyles.scale(10),
  },
  imgStyle: {
    width: '100%',
    height: GlobalStyles.verticalScale(180),
  },
  mainContain: {
    padding: GlobalStyles.scale(12),
    backgroundColor: '#353535',
    borderBottomLeftRadius: GlobalStyles.scale(8),
    borderBottomRightRadius: GlobalStyles.scale(8),
    paddingBottom: GlobalStyles.scale(18),
  },
  myName: {
    fontSize: GlobalStyles.moderateScale(14),
    color: '#fff',
    marginBottom: GlobalStyles.scale(10),
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
  footer: {
    marginTop: GlobalStyles.verticalScale(40),
    alignItems: 'center',
    paddingBottom: GlobalStyles.verticalScale(20),
  },
  footerText: {
    color: GlobalStyles.Colors.gray,
    textAlign: 'center',
  },
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: GlobalStyles.scale(30),
    marginTop: GlobalStyles.scale(20),
  },
  summaryText: {
    flex: 1,
    fontSize: GlobalStyles.moderateScale(18),
    color: '#344055',
    textAlign: 'center',
  },
  refreshButton: {
    backgroundColor: GlobalStyles.Colors.primary,
    paddingVertical: GlobalStyles.verticalScale(8),
    paddingHorizontal: GlobalStyles.scale(12),
    borderRadius: GlobalStyles.scale(8),
    width: GlobalStyles.scale(110),
    height: GlobalStyles.scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshText: {
    color: GlobalStyles.Colors.white,
  },
});

export default UserData;