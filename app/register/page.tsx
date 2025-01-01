import RegisterForm from "./register-form";

export default function SignUpPage() {
  // Create sign up form using shadcn
  // Add shadcn Card, Label, Input
  // Use zod to validate form
  // Use mongodb to store user
  // Install bcrypt

  return (
    <div className="container mx-auto">
      <RegisterForm />
    </div>
  );
}
