import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TouchableOpacity, View } from 'react-native'
import Body1 from '../Body1'
import Body2 from '../Body2'
import { styles } from './style'
import { Theme } from '../../theme.config'
import { FC } from 'react'
import { IAnnouncement } from './type'

const Announcement: FC<IAnnouncement> = ({
    title,
    description,
    hideIcon,
    onHide,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <View style={styles.containerTitle}>
                    {!hideIcon && (
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            color={Theme.colors.primary}
                            size={20}
                            style={styles.icon}
                        />
                    )}
                    <Body1 customStyle={styles.title} text={title} />
                </View>
                <Body2 customStyle={styles.description} text={description} />
            </View>
            <TouchableOpacity onPress={onHide} style={styles.containerAction}>
                <FontAwesomeIcon icon={faTimes} />
            </TouchableOpacity>
        </View>
    )
}

export default Announcement
