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
  },
  /* --- 양꼬치(Lamb Skewers) --- */
  {
    id: "fengmao",
    type: "food",
    emoji: "🍢",
    koreanName: "펑마오카오촨(풍무양꼬치)",
    chineseName: "丰茂烤串",
    areaKorean: "난징동루 지점 등 다수",
    areaChinese: "南京东路",
    info: "자동으로 구워지는 기계가 있어 편리하고 위생적인 인기 양꼬치 체인점입니다.",
    tips: ["양어깨살(羊肉串)과 냉면 조합을 추천합니다.", "대기 시 디안핑으로 미리 번호표를 뽑을 수 있습니다."],
    tags: ["양꼬치", "현지인맛집", "체인점"]
  },
  {
    id: "ager",
    type: "food",
    emoji: "🍖",
    koreanName: "아거얼 카오추안",
    chineseName: "阿哥尔羊肉串",
    areaKorean: "용캉루/프랑스 조계지",
    areaChinese: "徐汇区",
    info: "길거리 분위기에서 즐기는 한입 사이즈의 양꼬치가 특징인 로컬 맛집입니다.",
    tips: ["매콤한 시즈닝이 일품입니다.", "신천지나 우캉루 산책 후 들르기 좋습니다."],
    tags: ["로컬", "양꼬치", "가성비"]
  },
  /* --- 디저트(Desserts) --- */
  {
    id: "lillian",
    type: "dessert",
    emoji: "🥧",
    koreanName: "릴리안 베이커리",
    chineseName: "莉莲蛋挞",
    areaKorean: "난징동루/인민광장 등",
    areaChinese: "黄浦区",
    info: "상하이에서 가장 유명한 에그타르트 맛집입니다. 홍콩식과는 다른 포르투갈식의 바삭함이 특징입니다.",
    tips: ["치즈 에그타르트도 꼭 드셔보세요.", "지하철역 상가나 백화점 지하에서 쉽게 찾을 수 있습니다."],
    tags: ["에그타르트", "필수디저트", "가성비"]
  },
  {
    id: "holiland",
    type: "dessert",
    emoji: "🍰",
    koreanName: "홀리랜드",
    chineseName: "好利来",
    areaKorean: "푸동/신천지 등",
    areaChinese: "浦东/黄浦",
    info: "중국 전역에서 인기 있는 세련된 베이커리 체인입니다. 비주얼이 예쁜 케이크와 쿠키가 많습니다.",
    tips: ["반숙 치즈 타르트가 시그니처 메뉴입니다.", "선물용 박스 포장이 잘 되어 있어 여행 선물로도 좋습니다."],
    tags: ["베이커리", "선물용", "디저트"]
  },
  {
    id: "manner",
    type: "cafe",
    emoji: "☕",
    koreanName: "매너 커피",
    chineseName: "Manner Coffee",
    areaKorean: "상하이 전역",
    areaChinese: "全市",
    info: "상하이에서 시작된 스페셜티 커피 체인으로, 좁은 공간에서 훌륭한 커피를 제공하는 것으로 유명해졌습니다.",
    tips: ["오트라떼(燕麦拿铁)가 고소하고 맛있기로 유명합니다.", "개인 컵 지참 시 할인 혜택이 있습니다."],
    tags: ["커피", "실속형", "로컬커피"]
  },
  {
    id: "luneurs",
    type: "dessert",
    emoji: "🍦",
    koreanName: "루너스(Luneurs)",
    chineseName: "Luneurs",
    areaKorean: "프랑스 조계지/우캉루",
    areaChinese: "徐汇区",
    info: "아이스크림과 빵이 조화를 이루는 세련된 디저트 샵입니다. 상하이의 '힙한' 감성을 느낄 수 있습니다.",
    tips: ["솔티드 카라멜 아이스크림이 가장 인기 있습니다.", "우캉루 점은 긴 줄을 서야 할 수도 있습니다."],
    tags: ["아이스크림", "인생샷", "세련된"]
  },
  /* --- 중국 음식점(Chinese Restaurants) --- */
  {
    id: "jiajia",
    type: "food",
    emoji: "🥟",
    koreanName: "지아지아 탕바오",
    chineseName: "佳家汤包",
    areaKorean: "인민광장 근처",
    areaChinese: "黄浦区 黄河路",
    info: "주문 즉시 쪄내는 신선한 샤오롱바오 전문점입니다. 게살 샤오롱바오가 특히 유명합니다.",
    tips: ["인기 메뉴는 일찍 품절되니 점심시간 이전에 방문하는 것을 추천합니다.", "맞은편 '양스덤플링'과 묶어서 가기 좋습니다."],
    tags: ["샤오롱바오", "로컬맛집", "가성비"]
  },
  {
    id: "old_jesse",
    type: "food",
    emoji: "🥗",
    koreanName: "노길사 (라오지스)",
    chineseName: "老吉士",
    areaKorean: "프랑스 조계지 (본점)",
    areaChinese: "徐汇区 天平路",
    info: "정통 상하이 요리(상해채)를 맛볼 수 있는 곳으로, 많은 연예인들도 찾는 유명 음식점입니다.",
    tips: ["홍샤오로우(동파육 스타일)와 생선 머리 찜이 대표 메뉴입니다.", "좌석이 적어 사전 예약이 필수입니다."],
    tags: ["상하이요리", "고급", "전통"]
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
  2: "D2 · 시내 탐방",
  3: "D3 · 시외 탐방",
  4: "D4 · 마지막 쇼핑 및 공항 이동"
};

const dayTemplates = {
  1: "· 공항 도착 후 호텔 이동\n· 체크인 후 와이탄 야경 감상\n· 난징동루에서 저녁 식사",
  2: "· 시내 탐방\n·",
  3: "· 시외 탐방",
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
        <div style="display: flex; flex-direction: column; align-items: flex-end;">
          <span class="board-post-date">${post.date}</span>
          <span style="font-size: 11px; color: var(--accent); font-weight: 600;">${post.author || "익명"}</span>
        </div>
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

/* ========== 안내 가이드 렌더링 ========== */
function renderMeituanGuide() {
  const container = document.getElementById("meituanContent");
  if (!container) return;
  container.innerHTML = `
    <div class="guide-step">
      <h4>📱 가입 및 로그인</h4>
      <div>· 한국 번호로 가입 가능하지만, 출국 전 위챗(WeChat) 연동을 강력 추천합니다.</div>
      <div>· 'Meituan' 또는 'Waimai' 앱을 사용하세요.</div>
    </div>
    <div class="guide-step">
      <h4>📍 주소 설정</h4>
      <div>· 호텔 프런트에 있는 주소 카드를 사진 찍어 파파고 이미지 번역을 활용해 입력하세요.</div>
      <div>· 문 앞(门口)에 놔달라는 요청은 <strong>'放门口'</strong>라고 적으시면 됩니다.</div>
    </div>
    <div class="guide-step">
      <h4>💳 결제 방법</h4>
      <div>· 알리페이(Alipay) 또는 위챗페이가 연동되어 있으면 매우 편리합니다.</div>
      <div class="guide-tip-box">
        💡 <strong>팁:</strong> 해외 카드 등록 후 결제할 때 가끔 인증이 필요할 수 있으니 미리 소액 결제를 테스트해보세요.
      </div>
    </div>
  `;
}

function renderDianpingGuide() {
  const container = document.getElementById("dianpingContent");
  if (!container) return;
  container.innerHTML = `
    <div class="guide-step">
      <h4>🔍 맛집 찾기</h4>
      <div>· 평점 4.5점 이상, 리뷰 수 1000개 이상의 집은 실패 확률이 낮습니다.</div>
      <div>· <strong>'附近'(부근)</strong> 기능을 눌러 내 주변 인기 식당을 확인하세요.</div>
    </div>
    <div class="guide-step">
      <h4>🎫 할인 쿠폰 (优惠)</h4>
      <div>· <strong>'买单'</strong>(결제) 버튼을 누르면 현장 할인이 되는 경우가 많습니다.</div>
      <div>· 대표 세트 메뉴는 <strong>'套餐'</strong> 섹션에서 훨씬 저렴하게 구입 가능합니다.</div>
    </div>
    <div class="guide-step">
      <h4>📸 추천 메뉴 확인</h4>
      <div>· <strong>'推荐菜'</strong> 탭에서 사람들이 가장 많이 시키는 메뉴 사진을 직원에게 보여주며 주문하세요.</div>
    </div>
  `;
}

/* ========== 초기화 및 이벤트 ========== */
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  renderPlacePills();
  initLeafletMap();

  // 페이지 전환
  const switchPage = (id) => {
    document.querySelectorAll(".page").forEach(p => p.hidden = p.id !== "page-" + id);
    document.querySelectorAll(".nav-tab").forEach(t => {
      const tabId = "nav" + id.charAt(0).toUpperCase() + id.slice(1);
      t.classList.toggle("active", t.id === tabId);
    });
    if (id === "map" && leafletMap) setTimeout(() => leafletMap.invalidateSize(), 100);
    if (id === "meituan") renderMeituanGuide();
    if (id === "dianping") renderDianpingGuide();
  };

  document.getElementById("navMap").onclick = () => switchPage("map");
  document.getElementById("navMeituan").onclick = () => switchPage("meituan");
  document.getElementById("navDianping").onclick = () => switchPage("dianping");
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
    const author = document.getElementById("boardAuthor").value;
    const title = document.getElementById("boardTitle").value;
    const content = document.getElementById("boardContent").value;
    if (!author || !title || !content) return alert("이름, 제목, 내용을 모두 입력하세요.");

    // 이름 캐시 저장
    localStorage.setItem("shanghai_board_author", author);

    bulletinBoard.unshift({
      author,
      title,
      content,
      date: new Date().toLocaleDateString()
    });

    document.getElementById("boardTitle").value = "";
    document.getElementById("boardContent").value = "";
    saveData();
    renderBoard();
  };

  // 작성자 이름 초기화 (캐시 로드)
  const savedAuthor = localStorage.getItem("shanghai_board_author");
  if (savedAuthor) {
    document.getElementById("boardAuthor").value = savedAuthor;
  }

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
