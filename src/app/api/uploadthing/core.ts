import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();


export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        .middleware(async ({ req }) => {
            const session = await getServerSession(authOptions);

            if (!session?.user) throw new UploadThingError("Unauthorized");

            return { email: session.user };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.email);

            console.log("file url", file.url);

            return {
                uploadedBy: metadata.email
            };
        }),
    // you can have video uploder here
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;