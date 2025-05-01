export interface MenuItem {
  name: string;
  price: number;
  // Add other properties as needed
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuData {
  categories: MenuCategory[];
}
