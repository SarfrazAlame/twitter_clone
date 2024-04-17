"use client";
import MyImage from "@/components/MyImage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { title } from "process";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  id: z.string(),
  title: z.string().max(48),
  imgUrl: z.string().optional(),
});

const page = async () => {
  const form =  useForm<z.infer<typeof formSchema>>()
  

  return (
    <div className="mx-12 mt-4">
      <div className="flex gap-4">
        <MyImage />
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

      <div></div>
    </div>
  );
};

export default page;
