export function setupMobileMenuToggle(button, menu) {
  let isOpen = false;
  const toggleMobileMenuState = () => {
    isOpen = !isOpen;
    menu.classList.toggle("hidden");
    document.getElementById("menu-backdrop").classList.toggle("hidden");
  };
  button.addEventListener("click", () => toggleMobileMenuState());
}
