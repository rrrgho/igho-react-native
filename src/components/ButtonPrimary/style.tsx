import { StyleSheet } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Theme } from '../../theme.config'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.colors.primary,
        height: responsiveHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Theme.border.radius,
        borderWidth: 0,
    },
    title: {
        fontWeight: 'bold',
        color: '#fff',
    },
})
