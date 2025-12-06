'use client'

import FooterLink from "@/components/forms/FooterLink"
import InputField from "@/components/forms/InputField"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

function SignIn() {
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

            console.log(data)
        } catch (e) {
            console.error(e)
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
                    validation={{ required: 'Email is required', pattern: /^w+@\w+\.\w+$/, message: 'Invalid email address' }}
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
