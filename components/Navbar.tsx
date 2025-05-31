import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  SignInButton,
  SignedIn,
  UserButton,
  SignedOut,
} from "@clerk/nextjs";
import NavItems from "./NavItems";
import { Sign } from "crypto";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex items-center gap-2.5 cursor-pointer">
        <Link href={"/"}>
          <Image
            src="/images/logo.svg"
            alt="logo"
            height={44}
            width={46}
          ></Image>
        </Link>
      </div>
      <div className="flex items-center max-sm:gap-2 gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
};

export default Navbar;
