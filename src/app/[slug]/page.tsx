import React from "react";

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
      <div>{slug}</div>
    </>
  );
};

export default DynamicPage;
