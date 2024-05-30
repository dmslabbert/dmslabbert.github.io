import React from "react"
import styles from "./styles.module.css"
import useBaseUrl from "@docusaurus/useBaseUrl"

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <div>
                        <img
                            className="index-page-image-center"
                            src={useBaseUrl("/img/4136918.jpg")}
                        />
                        <div className="attribution">
                            <a href="https://www.freepik.com/free-vector/developer-activity-concept-illustration_9319773.htm#fromView=search&page=1&position=2&uuid=46bd2fa2-105e-486b-9859-461e4e57fe6e">
                                Image by storyset on Freepik
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
