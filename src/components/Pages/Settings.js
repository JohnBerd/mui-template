import React from 'react'
import Page from '../Page'
import { Settings } from '@material-ui/icons'
import UserSettings from './UserSettings'

export default function PrivatePage() {
    return (
        <Page title="Private Page">
            <UserSettings />
        </Page>
    )
}