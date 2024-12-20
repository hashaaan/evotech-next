import LoginForm from "./login-form";

// Server component for SSR
export default async function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <LoginForm title="Sign in to Mflix" />
    </div>
  );
}
