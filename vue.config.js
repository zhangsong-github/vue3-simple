module.exports = {
  // 代理配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
    proxy: {
      '/v3': {
        target: 'https://restapi.amap.com/',
        secure: false,
        // ws: true,
        // changeOrigin: true
      }
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/weather/'
    : '/',
  
  outputDir: 'dist',

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: '', 

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html', 

  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  // 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
  // 如果你无法使用 Vue CLI 生成的 index HTML，
  // 你可以通过将这个选项设为 false 来关闭文件名哈希。
  filenameHashing: true,

  // 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。
  pages: undefined,

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
  // 这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  // Type: boolean | 'warning' | 'default' | 'error'
  lintOnSave: false,

  // 是否使用包含运行时编译器的 Vue 构建版本。
  // 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，
  // 但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,

  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
  // 如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],

  // 如果你不需要生产环境的 source map，
  // 可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  // 设置生成的 HTML 中 <link rel="stylesheet"> 和
  // <script> 标签的 crossorigin 属性。
  // 需要注意的是该选项仅影响由 
  // html-webpack-plugin 在构建时注入的标签
  // 直接写在模版 (public/index.html) 中的标签不受影响。
  crossorigin: undefined,

  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 
  // <script> 标签上启用 Subresource Integrity (SRI)。
  // 如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
  // 另外，当启用 SRI 时，preload resource hints 会被禁用，
  // 因为 Chrome 的一个 bug 会导致文件被下载两次。
  integrity: false,

  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // 如果这个值是一个函数，则会接收被解析的配置作为参数。
  // 该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack: {},

  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。
  // 允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => config,

  css: {
    // 默认情况下，只有 *.module.[ext] 结尾的文件
    // 才会被视作 CSS Modules 模块。
    // 设置为 false 后你就可以去掉文件名中的 .module 
    // 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    requireModuleExtension: true,

    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 
    // (而不是动态注入到 JavaScript 中的 inline 代码)
    extract: process.env.NODE_ENV === 'production',

    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    sourceMap: false,
    
    // 向 CSS 相关的 loader 传递选项。
    // loaderOptions: {
    //   css: {},
    //   postcss: {},
    //   sass: {},
    //   less: {},
    //   stylus: {}
    // },

    // 是否为 Babel 或 TypeScript 使用 thread-loader。
    // 该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    // parallel: require('os').cpus().length > 1,

    // progressive web app plugin
    // pwa: {},

    // 这是一个不进行任何 schema 验证的对象，
    // 因此它可以用来传递任何第三方插件选项
    // pluginOptions: {}

  }

}