export const getBaseUrl = () => {
  return import.meta.env.API_BASE_URL || "http://localhost:5000/api/v1";
};
