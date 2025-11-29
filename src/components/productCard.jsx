import React from "react";
import { Card, Typography, Rate } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { FaStar } from "react-icons/fa6";

const { Title, Paragraph, Text } = Typography;

const ProductCard = ({
  id,
  imageUrl,
  productName,
  description,
  price,
  isNew = true,
  isFavorite = false,
  onAddToCart,
  onToggleFavorite,
}) => {
  const formattedPrice = `$${price.toLocaleString()}`;
  const rtlClass = "text-right";

  return (
    <Card
      className="max-w-xs bg-[#d2c6b2] rounded-xl shadow-md border-0 
                 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      bodyStyle={{ padding: "16px" }}
      style={{ background: "#d2c6b2" }}
    >
      <div className="relative cairo-font">
        {/* Header: Heart & New Badge */}
        <div className="flex justify-start items-center mb-4 relative">
          <button
            onClick={() => onToggleFavorite(id)}
            className="w-9 h-9 rounded-full bg-white border border-[#442727] 
                       flex justify-center items-center shadow-md focus:outline-none
                       transition-transform duration-200 hover:scale-110"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? (
              <HeartFilled className="text-amber-200 text-lg" />
            ) : (
              <HeartOutlined className="text-amber-600 text-lg" />
            )}
          </button>

          {isNew && (
            <span
              className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 
                             px-3 py-1 bg-linear-to-b from-[#a17452] to-[#442727] 
                             text-white text-xs font-bold rounded-bl-lg rounded-tr-lg 
                             shadow-lg"
            >
              جديد
            </span>
          )}
        </div>

        {/* Product Image */}
        <div className="mb-4 flex justify-center">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full h-52 md:h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className={`space-y-2 ${rtlClass}`}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginBottom: "10px",
            }}
            className="justify-end"
          >
            <span>
              <FaStar size={12} />
            </span>
            <span className="text-sm font-semibold"> 4.5</span>
            <span style={{ fontSize: "12px", color: "#777" }}>(120 تقييم)</span>
          </div>

          <p
            // level={4}
            className="text-lg  font-extrabold text-[#442727] m-0 mt-1"
          >
            {productName}
          </p>

          <Paragraph
            className="text-sm  line-clamp-3 m-0 cairo-font"
            style={{ color: "#442727" }}
          >
            {description}
          </Paragraph>
        </div>

        {/* Footer: Price & Button */}
        <div className="flex flex-col mt-4 space-y-2">
          <Text className="text-2xl text-end font-extrabold text-green-700 m-0">
            {formattedPrice}
          </Text>

          <button
            onClick={() => onAddToCart(id)}
            className="w-full py-2 rounded-md text-white font-semibold
                       bg-linear-to-b from-[#4b2c2c] to-[#442727] 
                       transition-transform duration-200 hover:scale-105"
          >
            أضف للعربة
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
