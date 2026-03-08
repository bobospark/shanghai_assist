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
  },
  {
    id: "haidilao",
    type: "food",
    emoji: "🍲",
    koreanName: "하이디라오",
    chineseName: "海底捞",
    areaKorean: "난징동루",
    info: "세계적으로 유명한 서비스 끝판왕 훠궈 브랜드입니다.",
    tips: ["웨이팅 중 네일 서비스 등을 받을 수 있습니다.", "수화면 퍼포먼스를 꼭 구경하세요."],
    tags: ["훠궈", "서비스최고"],
    lat: 31.2385, lng: 121.4820,
    nearby: ["제일식품상점"]
  },
  {
    id: "yangs",
    type: "food",
    emoji: "🥟",
    koreanName: "소양생전",
    chineseName: "小杨生煎",
    areaKorean: "상하이 전역",
    info: "바닥은 바삭하고 위는 촉촉한 상하이식 성젠바오 맛집.",
    tips: ["육즙이 뜨거우니 젓가락으로 구멍을 내서 식혀 드세요.", "기본 맛과 새우 맛 추천."],
    tags: ["성젠바오", "가성비"],
    lat: 31.2390, lng: 121.4830
  },
  {
    id: "jiajia",
    type: "food",
    emoji: "🥢",
    koreanName: "가가탕포",
    chineseName: "佳家汤包",
    areaKorean: "인민광장 근처",
    info: "현지인들이 줄 서서 먹는 샤오롱바오 성지입니다.",
    tips: ["게살 샤오롱바오가 가장 인기 있습니다.", "오전 일찍 가야 품절을 피합니다."],
    tags: ["샤오롱바오", "로컬맛집"],
    lat: 31.2345, lng: 121.4740
  },
  {
    id: "shuyu",
    type: "food",
    emoji: "🍗",
    koreanName: "슈유 중식",
    chineseName: "舒友海鲜大酒楼",
    areaKorean: "와이탄",
    info: "정갈한 상하이식 해산물 요리와 딤섬을 즐길 수 있는 곳.",
    tips: ["경치가 아주 좋으니 창가 자리를 예약하세요.", "딤섬 종류가 매우 다양합니다."],
    tags: ["해산물", "분위기맛집"],
    lat: 31.2420, lng: 121.4920
  },
  {
    id: "manner_special",
    type: "dessert",
    emoji: "☕",
    koreanName: "매너 커피 (본점)",
    chineseName: "Manner Coffee",
    areaKorean: "정안사 근처",
    info: "상하이 로컬 커피의 자존심. 매너 커피의 역사가 시작된 곳입니다.",
    tips: ["공간이 좁으니 테이크아웃을 추천합니다.", "플랫 화이트가 유명합니다."],
    tags: ["로컬커피", "힙한"],
    lat: 31.2250, lng: 121.4470
  },
  {
    id: "dragonfly",
    type: "massage",
    emoji: "💆",
    koreanName: "드래곤플라이",
    chineseName: "悠庭保健会所",
    areaKorean: "신천지/프랑스조계지",
    info: "외국인들에게도 인기 높은 깔끔하고 전문적인 마사지 샵.",
    tips: ["미리 예약하는 것이 좋습니다.", "아로마 오일 마사지가 아주 훌륭합니다."],
    tags: ["마사지", "힐링", "프리미엄"],
    lat: 31.2215, lng: 121.4745
  },
  {
    id: "taithai",
    type: "massage",
    emoji: "🏮",
    koreanName: "타이 타이 마사지",
    chineseName: "Thai Thai 泰式按摩",
    areaKorean: "난징동루",
    info: "정통 태국식 마사지를 상하이 도심에서 저렴하게 즐길 수 있습니다.",
    tips: ["발 마사지만 받아도 피로가 확 풀립니다.", "디안핑에서 예약 시 할인이 큽니다."],
    tags: ["태국식", "가성비", "야간가능"],
    lat: 31.2370, lng: 121.4810
  },
  {
    id: "ji_hotel",
    type: "hotel",
    emoji: "🏨",
    koreanName: "JI 호텔 상하이 텐동루",
    chineseName: "全季酒店上海外滩天潼路店",
    areaKorean: "와이탄 북쪽",
    info: "와이탄과 가까운 현대적이고 깔끔한 비즈니스 호텔입니다.",
    tips: ["텐통루역 도보 거리", "주변에 로컬 맛집이 많습니다."],
    tags: ["가성비", "모던"],
    lat: 31.2460, lng: 121.4840
  },
  {
    id: "경운화",
    type: "food",
    emoji: "🍲",
    koreanName: "경운화",
    chineseName: "京云华",
    areaKorean: "인민광장",
    info: "난징동루 신세계성 9층에 위치한 식당입니다. 인민광장역 내에서 연결됩니다.",
    tips: ["신세계성 9층", "인민광장역 연결"],
    tags: ["로컬맛집", "역세권"],
    lat: 31.2380, lng: 121.4720
  },
  {
    id: "no_yeye_no_tea",
    type: "dessert",
    emoji: "🍵",
    koreanName: "NO YEYE NO TEA (예예부파오차)",
    chineseName: "爷爷不泡茶",
    areaKorean: "상하이 전역",
    info: "독특한 블렌딩 티를 선보이는 인기 찻집입니다.",
    tips: ["추천 메뉴: 리치아이스쌀술음료 (荔枝冰酿)"],
    tags: ["전통티", "트렌디", "리치"],
    lat: 31.2300, lng: 121.4900
  },
  {
    id: "chagee",
    type: "dessert",
    emoji: "🥤",
    koreanName: "CHAGEE (빠왕차지)",
    chineseName: "霸王茶姬",
    areaKorean: "상하이 전역",
    info: "중국 전역에서 사랑받는 정통 밀크티 브랜드입니다.",
    tips: ["추천 메뉴: 백아절현 (伯牙绝弦) - 자스민 밀크티"],
    tags: ["정통밀크티", "자스민", "인기매장"],
    lat: 31.2250, lng: 121.4850
  },
  {
    id: "arabica_rockbund",
    type: "dessert",
    emoji: "☕",
    koreanName: "% 아라비카 (락번드 로스터리)",
    chineseName: "% Arabica(洛克外滩源店)",
    areaKorean: "와이탄/락번드",
    info: "전 세계 최대 규모급의 로스터리 매장. 붉은 벽돌 건물이 인상적이며 와이탄 산책 전 들르기 최고.",
    tips: ["사람이 많으니 오전에 방문 추천", "2층 창가 자리가 명당"],
    tags: ["커피맛집", "인생샷", "도보가능"],
    lat: 31.2425, lng: 121.4870
  },
  {
    id: "naive_rockbund",
    type: "dessert",
    emoji: "📚",
    koreanName: "나이브 아이디얼리스트 (Naive)",
    chineseName: "naive理想国(洛克外滩源店)",
    areaKorean: "와이탄/락번드",
    info: "서점과 칵테일 바가 결합된 차분한 분위기의 카페. '이상국' 출판사에서 운영.",
    tips: ["조용히 책을 읽거나 분위기를 즐기기에 좋음", "저녁엔 칵테일도 판매"],
    tags: ["서점카페", "조용함", "분위기"],
    lat: 31.2418, lng: 121.4865
  },
  {
    id: "horiguchi_bund",
    type: "dessert",
    emoji: "☕",
    koreanName: "호리구치 커피",
    chineseName: "堀口咖啡(洛克外滩源店)",
    areaKorean: "와이탄/락번드",
    info: "일본 스페셜티 커피의 거장이 낸 해외 1호점. 가격대는 높지만 최상의 드립 커피를 경험할 수 있음.",
    tips: ["커피 애호가라면 필수 방문", "원두 종류가 매우 다양함"],
    tags: ["스페셜티", "고급", "드립커피"],
    lat: 31.2412, lng: 121.4858
  },
  {
    id: "luneurs_rockbund",
    type: "dessert",
    emoji: "🥐",
    koreanName: "루뇌르 (Luneurs)",
    chineseName: "Luneurs(洛克外滩源店)",
    areaKorean: "와이탄/락번드",
    info: "상하이에서 가장 핫한 베이커리 & 아이스크림 카페. 크루아상과 솔티드 카라멜 아이스크림이 유명.",
    tips: ["아라비카 바로 근처", "빵과 아이스크림을 사서 쑤저우강변 벤치에서 먹으면 꿀맛"],
    tags: ["빵지순례", "아이스크림", "디저트"],
    lat: 31.2420, lng: 121.4868
  },
  {
    id: "metal_hands",
    type: "dessert",
    emoji: "☕",
    koreanName: "메탈 핸즈 (Metal Hands)",
    chineseName: "Metal Hands(南昌路店)",
    areaKorean: "프랑스 조계지",
    info: "베이징에서 온 힙한 카페. 독특한 인테리어와 '더티 커피(Dirty)'가 시그니처.",
    tips: ["숙소에서 택시로 15~20분 거리", "신천지나 조계지 구경 갈 때 들르세요"],
    tags: ["힙플레이스", "더티커피", "택시이동"],
    lat: 31.2185, lng: 121.4632
  },
  {
    id: "ops_cafe",
    type: "dessert",
    emoji: "☕",
    koreanName: "O.P.S. Cafe",
    chineseName: "O.P.S. CAFE(太原路店)",
    areaKorean: "프랑스 조계지",
    info: "상하이 커피 덕후들의 성지. 좌석 없이 바리스타가 1:1로 설명하며 만들어주는 창작 커피.",
    tips: ["웨이팅이 길 수 있음", "테이크아웃만 가능하지만 경험해볼 가치가 충분함"],
    tags: ["커피성지", "창작메뉴", "웨이팅필수"],
    lat: 31.2065, lng: 121.4550
  },
  {
    id: "taotaoju",
    type: "food",
    emoji: "🥟",
    koreanName: "점도덕 (Tao Tao Ju)",
    chineseName: "陶陶居",
    areaKorean: "난징동루 외",
    info: "광둥식 딤섬 전문점으로 홍미창펀(Red Rice Roll)이 매우 유명합니다.",
    tips: ["홍미창펀은 필수 주문", "웨이팅이 있으니 미리 번호표를 받으세요"],
    tags: ["딤섬맛집", "홍미창펀", "광둥요리"],
    lat: 31.2385, lng: 121.4825
  },
  {
    id: "amashouzuo",
    type: "dessert",
    emoji: "🧋",
    koreanName: "아마수작 (Ah Ma Shou Zuo)",
    chineseName: "阿嬷手作·珍藏(上海新天地店)",
    areaKorean: "신천지",
    info: "상하이에서 가장 핫한 프리미엄 밀크티. 수제 타로 페이스트와 물소 우유를 사용해 정말 진하고 고소함.",
    tips: ["기본 30분~1시간 웨이팅 필수!", "위챗 미니프로그램으로 미리 주문 강력 추천", "시그니처 메뉴: '다-미(Da-Mi)'"],
    tags: ["밀크티맛집", "웨이팅필수", "인생밀크티"],
    lat: 31.2225, lng: 121.4745
  },
  {
    id: "taoyuanxiang",
    type: "massage",
    emoji: "💆",
    koreanName: "도원향 (Tao Yuan Xiang)",
    chineseName: "桃源乡",
    areaKorean: "와이탄/난징동루",
    info: "오랫동안 사랑받은 마사지 샵으로 시설이 깔끔하고 실력이 좋습니다.",
    tips: ["따종디엔핑 어플로 예약 시 할인 가능", "발 마사지와 전신 마사지 모두 훌륭함"],
    tags: ["마사지", "따종디엔핑할인", "와이탄"],
    lat: 31.2405, lng: 121.4875
  },
  {
    id: "zhuguangyu",
    type: "food",
    emoji: "🍲",
    koreanName: "주광옥훠궈 (Zhu Guang Yu)",
    chineseName: "朱光玉火锅馆(人民广场店) ",
    areaKorean: "인민광장/가교",
    info: "요즘 상하이에서 가장 핫한 훠궈 브랜드 중 하나입니다.",
    tips: ["화려한 비주얼과 매운 맛이 특징", "디저트류도 맛있습니다"],
    tags: ["핫플훠궈", "매운맛", "트렌디"],
    lat: 31.2330, lng: 121.4745
  },
  {
    id: "henjiuyiqian",
    type: "food",
    emoji: "🍢",
    koreanName: "헌지우이치엔 양꼬치",
    chineseName: "很久以前羊肉串",
    areaKorean: "상하이 전역",
    info: "자동으로 구워주는 시스템과 신선한 양고기로 유명한 맛집입니다.",
    tips: ["웨이팅이 매우 기니 아침 일찍 위챗으로 예약하세요", "함께 나오는 우유 푸딩이 별미"],
    tags: ["양꼬치맛집", "웨이팅지옥", "위챗예약"],
    lat: 31.2395, lng: 121.4815
  },
  {
    id: "lillian",
    type: "dessert",
    emoji: "🥧",
    koreanName: "릴리안 베이커리",
    chineseName: "莉莲蛋挞",
    areaKorean: "지하상가/쇼핑몰",
    info: "상하이 3대 에그타르트 맛집 중 하나로 불리는 곳입니다.",
    tips: ["에그타르트와 치즈타르트 추천", "따뜻할 때 바로 드세요"],
    tags: ["에그타르트", "가성비", "디저트"],
    lat: 31.2410, lng: 121.4785
  },
  {
    id: "yidiandian",
    type: "dessert",
    emoji: "🥤",
    koreanName: "이디엔디엔 (1點點)",
    chineseName: "一点点",
    areaKorean: "상하이 전역",
    info: "중국에서 가장 대중적이고 가성비 좋은 밀크티 체인점 중 하나입니다.",
    tips: ["추천 조합: 아이스크림 홍차 + 우유크림 추가", "당도 조절이 가능합니다"],
    tags: ["가성비밀크티", "커스텀메뉴", "인기체인"],
    lat: 31.2365, lng: 121.4735
  },
  {
    id: "hongkuijia",
    type: "food",
    emoji: "🦞",
    koreanName: "홍쿠이지아 (Hong Kui Jia)",
    chineseName: "红魁甲",
    areaKorean: "상하이 전역",
    info: "신선한 민물가재(마라롱샤) 요리 전문점입니다.",
    tips: ["마라 맛과 마늘 맛 추천", "장갑을 끼고 직접 까먹는 재미가 있습니다"],
    tags: ["마라롱샤", "야식추천", "마늘맛"],
    lat: 31.2320, lng: 121.4795
  },
  {
    id: "yu_massage_bund",
    type: "massage",
    emoji: "💆",
    koreanName: "Yu Massage (북와이탄점)",
    chineseName: "愉庭保健会所(北外滩店)",
    areaKorean: "숙소 바로 옆",
    info: "숙소에서 도보 2분 거리의 깔끔한 중급 마사지샵. 접근성이 최고이며 시설도 쾌적함.",
    tips: ["숙소와 같은 도로(Tiantong Rd)에 있어 찾기 쉬움", "시설이 깔끔하고 쾌적함"],
    tags: ["가성비", "도보이동", "깔끔함"],
    lat: 31.2465, lng: 121.4830
  },
  {
    id: "kangyou_massage",
    type: "massage",
    emoji: "💆",
    koreanName: "강유 사계절 마사지",
    chineseName: "上海康友四季按摩(汉口路店)",
    areaKorean: "난징동루/인민광장",
    info: "한국인 여행객에게 입소문 난 가성비 마사지샵. 발마사지와 건식 마사지가 유명.",
    tips: ["인기가 많아 대기가 있을 수 있음", "난징동루 쇼핑 후 들르기 좋은 위치"],
    tags: ["가성비", "발마사지", "유명한곳"],
    lat: 31.2355, lng: 121.4752
  },
  {
    id: "w_away_spa",
    type: "massage",
    emoji: "🧖‍♀️",
    koreanName: "W 상하이 어웨이 스파",
    chineseName: "上海外滩W酒店-AWAY水疗中心",
    areaKorean: "북와이탄",
    info: "W 호텔 내 위치한 럭셔리 스파. 힙하고 현대적인 분위기에서 최고급 관리를 받을 수 있음.",
    tips: ["가격대는 높지만 투숙객이 아니어도 이용 가능", "예약 필수"],
    tags: ["럭셔리", "호텔스파", "기념일"],
    lat: 31.2505, lng: 121.4945
  },
  {
    id: "banyan_tree_spa",
    type: "massage",
    emoji: "🧖‍♂️",
    koreanName: "반얀트리 스파 (상하이)",
    chineseName: "上海外滩悦榕庄-悦榕Spa",
    areaKorean: "북와이탄",
    info: "세계적인 스파 브랜드 반얀트리의 상하이 지점. 황푸강 뷰와 함께하는 정통 태국식 스파.",
    tips: ["완벽한 힐링이 필요할 때 추천", "부모님 동반 여행 시 만족도 최상"],
    tags: ["최고급", "효도여행", "강변뷰"],
    lat: 31.2520, lng: 121.5010
  }
];

const placeTypeLabel = {
  attraction: "관광",
  food: "식당",
  dessert: "디저트",
  hotel: "숙소",
  massage: "마사지"
};

const placeTypeColor = {
  attraction: "#38bdf8",
  food: "#f97316",
  dessert: "#f9a8d4",
  hotel: "#facc15",
  massage: "#4ade80"
};

const placeTypeOrder = ["hotel", "attraction", "food", "dessert", "massage"];

/* ========== 방향 및 거리 계산 로직 ========== */
function getDirection(targetLat, targetLng) {
  const latDiff = targetLat - hotelLocation.lat;
  const lngDiff = targetLng - hotelLocation.lng;

  let vertical = latDiff > 0 ? "북" : "남";
  let horizontal = lngDiff > 0 ? "동" : "서";

  if (Math.abs(latDiff) < 0.005 && Math.abs(lngDiff) < 0.005) return "근처";
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

function setupDragScroll(el) {
  if (!el) return;
  let isDown = false;
  let startX;
  let scrollLeft;

  el.addEventListener('mousedown', (e) => {
    isDown = true;
    el.classList.add('grabbing');
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  el.addEventListener('mouseleave', () => {
    isDown = false;
    el.classList.remove('grabbing');
  });
  el.addEventListener('mouseup', () => {
    isDown = false;
    el.classList.remove('grabbing');
  });
  el.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast
    el.scrollLeft = scrollLeft - walk;
  });
}

const MAP_IMAGE_URL_DEFAULT = "shanghaimap_1.png";
let currentMapUrl = MAP_IMAGE_URL_DEFAULT;
let leafletMap = null;

/* ========== 데이터 상태 관리 (Local Storage & API) ========== */
let plansState = {};
let bulletinBoard = [];
let checklist = [];
let expenses = [];
let userPlaces = []; // 사용자가 추가한 장소
let guideNotes = ""; // 사용자의 가이드 메모
let currentDay = 1;
let currentFilter = "all";

async function fetchData() {
  try {
    const r = await fetch("/api/data");
    const data = await r.json();
    plansState = data.plans || {};
    bulletinBoard = data.bulletinBoard || [];
    checklist = data.checklist || [];
    expenses = data.expenses || [];
    userPlaces = data.userPlaces || [];
    guideNotes = data.guideNotes || "";

    renderBoard();
    renderChecklist();
    renderExpenses();
    updatePlanUI();
    renderPlacePills();
    renderGuide("apps");
  } catch (e) {
    console.error("Data fetch error", e);
    // 폴백: 로컬 스토리지 사용
    plansState = JSON.parse(localStorage.getItem("plansState") || "{}");
    bulletinBoard = JSON.parse(localStorage.getItem("bulletinBoard") || "[]");
    checklist = JSON.parse(localStorage.getItem("checklist") || "[]");
    expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    userPlaces = JSON.parse(localStorage.getItem("userPlaces") || "[]");
    guideNotes = localStorage.getItem("guideNotes") || "";
    renderBoard();
    renderChecklist();
    renderExpenses();
    updatePlanUI();
    renderPlacePills();
    renderGuide("apps");
  }
}

async function saveData() {
  const payload = { plans: plansState, bulletinBoard, checklist, expenses, userPlaces, guideNotes };
  // 로컬 스토리지 저장
  localStorage.setItem("plansState", JSON.stringify(plansState));
  localStorage.setItem("bulletinBoard", JSON.stringify(bulletinBoard));
  localStorage.setItem("checklist", JSON.stringify(checklist));
  localStorage.setItem("expenses", JSON.stringify(expenses));
  localStorage.setItem("userPlaces", JSON.stringify(userPlaces));
  localStorage.setItem("guideNotes", guideNotes);

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

function initLeafletMap() {
  const container = document.getElementById("leafletMap");
  if (!container) return;

  const url = currentMapUrl;
  const img = new Image();
  img.src = url;
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

    L.imageOverlay(url, bounds).addTo(leafletMap);
    leafletMap.fitBounds(bounds);
  };
}

/* ========== 장소 관리 ========== */
function renderPlacePills() {
  const container = document.getElementById("placesScroll");
  if (!container) return;
  container.innerHTML = "";

  const allPlaces = [...places, ...userPlaces];
  const filtered = currentFilter === "all" ? allPlaces : allPlaces.filter(p => p.type === currentFilter);

  const sorted = filtered.sort((a, b) => {
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

    ${place.id.startsWith("user_") ? `
    <div class="place-admin-buttons" style="margin-top: 24px; display: flex; gap: 8px;">
        <button class="btn btn-secondary" style="flex: 1; color: #ef4444;" onclick="deleteUserPlace('${place.id}')">삭제하기</button>
    </div>
    ` : ""}
  `;
}

window.deleteUserPlace = (id) => {
  if (!confirm("이 장소를 삭제하시겠습니까?")) return;
  userPlaces = userPlaces.filter(p => p.id !== id);
  saveData();
  renderPlacePills();
  document.getElementById("placeDetail").innerHTML = `<p class="place-detail-empty">장소가 삭제되었습니다.</p>`;
};

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


/* ========== 초기화 및 가이드 렌더링 ========== */
function renderGuide(tab = "apps") {
  const container = document.getElementById("guideContent");
  if (!container) return;

  document.querySelectorAll(".guide-tab").forEach(el => {
    el.classList.toggle("active", el.dataset.guide === tab);
  });

  if (tab === "apps") {
    container.innerHTML = `
            <div class="tip-card">
                <h4>📱 디안핑 (Dianping/大众点评) 활용법</h4>
                <p>맛집, 마사지 등 모든 가게의 평점을 확인하는 필수 앱입니다.</p>
                <ul class="tip-list">
                    <li><span class="app-badge">평점 해석:</span> 4.5점 이상이면 실패 확률이 거의 없습니다.</li>
                    <li><span class="app-badge">할인 쿠폰:</span> '买单(마이단)' 버튼으로 결제 시 자동 할인이 되거나 '代金券(다이진권)' 바우처를 미리 사서 쓸 수 있습니다.</li>
                    <li><span class="app-badge">메뉴 확인:</span> '推荐(투이젠)' 탭에서 사람들이 많이 먹는 메뉴 사진을 보고 손가락으로 주문하세요.</li>
                </ul>
            </div>
            <div class="tip-card">
                <h4>🚴 메이투안 (Meituan/美团) 팁</h4>
                <p>배달 뿐만 아니라 자전거 공유, 티켓 구매도 가능합니다.</p>
                <ul class="tip-list">
                    <li><span class="app-badge">배달 팁:</span> '月售(웨쇼우)'가 높은 집은 회전율이 좋아 신선하고 맛있을 확률이 높습니다.</li>
                    <li><span class="app-badge">정보 해석:</span> 배달 완료 시 시진과 함께 메시지가 오니 번역기를 활용하세요.</li>
                </ul>
            </div>
        `;
  } else if (tab === "delivery") {
    container.innerHTML = `
          <div class="tip-card">
                <h4>🍰 메이투안 디저트 배달</h4>
                <ul class="tip-list">
                    <li><strong>희차 (HEYTEA/喜茶):</strong> 웨이팅 없이 배달로 즐기는 치즈폼 과일티. '포도 치즈티' 강추.</li>
                    <li><strong>릴리안 베이커리 (莉莲蛋挞):</strong> 매장에 못 갔다면 배달로! 겉바속촉 에그타르트의 정석.</li>
                    <li><strong>이치도 (ICHIDO/宜芝多):</strong> 일본식 베이커리로 생크림 케이크와 부드러운 빵류가 훌륭합니다.</li>
                </ul>
            </div>
            <div class="tip-card">
                <h4>🌙 상하이 야식 배달</h4>
                <div style="margin-bottom: 12px; padding: 12px; background: #f0fdf4; border-radius: 8px; border: 1px solid #dcfce7;">
                    <p style="font-size: 13px; font-weight: 700; color: #166534; margin-bottom: 4px;">🥟 원기운교 (袁记云饺) 추천!</p>
                    <p style="font-size: 12px; color: #15803d; line-height: 1.5;"><strong>鲜虾蟹籽云吞(선하해자운탄):</strong> 게살새우만두 + 마라땅콩소스 조합은 맛없없🙀 물만두인데 안에 새우가 탱글하고 게살이 톡톡 터져요🥺</p>
                </div>
                <ul class="tip-list">
                    <li><strong>소양생전 (小杨生煎):</strong> 밤에 먹으면 더 맛있는 바삭한 성젠바오. 육즙 조심!</li>
                    <li><strong>마라롱샤 (Crawfish):</strong> '화웨이 매운 가재' 등에서 주문하는 상하이 야식의 꽃.</li>
                    <li><strong>꼬치구이 (Shaokao/烧烤):</strong> 풍무양꼬치 등 전문점에서 구워서 오는 양꼬치와 채소구이.</li>
                </ul>
            </div>
            <div class="tip-card">
                <h4>💆 추천 마사지 & 스파</h4>
                <ul class="tip-list">
                    <li><strong>드래곤플라이 (Dragonfly):</strong> 외국인 친화적, 깔끔한 시설.</li>
                    <li><strong>유 마사지 (Yu Massage):</strong> 감각적인 인테리어의 실력파 샵.</li>
                    <li><strong>젠 마사지 (Zen Massage):</b> 프랑스 조계지에 위치한 힐링 스팟.</li>
                    <li><strong>맹인 안마 (Blind Massage):</strong> 가성비와 실력을 중시한다면 강추.</li>
                </ul>
            </div>
            <div class="tip-card">
                <h4>📱 필수 앱 활용</h4>
                <ul class="tip-list">
                    <li><strong>알리페이 (Alipay):</b> 결제, 지하철/버스 QR 승차권, 세금 환급 등 필수.</li>
                    <li><strong>고덕지도 (Amap):</b> 바이두보다 정확한 실시간 길 찾기와 대중교통 정보.</li>
                    <li><strong>따종디엔핑 (Dianping):</strong> 맛집 검색, 리뷰 확인, 모바일 웨이팅, 할인권 구매.</li>
                    <li><strong>트립닷컴 (Trip.com):</strong> 중국 기차표 예매와 호텔 예약이 가장 편리함.</li>
                </ul>
                <div style="margin-top: 12px; padding: 12px; background: #fffbeb; border-radius: 8px; border: 1px solid #fef3c7;">
                    <p style="font-size: 13px; font-weight: 700; color: #92400e; margin-bottom: 4px;">*️⃣ 미리 대기 방법은 위챗 미니프로그램으로!</p>
                    <p style="font-size: 12px; color: #b45309; line-height: 1.5;">아마수작 밀크티, 헌지우이치엔 양꼬치 등 대부분의 가게는 위챗 미니프로그램에서 미리 웨이팅 등록이 가능합니다. 미리 예약하고 아까운 대기 시간을 아껴서 즐거운 여행 하세요🛫</p>
                </div>
            </div>
        `;
  } else if (tab === "notes") {
    container.innerHTML = `
            <div class="note-editor-container">
                <p style="font-size: 13px; color: var(--text-secondary);">여행하며 알게 된 나만의 꿀팁을 적어두세요. (자동 저장)</p>
                <textarea id="guideNoteInput" class="input-modern" placeholder="예: 난징동루 M&M 2층이 덜 붐빔, OOO 마사지사 6번 번호...">${guideNotes}</textarea>
                <button class="btn btn-main" onclick="saveGuideNotes()">메모 저장</button>
            </div>
        `;
  }
}

function saveGuideNotes() {
  guideNotes = document.getElementById("guideNoteInput").value;
  saveData();
  alert("메모가 저장되었습니다!");
}

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  renderPlacePills();
  initLeafletMap();

  setupDragScroll(document.querySelector(".nav-pages"));
  setupDragScroll(document.querySelector(".guide-tabs"));

  // 페이지 네비게이션
  const switchPage = (id) => {
    document.querySelectorAll(".page").forEach(p => p.hidden = p.id !== "page-" + id);
    document.querySelectorAll(".nav-tab").forEach(t => t.classList.toggle("active", t.id === "nav" + id.charAt(0).toUpperCase() + id.slice(1)));
    if (id === "map" && leafletMap) setTimeout(() => leafletMap.invalidateSize(), 100);
    if (id === "guide") renderGuide("apps");
  };

  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.onclick = (e) => {
      e.preventDefault();
      const id = tab.id.replace("nav", "").toLowerCase();
      switchPage(id);
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

    if (!content) return alert("내용을 입력해주세요.");

    bulletinBoard.unshift({
      author: author || "익명",
      title: title || "제목 없음",
      content: content,
      date: new Date().toLocaleString()
    });

    saveData();
    renderBoard();

    // 필드 초기화
    document.getElementById("boardAuthor").value = "";
    document.getElementById("boardTitle").value = "";
    document.getElementById("boardContent").value = "";
  };

  // 가이드 탭 전환
  document.querySelector(".guide-tabs").onclick = (e) => {
    if (e.target.classList.contains("guide-tab")) {
      renderGuide(e.target.dataset.guide);
    }
  };

  renderGuide("apps");

  document.getElementById("savePlanBtn").onclick = () => {
    plansState[currentDay] = document.getElementById("planText").value;
    saveData();
    alert("저장되었습니다.");
  };

  document.getElementById("insertTemplateBtn").onclick = () => {
    const template = `[오전]\n- \n\n[점심]\n- \n\n[오후]\n- \n\n[저녁]\n- \n\n[야간]\n- `;
    const textarea = document.getElementById("planText");
    if (textarea.value.trim() && !confirm("이미 작성된 내용이 있습니다. 템플릿을 추가하시겠습니까?")) return;
    textarea.value = (textarea.value ? textarea.value + "\n\n" : "") + template;
  };

  // 카테고리 필터 클릭
  document.getElementById("categoryFilter").onclick = (e) => {
    if (e.target.classList.contains("filter-btn")) {
      currentFilter = e.target.dataset.category;
      document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === currentFilter);
      });
      renderPlacePills();
    }
  };
  setupDragScroll(document.getElementById("categoryFilter"));

  document.getElementById("themeToggle").onclick = () => {
    const isDark = document.body.dataset.theme === "dark";
    document.body.dataset.theme = isDark ? "light" : "dark";
    document.getElementById("themeToggle").textContent = isDark ? "🌙" : "☀️";
  };

  // 지도 이미지 전환
  document.getElementById("mapSelector").onclick = (e) => {
    if (e.target.classList.contains("map-btn")) {
      currentMapUrl = e.target.dataset.map;
      document.querySelectorAll(".map-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.map === currentMapUrl);
      });
      initLeafletMap();
    }
  };
});
