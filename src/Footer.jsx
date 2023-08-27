/*
 * Copyright (C) 2023 Matis Byar. - All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file, in source or binary forms, via any medium,
 * is strictly prohibited.
 *
 * For inquiries or licensing options, please contact:
 * matis@byar.fr
 */

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