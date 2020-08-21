import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './Components/Shop';
import Pages from './Components/Pages';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import BlogDetails from './Components/Pages/BlogDetails';
import ShopDetails from './Components/Pages/ShopDetails';
import Checkout from './Components/Pages/Checkout';
import ShoppingCart from './Components/Pages/ShoppingCart';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/pages" exact component={Pages} />
					<Route path="/blog" exact component={Blog} />
					<Route path="/contact" exact component={Contact} />
					<Route
						path="/Components/Pages/BlogDetails"
						exact
						component={BlogDetails}
					/>
					<Route path="/Components/Pages/Checkout" exact component={Checkout} />
					<Route
						path="/Components/Pages/ShopDetails"
						exact
						component={ShopDetails}
					/>
					<Route
						path="/Components/Pages/ShoppingCart"
						exact
						component={ShoppingCart}
					/>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
