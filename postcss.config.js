export default {
  plugins: {
    // Собирает все одинаковые медиазапросы в один блок и сортирует (mobile-first)
    'postcss-sort-media-queries': {
      sort: 'mobile-first',
    },
    autoprefixer: {},
  },
};