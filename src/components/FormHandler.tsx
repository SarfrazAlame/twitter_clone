"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UploadButton } from "@/utils/uploadthings";
import { error } from "console";

const formSchema = z.object({
  id: z.string(),
  title: z.string().max(48),
  imgUrl: z.string().optional(),
});

const FormHander = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      imgUrl: undefined,
    },
  });

  const imageUrl = form.watch("imgUrl");

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  return (
    <>
      {/* <div className="flex gap-4">
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
      </div> */}

      <div className="-mx-9 mt-2">
        <Form {...form}>
          <form className="mx-12" onSubmit={form.handleSubmit(onSubmit)}>
            {!!imageUrl ? (
              <>
                <div>
                  <Image src={imageUrl} alt="image" height={60} width={60} />
                </div>
              </>
            ) : (
              <FormField
                control={form.control}
                name="imgUrl"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="photo"></FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What is happening"
                        className="h-16 w-80"
                      />
                      <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          form.setValue("imgUrl", res[0].url);
                          alert("upload Completed");
                        }}
                        onUploadError={(error: Error) => {
                          console.error(error);
                          alert(`Error ${error.message}`);
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
            <Button type="submit">Post</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default FormHander;
