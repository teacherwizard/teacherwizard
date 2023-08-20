"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";
import { Switch } from "@/components/ui/switch";
import { createAssignment } from "@/actions/create-assignment";
import { useToast } from "@/components/ui/use-toast";
import { useAction } from "next-safe-action/hook";
import { Loader2 } from "lucide-react";

export const createAssignmentSchema = z.object({
  title: z.string().min(1).max(32),
  description: z.string().min(1).max(512),
  public: z.boolean().default(false),
});

export const CreateAssignmentForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof createAssignmentSchema>>({
    resolver: zodResolver(createAssignmentSchema),
    defaultValues: {
      title: "",
      description: "",
      public: false,
    },
  });

  const {
    execute,
    res,
    isExecuting,
    hasExecuted,
    hasSucceded,
    hasErrored,
    reset,
  } = useAction(createAssignment, {
    onSuccess: (data, reset) => {
      toast({
        description: "Assignment created",
      });
      form.reset();
    },
    onError: (error, reset) => {
      toast({
        description: "Error try again later",
      });
    },
  });

  async function onSubmit(values: z.infer<typeof createAssignmentSchema>) {
    execute(values);
    toast({
      description: "Creating Assignment",
      icon: <Loader2 className="mr-2 h-4 w-4 animate-spin" />,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your assignment name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your description.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="public"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Public</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription>
                Choose if you want this to be shown on the newest creations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isLoading={isExecuting} />
      </form>
    </Form>
  );
};
