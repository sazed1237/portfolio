import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { projects } from './Projects';
import { skills } from '../Page/Resume/Resume';
import axios from 'axios';


const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// console.log(GITHUB_USERNAME)

const Stats = () => {

    const [commitCount, setCommitCount] = useState(0);
    const [isCommitCountAvailable, setIsCommitCountAvailable] = useState(false);

    useEffect(() => {
        const cacheKey = GITHUB_USERNAME ? `github_stats_${GITHUB_USERNAME}` : null;
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
            if (!GITHUB_USERNAME) {
                setCommitCount(0);
                setIsCommitCountAvailable(false);
                return;
            }

            const cached = readCache();
            if (cached?.commitCount != null && cached?.isCommitCountAvailable != null) {
                setCommitCount(cached.commitCount);
                setIsCommitCountAvailable(cached.isCommitCountAvailable);
                return;
            }

            // Without a token, we can't reliably fetch a "total commits" count from GitHub's public REST APIs.
            if (!GITHUB_TOKEN) {
                setCommitCount(0);
                setIsCommitCountAvailable(false);
                writeCache({ commitCount: 0, isCommitCountAvailable: false });
                return;
            }

            try {
                const query = `
                  query($login: String!) {
                    user(login: $login) {
                      contributionsCollection {
                        totalCommitContributions
                      }
                    }
                  }
                `;

                const response = await axios.post(
                    'https://api.github.com/graphql',
                    {
                        query,
                        variables: { login: GITHUB_USERNAME },
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${GITHUB_TOKEN}`,
                            Accept: 'application/vnd.github+json',
                        },
                    }
                );

                const total = response?.data?.data?.user?.contributionsCollection?.totalCommitContributions;
                const normalized = typeof total === 'number' ? total : 0;
                setCommitCount(normalized);
                setIsCommitCountAvailable(true);
                writeCache({ commitCount: normalized, isCommitCountAvailable: true });
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