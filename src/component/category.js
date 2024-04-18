import React from "react";

const divStyle = {
  borderRadius: "50%",
  width: "160px",
  height: "160px",
  backgroundColor: "#0000000D",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 10px",
};

const circleContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const textStyle = {
  textAlign: "center",
  position: "absolute",
  bottom: "-30px", // Adjust as needed
  width: "100%",
};

const categoryData = [
  {
    url: "https://s3-alpha-sig.figma.com/img/e2fb/a2f9/4863952f90cee55434e088d76bd2fe7c?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z6EskNLG2HMrw9i9~zvEkAEC8vfVKqVOXdO8XY4syDk9R5nUPcZyac3fpwdza9icuZRMXPbRjqxTBgifNalxEO9yKBWA~-9X-gGkvjv7nrcgnmnJ7meSvY73MZ-vj6p4BJ6vU4czm7vt9KL8sxRXK7L7eg0eSPscg-TN0xYsZl6dB4s7x5Jra-W8rBU2Vs5itP7m5nO-oD2q9QSMYqUdzNHbyYI~nMtFyJnpvMcWr-RABWhKwFDJrJSXKHTS94B3lDnYoPeDQIorPzh1053IhZJwrm4HLx1A-Huno0oFg89Nv~lBRg4mq6-yZU9N2mnSbdB4pR-BxX99Dt5QMhfywA__",
    text: "Upper", 
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/c21f/a5c1/1b4e8966ff6415613f50abfdbfa3ecb4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1cvzpM1f4WiG9Up5nNVLNq-VkgcrsRJm3hyM8OjDaz-cdwsS7khaxqAljthH~brqRGlaLFfPbGpS9GlotYHlsVGu4ddd0v9F7S5jplXH-NBNmLWniUneAPSdP6bNBH~cw5JkdnLuDUzfBzvjMo4Tc41-5TT5C93NzDnzcjSX1ncnfKaqa57VLrKGj2N816sbBH4csohnLbgG0pQW9Jgol7AVkq89S9UREK8V7WXZSCE-KVCCydvnUIVzvJFrDj~LIFwA00LrIMX-jw0gyKeAUKqy0VnndO63rUtHhlhYO7BWKUHCL0~DnwAuuJi--Wvp97TAYk6D4UZOOHxyZEDQw__",
    text: "Bottoms",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/ede5/8817/0448bd5eba937de65a075c00fda31d1e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MChUKukqWlegDGpL9SCXw8K5wgoYQ0min9Cx7V9ioR3rargP175kKhVbeY-HXTnGw93BdxfWQGTZirD7YfjmOAuHsVb1zxJIXDRxTmRe2gbGnKj9PDk1GI92ucsczjJSMFm-VgviYOJlKsNcJqhv~udJF09uVj25d1wbOA9HcwwXRZjRri0T456YoRv5KeEV1Kk8LqxE-N4EbOdAlW8zNOeEZv-8bJ64hF72gnmca9ROesQKzQpxXO0-7uQMWYPXm3bRa7C0DOjFPjCtVo~e~YD5KFzBXEwg4gmeLJglDksNFlTH4Jl6nJpbVKMbUuh~DeMnDe~Mwkzk8M8U1VqqAw__",
    text: "Nightwear",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/bd71/bb51/18fd546fe56c71362f745d652dc9f9bd?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bZr1xH5A6OzEKf76FiAYsc4gkVPInaaFeFIiQHmCz03IFbD6wcbMndM7Xt~aZ87InRkfO0N1n2NoiFIVMB~LcdTY8NT5xhgKYM9uKxbq6lo7uktMi8RmJkPrq9ZXPiiyVJn3yY6NqxC1ozg0TbMBkP~9i98AkjjWYHBQYj7g6mZ6-hqjeZPSJE31zT4B4SVw9lkkyetcobShwJNCMEjvIbx89RHJIBe6LaepwTDKhoOODfsqNblK4fTUMs3y7tdxqGez5fxMVMetrKa1d68s6GpYI13z~DJhoiig9F-8EwiAwk7U6yLea2BZgb8EF5VsZotMYcIBBASw07WO8IYLiQ__",
    text: "Swimwear",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/b7bb/9bbf/fa9939e10e733d7f91452cd519d8d282?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TlQnWRuLV3TbLEd6hSc4kqlyuqceiumHiVnsAnZ5mCMAd6SWw5G2xpv~I744IQ95LHzsdVzGK49EDD6vbb1b1TgztdNPVxdcicngqYBMBjQHizrCqAwyW8-qohV7TMUc5M30-kMUOff6qKZwwDnIlDdpIuidPXEe~whtJBZrN2ncUhtWbWotFVfi-thPmyCREk82vUrnK6kt~bAU0meKZbJ8HLfQfylllXYtimop7UK~C9xzuSBEzlN~~s2TPh8Vz6iu7BgJwQpcwLqBtfczgWPMm6AzM~9jfc4Kt1Lz61OfRO0UxuwMR7m~oLBAgftxj3~prb2XU5UbV32J0Qhi1Q__",
    text: "Footwear",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/e6f7/696f/5429a2e26767d73a579a3e80ae6fbdde?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ApgKer~7gnO8~2zdQnyNJsW0RH-OvH3pO3JGzJUlLz5OdY2mv1~Er67xYDAHAK20hY0j1yivYKUnV9SADS8HbV1AuQNt9L5eizBKLk0i2uUrRpVqglgs9U9B4cCmQreiDKcvXI-AWaQOvHRgzQYslK0Rtq~0CLtK1Mw3ELemMVHeETL7wmk5fnX2wiY4mOJKN9AicqkrB5RMwcSWRhTLLSTsZCNkYd32mAWDQlWb9PUZfrz7OBkSVc2NMFm6J5yW0eCiWJwVkcEFwCKF7Fcrk2Zud~D0LPF3DVi-87kpmVovihqGm0nvT7oT29~BZcUptFeHISV6Dsq3F3DD~WW9pQ__",
    text: "Accessories",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/68f9/d5ea/13718a3097a18fd8806c73d02dc5e7ea?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MtItw2K579Z4IBvr7CR6ukXy7~MjgTrFCK7MXsFhmjIv5cz3veLEYnl5fsiPlptOTqqzFp6CI7qOxsYPZVk7W~lfcDV~rgcjn-zx5-x-wt23fJwqwplktaZcNsY3bmILtHZdO6R9ffQxe6j1Ab9UDArUD~sjLiAiYFPdl5gXBaqmsZxCCplLxnXOaPXRMdl74KTn~QyG54knQKSOLwCBvOF0wpmV8iqHDzwwG47ycbUlFY1eqrDc~lzPSxO-~7YxdJvTNWZBi9UUtvM4bvkjvPS08~sCygsMSsfMrRgjU6~B1NAjg8nkk54GAvNcgcMha1JyGL2mNIPf9KlGPKAYlg__",
    text: "School Supplies",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/c21f/a5c1/1b4e8966ff6415613f50abfdbfa3ecb4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1cvzpM1f4WiG9Up5nNVLNq-VkgcrsRJm3hyM8OjDaz-cdwsS7khaxqAljthH~brqRGlaLFfPbGpS9GlotYHlsVGu4ddd0v9F7S5jplXH-NBNmLWniUneAPSdP6bNBH~cw5JkdnLuDUzfBzvjMo4Tc41-5TT5C93NzDnzcjSX1ncnfKaqa57VLrKGj2N816sbBH4csohnLbgG0pQW9Jgol7AVkq89S9UREK8V7WXZSCE-KVCCydvnUIVzvJFrDj~LIFwA00LrIMX-jw0gyKeAUKqy0VnndO63rUtHhlhYO7BWKUHCL0~DnwAuuJi--Wvp97TAYk6D4UZOOHxyZEDQw__",
    text: "Soap",
  },
];

export default function Category() {
  const imgStyle = {
    height: "80px",
    width: "auto",
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <h2 style={{ marginLeft: "20px", textAlign: "left" }}>Category</h2>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "10px",
        }}
      >
        {categoryData.map((category, index) => (
          <div key={index} style={{ ...divStyle, position: "relative" }}>
            <div style={circleContentStyle}>
              <img
                src={category.url}
                alt={`category-${index}`}
                style={imgStyle}
              />
            </div>
            <div style={textStyle}>{category.text}</div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
