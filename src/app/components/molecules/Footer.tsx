"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube
} from "react-icons/fa";

import { menus } from "@/router/router";
import dynamic from "next/dynamic";

const FormPopup = dynamic(() =>
  import("@/app/components/molecules/FormPopup").then((mod) => mod.FormPopup)
);

const usefulLinks = menus.filter(
  (menu) => !menu.childs || menu.childs.length === 0
);

const nganhHocMenu = menus.find((menu) => menu.path === "/nganh-hoc");
const companyLinks = nganhHocMenu?.childs || [];

export const Footer = ({ footerData }: { footerData?: any }) => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <footer className="bg-[#06042e] text-white">
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-3 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Contact */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <Image
                src={footerData?.logo?.node?.mediaItemUrl || "/logo.png"}
                alt="Logo trường"
                width={100}
                height={50}
                className="object-contain"
              />
            </Link>
            <div className="flex flex-col gap-3 text-gray-300 text-lg">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-400 mt-1 shrink-0" />
                <span className="whitespace-pre-line">
                  {footerData?.address ||
                    "Số 36 Đường Dương Đình Hội, Phước Long B,\nQuận 9, TP.HCM"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-purple-400 shrink-0" />
                <div className="hover:text-white transition-colors font-semibold text-white">
                  {footerData?.phone || "+84 123 456 789"}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400 shrink-0" />
                <a
                  href={`mailto:${footerData?.email || "info@truongdaihoc.edu.vn"}`}
                  className="hover:text-white transition-colors"
                >
                  {footerData?.email || "info@truongdaihoc.edu.vn"}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-4">
              {footerData?.title1 || "Liên Kết Nhanh"}
            </h4>
            <div className="w-8 h-[3px] bg-purple-500 mb-6 rounded-full" />
            <ul className="flex flex-col gap-3">
              {usefulLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-200 text-md"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Company */}
          <div>
            <h4 className="text-white font-bold text-xl mb-4">
              {footerData?.title2 || "Ngành Học"}
            </h4>
            <div className="w-8 h-[3px] bg-purple-500 mb-6 rounded-full" />
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-200 text-md"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl mb-4">
              {footerData?.title3 || "Đăng Ký Nhận Tin!"}
            </h4>
            <div className="w-8 h-[3px] bg-purple-500 mb-6 rounded-full" />
            <p className="text-gray-300 text-md mb-5">
              {footerData?.description ||
                "Nhận thông tin mới nhất từ trường được gửi đến hộp thư của bạn."}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-wrap ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email"
                className="flex-1 bg-[#12124a] text-gray-300 text-sm px-2 w-full py-3 rounded-l-md outline-none placeholder:text-gray-500 border border-[#2a2a6a] focus:border-purple-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-yellow-300 text-white hover:text-black font-semibold text-sm px-5 py-3 rounded-r-md transition-colors whitespace-nowrap"
              >
                Đăng Ký
              </button>
            </form>

            {/* Social Icons */}
            <div className="mt-7">
              <p className="text-gray-400 text-md mb-3">
                {footerData?.textFollow || "Theo Dõi Chúng Tôi:"}
              </p>
              <div className="flex items-center gap-3">
                {[
                  {
                    icon: <FaFacebookF size={16} />,
                    href: footerData?.linkFacebook || "https://facebook.com",
                    label: "Facebook"
                  },
                  {
                    icon: <FaTwitter size={16} />,
                    href: footerData?.linkX || "https://twitter.com",
                    label: "Twitter"
                  },
                  {
                    icon: <FaWhatsapp size={16} />,
                    href: footerData?.linkWechat || "https://wa.me/84123456789",
                    label: "WhatsApp"
                  },
                  {
                    icon: <FaInstagram size={16} />,
                    href: footerData?.linkInstagram || "https://instagram.com",
                    label: "Instagram"
                  },
                  {
                    icon: <FaYoutube size={16} />,
                    href: footerData?.linkYoutube || "https://youtube.com",
                    label: "YouTube"
                  }
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#12124a] hover:bg-purple-600 text-gray-300 hover:text-white transition-all duration-200 border border-[#2a2a6a] hover:border-purple-500"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a5a]">
        <div className="container mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-md text-gray-400">
          <p>
            {footerData?.copyright ||
              "© 2010-2024 truongdaihoc.edu.vn. Bảo lưu mọi quyền."}
          </p>
        </div>
      </div>

      <FormPopup showPopup={showPopup} setShowPopup={setShowPopup} />
    </footer>
  );
};
