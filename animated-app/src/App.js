import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/MainPage/Navbar/Navbar";
import SubHeader from "./Component/MainPage/SubHeader/subHeader";
import Footer from "./Component/MainPage/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import VideoHomePage from "./Component/MainPage/VideoHomePage/VideoHomePage";
import ProductDetails from "./Component/ProductDetail/ProductDetail";
import LogIn from "./Component/MainPage/Login/Login";
import SignUp from "./Component/MainPage/SignUp/SignUp";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OrderForm from "./Component/UserOrderForm/OrderForm/OrderForm";
import Accessories from "./Component/Accessory/Accessories/Accessories";
import Products from "./Component/AppleProducts/Products/Products";
import Contact from "./Component/MainPage/Contact/Contact";
import About from "./Component/MainPage/AboutUs/AboutUs";
import SearchByCategory from "./Component/Accessory/SearchByCategory/SearchByCategory"
import SearchByProduct from "./Component/Accessory/SearchByProduct/SearchByProduct";

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#24204f',
    },
    secondary: {
      main: '#FF0000',
    },
    info: {
      main: '#a0f2e3',
      light: "#066b8a"
    },
    background: {
      default: "#64748B"
    }
  },
});

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<VideoHomePage />} />
          <Route path="/access" element={<Accessories />}>
            <Route index element={<SearchByCategory />} />
            <Route path="searchByProduct" element={<SearchByProduct />} />
            <Route path="searchByCategory" element={<SearchByCategory />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/product" element={<SubHeader />} >
            <Route index element={<Products />} />
            <Route path="Products/:type" element={<Products />} />
          </Route>
          <Route path="product/Products/:type/buyNow/:id" element={<OrderForm />} />
          <Route path="product/Products/:type/learnMore/:id" element={<ProductDetails />} />

        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;