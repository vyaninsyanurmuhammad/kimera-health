import React from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "about" },
    { slug: "partners" },
    { slug: "blog" },
    { slug: "contact" },
  ];
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
