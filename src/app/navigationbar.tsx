"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";

import Link from "next/link";
import { Blockquote } from "flowbite-react";
export default function NavigationBar() {
  return (
    <Navbar fluid rounded className="bg-gray-900  dark:text-white">
      <Navbar.Brand href="https://github.com/cortez-deb" className="rounded-sm">
        <Image
          src="/cortez.jpeg"
          alt="Cortez-deb"
          width="50"
          height="50"
          style={{ borderRadius: "50%" }}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white m-2">
          <Blockquote className="text-white">Cortez-deb</Blockquote>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link href="#"className="text-white" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} className="text-white" href="#">
          About
        </Navbar.Link>
        <Navbar.Link  className="text-white" href="#">Services</Navbar.Link>
        <Navbar.Link className="text-white" href="#">Pricing</Navbar.Link>
        <Navbar.Link className="text-white" href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
