<template>
  <div class="message-wrapper flex items-center" :class="[role === 'system' ? 'justify-start' : 'justify-end']">
    <div class="message p-4 rounded bg-gray-500">
      <div v-if="!isImgResponse" v-html="htmlString" />
      <img :src="message" alt="" v-else />
    </div>
    <img :src="avatar" alt="" class="w-8 h-8 rounded-3xl bg-gray-400" />
  </div>
</template>

<script lang="ts">
// types
import type { MessageProps } from '~/@type'
import { defineComponent } from "@vue/runtime-core";
import MarkdownIt from 'markdown-it';
import MdHighlight from 'markdown-it-highlightjs';
// @ts-ignore
import MdKatex from 'markdown-it-katex';
import Highlightjs from 'highlight.js';
import regex from 'highlight.js/lib/languages/ini';
// style
import 'highlight.js/styles/atom-one-dark.css';
import 'katex/dist/katex.min.css';

const testMd = `
# My Markdown Document

Here is some code:

\`\`\`js
const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
};

greet('World');
\`\`\`

Here is a math formula:

$$
\\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}
$$
`;

Highlightjs.registerLanguage('regex', regex);

export default defineComponent({
  setup(props: MessageProps) {
    const { id, role, message } = props

    const avatar = role === 'system' ?
      'https://turbo.ordinalswallet.com/inscription/preview/d19981a198e4a8419c8be18588d9e4919cea294deefdb5f9261a30242df578b7i0' :
      'https://turbo.ordinalswallet.com/inscription/preview/34c6f40ce47ce19bff04af8aa6e90dc7dc82a7067b471e6cdf0f70c39cd9ff71i0'

    console.log(props, "===============>props")

    const isImgResponse = message?.startsWith(
      'https://oaidalleapiprodscus.blob.core.windows.net/private'
    );

    const htmlString = () => {
      const md = MarkdownIt()
        .use(MdHighlight, {
          hljs: Highlightjs,
        })
        .use(MdKatex);
      const fence = md.renderer.rules.fence;
      if (!fence) return '';
      md.renderer.rules.fence = (...args) => {
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
      // return md.render(testMd);
      return md.render(testMd || '');
    };

    return {
      id,
      role,
      message,
      avatar,
      isImgResponse,
      htmlString
    }
  }
})
</script>

<style>
.message-wrapper {
  gap: 15px
}
</style>
