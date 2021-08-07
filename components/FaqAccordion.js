import React, { useState } from 'react'
import styles from '../styles/faqAccordion.module.css'

export default function FaqAccordion() {
    const [openAccordion, setOpenAccordion] = useState(false)
    return (
        <div className={styles.faqAccordion}>
            <h6 onClick={() => setOpenAccordion(!openAccordion)} style={openAccordion ? { fontWeight: '600', transition: '0.2s', border: 'none' } : null}>Lorem İpsum Dolor Sit Amet<span>{openAccordion ? '-' : '+'}</span></h6>
            <div className={openAccordion ? styles.faqAccordionInner : styles.faqAccordionInnerClose}>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
            </div>
        </div>
    )
}
