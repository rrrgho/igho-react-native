interface IAnnouncement {
    title: string
    description: string
    hideIcon?: boolean
    onHide?: () => void
}

export type { IAnnouncement }
