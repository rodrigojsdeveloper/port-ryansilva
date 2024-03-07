'use client'

import Button from "@/components/Button";
import BookIcon from "@/components/svgs/BookIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Pagina home</h1>
      <Button
        label="Sobre mim"
        icon={<BookIcon/>}
        onClick={() => {}}
      />
    </main>
  );
}
