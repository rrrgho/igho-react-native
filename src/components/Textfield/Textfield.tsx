import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { FC } from 'react'
import {
    Text,
    TextInput,
    TextInputProps,
    View,
    useColorScheme,
} from 'react-native'
import { Theme } from '../../theme.config'
import ErrorText from '../ErrorText/ErrorText'
import { lightModeStyles } from './style'
import { ITextfield } from './type'
import Body1 from '../Body1'
import { icon } from '@fortawesome/fontawesome-svg-core'

/**
 * Customizable Text Input, adjust your creativity through 'config' props
 * @param config
 * @returns ReactNode
 */

const Textfield: FC<ITextfield & TextInputProps> = ({ config }) => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <>
            <View>
                {config?.label && (
                    <View style={lightModeStyles.labelContainer}>
                        <Body1 text={config.label} />
                        {config.required && (
                            <Text style={{ color: Theme.colors.danger }}>
                                *
                            </Text>
                        )}
                    </View>
                )}

                <View
                    style={[
                        lightModeStyles.container,
                        isDarkMode
                            ? config?.darkModeStyleContainer
                            : config?.lightModeStyleContainer,
                        config?.error && { borderColor: Theme.colors.danger },
                    ]}
                >
                    {config?.icon && (
                        <View style={[lightModeStyles.iconWrapper]}>
                            <FontAwesomeIcon
                                size={config.iconSize ?? 20}
                                color={
                                    isDarkMode
                                        ? Theme.darkMode.color
                                        : Theme.lightMode.color
                                }
                                icon={config.icon ?? faMugSaucer}
                            />
                        </View>
                    )}

                    <TextInput
                        onBlur={config?.onBlur}
                        onChangeText={config?.onChangeText}
                        keyboardType={config?.keyboardType}
                        style={[
                            lightModeStyles.textInput,
                            isDarkMode
                                ? config?.darkModeStyleTextInput
                                : config?.ligthModeStyleTextInput,
                            !config?.icon && { paddingLeft: 20 },
                        ]}
                        placeholder={config?.placeholder}
                        {...config}
                    />
                </View>
                {config?.error && (
                    <View style={lightModeStyles.errorMessageContainer}>
                        <ErrorText text={config.error} />
                    </View>
                )}
            </View>
        </>
    )
}

export default Textfield
