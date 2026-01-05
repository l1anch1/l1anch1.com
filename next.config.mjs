/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出，用于 GitHub Pages
  output: 'export',
  
  // 关闭图片优化（静态部署不支持服务器端优化）
  images: {
    unoptimized: true,
  },
  
  // 如果你的仓库名不是 username.github.io，需要设置 basePath
  // 例如仓库名是 l1anch1.com，则设置：
  // basePath: '/l1anch1.com',
  // assetPrefix: '/l1anch1.com/',
};

export default nextConfig;
