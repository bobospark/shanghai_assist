const KEY = "trip";

export async function onRequestGet(context) {
  try {
    const kv = context.env.TRIP_KV;
    if (!kv) {
      return Response.json(
        { error: "KV not configured" },
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }
    const raw = await kv.get(KEY);
    const data = raw ? JSON.parse(raw) : { plans: {}, extraMemos: [] };
    return Response.json(data, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
  } catch (e) {
    return Response.json(
      { error: (e && e.message) || String(e) },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function onRequestPost(context) {
  try {
    const kv = context.env.TRIP_KV;
    if (!kv) {
      return Response.json(
        { error: "KV not configured" },
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }
    const body = await context.request.json();
    const payload = {
      plans: body.plans && typeof body.plans === "object" ? body.plans : {},
      extraMemos: Array.isArray(body.extraMemos) ? body.extraMemos : []
    };
    await kv.put(KEY, JSON.stringify(payload));
    return Response.json({ ok: true }, {
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    return Response.json(
      { error: (e && e.message) || String(e) },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
