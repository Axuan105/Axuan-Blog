import { defineConfig } from 'vitepress'
import navbar from './roter'
import sidebar from './sidebar'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AXUAN 的博客',
  base: '/Axuan-Blog/',
  head: [
    ['link', { rel: 'icon', href: '/logo2.png' }],
  ],
  themeConfig: {
    logo: '/logo2.png',
    siteTitle: 'AXUAN 的博客',
    outline: [2, 3],
    outlineTitle: '本页目录',
    nav: navbar,
    sidebar: sidebar,
    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: 'Copyright © 2023 Powered by Axuan',
    },
    lastUpdatedText: '最近更新时间',
    // 社交链接
    socialLinks: [
      // GitHub
      { icon: 'github', link: 'https://github.com/Axuan105' },
    ],
  },
  
})