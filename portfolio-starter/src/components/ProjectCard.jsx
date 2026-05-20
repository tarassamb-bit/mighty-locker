import React from 'react'

export default function ProjectCard({title, desc, repo, tags = []}){
  return (
    <article className="border rounded p-4 bg-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-700">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>)}
      </div>
      <div className="mt-3">
        <a href={repo} className="text-blue-600 hover:underline">View repo</a>
      </div>
    </article>
  )
}
