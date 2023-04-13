import { AiOutlineCreditCard } from "react-icons/ai";
import { TiChartLineOutline } from "react-icons/ti";
import { MdOutlineWarehouse } from "react-icons/md";
import { FiShoppingCart, FiSettings } from "react-icons/fi";
import { TbUsers, TbFlag } from "react-icons/tb";
import { BsBarChart, BsBriefcase } from "react-icons/bs";
import image from "../images/profile.avif";
import psg from "../images/psg.jpeg";
import lakers from "../images/lakers.jpeg";
import liverpool from "../images/liverpool.jpeg";
import manu from "../images/manu.jpeg";
import miami from "../images/miami.jpeg";
import mancity from "../images/mancity.jpeg";

export const sideMenuData = [
  {
    title: "Dashboard",
    icon: <TiChartLineOutline />,
    link: "/",
  },
  {
    title: "Products",
    icon: <MdOutlineWarehouse />,
    link: "/products",
  },
  {
    title: "Blog",
    icon: <FiShoppingCart />,
    link: "/blog",
  },
  {
    title: "Transactions",
    icon: <AiOutlineCreditCard />,
    link: "/transactions",
  },
  {
    title: "Users",
    icon: <TbUsers />,
    link: "/users",
  },
  {
    title: "Analysis",
    icon: <BsBarChart />,
    link: "/analysis",
  },
  {
    title: "Reports",
    icon: <TbFlag />,
    link: "/reports",
  },
  {
    title: "Investment",
    icon: <BsBriefcase />,
    link: "/investment",
  },
  {
    title: "Settings",
    icon: <FiSettings />,
    link: "/settings",
  },
];

export const products = [
  {
    id: 1,
    name: "PSG Stadium 20/21",
    price: 100,
    image: psg,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Jerseys",
    variants: ["S", "M", "L"],
    sku: "8600844",
    dateAdded: "12.11.2020",
    status: "Published",
  },
  {
    id: 2,
    name: "Los Angeles Lakers City",
    price: 120,
    image: lakers,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Jerseys",
    variants: ["S", "M", "L", "XL", "XXL"],
    sku: "8608647",
    dateAdded: "12.11.2020",
    status: "Pending",
  },
  {
    id: 3,
    name: "Miami Heat Courtside",
    price: 120,
    image: miami,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Outwear",
    variants: ["S", "M", "L", "XL"],
    sku: "8609824",
    dateAdded: "10.11.2020",
    status: "Published",
  },
  {
    id: 4,
    name: "Liverpool FC 20/21 Stadium",
    price: 200,
    image: liverpool,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Jerseys",
    variants: ["M", "L", "XL"],
    sku: "8609474",
    dateAdded: "07.11.2020",
    status: "Published",
  },
  {
    id: 5,
    name: "Manchester United 20/21 Stadium",
    price: 300,
    image: manu,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "T-Shirts",
    variants: ["S", "M", "L", "XL"],
    sku: "8609577",
    dateAdded: "07.09.2020",
    status: "Published",
  },
  {
    id: 6,
    name: "Manchester City 20/21 Stadium",
    price: 150,
    image: mancity,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Outwear",
    variants: ["S", "M", "L", "XL"],
    sku: "8609576",
    dateAdded: "06.09.2020",
    status: "Pending",
  },
  {
    id: 7,
    name: "Juventus 20/21 Stadium",
    price: 200,
    image:"",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "T-Shirts",
    variants: ["S", "M", "L", "XL"],
    sku: "8609574",
    dateAdded: "04.09.2020",
    status: "Published",
  },
  {
    id: 8,
    name: "Inter Milan 20/21 Stadium",
    price: 100,
    image:"",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "T-Shirts",
    variants: ["S", "M", "L", "XL"],
    sku: "8609573",
    dateAdded: "03.09.2020",
    status: "Published",
  },
  {
    id: 9,
    name: "FC Barcelona 20/21 Stadium",
    price: 250,
    image:"",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Outwear",
    variants: ["S", "M", "L", "XL"],
    sku: "8609572",
    dateAdded: "02.09.2020",
    status: "Published",
  },
  {
    id: 10,
    name: "Bayern Munich 20/21 Stadium",
    price: 100,
    image:"",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Jeans",
    variants: ["S", "M", "L", "XL"],
    sku: "8609571",
    dateAdded: "01.09.2020",
    status: "Published",
  },
  {
    id: 11,
    name: "Arsenal 20/21 Stadium",
    price: 200,
    image:"",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Accessories",
    variants: ["S", "M", "L", "XL"],
    sku: "8609570",
    dateAdded: "31.08.2020",
    status: "Published",
  },
  {
    id: 12,
    name: "Atletico Madrid 20/21 Stadium",
    price: 150,
    image:"",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    category: "Shoes",
    variants: ["S", "M", "L", "XL"],
    sku: "8609569",
    dateAdded: "30.08.2020",
    status: "Published",
  },
];

export const productSales = [
    { name: "Jeans", cost: 4000, sales: 5400 },
    { name: "T-Shirts", cost: 3000, sales: 4300 },
    { name: "Shoes", cost: 2000, sales: 3800 },
    { name: "Accessories", cost: 2780, sales: 2908 },
    { name: "Outwear", cost: 1890, sales: 4800 },
];

export const userData = {
  name: "James Brown",
  role: "Admin",
  email: "jamesbrown@example.com",
  phone: "+1 202-555-0125",
  address: "1067 N Highland St, Arlington, VA 22201, USA",
  about: "This is a short bio description about me.",
  registered: "11.01.2020",
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://www.twitter.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  image: image,
};

export const graphData = [
    {   month: 'Jan', income: 200, expense: 150 },
    {   month: 'Feb', income: 300, expense: 200 },
    {   month: 'Mar', income: 400, expense: 250 },
    {   month: 'Apr', income: 300, expense: 200 },
    {   month: 'May', income: 250, expense: 350 },
    {   month: 'Jun', income: 400, expense: 350 },
    {   month: 'Jul', income: 400, expense: 400 },
    {   month: 'Aug', income: 450, expense: 250 },
    {   month: 'Sep', income: 400, expense: 150 },
    {   month: 'Oct', income: 350, expense: 300 },
    {   month: 'Nov', income: 450, expense: 350 },
    {   month: 'Dec', income: 500, expense: 400 },
];

export const graphDataReport = [
    {  day: '1', income: 200, expense: 150 },
    {  day: '2', income: 300, expense: 200 },
    {  day: '3', income: 200, expense: 250 },
    {  day: '4', income: 300, expense: 200 },
    {  day: '5', income: 350, expense: 150 },
    {  day: '6', income: 400, expense: 250 },
    {  day: '7', income: 300, expense: 200 },
];

