"use client";
import { UploadButton } from "@/utils/uploadthings";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CreatePost } from "@/lib/schema";

const FormHandler = () => {
  const form = useForm<z.infer<typeof CreatePost>>({
    resolver: zodResolver(CreatePost),
    defaultValues: {
      title: "",
      imgUrl: undefined,
    },
  });

  const imgUrl = form.watch("imgUrl");

  return (
    <div className="w-full relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit()}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-20 mb-5 border-none bg-gray-100 placeholder:text-xl"
                    type="caption"
                    id="caption"
                    placeholder="What is happening?!"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {!!imgUrl ? (
            <div className="h-96 md:h-[450px] overflow-hidden rounded-md">
              <AspectRatio ratio={1 / 1} className="relative h-full">
                <Image
                  src={imgUrl}
                  alt="Post preview"
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          ) : (
            <FormField
              control={form.control}
              name="imgUrl"
              render={({ field, fieldState }) => (
                <FormItem className="">
                  <FormControl className="w-32">
                    <UploadButton
                      className=""
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        form.setValue("imgUrl", res[0].url);
                        // toast.success("Upload completed");
                      }}
                      onUploadError={(error: Error) => {
                        console.error(error);
                        // toast.error("Upload failed");
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          )}
          <button
            type="submit"
            className="absolute right-0 top-24 border px-6 py-2 rounded-full bg-blue-500 text-white"
          >
            Post
          </button>
        </form>
      </Form>
    </div>
  );
};

export default FormHandler;
