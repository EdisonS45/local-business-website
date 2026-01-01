// src/lib/seo.ts

type SeoParams = {
  title: string;
  description: string;
};

export function buildMetadata({ title, description }: SeoParams) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}
