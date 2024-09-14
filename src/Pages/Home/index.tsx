import { Fragment } from 'react'
import { StyleSheet, Text } from 'react-native'
import ButtonPrimary from '../../components/ButtonPrimary'

const HomePage = () => {
    return (
        <Fragment>
            <Text style={styles.text}>Welcome to Home</Text>
            <ButtonPrimary text="Logout" />
        </Fragment>
    )
}

export default HomePage

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
})
