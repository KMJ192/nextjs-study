import { useRouter } from "next/router";

function ClientProjectId() {
  const router = useRouter();

  console.log(router.pathname, router.query);

  return <div>ClientProjectId</div>;
}

export default ClientProjectId;
