import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/Home"
import ProductPage from "./pages/Product"
import CategoryPage from "./pages/Category"
import HeaderComponent from "./components/HeaderComponent"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Footer from "./pages/Footer"
function App() {
	return (
		<main className="bg-primary text-tertiary">
			<BrowserRouter>
				<div className="max-h-[70px] h-[70px]">
					<HeaderComponent />
				</div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/mens" element={<CategoryPage />} />
					<Route path="/women" element={<CategoryPage />} />
					<Route path="/kids" element={<CategoryPage />} />
					<Route path="/product" element={<ProductPage />}>
						<Route path="/productId" element={<ProductPage />} />
					</Route>
					<Route path="/cart-page" element={<Cart />} />
					<Route path="/login" element={<Login />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</main>
	)
}

export default App
