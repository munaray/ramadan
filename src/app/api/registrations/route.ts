import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = "https://staging.myajocycle.com/api";

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/rewards`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      const body = await response.text();
      return NextResponse.json(
        { error: `API error: ${response.status}`, details: body.slice(0, 200) },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch registrations:", error);
    return NextResponse.json(
      { error: "Failed to fetch registrations" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${API_BASE_URL}/rewards`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return NextResponse.json(
        {
          error: `API error: ${response.status}`,
          details: errorBody.slice(0, 200),
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to create registration:", error);
    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: 500 }
    );
  }
}
