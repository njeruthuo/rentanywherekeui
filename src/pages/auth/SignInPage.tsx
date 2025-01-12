import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/custom/buttons";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "@/state/features/auth/authApi";
import { successToaster } from "@/components/custom/toasters";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8).max(12),
});

const SignInPage = () => {
  const [signIn] = useSignInMutation();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signIn(values).unwrap();
      successToaster("The login was successful. You are being redirected...")
      navigate('/dashboard')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-1/2"
        >
          <h3 className="text-xl font-semibold">Sign in</h3>
          <p className="text-xl font-light">
            Please sign in to your account to post an ad
          </p>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="write email here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="write password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton>Submit</SubmitButton>

          <p>
            You need a new account?{" "}
            <Link
              className="mx-2 primary-color primary-color-hover"
              to={"/sign-up"}
            >
              Sign up here.
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
