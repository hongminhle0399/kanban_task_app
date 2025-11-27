import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui/dialog'
import { PropsWithChildren, useState } from 'react'

export interface AppDialogProps extends PropsWithChildren {
    title: string
    description?: string
    open: boolean
    onOpenChange: (open: boolean) => void
    showCloseButton?: boolean
}

const AppDialog = ({ title, description, children, open, onOpenChange, showCloseButton = true }: AppDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent showCloseButton={showCloseButton}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default AppDialog
