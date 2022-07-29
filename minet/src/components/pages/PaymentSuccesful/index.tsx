import React from "react";
import Template from "../../templates/index";
import Navbar from "../../organisms/Navbar/index";
import Sidebar from "../../organisms/SideBar/index";
import Footer from "../../organisms/Footer/index";
import Success from "../../organisms/SuccessMolecule/index";

const PaymentSucess = () => {
  return (
    <Template
      Navbar={<Navbar heading="Checkout" />}
      Sidebar={<Sidebar />}
      Content={
        <Success
          text="Sell is completed, please check your
                balance in your Rupee coin"
          button1="SELL NOW"
          button2="GO TO USD COIN"
        />
      }
      Footer={<Footer />}
    />
  );
};

export default PaymentSucess;
