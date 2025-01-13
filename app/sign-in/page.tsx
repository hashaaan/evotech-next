import SignInForm from "./sign-in-form";

// Server component for SSR
export default async function SignInPage() {
  return (
    <div className="container mx-auto">
      <SignInForm title="Sign in to Mflix" />
    </div>
  );
}
