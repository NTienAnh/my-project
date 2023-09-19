module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
        apiToken: "284ae37094a07df5c473bcb5c9b0d1e88b90626db9cf7fe0536dbfbf5731acc42f6269a9bb269ee55316d1bcc14f6e77a1115b928811939ad3349b19d3f2886140170386d22d729cadd7e2e6de49352fa22ca931399f1b7371586c033d9297bf992f5dde07fccdd160a03e941d802dcbb3414ecfe4d4eb702742baa1bed7eb46",
        appFilter: "test-strapi",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });