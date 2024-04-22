
"use client";

import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container className="bg-gray-900  dark:text-white">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://github.com/cortez-deb"
            src="https://avatars.githubusercontent.com/u/83059900"
            style={{ borderRadius: '50%' }}
            
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="David Lutali™" year={2024} />
      </div>
    </Footer>
  );
}
