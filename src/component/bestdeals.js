import React from "react";
import "./component.css"; // Import CSS file for styling

const productData = [
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__",
    productName: "3 Pack cotton jers..",
    price: "₹1299",
    discount: "Buy 2 get 1 free",
  },
  {
    id: 2,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbWNaQ3kUxtRRLszEbBUqnKm7aK2o5W0m9PWxaHkYMFl5sLRpK0Dgsr8pttIyK0V7UD-8Dt5O7Y2tjRuv5eAq2IKRg34q5l-5VbvrSItB0Hj7Wp-cXBgXLLGI0sIt-fViUXqIZ1n61W6JYyJDeNFXYvj7e35luBwffgqB-CPypPv68Y-EMhLCas2uWTsoertjlSCZT6Cyh7lMgtGwjxNCxqdHmaQF9kELYEtnbGhsPYESeHWZm48yj8PEoTdsz9lg8sZiEN3tnFY~wL-OPWkc35a5aJihqxS0f~-xFGN1nq~9ywLZ3MI~SBen-ObEbbryAr5iFPaxbIUmTsQWv-MRg__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 3,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__",
    productName: "3 Pack cotton jers..",
    price: "₹1299",
    discount: "Buy 2 get 1 free",
  },
  {
    id: 4,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbWNaQ3kUxtRRLszEbBUqnKm7aK2o5W0m9PWxaHkYMFl5sLRpK0Dgsr8pttIyK0V7UD-8Dt5O7Y2tjRuv5eAq2IKRg34q5l-5VbvrSItB0Hj7Wp-cXBgXLLGI0sIt-fViUXqIZ1n61W6JYyJDeNFXYvj7e35luBwffgqB-CPypPv68Y-EMhLCas2uWTsoertjlSCZT6Cyh7lMgtGwjxNCxqdHmaQF9kELYEtnbGhsPYESeHWZm48yj8PEoTdsz9lg8sZiEN3tnFY~wL-OPWkc35a5aJihqxS0f~-xFGN1nq~9ywLZ3MI~SBen-ObEbbryAr5iFPaxbIUmTsQWv-MRg__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 5,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__",
    productName: "3 Pack cotton jers..",
    price: "₹1299",
    discount: "Buy 2 get 1 free",
  },
  {
    id: 6,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
  {
    id: 6,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__",
    productName: "White solid Top and",
    price: "₹800",
    discount: "10% off",
  },
];
const BestDeals = () => {
  return (
    <div>
      <h2 style={{ marginLeft: "20px", textAlign: "left", marginTop: "70px" }}>Best Deals</h2>
      <div
        style={{
          display: "flex",
          gap:"20px",
          overflowX: "auto",
          padding: "0 20px",
        }}
      >
        {productData.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={{ position: "relative",
             width: "260px", height: "275px", marginBottom: "16px", border: "1px solid #ccc", borderRadius: "8px", boxSizing: "border-box",  }}
          >
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100%", borderRadius: "8px", margin: "0", padding: "0" }}
            >
              <div className="overlay" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "8px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#fff" }}>
                {product.discount && (
                  <div className="discount-badge" style={{ backgroundColor: "#FFD25D", padding: "4px 8px", borderRadius: "4px", marginBottom: "8px", fontWeight: "bold" }}>{product.discount}</div>
                )}
                <div className="product-details">
                  <h3 style={{ margin: "0", fontSize: "18px", textAlign: "left" }}>{product.productName}</h3>
                  <p style={{ margin: "8px 0 0", fontSize: "16px", fontWeight: "bold", textAlign: "left" }}>{product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
