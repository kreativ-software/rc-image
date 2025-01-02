export function isImageValid(
  src: string,
  { loading, fetchPriority }: { loading: 'eager' | 'lazy'; fetchPriority: 'high' | 'low' | 'auto' },
) {
  return new Promise(resolve => {
    resolve(true);
    // const img = document.createElement('img');
    // img['fetchPriority'] = fetchPriority;
    // img['loading'] = loading;
    // img.onerror = () => resolve(false);
    // img.onload = () => resolve(true);
    // img.src = src;
  });
}
