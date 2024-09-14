import { FC } from 'react'
import { Alert, TouchableOpacity, useColorScheme } from 'react-native'
import Body1 from '../Body1'
import { styles } from './style'
import { IButtonPrimary } from './type'

const ButtonPrimary: FC<IButtonPrimary> = ({
    text,
    containerCustomStyle,
    textCustomStyle,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, ...containerCustomStyle }}
            onPress={onPress}
        >
            <Body1
                text={text}
                customStyle={{ ...styles.title, ...textCustomStyle }}
            />
        </TouchableOpacity>
    )
}

export default ButtonPrimary
