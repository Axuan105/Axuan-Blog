import { DefaultTheme } from 'vitepress'

const frameworkMiniSidebar: DefaultTheme.SidebarItem [] = [
  {
    text: '博客',
    items: [
      { text: '防抖和节流', link: '/blog/list/01-防抖和节流.md' },
      { text: 'Flex布局', link: '/blog/list/02-Flex布局.md' },
      { text: 'Vue.$nextTick的原理', link:  '/blog/list/03-nextTick.md' }
    ]
  }
]

export default frameworkMiniSidebar
