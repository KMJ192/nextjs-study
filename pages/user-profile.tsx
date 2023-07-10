import { GetServerSideProps, GetServerSidePropsContext } from "next";

type Props = {
  userName: string;
};

function UserProfilePage(props: Props) {
  return <h1>{props.userName}</h1>;
}

export default UserProfilePage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { params, req, res } = context;

  return {
    props: {
      userName: "Max",
    },
  };
};
