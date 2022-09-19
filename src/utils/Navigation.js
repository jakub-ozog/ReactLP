import React, {useMemo, useState} from "react";
import HomeScreen from "../components/HomeScreen";
import ContactScreen from "../components/ContactScreen";
import OfferScreen from "../components/OfferScreen";
import BaseLayout from "../components/BaseLayout";
import {Routes} from "./Routes";
import GalleryScreen from "../components/GalleryScreen";
import {UserNavigationContext} from "../context/UserNavigationContext";
import {contextData as defaultContextData, NavigationContext} from "../hooks/useNavigationContext";
import {logDOM} from "@testing-library/react";

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState(Routes.HOME)

    const contextData = useMemo(() => ({
        ...defaultContextData,
        currentPage,
        navigate: (data) => setCurrentPage(data),
    }), [currentPage, setCurrentPage]);


    const result = () => {
        console.log('execute result')
        return 2 + 5
    }

    const sum = useMemo(() => result(), []);


    const Page = () => {
        switch (currentPage) {
            case Routes.HOME:
                return <HomeScreen/>
            case Routes.OFFER:
                return <OfferScreen/>
            case Routes.CONTACT:
                return <ContactScreen/>
            case Routes.GALLERY:
                return <GalleryScreen/>
            default:
                return '404'
        }
    }

    return (
        <NavigationContext.Provider value={contextData}>
            <BaseLayout>
                <Page/>
            </BaseLayout>
        </NavigationContext.Provider>

    )
}