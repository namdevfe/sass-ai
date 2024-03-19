import { SignUp } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp />
    </div>
  );
};

export default SignInPage;
