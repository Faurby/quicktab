// components/menu/Menu.tsx
import React, { useState } from "react";
import { MenuData } from "../types/menu";
import MenuCategory from "./MenuCategory";
import OrderSummary from "./OrderSummary";
import "../index.css";

interface MenuProps {
  menuData: MenuData | null;
  loading: boolean;
  error: string | null;
}

const Menu: React.FC<MenuProps> = ({ menuData, loading, error }) => {
  const [order, setOrder] = useState<{ name: string; price: number }[]>([]);


  const addToOrder = (item: { name: string; price: number }) => {
    setOrder([...order, item]);
  };

  const removeFromOrder = (indexToRemove: number) => {
    setOrder(order.filter((_, index) => index !== indexToRemove));
  };

  if (loading) return <div className="text-center mt-8">Loading menu...</div>;
  if (error)
    return (
      <div className="text-red-600 text-center mt-8">
        Error loading menu: {error}
      </div>
    );
  if (!menuData)
    return <div className="text-center mt-8">No menu data available.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Bar Menu</h2>
      {menuData.categories.map((category) => (
        <MenuCategory
          key={category.name}
          name={category.name}
          items={category.items}
          onAddToOrder={addToOrder}
        />
      ))}

      <OrderSummary order={order} onRemove={removeFromOrder} />
    </div>
  );
};

export default Menu;
