'use client';

import { Fragment, useState } from 'react';
import { Input } from '@heroui/input';
import { DatePicker } from '@heroui/date-picker';
import { Button } from '@heroui/button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import Image from 'next/image';
import Link from 'next/link';

export default function Register(): JSX.Element {

  const [value, setValue] = useState<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/UserBirthday';
    } catch (error: any) {
      alert(`Login Error: ${error}`);
    } 
  }

  return (
    <Fragment>
      <section className='flex justify-around gap-2 pt-10'>
        <main className='w-2/4 px-10 flex flex-col gap-5'>
          <h1 className='text-ra text-4xl font-bold text-center'>SIGN WITH AN ACCOUNT</h1>
          <Input placeholder='Email' variant='bordered' color='secondary' className='text-ra' onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder='Password' variant='bordered' color='secondary' className='text-ra' onChange={(e) => setPassword(e.target.value)} />
          <DatePicker label='Birth Date' className='text-ra' variant='flat' value={value} onChange={setValue} />
          <div className='flex gap-5'>
            <Link href={'/'} className='w-2/4'>
              <Button className='flex justify-center items-center gap-2 w-full text-ra' color='secondary'><i className='fi fi-rr-arrow-left flex justify-center items-center'></i>Back</Button>
            </Link>
            <Button className='flex justify-center items-center gap-2 w-2/4 text-ra' onPress={handleSignIn} color='secondary'>Sign In<i className='fi fi-rr-arrow-right flex justify-center items-center'></i></Button>
          </div>
        </main>
        <div className='w-2/4 flex justify-center items-center px-10'>
          <Image src={'/image-login.svg'} alt={'Image Register'} width={500} height={500} />-
        </div>
      </section>
    </Fragment>
  );
}