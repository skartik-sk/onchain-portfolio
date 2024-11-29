'use client'

// import {  useEffect } from 'react'
import { redirect } from 'next/navigation'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { ThemeToggle } from '@/components/theme-toggle'
// import Link from 'next/link'

export default function BasicInfoForm() {
  // const router = useRouter()
  // const [formData, setFormData] = useState({
  //   name: '',
  //   imageUrl: '',
  //   bio: '',
  //   skills: [''],
  //   socialMedia: {
  //     github: '',
  //     linkedin: '',
  //     twitter: ''
  //   }
  // })

  // useEffect(() => {
  //   const savedData = localStorage.getItem('portfolioBasicInfo')
  //   if (savedData) {
  //     setFormData(JSON.parse(savedData))
  //   }
  // }, [])

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  // const handleSkillChange = (index: number, value: string) => {
  //   const newSkills = [...formData.skills]
  //   newSkills[index] = value
  //   setFormData({ ...formData, skills: newSkills })
  // }

  // const addSkill = () => {
  //   setFormData({ ...formData, skills: [...formData.skills, ''] })
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   localStorage.setItem('portfolioBasicInfo', JSON.stringify(formData))
  //   router.push('/form/experience')
  // }

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-foreground">
    //   <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
    //     <div className="container flex h-14 items-center">
    //       <div className="mr-4 hidden md:flex">
    //         <Link href="/" className="mr-6 flex items-center space-x-2">
    //           <span className="hidden font-bold sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
    //             Portfolio Builder
    //           </span>
    //         </Link>
    //       </div>
    //       <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
    //         <nav className="flex items-center">
    //           <Link href="/portfolio">
    //             <Button className="gradient-button text-white">
    //               <span>View Portfolio</span>
    //             </Button>
    //           </Link>
    //         </nav>
    //         <ThemeToggle />
    //       </div>
    //     </div>
    //   </header>
    //   <main className="container mx-auto px-4 py-8">
    //     <Card className="glass">
    //       <CardHeader>
    //         <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Basic Information</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <form onSubmit={handleSubmit} className="space-y-4">
    //           <div>
    //             <Label htmlFor="name" className="text-gray-300">Name</Label>
    //             <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-gray-800 text-white border-gray-700" />
    //           </div>
    //           <div>
    //             <Label htmlFor="imageUrl" className="text-gray-300">Image URL</Label>
    //             <Input id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required className="bg-gray-800 text-white border-gray-700" />
    //           </div>
    //           <div>
    //             <Label htmlFor="bio" className="text-gray-300">Bio</Label>
    //             <Textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} required className="bg-gray-800 text-white border-gray-700" />
    //           </div>
    //           <div>
    //             <Label className="text-gray-300">Social Media</Label>
    //             <div className="space-y-2">
    //               <Input
    //                 name="github"
    //                 value={formData.socialMedia.github}
    //                 onChange={(e) => setFormData({
    //                   ...formData,
    //                   socialMedia: { ...formData.socialMedia, github: e.target.value }
    //                 })}
    //                 placeholder="GitHub URL"
    //                 className="bg-gray-800 text-white border-gray-700"
    //               />
    //               <Input
    //                 name="linkedin"
    //                 value={formData.socialMedia.linkedin}
    //                 onChange={(e) => setFormData({
    //                   ...formData,
    //                   socialMedia: { ...formData.socialMedia, linkedin: e.target.value }
    //                 })}
    //                 placeholder="LinkedIn URL"
    //                 className="bg-gray-800 text-white border-gray-700"
    //               />
    //               <Input
    //                 name="twitter"
    //                 value={formData.socialMedia.twitter}
    //                 onChange={(e) => setFormData({
    //                   ...formData,
    //                   socialMedia: { ...formData.socialMedia, twitter: e.target.value }
    //                 })}
    //                 placeholder="Twitter URL"
    //                 className="bg-gray-800 text-white border-gray-700"
    //               />
    //             </div>
    //           </div>
    //           <div>
    //             <Label className="text-gray-300">Skills</Label>
    //             {formData.skills.map((skill, index) => (
    //               <Input
    //                 key={index}
    //                 value={skill}
    //                 onChange={(e) => handleSkillChange(index, e.target.value)}
    //                 className="mb-2 bg-gray-800 text-white border-gray-700"
    //                 placeholder={`Skill ${index + 1}`}
    //               />
    //             ))}
    //             <Button type="button" onClick={addSkill} className="gradient-button text-white mt-2">
    //               <span>Add Skill</span>
    //             </Button>
    //           </div>
    //           <Button type="submit" className="gradient-button text-white w-full">
    //             <span>Save and Continue to Experience</span>
    //           </Button>
    //         </form>
    //       </CardContent>
    //     </Card>
    //   </main>
    // </div>
    redirect('/form/experience')
  )
}

