import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface InviteModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const InviteModal = ({ open, setOpen }: InviteModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people for workspace</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
