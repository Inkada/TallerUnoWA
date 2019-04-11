import React, { Component } from 'react';
import './Products.css';
import store from '../../stores/stores';




class Products extends Component{

constructor(props: {}){
    super(props);
    store.getProducts();
}


      render(){
        return <div className="Products">{
                    store.products && store.products.map((pro)=>{
                        return <div className='Products_Contenedor' key={pro.product_id}>
                                  <img src={'https://backendapi.turing.com/images/products/'+pro.thumbnail} alt=""/>
                                <div>{pro.name}</div>
                                <div>{pro.price}</div>
                                <div>{pro.description}</div>
                             
                                
                            </div>
                    })
                }
      </div>
    }
}

export default Products;