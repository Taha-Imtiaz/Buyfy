import React from 'react'
import { connect } from 'react-redux'
import ContentContainer from '../../Components/ContentContainer/ContentContainer'
import ProductGallery from '../../Components/ProductGallery/ProductGallery'
import "./Product.css"

const Product = (props) => {
    var {product:{name, description, imageUrl} = {}} = props
   
    return (
        
            <ContentContainer>
           <div className="product-page-layout">
               <div className="product-info">
                <h1>{name}</h1> 
                <h4>{description}</h4>
               </div>
               <div className="product-gallery">
                   <ProductGallery galleryArr = {['red', 'orange', 'green', 'purple']}/>
               </div>

           </div>
            </ContentContainer>
        
    )
}
var mapStateToProps = (state, {match:{params:{productId}}}) => ({
product: state.products.find((product) => product.id === productId)
})
export default connect(mapStateToProps)(Product)
