"use client";
import MyImage from "@/components/MyImage";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useForm } from "react-hook-form";
import { FaEarthAsia } from "react-icons/fa6";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useMount } from "@/hook/useMount";

const formSchema = z.object({
  id: z.string(),
  title: z.string().max(48),
  imgUrl: z.string().optional(),
});

const FormHander = () => {
  const mount = useMount();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      imgUrl: undefined,
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  // if (!mount) return null;

  return (
    <>
      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-[110px] h-7 rounded-full">
            <SelectValue placeholder="Everyone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Form {...form}>
        <form className="mx-12" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    size={30}
                    height={20}
                    placeholder="What is happening?! "
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  <div className="flex mt-3 gap-2">
                    <FaEarthAsia className="text-blue-400" />
                    <p className="text-sm text-blue-400"> Everyone can reply</p>
                  </div>
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit">Post</Button>
        </form>
      </Form>
    </>
  );
};

export default FormHander;
