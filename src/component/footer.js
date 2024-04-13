import React from 'react';

const Footer = () => {
  return (
    <div style={{ paddingBottom: '80px', fontFamily: 'Quicksand' }}> {/* Added fontFamily */}
      <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: '#fff', paddingTop: '50px' }}> {/* Changed backgroundColor */}
        <h2 style={{ marginLeft: '20px', color: '#AB91F1', fontFamily: 'Quicksand' }}>Tiny <span style={{ color: 'black' }}>Treasure</span></h2> {/* Added fontFamily */}
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color:'#000', fontFamily: 'Quicksand' }}>CUSTOMER</h3> {/* Added fontFamily */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Contact Us</a></li> {/* Added fontFamily */}
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Track Order</a></li> {/* Added fontFamily */}
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Return Order</a></li> {/* Added fontFamily */}
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Cancel Order</a></li> {/* Added fontFamily */}
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#000', fontFamily: 'Quicksand' }}>COMPANY</h3> {/* Added fontFamily */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>About Us</a></li> {/* Added fontFamily */}
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>We are Hiring</a></li> {/* Added fontFamily */}
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Terms & Conditions</a></li> {/* Added fontFamily */}
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Privacy Policy</a></li> {/* Added fontFamily */}
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#000', fontFamily: 'Quicksand' }}>CONNECT WITH US</h3> {/* Added fontFamily */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Facebook</a></li> {/* Added fontFamily */}
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Twitter</a></li> {/* Added fontFamily */}
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Instagram</a></li> {/* Added fontFamily */}
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#000', fontFamily: 'Quicksand' }}>KEEP UP TO DATE</h3> {/* Added fontFamily */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#000', textDecoration: 'none', fontFamily: 'Quicksand' }}>Subscribe</a></li> {/* Added fontFamily */}
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '20px 0 0 20px' }}>
          <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', marginRight: '20px', marginLeft: '100px', marginBottom: '50px', fontFamily: 'Quicksand', borderRadius: '8px 8px 8px 8px' }}>Google Play</button> {/* Added fontFamily and borderRadius */}
          <button style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', fontFamily: 'Quicksand', marginBottom: '50px', borderRadius: '8px 8px 8px 8px' }}>Apple Store</button> {/* Added fontFamily and borderRadius */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
