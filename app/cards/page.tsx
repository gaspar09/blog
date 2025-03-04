import { SampleCard } from "@/components/sample-card"

export default function CardsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        <SampleCard
          title="Lakers News"
          description="Latest updates from the team"
          content="The Los Angeles Lakers have announced their new lineup for the upcoming season, featuring several exciting additions to the roster."
          footerText="Posted 2 days ago"
        />

        <SampleCard
          title="Game Highlights"
          description="Best moments from recent games"
          content="Watch the top plays from last night's thrilling victory, including spectacular dunks and game-changing defensive stops."
          footerText="Posted 1 day ago"
        />

        <SampleCard
          title="Player Interview"
          description="Exclusive content"
          content="In a candid conversation, the team's newest star opens up about joining the Lakers and his championship aspirations."
          footerText="Posted 5 hours ago"
        />
      </div>
    </main>
  )
}

