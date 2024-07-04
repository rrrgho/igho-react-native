import { ViewStyle } from 'react-native'

interface IButtonPrimary {
    containerCustomStyle?: ViewStyle
    textCustomStyle?: ViewStyle
    text: string
    onPress?: () => void
}

export type { IButtonPrimary }
