/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { Button, SafeAreaView, ScrollView, View } from 'react-native'

import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { FormBuilder, IField } from './src/Builder/formbuilder'
import Announcement from './src/components/Announcement'
import ButtonLight from './src/components/ButtonLight'
import ButtonPrimary from './src/components/ButtonPrimary'
import LoginPage from './src/Pages/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './src/Pages/Home'
import Routes from './src/Route/routes'

type ITestFieldType = {
    product_name: string
    price: string
    password: string
}

const Stack = createNativeStackNavigator()

const App = () => <Routes />

// function App(): React.JSX.Element {
//     const form = useForm<ITestFieldType>()
//     const { handleSubmit } = form

//     const submit = (data: ITestFieldType) => {
//         console.log('cpba : ', data)
//     }

//     const Fields: IField<ITestFieldType>[] = [
//         {
//             id: 'product_name',
//             type: 'text',
//             validation: {
//                 required: { value: true, message: 'This field is required' },
//             },
//             textfieldConfig: {
//                 config: {
//                     icon: faUser,
//                     label: 'Name',
//                     placeholder: 'Username',
//                 },
//             },
//         },
//         {
//             id: 'price',
//             type: 'text',
//             // validation: {
//             //     required: { value: true, message: 'This field is required' },
//             // },
//             textfieldConfig: {
//                 config: {
//                     icon: faUser,
//                     label: 'Price',
//                     placeholder: 'Username',
//                 },
//             },
//         },
//         {
//             id: 'password',
//             type: 'password',
//             // validation: {
//             //     required: { value: true, message: 'This field is required' },
//             // },
//             textfieldConfig: {
//                 config: {
//                     icon: faKey,
//                     label: 'Price',
//                     placeholder: 'Username',
//                 },
//             },
//         },
//     ]
//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <ScrollView>
//                 <View style={{ padding: 10 }}>
//                     <Announcement
//                         title="Announcement Title !"
//                         description="We sometime create an amazing stuff and sometime we ruin an amazing stuff"
//                     />
//                     <FormBuilder useForm={form} fields={Fields} />
//                     <View style={{ marginTop: 200 }}>
//                         <Button
//                             onPress={handleSubmit(submit)}
//                             title="Test Submit"
//                         />
//                     </View>
//                     <ButtonPrimary text="Submit" />
//                     <View style={{ marginTop: 10 }}>
//                         <ButtonLight text="Submit" />
//                     </View>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

export default App
