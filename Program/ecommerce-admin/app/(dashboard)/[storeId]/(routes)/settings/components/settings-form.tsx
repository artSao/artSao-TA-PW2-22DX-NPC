"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

interface settingPageProps {
  initialData: Store;
}

export const SettingsForm: React.FC<settingPageProps> = ({ initialData }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="settings" description="Atur Toko" />
        <Button variant="destructive" size="sm" onClick={() => {}}>
          <Trash className="h-4 2-4" />
        </Button>
          </div>
          
    </>
  );
};
