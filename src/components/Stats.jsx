"use client";

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { projects } from './Projects';
import { skills } from '../Page/Resume/Resume';

// console.log(GITHUB_USERNAME)

const Stats = () => {

    const [commitCount, setCommitCount] = useState(0);
    const [isCommitCountAvailable, setIsCommitCountAvailable] = useState(false);

    useEffect(() => {
        const cacheKey = 'github_stats';
        const cacheTtlMs = 1000 * 60 * 60 * 6; // 6 hours

        const readCache = () => {
            if (!cacheKey) return null;
            try {
                const raw = localStorage.getItem(cacheKey);
                if (!raw) return null;
                const parsed = JSON.parse(raw);
                if (!parsed?.ts) return null;
                if (Date.now() - parsed.ts > cacheTtlMs) return null;
                return parsed;
            } catch {
                return null;
            }
        };

        const writeCache = (data) => {
            if (!cacheKey) return;
            try {
                localStorage.setItem(cacheKey, JSON.stringify({ ...data, ts: Date.now() }));
            } catch {
                // ignore cache failures
            }
        };

        const fetchCommitContributions = async () => {
            const cached = readCache();
            if (cached?.commitCount != null && cached?.isCommitCountAvailable != null) {
                setCommitCount(cached.commitCount);
                setIsCommitCountAvailable(cached.isCommitCountAvailable);
                return;
            }

            try {
                const response = await fetch('/api/github-stats', { cache: 'no-store' });
                const data = await response.json();
                const total = data?.commitCount;
                const normalized = typeof total === 'number' ? total : 0;
                setCommitCount(normalized);
                setIsCommitCountAvailable(Boolean(data?.isCommitCountAvailable));
                writeCache({ commitCount: normalized, isCommitCountAvailable: Boolean(data?.isCommitCountAvailable) });
            } catch (error) {
                console.error('Error fetching GitHub commit contributions:', error);
                setCommitCount(0);
                setIsCommitCountAvailable(false);
                writeCache({ commitCount: 0, isCommitCountAvailable: false });
            }
        };

        fetchCommitContributions();
    }, []);

    const statsItems = [
        {
            num: 2,
            text: "Years of experience",
        },
        {
            num: projects.items.length,
            text: "Projects completed",
        },
        {
            num: skills.skillsList.length,
            text: "Technologies mastered",
        },
        ...(isCommitCountAvailable
            ? [
                {
                    num: commitCount,
                    text: "Commits (last year)",
                },
            ]
            : []),
    ]


    return (
        <section className='pt-4 pb-12 lg:pt-0 '>
            <div className='container mx-auto'>
                <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none'>
                    {
                        statsItems.map((stats, index) => {
                            return (
                                <div key={index} className='flex-1 flex gap-4 items-center justify-center lg:justify-start'>
                                    <CountUp
                                        end={stats.num}
                                        duration={5}
                                        delay={2}
                                        separator=","
                                        className='text-4xl lg:text-6xl font-extrabold'
                                    />
                                    <p className={`${stats.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 `}>{stats.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Stats;