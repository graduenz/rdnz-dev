export default function linkResolver (doc) {
  if (doc.type === 'article') {
    return `/blog/${doc.uid}`;
  }

  return null;
}
