const app = {
    initialize: () => {
      app.client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "m2z618t6nurx",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "gpwHzQ87ZadBhVqj4PYizaRiy_0LRFwHcZul_kTCM28"
      });
    },
  

  };