import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

type Props = {
  id: string;
};

function UserIdPage({ id }: Props) {
  return <div>{id}</div>;
}

export default UserIdPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;
  const userId = params?.uid ?? "";

  return {
    props: {
      id: `user ID : ${userId}`,
    },
  };
};
