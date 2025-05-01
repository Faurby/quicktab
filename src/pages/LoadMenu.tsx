import React, { useState, useEffect } from "react";
import { MenuData } from "../types/menu"; // Ensure the correct path to types
import Menu from "../components/Menu"; // Import Menu component
import "../index.css";

const LoadMenu = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/menu_example.json"); // Adjust path if needed
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: MenuData = await response.json();
        setMenuData(data);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h1>Load an Existing Menu</h1>
      <Menu menuData={menuData} loading={loading} error={error} />
    </div>
  );
};

export default LoadMenu;
