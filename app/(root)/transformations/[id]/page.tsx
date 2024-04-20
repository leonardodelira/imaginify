import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const TransformationsPage = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default TransformationsPage;
