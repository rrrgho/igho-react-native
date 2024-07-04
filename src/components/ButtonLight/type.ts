import { ViewStyle } from 'react-native'

interface IButtonLight {
    containerCustomStyle?: ViewStyle
    textCustomStyle?: ViewStyle
    text: string
    onPress?: () => void
}

export type { IButtonLight }
