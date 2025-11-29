import React from "react";
import { Card, Typography, Rate } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const ProductCard = ({
  id,
  imageUrl,
  productName,
  description,
  price,
  rating,
  isNew = true,
  isFavorite = false,
  onAddToCart,
  onToggleFavorite,
}) => {
  const formattedPrice = `$${price.toLocaleString()}`;
  const rtlClass = "text-right";

  return (
    <Card
      className="max-w-xs bg-amber-50 rounded-xl shadow-md border-0 
                 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      bodyStyle={{ padding: "16px" }}
    >
      <div className="relative cairo-font">
        {/* Header: Heart & New Badge */}
        <div className="flex justify-start items-center mb-4 relative">
          <button
            onClick={() => onToggleFavorite(id)}
            className="w-9 h-9 rounded-full bg-white border border-amber-400 
                       flex justify-center items-center shadow-md focus:outline-none
                       transition-transform duration-200 hover:scale-110"
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? (
              <HeartFilled className="text-amber-600 text-lg" />
            ) : (
              <HeartOutlined className="text-amber-600 text-lg" />
            )}
          </button>

          {isNew && (
            <span
              className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 
                             px-3 py-1 bg-linear-to-b from-[#a17452] to-[#67452B] 
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
          <div className="flex items-center justify-end space-x-2 space-x-reverse">
            <Text className="text-lg font-bold text-amber-900">
              {rating.toFixed(1)}
            </Text>
            <Rate
              disabled
              allowHalf
              defaultValue={rating}
              count={5}
              className="text-sm"
            />
          </div>

          <p
            // level={4}
            className="text-lg  font-extrabold text-amber-900 m-0 mt-1"
          >
            {productName}
          </p>

          <Paragraph className="text-sm text-gray-600 line-clamp-3 m-0 cairo-font">
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
                       bg-linear-to-b from-[#a17452] to-[#67452B] 
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
