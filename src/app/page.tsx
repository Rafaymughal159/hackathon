import Image from "next/image";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanyLogo from "./components/companyLogo";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import HotProduct from "./components/hotProducts";
import OurProduct from "./components/ourProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <CompanyLogo />
      <Categories />
      <HotProduct />
      <OurProduct />
      

    </div>
  );
}

