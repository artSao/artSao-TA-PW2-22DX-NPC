"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

// import { UserButton } from "@clerk/nextjs";

const setupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return <div className="p-4">Root Page</div>;
};

export default setupPage;
