import Navbar from "@/components/Navbar";
import React from "react";
import ContactUs from "../components/ContactUs";

type Props = {};

export default function Contact({}: Props) {
  return (
      <div>
        <Navbar />
        <ContactUs />
      </div>
  );
}
