import dynamic from "next/dynamic";

const HeaderTop = dynamic(() =>
  import("@/app/components/molecules/HeaderTop").then((mod) => mod.HeaderTop)
);
const HeaderMenu = dynamic(() =>
  import("@/app/components/molecules/HeaderMenu").then((mod) => mod.HeaderMenu)
);

export const Header = ({ headerData }: { headerData: any }) => {
  return (
    <>
      <HeaderTop headerData={headerData} />
      <HeaderMenu headerData={headerData} />
    </>
  );
};
