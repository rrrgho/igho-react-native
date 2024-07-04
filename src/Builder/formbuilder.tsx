/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Controller, RegisterOptions, UseFormReturn } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import Textfield from '../components/Textfield/Textfield'
import { ITextfield } from '../components/Textfield/type'
import SelectTwo from '../components/SelectTwo/SelectTwo'
import { IDataSourceSelect, ISelectTwo } from '../components/SelectTwo/type'

interface BaseField<T> {
    id: (keyof T & string) | ''
    type: '' | 'text' | 'number' | 'password' | 'dropdown'
    placeholder?: string
    textfieldConfig?: ITextfield
    selectConfig?: ISelectTwo
    dataSource?: Array<IDataSourceSelect>
    onSelect?: any
    validation?: RegisterOptions
    editable?: boolean
}

export type IField<T = { [key: string]: string }> = BaseField<T>

export interface IFormBuilder<T> {
    fields: IField<T>[]
    useForm: UseFormReturn<any>
}

export function FormBuilder<T>(props: IFormBuilder<T>) {
    const { fields, useForm } = props
    const {
        control,
        formState: { errors },
    } = useForm
    let render_component: any = []
    fields.map((item_form, key) => {
        const {
            id,
            type,
            dataSource = [],
            textfieldConfig,
            selectConfig,
            onSelect,
            validation = {},
            editable = true,
        } = item_form
        switch (type) {
            case 'text':
                render_component.push(
                    <Controller
                        key={key}
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <View style={styles.section}>
                                <Textfield
                                    config={{
                                        ...textfieldConfig?.config,
                                        onChangeText: onChange,
                                        onBlur: onBlur,
                                        error: errors[id]?.message,
                                        required: validation.required,
                                        value,
                                    }}
                                />
                            </View>
                        )}
                        rules={validation}
                        name={id}
                    />
                )
                break
            case 'password':
                render_component.push(
                    <Controller
                        key={key}
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <View style={styles.section}>
                                <Textfield
                                    config={{
                                        ...textfieldConfig?.config,
                                        onChangeText: onChange,
                                        onBlur: onBlur,
                                        error: errors[id]?.message,
                                        required: validation.required,
                                        type: 'password',
                                        value,
                                    }}
                                />
                            </View>
                        )}
                        rules={validation}
                        name={id}
                    />
                )
                break
            case 'dropdown':
                render_component.push(
                    <Controller
                        key={key}
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <View style={styles.section}>
                                <SelectTwo
                                    config={{
                                        ...selectConfig?.config,
                                        onSelect: (
                                            selectedValue: IDataSourceSelect
                                        ) => {
                                            onChange(selectedValue.value)
                                        },
                                        error: errors[id]?.message,
                                        required: validation.required,
                                    }}
                                    dataSource={dataSource}
                                />
                            </View>
                        )}
                        rules={validation}
                        name={id}
                    />
                )
                break
        }
    })

    const styles = StyleSheet.create({
        section: {
            marginTop: 10,
        },
    })

    return <View>{render_component}</View>
}
