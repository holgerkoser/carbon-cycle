<script setup>
import 'katex/dist/katex.min.css'
import MarkdownContent from '@/components/MarkdownContent.vue'
import ModelDiagram from '@/components/ModelDiagram.vue'

// One Markdown file per section; the first "## " heading is the section title
const files = import.meta.glob('../content/theory/*.md', { query: '?raw', import: 'default', eager: true })

// A line `<!-- diagram:tomizuka -->` inserts the interactive diagram of that model
const DIAGRAM = /^<!--\s*diagram:(\w+)\s*-->$/m

function splitParts(source) {
  const parts = []
  let rest = source
  for (let match = rest.match(DIAGRAM); match; match = rest.match(DIAGRAM)) {
    parts.push({ markdown: rest.slice(0, match.index) }, { diagram: match[1] })
    rest = rest.slice(match.index + match[0].length)
  }
  parts.push({ markdown: rest })
  return parts.filter(part => part.diagram || part.markdown.trim())
}

const sections = Object.keys(files).sort().map(path => {
  const source = files[path]
  const title = source.match(/^## (.+)$/m)?.[1] ?? path
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return { id, title, parts: splitParts(source) }
})

// The hash is used by the router, so in-page links scroll instead of changing it
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="theory">
    <nav class="toc" aria-label="Contents">
      <h2>Contents</h2>
      <ol>
        <li v-for="section in sections" :key="section.id">
          <a :href="`#${section.id}`" @click.prevent="scrollTo(section.id)">{{ section.title }}</a>
        </li>
      </ol>
    </nav>

    <article>
      <h1>Carbon Cycle Models</h1>
      <section v-for="section in sections" :id="section.id" :key="section.id">
        <template v-for="(part, i) in section.parts" :key="i">
          <ModelDiagram v-if="part.diagram" :model="part.diagram" />
          <MarkdownContent v-else :source="part.markdown" />
        </template>
      </section>
    </article>
  </div>
</template>

<style scoped>
.theory {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;
  max-width: 1040px;
  margin: 0 auto;
}

@media (min-width: 1000px) {
  .theory {
    grid-template-columns: 200px minmax(0, 1fr);
  }

  .toc {
    position: sticky;
    top: 80px;
    align-self: start;
  }
}

.toc h2 {
  margin: 0 0 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
}

.toc ol {
  margin: 0;
  padding-left: 1.2em;
  font-size: 0.875rem;
  line-height: 1.8;
}

.toc a {
  color: var(--text);
  text-decoration: none;
}

.toc a:hover {
  color: var(--accent);
}

article {
  max-width: 720px;
  font-family: var(--serif);
  font-size: 1.0625rem;
  line-height: 1.6;
}

h1 {
  margin: 0 0 24px;
  font-size: 2rem;
  line-height: 1.15;
}

section {
  scroll-margin-top: 80px;
}
</style>
