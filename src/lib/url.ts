/** Resolve a file in /public against the configured Vite base path. */
export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
