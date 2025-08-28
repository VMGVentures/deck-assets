import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData, defaultSession } from '@/lib/session';

export async function GET(request: NextRequest) {
  try {
    const session = await getIronSession<SessionData>(request, NextResponse.next(), sessionOptions);
    
    return NextResponse.json({
      isAuthenticated: session.isAuthenticated ?? defaultSession.isAuthenticated
    });
  } catch (error) {
    return NextResponse.json({ isAuthenticated: false });
  }
}
