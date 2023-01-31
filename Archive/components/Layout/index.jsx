import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer';
import Nav from '../Nav';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme='light'
      />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
