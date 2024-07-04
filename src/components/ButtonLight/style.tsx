import { StyleSheet } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Theme } from '../../theme.config'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.colors.white,
        height: responsiveHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Theme.border.radius,
        borderWidth: 1.5,
        borderColor: Theme.colors.primary,
    },
    title: {
        fontWeight: 'bold',
        color: Theme.colors.primary,
    },
})
