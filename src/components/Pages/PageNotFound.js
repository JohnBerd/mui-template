import { Typography } from '@material-ui/core'
import React from 'react'
import Page from '../Page'

export default function PageNotFound() {
    return (
        <Page center>
            <Typography component="h1" variant="h1" color="secondary">
                404
            </Typography>
        </Page>
    )
}