'use client';

import { Fragment, useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function MyBirthday(): JSX.Element {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2025-12-18T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isBirthday =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <Fragment>
      <main className='text-ra relative w-full h-screen flex items-center justify-center overflow-hidden'>

        <div className='absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-300 animate-gradient'></div>

        <div className='absolute inset-0 backdrop-blur-sm'></div>

        <div className='relative z-10 p-10 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20'>
          <h1 className='text-ra text-5xl md:text-7xl font-extrabold text-center text-white drop-shadow-xl mb-6 animate-bounce'>
            {isBirthday ? '¡TODAY IS MY BIRTHDAY!' : 'MI BIRTHDAY IS IN'}
          </h1>

          {!isBirthday && (
            <div className='grid grid-cols-4 gap-6 text-center text-white font-bold'>
              <div className='p-4 bg-white/20 rounded-xl shadow-lg backdrop-blur-lg'>
                <p className='text-5xl md:text-6xl'>{timeLeft.days}</p>
                <span className='text-xl'>Days</span>
              </div>
              <div className='p-4 bg-white/20 rounded-xl shadow-lg backdrop-blur-lg'>
                <p className='text-5xl md:text-6xl'>{timeLeft.hours}</p>
                <span className='text-xl'>Hours</span>
              </div>
              <div className='p-4 bg-white/20 rounded-xl shadow-lg backdrop-blur-lg'>
                <p className='text-5xl md:text-6xl'>{timeLeft.minutes}</p>
                <span className='text-xl'>Minutes</span>
              </div>
              <div className='p-4 bg-white/20 rounded-xl shadow-lg backdrop-blur-lg'>
                <p className='text-5xl md:text-6xl'>{timeLeft.seconds}</p>
                <span className='text-xl'>Seconds</span>
              </div>
            </div>
          )}

          {isBirthday && (
            <p className='text-center text-3xl text-white mt-4 animate-pulse'>
              GO TO THE PARTY
            </p>
          )}
        </div>

        <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientAnimation 8s ease infinite;
        }

        @keyframes gradientAnimation {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
      </main>
    </Fragment>
  );
}
