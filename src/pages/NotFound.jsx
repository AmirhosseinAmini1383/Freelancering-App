import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hook/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex items-center justify-center h-screen">
        <div>
          <p className="mb-8 text-9xl font-black text-primary-900">404</p>
          <h1 className="text-xl font-bold text-secondary-700 mb-8">
            صفحه ای که دنبالش بودید، پیدا نشد
          </h1>
          <button onClick={moveBack} className="flex items-center gap-x-2">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span className="text-secondary-700 font-bold"> برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
