/*
 * Copyright (C) 2023 Matis Byar. - All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file, in source or binary forms, via any medium,
 * is strictly prohibited.
 *
 * For inquiries or licensing options, please contact:
 * matis@byar.fr
 */

import './assets/css/header.css';
import logo from './assets/images/logo.svg';
import reloadIcon from './assets/images/reload.svg';
import contactIcon from './assets/images/contact.svg';

export default function Header({reload, main, contact}) {

    return (
        <>
            <header>
                <div className="nav-logo" onClick={() => {
                    reload();
                    main();
                }}>
                    <img src={logo} alt="MyIP"/>
                    <h1 className="nav-title">MyIP</h1>
                </div>

                <div className="nav-actions">
                    {navAction({icon: reloadIcon, action: reload, name: "Reload"})}
                    {navAction({icon: contactIcon, action: contact, name: "Contact"})}
                </div>
            </header>
        </>
    )
}

/**
 * Creates a navigation action. Displayed on the right side of the header.
 * @param icon — The icon to display.
 * @param action — The function to call when the icon is clicked.
 * @param name — Optional. If set, a label will be displayed next to the icon.
 */
function navAction({icon, action, name = ""}) {

    return (
        <div className="nav-action" onClick={() => action()}>
            <img src={icon} alt={name} className="small-icon"/>
            {name && <span className="nav-action-name">{name}</span>}
        </div>
    )
}