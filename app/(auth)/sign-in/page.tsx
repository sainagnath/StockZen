'use client'

import FooterLink from "@/components/forms/FooterLink"
import InputField from "@/components/forms/InputField"
import { Button } from "@/components/ui/button"
import { signInWithEmail } from "@/lib/actions/auth.actions"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { toast } from "sonner"

function SignIn() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {

            email: '',
            password: '',

        }, mode: 'onBlur'
    })

    const onSubmit = async (data: SignInFormData) => {
        try {
            const result = await signInWithEmail(data);
            if(result.success) router.push('/');
        } catch (e) {
            console.error(e);
            toast.error('Sign in failed', {
                description: e instanceof Error ? e.message : 'Failed to sign in.'
            })
        }
    }

    return (

        <>
            <h1 className="form-title mt-7">Log In Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" action="">
                <InputField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter your Email"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email is required'}}
                />

                <InputField
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter a strong password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 8 }}
                />

                <Button type="submit" className="w-full yellow-btn mt-5" disabled={isSubmitting}>
                    {isSubmitting ? 'Logging in...' : 'Log In'}
                </Button>

                <FooterLink text="Don't have an account?" linkText="Sign up" href="/sign-up"/>
            </form>
        </>
    )
}

export default SignIn
