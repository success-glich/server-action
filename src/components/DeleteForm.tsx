"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { deleteThoughtAction } from "@/app/actions/thoughtAction";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";

const initialState = {
  status: 0,
};
export default function DeleteForm({ id }: { id: number }) {
  const [states, formAction] = useFormState(deleteThoughtAction, initialState);

  useEffect(() => {
    if (states?.status === 200) {
      toast.success("Thought Deleted Successfully!!", { theme: "colored" });
    } else if (states.status === 400) {
      toast.error("Something went wrong!!", { theme: "colored" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states]);
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <Button type="submit" variant={"destructive"}>
        <Trash />
      </Button>
    </form>
  );
}
