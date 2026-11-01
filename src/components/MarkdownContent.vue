<script setup>
// Renders Markdown with $inline$ and $$block$$ KaTeX formulas
import MarkdownIt from 'markdown-it'
import { katex } from '@mdit/plugin-katex'
import { computed } from 'vue'

const props = defineProps({
  source: { type: String, required: true },
})

const markdown = new MarkdownIt({ html: true, linkify: true, typographer: true })
  .use(katex, { throwOnError: false })

// Open external links in a new tab
const defaultLinkOpen = markdown.renderer.rules.link_open
  ?? ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))
markdown.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const href = tokens[idx].attrGet('href') ?? ''
  if (/^https?:/.test(href)) {
    tokens[idx].attrSet('target', '_blank')
    tokens[idx].attrSet('rel', 'noopener')
  }
  return defaultLinkOpen(tokens, idx, options, env, self)
}

const html = computed(() => markdown.render(props.source))
</script>

<template>
  <div class="markdown" v-html="html" />
</template>
