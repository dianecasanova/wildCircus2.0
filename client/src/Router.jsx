import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Spectacles from "./pages/Spectacles/Spectacles";
import Consumer from "./pages/Tournee/Consumer";
import Tarifs from "./pages/Tarifs/Tarifs";
import Contact from "./components/Footer/ContactForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/spectacles" component={Spectacles} />
        <Route exact path="/map" component={Consumer} />
        <Route exact path="/tarifs" component={Tarifs} />

        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
