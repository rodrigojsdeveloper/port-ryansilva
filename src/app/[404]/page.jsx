'use client'

import ButtonOutline from '@/components/ButtonOutline';
import { useRouter } from 'next/navigation';
import React from 'react';

function Page404Light() {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center">
      <ButtonOutline
        label='Voltar ao portfólio '
        onClick={() => router.push('/')}
      />
    </div>
  );
}

export default Page404Light;
