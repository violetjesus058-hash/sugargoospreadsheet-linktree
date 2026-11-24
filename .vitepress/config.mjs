import { defineConfig } from 'vitepress'

const hostname = 'https://sugargoospreadsheet-linktree.com'
const siteTitle = 'Sugargoo Spreadsheet Quick Links'
const siteDescription = 'A compact independent directory for Sugargoo Spreadsheet categories, brands, all products, and the budget guide.'

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  lang: 'en-US',
  cleanUrls: 'with-subfolders',

  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtm.js?id=GTM-K5FMNTNC' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    `],
    ['meta', { name: 'google-site-verification', content: 'EnHLB-w90YQehCBgwxYRUVhmDEotaHdd9hx4cwuVWeM' }],
    ['meta', { name: 'robots', content: 'noindex,follow' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: siteTitle }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: hostname }],
    ['meta', { property: 'og:image', content: `${hostname}/favicon.png` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: siteTitle }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['script', {}, `
      (function() {
        function track() {
          if (typeof window.gtag === 'function') window.gtag('event', 'directory_link_click', { event_category: 'navigation' });
        }
        document.addEventListener('click', function(event) {
          var link = event.target.closest && event.target.closest('a[href^="http"]');
          if (link) track();
        });
      })();
    `],
  ],

  themeConfig: {
    logo: '/favicon.png',
    siteTitle,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/#categories-title' },
      { text: 'Brands', link: '/#brand-directory' },
      { text: 'All Products', link: 'https://productsite-8wf.pages.dev/?view=styles&platform=Sugargoo' },
      { text: 'Budget Site', link: 'https://sugargoospreadsheet-budget.com/' },
    ],
    sidebar: false,
    outline: false,
  },

  sitemap: {
    hostname,
  },
})
