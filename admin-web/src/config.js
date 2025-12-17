// API 配置 - 部署时修改为你的服务器地址
// 本地开发使用代理，生产环境使用实际地址
export const API_BASE_URL = import.meta.env.PROD 
  ? (import.meta.env.VITE_API_URL || 'http://45.62.104.227:3001')
  : ''  // 本地开发使用 vite 代理
