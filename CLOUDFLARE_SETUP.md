# Cloudflare 공유 저장소 설정

저장 버튼으로 넣은 일정/메모를 **다른 사용자도 볼 수 있게** 하려면 Cloudflare Pages에 KV를 연결해야 합니다.

## 단계

1. **KV 네임스페이스 만들기**
   - [Cloudflare 대시보드](https://dash.cloudflare.com) → Workers & Pages → KV → Create a namespace
   - 이름 예: `shanghai-trip-data`

2. **Pages 프로젝트에 KV 연결**
   - 해당 Pages 프로젝트 → **Settings** → **Functions** → **KV namespace bindings**
   - **Add binding** 클릭
   - **Variable name**: `TRIP_KV` (그대로 입력)
   - **KV namespace**: 위에서 만든 네임스페이스 선택
   - 저장 후 **다시 배포** 한 번 해주세요.

이후에는 사이트에서 저장한 내용이 KV에 올라가고, 다른 사람이 접속해도 같은 데이터를 보게 됩니다.
