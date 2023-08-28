import './assets/css/footer.css';

export default function Footer({ about }) {

    return (
        <>
            <footer>
                <div className="left nav-actions">
                    <a className="nav-action" href="#" onClick={() => about()} >About</a>
                </div>
                <div className="right">
                    <p>Made with ❤️ in France.</p>
                    <p><span className="logo">MyIP</span> — © All rights reserved — Matis Byar — {new Date().getFullYear()}</p>
                </div>
            </footer>
        </>
    )
}