import useAuthorize from "../features/authentication/useAuthorize";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();
  console.log(isAuthorized);

  // 1. load the authenticated user
  // 2. check if is Authorized or not,check if is Authenticated or not
  // 3. while loading => show loading
  // 4. if user isAuthenticated and isAuthorized => render the app

  return children;
}

export default ProtectedRoute;
