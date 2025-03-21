const loadScript = (src, onLoad, onError) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = onLoad;
    script.onerror = onError;
    document.head.appendChild(script);
  };
  
  export default loadScript;
  