import React,{useEffect} from "react";
import "./Category.css";
import ContentContainer from "../../Components/ContentContainer/ContentContainer";
import { connect } from "react-redux";
import { fetchProductsOfCategory } from "../../Redux/product/productActions";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Category = (props) => {
    var {fetchProductsOfCategory,products,match:{params: {categoryName}}} = props;
    useEffect(() => {
        fetchProductsOfCategory(categoryName)
    }, [])
    // console.log(products)
  return (
    <ContentContainer>
        <div className="category-products-grid">
    {products && products.map((product) => <ProductCard key = {product.id} product = {product}/>)}
    </div>
    </ContentContainer>
  );
};
var mapStateToProps = (state) =>({
products: state.products    
})
var actions = {
    fetchProductsOfCategory
}
export default connect(mapStateToProps,actions)(Category);
