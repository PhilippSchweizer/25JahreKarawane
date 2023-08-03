import { Year } from "@/types/Year";
import { createClient, groq } from "next-sanity";

export async function getYears(): Promise<Year[]> {
  const client = createClient({
    projectId: "mih0zj8b",
    dataset: "production",
    apiVersion: "2023-06-12",
  });

  return client.fetch(
    groq`*[_type == "year"] | order(title asc){
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}
