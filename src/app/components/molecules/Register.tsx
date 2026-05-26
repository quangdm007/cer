import { GET_SIDE_BAR } from "@/app/api/graphQL/getSideBar";
import { getData } from "@/lib/getData";
import { LazyFormWrapper } from "./LazyFormWrapper";

type SidebarItem = {
  icon: string;
  textLeft: string;
  textRight: string;
};

export const Register = async () => {
  let sidebarItems: SidebarItem[] = [];

  try {
    const response = await getData(GET_SIDE_BAR);
    if (response?.allSlideBar?.nodes?.[0]?.sliderBarContent) {
      const sliderContent = response.allSlideBar.nodes[0].sliderBarContent;

      if (sliderContent.sideBar) {
        sidebarItems = sliderContent.sideBar;
      }
    }
  } catch (error) {
    console.error("Error fetching sidebar data:", error);
  }

  return (
    <div className="">
      <div>
        {sidebarItems.length > 0 && (
          <div className="flex flex-col mb-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between py-1 ${
                  index !== sidebarItems.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-gray-500">{item.textLeft}</span>
                </div>
                <span className="text-sm text-gray-500">{item.textRight}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <h2 className="text-[#002147] text-2xl font-medium mb-1">
        ĐĂNG KÝ TẠI ĐÂY!
      </h2>
      <div className="mb-2 text-[#5aaae7]">
        Để lại thông tin chúng tôi sẽ gọi ngay cho bạn
      </div>
      <div className="border-b-4 border-primary w-12 mb-4 "></div>
      <div className="bg-white p-4 h-[460px] overflow-y-scroll no-scrollbar">
        <LazyFormWrapper type="form-main" />
      </div>
    </div>
  );
};
