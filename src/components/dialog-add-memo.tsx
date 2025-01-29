import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { PlusIcon } from "lucide-react";
// import { TiptapEditor } from "@/components/tiptap-editor";
import { Textarea } from "./ui/textarea";

interface addMemoDialogProps {
  addMemoItem: (formData: FormData) => void;
}
export function DialogAddMemo({ addMemoItem }: addMemoDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    addMemoItem(formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="flex items-center gap-2 mx-4">
          <PlusIcon /> Add Memo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Add New Memo</DialogTitle>
            <DialogDescription>
              Add a new memo to the list to keep track of your daily tasks,
              goals, and more.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" className="col-span-4" />
            </div>
            <Label htmlFor="memo">Memo</Label>
            <Textarea id="description" name="description"></Textarea>
            {/* <TiptapEditor /> */}
          </div>
          <DialogFooter>
            <Button variant="default" type="submit" className="w-full">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
