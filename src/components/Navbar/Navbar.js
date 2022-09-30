import './style.scss'
import logo from './../../assets/logo.svg'
import {useState} from "react";
import {Routes} from "../../utils/Routes";
import {useNavigationContext} from "../../hooks";

const MENU = [
    {
        name: 'HOME',
        route: Routes.HOME,
    },
    {
        name: 'OFFER',
        route: Routes.OFFER,
    },
    {
        name: 'GALLERY',
        route: Routes.GALLERY
    },
    {
        name: 'CONTACT',
        route: Routes.CONTACT
    },
    {
        name: 'API',
        route: Routes.API
    }

]

export default function Navbar() {
    const navigationContext = useNavigationContext()

    return (
        <>
            <nav className="nav">
                <div className="nav__navWrapper">
                    <img src={logo} alt=""/>
                    <ul className="nav__navTabs">
                        {MENU.map((item, idx) => (
                            <li key={idx}>
                                <button
                                    className={item.route === navigationContext.currentPage ? '-active' : ''}
                                    onClick={() => navigationContext.navigate(item.route)}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h4>
                        Rect Course - Project 1
                    </h4>
                </div>
            </nav>
        </>
    )
}