// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// const cardsData = [
//     {
//       imageSrc: "https://s3-alpha-sig.figma.com/img/244a/9f16/5989f6860eda36a69240a3614d8a26c9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpsXLoMyK0qjjhs9tRUjvE4wxoG2dhEbsk~DrmZI70GMHaeWZJM7sYsRneq1lV5Fs-1gtfqPJK6P0PlmrM8sqJFlI78geJt0JVcAUGmG0~0~pmY2mQgQ-6d0WXCLEaUHP9XgJsKYBlobMNY-EB9LMcg-z83WWlh5ivIv7Um1g6nz9RTVQdDubBtiQycPe5kP-s4WGAHqABgaZ05gUbWA0mbqpuLh3FhFrw5UA7HJf98QYN-DkAUkbyriMXmXVb-I3NSFSVGSH5EBNWgkze0nWOhNBKetZoRZV0XxfzNAAOOJcpWjUVUJgxr5qJDP~fNWmpARrdNEkOf3WTucD5HYeg__",
//       title: "Animal Printed Dungaree",
//       price: 720
//     },
//     {
//       imageSrc: "https://s3-alpha-sig.figma.com/img/934a/7711/9a3886e3e0fa7f6c20c91df1beb56682?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=in4iynMYSxp0L5cV98tZ-tESvynJTkX3yp0XH4TssFMl1D03WAZCqF2eQ83FwQSUAoYJBYMj15Ikk36VlykXsYTnT3xkmL2gR3LcGfON0beUTbEBphTTzC2LW-AIITHOHsCb1RcYZQ1igPzSFfrRfqfLat5yA~yi9-XpznXoePpEXaAdFLyiECyqoYBJhN4UBVD9fWswowRzm0Ym0W8J9TwxVtZm9ArwUBQ3vvuxW--35PC-JkbpqGyMOp2yzfMh2HewDwLQ7bFSBkgrgPMV0rGs9xvfxoqRXHMy~K0QP15EB8JH8lhFw5KL4vPmCRq3omrX9gFx~5-2-SQZSkwUcw__",
//       title: "Animal Printed Dungaree",
//       price: 720
//     },
//     {
//       imageSrc: "https://s3-alpha-sig.figma.com/img/d8ba/4468/33690edb6b39f4a8917d063845742a76?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E8jbVz9ZABoKncNr5C4PjzrlRHfFI~PQZzSFbkB-zsC7XsZaE9Mn1Kg4j3-qX2zB9zi5HYR6o0XIIhftQrLYROOoQ~pxOd-qDjy0YqeahkcSLqvixFGIA5FuENbXWLdiXezNNAXjf52pmTQBLYGQaGYMvmec781ipSBbtiiu4PP4YuxME6e3yAZkOreRE3Zq-9T2ptFhGlDuagBt3e7P7Nmk8Q~4SKbZYkziF3TyDBdMN5Ca3I3ISCaMa6W-i4vNTxL28waBMOMir9bcMQByOgA0gRFRIydfq-LZQ-mMNsbo9yyrMI~i4tQD3cEO6dF7bcRvp6FZt8Fwl7SCIFkJxQ__",
//       title: "2 - Piece Cotton Set",
//       price: 720
//     },
//     {
//       imageSrc: "https://s3-alpha-sig.figma.com/img/ece5/baf9/bd6ed02b814541bd7b661b0aee86f1bd?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i9I3DR5ULb5oFz9lqjBPHoqrdMP8VSqYgrowOnbdNdFhZ~ms2KtLSaaEo4L2QEqEvXK8kljuV7F1fj-RqdGC1Pi2Oeyvfml9rn053g2LPKzgn309eeNSK0VmGHkKhwk9jqMZGPDJ8YHVA5H0q4xgsbOVrVrRqiEhbsoj9zAG3k1OxsaJsIH2BqXJ8RJKOybWd8t990GW~awGQGC8rR47m5-SZVVnz4M34CXmfKIfsX~eSTNbfd1fbA0l17DqfTX2~7vHgLxs5eW6-wBkDglvp5WjCMFk7iafexh0TOO4G3TTPHDp-ijLNJU7UiLu9fkcnyQ4Y4-r5vkP-wQmHxA~-w__",
//       title: "2 - Piece Set",
//       price: 720
//     },
//     {
//       imageSrc: "https://s3-alpha-sig.figma.com/img/9a92/e4b5/ef77814740ef27f2256a9626aab48664?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQyHLw~kAxUe48TUpMCWzEgPcZz4M7uLpzjompUloYqWV4D7qek4X3h5ySRiy5RL6E2YdJkYbCNl3jypI6n0QC9i7ggGuOEKEI8p9zeC-dqW6i5AZ6DiJLJAVwJ1WN51VDM7FPdX3k4PPj2BkkhVgkEU9N8qplJlXiMs~7ouwByVb4XNKEy5jgeDSix4DvzAHHI0xlAjDFsnzrX0ejWYKWpv6cZMBEXI-cK9Uy97FbSBt8RQPiWDEmYdrb3SxWhX4PzBGOO4wOUrPeMl~T-~smW0eYIMmJtojlLYpGFZYJLaRdXrZdUnNDGPyyqXPHcEmLHfSKEgRd~riFU6UNxp-A__",
//       title: "2 - Piece Printed Set",
//       price: 720
//     },
//     {
//       imageSrc: "https://s3-alpha-sig.figma.com/img/9a92/e4b5/ef77814740ef27f2256a9626aab48664?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQyHLw~kAxUe48TUpMCWzEgPcZz4M7uLpzjompUloYqWV4D7qek4X3h5ySRiy5RL6E2YdJkYbCNl3jypI6n0QC9i7ggGuOEKEI8p9zeC-dqW6i5AZ6DiJLJAVwJ1WN51VDM7FPdX3k4PPj2BkkhVgkEU9N8qplJlXiMs~7ouwByVb4XNKEy5jgeDSix4DvzAHHI0xlAjDFsnzrX0ejWYKWpv6cZMBEXI-cK9Uy97FbSBt8RQPiWDEmYdrb3SxWhX4PzBGOO4wOUrPeMl~T-~smW0eYIMmJtojlLYpGFZYJLaRdXrZdUnNDGPyyqXPHcEmLHfSKEgRd~riFU6UNxp-A__",
//       title: "2 - Tops and Shorts Set",
//       price: 720
//     }
     
//   ];
  
//   export default function Mostlypurchased() {
//     return (
//   <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
//     {cardsData.map((item, index) => (
//       <Card key={index} sx={{ width: 'calc(16.63% - 10px)' }} variant="outlined">
//         <CardContent>
//           <img
//             src={item.imageSrc}
//             alt="category"
//             style={{ width: "100%", height: "275px", borderRadius: "20px" }}
//           />
//           <p style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 500, fontSize: "20px", lineHeight: "25px", color: '#000000' }}>
//             {item.title}
//           </p>
//           <p style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 700, fontSize: "22px", lineHeight: "28px", color: "#000000" }}>
//             {item.price}
//           </p>
//         </CardContent>
//       </Card>
//     ))}
//   </Box>
  
//     );
//   }


import React from 'react';
import ProductCard from './productCard';
import './component.css'; // Import CSS file for styling

const productData = [
  { id: 1, imageUrl: "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__", productName: "3 Pack cotton jers..", price: "₹1299", discount: "Buy 2 get 1 free" },
  { id: 2, imageUrl: "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbWNaQ3kUxtRRLszEbBUqnKm7aK2o5W0m9PWxaHkYMFl5sLRpK0Dgsr8pttIyK0V7UD-8Dt5O7Y2tjRuv5eAq2IKRg34q5l-5VbvrSItB0Hj7Wp-cXBgXLLGI0sIt-fViUXqIZ1n61W6JYyJDeNFXYvj7e35luBwffgqB-CPypPv68Y-EMhLCas2uWTsoertjlSCZT6Cyh7lMgtGwjxNCxqdHmaQF9kELYEtnbGhsPYESeHWZm48yj8PEoTdsz9lg8sZiEN3tnFY~wL-OPWkc35a5aJihqxS0f~-xFGN1nq~9ywLZ3MI~SBen-ObEbbryAr5iFPaxbIUmTsQWv-MRg__", productName: "White solid Top and", price: "₹800", discount: "10% off" },
  { id: 3, imageUrl: "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__", productName: "3 Pack cotton jers..", price: "₹1299", discount: "Buy 2 get 1 free" },
  { id: 4, imageUrl: "https://s3-alpha-sig.figma.com/img/52a5/7c2d/040e925b1cb07a2fe0bb3746d1a57bd7?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbWNaQ3kUxtRRLszEbBUqnKm7aK2o5W0m9PWxaHkYMFl5sLRpK0Dgsr8pttIyK0V7UD-8Dt5O7Y2tjRuv5eAq2IKRg34q5l-5VbvrSItB0Hj7Wp-cXBgXLLGI0sIt-fViUXqIZ1n61W6JYyJDeNFXYvj7e35luBwffgqB-CPypPv68Y-EMhLCas2uWTsoertjlSCZT6Cyh7lMgtGwjxNCxqdHmaQF9kELYEtnbGhsPYESeHWZm48yj8PEoTdsz9lg8sZiEN3tnFY~wL-OPWkc35a5aJihqxS0f~-xFGN1nq~9ywLZ3MI~SBen-ObEbbryAr5iFPaxbIUmTsQWv-MRg__", productName: "White solid Toop and", price: "₹800", discount: "10% off" },
  { id: 5, imageUrl: "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__", productName: "3 Pack cotton jers..", price: "₹1299", discount: "Buy 2 get 1 free" },
  { id: 6, imageUrl: "https://s3-alpha-sig.figma.com/img/5cee/6efc/b2e52898544c2f796d38a8f255521027?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lapMFi693hAmef4pJALX8bkPGLgweIQgN-q8vg5am20b-8AoBMWv34u8q01H7rICOuizCtQ7i4Tki8g7ZKgspWKqQEECEipzCUalzJMzPp0XC2SpeTa0yKHyp0JN5dJSac9eNBYWkQwXg1fq6qSsesz8ffArTLgqLsfqO4fCDsq1RtHu2KsrfTU6jAVyiFXngMsltPk2mxouIkvmMj-dXIp2djnFud~kzrjUTfEG1oV9HEhrEyzz1uaVoGuVPbpU0sSoC3HU-C3p0UEo7lhnSK5cjxGilZJ4UatGvWD9Hy1gEz83NjuwprqG085SGtH25NPn1xugSgBjJAC9ckEmnQ__", productName: "White solid Top and", price: "₹800", discount: "10% off" }
];

const BestDeals = () => {
  return (
    <div>
      <h2 className="best-deals-heading" style={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px' }}>Best Deals</h2>
      <div className="product-container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        {productData.map(product => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            productName={product.productName}
            price={product.price}
            discount={product.discount}
            style={{ flex: '0 0 calc(33.33% - 16px)' }} // Apply flex basis and subtract margin
          />
        ))}
      </div>
    </div>
  );
}

export default BestDeals;
