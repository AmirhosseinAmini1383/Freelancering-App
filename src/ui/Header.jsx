import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  return <div className="bg-secondary-50 py-4 px-8">app header</div>;
}

export default Header;