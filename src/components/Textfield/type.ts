import { KeyboardType, ViewStyle } from 'react-native'

interface IConfig {
    customStyleContainer?: ViewStyle
    icon?: any
    iconSize?: number
    label?: string
    placeholder?: string
    keyboardType?: KeyboardType
    value?: string

    onChangeText?: (val: string) => void
    onBlur?: (x: any) => void

    error?: any
    required?: any
    type?: 'text' | 'password'
}

interface ITextfield {
    config?: IConfig
}

export type { ITextfield }
