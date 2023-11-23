"use client";

import { useFormStatus } from "react-dom";

import React from "react";
import { Button } from "./ui/button";

export default function SubmitButton({
  text,
  style = "w-full",
}: {
  text: string;
  style?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button className={`${style}`} aria-disabled={pending}>
      {pending ? "Processing..." : text}
    </Button>
  );
}
