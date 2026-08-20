# Vite Layout Starter

Шаблон для верстки на фрилансе: Vite + SCSS + rem + группировка медиазапросов.

## Запуск

- `npm install` — установка зависимостей
- `npm run dev` — дев-сервер (http://localhost:5173)
- `npm run build` — сборка в `dist`
- `npm run preview` — просмотр собранной версии

## Как работать

- Новый блок → файл в `src/styles/blocks/` + подключение в `main.scss`
- Размеры писать через `rem(24)` — 24px из макета превратятся в 1.5rem
- Медиазапросы писать прямо в блоках через `@include tablet/laptop/desktop` —
  при сборке postcss-sort-media-queries соберет одинаковые запросы в общие блоки

## Использование SVG спрайтов в HTML

`<svg class="icon hero__btn-icon" aria-hidden="true">`
`  <use href="#icon-arrow-right"></use>`
`</svg>`
