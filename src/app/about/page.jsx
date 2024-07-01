"use client";

import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { Container } from "@/components/Container"
import {
  GitHubIcon,
  LinkedInIcon,
} from "@/components/SocialIcons"
import qizhengimg from "@/images/Handsome_pic_haha.jpg"

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={qizhengimg}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Kia Ora! <br></br>
           I’m Qizheng Hu. currently nestled in Auckland, New Zealand.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            When I was a kid, my dream was to become a computer geek. The first time I got my hands on a computer, I was completely captivated by this marvel of human intellect. A tiny box and screen, yet through the internet, it held more knowledge than I could ever hope to learn in a lifetime. How fascinating is that!
            </p>
            <p>
            As a typical INTP personality (if you don&apos;t know what I&apos;m talking about, <a href="https://www.16personalities.com/intp-personality" className="text-blue-500 underline">click here</a> to check it out, and you can even test your own personality!). I&apos;m curious about everything around me. You could say curiosity is my primary drive, and logic is the key that helps me navigate through mazes. I&apos;m good at seeing logic, finding similarities, and making connections, so learning anything new seems to come naturally to me.
            </p>
            <p>
            Software development is my jam, just like how I enjoy playing Minecraft. Building software feels like constructing my own kingdom from scratch in Minecraft, and its redstone systems were like my CS 101. After finishing my Bachelor&apos;s degree in Commerce at the <a href="https://www.auckland.ac.nz/" className="text-blue-500 underline">University of Auckland</a>, I could finally embark on my beloved coding journey. That&apos;s why I chose to continue with a Master of Information Technology at the same University.
            </p>
            <p>
            If you&apos;ve got some cool ideas you want to bring to life, or for any reason you want to get in touch, feel free to shoot me a message anytime!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/huqizheng410" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/qizheng-hu-a0276b282/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:huqizheng410@outlook.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              huqizheng410@outlook.com
            </SocialLink>
          </ul>
        </div>
      </div>

    </Container>
  )
}
