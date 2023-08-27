/*
 * Copyright (C) 2023 Matis Byar. - All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file, in source or binary forms, via any medium,
 * is strictly prohibited.
 *
 * For inquiries or licensing options, please contact:
 * matis@byar.fr
 */

import ProfileIcon from "./ProfileIcon.jsx";

export default function About() {
    return (
        <>
            <main>
                <h1>About</h1>
                <aside>
                    <ProfileIcon />
                </aside>
                <article>
                    <p>Hi, <b>Matis Byar</b> here, a 🇫🇷 French Computer Science student.</p>
                    <p>Specialized in Information Systems and Apps Integration, I&apos;m currently studying at <a href="https://iut-montpellier-sete.edu.umontpellier.fr/">IUT de Montpellier-Sète</a>.</p>
                    <p>You can contact me for any inquiries on the following platforms:</p>
                    <ul className="about-social">
                        <li><a href="https://www.byar.fr" target="_blank" rel="noreferrer">Portfolio</a></li>
                        <li><a href="https://www.linkedin.com/in/matisbyar/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://www.github.com/matisbyar" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href="mailto:matis@byar.fr" target="_blank" rel="noreferrer">Mail</a></li>
                    </ul>
                </article>
            </main>
        </>
    );
}