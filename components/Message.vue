<template>
  <div class="message-wrapper flex" :class="[role === 'system' ? 'justify-start' : 'justify-end']">
    <div class="message p-4 rounded border border-gray-500" :class="[role === 'system' ? 'rounded-tl-none' : 'rounded-tr-none']">
      <div v-if="!isImgResponse" v-html="$mdRenderer.render(testMd)" />
      <img :src="message" alt="" v-else />
    </div>
    <img :src="avatar" alt="" class="w-8 h-8 rounded-3xl bg-gray-400" />
  </div>
</template>

<script lang="ts">
// types
import type { MessageProps } from '~/@type'
import { defineComponent } from "@vue/runtime-core";

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

    return {
      id,
      role,
      message,
      avatar,
      isImgResponse,
      testMd
    }
  }
})
</script>

<style>
.message-wrapper {
  gap: 15px
}
</style>
