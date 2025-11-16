'use client';

import { Fragment, useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem } from '@heroui/navbar';
import { Popover, PopoverTrigger, PopoverContent } from '@heroui/popover';
import { Button } from '@heroui/button';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/utils/firebase';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';

export default function NavBar(): JSX.Element {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => unsubscribe();
  }, [auth])

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <Fragment>
      <Navbar className='text-ra border-b-1 border-purple-500' shouldHideOnScroll>
        <NavbarBrand>
          <Image src={'/image-birthday-logo.png'} alt={'Image Birthday Logo'} width={50} height={50} />
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem className='mx-2'>
            <Link href={'/'} className='flex justify-content items-center gap-1'>
              <i className='fi fi-rr-home flex justify-center items-center'></i> Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={'/MyBirthday'} className='flex justify-center items-center gap-1'>
              <i className='fi fi-rr-user flex justify-center items-center'></i>My Birthday
            </Link>
          </NavbarItem>
          {user && (
            <NavbarItem>
              <Link href={'/UserBirthday'} className='flex justify-center items-center gap-1'>
                <i className='fi fi-rr-following flex justify-center items-center'></i>Your Birthday
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        {!user && (
          <NavbarContent justify='end'>
            <NavbarItem>
              <Popover className='w-60 text-black'>
                <PopoverTrigger>
                  <Button className='gap-2'>Log Into <i className='fi fi-rr-angle-small-down flex justify-center items-center'></i></Button>
                </PopoverTrigger>
                <PopoverContent className='flex flex-col justify-start items-start p-4 text-ra gap-2 bg-emerald-500'>
                  <Link href={'/Register'} className='flex gap-2'><i className='fi fi-rr-user flex justify-center items-center'></i>Register</Link>
                  <Link href={'/Login'} className='flex gap-2'><i className='fi fi-rr-users flex justify-center items-center'></i>Login</Link>
                </PopoverContent>
              </Popover>
            </NavbarItem>
          </NavbarContent>
        )}
        {user && (
          <NavbarContent justify='end'>
            <NavbarItem>
              <Button variant='shadow' color='danger' onPress={handleSignOut}>Sign Out</Button>
            </NavbarItem>
          </NavbarContent>
        )}

      </Navbar>
    </Fragment>
  );
}