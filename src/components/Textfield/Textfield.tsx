import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { FC, useState } from 'react'
import {
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
    useColorScheme,
} from 'react-native'
import { Theme } from '../../theme.config'
import ErrorText from '../ErrorText/ErrorText'
import { styles } from './style'
import { ITextfield } from './type'
import Body1 from '../Body1'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

/**
 * Customizable Text Input, adjust your creativity through 'config' props
 * @param config
 * @returns ReactNode
 */

const Textfield: FC<ITextfield & TextInputProps> = ({ config }) => {
    const [secureEntry, setSecureEntry] = useState<boolean>(
        config?.type === 'password'
    )
    return (
        <>
            <View>
                {config?.label && (
                    <View style={styles.labelContainer}>
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
                        {
                            ...styles.container,
                            ...config?.customStyleContainer,
                        },
                        config?.error && { borderColor: Theme.colors.danger },
                    ]}
                >
                    {config?.icon && (
                        <View style={[styles.iconWrapper]}>
                            <FontAwesomeIcon
                                size={config.iconSize ?? 20}
                                color={Theme.colors.icon}
                                icon={config.icon ?? faMugSaucer}
                            />
                        </View>
                    )}

                    <TextInput
                        onBlur={config?.onBlur}
                        onChangeText={config?.onChangeText}
                        keyboardType={config?.keyboardType}
                        style={[
                            styles.textInput,
                            !config?.icon && { paddingLeft: 20 },
                        ]}
                        placeholder={config?.placeholder}
                        {...config}
                        secureTextEntry={secureEntry}
                    />
                </View>
                {config?.error && (
                    <View style={styles.errorMessageContainer}>
                        <ErrorText text={config.error} />
                    </View>
                )}

                {config?.type === 'password' && (
                    <TouchableOpacity
                        onPress={() => {
                            setSecureEntry(!!!secureEntry)
                        }}
                        style={
                            config.error
                                ? { ...styles.iconEye, bottom: 43 }
                                : styles.iconEye
                        }
                    >
                        <FontAwesomeIcon
                            color={Theme.colors.icon}
                            icon={secureEntry ? faEye : faEyeSlash}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
}

export default Textfield
