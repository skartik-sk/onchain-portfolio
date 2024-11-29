'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'

export default function ExperienceForm() {
  const router = useRouter()
  const [experiences, setExperiences] = useState([{ company: '', position: '', description: '' }])

  useEffect(() => {
    const savedData = localStorage.getItem('portfolioExperiences')
    if (savedData) {
      setExperiences(JSON.parse(savedData))
    }
  }, [])

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const newExperiences = [...experiences]
    newExperiences[index] = { ...newExperiences[index], [field]: value }
    setExperiences(newExperiences)
  }

  const addExperience = () => {
    setExperiences([...experiences, { company: '', position: '', description: '' }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('portfolioExperiences', JSON.stringify(experiences))
    router.push('/form/projects')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Portfolio Builder
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <Link href="/portfolio">
                <Button className="gradient-button text-white">
                  <span>View Portfolio</span>
                </Button>
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2 mb-4 p-4 border rounded border-gray-700">
                  <Input
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                    placeholder="Company"
                    className="bg-gray-800 text-white border-gray-700"
                  />
                  <Input
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                    placeholder="Position"
                    className="bg-gray-800 text-white border-gray-700"
                  />
                  <Textarea
                    value={exp.description}
                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                    placeholder="Description"
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
              ))}
              <Button type="button" onClick={addExperience} className="gradient-button text-white">
                <span>Add Experience</span>
              </Button>
              <div className="flex justify-between">
                <Link href="/form">
                  <Button className="gradient-button text-white">
                    <span>Back to Basic Info</span>
                  </Button>
                </Link>
                <Button type="submit" className="gradient-button text-white">
                  <span>Save and Continue to Projects</span>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

