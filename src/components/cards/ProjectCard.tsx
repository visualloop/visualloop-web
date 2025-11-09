import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'cursor-pointer hover:border-border/80 transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
        onClick && 'cursor-pointer'
      )}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <Card>
        <div className="aspect-video bg-card overflow-hidden">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground/70 text-sm">Project {project.id}</p>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.client}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground/70">{project.genre}</p>
        </CardContent>
      </Card>
    </article>
  )
}

