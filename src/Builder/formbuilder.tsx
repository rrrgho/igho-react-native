/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Controller, RegisterOptions, UseFormReturn } from "react-hook-form";
import { View } from "react-native";
import Textfield from "../components/Textfield/Textfield";
import { ITextfield } from "../components/Textfield/type";

interface BaseField<T> {
  id: (keyof T & string) | "";
  type: "" | "text" | "number" | "password" | "dropdown";
  placeholder?: string;
  textfieldConfig?: ITextfield;
  dataSource?: Array<object>;
  onSelect?: any;
  validation?: RegisterOptions;
  editable?: boolean;
}

export type IField<T = { [key: string]: string }> = BaseField<T>;

export interface IFormBuilder<T> {
  fields: IField<T>[];
  useForm: UseFormReturn<any>;
}

export function FormBuilder<T>(props: IFormBuilder<T>) {
  const { fields, useForm } = props;
  const {
    control,
    formState: { errors },
  } = useForm;
  let render_component: any = [];
  fields.map((item_form, key) => {
    const {
      id,
      type,
      dataSource = [],
      textfieldConfig,
      onSelect,
      validation = {},
      editable = true,
    } = item_form;
    switch (type) {
      case "text":
        console.log("error :", errors[id]);
        render_component.push(
          <Controller
            key={key}
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
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
            )}
            rules={validation}
            name={id}
          />,
        );
        break;
    }
  });

  return <View>{render_component}</View>;
}
