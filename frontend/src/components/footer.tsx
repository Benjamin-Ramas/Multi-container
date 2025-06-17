import styles from "../app/page.module.css";
import Image from "next/image";
export default function PortfolioFooter(){
    return(
        <footer className={styles.footer}>
            <a href="https://bsky.app/profile/blankedslate.bsky.social" target="_blank">
                <Image 
                    aria-hidden
                    src="/Bluesky_Logo.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Bluesky
            </a>
            <a href="https://blankedslate.itch.io/" target="_blank">
                <Image 
                    aria-hidden
                    src="/Itch.svg"
                    alt="Itch.io icon"
                    width={16}
                    height={16}
                />
                Itch.io
            </a>
        </footer>
    )
}