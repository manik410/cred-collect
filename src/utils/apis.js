export const env = "staging";
const envConfigs = {
  dev: {
    GLOBAL_API_URL: "https://p3-api.dev.credgenics.com",
  },
  staging: {
    GLOBAL_API_URL: "https://api.staging.credgenics.com",
  },
};

export const APIURL = envConfigs[env];
