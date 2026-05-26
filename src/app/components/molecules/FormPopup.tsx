import dynamic from "next/dynamic";
import { createPortal } from "react-dom";

// Only load FormWrapper when popup is actually shown
const FormWrapper = dynamic(
  () =>
    import("@/app/components/molecules/FormWrapper").then(
      (mod) => mod.FormWrapper
    ),
  {
    ssr: false
  }
);

export const FormPopup = ({
  showPopup,
  setShowPopup
}: {
  showPopup: boolean;
  setShowPopup: (showPopup: boolean) => void;
}) => {
  if (!showPopup) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[99999] overflow-hidden"
      style={{
        isolation: "isolate",
        paddingRight: "calc(100vw - 100%)"
      }}
      onClick={() => setShowPopup(false)}
    >
      <div
        className="bg-white p-6 rounded-xl w-[430px] max-w-[90vw] relative h-[550px] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 bg-transparent border-none text-xl cursor-pointer"
          onClick={() => setShowPopup(false)}
          aria-label="Đóng form đăng ký"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500 hover:text-gray-700"
            aria-hidden="true"
            focusable="false"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="text-center mb-4">
          <div className="text-lg font-bold text-blue-700">
            🎓 ĐĂNG KÝ NHẬN TƯ VẤN
          </div>
        </div>
        <FormWrapper type="form-popup" />
      </div>
    </div>,
    document.body
  );
};
