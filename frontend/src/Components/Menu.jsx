import React from "react";

const menuItems = [
  {
    name: "Paneer Tikka",
    description: "Spicy grilled cottage cheese served with mint chutney.",
    price: "₹250",
    image: "https://orders.popskitchen.in/storage/2024/09/image-358.png",
  },
  {
    name: "Butter Chicken",
    description: "Creamy tomato chicken curry served with naan.",
    price: "₹320",
    image: "https://media.istockphoto.com/id/1170729895/photo/indian-butter-chicken-horizontal-photo.jpg?s=612x612&w=0&k=20&c=4bZViynoVnP1HaWHIY1k5FvW-dj9DM2EOMHbKnAqYZ4=",
  },
  {
    name: "Veg Biryani",
    description: "Fragrant rice with vegetables & aromatic spices.",
    price: "₹210",
    image: "https://t4.ftcdn.net/jpg/05/70/58/65/360_F_570586537_TnIgWdCnaTYpgg9gsTyloz5bnvfCtdLl.jpg",
  },
  {
    name: "Gulab Jamun",
    description: "Soft milk balls soaked in rose-scented syrup.",
    price: "₹90",
    image: "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.jpg?s=612x612&w=0&k=20&c=JvJ4AAs-N5pRzzRmVg1lG0talC3QoUt0ZGiO1NKz-kQ=",
  },
];

const Menu = () => {
  return (
    <div className="pt-20 pb-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#FF8000] mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <p className="text-[#FF8000] font-bold mt-3">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
