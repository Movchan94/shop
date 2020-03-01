import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {setProducts} from "./Actions/Products";
import axios from "axios";
import MenuGoods from "./Components/Menu";
import {Container, Card} from "semantic-ui-react";
import ProductCard from "./Components/ProductCurd";
import Preloader from "./Common/Preloader/Preloader";


class App extends React.Component {
    componentWillMount() {
        axios.get('/productsJson.json').then(({data}) => {
            this.props.setProducts(data)
        })
    }

    render() {
        return (
            <Container>
                <MenuGoods/>
                <Card.Group itemsPerRow={3}>
                    {!this.props.isLoading
                        ? <Preloader/>
                        : this.props.products.map(p => (
                            <ProductCard {...p}/>
                        ))
                    }
                </Card.Group>
            </Container>

        )

    }
}

const mapStateToProps = ({products}) => ({
    products: products.items,
    isLoading: products.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    setProducts: products => dispatch(setProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


