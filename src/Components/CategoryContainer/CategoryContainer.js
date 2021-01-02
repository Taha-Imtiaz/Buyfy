import React, { useState,useEffect } from "react";
import "./CategoryContainer.css";
import CategoryTab from "../CategoryTab/CategoryTab";
import { products } from "../../Utility/data";
import { productCategorization } from "../../Utility/Utility";
import { connect } from "react-redux";
import { fetchLimitedProducts } from "../../Redux/product/productActions";


const CategoryContainer = (props) => {
  var {fetchLimitedProducts, categorizedProducts} = props
 //fetch all data from redux store
 console.log(categorizedProducts)
useEffect(() => {
fetchLimitedProducts()
},[])


  // var [categorizedProducts,setCategorizedProducts] = useState([])
  // useEffect(() => {
  //   setCategorizedProducts(productCategorization(products))
  // },[])
  // console.log(categorizedProducts)
  //empty dependendency array for component did mount
  return (
    <div className="category-container">
      {categorizedProducts &&
        categorizedProducts.map((category) => (
          <CategoryTab
            key={category.category}
            category={category.category}
            products={category.products}
          />
        ))}
    </div>
  );
};
var actions = {
  fetchLimitedProducts
}
var mapStateToProps = (state) => ({
  categorizedProducts: productCategorization(state.products)
})
export default connect(mapStateToProps, actions)(CategoryContainer);
