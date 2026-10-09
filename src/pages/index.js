import React from "react"
import data from "../data"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Hero>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Hero>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <>
    <title>{data.seo.title}</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content={data.seo.url} />
    <meta property="og:title" content={data.seo.title} />
    <meta property="og:description" content={data.seo.description} />
    <meta property="og:image" content={`${data.seo.url}/preview.jpg`} />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Nunito:wght@600&display=swap"
      rel="stylesheet"
    />
    {data.fonts.adobeKitId && (
      <link rel="stylesheet" href={`https://use.typekit.net/${data.fonts.adobeKitId}.css`} />
    )}
  </>
)
