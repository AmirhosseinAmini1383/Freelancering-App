import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposal/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          title={`درخواست انجام پروژه ${truncateText(title, 20)}`}
          open={open}
          onClose={() => setOpen(false)}
        >
          <CreateProposal
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
