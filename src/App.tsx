import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
// import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
	return (
		<>
			<Navbar />
			<Products />
			{/* <ProductDetails /> */}
			<Footer />
		</>
	);
}

export default App;
