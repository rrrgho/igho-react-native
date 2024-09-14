import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../Pages/Login'
import HomePage from '../Pages/Home'

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
