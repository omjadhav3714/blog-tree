import React from 'react';
import Head from 'next/head';


// We will use this later when our site gets indexed after the release
const SEOHeader = ({
    pageTitle = "AStheTECH",
    description = "We go AS-the-TECH goes! We are fascinated by how far we can go and not by how far we have come.",
    keywords = '"AStheTECH", "AS the Tech", "AS-the-Tech", "Consultancy", "IT Consultancy", "it consultant", "consulting firm", "it consulting services", "Edtech", "Abhay Ubhale", "Coding Abby", "Om Jadhav", "Hasnain Sayyed" ,"blogs","plants","trees" ',
    imageUrl = "images/logo.png",
}) => {
    return (
        <Head>
            <title>{pageTitle}</title>
            <link rel="icon" href="/favicon.ico" />
            {/* Meta tags */}
            <meta charSet="UTF-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="MaitriJhadanshi - Pratibha Ubhale" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* OG Tags */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" content="https://technovanza.org" /> */}
            <meta property="og:description" content={description} />
            {/* <meta property="og:determiner" content="the" /> */}
            <meta property="og:locale" content="en_IN" />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter SEO Tags */}
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageUrl} />
        </Head>
    )
}

export default SEOHeader;