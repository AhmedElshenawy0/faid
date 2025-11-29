import {
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="relative px-6 md:px-14 py-6 md:py-10 text-[#e9e7d9] flex flex-col justify-center text-center gap-4"
      style={{
        background: "#442727",
        direction: "rtl",
      }}
    >
      <div className="absolute inset-0 bg-[url('/dark-wood.png')] bg-repeat opacity-40 pointer-events-none z-0" />

      <button className="flex justify-center border border-white rounded-full w-fit p-1 mx-auto">
        <FaInstagram color="white" />
      </button>

      <p>contact@Faid-website.eg</p>

      <p className="leading-relaxed">
        نحن نقدم خدماتنا بكل فخر لعملائنا في جميع أنحاء مصر — من القاهرة،
        الإسكندرية، الجيزة، والقاهرة الجديدة، إلى الساحل الشمالي، البحر الأحمر،
        وصعيد مصر.
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <FaCcVisa size={32} />
        <FaCcMastercard size={32} />
        <FaCcPaypal size={32} />
      </div>

      <p className="mt-8">
        شركة فايد ش.ذ.م.م، مسجلة في مصر. السجل التجاري رقم 123456789 |{" "}
        <span className="underline cursor-pointer">سياسة الخصوصية</span>
      </p>

      <p className="text-sm text-center font-medium text-white">
        جميع الحقوق محفوظة © <span className="font-bold">فايد</span> 2025 —
        برمجة وتصميم{" "}
        <span className="text-white hover:text-gray-200 transition font-extrabold">
          ريكاز
        </span>
      </p>
    </div>
  );
};

export default Footer;
