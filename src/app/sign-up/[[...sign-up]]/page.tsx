import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="h-[calc(100vh-6rem)] flex items-center justify-center">
        <SignUp />
    </div>
  )
}