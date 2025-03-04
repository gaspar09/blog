import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SampleCardProps {
  title: string
  description: string
  content: string
  footerText?: string
  onButtonClick?: () => void
}

export function SampleCard({ title, description, content, footerText = "Learn more", onButtonClick }: SampleCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">{footerText}</p>
        <Button onClick={onButtonClick} variant="outline">
          View
        </Button>
      </CardFooter>
    </Card>
  )
}

