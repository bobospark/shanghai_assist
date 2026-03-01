/* ========== 명소 데이터 (전체: 지도 + 바/디저트 등) ========== */
const places = [
  {
    id: "hotel_golden",
    type: "hotel",
    emoji: "⭐",
    koreanName: "골든 튤립 번드 뉴 아시아",
    chineseName: "金郁金香外滩新亚酒店",
    areaKorean: "와이탄 · 난징동루 근처",
    areaChinese: "外滩 / 南京东路",
    info: "와이탄과 난징동루 사이에 위치한 호텔. 와이탄 야경, 난징동루 쇼핑 모두 도보/짧은 택시 거리.",
    tips: [
      "택시 기사에게는 「外滩 新亚酒店」 또는 영문 주소를 보여주는 게 편해요.",
      "와이탄 쪽으로는 걸어서 강변까지 10~15분 정도."
    ],
    tags: ["기준 위치", "짐 두고 이동", "야경 동선 중심"]
  },
  {
    id: "bund",
    type: "attraction",
    emoji: "🌉",
    koreanName: "와이탄(외탄)",
    chineseName: "外滩",
    areaKorean: "황푸 강변 야경",
    areaChinese: "黄浦区 外滩",
    info: "상하이에서 가장 유명한 야경 스팟. 루자쭈이 스카이라인이 한눈에 보이는 산책 코스.",
    tips: [
      "해 지기 30분~1시간 전에 도착해서 하늘 색 변하는 걸 보는 게 제일 예뻐요.",
      "사람이 많으니 귀중품 조심, 사진은 강쪽으로만 집중!"
    ],
    tags: ["야경", "산책", "사진 스팟"]
  },
  {
    id: "nanjing_east",
    type: "attraction",
    emoji: "🛍️",
    koreanName: "난징동루 보행가",
    chineseName: "南京东路步行街",
    areaKorean: "쇼핑/간단 구경",
    areaChinese: "黄浦区 南京东路",
    info: "유명한 보행자 거리. 쇼핑·간식·야경 구경을 한 번에 할 수 있는 메인 스트리트.",
    tips: [
      "와이탄과 같이 묶어서 많이 다녀요. 호텔 기준으로 도보 or 1~2정거장.",
      "야식/간단 먹거리, 드럭스토어 구경하기 좋아요."
    ],
    tags: ["쇼핑", "야간 산책", "간식"]
  },
  {
    id: "people_square",
    type: "attraction",
    emoji: "🏛️",
    koreanName: "인민광장 & 상하이 박물관",
    chineseName: "人民广场 / 上海博物馆",
    areaKorean: "도심 광장",
    areaChinese: "黄浦区 人民广场",
    info: "상하이 도심 한가운데 광장. 상하이 박물관, 공원, 쇼핑몰 등이 모여 있는 곳.",
    tips: [
      "중국 역사/도자기/서예 등 박물관 보는 거 좋아하면 상하이 박물관 추천.",
      "지하철 허브라서 다른 지역 이동할 때 갈아타기 좋음."
    ],
    tags: ["박물관", "도심", "이동 허브"]
  },
  {
    id: "xintiandi",
    type: "attraction",
    emoji: "🍷",
    koreanName: "신톈디",
    chineseName: "新天地",
    areaKorean: "감성 레스토랑/바 거리",
    areaChinese: "黄浦区 新天地",
    info: "옛 상하이 건물(석고우)을 리모델링한 세련된 식당·바·카페 거리.",
    tips: [
      "저녁에 가서 야외석에서 맥주나 칵테일 마시기 좋음.",
      "가격은 살짝 관광지 가격이라 너무 비싼 집인지 미리 확인!"
    ],
    tags: ["레스토랑", "바", "야간"]
  },
  {
    id: "tianzifang",
    type: "attraction",
    emoji: "🧱",
    koreanName: "티엔즈팡",
    chineseName: "田子坊",
    areaKorean: "골목 감성 / 소품샵",
    areaChinese: "黄浦区 田子坊",
    info: "좁은 골목에 카페, 공방, 기념품 가게들이 가득한 예쁜 골목 동네.",
    tips: [
      "오후 시간대에 골목 구경 → 티 타임 코스로 좋음.",
      "골목이 복잡해서 친구랑 흩어지면 다시 만나기 포인트 미리 정해두기."
    ],
    tags: ["골목", "카페", "기념품"]
  },
  {
    id: "lujiazui",
    type: "attraction",
    emoji: "🏙️",
    koreanName: "루자쭈이 전망(오리엔탈 펄 일대)",
    chineseName: "陆家嘴 / 东方明珠",
    areaKorean: "고층 건물 뷰",
    areaChinese: "浦东新区 陆家嘴",
    info: "강 건너 푸둥 쪽 고층 빌딩 밀집 지역. 상하이 광고에서 보던 풍경 그대로.",
    tips: [
      "저녁에 전망대 올라가면 와이탄+도심 불빛이 다 보임.",
      "전망대는 오리엔탈 펄(东方明珠电视塔)·상하이 타워(上海塔) 중에 하나만 골라도 충분."
    ],
    tags: ["전망대", "야경", "스카이라인"]
  },
  {
    id: "shanghai_tower",
    type: "attraction",
    emoji: "🗼",
    koreanName: "상하이 타워 전망대",
    chineseName: "上海塔 观光厅",
    areaKorean: "초고층 전망대",
    areaChinese: "浦东新区 上海中心大厦",
    info: "중국에서 가장 높은 빌딩. 빠른 엘리베이터 타고 올라가는 재미 + 도시 전체 파노라마.",
    tips: [
      "날씨/시야 좋은 날로 가는 게 중요! (안개 심하면 아깝습니다)",
      "온라인 예매로 줄 줄이기 가능, 시간대 넉넉히."
    ],
    tags: ["전망대", "초고층", "인생샷"]
  },
  {
    id: "bund_bar",
    type: "cafe",
    emoji: "🍸",
    koreanName: "와이탄 야경 바/루프탑",
    chineseName: "外滩 酒吧 / 天台酒吧",
    areaKorean: "와이탄 인근 루프탑",
    areaChinese: "外滩 附近 酒吧街",
    info: "황푸강과 루자쭈이 스카이라인이 동시에 보이는 루프탑/바 밀집.",
    tips: [
      "입장 전에 뷰가 어느 방향인지(강/도시) 꼭 확인!",
      "드레스코드 느슨하지만, 너무 캐주얼한 슬리퍼/운동복은 피하는 편이 안전."
    ],
    tags: ["루프탑", "칵테일", "야경"]
  },
  {
    id: "xintiandi_cafe",
    type: "cafe",
    emoji: "☕",
    koreanName: "신톈디 카페/바",
    chineseName: "新天地 咖啡厅 / 酒吧",
    areaKorean: "신톈디 메인 스트리트",
    areaChinese: "新天地 步行街",
    info: "테라스 카페, 브런치, 세계 음식 레스토랑, 바들이 모여 있는 신톈디 중심 거리.",
    tips: [
      "주말 브런치 타임에는 대기 있을 수 있으니 여유 있게.",
      "날씨 좋으면 야외 자리 추천."
    ],
    tags: ["카페", "브런치", "바"]
  },
  {
    id: "yongkang_bar",
    type: "cafe",
    emoji: "🍹",
    koreanName: "융캉루 바 거리",
    chineseName: "永康路 酒吧街",
    areaKorean: "로컬 바/펍 골목",
    areaChinese: "徐汇区 永康路",
    info: "현지인·외국인 섞여 있는 로컬 바 골목 느낌. 비교적 캐주얼하게 마시기 좋은 곳.",
    tips: [
      "야외 테이블 많은 집들 위주로 골라보면 분위기 좋음.",
      "밤 늦게까지 사람 많으니 귀중품만 조심하면 괜찮은 편."
    ],
    tags: ["바거리", "캐주얼", "로컬 분위기"]
  },
  {
    id: "found158",
    type: "cafe",
    emoji: "🍾",
    koreanName: "Found 158(바/클럽 몰)",
    chineseName: "巨鹿路 158号 (FOUND 158)",
    areaKorean: "지하 바/클럽 존",
    areaChinese: "静安区 巨鹿路158号",
    info: "원형으로 내려가는 구조 안에 바·클럽·레스토랑이 모여 있는 복합 공간.",
    tips: [
      "밤 늦게까지 노는 날 잡고 가기 좋은 곳.",
      "입장료/미니멈 있는 곳도 있으니 들어가기 전에 한번 확인!"
    ],
    tags: ["바", "클럽", "야간"]
  },
  {
    id: "dessert_nudake",
    type: "dessert",
    emoji: "🍫",
    koreanName: "누데이크 상하이 (Nudake)",
    chineseName: "NUDAKE 上海",
    areaKorean: "중심가 일대 팝업/매장",
    areaChinese: "静安区 / 黄浦区 일대",
    info: "감각적인 비주얼 디저트와 크루아상으로 유명한 브랜드. 인스타 감성 사진 찍기 좋은 곳.",
    tips: [
      "직접 방문이 힘들면, 美团外卖(메이투안 와이마이) 앱에서 「NUDAKE」로 검색해 배달 주문 가능할 수 있어요.",
      "사진용 디저트 위주라 가격대는 조금 있는 편."
    ],
    tags: ["디저트", "사진맛집", "배달 가능"]
  },
  {
    id: "dessert_apoli",
    type: "dessert",
    emoji: "🍰",
    koreanName: "아폴리 이타베이커리 (Apoli Itabakery)",
    chineseName: "APOLI ITA BAKERY",
    areaKorean: "창닝구 싱궈루 일대",
    areaChinese: "长宁区 兴国路380号 附近",
    info: "티라미수, 타르트, 무스 케이크가 유명한 이탈리안 스타일 베이커리.",
    tips: [
      "美团外卖 앱에서 「APOLI」, 「APOLI ITA BAKERY」로 검색해 호텔로 배달 주문 시도해 볼 수 있어요.",
      "인기 메뉴는 오후에 품절될 수 있으니 가능한 일찍 주문."
    ],
    tags: ["티라미수", "타르트", "배달 추천"]
  },
  {
    id: "dessert_basdban",
    type: "dessert",
    emoji: "🥐",
    koreanName: "바스드반 (Basdban)",
    chineseName: "BASDBAN 上海",
    areaKorean: "징안구 위위안루 일대",
    areaChinese: "静安区 愚园路546号 附近",
    info: "버터 풍미 강한 크루아상으로 유명한 베이커리. 요즘 상하이에서 핫한 빵집 중 하나.",
    tips: [
      "브런치용으로 1~2개씩 주문해서 호텔에서 커피랑 같이 먹기 좋음.",
      "美团外卖에서 「BASDBAN」 검색 후 배달 가능 매장 확인."
    ],
    tags: ["크루아상", "빵집", "브런치", "배달 가능"]
  },
  {
    id: "dessert_charlotte",
    type: "dessert",
    emoji: "🧁",
    koreanName: "샬롯 틸버리 × 버터풀 & 크리머러스",
    chineseName: "Charlotte Tilbury × Butterful & Creamorous",
    areaKorean: "우장루 카페 거리",
    areaChinese: "静安区 吴江路 附近",
    info: "핑크톤 인테리어와 예쁜 케이크로 유명한 인스타 감성 카페.",
    tips: [
      "매장 방문이 힘들면 美团外卖에서 상호명을 검색해 케이크/디저트 배달 옵션 확인.",
      "사진 찍기 좋은 케이크 포장/플레이트가 많아서 숙소에서 파티 느낌 내기 좋음."
    ],
    tags: ["케이크", "인스타감성", "배달 추천"]
  }
];

const placeTypeLabel = {
  attraction: "관광 명소",
  food: "맛집 / 식당",
  cafe: "카페 / 바",
  dessert: "디저트 / 배달",
  hotel: "숙소"
};

const placeTypeColor = {
  attraction: "#38bdf8",
  food: "#f97316",
  cafe: "#a855f7",
  dessert: "#f9a8d4",
  hotel: "#facc15"
};

const placeTypeOrder = ["hotel", "attraction", "food", "cafe", "dessert"];

const MAP_IMAGE_URL = "shanghaimap.png";

let leafletMap = null;

function initLeafletMap() {
  const container = document.getElementById("leafletMap");
  if (!container) return;

  const img = new Image();
  img.crossOrigin = "";
  img.onload = function () {
    const w = img.naturalWidth || 1000;
    const h = img.naturalHeight || 667;
    const bounds = [
      [0, 0],
      [h, w]
    ];
    leafletMap = L.map("leafletMap", {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 2
    });
    L.imageOverlay(MAP_IMAGE_URL, bounds).addTo(leafletMap);
    leafletMap.fitBounds(bounds);
  };
  img.onerror = function () {
    const w = 1000;
    const h = 667;
    const bounds = [
      [0, 0],
      [h, w]
    ];
    leafletMap = L.map("leafletMap", { crs: L.CRS.Simple, minZoom: -2, maxZoom: 2 });
    L.imageOverlay(MAP_IMAGE_URL, bounds).addTo(leafletMap);
    leafletMap.fitBounds(bounds);
  };
  img.src = MAP_IMAGE_URL;
}

const placesScroll = document.getElementById("placesScroll");
const placeDetail = document.getElementById("placeDetail");

function renderPlacePills() {
  if (!placesScroll) return;
  placesScroll.innerHTML = "";
  const sorted = [...places].sort((a, b) => {
    const ta = placeTypeOrder.indexOf(a.type);
    const tb = placeTypeOrder.indexOf(b.type);
    if (ta !== tb) return ta - tb;
    return a.koreanName.localeCompare(b.koreanName, "ko");
  });

  sorted.forEach((place) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "place-pill";
    btn.dataset.placeId = place.id;
    btn.dataset.type = place.type;
    btn.setAttribute("aria-label", `${place.koreanName} 정보 보기`);
    btn.innerHTML = `
      <span class="place-dot ${place.type === "hotel" ? "attraction" : place.type}" aria-hidden="true"></span>
      <span>${place.emoji} ${place.koreanName}</span>
    `;
    btn.addEventListener("click", () => selectPlace(place.id));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectPlace(place.id);
      }
    });
    placesScroll.appendChild(btn);
  });
}

function selectPlace(id) {
  const place = places.find((p) => p.id === id);
  if (!place) return;

  document.querySelectorAll(".place-pill").forEach((el) => {
    el.classList.toggle("active", el.dataset.placeId === id);
    el.setAttribute("aria-pressed", el.dataset.placeId === id ? "true" : "false");
  });

  placeDetail.innerHTML = `
    <div class="place-type-chip" style="background: ${placeTypeColor[place.type]}33; border: 1px solid ${placeTypeColor[place.type]};">
      ${placeTypeLabel[place.type] || "장소"}
    </div>
    <div class="place-names">
      <div class="place-korean">${place.emoji} ${place.koreanName}</div>
      <div class="place-chinese-row">
        <span class="visually-hidden">지역 한글</span>
        <span style="font-size:11px;">지역(한글): ${place.areaKorean}</span>
      </div>
      <div class="place-chinese-row">
        <span>중국어(한자): <strong id="chineseText">${place.chineseName}</strong></span>
        <button type="button" class="copy-btn" id="copyBtn" aria-label="한자 이름 복사">복사</button>
      </div>
      <div class="place-chinese-row" style="font-size:11px;">
        <span>지명(한자): ${place.areaChinese}</span>
      </div>
    </div>
    <div class="place-extra">
      <div style="margin-top:4px;">− ${place.info}</div>
      ${place.tips ? place.tips.map((t) => `<div>· ${t}</div>`).join("") : ""}
      <div class="place-tags">
        ${place.tags ? place.tags.map((t) => `<span class="place-tag"># ${t}</span>`).join("") : ""}
      </div>
    </div>
    <p style="margin-top:4px;font-size:10px;color:var(--text-sub);">
      ※ 복사한 한자 이름은 고덕지도·바이두지도 검색창에 붙여넣으면 됩니다.
    </p>
  `;

  const copyBtn = document.getElementById("copyBtn");
  const chineseText = document.getElementById("chineseText");

  if (copyBtn && chineseText) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(chineseText.textContent.trim());
        copyBtn.classList.add("copied");
        copyBtn.textContent = "복사됨";
        setTimeout(() => {
          copyBtn.classList.remove("copied");
          copyBtn.textContent = "복사";
        }, 1500);
      } catch (e) {
        alert("복사가 안 되면, 텍스트를 길게 눌러 직접 선택해서 복사해 주세요.");
      }
    });
  }
}

const THEME_KEY = "shanghaiTheme";

function applyTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = next;
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.textContent = next === "dark" ? "☀ 라이트 모드" : "🌙 다크 모드";
    btn.setAttribute("aria-label", next === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환");
  }
}

function switchPage(pageId) {
  const hash = pageId === "page-map" ? "map" : "memo";
  window.location.hash = hash;

  document.querySelectorAll(".page").forEach((p) => {
    const isActive = p.id === pageId;
    p.classList.toggle("active", isActive);
    p.hidden = !isActive;
  });

  document.querySelectorAll(".nav-tab").forEach((a) => {
    const isMap = a.getAttribute("href") === "#map";
    a.classList.toggle("active", (isMap && pageId === "page-map") || (!isMap && pageId === "page-memo"));
  });

  if (pageId === "page-map" && leafletMap) {
    setTimeout(function () {
      leafletMap.invalidateSize();
    }, 100);
  }
}

const dayTabs = document.getElementById("dayTabs");
const planText = document.getElementById("planText");
const savePlanBtn = document.getElementById("savePlanBtn");
const insertTemplateBtn = document.getElementById("insertTemplateBtn");
const saveStatus = document.getElementById("saveStatus");
const dayInfo = document.getElementById("dayInfo");

const dayMetaText = {
  1: "D1 · 도착 · 저녁 와이탄/난징동루",
  2: "D2 · 시내 관광 (와이탄·루자쭈이·신톈디)",
  3: "D3 · 시내/바 거리 여유 일정",
  4: "D4 · 귀국 · 점심 후 공항 이동"
};

const dayTemplates = {
  1: `· 인천(ICN) 16:20 → 상하이 푸둥(PVG) 도착
· 공항 → 호텔(골든 튤립 번드 뉴 아시아) 이동
  - 택시 목적지: 「外滩 新亚酒店」 또는 「金郁金香外滩新亚酒店」
· 체크인 & 짐 정리
· 저녁: 와이탄(外滩) 야경 + 난징동루(南京东路) 산책
· 간단 야식 / 편의점 / 물·간식 사두기`,
  2: `· 아침: 호텔 근처에서 가볍게 식사
· 오전: 인민광장(人民广场) & 상하이 박물관(上海博物馆) 구경
· 점심: 난징동루 or 인민광장 근처 식당
· 오후: 루자쭈이(陆家嘴) 이동, 상하이 타워(上海塔) or 오리엔탈 펄(东方明珠) 전망대
· 저녁: 와이탄으로 다시 이동해 반대편에서 야경 감상
· 밤: 와이탄 루프탑 바 / 호텔 귀가`,
  3: `· 아침: 여유 있게 늦잠
· 오후: 티엔즈팡(田子坊) 골목 산책 + 카페
· 저녁: 신톈디(新天地)에서 식사
· 밤 1차: 신톈디 바 / 와이탄 바(外滩 酒吧)
· 밤 2차(체력 되면): 융캉루(永康路 酒吧街) or Found 158(巨鹿路158号)`,
  4: `· 아침: 체크아웃 준비, 짐 정리
· 호텔 근처에서 가볍게 브런치 or 카페
· 점심: 호텔 주변 or 공항 근처에서 간단하게
· 여유 있게 푸둥공항(PVG) 이동
· 상하이 14:35 출발 → 인천(ICN) 도착`
};

let currentDay = 1;
const STORAGE_KEY = "shanghaiTripPlans_v1";

function getApiBase() {
  return window.location.origin;
}

async function loadFromCloud() {
  try {
    const r = await fetch(getApiBase() + "/api/data");
    if (!r.ok) return null;
    const data = await r.json();
    return {
      plans: data.plans && typeof data.plans === "object" ? data.plans : {},
      extraMemos: Array.isArray(data.extraMemos) ? data.extraMemos : []
    };
  } catch (e) {
    return null;
  }
}

async function saveToCloud() {
  try {
    await fetch(getApiBase() + "/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plans: plansState, extraMemos })
    });
  } catch (e) {}
}

function loadPlans() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function savePlans(plans) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
  const now = new Date();
  const t = now.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
  if (saveStatus) saveStatus.textContent = "최근 저장: " + t;
  saveToCloud();
}

let plansState = loadPlans();

function updatePlanTextarea() {
  if (!planText) return;
  planText.value = plansState[currentDay] || "";
  if (dayInfo) dayInfo.textContent = dayMetaText[currentDay];
}

function switchDay(day) {
  if (day === currentDay) return;
  plansState[currentDay] = planText ? planText.value : "";
  savePlans(plansState);

  currentDay = day;
  document.querySelectorAll(".day-tab").forEach((tab) => {
    const isActive = Number(tab.dataset.day) === currentDay;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  updatePlanTextarea();
}

const EXTRA_KEY = "shanghaiExtraMemos_v1";
const extraMemosContainer = document.getElementById("extraMemos");
const addMemoBtn = document.getElementById("addMemoBtn");

function loadExtraMemos() {
  try {
    const raw = localStorage.getItem(EXTRA_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveExtraMemos(list) {
  localStorage.setItem(EXTRA_KEY, JSON.stringify(list));
  saveToCloud();
}

let extraMemos = loadExtraMemos();

function renderExtraMemos() {
  if (!extraMemosContainer) return;
  extraMemosContainer.innerHTML = "";

  if (!extraMemos.length) {
    const empty = document.createElement("p");
    empty.className = "extra-empty";
    empty.textContent = "아직 메모가 없어요. 아래 버튼을 눌러 메모/일정을 추가해 보세요.";
    extraMemosContainer.appendChild(empty);
    return;
  }

  const listEl = document.createElement("div");
  listEl.className = "extra-list";

  extraMemos.forEach((memo) => {
    const card = document.createElement("div");
    card.className = "extra-card";

    const header = document.createElement("div");
    header.className = "extra-header";

    const titleInput = document.createElement("input");
    titleInput.className = "extra-title";
    titleInput.placeholder = "예: 바만 도는 날, 마지막 날 예산 정리 등…";
    titleInput.value = memo.title || "";
    titleInput.setAttribute("aria-label", "메모 제목");
    titleInput.addEventListener("input", () => {
      memo.title = titleInput.value;
      saveExtraMemos(extraMemos);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "extra-delete-btn";
    deleteBtn.textContent = "삭제";
    deleteBtn.setAttribute("aria-label", "이 메모 삭제");
    deleteBtn.addEventListener("click", () => {
      extraMemos = extraMemos.filter((m) => m.id !== memo.id);
      saveExtraMemos(extraMemos);
      renderExtraMemos();
    });

    header.appendChild(titleInput);
    header.appendChild(deleteBtn);

    const textarea = document.createElement("textarea");
    textarea.className = "extra-text";
    textarea.placeholder = "이 메모 블록에 자유롭게 내용을 적어 두세요…";
    textarea.value = memo.text || "";
    textarea.setAttribute("aria-label", "메모 내용");
    textarea.addEventListener("input", () => {
      memo.text = textarea.value;
      saveExtraMemos(extraMemos);
    });

    const meta = document.createElement("div");
    meta.className = "extra-meta";
    const label = document.createElement("span");
    label.textContent = memo.label || "자유 메모";
    const created = document.createElement("span");

    if (memo.createdAt) {
      const d = new Date(memo.createdAt);
      created.textContent =
        "작성: " +
        d.toLocaleDateString("ko-KR", { month: "2-digit", day: "2-digit" }) +
        " " +
        d.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
    }
    meta.appendChild(label);
    meta.appendChild(created);

    card.appendChild(header);
    card.appendChild(textarea);
    card.appendChild(meta);
    listEl.appendChild(card);
  });

  extraMemosContainer.appendChild(listEl);
}

function addNewMemo() {
  const now = new Date();
  extraMemos.unshift({
    id: "memo_" + now.getTime(),
    title: "",
    text: "",
    label: "자유 메모",
    createdAt: now.toISOString()
  });
  saveExtraMemos(extraMemos);
  renderExtraMemos();
}

document.addEventListener("DOMContentLoaded", async () => {
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);

  const cloud = await loadFromCloud();
  if (cloud) {
    plansState = cloud.plans;
    extraMemos = cloud.extraMemos;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plansState));
    localStorage.setItem(EXTRA_KEY, JSON.stringify(extraMemos));
  }

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.body.dataset.theme === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  const navMap = document.getElementById("navMap");
  const navMemo = document.getElementById("navMemo");
  if (navMap) {
    navMap.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage("page-map");
    });
  }
  if (navMemo) {
    navMemo.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage("page-memo");
    });
  }

  function onHashChange() {
    const hash = window.location.hash.slice(1) || "map";
    const pageId = hash === "memo" ? "page-memo" : "page-map";
    document.querySelectorAll(".page").forEach((p) => {
      const isActive = p.id === pageId;
      p.classList.toggle("active", isActive);
      p.hidden = !isActive;
    });
    document.querySelectorAll(".nav-tab").forEach((a) => {
      const isMap = a.getAttribute("href") === "#map";
      a.classList.toggle("active", (hash === "memo" && !isMap) || (hash !== "memo" && isMap));
    });
    if (pageId === "page-map" && leafletMap) {
      setTimeout(function () {
        leafletMap.invalidateSize();
      }, 100);
    }
  }

  window.addEventListener("hashchange", onHashChange);
  onHashChange();

  renderPlacePills();
  initLeafletMap();

  const firstPlace = places.find((p) => p.id === "hotel_golden");
  if (firstPlace) selectPlace("hotel_golden");

  if (dayTabs) {
    dayTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".day-tab");
      if (!btn) return;
      switchDay(Number(btn.dataset.day));
    });
  }

  if (savePlanBtn) {
    savePlanBtn.addEventListener("click", () => {
      if (planText) plansState[currentDay] = planText.value;
      savePlans(plansState);
    });
  }

  let autoSaveTimeout;
  if (planText) {
    planText.addEventListener("input", () => {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = setTimeout(() => {
        plansState[currentDay] = planText.value;
        savePlans(plansState);
      }, 600);
    });
  }

  if (insertTemplateBtn && planText) {
    insertTemplateBtn.addEventListener("click", () => {
      if (!planText.value.trim()) {
        planText.value = dayTemplates[currentDay] || "";
      } else {
        const add = "\n\n" + (dayTemplates[currentDay] || "");
        if (!planText.value.includes(dayTemplates[currentDay])) planText.value += add;
      }
      plansState[currentDay] = planText.value;
      savePlans(plansState);
    });
  }

  if (addMemoBtn) addMemoBtn.addEventListener("click", addNewMemo);

  updatePlanTextarea();
  renderExtraMemos();

  if (Object.keys(plansState).length === 0 && dayTemplates[1]) {
    plansState[1] = dayTemplates[1];
    savePlans(plansState);
    updatePlanTextarea();
  } else if (saveStatus) {
    const now = new Date();
    saveStatus.textContent = "최근 저장: " + now.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
  }
});
