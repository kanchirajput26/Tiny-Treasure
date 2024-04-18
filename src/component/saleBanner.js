import React from 'react';
import "../App.css"

function SaleBanner() {
  const containerStyle = {
    position: 'relative',
    width: '558px',
    left: '8%',
    height: '260px',
    background: 'url("https://s3-alpha-sig.figma.com/img/2029/b1ed/3eb1e73a11a2f784e43860141db4f58f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKUUTN~USf5F2LS-pSWwlaQHke-~4LohBD7EORtYISDgdl5ZOq9xfSLCyUC4h0qEXzSC4I7IrSxmQzlIVWDXf6wwULhj6jqUUqatTVXVFdLtzQDpRZx0wKtTrbp4ODuaE7mxx2RORK-q6U7dqPGWnpFCxtbOZXTejZ5Jm1z-5XntWUA2DwQNivNCSwRr3Y0kt47GusmBTfmzK9FlFCN5zD-w8fPqsarUajdBr~ukE7Ng7vt5k4ZcdnIgJaw6cnhGx8VEiWGhKmk5tqmYNxUW13LAYcj6sYfE-T4BO2lKG3C3vVhZiza9Gry-NFNcagDWF8qWdBOL1RF6c2RuX93hwg__") no-repeat center center/cover',
    border: '2px solid #fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px', // Add border radius
  };
  

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Gray overlay
    borderRadius: '20px',
  };

  const innerBoxStyle = {
    position: 'relative',
    width: 'calc(100% - 32px)', // Adjust width to accommodate padding
    height: 'calc(100% - 32px)', // Adjust height to accommodate padding
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    borderRadius: '22px',
    padding: '14px', // Add padding of 14px from all four sides
  };

  const topTextStyle = {
    position: 'absolute',
    top: '10px', // Adjust top position to move the text up
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '5px 10px',
    color: '#fff',
  };

  const incompleteFrameStyle = {
    position: 'absolute',
    width: 'calc(100% - 20px)', // Adjust width as needed
    height: 'calc(100% - 20px)', // Adjust height as needed
    border: '2px solid #fff',
    top: '10px', // Adjust top position to move the frame down
    borderRadius: '20px',
  };

  return (
    <div className='item' style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={innerBoxStyle}>
        <div style={incompleteFrameStyle}></div>
        <div style={topTextStyle}>Summer 2024</div>
        <div style={{ fontSize: '36px', marginBottom: '10px',}}>SALE</div>
      </div>
    </div>
  );
}

export default SaleBanner;
