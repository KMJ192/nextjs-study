import { useRouter } from "next/router";

function ClientProjects() {
  const router = useRouter();

  console.log(router.pathname, router.query);

  return <div>ClientProjects</div>;
}

export default ClientProjects;
