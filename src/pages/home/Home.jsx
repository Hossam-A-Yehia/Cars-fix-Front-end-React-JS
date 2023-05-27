import { useEffect, useState } from "react";
import AboutUs from "../../components/Home/aboutUs/AboutUs";
import ContactUs from "../../components/Home/contact/Contact";
import Landing from "../../components/Home/landing/Landing";
import Footer from "../../components/Home/footer/Footer";
import MakeComplaint from "../../components/Home/makeComplaint/MakeComplaint";
import Navbar from "../../components/Home/navbar/Navbar";
import Packages from "../../components/Home/packages/Packages";
import Services from "../../components/Home/services/Services";
import Testimonials from "../../components/Home/testimonials/Testimonials";
import BestSeller from "../../components/Home/cardProduct/BestSeller";
import Topbar from "../../components/Home/topbar/Topbar";
import Loader3 from "../loader/Loader3";

function Home() {
  const [complaintTrue, setComplaintTrue] = useState(false);
  const [run, setRun] = useState(true);
  const [buy, setBuy] = useState(false);

  const handleComplaintTrue = () => {
    setComplaintTrue(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setRun(false);
    }, 1000);
  }, []);

  return (
    <>
      <Topbar />
      {run ? (
        <Loader3 height="200px" width="200px" />
      ) : (
        <>
          <Navbar handleComplaintTrue={handleComplaintTrue} />
          <Landing />
          <MakeComplaint
            complaintTrue={complaintTrue}
            setComplaintTrue={setComplaintTrue}
            title={"قدم الشكوي"}
            placeHolder="الشكوي"
          />
          <AboutUs />
          <Services />
          <Packages setBuy={setBuy} />
          <Testimonials />
          <BestSeller title="جميع المنتجات" />
          <ContactUs />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
