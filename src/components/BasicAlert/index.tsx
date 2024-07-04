import {
    faCheckCircle,
    faTimesCircle,
} from '@fortawesome/free-regular-svg-icons'
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { Theme } from '../../theme.config'
import Body1 from '../Body1'
import ButtonLight from '../ButtonLight'
import ButtonPrimary from '../ButtonPrimary'
import { styles } from './style'

const BasicAlert: FC<IBasicAlert> = ({ config }) => {
    const icon =
        config.type === 'success'
            ? faCheckCircle
            : config.type === 'failed'
              ? faTimesCircle
              : faWarning

    const iconColor =
        config.type === 'success'
            ? Theme.colors.success
            : config.type === 'failed'
              ? Theme.colors.danger
              : Theme.colors.warning
    return (
        <View style={styles.wrapper}>
            <View style={{ padding: 20 }}>
                <View style={styles.card}>
                    <View style={styles.containerTitle}>
                        <FontAwesomeIcon
                            icon={icon}
                            size={responsiveFontSize(13)}
                            color={iconColor}
                        />
                        <Body1 text={config.title} customStyle={styles.title} />
                        <Body1
                            text={config.description}
                            customStyle={styles.description}
                        />
                    </View>
                    {!config.confirmButton && (
                        <TouchableOpacity
                            onPress={config.onOk}
                            style={styles.containerAction}
                        >
                            <ButtonPrimary
                                containerCustomStyle={{ width: '100%' }}
                                text="Ok, Understand !"
                            />
                        </TouchableOpacity>
                    )}
                    {config.confirmButton && (
                        <View style={styles.containerAction}>
                            <ButtonLight
                                onPress={config.onCancel}
                                containerCustomStyle={styles.buttonLight}
                                text="Cancel"
                            />
                            <ButtonPrimary
                                onPress={config.onOk}
                                containerCustomStyle={styles.buttonLight}
                                text="Ok, Got it !"
                            />
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default BasicAlert
