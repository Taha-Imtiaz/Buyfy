import React, { useState } from 'react'
import "./ProductGallery.css"

const ProductSelectorImage = (props) => {
    var {imageURL, mainImageHandler,mainImage} = props
    // console.log(imageURL,mainImage)
    return (
        // <div style={{background:`url(${imageURL})`}} className="image-selector">

        // </div>
        <div style={{background:imageURL, transform: mainImage === imageURL && "scale(1.1)"}} onClick = {() => mainImageHandler(imageURL)} className="image-selector">

         </div>

    )
}

const ProductGallery = (props) => {
    var {galleryArr} = props
    var [mainImage,setMainImage] = useState(galleryArr[0])
    var mainImageHandler = (img) => {
        setMainImage(img)
    }

    return (
       <div className="product-gallery-container">
           <div style={{background:mainImage}} className="product-gallery-main-image">

           </div>
           <div className="product-gallery-image-selector">
        {galleryArr && galleryArr.map((image) => <ProductSelectorImage key = {image} mainImage = {mainImage} imageURL = {image} mainImageHandler = {mainImageHandler} ></ProductSelectorImage>)}




           </div>
       </div>
    )
}

export default ProductGallery
