import React, { useState } from "react";
const ProductPage = () => {
  // Dummy data for product cards
  const products = [
    {
      id: 1,
      name: "Flounce Jersey Dress",
      price: "₹1129",
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/cb9d/feee/973057ada79b7988594f379d2dd0fc5e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbx4mXDqROkpYbhdF5qrCKKOZC0bNClzSn4VNCLlI2gtNWIt5~KUetAeVERMCO3d5pFBPGSUKUk3Q4yXcNsGtSg9RUqJhM92tqONVYBvpxxQPajj7J-tAGrTAlAQ3dos91MajX4cZC9jlHgWna1hUNffHbO7Ygsy1bJ5twKc181aqP0R31a434c~3Jh3Yj2f9MGgjmGoz3fTd9eeLLkybCRxtGgrJIlbyxh09r0fysxQH-4t2LCSo2lVDZOzbpWQJiGh88SLt1rFDa3uL5NWA-OkGTDfhpu3exno-wmC7ON623Wddm3zZlr7o8yrJYMNTyBGDcKiYy7pwmSXGYD-Sg__",
    },
    {
      id: 2,
      name: "Yellow Flow Dress",
      price: "₹1399",
      rating: 4.0,
      image:
        "https://s3-alpha-sig.figma.com/img/4210/5a48/9cb1bf4c80e07b2044ad0ab2f40e8144?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2TPbobWkQ2C1ighUCT-ABtTsDZtBM1CI3ZWhS9Ph0xK9-denPXvvAyefCUE774RKOv3NHAzpy1rVO5DzdeTfXOtrD8wkjlM5ysAzv~8gnG-o0Yc~6Vj2XNBGrrOT2jnUpYUMDk7oyx9XNnIgW12fbYgMvxjnPS2VOgSIqyOAgQnljM1VMBfH73OyfjlfSVgoiGooiq-Dm7dr5DZfdLKgJBZryoddtbNHuO9xUfWTVM2YOelCPbwzEsc6gezL3KmHnQXMawdHmvlfuxfSoe8HmsFrJOAJ6zQVC~auoW9z2Ou8bkv-ghudcmBM6w-GlqAgoadg1r0CXTyIecxDzSRLw__",
    },
    {
      id: 3,
      name: "Floral Cotton Dress",
      price: "₹1400",
      rating: 3.5,
      image:
        "https://s3-alpha-sig.figma.com/img/64b2/d196/0e99d4e4e5b03f17b95cb6987ac06192?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8NPUmfvVF-CE9Buqh2Q479pqZtTNWg~7cD2la~i~i0UHgEhchV-9KxrwcXRi-G1NDIFBIjpM6wbDrA3sSuyly6EdUXfpQ7G9ZaobXST-7Yi-x8Ryf0tyvKKQcng5g-vcOJabV2rycsmNPvtQqWRx2jsQG4~ZWwDaoN-sx8voBky1vJmoANPTqk6p-2DC7CgCySr--zgOjQik8-jFu2P0NBhPtvT9GKd71xA3YAngfIkSg0jgPJLuJQsBTmizmUN~1y5GpuDZemnT1UInSPIa4Iv8vFkb1fzULxGReuXO4Hg~BcgcV~MLlZAtfs-QRPIJ6yx9NA2GYIGcNUN5vE6TA__",
    },
    {
      id: 4,
      name: "Patterned Cotton Dress",
      price: "₹1129",
      rating: 5.0,
      image:
        "https://s3-alpha-sig.figma.com/img/83e8/b866/5bf47423c6b5cd55c1504a44346ec63c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONozgnyMU3lhGCdryl9xk-BGJQ6IYxF1~M2yvE0vgHWFyMgp24-0MedzFLkv31NBoKQGbjn1n6CQ01ByfwYiPV8qix5KtJkazQiYK~Fk5hdPcZxWYYCrhZvjyKCGgr-rJsLpHTBhnNMKqmpmCgiphQnx9FsL41OGnj5dHzerbjFsb-gamRCmXsyJsUfYbJaSQLNQCLN2Dw87Taxw50WviAOyIytkrtvQGQQMKsGO85oTNwAJ2XYq50beiNUSDCT7O2kasotGv8I8MYzn-qb7OF7z8HFXGEAykFViciZJHb301Yje4aFG8IPnTXSWK5dB3~Z0Ib0ZM9hPMxysakQA~w__",
    },
    {
      id: 5,
      name: "Flounce Jersey Dress",
      price: "₹1129",
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/cb9d/feee/973057ada79b7988594f379d2dd0fc5e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbx4mXDqROkpYbhdF5qrCKKOZC0bNClzSn4VNCLlI2gtNWIt5~KUetAeVERMCO3d5pFBPGSUKUk3Q4yXcNsGtSg9RUqJhM92tqONVYBvpxxQPajj7J-tAGrTAlAQ3dos91MajX4cZC9jlHgWna1hUNffHbO7Ygsy1bJ5twKc181aqP0R31a434c~3Jh3Yj2f9MGgjmGoz3fTd9eeLLkybCRxtGgrJIlbyxh09r0fysxQH-4t2LCSo2lVDZOzbpWQJiGh88SLt1rFDa3uL5NWA-OkGTDfhpu3exno-wmC7ON623Wddm3zZlr7o8yrJYMNTyBGDcKiYy7pwmSXGYD-Sg__",
    },
    {
      id: 6,
      name: "Yellow Flow Dress",
      price: "₹1399",
      rating: 4.0,
      image:
        "https://s3-alpha-sig.figma.com/img/4210/5a48/9cb1bf4c80e07b2044ad0ab2f40e8144?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2TPbobWkQ2C1ighUCT-ABtTsDZtBM1CI3ZWhS9Ph0xK9-denPXvvAyefCUE774RKOv3NHAzpy1rVO5DzdeTfXOtrD8wkjlM5ysAzv~8gnG-o0Yc~6Vj2XNBGrrOT2jnUpYUMDk7oyx9XNnIgW12fbYgMvxjnPS2VOgSIqyOAgQnljM1VMBfH73OyfjlfSVgoiGooiq-Dm7dr5DZfdLKgJBZryoddtbNHuO9xUfWTVM2YOelCPbwzEsc6gezL3KmHnQXMawdHmvlfuxfSoe8HmsFrJOAJ6zQVC~auoW9z2Ou8bkv-ghudcmBM6w-GlqAgoadg1r0CXTyIecxDzSRLw__",
    },
    {
      id: 7,
      name: "Floral Cotton Dress",
      price: "₹1400",
      rating: 3.5,
      image:
        "https://s3-alpha-sig.figma.com/img/64b2/d196/0e99d4e4e5b03f17b95cb6987ac06192?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8NPUmfvVF-CE9Buqh2Q479pqZtTNWg~7cD2la~i~i0UHgEhchV-9KxrwcXRi-G1NDIFBIjpM6wbDrA3sSuyly6EdUXfpQ7G9ZaobXST-7Yi-x8Ryf0tyvKKQcng5g-vcOJabV2rycsmNPvtQqWRx2jsQG4~ZWwDaoN-sx8voBky1vJmoANPTqk6p-2DC7CgCySr--zgOjQik8-jFu2P0NBhPtvT9GKd71xA3YAngfIkSg0jgPJLuJQsBTmizmUN~1y5GpuDZemnT1UInSPIa4Iv8vFkb1fzULxGReuXO4Hg~BcgcV~MLlZAtfs-QRPIJ6yx9NA2GYIGcNUN5vE6TA__",
    },
    {
      id: 8,
      name: "Patterned Cotton Dress",
      price: "₹1129",
      rating: 5.0,
      image:
        "https://s3-alpha-sig.figma.com/img/83e8/b866/5bf47423c6b5cd55c1504a44346ec63c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONozgnyMU3lhGCdryl9xk-BGJQ6IYxF1~M2yvE0vgHWFyMgp24-0MedzFLkv31NBoKQGbjn1n6CQ01ByfwYiPV8qix5KtJkazQiYK~Fk5hdPcZxWYYCrhZvjyKCGgr-rJsLpHTBhnNMKqmpmCgiphQnx9FsL41OGnj5dHzerbjFsb-gamRCmXsyJsUfYbJaSQLNQCLN2Dw87Taxw50WviAOyIytkrtvQGQQMKsGO85oTNwAJ2XYq50beiNUSDCT7O2kasotGv8I8MYzn-qb7OF7z8HFXGEAykFViciZJHb301Yje4aFG8IPnTXSWK5dB3~Z0Ib0ZM9hPMxysakQA~w__",
    },
    {
      id: 9,
      name: "Flounce Jersey Dress",
      price: "₹1129",
      rating: 4.5,
      image:
        "https://s3-alpha-sig.figma.com/img/cb9d/feee/973057ada79b7988594f379d2dd0fc5e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lbx4mXDqROkpYbhdF5qrCKKOZC0bNClzSn4VNCLlI2gtNWIt5~KUetAeVERMCO3d5pFBPGSUKUk3Q4yXcNsGtSg9RUqJhM92tqONVYBvpxxQPajj7J-tAGrTAlAQ3dos91MajX4cZC9jlHgWna1hUNffHbO7Ygsy1bJ5twKc181aqP0R31a434c~3Jh3Yj2f9MGgjmGoz3fTd9eeLLkybCRxtGgrJIlbyxh09r0fysxQH-4t2LCSo2lVDZOzbpWQJiGh88SLt1rFDa3uL5NWA-OkGTDfhpu3exno-wmC7ON623Wddm3zZlr7o8yrJYMNTyBGDcKiYy7pwmSXGYD-Sg__",
    },
    {
      id: 10,
      name: "Yellow Flow Dress",
      price: "₹1399",
      rating: 4.0,
      image:
        "https://s3-alpha-sig.figma.com/img/4210/5a48/9cb1bf4c80e07b2044ad0ab2f40e8144?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2TPbobWkQ2C1ighUCT-ABtTsDZtBM1CI3ZWhS9Ph0xK9-denPXvvAyefCUE774RKOv3NHAzpy1rVO5DzdeTfXOtrD8wkjlM5ysAzv~8gnG-o0Yc~6Vj2XNBGrrOT2jnUpYUMDk7oyx9XNnIgW12fbYgMvxjnPS2VOgSIqyOAgQnljM1VMBfH73OyfjlfSVgoiGooiq-Dm7dr5DZfdLKgJBZryoddtbNHuO9xUfWTVM2YOelCPbwzEsc6gezL3KmHnQXMawdHmvlfuxfSoe8HmsFrJOAJ6zQVC~auoW9z2Ou8bkv-ghudcmBM6w-GlqAgoadg1r0CXTyIecxDzSRLw__",
    },
    {
      id: 11,
      name: "Floral Cotton Dress",
      price: "₹1400",
      rating: 3.5,
      image:
        "https://s3-alpha-sig.figma.com/img/64b2/d196/0e99d4e4e5b03f17b95cb6987ac06192?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8NPUmfvVF-CE9Buqh2Q479pqZtTNWg~7cD2la~i~i0UHgEhchV-9KxrwcXRi-G1NDIFBIjpM6wbDrA3sSuyly6EdUXfpQ7G9ZaobXST-7Yi-x8Ryf0tyvKKQcng5g-vcOJabV2rycsmNPvtQqWRx2jsQG4~ZWwDaoN-sx8voBky1vJmoANPTqk6p-2DC7CgCySr--zgOjQik8-jFu2P0NBhPtvT9GKd71xA3YAngfIkSg0jgPJLuJQsBTmizmUN~1y5GpuDZemnT1UInSPIa4Iv8vFkb1fzULxGReuXO4Hg~BcgcV~MLlZAtfs-QRPIJ6yx9NA2GYIGcNUN5vE6TA__",
    },
    {
      id: 12,
      name: "Patterned Cotton Dress",
      price: "₹1129",
      rating: 5.0,
      image:
        "https://s3-alpha-sig.figma.com/img/83e8/b866/5bf47423c6b5cd55c1504a44346ec63c?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONozgnyMU3lhGCdryl9xk-BGJQ6IYxF1~M2yvE0vgHWFyMgp24-0MedzFLkv31NBoKQGbjn1n6CQ01ByfwYiPV8qix5KtJkazQiYK~Fk5hdPcZxWYYCrhZvjyKCGgr-rJsLpHTBhnNMKqmpmCgiphQnx9FsL41OGnj5dHzerbjFsb-gamRCmXsyJsUfYbJaSQLNQCLN2Dw87Taxw50WviAOyIytkrtvQGQQMKsGO85oTNwAJ2XYq50beiNUSDCT7O2kasotGv8I8MYzn-qb7OF7z8HFXGEAykFViciZJHb301Yje4aFG8IPnTXSWK5dB3~Z0Ib0ZM9hPMxysakQA~w__",
    },
  ];
  const [categoryFilterExpanded, setCategoryFilterExpanded] = useState(false);
  const [priceFilterExpanded, setPriceFilterExpanded] = useState(false);

  const [expandedFilters, setExpandedFilters] = useState([]); // To keep track of the expanded filters

  // Function to toggle the expanded state of a filter
  const toggleFilter = (filter) => {
    if (expandedFilters.includes(filter)) {
      setExpandedFilters(expandedFilters.filter((f) => f !== filter));
    } else {
      setExpandedFilters([...expandedFilters, filter]);
    }
  };

  return (
    <div style={{ display: "flex", padding: "20px", height: "100vh" }}>
      {/* Left column for filters */}
      <div
        style={{
          width: "300px",
          backgroundColor: "#ffffff",
          padding: "20px",
          fontFamily: "Quicksand",
        }}
      >
        {/* Filters heading */}
        <div
          style={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "25px",
            textAlign: "left",
            
          }}
        >
          Filters
        </div>

        {/* Horizontal rule */}
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            border: "0.2px solid #ccc",
            paddingRight: "0px"
          
          }}
        />

        {/* Category filter section */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => toggleFilter("category")}
          >
            Category
          </div>
          {/* Category filter options */}
          <div
            style={{
              paddingLeft: "20px",
              display: expandedFilters.includes("category") ? "block" : "none",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: "10px", alignSelf: "flex-start" }}
              />
              <span style={{ fontSize: "18px", fontWeight: 500 }}>Upper</span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: "10px", alignSelf: "flex-start" }}
              />
              <span style={{ fontSize: "18px", fontWeight: 500 }}>Bottom</span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: "10px", alignSelf: "flex-start" }}
              />
              <span style={{ fontSize: "18px", fontWeight: 500 }}>Shoes</span>
              
            </label>
            {/* Add more category options here */}
          </div>
        </div>

        {/* Horizontal rule */}
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            border: "0.2px solid #ccc",
            width: "220px",
            
          }}
        />

        {/* Price filter section */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => toggleFilter("price")}
          >
            Price
          </div>
          {/* Price filter options */}
          <div
            style={{
              paddingLeft: "20px",
              display: expandedFilters.includes("price") ? "block" : "none",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: "10px", alignSelf: "flex-start" }}
              />
              <span style={{ fontSize: "18px", fontWeight: 500 }}>
              ₹1299 - ₹1499
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: "10px", alignSelf: "flex-start" }}
              />
              <span style={{ fontSize: "18px", fontWeight: 500 }}>
              ₹1499 - ₹1699
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: "10px", alignSelf: "flex-start" }}
              />
              <span style={{ fontSize: "18px", fontWeight: 500 }}>
              ₹1699 - ₹1899
              </span>
            </label>
            {/* Add more price options here */}
          </div>
        </div>
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            border: "0.2px solid #ccc",
          }}
        />

        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => {}}
          >
            Brands
          </div>
        </div>
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            border: "0.2px solid #ccc",
          }}
        />
         <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => {}}
          >
            Occasions
          </div>
        </div>
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            border: "0.2px solid #ccc",
          }}
        />
         <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => {}}
          >
            Discounts
          </div>
        </div>
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            border: "0.2px solid #ccc",
          }}
        />
         <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => {}}
          >
            Colors
          </div>
        </div>
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            border: "0.2px solid #ccc",
          }}
        />
         <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => {}}
          >
            Size & fit
          </div>
        </div>
        <hr
          style={{
            marginTop: "10px",
            marginBottom: "20px",
            border: "0.2px solid #ccc",
          }}
        />
         <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "25px",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: "10px",
            }}
            onClick={() => {}}
          >
            Rating
          </div>
        </div>
      </div>
      <hr
  style={{
    marginTop: "10px",
    marginBottom: "20px",
    border: "none",
    borderLeft: "1px solid rgba(0, 0, 0, 0.2)", // Adjust opacity here
    marginLeft: "0px", // Adjust the offset
  }}
/>

      {/* Product cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          overflowY: "auto",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "200px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div style={{ padding: "20px", textAlign: "left" }}>
              <h3
                style={{
                  margin: "0",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "16px",
                  fontWeight: "normal",
                }}
              >
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {product.name}
                </span>
                <button
                  style={{
                    backgroundColor: "#FFD25D",
                    color: "black",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <span style={{ marginRight: "5px" }}>{product.rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 .26l1.48 3.52 4.59.4a.67.67 0 0 1 .37 1.14l-3.54 3.25 1.07 4.55a.67.67 0 0 1-1 .74l-4.17-2.46-4.17 2.46a.67.67 0 0 1-1-.74l1.07-4.55L.56 5.32a.67.67 0 0 1 .37-1.14l4.59-.4L8 .26zM8 2.52l-1.61 3.83-.04.09-.09-.05L4.07 6.35 2.15 7.73l3.72 2.2.09.05-.04.09L8 12.35l1.07-.63.09-.05 3.72-2.2-1.83-1.38-2.19-.19-.09-.08v-.01l-.04-.09L8 2.52zm0 3.03l1.64-1.2-.63 2.67 2.18-1.62-2.86-.25z" />
                  </svg>
                </button>
              </h3>
              <p style={{ marginTop: "2px", fontWeight: "bold" }}>
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
