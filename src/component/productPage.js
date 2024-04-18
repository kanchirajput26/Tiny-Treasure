import React from "react";

const ProductPage = () => {
  // Dummy data for product cards
  const products = [
    {
      id: 1,
      name: "Flounce Jersey Dress",
      price: "₹1129",
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/9a92/e4b5/ef77814740ef27f2256a9626aab48664?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQyHLw~kAxUe48TUpMCWzEgPcZz4M7uLpzjompUloYqWV4D7qek4X3h5ySRiy5RL6E2YdJkYbCNl3jypI6n0QC9i7ggGuOEKEI8p9zeC-dqW6i5AZ6DiJLJAVwJ1WN51VDM7FPdX3k4PPj2BkkhVgkEU9N8qplJlXiMs~7ouwByVb4XNKEy5jgeDSix4DvzAHHI0xlAjDFsnzrX0ejWYKWpv6cZMBEXI-cK9Uy97FbSBt8RQPiWDEmYdrb3SxWhX4PzBGOO4wOUrPeMl~T-~smW0eYIMmJtojlLYpGFZYJLaRdXrZdUnNDGPyyqXPHcEmLHfSKEgRd~riFU6UNxp-A__",
    },
    {
      id: 2,
      name: "Yellow Flow Dress",
      price: "₹1399",
      rating: 4.0,
      image:
        "https://s3-alpha-sig.figma.com/img/9a92/e4b5/ef77814740ef27f2256a9626aab48664?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQyHLw~kAxUe48TUpMCWzEgPcZz4M7uLpzjompUloYqWV4D7qek4X3h5ySRiy5RL6E2YdJkYbCNl3jypI6n0QC9i7ggGuOEKEI8p9zeC-dqW6i5AZ6DiJLJAVwJ1WN51VDM7FPdX3k4PPj2BkkhVgkEU9N8qplJlXiMs~7ouwByVb4XNKEy5jgeDSix4DvzAHHI0xlAjDFsnzrX0ejWYKWpv6cZMBEXI-cK9Uy97FbSBt8RQPiWDEmYdrb3SxWhX4PzBGOO4wOUrPeMl~T-~smW0eYIMmJtojlLYpGFZYJLaRdXrZdUnNDGPyyqXPHcEmLHfSKEgRd~riFU6UNxp-A__",
    },
    {
      id: 3,
      name: "Floral Cotton Dress",
      price: "₹1400",
      rating: 3.5,
      image:
        "https://s3-alpha-sig.figma.com/img/9a92/e4b5/ef77814740ef27f2256a9626aab48664?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQyHLw~kAxUe48TUpMCWzEgPcZz4M7uLpzjompUloYqWV4D7qek4X3h5ySRiy5RL6E2YdJkYbCNl3jypI6n0QC9i7ggGuOEKEI8p9zeC-dqW6i5AZ6DiJLJAVwJ1WN51VDM7FPdX3k4PPj2BkkhVgkEU9N8qplJlXiMs~7ouwByVb4XNKEy5jgeDSix4DvzAHHI0xlAjDFsnzrX0ejWYKWpv6cZMBEXI-cK9Uy97FbSBt8RQPiWDEmYdrb3SxWhX4PzBGOO4wOUrPeMl~T-~smW0eYIMmJtojlLYpGFZYJLaRdXrZdUnNDGPyyqXPHcEmLHfSKEgRd~riFU6UNxp-A__",
    },
    {
      id: 4,
      name: "Patterned Cotton Dress",
      price: "₹1129",
      rating: 5.0,
      image:
        "https://s3-alpha-sig.figma.com/img/9a92/e4b5/ef77814740ef27f2256a9626aab48664?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OQyHLw~kAxUe48TUpMCWzEgPcZz4M7uLpzjompUloYqWV4D7qek4X3h5ySRiy5RL6E2YdJkYbCNl3jypI6n0QC9i7ggGuOEKEI8p9zeC-dqW6i5AZ6DiJLJAVwJ1WN51VDM7FPdX3k4PPj2BkkhVgkEU9N8qplJlXiMs~7ouwByVb4XNKEy5jgeDSix4DvzAHHI0xlAjDFsnzrX0ejWYKWpv6cZMBEXI-cK9Uy97FbSBt8RQPiWDEmYdrb3SxWhX4PzBGOO4wOUrPeMl~T-~smW0eYIMmJtojlLYpGFZYJLaRdXrZdUnNDGPyyqXPHcEmLHfSKEgRd~riFU6UNxp-A__",
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ width: '300px', backgroundColor: '#ffffff', padding: '20px' }}>
          <h2>Filters</h2>
          <label>Price Range:</label>
          <select>
            <option value="0-20">$0 - $20</option>
            <option value="21-50">$21 - $50</option>
            <option value="51-100">$51 - $100</option>
          </select>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {/* First row of products */}
          {products.map((product) => (
            <div key={product.id} style={{ width: '200px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '10px' }} />
              <div style={{ padding: '20px', textAlign: 'left' }}>
                <h3 style={{ margin: '0', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'normal' }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</span>
                  <button style={{ backgroundColor: '#FFD25D', color: 'black', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                    <span style={{ marginRight: '5px' }}>{product.rating}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                      <path d="M8 .26l1.48 3.52 4.59.4a.67.67 0 0 1 .37 1.14l-3.54 3.25 1.07 4.55a.67.67 0 0 1-1 .74l-4.17-2.46-4.17 2.46a.67.67 0 0 1-1-.74l1.07-4.55L.56 5.32a.67.67 0 0 1 .37-1.14l4.59-.4L8 .26zM8 2.52l-1.61 3.83-.04.09-.09-.05L4.07 6.35 2.15 7.73l3.72 2.2.09.05-.04.09L8 12.35l1.07-.63.09-.05 3.72-2.2-1.83-1.38-2.19-.19-.09-.08v-.01l-.04-.09L8 2.52zm0 3.03l1.64-1.2-.63 2.67 2.18-1.62-2.86-.25z"/>
                    </svg>
                  </button>
                </h3>
                <p style={{ marginTop: '2px', fontWeight: 'bold' }}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Second row of products */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', paddingTop: '10px' }}>
        {products.map((product) => (
          <div key={product.id + '_dup'} style={{ width: '200px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '10px' }} />
            <div style={{ padding: '20px', textAlign: 'left' }}>
              <h3 style={{ margin: '0', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'normal' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</span>
                <button style={{ backgroundColor: '#FFD25D', color: 'black', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                  <span style={{ marginRight: '5px' }}>{product.rating}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                    <path d="M8 .26l1.48 3.52 4.59.4a.67.67 0 0 1 .37 1.14l-3.54 3.25 1.07 4.55a.67.67 0 0 1-1 .74l-4.17-2.46-4.17 2.46a.67.67 0 0 1-1-.74l1.07-4.55L.56 5.32a.67.67 0 0 1 .37-1.14l4.59-.4L8 .26zM8 2.52l-1.61 3.83-.04.09-.09-.05L4.07 6.35 2.15 7.73l3.72 2.2.09.05-.04.09L8 12.35l1.07-.63.09-.05 3.72-2.2-1.83-1.38-2.19-.19-.09-.08v-.01l-.04-.09L8 2.52zm0 3.03l1.64-1.2-.63 2.67 2.18-1.62-2.86-.25z"/>
                  </svg>
                </button>
              </h3>
              <p style={{ marginTop: '2px', fontWeight: 'bold' }}>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Third row of products with padding */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', paddingTop: '10px' }}>
        {products.map((product) => (
          <div key={product.id + '_trip'} style={{ width: '200px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', marginBottom: '10px', marginLeft: '10px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '10px' }} />
            <div style={{ padding: '20px', textAlign: 'left' }}>
              <h3 style={{ margin: '0', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'normal' }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</span>
                <button style={{ backgroundColor: '#FFD25D', color: 'black', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                  <span style={{ marginRight: '5px' }}>{product.rating}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                    <path d="M8 .26l1.48 3.52 4.59.4a.67.67 0 0 1 .37 1.14l-3.54 3.25 1.07 4.55a.67.67 0 0 1-1 .74l-4.17-2.46-4.17 2.46a.67.67 0 0 1-1-.74l1.07-4.55L.56 5.32a.67.67 0 0 1 .37-1.14l4.59-.4L8 .26zM8 2.52l-1.61 3.83-.04.09-.09-.05L4.07 6.35 2.15 7.73l3.72 2.2.09.05-.04.09L8 12.35l1.07-.63.09-.05 3.72-2.2-1.83-1.38-2.19-.19-.09-.08v-.01l-.04-.09L8 2.52zm0 3.03l1.64-1.2-.63 2.67 2.18-1.62-2.86-.25z"/>
                  </svg>
                </button>
              </h3>
              <p style={{ marginTop: '2px', fontWeight: 'bold' }}>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
