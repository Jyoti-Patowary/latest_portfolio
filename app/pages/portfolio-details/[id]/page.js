import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import PortfolioDetails from "@/app/components/portfolioDetails";
import React from "react";

export default function DynamicPortfolioPage() {
  return (
    <div>
      <Nav />
      <PortfolioDetails />
      <Footer />
    </div>
  );
}