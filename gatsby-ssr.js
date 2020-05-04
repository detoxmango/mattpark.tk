/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider
import { createElement } from 'react'


// const applyDarkModeClass = `
// (function(){
//   try {
//     var mode = localStorage.getItem('theme')
//     if (mode === 'dark') {
//       document.body.classList.add('dark')
//     }
//   } catch (e) {}
// })()
// `
//
// export const onRenderBody = ({ setPreBodyComponents }) => {
//   const script = createElement('script', {
//     dangerouslySetInnerHTML: {
//       __html: applyDarkModeClass,
//     },
//   });
//   setPreBodyComponents([script]);
// };