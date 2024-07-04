import { StyleSheet } from 'react-native'
import { Theme } from '../../theme.config'

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: Theme.colors.secondary,
        borderRadius: Theme.border.radius,
        display: 'flex',
        flexDirection: 'row',
    },
    containerContent: {
        width: '90%',
    },
    title: {
        fontWeight: 'bold',
    },
    icon: {
        marginRight: 5,
    },
    description: {
        marginTop: 7,
    },
    containerTitle: {
        display: 'flex',
        flexDirection: 'row',
    },
    containerAction: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        flex: 1,
    },
})
