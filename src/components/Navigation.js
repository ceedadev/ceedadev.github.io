import { Navbar, DarkThemeToggle } from "flowbite-react";

export default function NavigationBar() {
  return (
    <Navbar fluid={false} rounded={false}>
      {/* <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand> */}
      <Navbar.Toggle />
      <div className="flex md:order-2">
        <DarkThemeToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/">About</Navbar.Link>
        <Navbar.Link href="/">Services</Navbar.Link>
        <Navbar.Link href="/">Pricing</Navbar.Link>
        <Navbar.Link href="/">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
