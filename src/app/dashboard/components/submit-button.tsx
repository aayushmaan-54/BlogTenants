"use client";
import { useFormStatus } from "react-dom";
import Button from "@/components/ui/button"; // Your custom Button component
import Icons from "@/icons/icons";

interface buttonProps {
  text: string;
  className?: string;
}

export default function SubmitButton({ text, className }: buttonProps) {
  const { pending } = useFormStatus();

  return (
    <Button className={className!} >
      {pending ? (
        <>
          <Icons.Loader className="mr-2 size-4 animate-spin" /> Please Wait
        </>
      ) : (
        text
      )}
      <input
        type="submit"
        className="hidden"
        disabled={pending}
      />
    </Button>
  );
}