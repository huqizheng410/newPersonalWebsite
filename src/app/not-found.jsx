import { Button } from "@/components/Button"
import { Container } from "@/components/Container"

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Oops! Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        Maybe you&apos;re looking for a page I haven&apos;t created yet? 
        </p>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        If you spot any bugs or have any feedback, feel free to let me know.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
