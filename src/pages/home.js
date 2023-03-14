import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import React from "react";

function home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />

      <Hero />
    </div>
  );
}

export default home;
