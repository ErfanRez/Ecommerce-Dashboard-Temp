<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

const SetupPage = () =>  {
  return (
    <div className='p-4'>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default SetupPage
=======
"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      Root Page
    </div>
  );
};

export default SetupPage;
>>>>>>> fbab57d (store modal created)
