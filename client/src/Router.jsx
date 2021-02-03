import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Spectacles from "./pages/Spectacles/Spectacles";
import Tournee from "./pages/Tournee/Tournee";
import Tarifs from "./pages/Tarifs/Tarifs";
import Apropos from "./pages/Apropos/Apropos";
import Contact from "./components/Footer/ContactForm";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/spectacles" component={Spectacles} />
        <Route exact path="/tournee" component={Tournee} />
        <Route exact path="/tarifs" component={Tarifs} />
        <Route exact path="/apropos" component={Apropos} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
