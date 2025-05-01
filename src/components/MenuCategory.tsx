import React from "react";

interface Item {
  name: string;
  price: number;
}

interface MenuCategoryProps {
  name: string;
  items: Item[];
  onAddToOrder: (item: Item) => void;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({
  name,
  items,
  onAddToOrder,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl mb-6 shadow-md">
      <h3 className="text-xl font-bold mb-3">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => onAddToOrder(item)}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {item.name} - {item.price} DKK
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
