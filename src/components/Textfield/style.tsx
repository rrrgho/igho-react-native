import { StyleSheet } from 'react-native'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import { Theme } from '../../theme.config'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: responsiveHeight(7),
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: Theme.border.radius,
        backgroundColor: Theme.colors.white,
    },
    textInput: {
        backgroundColor: Theme.colors.white,
        color: Theme.colors.black,
        flex: 1,
        borderRadius: Theme.border.radius,
        fontSize: responsiveFontSize(2),
        paddingRight: 10,
    },
    iconWrapper: {
        backgroundColor: 'transparent',
        width: responsiveWidth(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconEye: {
        position: 'absolute',
        right: 23,
        bottom: 23,
    },
    labelContainer: {
        paddingLeft: 5,
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    errorMessageContainer: {
        paddingLeft: 5,
        paddingTop: 5,
    },
})
