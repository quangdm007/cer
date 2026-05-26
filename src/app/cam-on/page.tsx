import Link from "next/link";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#665ec2] via-white to-[#9031ad] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center border border-primary rounded-2xl px-6 py-20 mb-10 shadow-sm bg-white">
        {/* Icon vòng tròn check */}
        <div className="flex justify-center mb-8">
          <div className="relative w-28 h-28">
            {/* Vòng ngoài pulse */}
            <span className="absolute inset-0 rounded-full bg-[#5751e1]/20 animate-ping" />
            <span className="absolute inset-2 rounded-full bg-[#5751e1]/10" />
            <div className="relative w-28 h-28 rounded-full bg-[#5751e1] flex items-center justify-center shadow-[0_8px_32px_rgba(87,81,225,0.4)]">
              <HiCheckCircle className="text-white text-5xl" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1d3b] mb-2 leading-tight">
          Cảm ơn bạn đã đăng ký!
        </h1>

        {/* Divider */}
        <div className="w-16 h-1.5 bg-[#5751e1] rounded-full mx-auto mb-2" />

        {/* Message */}
        <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed mb-2">
          Chúng tôi đã nhận được thông tin đăng ký của bạn.
        </p>
        <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed mb-4">
          Đội ngũ tư vấn của{" "}
          <span className="font-semibold text-[#1a1d3b]">CER</span> sẽ{" "}
          <span className="text-[#5751e1] font-semibold">
            liên hệ với bạn sớm nhất có thể
          </span>{" "}
          để hỗ trợ và giải đáp mọi thắc mắc.
        </p>

        {/* Info box */}
        {/* <div className="bg-white border border-[#5751e1]/20 rounded-2xl px-6 py-5 mb-10 shadow-sm text-left space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-[#5751e1] mt-0.5 text-lg flex-shrink-0">✓</span>
            <p className="text-gray-700 text-sm">Thông tin của bạn được bảo mật tuyệt đối.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#5751e1] mt-0.5 text-lg flex-shrink-0">✓</span>
            <p className="text-gray-700 text-sm">Tư vấn viên sẽ gọi điện trong vòng <strong>24 giờ</strong> làm việc.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[#5751e1] mt-0.5 text-lg flex-shrink-0">✓</span>
            <p className="text-gray-700 text-sm">Hoàn toàn <strong>miễn phí tư vấn</strong>, không ràng buộc.</p>
          </div>
        </div> */}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#5751e1] text-white px-7 py-3.5 rounded-full font-bold text-[14px] shadow-[4px_4px_0_0_#1a1d3b] hover:shadow-[2px_2px_0_0_#1a1d3b] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 no-underline group"
          >
            Về trang chủ
            <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/nganh-hoc"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#5751e1] text-[#5751e1] px-7 py-3.5 rounded-full font-bold text-[14px] hover:bg-[#5751e1] hover:text-white transition-all duration-300 no-underline"
          >
            Khám phá ngành học
          </Link>
        </div>
      </div>
    </main>
  );
}
