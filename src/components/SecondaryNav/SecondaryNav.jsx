import React from "react"

import {
  Nav,
  NavLink,
  ButtonFirst,
  ButtonSecond,
  Beta,
} from "./SecondaryNavDesign"

const SecondaryNav = () => (
  <Nav>
    <ButtonFirst>
      <NavLink href="google.com">For you</NavLink>
      <Beta>Beta</Beta>
    </ButtonFirst>
    <ButtonSecond>
      <NavLink href="google.com">Following</NavLink>
    </ButtonSecond>
  </Nav>
)

export default SecondaryNav
