interface IBasicAlertConfig {
    title: string
    description: string
    type: 'success' | 'failed' | 'warning'
    confirmButton?: boolean
    onOk: () => void
    onCancel?: () => void
}

interface IBasicAlert {
    config: IBasicAlertConfig
}
