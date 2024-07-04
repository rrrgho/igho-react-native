import { StyleSheet } from 'react-native'
import { Theme } from '../../theme.config'
import { responsiveHeight } from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        flex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: Theme.colors.white,
        minHeight: 100,
        borderRadius: Theme.border.radius,
        padding: responsiveHeight(5),
    },
    containerTitle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginTop: responsiveHeight(3),
    },
    description: {
        fontWeight: 'medium',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5,
    },
    containerAction: {
        marginTop: responsiveHeight(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonLight: {
        width: '48%',
        paddingHorizontal: 5,
    },
})
