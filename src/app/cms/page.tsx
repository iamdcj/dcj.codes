import Logo from "@/components/Logo";
import Login from "./components/Login";

export default function Home() {
  const isAuthenticated = false;

  return (
    <main>
      <Logo isRelative />
      {isAuthenticated ? <>HEY</> : <Login />}
    </main>
  );
}
