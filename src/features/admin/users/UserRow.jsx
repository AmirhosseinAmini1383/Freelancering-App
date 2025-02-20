import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUsersStatus";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";

const statusStyle = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

const ROLES = {
  ADMIN: "ادمین",
  FREELANCER: "فریلنسر",
  OWNER: "کارفرما",
};
function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status, role } = user;
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{toPersianNumbers(user.phoneNumber)}</td>
      <td>{ROLES[role]}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          title={`تغییر وضعیت کاربر ${user.name}`}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default UserRow;

// /admin/user/verfiy/id , {status:1}
