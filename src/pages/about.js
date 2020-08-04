import React from "react"
import Header from "../components/header"

export default function About() {
    return (
        <div style={{ color: `teal` }}>
            <Header headerText="그레이트 코멧" />
            <Header headerText="ctrl vs shift" />
            <h1>About Gatsby</h1>
            <p>Such wow. Very React.</p>
        </div>
    )
}