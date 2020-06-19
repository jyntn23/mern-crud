import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">To Do List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <RegisterModal />
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Home Works</DropdownItem>
                <DropdownItem>Anime</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Add List</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="logout-btn">
              <Logout />
            </NavItem>
          </Nav>
          <NavbarText>Organize your Lists</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
