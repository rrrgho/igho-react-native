/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { Button, SafeAreaView, Text, View, useColorScheme } from 'react-native'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useForm } from 'react-hook-form'
import { FormBuilder, IField } from './src/Builder/formbuilder'
import { Theme } from './src/theme.config'

type ITestFieldType = {
    username: string
}

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    const form = useForm<ITestFieldType>()
    const { handleSubmit } = form

    const submit = (data: ITestFieldType) => {
        console.log('cpba : ', data)
    }

    const Fields: IField<ITestFieldType>[] = [
        {
            id: 'username',
            type: 'text',
            validation: {
                required: { value: true, message: 'This field is required' },
            },
            textfieldConfig: {
                config: {
                    icon: faUser,
                    label: 'Username',
                    placeholder: 'Username',
                },
            },
        },
    ]
    return (
        <SafeAreaView style={isDarkMode ? Theme.darkMode : Theme.lightMode}>
            <View style={{ padding: 10 }}>
                <FormBuilder useForm={form} fields={Fields} />
                <Button onPress={handleSubmit(submit)} title="Test Submit" />
            </View>
        </SafeAreaView>
    )
}

export default App
