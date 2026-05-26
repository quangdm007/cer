import { VideoMajorDetail } from "@/app/components/molecules/VideoMajorDetail";
import { Register } from "@/app/components/molecules/Register";
import { AllMajor } from "@/app/components/organisms/AllMajor";
import { Form } from "@/app/components/molecules/Form";
import { NewPost } from "@/app/components/organisms/NewPost";

export const SliderBar = ({
  showVideoMajorDetail = false,
  showAllMajor = false,
  showRegister = false,
  showForm = false,
  showNewPost = false,
  isSticky = true,
  onSearch
}: {
  showSearch?: boolean;
  showVideoMajorDetail?: boolean;
  showAllMajor?: boolean;
  showRegister?: boolean;
  showForm?: boolean;
  showNewPost?: boolean;
  isSticky?: boolean;
  onSearch?: (term: string) => void;
}) => {
  return (
    <div
      className={`w-full mx-auto lg:px-0 ${isSticky ? "sticky top-28" : ""}`}
    >
      {showVideoMajorDetail && <VideoMajorDetail />}
      {showRegister && <Register />}
      {showForm && <Form />}
      {showNewPost && <NewPost />}
      {showAllMajor && <AllMajor />}
    </div>
  );
};
