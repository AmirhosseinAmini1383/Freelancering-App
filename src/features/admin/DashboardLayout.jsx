import useProjects from "../../hook/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposal/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { isLoading: isLoadingProposals, proposals } = useProposals();
  const { isLoading: isLoadingProjects, projects } = useProjects();
  const { isLoading: isLoadingUsers, users } = useUsers();

  if (isLoadingProposals || isLoadingProjects || isLoadingUsers)
    return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}
export default DashboardLayout;
