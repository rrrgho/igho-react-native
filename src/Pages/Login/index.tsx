import { Fragment, useState } from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import ButtonPrimary from '../../components/ButtonPrimary'
import Textfield from '../../components/Textfield/Textfield'

const LoginPage = ({ navigation }: any) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const checkLogin = () => {
        if (username === 'admin' && password === 'admin') {
            navigation.navigate('HomePage')
        } else {
            Alert.alert('Credential not match !')
        }
    }

    return (
        <Fragment>
            <Text style={styles.text}>This is Login Page</Text>
            <Textfield
                config={{
                    placeholder: 'Username',
                    label: 'Username',
                    onChangeText: (value) => {
                        setUsername(value)
                    },
                }}
            />
            <Textfield
                config={{
                    placeholder: 'Password',
                    label: 'Password',
                    onChangeText: (value) => {
                        setPassword(value)
                    },
                }}
            />
            <ButtonPrimary
                containerCustomStyle={{
                    marginTop: 10,
                }}
                onPress={checkLogin}
                text="LOGIN"
            />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
})

export default LoginPage
