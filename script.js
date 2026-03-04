/* ========== 명소 데이터 ========== */
const places = [
  {
    id: "hotel_golden",
    type: "hotel",
    emoji: "⭐",
    koreanName: "골든 튤립 번드 뉴 아시아",
    chineseName: "金郁금香外滩新亚酒店",
    areaKorean: "와이탄 · 난징동루",
    info: "1934년에 지어진 유서 깊은 호텔로, 상해 여행의 중심지인 텐통루역 바로 앞에 위치해 있습니다.",
    tips: ["지하철 10/12호선 텐통루역 6번 출구 상단", "와이탄 도보 10분 거리"],
    tags: ["숙소", "역세권", "클래식"]
  },
  {
    id: "bund",
    type: "attraction",
    emoji: "🌉",
    koreanName: "와이탄",
    chineseName: "外滩",
    areaKorean: "황푸 강변",
    info: "상하이의 심장부. 고전적 건축물과 건너편 푸동의 미래적 스카이라인이 공존하는 곳입니다.",
    tips: ["야경 조명은 보통 19시~22시 사이입니다.", "유료 전망대보다 산책로 걷기를 추천합니다."],
    tags: ["필수", "야경", "산책"]
  },
  {
    id: "yuyuan",
    type: "attraction",
    emoji: "🏮",
    koreanName: "예원",
    chineseName: "豫园",
    areaKorean: "전통 정원",
    info: "중국 전통 정원의 미를 느낄 수 있는 곳입니다. 주변 상가 지역도 야경이 매우 화려합니다.",
    tips: ["정원 입장은 오후 4시 전까지입니다.", "밤에 조명이 켜진 후 방문하는 것을 추천합니다."],
    tags: ["전통", "포토존"]
  },
  {
    id: "nanjing_east",
    type: "attraction",
    emoji: "🛍️",
    koreanName: "난징동루",
    chineseName: "南京东路",
    areaKorean: "쇼핑 스트리트",
    info: "상하이 최대의 번화가로, 다양한 상점과 먹거리가 가득한 보행자 전용 도로입니다.",
    tips: ["엠앤엠즈 세계, 레고 스토어가 볼만합니다.", "아이러브상하이 지점은 인기가 많습니다."],
    tags: ["쇼핑", "활기찬"]
  },
  {
    id: "jingan_temple",
    type: "attraction",
    emoji: "⛩️",
    koreanName: "정안사",
    chineseName: "静安寺",
    areaKorean: "도심 속 사찰",
    info: "화려한 황금색 지붕이 돋보이는 사찰로, 현대적인 빌딩 숲 사이에서 독특한 분위기를 자아냅니다.",
    tips: ["밤에 조명이 켜지면 훨씬 화려합니다.", "주변 Kerry Centre 쇼핑몰과 묶어 방문하세요."],
    tags: ["사찰", "랜드마크"]
  },
  {
    id: "fengmao",
    type: "food",
    emoji: "🍢",
    koreanName: "풍무양꼬치",
    chineseName: "丰茂烤串",
    areaKorean: "난징동루 등 다수",
    info: "자동으로 구워주는 기계가 있는 깨끗한 양꼬치 전문점입니다. 현지인들에게도 인기입니다.",
    tips: ["양어깨살(羊肉串)이 시그니처입니다.", "냉면과 함께 먹으면 더 맛있습니다."],
    tags: ["양꼬치", "맛집", "체인점"]
  },
  {
    id: "lillian",
    type: "dessert",
    emoji: "🥧",
    koreanName: "릴리안 베이커리",
    chineseName: "莉莲蛋挞",
    areaKorean: "전역",
    info: "상하이에서 꼭 먹어봐야 할 에그타르트 맛집입니다. 바삭한 도우가 특징입니다.",
    tips: ["치즈 타르트와 기본 에그타르트 모두 추천합니다.", "지하철역 내부나 백화점 지하에서 쉽게 발견됩니다."],
    tags: ["에그타르트", "간식"]
  },
  {
    id: "manner",
    type: "cafe",
    emoji: "☕",
    koreanName: "매너 커피",
    chineseName: "Manner Coffee",
    areaKorean: "전역",
    info: "상하이 로컬 커피의 자존심. 좁은 공간에서 훌륭한 퀄리티의 커피를 제안합니다.",
    tips: ["오트라떼(燕麦拿铁)가 시그니처입니다.", "개인 컵 지참 시 할인이 됩니다."],
    tags: ["커피", "실속형"]
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

const MAP_IMAGE_URL = "shanghaimap.png";
let leafletMap = null;

/* ========== 데이터 상태 관리 (Local Storage & API) ========== */
let plansState = {};
let bulletinBoard = [];
let checklist = [];
let expenses = [];
let currentDay = 1;

async function fetchData() {
  try {
    const r = await fetch("/api/data");
    const data = await r.json();
    plansState = data.plans || {};
    bulletinBoard = data.bulletinBoard || [];
    checklist = data.checklist || [];
    expenses = data.expenses || [];

    renderBoard();
    renderChecklist();
    renderExpenses();
    updatePlanUI();
  } catch (e) {
    console.error("Data fetch error", e);
    // 폴백: 로컬 스토리지 사용
    plansState = JSON.parse(localStorage.getItem("plansState") || "{}");
    bulletinBoard = JSON.parse(localStorage.getItem("bulletinBoard") || "[]");
    checklist = JSON.parse(localStorage.getItem("checklist") || "[]");
    expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    renderBoard();
    renderChecklist();
    renderExpenses();
    updatePlanUI();
  }
}

async function saveData() {
  const payload = { plans: plansState, bulletinBoard, checklist, expenses };
  // 로컬 스토리지 저장
  localStorage.setItem("plansState", JSON.stringify(plansState));
  localStorage.setItem("bulletinBoard", JSON.stringify(bulletinBoard));
  localStorage.setItem("checklist", JSON.stringify(checklist));
  localStorage.setItem("expenses", JSON.stringify(expenses));

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

function renderPlacePills() {
  const container = document.getElementById("placesScroll");
  if (!container) return;
  container.innerHTML = "";

  const sorted = [...places].sort((a, b) => {
    const ta = placeTypeOrder.indexOf(a.type);
    const tb = placeTypeOrder.indexOf(b.type);
    return ta - tb;
  });

  sorted.forEach(place => {
    const btn = document.createElement("button");
    btn.className = "place-pill";
    btn.dataset.id = place.id;
    btn.innerHTML = `${place.emoji}<span>${place.koreanName}</span>`;
    btn.onclick = () => selectPlace(place.id);
    container.appendChild(btn);
  });
}

function selectPlace(id) {
  const place = places.find(p => p.id === id);
  if (!place) return;

  document.querySelectorAll(".place-pill").forEach(el => {
    el.classList.toggle("active", el.dataset.id === id);
  });

  const detailBody = document.getElementById("placeDetail");
  detailBody.innerHTML = `
    <div class="place-type-badge" style="background: ${placeTypeColor[place.type]}22; color: ${placeTypeColor[place.type]}; border: 1px solid ${placeTypeColor[place.type]}44;">
      ${placeTypeLabel[place.type]}
    </div>
    <div class="place-name-korean">${place.emoji} ${place.koreanName}</div>
    <div class="place-name-chinese">${place.chineseName} <button class="btn-copy" onclick="copyText('${place.chineseName}')">📋</button></div>
    <div class="place-info-text">${place.info}</div>
    <div class="place-tips">
      ${place.tips.map(t => `<div class="tip-item">· ${t}</div>`).join("")}
    </div>
  `;
}

window.copyText = async (text) => {
  await navigator.clipboard.writeText(text);
  alert("복사되었습니다!");
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
