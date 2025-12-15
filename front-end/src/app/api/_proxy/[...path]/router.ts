import { NextResponse } from 'next/server';

const API = 'http://136.112.104.166:8080';

export async function GET(req: Request, ctx: { params: { path: string[] } }) {
    const url = new URL(req.url);
    const target = `${API}/${ctx.params.path.join('/')}${url.search}`;
    const r = await fetch(target, { headers: req.headers });
    return new NextResponse(await r.arrayBuffer(), {
        status: r.status,
        headers: r.headers,
    });
}

export async function POST(req: Request, ctx: { params: { path: string[] } }) {
    const target = `${API}/${ctx.params.path.join('/')}`;
    const r = await fetch(target, {
        method: 'POST',
        headers: {
            'Content-Type':
                req.headers.get('content-type') ?? 'application/json',
        },
        body: await req.arrayBuffer(),
    });
    return new NextResponse(await r.arrayBuffer(), {
        status: r.status,
        headers: r.headers,
    });
}
