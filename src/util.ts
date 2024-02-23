export function isImageValid(src: string, {loading,fetchpriority}:{loading: "eager" | "lazy"; fetchpriority: "high" | "low" | "auto"}) {
  return new Promise(resolve => {
    const img = document.createElement('img');
    img['fetchPriority'] = fetchpriority;
    img['loading'] = loading;
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
    img.src = src;
  });
}
