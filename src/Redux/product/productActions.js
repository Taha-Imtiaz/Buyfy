import { categories, products } from "../../Utility/data"
import { SET_PRODUCTS } from "./productConstants"

//fetch limited products of each category
export var fetchLimitedProducts = () => {
    return async (dispatch) => {
        try {
            //fetch categories
            var productCategories = categories
            //loop through all categories and fetch 3 products of each
            var productsArr = []
            productCategories.forEach((category) => {
                products.forEach((product) => {
                    if(product.category === category) {
                        productsArr.push(product)
                    }
                })
            })
           dispatch({
               type:SET_PRODUCTS,
               payload:{
                  products: productsArr
                }
           })

        } catch (error) {
            console.log(error)
        }
    }
}

//fetch products of particular category
export var fetchProductsOfCategory = (category) => {
return async (dispatch) => {
    try {
        var categoryProducts = products.filter((product) => product.category === category) 
        dispatch({
            type:SET_PRODUCTS,
            payload:{
                products: categoryProducts
            }
        })
    } catch (error) {
        console.log(error)
    }
}
}
//fetch all products
//export var fetchProducts = ()