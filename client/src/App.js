import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import NavBar from "./components/views/NavBar/NavBar";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import NavBar from "./components/views/NavBar/NavBar";
import About from "./components/views/AboutPage/About";

//page

import HomeScreen from "./components/views/ShoppingPage/HomeScreen";
import MyPage from "./components/views/ShoppingPage/MyPage";
import ProductScreen from "./components/views/ShoppingPage/ProductScreen";
//쇼핑목록 안 components
import AuthBoard from "./components/views/AuthBoard/AuthBoard";
import { HomeWorkSharp } from "@material-ui/icons";
// 추후 삭제

function App() {
    return (
        <Router>
            <NavBar />
            {/* <BackDrop /> */}
            <div>
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    <Route
                        exact
                        path="/login"
                        component={Auth(LoginPage, false)}
                    />
                    <Route
                        exact
                        path="/register"
                        component={Auth(RegisterPage, false)}
                    />
                    <Route exact path="/about" component={Auth(About, null)} />

                    {/* usEarth 페이지 추후 null -> true로 변경 */}
                    <Route
                        exact
                        path="/authboard"
                        component={Auth(AuthBoard, true)}
                    />
                    {/* <Route exact path="/shop" component={Auth(About, null)} /> */}
                    <Route
                        exact
                        // path="/products"
                        path="/product"
                        component={Auth(HomeScreen, null)}
                    />
                    <Route
                        exact
                        // path="/products/:id"
                        path="/product/:id"
                        component={Auth(ProductScreen, null)}
                    />
                    <Route
                        exact
                        path="/MyPage"
                        component={Auth(MyPage, null)}
                    />

                    <Route exact path="/board" component={Auth(About, null)} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
