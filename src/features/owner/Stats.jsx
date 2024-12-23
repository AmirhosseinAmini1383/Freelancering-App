import { HiOutlineViewGrid } from "react-icons/hi";
import Stat from "../../ui/Stat";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { HiClipboardDocument } from "react-icons/hi2";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter(
    (p) => p.status === "OPEN"
  ).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        icon={<MdOutlineAssignmentTurnedIn className="w-20 h-20" />}
      />
      <Stat
        color="blue"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiClipboardDocument className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
