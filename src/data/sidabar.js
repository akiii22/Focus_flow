import {
  MdSpaceDashboard,
  MdToday,
  MdViewWeek,
  MdSettings,
} from "react-icons/md";

export const navItems = [
  {
    text: "Dashboard",
    href: "/",
    title: "Dashboard",
    icon: MdSpaceDashboard,
  },

  {
    text: "Daily",
    href: "/daily",
    title: "Daily",
    icon: MdToday,
  },

  {
    text: "Weekly",
    href: "/weekly",
    title: "Weekly",
    icon: MdViewWeek,
  },

  {
    text: "Settings",
    href: "/settings",
    title: "Settings",
    icon: MdSettings,
  },
];
