import { NextResponse } from 'next/server';
import { db } from '../../../../drizzle/db';
import { v4 as uuidv4 } from 'uuid';
import { users } from '../../../../drizzle/schema';

export async function POST(request: Request) {
  try {
    const { ip } = await request.json();
    const id = uuidv4();

    if (!ip) {
      return NextResponse.json(
        { message: 'IP address is required' },
        { status: 401 }
      );
    }

    await db.insert(users).values({ id, ip });

    return NextResponse.json(
      { message: 'User added successfully' },
      { status: 202 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 501 }
    );
  }
}

export async function GET() {
  try {
    const allUsers = await db.select().from(users);

    return NextResponse.json(
      {
        message: 'Users retrieved successfully',
        users: allUsers
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 501 }
    );
  }
}

