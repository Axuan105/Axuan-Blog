import { DefaultTheme } from 'vitepress'
import blogChoke from '../blog/sidebar'

import blogLearning from '../learning/sidebar'

// 各页面侧边栏配置
const sidebar: DefaultTheme.Sidebar = {
  // 学习路线
  '/learning': blogLearning,
  // 博客
  '/blog/': blogChoke,
  

}

export default sidebar
