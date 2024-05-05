import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "about" },
    { slug: "partners" },
    { slug: "blog" },
    { slug: "contact" },
  ];
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const page = params.slug[0].toUpperCase() + params.slug.substring(1);

  const slug = `Kimera Health - ${page}`;

  return {
    title: slug,
  };
}

const DynamicPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        {slug}
      </div>
    </>
  );
};

export default DynamicPage;
