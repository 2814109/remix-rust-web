import type { LoaderFunction } from "remix";
import { authenticator } from "~/auth.server";
import { useEffect } from "react";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return { user };
};

export default function Index() {
  useEffect(() => {
    window.location.href = "/dashboard";
  }, []);

  return null;
}
