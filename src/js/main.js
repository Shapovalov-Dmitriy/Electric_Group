// Спрайт SVG-иконок: плагин собирает его из src/assets/icons
// и вставляет в DOM на этой строке
import 'virtual:svg-icons-register';

// Мобильное меню
const nav = document.querySelector('.nav');
const burger = nav?.querySelector('.nav__burger');

if (nav && burger) {
  const mqTablet = window.matchMedia('(min-width: 768px)');

  const setOpen = (isOpen) => {
    nav.classList.toggle('nav--open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');

    // Блокируем скролл страницы
    document.body.classList.toggle('no-scroll', isOpen);

    // Компенсируем «прыжок» макета: на Windows скроллбар занимает ~17px,
    // при overflow: hidden он исчезает и контент сдвигается.
    // Добавляем этот же размер паддингом — макет стоит на месте
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = isOpen && scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
  };

  burger.addEventListener('click', () => {
    setOpen(!nav.classList.contains('nav--open'));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('.nav__link')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('nav--open')) {
      setOpen(false);
      burger.focus();
    }
  });

  mqTablet.addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}