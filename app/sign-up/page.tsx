import SignUpForm from "./sign-up-form";

export default function SignUpPage() {
  // Create sign up form using shadcn
  // Add shadcn Card, Label, Input
  // Use zod to validate form
  // Use mongodb to store user

  return (
    <div className="container mx-auto">
      <SignUpForm />
    </div>
  );
}
