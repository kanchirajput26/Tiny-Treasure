import "./App.css";
import MyCarousel from "./component/carousel";
import PageActions from "./component/header";
import Typography from "@mui/material/Typography";
import Category from "./component/category";
import Grid from "@mui/material/Grid";
import Mostlypurchased from "./component/mostlypurchased";
import Bestdeals from "./component/bestdeals";
import Footer from "./component/footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SaleBanner from "./component/saleBanner";
import ProductPage from "./component/productPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <PageActions title="Tiny Treasure" />
              <MyCarousel />
              <Category />
              <Mostlypurchased />
              <Bestdeals />
              <div className="container" >
                <div className="gradient-div item big" >
                  <div className="text-content" >
                    <h1 style={{ paddingTop: "140px", marginBottom: "10px", whiteSpace: "nowrap", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>MUST HAVE</h1>
                    <p style={{ fontWeight: 600, fontSize: "20px", marginBottom: "10px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
                      School Bags Starting from ₹1499{" "}
                    </p>
                    <p style={{ fontSize: "16px"}}>
                      Discover the perfect school bag for your little one –
                      durable, stylish, and ready for adventure!
                    </p>
                    <button className="buy-now-btn" style={{ backgroundColor: '#FFD25D', color: 'black',}}>Buy Now</button>

                  </div>

                  <div >
                    <img
                      src="https://s3-alpha-sig.figma.com/img/0bad/1850/2f46463a967917d948108e4fd1e22b5d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YCvd27WAvNlP3hBTMTAEK7qVtroXyFmA4WkyP3DRRRyX13elqbG1aONWgR88nIfDRR2qutB-KaeBGvfW~moU~4BTGSn2Bqlfw5AxFbQF6U-qANrCEsyR0oKUwS1A45Hrx3yWoUVysWDmeXE8juqgyO-OkiTcpQKKFiPqbboIEH~yixB9R1AYeftV~TpYb9eqzolWzcNABzp7rgb9wU0sKqjoyCsl-mjN-2yPUW5H1evwuN6SCWNvh~t5pglYvOHbmyChYBwIG5bEGvZ1iPxZ61N-JBkjSVbJQI-aUvpUdqYmmVecHTs~9oyKruFoy9RjH~G2BaY217zGNm8lzB9i1Q__"
                      alt="School Bag"
                      className="school-bag-img"
                      marginTop = "20px"
                    />
                  </div>
                </div>
                <div
                  className="discount-container"
                  style={{
                    backgroundColor: "#EEC2C9",
                    borderRadius: "10px",
                    padding: "20px",
                    position: "relative",
                    width: "520px",
                    height: "220px",
                    marginLeft: 50,
                    marginTop: -73,
                  }}
                >
                  <div
                    className="discount-content"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "calc(100% - 60px)",
                      height: "calc(100% - 40px)",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      padding: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <div
                      className="discount-text"
                      style={{ textAlign: "left", flex: "1 1 auto"}}
                    >
                      <h2 className="discount-heading">DISCOUNT</h2>
                      <p className="discount-description"
                      style={{paddingTop:'2px'}}>
                        Score unbeatable deals on top brands with our exclusive
                        discounts
                      </p>
                      <button className="view-all-btn">View All</button>
                    </div>
                    <div>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/74ea/a151/24a6148624f9ee4b9d02272f99c9e97b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eQXtUZF3Is0Bgl1b-vifIX2m73aySDZ0jAi9O~8FgwBhWV3lH39rupabP8QtYp-kp-UbLq6TxNx9mk7YQW60eHhly0rtZKZIASFi5jUFZuYLZL2rEbJejZAd4U6CckHiLTX~OVS6gjIYjdwbF18V-M8qzO7zB7YULl-s-Lyp52KplbLKlGJCcsXU1zts7I4GV698qjJbLTOKldyH94Ofg6WuCBrmKuVSHLsuIRsCXhGUQRHN0dttEBmKaN~Z9ysiTCJAzW90jaqYuv0Vn0hmxomdYMxAocMi2hXDKoXc88mtXyX5t-8f5Gz3i0MO9c6fH3XDfco5tGI9whptBGW6Ew__"
                      alt="example"
                      style={{
                        width: "150px",
                        position: "relative",
                        right: "-20px",
                        top: "1px", // Adjust the top position to move the image lower
                        height: "222px",
                        borderRadius: "0 8px 8px 0",
                      }}
                    />
                    </div>

                  </div>
                </div>
                <div
                  className="sale-container"
                >
                  <SaleBanner />
                </div>
              </div>
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/category"
          element={
            // new web page component
            <div className="App">
              <PageActions title="Tiny Treasure" />
              <ProductPage />
              <Footer />
            </div>
            //<Category />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
