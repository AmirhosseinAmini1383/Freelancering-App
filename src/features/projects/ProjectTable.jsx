import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  console.log(isLoading, projects);

  return <div>ProjectTable</div>;
}

export default ProjectTable;
