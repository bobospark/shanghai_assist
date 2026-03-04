const KEY = "trip_v2";

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
    // bulletinBoard: 게시판용, personalMemos: 개인 메모용, plans: 일자별 계획
    const data = raw ? JSON.parse(raw) : {
      plans: {},
      bulletinBoard: [],
      checklist: [],
      expenses: [],
      userPlaces: [],
      guideNotes: "",
      personalMemos: []
    };
    return Response.json(data, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  try {
    const kv = context.env.TRIP_KV;
    if (!kv) return Response.json({ error: "KV not configured" }, { status: 503 });

    const body = await context.request.json();
    const payload = {
      plans: body.plans || {},
      bulletinBoard: Array.isArray(body.bulletinBoard) ? body.bulletinBoard : [],
      checklist: Array.isArray(body.checklist) ? body.checklist : [],
      expenses: Array.isArray(body.expenses) ? body.expenses : [],
      userPlaces: Array.isArray(body.userPlaces) ? body.userPlaces : [],
      guideNotes: body.guideNotes || "",
      personalMemos: Array.isArray(body.personalMemos) ? body.personalMemos : []
    };
    await kv.put(KEY, JSON.stringify(payload));
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
