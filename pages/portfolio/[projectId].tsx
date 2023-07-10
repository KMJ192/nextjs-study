import { useRouter } from "next/router";

function ProjectPage() {
  const router = useRouter();

  console.log(router.pathname, router.query);

  return (
    <div>
      <span>path name : {router.pathname}</span>
      <br />
      <span>query : {router.query.projectId}</span>
    </div>
  );
}

export default ProjectPage;
