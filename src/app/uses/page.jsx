import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Some Software and Technologies I Use, Resources I Recommend."
    >
      <div className="space-y-20">
        <ToolsSection title="Highly recommend!">
        <Tool title="ChatGPT" href="https://chat.openai.com">
        Yes, unsurprisingly, I want to introduce you to my 24/7, most patient, and incredibly knowledgeable private teacher.
          </Tool>
          <Tool title="ChatGPT API" href="https://platform.openai.com">
          Currently diving into a tech that stands out from the GPT - it offers more freedom and choices, letting you integrate features into your software as per your needs.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Software">
          <Tool title="Visual Studio Code" href="https://code.visualstudio.com">
          My favorite editor hands down. Seamless integration of multiple languages and features, plus all sorts of handy plugins and libraries—you're gonna love it!
          </Tool>
          <Tool title="Docker" href="https://www.docker.com/">
          Docker is a standout! Makes handling projects a breeze with its container magic, not to mention the heaps of tools and support available. You'll definitely get hooked!
          </Tool>
          <Tool title="IntelliJ IDEA" href="https://www.jetbrains.com/idea/">
          IntelliJ IDEA with its smart coding assistance and a boatload of features tailored for productivity, it's like having a coding wizard by your side.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Tech">
          <Tool title="Git" href="https://git-scm.com/">
          No need to explain too much, every programmer gets it.
          </Tool>
          <Tool title="React" href="https://reactjs.org/">
    React has revolutionized the way I build interfaces, making them more interactive and responsive. Its component-based architecture significantly streamlines my development process.
  </Tool>
  <Tool title="JavaScript (JS)" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    JavaScript is the lifeblood of web development for me. It’s the script I breathe when I bring life to static web pages, making them dynamic and engaging.
  </Tool>
  <Tool title="Node.js" href="https://nodejs.org/">
    Node.js has been a game-changer for me, allowing to use JavaScript on the server side. It’s my go-to for creating scalable and efficient web applications.
  </Tool>
  <Tool title="Next.js" href="https://nextjs.org/">
    Next.js empowers me with the ability to build server-side rendering and static web applications with ease. Its seamless integration with React enhances my productivity and performance.
  </Tool>
  <Tool title="MongoDB" href="https://www.mongodb.com/">
    MongoDB has reshaped the way I think about databases. Its flexible, document-oriented model is perfectly suited for my agile development processes.
  </Tool>
  <Tool title="Express" href="https://expressjs.com/">
    Express is my framework of choice for building web applications with Node.js. Its minimalistic and flexible nature allows me to build robust APIs quickly and efficiently.
  </Tool>
  <Tool title="AWS (Amazon Web Services)" href="https://aws.amazon.com/">
    AWS is my playground for cloud computing. It offers an extensive set of tools and services that I leverage to build, deploy, and scale applications with unparalleled agility.
  </Tool>
  <Tool title="Azure" href="https://azure.microsoft.com/">
    Azure provides me with a wealth of cloud services that are vital for developing, testing, deploying, and managing my applications across a global network of Microsoft-managed data centers.
  </Tool>
    </ToolsSection>
        
      </div>
    </SimpleLayout>
  )
}
