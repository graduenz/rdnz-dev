// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from 'vue';
import { defineSliceZoneComponents } from '@prismicio/vue';

export const components = defineSliceZoneComponents({
  code: defineAsyncComponent(() => import('./Code/index.vue')),
  education: defineAsyncComponent(() => import('./Education/index.vue')),
  image: defineAsyncComponent(() => import('./Image/index.vue')),
  project: defineAsyncComponent(() => import('./Project/index.vue')),
  quote: defineAsyncComponent(() => import('./Quote/index.vue')),
  text: defineAsyncComponent(() => import('./Text/index.vue')),
  work_experience: defineAsyncComponent(
    () => import('./WorkExperience/index.vue'),
  ),
});
