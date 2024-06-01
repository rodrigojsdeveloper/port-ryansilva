'use client'

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

function Page404Light() {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center">
      <Button
        label='Voltar ao portfólio '
        onClick={() => router.push('/inicio')}
      />
    </div>
  );
}

export default Page404Light;
