"use client";

import { LazyFormWrapper } from "@/app/components/molecules/LazyFormWrapper";
import { PageBanner } from "@/app/components/molecules/PageBanner";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const Contac = ({ data }: { data: any }) => {
  const contactData = data;

  return (
    <>
      <PageBanner
        title={contactData?.contact?.title || "LIÊN HỆ"}
        breadcrumbs={[
          { label: "Trang chủ", url: "/" },
          {
            label: contactData?.contact?.title || "Liên hệ",
            url: "/lien-he"
          }
        ]}
      />
      <div className="max-w-[1440px] mx-auto py-8 md:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-4">
            <div className="space-y-4 md:space-y-6 flex flex-col justify-between">
              <div className="flex items-center bg-[#f7f7fa] rounded-2xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mr-5 shadow-sm">
                  <FaMapMarkerAlt className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-[#002147] mb-1">
                    {contactData?.contact?.address?.title || "Địa chỉ"}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
                    {contactData?.contact?.address?.location ||
                      "Đại học Công Đoàn - 169 - Tây Sơn - Đống Đa - Hà Nội"}
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-[#f7f7fa] rounded-2xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mr-5 shadow-sm">
                  <FaPhone className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-[#002147] mb-1">
                    {contactData?.contact?.phone?.title || "Điện thoại"}
                  </h3>
                  <div className="flex flex-col">
                    {contactData?.contact?.phone?.items?.length > 0 ? (
                      contactData.contact.phone.items.map(
                        (item: any, index: number) => (
                          <Link
                            key={index}
                            href={item.linkPhone || "tel:0886029119"}
                            className="text-sm md:text-base text-gray-500 font-normal leading-relaxed hover:text-primary transition-colors"
                          >
                            {item.phone}
                          </Link>
                        )
                      )
                    ) : (
                      <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed">
                        (84-4) 3.857.3204
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-[#f7f7fa] rounded-2xl p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 mr-5 shadow-sm">
                  <FaEnvelope className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-[#002147] mb-1">
                    {contactData?.contact?.email?.title || "E-mail"}
                  </h3>
                  <div className="flex flex-col">
                    {contactData?.contact?.email?.items?.length > 0 ? (
                      contactData.contact.email.items.map(
                        (item: any, index: number) => (
                          <Link
                            key={index}
                            href={item.linkEmail || "mailto:demo@gmail.com"}
                            className="text-sm md:text-base text-gray-500 font-normal break-all leading-relaxed hover:text-primary transition-colors"
                          >
                            {item.email}
                          </Link>
                        )
                      )
                    ) : (
                      <p className="text-sm md:text-base text-gray-500 font-normal break-all leading-relaxed">
                        dhcongdoan@dhcd.edu.vn
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-8 mt-8 md:mt-0">
            <LazyFormWrapper type={"form-main"} />
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7609480745314!2d105.77113527669943!3d21.04224898731216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c918a64e17%3A0x6a26c7ecd7ef4df2!2zMTE2IFAuIFRy4bqnbiBW4bu5LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1695417775713!5m2!1sen!2s"
          width="100%"
          height="550"
          className="rounded-2xl shadow-sm mt-10"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};
