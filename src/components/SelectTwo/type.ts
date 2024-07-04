import { ViewStyle } from 'react-native'

interface IConfig {
    lightModeStyleContainer?: ViewStyle
    darkModeStyleContainer?: ViewStyle

    lighModeStyleIconWrapper?: ViewStyle
    darkModeStyleIconWrapper?: ViewStyle

    ligthModeStyleTextInput?: ViewStyle
    darkModeStyleTextInput?: ViewStyle

    label?: string
    placeholder?: string
    icon?: any
    iconSize?: number

    onSelect?: (a: any) => void

    error?: any
    required?: any
}

interface ISelectTwo {
    config: IConfig
    dataSource?: Array<IDataSourceSelect>
}

interface IDataSourceSelect {
    value: any
    label: string
}

export type { ISelectTwo, IDataSourceSelect }
