import React, {useMemo, useState} from "react";
import {Routes} from "./Routes";
import HomeScreen from "../components/HomeScreen";
import ContactScreen from "../components/ContactScreen";
import OfferScreen from "../components/OfferScreen";
import BaseLayout from "../components/BaseLayout";
import GalleryScreen from "../components/GalleryScreen";
import {contextData as defaultContextData, NavigationContext} from "../hooks/useNavigationContext";
import ApiScreen from "../components/ApiScreen/ApiScreen";

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState(Routes.HOME)

    const contextData = useMemo(() => ({
        ...defaultContextData,
        currentPage,
        navigate: (data) => setCurrentPage(data),
    }), [currentPage, setCurrentPage]);



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
            case Routes.API:
                return <ApiScreen/>
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