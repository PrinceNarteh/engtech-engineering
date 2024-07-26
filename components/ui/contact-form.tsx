"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Send } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { Label } from "./label";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email(),
  message: z.string().min(1, { message: "Cannot sent empty message" }),
});

type FormType = z.infer<typeof schema>;

const defaultValues: FormType = {
  name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const form = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <div className="bg-slate-300 p-10 rounded-2xl">
      <Form {...form}>
        <form action="" className="space-y-4">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label>Name</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Email</Label>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Message</Label>
                <FormControl>
                  <Textarea {...field} rows={6} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="w-full">
            <div className="flex items-center gap-3">
              <Send size={15} />
              Send Message
            </div>
          </Button>
        </form>
      </Form>
    </div>
  );
};
