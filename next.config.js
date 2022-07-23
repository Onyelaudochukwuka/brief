/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['pbs.twimg.com', "lh3.googleusercontent.com","avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US'
  }
}
