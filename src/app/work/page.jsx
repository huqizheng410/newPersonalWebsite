import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export default function Work() {
  return (
    <SimpleLayout
      title="A Taste of My Study & Work Journey."
    >
      <div className="space-y-20">
        <SpeakingSection title="Study">
          <Appearance
            href="#"
            title="Master of Information Technology - University of Auckland"
            description="I'm really into software development and also dabbled in network security, cloud architecture, and stuff like that."
            event="Feb 2023 to Nov 2024"
          />
          <Appearance
            href="#"
            title="Bachelor of Commerce - University of Auckland"
            description="Majoring in Finance & Accounting. I've covered pretty much all the essentials in both fields."
            event="2019 to 2022"
          />
        </SpeakingSection>
        <SpeakingSection title="Work">
        <Appearance
            href="#"
            title="Graduate Teaching Assistant - University of Auckland"
            description="Teaching full stack web development and Java courses to postgraduate students, actively engage in academic instruction and foster a conducive learning environment"
            event="Feb 2023 to Nov 2023"
          />
          <Appearance
            href="https://pacificalpacas.com/"
            title="Self-Employed - PACIFIC ALPACAS HOMETAX GROUP LIMITED"
            description="Helped expand the family business, growing it from one of New Zealand's largest alpaca wool collectors and processors, exporting to China and introducing New Zealand's fine products there."
            event="Nov 2022 to Feb 2023"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
