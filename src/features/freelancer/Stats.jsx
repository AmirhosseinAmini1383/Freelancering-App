import { HiOutlineViewGrid } from "react-icons/hi";
import { HiClipboardDocument } from "react-icons/hi2";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { CiWallet } from "react-icons/ci";
import { MdOutlineDoneOutline } from "react-icons/md";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0);

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiClipboardDocument className="w-20 h-20" />}
      />
      <Stat
        color="green"
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
        icon={<MdOutlineDoneOutline className="w-20 h-20" />}
      />
      <Stat
        color="blue"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<CiWallet className="w-20 h-20" />}
      />
    </div>
  );
}

export default Stats;
