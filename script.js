/* ========== 명소 데이터 (확장 버전) ========== */
const hotelLocation = { lat: 31.245, lng: 121.485 }; // 골든 튤립 번드 뉴 아시아 대략 좌표

const places = [
  {
    id: "hotel_golden",
    type: "hotel",
    emoji: "🏠",
    koreanName: "골든 튤립 번드 뉴 아시아",
    chineseName: "金郁金香外滩新亚酒店",
    areaKorean: "와이탄 북쪽",
    info: "1934년에 지어진 유서 깊은 호텔로, 상해 여행의 중심지입니다.",
    tips: ["지하철 10/12호선 텐통루역 6번 출구 바로 앞", "와이탄까지 도보 10-15분"],
    tags: ["베이스캠프", "클래식"],
    lat: 31.2450, lng: 121.4850
  },
  {
    id: "bund",
    type: "attraction",
    emoji: "🌉",
    koreanName: "와이탄",
    chineseName: "外滩",
    areaKorean: "황푸 강변",
    info: "상하이의 상징. 유럽풍 건축물과 푸동의 스카이라인을 동시에 즐기는 곳.",
    tips: ["조명 시간: 19:00~22:00", "페리를 타고 푸동으로 건너가보세요."],
    tags: ["야경", "필수"],
    lat: 31.2415, lng: 121.4910,
    nearby: ["페리 선착장", "황푸 공원"]
  },
  {
    id: "yuyuan",
    type: "attraction",
    emoji: "🏮",
    koreanName: "예원",
    chineseName: "豫园",
    areaKorean: "전통 정원",
    info: "명나라 시절의 사대부 정원으로 중국 전통 가옥의 정수를 보여줍니다.",
    tips: ["남상만두 샤오롱바오가 유명합니다.", "밤의 예원 상성 야경이 일품입니다."],
    tags: ["전통", "포토존"],
    lat: 31.2272, lng: 121.4921,
    nearby: ["예원 상성", "성황묘"]
  },
  {
    id: "nanjing_east",
    type: "attraction",
    emoji: "🛍️",
    koreanName: "난징동루",
    chineseName: "南京东路",
    areaKorean: "쇼핑 스트리트",
    info: "상하이의 명동이라 불리는 거대한 쇼핑 가도입니다.",
    tips: ["제일식품상점에서 간식을 사보세요.", "관광 미니열차를 타면 편합니다."],
    tags: ["쇼핑", "활기찬"],
    lat: 31.2384, lng: 121.4815,
    nearby: ["M&M 세계", "레고 스토어"]
  },
  {
    id: "xintiandi",
    type: "attraction",
    emoji: "🏛️",
    koreanName: "신천지",
    chineseName: "新天地",
    areaKorean: "프랑스 조계지",
    info: "전통 가옥인 석고문을 개조한 세련된 쇼핑 & 다이닝 공간입니다.",
    tips: ["대한민국 임시정부 청사가 인접해 있습니다.", "브런치 장소로 강력 추천."],
    tags: ["세련된", "임시정부"],
    lat: 31.2223, lng: 121.4755,
    nearby: ["임시정부 청사", "신천지 스타일 몰"]
  },
  {
    id: "jingan",
    type: "attraction",
    emoji: "⛩️",
    koreanName: "정안사",
    chineseName: "静安寺",
    areaKorean: "도심 사찰",
    info: "현대적인 빌딩 숲 사이의 화려한 황금 빛 사찰입니다.",
    tips: ["입장료는 약 50위안입니다.", "주변 Kerry Centre 쇼핑몰이 훌륭합니다."],
    tags: ["사찰", "랜드마크"],
    lat: 31.2246, lng: 121.4461,
    nearby: ["Kerry Centre", "Reel Mall"]
  },
  {
    id: "shanghai_tower",
    type: "attraction",
    emoji: "🗼",
    koreanName: "상하이 타워",
    chineseName: "上海中心大厦",
    areaKorean: "푸동 금융지구",
    info: "중국 최대, 세계 2위 높이의 마천루입니다.",
    tips: ["118층 전망대에서 상하이 전경을 보세요.", "날씨가 맑은 날 방문 필수."],
    tags: ["전망대", "초고층"],
    lat: 31.2335, lng: 121.5056,
    nearby: ["동방명주", "진마오 타워"]
  },
  {
    id: "tianzifang",
    type: "attraction",
    emoji: "🎨",
    koreanName: "티엔즈팡",
    chineseName: "田子坊",
    areaKorean: "예술인 거리",
    info: "미로 같은 골목길 사이로 작은 카페와 공방들이 숨어있는 곳.",
    tips: ["길을 잃기 쉬우니 지도를 잘 보세요.", "아기자기한 기념품 사기 좋습니다."],
    tags: ["골목", "예술"],
    lat: 31.2091, lng: 121.4688,
    nearby: ["다푸차오역 쇼핑몰"]
  }
];

const placeTypeLabel = {
  attraction: "관광",
  food: "식당",
  cafe: "카페",
  dessert: "디저트",
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

/* ========== 방향 및 거리 계산 로직 ========== */
function getDirection(targetLat, targetLng) {
  const latDiff = targetLat - hotelLocation.lat;
  const lngDiff = targetLng - hotelLocation.lng;

  let vertical = latDiff > 0 ? "북" : "남";
  let horizontal = lngDiff > 0 ? "동" : "서";

  // 차이가 크지 않으면 한 방향만 표시
  if (Math.abs(latDiff) > Math.abs(lngDiff) * 2) return vertical;
  if (Math.abs(lngDiff) > Math.abs(latDiff) * 2) return horizontal;

  return vertical + horizontal;
}

function getDistanceKM(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in KM
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
}

const MAP_IMAGE_URL = "shanghaimap.png";
let leafletMap = null;

/* ========== 데이터 상태 관리 (Local Storage & API) ========== */
let plansState = {};
let bulletinBoard = [];
let checklist = [];
let expenses = [];
let userPlaces = []; // 사용자가 추가한 장소
let currentDay = 1;

async function fetchData() {
  try {
    const r = await fetch("/api/data");
    const data = await r.json();
    plansState = data.plans || {};
    bulletinBoard = data.bulletinBoard || [];
    checklist = data.checklist || [];
    expenses = data.expenses || [];
    userPlaces = data.userPlaces || [];

    renderBoard();
    renderChecklist();
    renderExpenses();
    updatePlanUI();
    renderPlacePills();
  } catch (e) {
    console.error("Data fetch error", e);
    // 폴백: 로컬 스토리지 사용
    plansState = JSON.parse(localStorage.getItem("plansState") || "{}");
    bulletinBoard = JSON.parse(localStorage.getItem("bulletinBoard") || "[]");
    checklist = JSON.parse(localStorage.getItem("checklist") || "[]");
    expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    userPlaces = JSON.parse(localStorage.getItem("userPlaces") || "[]");
    renderBoard();
    renderChecklist();
    renderExpenses();
    updatePlanUI();
    renderPlacePills();
  }
}

async function saveData() {
  const payload = { plans: plansState, bulletinBoard, checklist, expenses, userPlaces };
  // 로컬 스토리지 저장
  localStorage.setItem("plansState", JSON.stringify(plansState));
  localStorage.setItem("bulletinBoard", JSON.stringify(bulletinBoard));
  localStorage.setItem("checklist", JSON.stringify(checklist));
  localStorage.setItem("expenses", JSON.stringify(expenses));
  localStorage.setItem("userPlaces", JSON.stringify(userPlaces));

  try {
    await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (e) {
    console.error("Cloud save error", e);
  }
}

/* ========== 지도 기능 ========== */
function initLeafletMap() {
  const container = document.getElementById("leafletMap");
  if (!container) return;

  const img = new Image();
  img.src = MAP_IMAGE_URL;
  img.onload = () => {
    const w = img.naturalWidth || 1000;
    const h = img.naturalHeight || 667;
    const bounds = [[0, 0], [h, w]];

    if (leafletMap) leafletMap.remove();
    leafletMap = L.map("leafletMap", {
      crs: L.CRS.Simple,
      minZoom: -2,
      maxZoom: 2,
      maxBounds: bounds,
      zoomSnap: 0.1
    });

    L.imageOverlay(MAP_IMAGE_URL, bounds).addTo(leafletMap);
    leafletMap.fitBounds(bounds);
  };
}

/* ========== 장소 관리 ========== */
function renderPlacePills() {
  const container = document.getElementById("placesScroll");
  if (!container) return;
  container.innerHTML = "";

  const allPlaces = [...places, ...userPlaces];
  const sorted = allPlaces.sort((a, b) => {
    const ta = placeTypeOrder.indexOf(a.type);
    const tb = placeTypeOrder.indexOf(b.type);
    return ta - tb;
  });

  sorted.forEach(place => {
    const btn = document.createElement("button");
    btn.className = "place-pill";
    btn.dataset.id = place.id;
    btn.innerHTML = `${place.emoji || '📍'}<span>${place.koreanName}</span>`;
    btn.onclick = () => selectPlace(place.id);
    container.appendChild(btn);
  });
}

function selectPlace(id) {
  const allPlaces = [...places, ...userPlaces];
  const place = allPlaces.find(p => p.id === id);
  if (!place) return;

  document.querySelectorAll(".place-pill").forEach(el => {
    el.classList.toggle("active", el.dataset.id === id);
  });

  const proximity = place.id === "hotel_golden" ? "기준점 (숙소)" :
    `${getDirection(place.lat, place.lng)}쪽, 약 ${getDistanceKM(hotelLocation.lat, hotelLocation.lng, place.lat, place.lng)}km`;

  const detailBody = document.getElementById("placeDetail");
  detailBody.innerHTML = `
    <div class="place-type-badge" style="background: var(--accent); color: white;">
      ${placeTypeLabel[place.type] || "커스텀"}
    </div>
    <div class="place-name-korean">${place.emoji || '📍'} ${place.koreanName}</div>
    <div class="place-name-chinese">${place.chineseName} <button class="btn-copy" onclick="copyText('${place.chineseName}')">📋</button></div>
    
    <div class="place-proximity">
        <span class="prox-label">숙소 기준 위치</span>
        <span class="prox-value">${proximity}</span>
    </div>

    <div class="place-info-text">${place.info}</div>
    
    <div class="place-section-title">💡 여행 팁</div>
    <div class="place-tips">
      ${place.tips ? place.tips.map(t => `<div class="tip-item">· ${t}</div>`).join("") : "등록된 팁이 없습니다."}
    </div>

    ${place.nearby ? `
    <div class="place-section-title"> 주변 가볼만한 곳</div>
    <div class="nearby-list">
        ${place.nearby.map(n => `<span class="nearby-tag">${n}</span>`).join("")}
    </div>
    ` : ""}
  `;
}

window.copyText = async (text) => {
  await navigator.clipboard.writeText(text);
  alert("복사되었습니다!");
}

function addCustomPlace() {
  const name = document.getElementById("addPlaceName").value;
  const type = document.getElementById("addPlaceType").value;
  const info = document.getElementById("addPlaceInfo").value;
  if (!name) return alert("장소 이름을 입력해주세요.");

  const newPlace = {
    id: "user_" + Date.now(),
    type: type,
    emoji: "⭐",
    koreanName: name,
    chineseName: "사용자 추가 장소",
    info: info,
    tips: ["직접 추가한 장소입니다."],
    lat: hotelLocation.lat + (Math.random() - 0.5) * 0.05, // 위치 정보가 없으므로 근처 랜덤 배정 (실제론 검색 연동 필요)
    lng: hotelLocation.lng + (Math.random() - 0.5) * 0.05
  };

  userPlaces.push(newPlace);
  saveData();
  renderPlacePills();

  // 필드 초기화
  document.getElementById("addPlaceName").value = "";
  document.getElementById("addPlaceInfo").value = "";
}

/* ========== 일정 관리 ========== */
function updatePlanUI() {
  const planText = document.getElementById("planText");
  const dayInfo = document.getElementById("dayInfo");
  const meta = {
    1: "D1 · 도착 및 와이탄 야경",
    2: "D2 · 시내 탐방 및 쇼핑",
    3: "D3 · 테마파크 또는 근교",
    4: "D4 · 마지막 식사 후 귀국"
  };
  if (planText) planText.value = plansState[currentDay] || "";
  if (dayInfo) dayInfo.textContent = meta[currentDay];
}

function switchDay(day) {
  plansState[currentDay] = document.getElementById("planText").value;
  currentDay = day;
  document.querySelectorAll(".day-tab").forEach(t => {
    t.classList.toggle("active", Number(t.dataset.day) === day);
  });
  updatePlanUI();
  saveData();
}

/* ========== 체크리스트 관리 ========== */
function renderChecklist() {
  const container = document.getElementById("checklistContainer");
  if (!container) return;
  container.innerHTML = "";
  checklist.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = `checklist-item ${item.completed ? 'completed' : ''}`;
    div.innerHTML = `
            <div style="display:flex; align-items:center; gap:12px;">
                <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleChecklist(${index})">
                <span>${item.text}</span>
            </div>
            <button class="btn-delete" onclick="removeChecklist(${index})">✕</button>
        `;
    container.appendChild(div);
  });
}

function addChecklistItem() {
  const input = document.getElementById("checklistInput");
  if (!input.value.trim()) return;
  checklist.push({ text: input.value, completed: false });
  input.value = "";
  renderChecklist();
  saveData();
}

window.toggleChecklist = (index) => {
  checklist[index].completed = !checklist[index].completed;
  renderChecklist();
  saveData();
}

window.removeChecklist = (index) => {
  checklist.splice(index, 1);
  renderChecklist();
  saveData();
}

/* ========== 가계부 관리 ========== */
function renderExpenses() {
  const container = document.getElementById("expensesContainer");
  const totalEl = document.getElementById("totalExpenses");
  if (!container) return;
  container.innerHTML = "";
  let total = 0;
  expenses.forEach((item, index) => {
    total += Number(item.amount);
    const div = document.createElement("div");
    div.className = "expense-item";
    div.innerHTML = `
            <div>
                <div style="font-weight:600;">${item.desc}</div>
                <div style="font-size:11px; color:var(--text-secondary);">¥ ${item.amount}</div>
            </div>
            <button class="btn-delete" onclick="removeExpense(${index})">✕</button>
        `;
    container.appendChild(div);
  });
  totalEl.textContent = `¥ ${total.toLocaleString()}`;
}

function addExpense() {
  const desc = document.getElementById("expenseDesc");
  const amount = document.getElementById("expenseAmount");
  if (!desc.value || !amount.value) return;
  expenses.push({ desc: desc.value, amount: amount.value });
  desc.value = "";
  amount.value = "";
  renderExpenses();
  saveData();
}

window.removeExpense = (index) => {
  expenses.splice(index, 1);
  renderExpenses();
  saveData();
}

/* ========== 게시판 관리 ========== */
function renderBoard() {
  const container = document.getElementById("boardPostsContainer");
  if (!container) return;
  container.innerHTML = "";
  bulletinBoard.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "board-post-card section fade-in";
    div.style.padding = "20px";
    div.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
        <div style="font-weight:700;">${post.title}</div>
        <div style="font-size:11px; color:var(--accent); font-weight:600;">${post.author}</div>
      </div>
      <div style="font-size:14px; line-height:1.6; color:var(--text-primary); margin-bottom:12px; white-space:pre-wrap;">${post.content}</div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:11px; color:var(--text-secondary);">${post.date}</span>
        <button class="btn-delete" style="color:#ef4444; font-size:11px; border:none; background:none; cursor:pointer;" onclick="deleteBoardPost(${index})">삭제</button>
      </div>
    `;
    container.appendChild(div);
  });
}

window.deleteBoardPost = (index) => {
  bulletinBoard.splice(index, 1);
  saveData();
  renderBoard();
};

/* ========== 가이드 및 기타 렌더링 ========== */
let activeGuide = 'meituan';
function renderGuide() {
  const container = document.getElementById("guideContent");
  if (!container) return;
  if (activeGuide === 'meituan') {
    container.innerHTML = `
            <div class="guide-item" style="margin-bottom:20px;">
                <h4 style="color:var(--accent); margin-bottom:8px;">🥡 메이투안 배달 팁</h4>
                <p style="font-size:14px; color:var(--text-secondary);">현지 번호가 없어도 위챗 연동으로 주문 가능합니다. 호텔 로비 주소를 미리 확인하세요.</p>
            </div>
            <div class="tip-card" style="background:var(--glass-bg); padding:16px; border-radius:12px; font-size:13px; border:1px solid var(--glass-border);">
                💡 <b>주소 입력:</b> 호텔 데스크의 명함을 찍어 파파고 이미지 번역기로 번역 후 복사해넣으세요.
            </div>
        `;
  } else {
    container.innerHTML = `
            <div class="guide-item" style="margin-bottom:20px;">
                <h4 style="color:var(--accent); margin-bottom:8px;">📊 디안핑 스마트 활용</h4>
                <p style="font-size:14px; color:var(--text-secondary);">별점 4.5 이상인 곳은 실패 확률이 적습니다. '미안엔부(买单)' 기능을 통해 할인을 받으세요.</p>
            </div>
        `;
  }
}

/* ========== 초기화 ========== */
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  renderPlacePills();
  initLeafletMap();

  // 페이지 네비게이션
  const switchPage = (id) => {
    document.querySelectorAll(".page").forEach(p => p.hidden = p.id !== "page-" + id);
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.toggle("active", t.id === "nav" + id.charAt(0).toUpperCase() + id.slice(1)));
    if (id === "map" && leafletMap) setTimeout(() => leafletMap.invalidateSize(), 100);
    if (id === "guide") renderGuide();
  };

  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.onclick = (e) => {
      e.preventDefault();
      const id = tab.id.replace("nav", "").toLowerCase();
      switchPage(id);
    };
  });

  // 가이드 탭
  document.querySelectorAll(".guide-sub-tab").forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll(".guide-sub-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeGuide = tab.dataset.guide;
      renderGuide();
    };
  });

  // 이벤트 리스너 등록
  document.getElementById("dayTabs").onclick = (e) => {
    if (e.target.classList.contains("day-tab")) switchDay(Number(e.target.dataset.day));
  };

  document.getElementById("addChecklistItemBtn").onclick = addChecklistItem;
  document.getElementById("addExpenseBtn").onclick = addExpense;
  document.getElementById("addPlaceBtn").onclick = addCustomPlace;

  document.getElementById("addBoardPostBtn").onclick = () => {
    const author = document.getElementById("boardAuthor").value;
    const title = document.getElementById("boardTitle").value;
    const content = document.getElementById("boardContent").value;
    if (!author || !title || !content) return alert("빈칸을 채워주세요.");
    bulletinBoard.unshift({ author, title, content, date: new Date().toLocaleDateString() });
    document.getElementById("boardTitle").value = "";
    document.getElementById("boardContent").value = "";
    renderBoard();
    saveData();
  };

  document.getElementById("savePlanBtn").onclick = () => {
    plansState[currentDay] = document.getElementById("planText").value;
    saveData();
    alert("저장되었습니다.");
  };

  document.getElementById("themeToggle").onclick = () => {
    const isDark = document.body.dataset.theme === "dark";
    document.body.dataset.theme = isDark ? "light" : "dark";
    document.getElementById("themeToggle").textContent = isDark ? "🌙" : "☀️";
  };
});
