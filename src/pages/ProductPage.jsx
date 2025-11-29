/* eslint-disable no-unused-vars */

import { useParams } from "react-router-dom";
import { useState } from "react";
import { Rate, Divider, ConfigProvider } from "antd";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FaRegSmile, FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Collapse } from "antd";
import ProductCard from "../components/productCard";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

const relatedProducts = [
  {
    id: "2",
    title: "كرسي مريح عصري",
    image: "/faid_product_2-removebg-preview.png",
    price: 12000,
    rating: 4.2,
    desc: "استمتع بنوم هادئ ومريح مع هذا السرير المزدوج الفاخر المصنوع من أجود أنواع الخشب والمفروش بأقمشة عالية الجودة. تصميمه العصري يضفي لمسة من الأناقة على غرفة نومك.",
  },
  {
    id: "3",
    title: "أريكة فاخرة",
    image: "/faid_product_5-removebg-preview.png",
    price: 34000,
    rating: 4.8,
    desc: "استمتع بنوم هادئ ومريح مع هذا السرير المزدوج الفاخر المصنوع من أجود أنواع الخشب والمفروش بأقمشة عالية الجودة. تصميمه العصري يضفي لمسة من الأناقة على غرفة نومك.",
  },
  {
    id: "4",
    title: "طاولة قهوة خشبية",
    image: "/faid_product_4-removebg-preview.png",
    price: 5600,
    rating: 4.5,
    desc: "استمتع بنوم هادئ ومريح مع هذا السرير المزدوج الفاخر المصنوع من أجود أنواع الخشب والمفروش بأقمشة عالية الجودة. تصميمه العصري يضفي لمسة من الأناقة على غرفة نومك.",
  },
];
const { Panel } = Collapse;

const accordionData = [
  {
    key: "1",
    title: "تفاصيل إضافية للمنتج",
    content:
      "هنا بعض التفاصيل الإضافية عن المنتج مثل المواد المستخدمة، طريقة الصنع، ونصائح للعناية بالمنتج.",
  },
  {
    key: "2",
    title: "سياسة الإرجاع والاستبدال",
    content:
      "يمكنك إعادة المنتج خلال 7 أيام من تاريخ الشراء إذا كان به عيب أو لم يعجبك. الاستبدال متاح حسب المخزون.",
  },
  {
    key: "3",
    title: "الأسئلة الشائعة",
    content:
      "س: هل المنتج يأتي مع ضمان؟\nج: نعم، جميع المنتجات تأتي مع ضمان لمدة سنة.\n\nس: هل الشحن مجاني؟\nج: نعم، الشحن مجاني داخل المدينة.",
  },
];

// --- Data ---
const products = [
  {
    id: "1",
    title: "سرير مزدوج فاخر",
    desc: "استمتع بنوم هادئ ومريح مع هذا السرير المزدوج الفاخر المصنوع من أجود أنواع الخشب والمفروش بأقمشة عالية الجودة. تصميمه العصري يضفي لمسة من الأناقة على غرفة نومك.",
    basePrice: 24600,
    image: "/faid_product_3-removebg-preview.png",
    images: [
      "/faid_product_3-removebg-preview.png",
      "/faid_product_2-removebg-preview.png",
      "/faid_product_5-removebg-preview.png",
      "/faid_product_4-removebg-preview.png",
    ],
    reviews: [
      {
        name: "أحمد حسن",
        date: "2024-05-12",
        rating: 4.9,
        comment:
          "السرير رائع من حيث الجودة والتصميم. أنصح بشرائه خصوصاً لمن يهتم بالراحة والأناقة.",
      },
      {
        name: "سارة محمود",
        date: "2024-05-10",
        rating: 4.7,
        comment: "مريح جداً وخامة ممتازة. تجربة ممتازة من البداية للنهاية.",
      },
    ],
  },
];
// const productData = [
//   {
//     id: "12345",
//     imageUrl: "/faid_product_3-removebg-preview.png",
//     // Replace with a real URL or import path
//     productName: "كرسي صالوني فاخر",
//     description:
//       "مقعد مريح بتصميم أنيق ومصنوع من أجود أنواع الأقمشة لراحة تدوم طويلاً.",
//     price: 5520,
//     rating: 4.8,
//     isNew: true,
//     isFavorite: true, // Based on the heart being filled in the image
//   },
// ];
// --- Main Component ---
export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(product?.image || "");
  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart.`);
    // Add your state logic here
  };

  const handleToggleFavorite = (productId) => {
    console.log(`Product ${productId} toggled favorite.`);
    // Add your state logic here
  };
  if (!product) {
    return <div className="p-6 text-center text-red-500">المنتج غير موجود</div>;
  }

  return (
    <div direction="rtl" className="bg-[#f5f5dc] px-4">
      <section className="-mt-1 md:px-10 bg-[#f5f5dc]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* --- Product Images & Details --- */}
          <div className="max-w-md mx-auto px-2 relative">
            {/* Section Title & Arrow */}
            <div className="flex items-center justify-center mb-6 relative">
              {/* Centered Title & Sentence */}
              <div className="text-center">
                <h1 className="font-bold">تفاصيل المنتج</h1>
                <p className="text-gray-400 font-medium text-[12px] mt-1">
                  كل ما تحتاج معرفته عن المنتج قبل الشراء
                </p>
              </div>
              {/* Arrow on the right */}
              {/* <div className="absolute -right-3 top-2.5 -translate-y-1/2 text-gray-600 text-lg">
                <FaArrowRight />
              </div> */}
            </div>

            {/* Main Image */}
            <div className="text-center mb-5 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={selectedImage}
                  alt={product.title}
                  className="w-full aspect-[1/0.9] rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails / Small Images */}
            <div className="flex justify-center gap-2 mb-8">
              {product.images && product.images.length > 0 ? (
                product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    className={`w-12 h-12 rounded-lg cursor-pointer border-2 ${
                      img === selectedImage
                        ? "border-[#593f36]"
                        : " border-gray-200 "
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))
              ) : (
                <p className="text-gray-400 text-sm">لا توجد صور إضافية</p>
              )}
            </div>

            {/* Product Details */}
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                width: "100%",
                direction: "rtl",
              }}
            >
              {/* Top Icons */}
              <div
                className="justify-between items-center"
                style={{ display: "flex", gap: "12px", marginBottom: "10px" }}
              >
                {/* Title */}
                <span className="font-bold ">كرسي سحاب فاخر</span>
                <div className="flex gap-2">
                  <FaRegSmile size={18} />
                  <FaRegHeart size={18} />
                </div>
              </div>

              {/* Rating */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginBottom: "10px",
                }}
              >
                <span>
                  <FaStar size={12} />
                </span>
                <span className="text-sm font-semibold"> 4.5</span>
                <span style={{ fontSize: "12px", color: "#777" }}>
                  (120 تقييم)
                </span>
              </div>

              {/* Bullet points */}
              <ul className="text-gray-400 flex flex-col gap-1">
                <li className="text-sm">مصنوع من جلد فاخر عالي الجودة</li>
                <li className="text-sm">الأبعاد: 90×50×35 سم - الوزن 13 كجم</li>
                <li className="text-sm">يدعم جميع وظائف الجلوس المريحة</li>
                <li className="text-sm">سهل التنظيف - مقاوم للاتساخات</li>
                <li className="text-sm">
                  ممتاز للاستخدام: غرفة المعيشة، المكتب المنزلي
                </li>
                <li className="text-sm">متانة عالية</li>
              </ul>

              {/* Colors */}
              <Divider style={{ margin: "10px 0" }} />

              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                {["red", "green", "magenta", "blue", "brown"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: c,
                      cursor: "pointer",
                      border: "2px solid #ddd",
                    }}
                  ></div>
                ))}
              </div>

              {/* Shipping Info */}
              <p
                style={{
                  color: "#777",
                  fontSize: "12px",
                  marginBottom: "20px",
                }}
              >
                التوصيل خلال 3-2 أيام داخل المدينة. إرجاع مجاني خلال 7 أيام في
                حال وجود عيب.
              </p>

              {/* Buy Button */}
              <button className="font-semibold bg-linear-to-b from-[#a17452] to-[#67452B] text-center w-full py-2 rounded-md text-white">
                اشترِ الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second section */}

      <section className="max-w-7xl px-2 mx-auto md:px-10 py-6 cairo-font">
        <h2 className="text-xl text-end font-bold mb-4">معلومات إضافية</h2>
        <Collapse
          defaultActiveKey={["1"]}
          expandIconPosition="end"
          className="bg-white rounded-lg shadow-sm"
        >
          {accordionData.map((item) => (
            <Panel
              key={item.key}
              header={
                <span className="font-medium cairo-font">{item.title}</span>
              }
              className="mb-2 rounded-lg border border-gray-200"
            >
              <p className="text-gray-600 whitespace-pre-line">
                {item.content}
              </p>
            </Panel>
          ))}
        </Collapse>
      </section>

      {/* Third Section */}
      {/* Third Section: Related Products */}
      <section className="max-w-7xl mx-auto px-2 md:px-10 py-6">
        <h2 className="text-xl font-bold mb-4 text-end">منتجات ذات صلة</h2>

        <div className="relative">
          <Carousel
            dots={false}
            slidesToShow={4}
            slidesToScroll={1}
            infinite={true}
            arrows
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 768, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } },
            ]}
            nextArrow={
              <Button className="font-semibold bg-linear-to-b from-[#a17452] to-[#67452B] text-center w-full py-2 rounded-md text-white">
                <RightOutlined />
              </Button>
            }
            prevArrow={
              <Button className="font-semibold bg-linear-to-b from-[#a17452] to-[#67452B] text-center w-full py-2 rounded-md text-white">
                <LeftOutlined />
              </Button>
            }
          >
            {relatedProducts.map((prod) => (
              <div key={prod.id} className="px-2">
                <ProductCard
                  id={prod.id}
                  imageUrl={prod.image} // correct prop
                  productName={prod.title} // correct prop
                  description={prod?.desc} // add a short description
                  price={prod.price}
                  rating={prod.rating}
                  isNew={true} // optional
                  isFavorite={false} // optional
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}
