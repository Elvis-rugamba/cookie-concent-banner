import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <Navbar isBordered={true}>
      <NavbarBrand>
        <p className="font-bold text-inherit">CC Manager</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}