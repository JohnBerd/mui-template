import React, { useEffect, useState } from 'react'
import Page from '../Page'
import ReactMarkdown from 'react-markdown'
import { Paper, Card, Container } from '@material-ui/core';
import CodeBlock from '../CodeBlock';



export default function Home() {
    const [terms, setTerms] = useState()
    const termsFrPath = require("../../README.md");
    useEffect(() => {
        fetch(termsFrPath).then((response) => response.text()).then((text) => {
            setTerms(text)
        })
        console.log(terms)
    });

    return (
        <Page title="Home">
            <Card>
                <Container>
                    <div><ReactMarkdown source={terms} renderers={{ code: CodeBlock }} /></div>
                </Container>
            </Card>
        </Page>
    )
}