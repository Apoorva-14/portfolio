import "./style.css";
import { setupMobileMenuToggle, setupNav } from "./handlers.js";

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
setupMobileMenuToggle(mobileMenuButton, mobileMenu);

const projectContainer = document.getElementById("project-container");
const projectNavPrev = document.getElementById("project-prev");
const projectNavNext = document.getElementById("project-next");
setupNav(projectContainer, projectNavPrev, projectNavNext);

const bookContainer = document.getElementById("book-container");
const bookNavPrev = document.getElementById("book-prev");
const bookNavNext = document.getElementById("book-next");
setupNav(bookContainer, bookNavPrev, bookNavNext);

console.log("Setup complete.");
