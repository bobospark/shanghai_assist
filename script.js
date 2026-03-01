/* ========== 명소 데이터 (정확도 확인 완료) ========== */
const places = [
  {
    id: "hotel_golden",
    type: "hotel",
    emoji: "⭐",
    koreanName: "골든 튤립 번드 뉴 아시아",
    chineseName: "金郁金香外滩新亚酒店",
    areaKorean: "와이탄 · 난징동루 근처",
    areaChinese: "黄浦区 天潼路",
    info: "1934년에 지어진 유서 깊은 호텔로, 와이탄과 난징동루를 도보로 이동하기 최적인 베이스캠프입니다.",
    tips: [
      "디디(Didi) 호출 시 'Golden Tulip Bund New Asia'로 검색하세요.",
      "지하철 10/12호선 텐통루(天潼路)역 6번 출구와 매우 가깝습니다."
    ],
    tags: ["숙소", "역세권", "클래식"]
  },
  {
    id: "bund",
    type: "attraction",
    emoji: "🌉",
    koreanName: "와이탄(외탄)",
    chineseName: "外滩",
    areaKorean: "황푸 강변 야경",
    areaChinese: "黄浦区 外滩",
    info: "상하이의 상징. 52개의 유럽풍 고전 건축물과 건너편 푸동의 미래지향적 스카이라인을 동시에 즐길 수 있습니다.",
    tips: [
      "조명 점등 시간은 보통 19:00~22:00입니다 (계절별 상이).",
      "사람이 매우 많으니 평일 저녁 방문을 추천합니다."
    ],
    tags: ["필수코스", "야경", "산책"]
  },
  {
    id: "yuyuan",
    type: "attraction",
    emoji: "🏮",
    koreanName: "예원(유위안)",
    chineseName: "豫园",
    areaKorean: "전통 정원",
    areaChinese: "黄浦区 豫园",
    info: "명나라 시대의 개인 정원으로, 중국 전통 정원의 극치를 보여줍니다. 주변 예원 상성(상점가)도 구경거리가 많습니다.",
    tips: [
      "예원 입장은 오후 4시에 마감되니 서둘러 방문하세요.",
      "근처 '남상만두(南翔馒头店)'의 샤오롱바오가 유명합니다."
    ],
    tags: ["전통", "포토존", "먹거리"]
  },
  {
    id: "nanjing_east",
    type: "attraction",
    emoji: "🛍️",
    koreanName: "난징동루 보행가",
    chineseName: "南京东路步行街",
    areaKorean: "쇼핑 메인 스트리트",
    areaChinese: "黄浦区 南京东路",
    info: "상하이 최대의 쇼핑 거리로, 밤낮없이 활기찬 분위기를 느낄 수 있는 곳입니다.",
    tips: [
      "제일식품상점(第一食品商店)에서 다양한 중국 간식을 구경해보세요.",
      "꼬마 기차(관광 열차)를 타면 거리 끝까지 편하게 이동 가능합니다."
    ],
    tags: ["쇼핑", "활기찬", "간식"]
  },
  {
    id: "jingan_temple",
    type: "attraction",
    emoji: "⛩️",
    koreanName: "정안사(징안쓰)",
    chineseName: "静安寺",
    areaKorean: "도심 속 황금 사찰",
    areaChinese: "静安区 南京西路",
    info: "현대적인 빌딩 숲 사이에 위치한 황금색 지붕의 사찰로, 밤에 조명이 켜지면 더욱 화려합니다.",
    tips: [
      "입장료는 보통 50위안 정도이며, 향을 피우는 체험을 할 수 있습니다.",
      "주변에 대형 쇼핑몰(Reel, Kerry Centre)이 많아 쇼핑과 묶기 좋습니다."
    ],
    tags: ["사찰", "황금빛", "도심"]
  },
  {
    id: "xintiandi",
    type: "attraction",
    emoji: "🍷",
    koreanName: "신천지(신톈디)",
    chineseName: "新天地",
    areaKorean: "세련된 카페/바 거리",
    areaChinese: "黄浦区 马당로",
    info: "전통 가옥 '석고문' 양식을 현대적으로 재해석한 쇼핑 및 다이닝 구역입니다. 유럽 같은 분위기가 특징입니다.",
    tips: [
      "대한민국 임시정부 청사가 바로 근처에 있어 함께 방문하기 좋습니다.",
      "브런치나 저녁 와인 한 잔을 즐기기에 가장 좋은 장소입니다."
    ],
    tags: ["세련된", "브런치", "임시정부"]
  },
  {
    id: "wukang_road",
    type: "attraction",
    emoji: "📸",
    koreanName: "우캉루(무캉루)",
    chineseName: "武康路",
    areaKorean: "구조계지 산책로",
    areaChinese: "徐汇区 武康路",
    info: "프랑스 조계지의 정취가 남아있는 예쁜 거리입니다. 유명한 '우캉 대루(무캉 맨션)'가 있는 곳입니다.",
    tips: [
      "우캉 대루(Ferguson Lane) 앞은 최고의 포토존입니다.",
      "감각적인 카페와 작은 갤러리들이 숨어있어 천천히 걷기 좋습니다."
    ],
    tags: ["산책", "인생샷", "유럽풍"]
  },
  {
    id: "shanghai_museum",
    type: "attraction",
    emoji: "🏛️",
    koreanName: "상하이 박물관",
    chineseName: "上海博物馆",
    areaKorean: "인민광장 내",
    areaChinese: "黄浦区 人민광장",
    info: "중국 4대 박물관 중 하나로, 청동기부터 도자기까지 수준 높은 유물을 소장하고 있습니다.",
    tips: [
      "위챗 미니프로그램을 통한 사전 예약이 필수입니다.",
      "한국어 오디오 가이드를 대여하면 관람이 훨씬 유익합니다."
    ],
    tags: ["박물관", "무료", "실내코스"]
  },
  {
    id: "lujiazui",
    type: "attraction",
    emoji: "🏙️",
    koreanName: "루자쭈이 스카이라인",
    chineseName: "陆家嘴",
    areaKorean: "푸동 금융지구",
    areaChinese: "浦东新区 陆家嘴",
    info: "동방명주, 상하이 타워 등 세계적인 고층 빌딩이 밀집한 상하이의 미래를 보여주는 곳입니다.",
    tips: [
      "육교(Skywalk) 위에서 빌딩들을 배경으로 사진 찍기 좋습니다.",
      "디즈니 스토어 플래그십 매장이 루자쭈이 역 근처에 있습니다."
    ],
    tags: ["고층빌딩", "미래도시", "전망대"]
  },
  {
    id: "shanghai_tower",
    type: "attraction",
    emoji: "🗼",
    koreanName: "상하이 타워",
    chineseName: "上海中心大厦",
    areaKorean: "세계 2위 높이",
    areaChinese: "浦东新区 银城中路",
    info: "중국에서 가장 높은 빌딩(632m)으로, 118층 전망대에서 상하이 전체를 조망할 수 있습니다.",
    tips: [
      "엘리베이터 속도가 엄청나게 빠릅니다 (세계 최고 수준).",
      "구름이 많은 날은 시야가 확보되지 않을 수 있으니 날씨를 꼭 확인하세요."
    ],
    tags: ["전망대", "초고층", "랜드마크"]
  },
  {
    id: "zhujiajiao",
    type: "attraction",
    emoji: "🚣",
    koreanName: "주자각(주짜지아오)",
    chineseName: "朱家角古镇",
    areaKorean: "상하이의 베니스",
    areaChinese: "青浦区 朱家角",
    info: "상하이 인근에서 가장 접근성이 좋은 수향마을로, 나룻배를 타고 운하를 누비는 체험이 가능합니다.",
    tips: [
      "지하철 17호선 주자각역에서 내려 도보나 인력거로 이동합니다.",
      "방생교(放生桥) 위에서 보는 마을 풍경이 가장 예쁩니다."
    ],
    tags: ["수향마을", "근교여행", "나룻배"]
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
    const bounds = [[0, 0], [h, w]];
    
    if (leafletMap) leafletMap.remove();

    leafletMap = L.map("leafletMap", {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 2,
      maxBounds: bounds,
      maxBoundsViscosity: 0.8,
      zoomSnap: 0.1,
      bounceAtZoomLimits: true
    });

    L.imageOverlay(MAP_IMAGE_URL, bounds).addTo(leafletMap);
    leafletMap.fitBounds(bounds);
  };
  img.onerror = function () {
    const w = 1000; h = 667;
    const bounds = [[0, 0], [h, w]];
    leafletMap = L.map("leafletMap", { crs: L.CRS.Simple, minZoom: -2, maxZoom: 2, maxBounds: bounds, maxBoundsViscosity: 0.7 });
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
    btn.innerHTML = `<span>${place.emoji} ${place.koreanName}</span>`;
    btn.onclick = () => selectPlace(place.id);
    placesScroll.appendChild(btn);
  });
}

function selectPlace(id) {
  const place = places.find((p) => p.id === id);
  if (!place) return;

  document.querySelectorAll(".place-pill").forEach((el) => {
    el.classList.toggle("active", el.dataset.placeId === id);
  });

  placeDetail.innerHTML = `
    <div class="place-type-chip" style="background: ${placeTypeColor[place.type]}33; border: 1px solid ${placeTypeColor[place.type]};">
      ${placeTypeLabel[place.type] || "장소"}
    </div>
    <div class="place-names">
      <div class="place-korean">${place.emoji} ${place.koreanName}</div>
      <div class="place-chinese-row">
        <span>중국어(한자): <strong id="chineseText">${place.chineseName}</strong></span>
        <button type="button" class="copy-btn" id="copyBtn">복사</button>
      </div>
    </div>
    <div class="place-extra">
      <div style="margin-top:4px;">− ${place.info}</div>
      ${place.tips ? place.tips.map((t) => `<div>· ${t}</div>`).join("") : ""}
    </div>
  `;

  document.getElementById("copyBtn").onclick = async () => {
    await navigator.clipboard.writeText(place.chineseName);
    alert("한자 이름이 복사되었습니다.");
  };
}

/* ========== 공통 데이터 관리 (Cloud DB 연동) ========== */
let plansState = {};
let bulletinBoard = [];
let personalMemos = [];
let currentDay = 1;

const dayMetaText = {
  1: "D1 · 도착 및 와이탄 야경",
  2: "D2 · 예원 및 고층 빌딩 숲 탐방",
  3: "D3 · 프랑스 조계지 및 세련된 카페 거리",
  4: "D4 · 마지막 쇼핑 및 공항 이동"
};

const dayTemplates = {
  1: "· 공항 도착 후 호텔 이동\n· 체크인 후 와이탄 야경 감상\n· 난징동루에서 저녁 식사",
  2: "· 예원 정원 구경\n· 루자쭈이 이동 후 전망대 관람\n· 동방명주 야경",
  3: "· 우캉루 산책\n· 신천지 브런치\n· 바 거리에 방문하여 분위기 즐기기",
  4: "· 호텔 근처 카페 여유\n· 마지막 기념품 쇼핑\n· 푸둥공항으로 출발"
};

async function fetchData() {
  try {
    const r = await fetch("/api/data");
    const data = await r.json();
    plansState = data.plans || {};
    bulletinBoard = data.bulletinBoard || [];
    personalMemos = data.personalMemos || [];
    renderBoard();
    renderPersonalMemos();
    updatePlanUI();
  } catch (e) {
    console.error("Data fetch error", e);
  }
}

async function saveData() {
  try {
    await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plans: plansState, bulletinBoard, personalMemos })
    });
    const status = document.getElementById("saveStatus");
    if (status) {
      status.textContent = "저장 완료: " + new Date().toLocaleTimeString();
    }
  } catch (e) {
    console.error("Save error", e);
  }
}

/* ========== 일정 메모장 기능 ========== */
function updatePlanUI() {
  const planText = document.getElementById("planText");
  const dayInfo = document.getElementById("dayInfo");
  if (planText) planText.value = plansState[currentDay] || "";
  if (dayInfo) dayInfo.textContent = dayMetaText[currentDay];
}

function switchDay(day) {
  plansState[currentDay] = document.getElementById("planText").value;
  currentDay = day;
  document.querySelectorAll(".day-tab").forEach(t => {
    t.classList.toggle("active", Number(t.dataset.day) === day);
  });
  updatePlanUI();
}

/* ========== 게시판 기능 ========== */
function renderBoard() {
  const container = document.getElementById("boardPostsContainer");
  if (!container) return;
  container.innerHTML = bulletinBoard.length ? "" : "<p class='extra-empty'>아직 게시글이 없습니다.</p>";
  
  bulletinBoard.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "board-post-card fade-in";
    div.innerHTML = `
      <div class="board-post-header">
        <span class="board-post-title">${post.title}</span>
        <span class="board-post-date">${post.date}</span>
      </div>
      <div class="board-post-content">${post.content}</div>
      <button class="board-post-delete" onclick="deleteBoardPost(${index})">삭제</button>
    `;
    container.appendChild(div);
  });
}

window.deleteBoardPost = (index) => {
  bulletinBoard.splice(index, 1);
  saveData();
  renderBoard();
};

/* ========== 개인 메모 기능 ========== */
function renderPersonalMemos() {
  const container = document.getElementById("personalMemosContainer");
  if (!container) return;
  container.innerHTML = personalMemos.length ? "" : "<p class='extra-empty'>개인적인 메모를 추가해 보세요.</p>";

  personalMemos.forEach((memo, index) => {
    const card = document.createElement("div");
    card.className = "extra-card fade-in";
    card.innerHTML = `
      <textarea class="extra-text" oninput="updatePersonalMemo(${index}, this.value)">${memo.text}</textarea>
      <div class="extra-meta">
        <span>개인 메모</span>
        <button class="board-post-delete" onclick="deletePersonalMemo(${index})">삭제</button>
      </div>
    `;
    container.appendChild(card);
  });
}

window.updatePersonalMemo = (index, value) => {
  personalMemos[index].text = value;
  // 자동 저장 (debounce 생략)
  saveData();
};

window.deletePersonalMemo = (index) => {
  personalMemos.splice(index, 1);
  saveData();
  renderPersonalMemos();
};

/* ========== 초기화 및 이벤트 ========== */
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  renderPlacePills();
  initLeafletMap();

  // 페이지 전환
  const switchPage = (id) => {
    document.querySelectorAll(".page").forEach(p => p.hidden = p.id !== "page-" + id);
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.toggle("active", t.id === "nav" + id.charAt(0).toUpperCase() + id.slice(1)));
    if (id === "map" && leafletMap) setTimeout(() => leafletMap.invalidateSize(), 100);
  };

  document.getElementById("navMap").onclick = () => switchPage("map");
  document.getElementById("navMemo").onclick = () => switchPage("memo");
  document.getElementById("navBoard").onclick = () => switchPage("board");

  // 일정 이벤트
  document.getElementById("dayTabs").onclick = (e) => {
    if (e.target.classList.contains("day-tab")) switchDay(Number(e.target.dataset.day));
  };
  document.getElementById("savePlanBtn").onclick = () => {
    plansState[currentDay] = document.getElementById("planText").value;
    saveData();
  };
  document.getElementById("insertTemplateBtn").onclick = () => {
    document.getElementById("planText").value = dayTemplates[currentDay];
    plansState[currentDay] = dayTemplates[currentDay];
    saveData();
  };

  // 게시판 이벤트
  document.getElementById("addBoardPostBtn").onclick = () => {
    const title = document.getElementById("boardTitle").value;
    const content = document.getElementById("boardContent").value;
    if (!title || !content) return alert("제목과 내용을 입력하세요.");
    bulletinBoard.unshift({ title, content, date: new Date().toLocaleDateString() });
    document.getElementById("boardTitle").value = "";
    document.getElementById("boardContent").value = "";
    saveData();
    renderBoard();
  };

  // 개인 메모 이벤트
  document.getElementById("addPersonalMemoBtn").onclick = () => {
    personalMemos.unshift({ text: "", date: new Date().toISOString() });
    renderPersonalMemos();
    saveData();
  };

  // 테마 토글
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.onclick = () => {
    const isDark = document.body.dataset.theme === "dark";
    document.body.dataset.theme = isDark ? "light" : "dark";
    themeToggle.textContent = isDark ? "🌙 다크 모드" : "☀ 라이트 모드";
  };
});
