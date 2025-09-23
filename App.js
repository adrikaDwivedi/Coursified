
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './About';
import Contact from './Contact';
import UserData from './UserData';
import Course from './Course';

const App = () => {
  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: { backgroundColor: '#4c5dab' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontSize: 30 },
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="Course" component={Course}
        options={{ headerTitle: 'Courses' }}
      />
      <Stack.Screen name="Student" component={UserData}
        options={{ headerTitle: 'Student' }}
      />
      <Stack.Screen name="About" component={About}
        options={{ headerTitle: 'About Us' }}
      />
      <Stack.Screen name="Contact" component={Contact}
        options={{ headerTitle: 'Contact Us' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
}
export default App