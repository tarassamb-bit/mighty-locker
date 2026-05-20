import React from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Mighty Locker',
    desc: 'Open-source password manager with zero-knowledge encryption',
    repo: 'https://github.com/tarassamb-bit/mighty-locker',
    tags: ['Rust','Encryption']
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
