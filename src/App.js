import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Head from "./components/Head";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import DetailComponent from "./components/DetailComponent";
import ProfileEdit from "./components/ProfileEdit";
import MusicianPage from "./components/MusicianPage";
import BookedList from "./components/BookedList";
import Invoice from "./components/Invoice";
import RegisterMusician from "./components/RegisterMusician";
import RegisterCustomer from "./components/RegisterCustomer";
import Upload from "./components/Upload";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import VerificationEmail from "./components/VerificationEmail";
import Privacy from "./components/Privacy";
import EventDetail from "./components/EventDetail";
import EventEdit from "./components/EventEdit";
import EventSchedule from "./components/EventSchedule";
import InvoiceHistory from "./components/InvoiceHistory";
import BookingHistory from "./components/BookingHistory";
import PageProfile from "./components/PageProfile";
import Favorite from "./components/Favorite";
import BookForm from "./components/BookForm";
import Admin from "./components/Admin";

class App extends Component {
  render() {
    const AppRoute = ({
      component: Component,
      layout: Layout,
      auth: Auth,
      ...rest
    }) => (
      <Auth>
        <Route
          {...rest}
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      </Auth>
    );
    const Navigate = props => (
      <div>
        <Head />
        {props.children}
        <Footer />
      </div>
    );
    const Without = props => <div>{props.children}</div>;

    const musician = props =>
      localStorage.token ? props.children : <Redirect to="/" />;
    const costumer = props =>
      localStorage.token ? props.children : <Redirect to="/" />;

    const user = props => props.children;
    return (
      <Provider store={store}>
        <Router>
          <Route path="/admin" exact component={Admin} />
          <AppRoute
            path="/"
            exact
            component={LandingPage}
            layout={Navigate}
            auth={user}
          />
          <Route path="/about" exact component={About} />
          <AppRoute
            path="/detail/:id"
            exact
            component={DetailComponent}
            layout={Navigate}
            auth={user}
          />
          <AppRoute
            path="/edit"
            exact
            component={ProfileEdit}
            layout={Without}
            auth={(musician, costumer)}
          />
          <AppRoute
            exact
            path="/musicianpage"
            component={MusicianPage}
            layout={Navigate}
            auth={user}
          />
          <AppRoute
            exact
            path="/bookedlist=:id"
            component={BookedList}
            layout={Navigate}
            auth={user}
          />
          <AppRoute
            exact
            path="/bookinghistory=:id"
            component={BookingHistory}
            layout={Navigate}
            auth={(musician, costumer)}
          />
          <AppRoute
            exact
            path="/bookform"
            component={BookForm}
            layout={Navigate}
            auth={(musician, costumer)}
          />
          <AppRoute
            path="/invoice=:id"
            exact
            component={Invoice}
            layout={Navigate}
            auth={(musician, costumer)}
          />
          <AppRoute
            path="/invoicehistory=:id"
            exact
            component={InvoiceHistory}
            layout={Navigate}
            auth={(costumer, musician)}
          />
          <AppRoute
            path="/registermusician"
            exact
            component={RegisterMusician}
            layout={Without}
            auth={user}
          />
          <AppRoute
            path="/registercustomer"
            exact
            component={RegisterCustomer}
            layout={Without}
            auth={user}
          />
          <AppRoute
            path="/upload"
            exact
            component={Upload}
            layout={Navigate}
            auth={(musician, costumer)}
          />
          <AppRoute
            path="/signin"
            exact
            component={Signin}
            layout={Without}
            auth={user}
          />
          <AppRoute
            path="/signup"
            exact
            component={Signup}
            layout={Without}
            auth={user}
          />
          <AppRoute
            path="/forgotpassword"
            exact
            component={ForgotPassword}
            layout={Without}
            auth={user}
          />
          <AppRoute
            path="/verification"
            exact
            component={VerificationEmail}
            layout={Without}
            auth={user}
          />
          <AppRoute
            path="/privacy"
            exact
            component={Privacy}
            layout={Without}
            auth={user}
          />
          <AppRoute
            path="/eventdetail/:id"
            exact
            component={EventDetail}
            layout={Navigate}
            auth={(musician, costumer)}
          />
          <AppRoute
            path="/eventedit/:id"
            exact
            component={EventEdit}
            layout={Navigate}
            auth={(musician, costumer)}
          />
          <AppRoute
            path="/eventschedule=:id"
            exact
            component={EventSchedule}
            layout={Navigate}
            auth={(musician, costumer)}
          />
          <AppRoute
            path="/pageprofile"
            exact
            component={PageProfile}
            layout={Navigate}
            auth={(costumer, musician)}
          />
          <AppRoute
            path="/favorite"
            exact
            component={Favorite}
            layout={Navigate}
            auth={costumer}
          />
        </Router>
      </Provider>
    );
  }
}

export default App;
