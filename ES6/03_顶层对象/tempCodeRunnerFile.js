var globalObject =
  typeof window !== 'undefined'
    ? window
    : typeof global === 'object'
      ? global
      : this