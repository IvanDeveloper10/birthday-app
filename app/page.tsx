'use client';

import { Fragment, useState } from 'react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@heroui/modal';
import Image from 'next/image';

export default function HomePage(): JSX.Element {

  const [name, setName] = useState('');

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleName = (): any => {
    onOpen();
  }

  return (
    <Fragment>
      <Image src={'/image-flag-orpheus-left.svg'} alt={'Flag Orpheus Left'} width={200} height={200} className='absolute' />
      <section className='w-full h-screen flex flex-col justify-center items-center gap-20'>
        <main>
          <h1 className='text-ra font-extrabold text-6xl text-center animate-bounce'>WELCOME TO <span className='bg-blue-600 p-2 rounded-2xl'>HACK BIRTHDAY</span></h1>
        </main>
        <div className='flex justify-center items-center gap-2'>
          <Input className='w-96 text-ra' placeholder='Your Name' variant='faded' color='secondary' onChange={(e) => setName(e.target.value)} /> 
          <Button variant='shadow' color='secondary' className='text-ra' onPress={handleName}>SUBMIT</Button>
        </div>
      </section>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl' className='py-10'>
        <ModalContent>
          <ModalHeader className='flex justify-center items-center'>
            <h2 className='text-4xl text-center text-ra font-extrabold'>HAPPY BIRTHDARY <span className='bg-purple-600 text-white p-2 rounded-2xl'>{name.toUpperCase()}</span></h2>
          </ModalHeader>
          <ModalBody>
            <section className='w-full flex justify-around mt-10'>
              <div className='w-2/4 flex justify-center items-center'>
                <Image src={'/image-orpheus.png'} alt={'Image Orpheus'} width={200} height={200} className='rounded-3xl' />
              </div>
              <div className='w-2/4 flex justify-center items-start'>
                <p className='text-ra'>My name is Orpheus, and today i want to wish you a happy birthday. May you continue to be as happy for the rest of your life.</p>
              </div>
            </section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}