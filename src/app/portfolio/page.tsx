'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

interface PortfolioData {
  name: string;
  imageUrl: string;
  bio: string;
  skills: string[];
  experiences: { company: string; position: string; description: string }[];
  projects: { name: string; link: string; description: string }[];
    social: {
        github: string;
        linkedin: string;
        twitter: string;
    }
}

export default function PortfolioPage() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(  {
    name: 'John Doe',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEd2zxEc_4IQ1jHyniHLECu15zRjkHTBJzA&s',
    bio: 'A passionate software developer with experience in full-stack development.',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
    experiences: [
      {
        company: 'Tech Corp',
        position: 'Senior Developer',
        description: 'Worked on developing and maintaining web applications.'
      },
      {
        company: 'Web Solutions',
        position: 'Frontend Developer',
        description: 'Focused on building responsive and interactive user interfaces.'
      }
    ],
    projects: [
      {
        name: 'Project Alpha',
        link: 'https://github.com/johndoe/project-alpha',
        description: 'A web application for managing tasks and projects.'
      },
      {
        name: 'Project Beta',
        link: 'https://github.com/johndoe/project-beta',
        description: 'A mobile app for tracking fitness activities.'
      }
    ],
    social: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe'
    }
  })

  useEffect(() => {
    const data = localStorage.getItem('portfolioData')
    if (data) {
      setPortfolioData(JSON.parse(data))
    }
  }, [])

  if (!portfolioData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {portfolioData.name}
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <Link href="/form">
                <Button className="gradient-button text-white">
                  <span>Edit Portfolio</span>
                </Button>
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass md:sticky md:top-20 md:h-fit">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <img src={portfolioData.imageUrl} alt={portfolioData.name} className="w-32 h-32 rounded-full mb-4 border-2 border-pink-500" />
                <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{portfolioData.name}</h1>
                <p className="text-gray-400 mb-4">{portfolioData.bio}</p>
                <div className="flex space-x-4 mb-4">
                    <Link href={portfolioData.social.github}>
                  <Button  variant="outline" size="icon" className="rounded-full border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300">
                    <Github className="h-4 w-4" />
                  </Button>
                    </Link>
                    <Link href={portfolioData.social.github}>
                  <Button variant="outline" size="icon" className="rounded-full border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <Linkedin className="h-4 w-4" />
                  </Button> </Link>
                  <Link href={portfolioData.social.github}>
                  <Button variant="outline" size="icon" className="rounded-full border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300">
                    <Mail className="h-4 w-4" />
                  </Button> </Link>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {portfolioData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="glass">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</h2>
                <div className="space-y-4">
                  {portfolioData.experiences.map((exp, index) => (
                    <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-pink-400">{exp.position}</h3>
                      <p className="text-sm text-gray-400">{exp.company}</p>
                      <p className="mt-2 text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="glass">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</h2>
                <div className="space-y-4">
                  {portfolioData.projects.map((project, index) => (
                    <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-pink-400 flex items-center">
                        {project.name}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                          <ExternalLink className="h-4 w-4 text-blue-400 hover:text-blue-300" />
                        </a>
                      </h3>
                      <p className="mt-2 text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

