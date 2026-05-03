import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/components/Projects';
import { notFound } from 'next/navigation';

const slugify = (s) =>
  String(s ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export default function ProjectDetail({ params }) {
  const { slug } = params;

  const item = projects.items.find((it) => slugify(it.title || it.name || it.num) === slug);
  if (!item) return notFound();

  const title = item.title || item.name || '';

  return (
    <section className="min-h-[80vh] py-12">
      <div className="container mx-auto">
        <Link href="/projects" className="text-sm text-accent mb-4 inline-block">← Back to projects</Link>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative w-full h-64 md:h-96 lg:h-[560px] rounded overflow-hidden bg-gray-800">
              <Image src={item.thumb} alt={title} fill className="object-cover" priority />
            </div>
            <p className="text-white/70 mt-4">{item.description}</p>

            {item.responsibilities && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  {item.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="p-4 bg-[#161618] rounded">
            <div className="mb-4">
              <div className="text-sm text-accent">Category</div>
              <div className="text-white">{item.category}</div>
            </div>

            {item.techStack || item.stack ? (
              <div className="mb-4">
                <div className="text-sm text-accent">Tech</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(item.techStack || item.stack).map((s, i) => (
                    <span key={i} className="text-sm bg-white/5 px-2 py-1 rounded text-white/80">{typeof s === 'string' ? s : s.name}</span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-4 flex flex-col gap-2">
              {item.live && (
                <a target="_blank" rel="noopener noreferrer" href={item.live} className="px-3 py-2 bg-accent rounded text-center">Live Demo</a>
              )}
              {item.liveDemo && (
                <a target="_blank" rel="noopener noreferrer" href={item.liveDemo} className="px-3 py-2 bg-accent rounded text-center">Live Demo</a>
              )}
              {item.github && (
                <a target="_blank" rel="noopener noreferrer" href={item.github} className="px-3 py-2 bg-white/5 rounded text-center">GitHub</a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
