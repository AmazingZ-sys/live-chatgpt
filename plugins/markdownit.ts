import md from 'markdown-it'
import MarkdownIt from 'markdown-it';
import MdHighlight from 'markdown-it-highlightjs';
// @ts-ignore
import MdKatex from 'markdown-it-katex';
import Highlightjs from 'highlight.js';
import regex from 'highlight.js/lib/languages/ini';
// style
import 'highlight.js/styles/atom-one-dark.css';
import 'katex/dist/katex.min.css';


// @ts-ignore
export default defineNuxtPlugin(() => {
  const renderer = md()
    .use(MdHighlight, {
      hljs: Highlightjs,
    })
    .use(MdKatex);
  const fence = renderer.renderer.rules.fence;
  if (!fence) return '';
  renderer.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const rawCode = fence(...args);
    return `<div class='highlight-js-pre-container'>
        <div id class="copy" data-code=${encodeURIComponent(token.content)}>
        <i class="fa fa-clipboard" aria-hidden="true"></i>
        </div>
        ${rawCode}
        </div>`;
  };
  return {
    provide: {
      mdRenderer: renderer
    }
  }
})
