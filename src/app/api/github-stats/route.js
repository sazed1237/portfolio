import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return NextResponse.json({ commitCount: 0, isCommitCountAvailable: false });
  }

  if (!token) {
    return NextResponse.json({ commitCount: 0, isCommitCountAvailable: false });
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

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({ query, variables: { login: username } }),
      cache: "no-store",
    });

    const data = await response.json();
    const total = data?.data?.user?.contributionsCollection?.totalCommitContributions;
    const normalized = typeof total === "number" ? total : 0;

    return NextResponse.json({
      commitCount: normalized,
      isCommitCountAvailable: true,
    });
  } catch {
    return NextResponse.json({ commitCount: 0, isCommitCountAvailable: false });
  }
}
