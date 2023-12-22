import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center text-xs mb-5 space-x-10 font-bold">
        <Link href='/'>Star | Shop @{new Date().getFullYear()}</Link>
        <Link href='/'>Legal</Link>
        <Link href='https://www.linkedin.com/in/brayan-yepesc/'>Created by Brayan</Link>
    </footer>
  )
}