import { useEffect } from "react";
import { useNavigate } from "react-router";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/consent");
    }, 5000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-danger">
          Selamat Datang
        </p>
        <p className="text-sm font-semibold uppercase tracking-[0.25em]">ke</p>
        <img
          src="/banner.png"
          alt="ScreeNowMU"
          className="mt-4 ml-4 w-72 object-contain"
        />
        <p className="max-w-xs text-sm text-gray-500">
          Saringan dan sokongan berhenti merokok
        </p>{" "}
      </div>
    </div>
  );
}
export default SplashScreen;
