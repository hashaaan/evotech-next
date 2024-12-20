import { signIn } from "@/auth";

export default function SignInWithGithub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className="mt-6 bg-white text-green-600 border-green-500 border hover:bg-green-500 hover:text-black h-10 px-4 py-2 rounded-lg text-sm"
      >
        Signin with GitHub
      </button>
    </form>
  );
}
