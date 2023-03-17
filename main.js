import "./style.css";
import { setupMobileMenuToggle } from "./handlers.js";

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
setupMobileMenuToggle(mobileMenuButton, mobileMenu);
