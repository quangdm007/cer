import Image from "next/image";
import Link from "next/link";

export const CourseCard = ({ course }: { course?: any }) => {
  return (
    <Link href={course.link || "#"}>
      <div className="bg-white rounded-[20px] p-5 shadow-sm border border-gray-200 hover:shadow-xl transition-shadow duration-300 group">
        <div className="relative h-[220px] w-full rounded-2xl overflow-hidden mb-6">
          <Image
            src={course.image || "/abount.png"}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div>
          <h3 className="text-[#1a1d3b] font-extrabold text-xl leading-[1.4]  hover:text-primary cursor-pointer transition-colors line-clamp-2 min-h-[3.5rem]">
            {course.title}
          </h3>
        </div>
        {course.description && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mt-2">
            {course.description}
          </p>
        )}
      </div>
    </Link>
  );
};
