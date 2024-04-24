import React from 'react';

const Footer = () => {
  return (
    <div style={{ fontFamily: 'Quicksand', marginTop: 'auto', paddingTop: '60px', paddingBottom: '80px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      <footer style={{ color: '#fff' }}>
        <h2 style={{ color: '#AB91F1', textAlign: 'left', paddingLeft: '100px' }}>Tiny <span style={{ color: 'black' }}>Treasure</span></h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color:'#000', fontSize: '16px'}}>CUSTOMER</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>Contact Us</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px'}}>Track Order</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px'}}>Return Order</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px'}}>Cancel Order</a></li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#000', fontSize: '16px' }}>COMPANY</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>About Us</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>We are Hiring</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>Terms & Conditions</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a></li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#000', fontSize: '16px' }}>CONNECT WITH US</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>Facebook</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>Twitter</a></li>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>Instagram</a></li>
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#000', fontSize: '16px' }}>KEEP UP TO DATE</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontSize: '14px' }}>Subscribe</a></li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '20px 0 0 20px' }}>
          <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', marginRight: '20px', marginLeft: '100px', borderRadius: '10px' }}>
            <div style={{ fontSize: '10px' }}>Get it on</div>
            <div>Google Play</div>
          </button>
          <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', borderRadius: '10px' }}>
            <div style={{ fontSize: '10px' }}>Download on</div>
            <div>Apple Store</div>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
