import { faChevronDown, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { FC, useRef } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
} from 'react-native'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import SelectDropdown from 'react-native-select-dropdown'
import { Theme } from '../../theme.config'
import Body1 from '../Body1'
import ErrorText from '../ErrorText/ErrorText'
import { IDataSourceSelect, ISelectTwo } from './type'

const SelectTwo: FC<ISelectTwo> = ({ config, dataSource }) => {
    const isDarkMode = useColorScheme() === 'dark'
    const optionDropdownRef: any = useRef()

    return (
        <View>
            {config?.label && (
                <View style={appStyles.labelContainer}>
                    <Body1 text={config.label} />
                    {config.required && (
                        <Text style={{ color: Theme.colors.danger }}>*</Text>
                    )}
                </View>
            )}
            <View
                style={[
                    appStyles.container,
                    isDarkMode
                        ? config?.darkModeStyleContainer
                        : config?.lightModeStyleContainer,
                    config?.error && { borderColor: Theme.colors.danger },
                ]}
            >
                {config?.icon && (
                    <View style={[appStyles.iconWrapper]}>
                        <FontAwesomeIcon
                            size={config.iconSize ?? 20}
                            color={Theme.colors.icon}
                            icon={config.icon ?? faMugSaucer}
                        />
                    </View>
                )}
                <SelectDropdown
                    searchPlaceHolder="Search option ..."
                    search
                    data={dataSource ?? []}
                    onSelect={(selectedItem: IDataSourceSelect) => {
                        optionDropdownRef.current?.reset()
                        config.onSelect && config.onSelect(selectedItem)
                    }}
                    renderButton={(selectedItem: IDataSourceSelect, isOpen) => {
                        return (
                            <TouchableOpacity style={[appStyles.selectTwo]}>
                                <Text style={[appStyles.selectTwoText]}>
                                    {selectedItem?.label || 'Select a feeling'}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                    renderItem={(
                        item: IDataSourceSelect,
                        index,
                        isSelected
                    ) => {
                        return (
                            <View
                                style={{
                                    ...styles.dropdownItemStyle,
                                    ...(isSelected && {
                                        backgroundColor: '#D2D9DF',
                                    }),
                                }}
                            >
                                <Text style={[appStyles.selectTwoTextSelected]}>
                                    {item.label}
                                </Text>
                            </View>
                        )
                    }}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
            </View>
            {config?.error && (
                <View style={appStyles.errorMessageContainer}>
                    <ErrorText text={config.error} />
                </View>
            )}
            <View
                style={[
                    config.error
                        ? { ...appStyles.iconChevron, bottom: 43 }
                        : appStyles.iconChevron,
                ]}
            >
                <FontAwesomeIcon
                    size={config.iconSize ?? 20}
                    color={Theme.colors.icon}
                    icon={faChevronDown}
                />
            </View>
        </View>
    )
}

export default SelectTwo

const appStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: responsiveHeight(7),
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: Theme.border.radius,
        backgroundColor: Theme.colors.white,
    },
    selectTwo: {
        backgroundColor: Theme.colors.white,
        color: Theme.colors.white,
        flex: 1,
        borderRadius: Theme.border.radius,
        paddingRight: 10,
        justifyContent: 'center',
    },
    selectTwoText: {
        fontSize: responsiveFontSize(2),
        opacity: 0.3,
    },
    selectTwoTextSelected: {
        fontSize: responsiveFontSize(2),
        opacity: 1,
        textAlign: 'left',
    },
    iconWrapper: {
        backgroundColor: 'transparent',
        width: responsiveWidth(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconChevron: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 20,
        bottom: 22,
    },
    labelContainer: {
        paddingLeft: 5,
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    errorMessageContainer: {
        paddingLeft: 5,
        paddingTop: 5,
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 400,
        backgroundColor: '#E9ECEF',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 16,
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#151E26',
    },
    dropdownButtonStyle: {
        flex: 1,
        height: 50,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
        textAlign: 'center',
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
        minHeight: 75,
        maxHeight: 300,
        overflow: 'scroll',
    },
    dropdownItemStyle: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#B1BDC8',
        backgroundColor: '#fff',
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
        textAlign: 'center',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
})
