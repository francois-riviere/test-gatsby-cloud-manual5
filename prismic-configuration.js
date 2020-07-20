
module.exports = {
  // The repo name for your Prismic repository (found in the url of your repo: https://test-gatsby-cloud-manual5.prismic.io/)
  prismicRepo: 'test-gatsby-cloud-manual5',

  // For prismic theme command <https://user-guides.prismic.io/en/articles/764581-how-to-create-a-theme-to-quickstart-your-projects-for-prismic>

  apiEndpoint: 'https://test-gatsby-cloud-manual5.wroom.io/api',

  // Preview path for handling redirects.
  previewPath: '/preview',

  // Release ID to build (requires access)
  releaseID: 'XxTDEBEAALUB0BVu',

  // access token to access the release
  // accessToken: '',

  buildRelease: process && process.env && process.env.GATSBY_CLOUD && process.env.NODE_ENV === 'development',

  // Language configuration in your Prismic repository: Settings / Translations & locals
  defaultLanguage: 'fr-fr',
  langs: ['en-gb', 'fr-fr'],
}
