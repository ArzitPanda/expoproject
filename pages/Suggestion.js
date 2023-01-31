import Head from 'next/head'
import React from 'react'
import Card from '../Components/Suggestions/Card'
import NavSuggestion from '../Components/Suggestions/NavSuggestion'
import styles from "../styles/Suggestion.module.css"

const Suggestion = () => {
  return (
    <div>
    <Head>
    <title>suggestion</title>
    <script src="https://cdn.tailwindcss.com"></script>
    </Head>
    <NavSuggestion/>
            <div className={styles.layoutContainer}>

                    <div className={styles.layout}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

            </div>



    </div>
  )
}

export default Suggestion