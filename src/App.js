import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Event from './pages/event';
import OwnerHome from './pages/owner';
import ResellerHome from './pages/reseller';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomeShop from './pages/shop';
import ProductDetail from './pages/shop/productDetail';

import HomeAdmin from './pages/admin/administrator';
import Order from './pages/admin/administrator/order';
import Modul from './pages/admin/administrator/modul';
import EventAdmin from './pages/admin/administrator/event';

import ResellerList from './pages/admin/owner';
import HistoryOrder from './pages/admin/owner/history-order';
import OwnerSellingTools from './pages/admin/owner/sellingTools';
import OwnerVShare from './pages/admin/owner/VShare';
import OwnerNetworkTools from './pages/admin/owner/NetworkTools';

import ResellerHistoryOrder from './pages/admin/reseller';
import ResellerSellingTools from './pages/admin/reseller/sellingTools';
import ResellerVShare from './pages/admin/reseller/VShare';
import ResellerNetworkTools from './pages/admin/reseller/NetworkTools';

import LoginAdministrator from './pages/admin/administrator/login';
import LoginOwner from './pages/admin/owner/login';
import LoginReseller from './pages/admin/reseller/login';

import ScrollToTop from './ScrollToTop';
import CartPage from './pages/shop/cart';
import MasterOwnerList from './pages/admin/administrator/ownerList';
import MasterResellerList from './pages/admin/administrator/resellerList';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <ScrollToTop>
          <Switch>
            {/* Home Route */}
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/about"> <About/> </Route>
            <Route exact path="/event"> <Event/> </Route>
            <Route exact path="/owner"> <OwnerHome/> </Route>
            <Route exact path="/reseller"> <ResellerHome/> </Route>

            {/* Shop Route */}
            <Route exact path="/shop"> <HomeShop/> </Route>
            <Route exact path="/cart"> <CartPage/> </Route>
            <Route exact path="/shop/product"> <ProductDetail/> </Route>

            {/* Admin Adiministrator Route */}
            <Route exact path="/admin/administrator"> <HomeAdmin /> </Route>
            <Route exact path="/admin/administrator/order"> <Order /> </Route>
            <Route exact path="/admin/administrator/modul"> <Modul /> </Route>
            <Route exact path="/admin/administrator/event"> <EventAdmin /> </Route>
            <Route exact path="/admin/administrator/owner-list"> <MasterOwnerList /> </Route>
            <Route exact path="/admin/administrator/reseller-list"> <MasterResellerList /> </Route>
            <Route exact path="/admin/administrator/login"> <LoginAdministrator /> </Route>
            
            {/* Admin Owner Route */}
            <Route exact path="/admin/owner"> <ResellerList /> </Route>
            <Route exact path="/admin/owner/history-order"> <HistoryOrder /> </Route>
            <Route exact path="/admin/owner/selling-tools"> <OwnerSellingTools /> </Route>
            <Route exact path="/admin/owner/vshare"> <OwnerVShare/> </Route>
            <Route exact path="/admin/owner/network-tools"> <OwnerNetworkTools/> </Route>
            <Route exact path="/admin/owner/login"> <LoginOwner /> </Route>

            {/* Admin Reseller Route */}
            <Route exact path="/admin/reseller"> <ResellerHistoryOrder /> </Route>
            <Route exact path="/admin/reseller/selling-tools"> <ResellerSellingTools /> </Route>
            <Route exact path="/admin/reseller/vshare"> <ResellerVShare/> </Route>
            <Route exact path="/admin/reseller/network-tools"> <ResellerNetworkTools/> </Route>
            <Route exact path="/admin/reseller/login"> <LoginReseller /> </Route>
          </Switch>
          </ScrollToTop>
        </div>
      </div>
    </Router>
  );
}

export default App;

