import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { createCookieSessionStorage } from "remix";
import { AUTH0_CALLBACK_URL, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_DOMAIN, SECRETS } from "~/constants";

export type User = {
  email: string;
};

// ユーザーのEmailアドレスを受け取り返すだけのサンプル関数
export async function login(email: string): Promise<User> {
  return { email };
}

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_remix_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [SECRETS],
    secure: process.env.NODE_ENV === "production",
  },
});

export const authenticator = new Authenticator(sessionStorage);

const auth0Strategy = new Auth0Strategy(
  {
    callbackURL: AUTH0_CALLBACK_URL,
    clientID: AUTH0_CLIENT_ID,
    clientSecret: AUTH0_CLIENT_SECRET,
    domain: AUTH0_DOMAIN,
  },
  async ({ profile }) => {
    // profileにAuth0のプロフィール情報が返ってきます
    console.log(profile);
    //
    // 返ってきた情報を利用してDBへ書き込むなどの処理
    // 加工するなどの処理を入れる
    //
    // 今回はユーザーのEmailアドレスを返す関数を返すのみ
    return await login(profile.emails[0].value);
  }
);

authenticator.use(auth0Strategy);

export const { getSession, commitSession, destroySession } = sessionStorage;
