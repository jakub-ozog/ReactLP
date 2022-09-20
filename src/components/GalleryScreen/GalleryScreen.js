import './style.scss';
import React from "react";
import {
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5,
    Pic6
} from "../../assets/gallery_images"

export default function GalleryScreen() {

    return (
        <section className="gallery">
            <h1 className="gallery__header">Simple React gallery</h1>
            <div className="gallery__wrapper">
                <img src={Pic1} alt=""/>
                <img src={Pic2} alt=""/>
                <img src={Pic3} alt=""/>
                <img src={Pic4} alt=""/>
                <img src={Pic5} alt=""/>
                <img src={Pic6} alt=""/>
            </div>
        </section>
    )
}