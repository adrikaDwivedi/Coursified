import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {Checkbox} from 'expo-checkbox';
import GlobalStyles from './styles/GlobalStyles'

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState(null);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      alert("Fill all the fields");
    }
    else {
      alert(`Thankyou ${name} for contacting`);
      navigation.navigate("Home");
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>
      <Text style={styles.desc}>
       Fill up the form below and become a part of our learning community!
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Your Name"}
          value={name}
          onChangeText={(userdata) => setName(userdata)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"demo@gmail.com"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter Your Mobile Number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"+91 "}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Which one best describes you</Text>
        {/* <TextInput
          style={[styles.inputStyle, styles.multlineStyle]}
          placeholder={"Reason for contacting"}
          numberOfLines={4}
          multline={true}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
        /> */}
      </View>
      <View style={styles.checkbox}>
        <View style={styles.checkboxItem}>
          <Checkbox value={selected === 'student'} onValueChange={() => setSelected(selected === 'student' ? null : 'student')} />
          <Text style={styles.checkboxText}>Student</Text>
        </View>
        <View style={styles.checkboxItem}>
          <Checkbox value={selected === 'professional'} onValueChange={() => setSelected(selected === 'professional' ? null : 'professional')} />
          <Text style={styles.checkboxText}>Working Professional</Text>
        </View>
        <View style={styles.checkboxItem}>
          <Checkbox value={selected === 'instructor'} onValueChange={() => setSelected(selected === 'instructor' ? null : 'instructor')} />
          <Text style={styles.checkboxText}>Instructor</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonStyle,
        {},
        ]}
        onPress={submit}
      ><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
    </View>
  ) 
}
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: GlobalStyles.scale(30),
    backgroundColor: GlobalStyles.Colors.white,
  },
  checkbox: {
    flexDirection: 'row',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: GlobalStyles.scale(15),
  },
  mainHeader: {
    fontSize: GlobalStyles.moderateScale(20),
    color: '#344055',
    fontWeight: '500',
    paddingTop: GlobalStyles.verticalScale(20),
    paddingBottom: GlobalStyles.verticalScale(15),
    textTransform: 'capitalize',
    marginTop: GlobalStyles.verticalScale(30),
  },
  desc: {
    fontSize: GlobalStyles.moderateScale(15),
    color: GlobalStyles.Colors.gray,
    paddingBottom: GlobalStyles.verticalScale(20),
    lineHeight: GlobalStyles.moderateScale(25),
  },
  inputContainer: {
    marginTop: GlobalStyles.scale(20),
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: GlobalStyles.scale(15),
    paddingVertical: GlobalStyles.verticalScale(10),
    borderRadius: GlobalStyles.scale(2),
  },
  labels: {
    fontWeight: 'bold',
    color: GlobalStyles.Colors.gray,
    paddingBottom: GlobalStyles.scale(5),
    lineHeight: GlobalStyles.moderateScale(25),
    marginTop: GlobalStyles.scale(6),
  },
  multline: {
    paddingVertical: GlobalStyles.verticalScale(25),
  },
  buttonStyle: {
    width: '50%',
    borderWidth: 2,
    borderRadius: GlobalStyles.scale(18),
    paddingVertical: GlobalStyles.verticalScale(14),
    paddingHorizontal: GlobalStyles.scale(20),
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: GlobalStyles.verticalScale(60),
    backgroundColor: GlobalStyles.Colors.primary,
    borderColor: GlobalStyles.Colors.white,
  },
  buttonText: {
    alignSelf: 'center',
    color: GlobalStyles.Colors.white,
    fontWeight: 'bold',
    fontSize: GlobalStyles.moderateScale(20),
  },
  checkboxText: {
    marginLeft: GlobalStyles.scale(8),
  },
})
export default Contact