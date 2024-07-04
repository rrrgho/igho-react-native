import { FC } from 'react'
import { TouchableOpacity, useColorScheme } from 'react-native'
import Body1 from '../Body1'
import { styles } from './style'
import { IButtonLight } from './type'

const ButtonLight: FC<IButtonLight> = ({
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

export default ButtonLight
