import { Footer } from "flowbite-react";

export default function FooterPage() {
  return (
    <div className="dark:bg-gray-800">
      <Footer container={true}>
        <Footer.Copyright
          href="#"
          by="Ceedadev"
          year={new Date().getFullYear()}
        />
        {/* <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup> */}
      </Footer>
    </div>
  );
}
