import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

interface ThreadProps {
  messageId: Id<"messages">;
  onClose: () => void;
}

const Thread = ({ messageId, onClose }: ThreadProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex justify-between items-center px-4 h-[49px] border-b">
        <p className="text-lg font-bold">Thread</p>
        <Button onClick={onClose} size="iconSm" variant="ghost">
          <XIcon className="size-5 stroke-[1.5]" />
        </Button>
      </div>
    </div>
  );
};

export default Thread;
