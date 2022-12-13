import {
  Groups, GridView, ProductionQuantityLimits,
  Category, ShoppingCart, Reviews, BrandingWatermark
} from '@mui/icons-material';


export const sideBarListArray = [
    {
      "title": "DASHBOARD",
      "url": "/dashboard",
      "component": GridView
    },
    {
      "title": "VENDORS",
      "url": "/vendors",
      "url2": "/profile",
      "component": Groups
    },
    {
      "title": "USERS",
      "url": "/users",
      "component": Groups
    },
    {
      "title": "CATEGORIES",
      "url": "/categories",
      "component": Category,
      "menu1": {
        "url": "/categories/manage",
        "title": "Manage Category",
        "component": ""
      }
    },
    {
      "title": "PRODUCTS",
      "url": "/products",
      "component": ProductionQuantityLimits
    },
    {
      "title": "ORDERS",
      "url": "/orders",
      "component": ShoppingCart
    },
    {
      "title": "REVIEWS",
      "url": "/reviews",
      "component": Reviews
    },
    {
      "title": "BRANDS",
      "url": "/brands",
      "component": BrandingWatermark
    },

    // {
    //   "title": "AUTHENTICATION",
    //   "url": "/brands",
    //   "component": Security
    // },
    // {
    //   "title": "ICONS",
    //   "url": "/brands",
    //   "component": Apps
    // },
    // {
    //   "title": "OTHER PAGES",
    //   "url": "/brands",
    //   "component": Dashboard
    // },
  ];