"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../components/Projects';

const ITEMS_PER_PAGE = 8; // 4 per row x 2 rows

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const Work = () => {
  const projectItems = useMemo(() => projects?.items ?? [], []);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(projectItems.length / ITEMS_PER_PAGE));

  const paged = projectItems.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <section className="min-h-[80vh] py-12">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-bold mb-6">{projects.title}</h2>
        <p className="text-white/70 mb-8">{projects.description}</p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paged.map((item, idx) => {
            const title = item.title || item.name || '';
            const slug = slugify(title || item.num || `project-${(page - 1) * ITEMS_PER_PAGE + idx}`);
            return (
              <Link key={slug} href={`/projects/${slug}`} className="group block bg-[#1f1f23] rounded overflow-hidden shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src={item.thumb} alt={title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-sm text-accent mb-1">{item.category}</div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-white/60 text-sm mt-2 line-clamp-3">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* pagination */}
        <div className="flex items-center justify-between mt-8">
          <div className="text-white/60">Page {page} of {totalPages}</div>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 bg-white/5 rounded disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Prev
            </button>
            <button
              className="px-3 py-1 bg-white/5 rounded disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;