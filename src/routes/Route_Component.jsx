import { Route, Routes } from "react-router-dom";
import Home from "../pages/home_page/Home";
import Category from "../pages/category_page/Category";
import Details from "../pages/details_page/Details";
import * as root from "../components/constant_JS/RootPath";

export default function Route_Component() {
  return(
    <Routes>
      {/* for home page */}
      <Route
        path={`/${root.Home_Page}`} element={<Home/>}
      />

      {/* for  Search */}
      <Route
        path={`/${root.Home_Page}/:category/search/:keyword`} element={<Category/>}
      />

      {/* for category view (movie/tv) */}
      <Route
        path={`/${root.Home_Page}/:category`} element={<Category/>}
      />

      {/* for details view (a single movie/tv) */}
      <Route
        path={`/${root.Home_Page}/:category/:id`} element={<Details/>}
      />
    </Routes>
  );
}