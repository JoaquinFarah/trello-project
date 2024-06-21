'use client'

import React, { useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Skeleton} from "@nextui-org/react";
import { getUser } from '../actions/get-user';
import { logout } from "@/app/logout/actions";


export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [user, setUser] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  useEffect(() => {
   const isAuth = async() => {
    const user = await getUser();
    if(user){
      setUser(true)
      setIsLoading(false)
    }
   }
   isAuth();
  }, [])
  
  

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b-1">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">HELLO</p>
        </NavbarBrand>
      </NavbarContent>

      {
          isLoading ? ( <Skeleton className="h-11 w-20 rounded-lg"/>) :(
            <>
              {
                !user ? (
                  <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Button as={Link} color="secondary" href="#" variant="ghost">
                            Login - BOTON1
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                      <Button as={Link} color="secondary" href="#" variant="solid">
                        Sign Up - BOTON2
                      </Button>
                    </NavbarItem>
                  </NavbarContent>
                ) : (
                  <NavbarContent justify="end">
                    <NavbarItem>                    
                      <form action={logout}>
                        <Button color="secondary" href="/" variant="solid" type="submit">
                          Logout
                        </Button>
                      </form> 
                    </NavbarItem>                    
                  </NavbarContent>
                )
              }
            </>
          )
      }
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
