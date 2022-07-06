import getConfig from "next/config"

const {serverRuntimeConfig} = getConfig();

export const sessionProps = {
    cookieName: serverRuntimeConfig.cookieName,
    password: serverRuntimeConfig.sessoinPassword,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }