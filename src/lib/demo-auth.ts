// ---------------------------------------------------------------------
// DEMO-ONLY admin "auth". This is NOT secure — it's a client-side flag
// in localStorage so the admin dashboard UI can be reviewed without a
// backend. There is no real password check, no session, and no server
// protecting the /admin route at this stage.
//
// When the real backend is ready, replace this whole file with proper
// authentication (e.g. a login API call + httpOnly session cookie +
// server-side route protection via middleware). See README.md.
// ---------------------------------------------------------------------

const DEMO_AUTH_KEY = "halo_noir_demo_admin_auth";
export const DEMO_ADMIN_PASSWORD = "halonoir-demo"; // placeholder only

export function demoLogin(password: string): boolean {
  if (password !== DEMO_ADMIN_PASSWORD) return false;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(DEMO_AUTH_KEY, "true");
  }
  return true;
}

export function demoLogout() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(DEMO_AUTH_KEY);
  }
}

export function isDemoLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(DEMO_AUTH_KEY) === "true";
}
