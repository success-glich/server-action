"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "./ui/textarea";
import { thoughtAction } from "@/app/actions/thoughtAction";
import { X } from "lucide-react";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  status: 0,
  errors: {},
};

export default function AddThought() {
  const [states, formAction] = useFormState(thoughtAction, initialState);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (states?.status === 201) {
      toast.success("Thought Added Successfully!!", { theme: "colored" });
      setOpenModal(false);
    }
  }, [states]);
  return (
    <Dialog open={openModal}>
      <DialogTrigger asChild>
        <Button className="" onClick={() => setOpenModal((prev) => !prev)}>
          Add Thought
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            What's your today Thought?
            <X
              className="h-4 w-4 cursor-pointer"
              onClick={() => setOpenModal(false)}
            />
          </DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className="mt-5">
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" />
            <span className="text-red-500">{states?.errors?.title}</span>
          </div>
          <div className="mt-5">
            <Label htmlFor="thought">thought</Label>
            <Textarea id="thought" name="thought" />
            <span className="text-red-500">{states?.errors?.thought}</span>
          </div>
          <div className="mt-5">
            <SubmitButton text="Add" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
