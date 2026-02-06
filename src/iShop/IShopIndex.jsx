import { BrowserRouter, Route,Routes,Link} from "react-router-dom";
import IShopHome from "./IShopHome";
import IshopLogin from "./IshopLogin";
import IshopRegister from "./IshopRegister";
import IShopDashboard from "./IShopDashboard";
import IshopProducts from "./IshopProducts";
import IshopProductDetails from "./IshopProductDetails";

export default function IshopIndex(){
    
    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 mt-2">
                <h1>Ishop-online store</h1>
            </header>
            <section className="mt-2 row">
          
                <nav className="col-3">
                    <div>
                        <Link className="btn btn-danger w-100 mt-1" to="/home">Home</Link>
                    </div>
                     <div>
                        <Link className="btn btn-danger w-100 mt-1" to="register">Register</Link>
                    </div>
                     <div>
                        <Link className="btn btn-danger w-100 mt-1" to="login">Login</Link>
                    </div>
                     <div>
                        <Link className="btn btn-danger w-100 mt-1" to="dashboard">Dashboard</Link>
                    </div>
                </nav>
                <main className="col-9">
                    <Routes>
                        <Route path="" element={<IShopHome/>}/>
                        <Route path="/home" element={<IShopHome/>}/>
                        <Route path="/login" element={<IshopLogin/>}/>
                        <Route path="/register" element={<IshopRegister/>}/>
                        <Route path="/dashboard" element={<IShopDashboard/>}/>
                        <Route path="/products/:category"  element={<IshopProducts/>}/>
                        <Route path="details/:id" element={<IshopProductDetails/>}/>
                        <Route path="/errorpage" element={
                            <div>
                                <h2>Invalid Creadentials</h2>
                                <Link to="/login">Try Again</Link>
                            </div>
                        }/>
                    
                    </Routes>

                </main>
               
            </section>

        </div>
    )

}