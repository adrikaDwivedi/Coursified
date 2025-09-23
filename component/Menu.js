import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles'

const Menu = ({ navigation: navProp }) => {
    const hookNav = useNavigation();
    const navigation = navProp || hookNav;
    return (
        <View style={styles.menuCont}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("About")}
            >
                <Image
                    style={styles.iconStyle}
                    source={require('../assets/icons8-about-100.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Course")}
            >
                <Image
                    style={styles.iconStyle}
                    source={require('../assets/books.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Student")}
            >
                <Image
                    style={styles.iconStyle}
                    source={require('../assets/student.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Contact")}
            >
                <Image
                    style={styles.iconStyle}
                    source={require('../assets/contact.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    menuCont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonStyle: {
        width: GlobalStyles.scale(60),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        textTransform: 'uppercase',
    },
    iconStyle: {
        width: '100%',
        height: GlobalStyles.scale(50),
        aspectRatio: 1,
    },
    student: {
        width: GlobalStyles.scale(30),
        height: GlobalStyles.scale(50),

    },
})
export default Menu;
