import React, { useEffect, useState} from 'react';
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';



const App = () => {


    const [productState, setProductState] = useState([])

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })

                setProductState(newProductsState)
            })

        // setTimeout(()=> {
        //     setProductState([
        //     'tooth paste',
        //     'tooth brush',
        //     'mouth wash',
        //     'dental floss',
        //     'mouth guard'
        // ])
        // }, 2000)
    }, [])
    const myItem = "mike";

    const hasProducts = productState.length > 0;

    return (

      <div style={{textAlign: 'center'}}>


        <Button buttonText="myButton"></Button>
        {hasProducts ? <SearchBar products={productState}/> : "loading"}

        {/* <CountButton incrementBy={1} buttonColor={"blue"}/>
        <CountButton incrementBy={5} buttonColor={"red"}/> 
        <SearchBar products={[
            'tooth paste',
            'tooth brush',
            'mouth wash',
            'dental floss',
            'mouth guard'
        ]}></SearchBar>

        <SearchBar products={[
              'bike helmet',
              'bike',
              'bike gloves',
              'tires',
              'oil'
          ]}></SearchBar> */}

          <CountButton incrementBy={11}></CountButton>
      </div>
    )
  }

  export default App;



