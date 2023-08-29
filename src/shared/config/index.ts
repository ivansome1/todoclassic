export function getEnvVar(key: string) {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is undefined`);
  }
  return import.meta.env[key] || "";
}
