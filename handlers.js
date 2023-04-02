export function setupMobileMenuToggle(button, menu) {
  let isOpen = false;
  const toggleMobileMenuState = () => {
    isOpen = !isOpen;
    menu.classList.toggle("hidden");
    document.getElementById("menu-backdrop").classList.toggle("hidden");
  };
  button.addEventListener("click", () => toggleMobileMenuState());
}

export function setupNav(container, prev, next) {
  const scrollToProject = (by) => {
    container.scrollLeft += by;
  };
  prev.addEventListener("click", () => scrollToProject(-500));
  next.addEventListener("click", () => scrollToProject(500));
}
