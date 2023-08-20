"use client";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import React from "react";

export type SubmitButtonProps = { isLoading: boolean };

export const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  return (
    <>
      {!isLoading && <Button type="submit">Submit</Button>}
      {isLoading && (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      )}
    </>
  );
};
