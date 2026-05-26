import { useCountdown } from "@/hooks/useCountdown";

interface LocationTimerCardProps {
  location: string;
  date: string;
}

export const LocationTimerCard = ({
  location,
  date
}: LocationTimerCardProps) => {
  const timeLeft = useCountdown(date, true);

  const displayDate = date
    ? new Date(date).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
    : "";

  return (
    <div className="bg-white rounded-2xl flex flex-col items-center p-8 shadow-[8px_8px_0_0_#e2e8f0] border border-gray-200 flex-1 min-w-[280px] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_0_#e2e8f0] relative overflow-hidden">
      {/* Decorative top border */}

      <h3 className="text-2xl font-extrabold mb-3 text-[#003B73]">
        {location}
      </h3>
      <div className="flex items-center gap-2 mb-8 text-gray-500 font-medium text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-red-500"
        >
          <path
            fillRule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
        {displayDate}
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-50 border border-blue-200 text-primary text-3xl font-bold w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
            {String(timeLeft.days || 0).padStart(2, "0")}
          </div>
          <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
            Ngày
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-50 border border-blue-200 text-primary text-3xl font-bold w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
            {String(timeLeft.hours || 0).padStart(2, "0")}
          </div>
          <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
            Giờ
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-50 border border-blue-200 text-primary text-3xl font-bold w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
            {String(timeLeft.minutes || 0).padStart(2, "0")}
          </div>
          <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
            Phút
          </span>
        </div>
      </div>
    </div>
  );
};
