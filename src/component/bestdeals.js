import React from "react";
import "./component.css"; // Import CSS file for styling

const productData = [
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfqBjxN~t0xv87QgFh7-DPouivsY9964GnU53XKTWFjBZaMWrK5pJte2DvqAj~Jh6nHaJwQXb~cs5G9sPUFwOK1PI6gg0~R6VhnwVr0YkMXelHm047sBOhCxfXTmkdCREiV~3Nmsr1vfO8XEvNnMTdmsLD7O9O7qum4R3mDHCy56p3SgTtBPrLgryc6F4sEldptjuq6WoJhcONENjOIU2dqvvHRtmI9Pnwgh7o9zNRd8tkn3fur2DBe-2Yozwr~TBG4nWoAJVSjMk810y2Va3yFkVdSuOA-zkyGe7idkjKHRLrj~wtf9APyYdvd4Q86y~6QScmKVb2qDbCBSQrR9fQ__",
    productName: "3 Pack cotton jersey",
    price: "₹1299",
    discount: "Buy 2 get 1 free",
  },
  {
    id: 2,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHGeeUI6~R8N6cCvEvzpSeBNxjC8UmZrqXXCJMUi8asnz3Pw~8JXBVbOeYFkAZxgolR1jTenpOilK2yIb4JynSiprSeHAkAGwW7fLA-ev-u-7dGfsP2Cs-Znv8cMUe76wDzmYDNPoq826~RQ8dyGWPpyJpB1aXI0nl-7ud6mzf1Dyd~CnHLPidjGmXBxj--YI8E4TyXhzK1g2vDXBIBFtFUDAyEaJS82cJfoAl1Q~lqJpnV1UhlmngnDzI-KjUclkIN1FYpwitcbS6gs-7zMrV9pi7TmlcABR7fkZIULebLoNeb~zz0IEvUcPMbJY-ed9rNek5CZesWZ41UHOLFM9w__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 3,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfqBjxN~t0xv87QgFh7-DPouivsY9964GnU53XKTWFjBZaMWrK5pJte2DvqAj~Jh6nHaJwQXb~cs5G9sPUFwOK1PI6gg0~R6VhnwVr0YkMXelHm047sBOhCxfXTmkdCREiV~3Nmsr1vfO8XEvNnMTdmsLD7O9O7qum4R3mDHCy56p3SgTtBPrLgryc6F4sEldptjuq6WoJhcONENjOIU2dqvvHRtmI9Pnwgh7o9zNRd8tkn3fur2DBe-2Yozwr~TBG4nWoAJVSjMk810y2Va3yFkVdSuOA-zkyGe7idkjKHRLrj~wtf9APyYdvd4Q86y~6QScmKVb2qDbCBSQrR9fQ__",
    productName: "3 Pack cotton jersey",
    price: "₹1299",
    discount: "Buy 2 get 1 free",
  },
  {
    id: 4,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHGeeUI6~R8N6cCvEvzpSeBNxjC8UmZrqXXCJMUi8asnz3Pw~8JXBVbOeYFkAZxgolR1jTenpOilK2yIb4JynSiprSeHAkAGwW7fLA-ev-u-7dGfsP2Cs-Znv8cMUe76wDzmYDNPoq826~RQ8dyGWPpyJpB1aXI0nl-7ud6mzf1Dyd~CnHLPidjGmXBxj--YI8E4TyXhzK1g2vDXBIBFtFUDAyEaJS82cJfoAl1Q~lqJpnV1UhlmngnDzI-KjUclkIN1FYpwitcbS6gs-7zMrV9pi7TmlcABR7fkZIULebLoNeb~zz0IEvUcPMbJY-ed9rNek5CZesWZ41UHOLFM9w__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 5,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfqBjxN~t0xv87QgFh7-DPouivsY9964GnU53XKTWFjBZaMWrK5pJte2DvqAj~Jh6nHaJwQXb~cs5G9sPUFwOK1PI6gg0~R6VhnwVr0YkMXelHm047sBOhCxfXTmkdCREiV~3Nmsr1vfO8XEvNnMTdmsLD7O9O7qum4R3mDHCy56p3SgTtBPrLgryc6F4sEldptjuq6WoJhcONENjOIU2dqvvHRtmI9Pnwgh7o9zNRd8tkn3fur2DBe-2Yozwr~TBG4nWoAJVSjMk810y2Va3yFkVdSuOA-zkyGe7idkjKHRLrj~wtf9APyYdvd4Q86y~6QScmKVb2qDbCBSQrR9fQ__",
    productName: "3 Pack cotton jersey",
    price: "₹1299",
    discount: "Buy 2 get 1 free",
  },
  {
    id: 6,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHGeeUI6~R8N6cCvEvzpSeBNxjC8UmZrqXXCJMUi8asnz3Pw~8JXBVbOeYFkAZxgolR1jTenpOilK2yIb4JynSiprSeHAkAGwW7fLA-ev-u-7dGfsP2Cs-Znv8cMUe76wDzmYDNPoq826~RQ8dyGWPpyJpB1aXI0nl-7ud6mzf1Dyd~CnHLPidjGmXBxj--YI8E4TyXhzK1g2vDXBIBFtFUDAyEaJS82cJfoAl1Q~lqJpnV1UhlmngnDzI-KjUclkIN1FYpwitcbS6gs-7zMrV9pi7TmlcABR7fkZIULebLoNeb~zz0IEvUcPMbJY-ed9rNek5CZesWZ41UHOLFM9w__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 7,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfqBjxN~t0xv87QgFh7-DPouivsY9964GnU53XKTWFjBZaMWrK5pJte2DvqAj~Jh6nHaJwQXb~cs5G9sPUFwOK1PI6gg0~R6VhnwVr0YkMXelHm047sBOhCxfXTmkdCREiV~3Nmsr1vfO8XEvNnMTdmsLD7O9O7qum4R3mDHCy56p3SgTtBPrLgryc6F4sEldptjuq6WoJhcONENjOIU2dqvvHRtmI9Pnwgh7o9zNRd8tkn3fur2DBe-2Yozwr~TBG4nWoAJVSjMk810y2Va3yFkVdSuOA-zkyGe7idkjKHRLrj~wtf9APyYdvd4Q86y~6QScmKVb2qDbCBSQrR9fQ__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 8,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHGeeUI6~R8N6cCvEvzpSeBNxjC8UmZrqXXCJMUi8asnz3Pw~8JXBVbOeYFkAZxgolR1jTenpOilK2yIb4JynSiprSeHAkAGwW7fLA-ev-u-7dGfsP2Cs-Znv8cMUe76wDzmYDNPoq826~RQ8dyGWPpyJpB1aXI0nl-7ud6mzf1Dyd~CnHLPidjGmXBxj--YI8E4TyXhzK1g2vDXBIBFtFUDAyEaJS82cJfoAl1Q~lqJpnV1UhlmngnDzI-KjUclkIN1FYpwitcbS6gs-7zMrV9pi7TmlcABR7fkZIULebLoNeb~zz0IEvUcPMbJY-ed9rNek5CZesWZ41UHOLFM9w__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 9,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfqBjxN~t0xv87QgFh7-DPouivsY9964GnU53XKTWFjBZaMWrK5pJte2DvqAj~Jh6nHaJwQXb~cs5G9sPUFwOK1PI6gg0~R6VhnwVr0YkMXelHm047sBOhCxfXTmkdCREiV~3Nmsr1vfO8XEvNnMTdmsLD7O9O7qum4R3mDHCy56p3SgTtBPrLgryc6F4sEldptjuq6WoJhcONENjOIU2dqvvHRtmI9Pnwgh7o9zNRd8tkn3fur2DBe-2Yozwr~TBG4nWoAJVSjMk810y2Va3yFkVdSuOA-zkyGe7idkjKHRLrj~wtf9APyYdvd4Q86y~6QScmKVb2qDbCBSQrR9fQ__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 10,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHGeeUI6~R8N6cCvEvzpSeBNxjC8UmZrqXXCJMUi8asnz3Pw~8JXBVbOeYFkAZxgolR1jTenpOilK2yIb4JynSiprSeHAkAGwW7fLA-ev-u-7dGfsP2Cs-Znv8cMUe76wDzmYDNPoq826~RQ8dyGWPpyJpB1aXI0nl-7ud6mzf1Dyd~CnHLPidjGmXBxj--YI8E4TyXhzK1g2vDXBIBFtFUDAyEaJS82cJfoAl1Q~lqJpnV1UhlmngnDzI-KjUclkIN1FYpwitcbS6gs-7zMrV9pi7TmlcABR7fkZIULebLoNeb~zz0IEvUcPMbJY-ed9rNek5CZesWZ41UHOLFM9w__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
];
const BestDeals = () => {
  return (
    <div style={{ minWidth: "calc(260px * 4 + 60px)", overflowX: "auto" }}>
      <h2 style={{ marginLeft: "20px", textAlign: "left", marginTop: "70px" }}>Best Deals</h2>
      <div
        style={{
          display: "flex",
          gap: "12px",
          padding: "0 20px",
        }}
      >
        {productData.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={{
              position: "relative",
              minWidth: "250px",
              height: "275px",
              marginBottom: "16px",
              border: "1px solid #ccc",
              borderRadius: "14px",
              boxSizing: "border-box",
              overflow: "hidden", // Ensure the gradient doesn't overflow
            }}
          >
            {product.discount && (
              <div
                className="discount-badge"
                style={{
                  backgroundColor: "#FFD25D",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  zIndex: 1,
                  fontWeight: 'bold'
                }}
              >
                {product.discount}
              </div>
            )}
            <div
              className="product-image"
              style={{
                backgroundImage: `url(${product.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                borderRadius: "14px",
                margin: "0",
                padding: "0",
              }}
            >
              <div
                className="gradient-overlay"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  height: "50%",
                  background: "linear-gradient(to top, rgba(0, 0, 0, 5), transparent)",
                  borderRadius: "0 0 14px 14px", // Round bottom corners
                }}
              />
            </div>
            <div className="product-details" style={{ padding: "16px", position: "absolute", bottom: "0", left: "0", width: "100%", boxSizing: "border-box", zIndex: 1 }}>
              <h3 style={{ margin: "0", fontSize: "18px", textAlign: "left", fontWeight:"normal" }}>{product.productName}</h3>
              <p style={{ margin: "8px 0 0", fontSize: "16px", fontWeight: "bold", textAlign: "left" }}>
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;

