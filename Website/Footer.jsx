import React from 'react';
const Footer = () => {
   var year = new Date().getFullYear();
   return (
      <>
      <footer className="w-100 bg-light text-center">
         <p>© {year} AnshGoyal. All Rights Reserved | Terms and Conditions</p>
      </footer>
      </>
   );
}
export default Footer;
