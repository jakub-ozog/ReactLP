import './style.scss';
import React from "react";
import {useNavigationContext} from "../../hooks";
import {Routes} from "../../utils/Routes";

export default function FunFacts() {
    const navigationContext = useNavigationContext()

    return (
        <section>
            <div className="funFacts">
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                    <li>Current route: {navigationContext.currentPage}</li>
                </ul>

                <button onClick={() => navigationContext.navigate(Routes.CONTACT)}>contact us</button>
            </div>
        </section>
    )
}
