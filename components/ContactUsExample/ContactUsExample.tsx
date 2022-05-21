import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  YOUR_PUBLIC_KEY,
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
} from '../../utils/constants';

type Props = {};

function ContactUsExample({}: Props) {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className='flex flex-col w-96 mx-auto'
      ref={form}
      onSubmit={sendEmail}
    >
      <label className='text-white'>Name 2 3</label>
      <input type='text' name='name' />
      <label className='text-white'>Email 12</label>
      <input type='email' name='email' />
      <label className='text-white'>Phone</label>
      <input type='number' name='phone' />
      <label className='text-white'>Message</label>
      <textarea name='message' />
      <input
        className='bg-slate-600 text-white my-6 cursor-pointer hover:bg-slate-400'
        type='submit'
        value='Send'
      />
    </form>
  );
}

export default ContactUsExample;
