import { HiClipboardDocument, HiUser } from "react-icons/hi2";
import Stat from "../../ui/Stat";
import { HiViewGrid } from "react-icons/hi";

function Stats({ proposals, users, projects }) {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="کاربران"
        value={users}
        icon={<HiUser className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست ها"
        value={proposals}
        icon={<HiClipboardDocument className="w-20 h-20" />}
      />
      <Stat
        color="blue"
        title="پروژه ها"
        value={projects}
        icon={<HiViewGrid className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
