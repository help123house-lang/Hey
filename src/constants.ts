export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  steps: string[];
  equipment: 'electric_cooker' | 'air_fryer';
  mealType: 'breakfast' | 'lunch' | 'dinner';
  cuisineType: 'chinese' | 'western' | 'japanese';
  tags: string[]; // ['elderly', 'family', 'single', 'vegetarian']
  nutrition: {
    calories: number;
    grains: number; // 全穀雜糧
    protein: number; // 豆魚蛋肉
    vegetables: number; // 蔬菜
    fruits: number; // 水果
    dairy: number; // 乳品
    oils: number; // 油脂
  };
  elderlyNote?: string; // Special note for elderly
  familyNote?: string; // Special note for families with teenagers
}

export const CHEAPEST_VEGETABLES = [
  { name: '高麗菜', price: 45, unit: '顆', reason: '春季盛產，耐蒸煮，口感清甜且不易變色。' },
  { name: '洋蔥', price: 25, unit: '袋(3入)', reason: '價格穩定，蒸後呈半透明狀，增加料理鮮甜度。' },
  { name: '紅蘿蔔', price: 30, unit: '袋(3入)', reason: '富含胡蘿蔔素，蒸煮後色澤依舊鮮艷，營養更好吸收。' },
  { name: '白蘿蔔', price: 35, unit: '條', reason: '春季尾聲最為肥美，蒸後呈白色，適合燉湯或清蒸。' },
  { name: '玉米筍', price: 40, unit: '盒', reason: '色澤金黃穩定，口感爽脆，是孩子最愛的蔬菜之一。' }
];

export const WEEKLY_SHOPPING_LIST = [
  { category: '營養師推薦：一週 8 大核心食材 (零浪費規劃)', items: [
    { name: '雞蛋', qty: 1, unit: '盒(10入)', price: 85, isCore: true },
    { name: '雞胸肉', qty: 1, unit: 'kg', price: 280, isCore: true },
    { name: '板豆腐', qty: 4, unit: '塊', price: 60, isCore: true },
    { name: '高麗菜', qty: 2, unit: '顆', price: 90, isCore: true },
    { name: '洋蔥', qty: 2, unit: '袋(3入)', price: 100, isCore: true },
    { name: '紅蘿蔔', qty: 2, unit: '袋(3入)', price: 60, isCore: true },
    { name: '青花菜', qty: 4, unit: '朵', price: 140, isCore: true },
    { name: '馬鈴薯', qty: 2, unit: '袋(3入)', price: 120, isCore: true },
    { name: '當季水果 (如蘋果/芭樂)', qty: 1, unit: '袋(5-6入)', price: 150, isCore: true },
  ]},
  { category: '必備辛香料與乾貨', items: [
    { name: '薑/蒜', qty: 1, unit: '組', price: 50, isCore: false },
    { name: '白米/糙米', qty: 2, unit: 'kg', price: 180, isCore: false },
    { name: '乾香菇', qty: 1, unit: '包', price: 120, isCore: false },
  ]}
];

export const NUTRITION_GUIDELINES_2026 = {
  title: "2026 營養師飲食指南",
  points: [
    "植物性蛋白優先：每週至少 3 天以豆製品取代肉類。",
    "全穀雜糧比例：主食中全穀物應佔 1/2 以上，提升膳食纖維。",
    "減鹽增鮮：利用洋蔥、鳳梨、香菇等天然食材提味，減少鈉攝取。",
    "精準採買：選用 8 大核心食材，透過不同烹調法達成零浪費。"
  ]
};

export const SPRING_RECIPES: Recipe[] = [
  {
    id: '2',
    name: '洋蔥紅蘿蔔蒸肉餅 (核心食材：洋蔥、紅蘿蔔)',
    ingredients: ['豬絞肉 150g', '洋蔥 1/4顆', '紅蘿蔔碎 少許', '醬油 1大匙'],
    steps: [
      '洋蔥與紅蘿蔔切碎，與絞肉、調味料拌勻並摔打出黏性。',
      '平鋪於盤中，放入電鍋。',
      '外鍋 1 杯水蒸熟即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['single', 'family'],
    nutrition: { calories: 320, grains: 0, protein: 2.5, vegetables: 0.8, fruits: 0, dairy: 0, oils: 2 },
    elderlyNote: '洋蔥切極碎，絞肉選用細絞肉更易咀嚼。',
    familyNote: '絞肉可混入少許豆腐，增加飽足感且不油膩，適合發育中的孩子。'
  },
  {
    id: '3',
    name: '高麗菜香菇什錦飯 (核心食材：高麗菜)',
    ingredients: ['白米 1杯', '高麗菜 1/4顆', '乾香菇 2朵', '紅蘿蔔絲 少許'],
    steps: [
      '香菇泡軟切絲，高麗菜切小片。',
      '米洗淨與食材、香菇水放入電鍋。',
      '正常煮飯程序，跳起後悶 10 分鐘拌勻。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'elderly'],
    nutrition: { calories: 350, grains: 3, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1 },
    elderlyNote: '可多加 0.2 杯水讓米飯更軟綿。',
    familyNote: '可加入糙米或藜麥，增加膳食纖維與維生素 B 群，提升學習專注力。'
  },
  {
    id: '4',
    name: '紙包洋蔥鱸魚 (核心食材：洋蔥)',
    ingredients: ['鱸魚片 1片', '蘆筍 5支', '洋蔥絲 少許', '檸檬片 2片'],
    steps: [
      '烘焙紙鋪底，放上洋蔥絲、鱸魚及蘆筍。',
      '撒上鹽、黑胡椒及少許橄欖油包起。',
      '氣炸鍋 180度 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['elderly', 'single', 'family'],
    nutrition: { calories: 220, grains: 0, protein: 3, vegetables: 1, fruits: 0, dairy: 0, oils: 1 },
    elderlyNote: '鱸魚肉質細緻，非常適合長輩補充蛋白質。',
    familyNote: '鱸魚富含 DHA，對青春期大腦發育與視力保健極有幫助。'
  },
  {
    id: '5',
    name: '味噌洋蔥烤蘆筍 (核心食材：洋蔥)',
    ingredients: ['蘆筍 1把', '洋蔥絲 少許', '味噌 1小匙', '味醂 1小匙'],
    steps: [
      '蘆筍與洋蔥絲拌入味噌與味醂。',
      '放入氣炸鍋鋪平。',
      '180度烤 8 分鐘，撒上芝麻。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'single', 'family'],
    nutrition: { calories: 95, grains: 0, protein: 0.5, vegetables: 1.8, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '蘆筍含天門冬胺酸，可幫助消除疲勞，適合課業繁重的孩子。'
  },
  {
    id: '6',
    name: '義式香料彩虹時蔬 (核心食材：青花菜、紅蘿蔔)',
    ingredients: ['青花菜 1/2朵', '紅蘿蔔塊 少許', '玉米筍 4支', '甜椒 1/2顆'],
    steps: [
      '蔬菜洗淨切塊，拌入橄欖油與香料。',
      '放入氣炸鍋內。',
      '180度烤 10-12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 130, grains: 0, protein: 0, vegetables: 2.5, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '繽紛的色彩能增加食慾，建議多種蔬菜混搭，攝取多元植化素。'
  },
  {
    id: '7',
    name: '鳳梨木耳紅蘿蔔 (核心食材：紅蘿蔔)',
    ingredients: ['新鮮鳳梨 150g', '紅蘿蔔片 少許', '黑木耳 2片', '薑絲 少許'],
    steps: [
      '鳳梨、紅蘿蔔切片，木耳切塊備用。',
      '電鍋外鍋 0.5 杯水，盤中放入所有食材。',
      '蒸至跳起拌勻即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 120, grains: 0, protein: 0, vegetables: 1.2, fruits: 1, dairy: 0, oils: 0.5 },
    elderlyNote: '木耳切小片，鳳梨選用熟透的更軟。',
    familyNote: '鳳梨酵素助消化，木耳富含多醣體，是全家人的天然免疫力守門員。'
  },
  {
    id: '8',
    name: '蒜香青花菜雞肉片 (核心食材：青花菜、雞肉)',
    ingredients: ['青花菜 1/2朵', '雞胸肉片 100g', '蒜末 1大匙'],
    steps: [
      '青花菜切小朵，雞肉片拌少許醬油。',
      '放入氣炸鍋，噴少許油。',
      '180度烤 10 分鐘，中途翻面。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['single', 'family'],
    nutrition: { calories: 230, grains: 0, protein: 3, vegetables: 1, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '青花菜富含維生素 C，搭配雞肉鐵質，吸收率更高，預防貧血。'
  },
  {
    id: '9',
    name: '洋蔥紅蘿蔔燉豆腐 (核心食材：洋蔥、紅蘿蔔、豆腐)',
    ingredients: ['板豆腐 1塊', '洋蔥 1/2顆', '紅蘿蔔絲 少許', '昆布醬油 2大匙'],
    steps: [
      '豆腐切塊，洋蔥切絲。',
      '放入電鍋內鍋，加入醬油、紅蘿蔔與半杯水。',
      '外鍋 1 杯水燉煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 190, grains: 0, protein: 2, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1 },
    elderlyNote: '豆腐軟嫩好消化，洋蔥燉至透明即化。',
    familyNote: '大豆異黃酮與優質植物蛋白，是青春期發育的重要營養來源。'
  },
  {
    id: '10',
    name: '氣炸鳳梨洋蔥雞翅 (核心食材：洋蔥)',
    ingredients: ['二節翅 4支', '洋蔥塊 少許', '鳳梨塊 50g', '蜂蜜 少許'],
    steps: [
      '雞翅以鹽、胡椒醃漬。',
      '與鳳梨塊、洋蔥一同放入氣炸鍋。',
      '200度烤 15 分鐘，最後刷上蜂蜜烤 2 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 320, grains: 0, protein: 2.5, vegetables: 0.3, fruits: 0.5, dairy: 0, oils: 2 },
    familyNote: '酸甜口味深受孩子喜愛，鳳梨能軟化肉質，口感更佳。'
  },
  {
    id: '11',
    name: '鮮菇蘆筍紅蘿蔔蒸蛋 (核心食材：紅蘿蔔)',
    ingredients: ['雞蛋 2顆', '紅蘿蔔碎 少許', '蘆筍 2支', '鴻喜菇 少許'],
    steps: [
      '蛋液加 1.5 倍水拌勻過篩。',
      '放入切段蘆筍、紅蘿蔔與菇類。',
      '電鍋外鍋 1 杯水，蓋子留縫蒸熟。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'single'],
    nutrition: { calories: 170, grains: 0, protein: 2, vegetables: 0.8, fruits: 0, dairy: 0, oils: 1 },
    elderlyNote: '蒸蛋口感滑嫩，是長輩攝取蛋白質的首選。',
    familyNote: '雞蛋含卵磷脂，有助於增強記憶力，是考試季的應援料理。'
  },
  {
    id: '14',
    name: '氣炸什錦時蔬 (核心食材：紅蘿蔔、青花菜)',
    ingredients: ['玉米筍 1盒', '紅蘿蔔 1/2條', '青花菜 少許', '橄欖油 1大匙'],
    steps: [
      '紅蘿蔔切條，與玉米筍、青花菜拌入橄欖油、鹽。',
      '放入氣炸鍋，180度烤 12 分鐘。',
      '中途翻動一次確保受熱均勻。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 120, grains: 0, protein: 0.5, vegetables: 2.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '多種蔬菜的自然甜味在氣炸後更濃郁，是孩子最愛的健康料理。'
  },
  {
    id: '15',
    name: '電鍋版紅燒豆腐時蔬 (核心食材：豆腐、紅蘿蔔)',
    ingredients: ['板豆腐 1塊', '紅蘿蔔 少許', '毛豆仁 少許', '醬油 1大匙'],
    steps: [
      '豆腐切塊，紅蘿蔔切片。',
      '所有食材放入內鍋，加醬油、糖與半杯水。',
      '外鍋 1 杯水，跳起後悶 5 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 190, grains: 0, protein: 2, vegetables: 0.8, fruits: 0, dairy: 0, oils: 1 },
    elderlyNote: '豆腐吸飽湯汁後軟嫩入味，毛豆仁建議壓碎更安全。',
    familyNote: '豆腐吸收了蔬菜的甜味，是下飯的好選擇。'
  },
  {
    id: '16',
    name: '氣炸地瓜堅果沙拉 (核心食材：地瓜)',
    ingredients: ['地瓜 1條', '綜合堅果 少許', '生菜 少許', '橄欖油 1小匙'],
    steps: [
      '地瓜洗淨切塊，拌入少許油。',
      '放入氣炸鍋，180度烤 15 分鐘。',
      '出爐後與生菜、堅果拌勻即可。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'single', 'family'],
    nutrition: { calories: 220, grains: 1.5, protein: 0.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '地瓜富含膳食纖維，搭配堅果能提供持久的飽足感。'
  },
  {
    id: '17',
    name: '電鍋版南瓜雞肉炊飯 (核心食材：南瓜、雞肉)',
    ingredients: ['白米 1杯', '南瓜塊 100g', '雞胸肉丁 100g', '香菇 2朵'],
    steps: [
      '白米洗淨，加入 1:1 的水。',
      '鋪上南瓜、雞丁與香菇絲。',
      '外鍋 1 杯水蒸熟，跳起後拌勻。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 350, grains: 2, protein: 2, vegetables: 1, fruits: 0, dairy: 0, oils: 0.5 },
    elderlyNote: '南瓜蒸熟後質地綿密，雞肉切丁更易咀嚼。',
    familyNote: '一鍋到底的懶人料理，營養均衡且省時。'
  },
  {
    id: '18',
    name: '氣炸味噌鮭魚佐蘆筍 (核心食材：鮭魚、蘆筍)',
    ingredients: ['鮭魚菲力 1片', '蘆筍 5支', '味噌醬 1大匙', '味醂 少許'],
    steps: [
      '鮭魚抹上味噌與味醂醃漬 10 分鐘。',
      '放入氣炸鍋，180度烤 10 分鐘. ',
      '最後 3 分鐘放入蘆筍同烤。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'japanese',
    tags: ['single', 'family'],
    nutrition: { calories: 280, grains: 0, protein: 3, vegetables: 1, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '鮭魚富含 Omega-3，對大腦發育非常有益。'
  },
  {
    id: '19',
    name: '電鍋版蒜泥白肉佐時蔬 (核心食材：豬肉、青花菜)',
    ingredients: ['五花肉片 150g', '青花菜 少許', '蒜末 1大匙', '醬油膏 少許'],
    steps: [
      '肉片與青花菜放入盤中。',
      '外鍋 1 杯水蒸熟。',
      '淋上蒜泥醬油膏即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 320, grains: 0, protein: 2.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1.5 },
    elderlyNote: '肉片蒸熟後質地較軟，搭配青花菜更均衡。',
    familyNote: '經典家常菜，用電鍋蒸煮能減少油煙。'
  },
  {
    id: '20',
    name: '氣炸五彩椒佐雞丁 (核心食材：雞肉、甜椒)',
    ingredients: ['紅黃甜椒 各1/2顆', '雞胸肉丁 100g', '橄欖油 少許'],
    steps: [
      '甜椒與雞丁切塊，拌入橄欖油、鹽與黑胡椒。',
      '放入氣炸鍋，180度烤 12 分鐘。',
      '中途翻動一次，保持色澤鮮艷且肉質熟透。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 220, grains: 0, protein: 2, vegetables: 2, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '富含維生素 C 與優質蛋白，能增強抵抗力，預防春季感冒。'
  },
  {
    id: '21',
    name: '台式高麗菜蛋餅',
    ingredients: ['高麗菜絲 50g', '雞蛋 1顆', '中筋麵粉 2大匙', '水 少許'],
    steps: [
      '麵粉與水調成糊，加入高麗菜絲與蛋拌勻。',
      '平盤刷油，放入電鍋。',
      '外鍋 0.5 杯水蒸熟，取出捲起。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 180, grains: 1, protein: 1, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '傳統台式早餐，加入大量高麗菜增加纖維質，開啟活力一天。'
  },
  {
    id: '22',
    name: '電鍋蒸芋頭 (佐紅棗)',
    ingredients: ['芋頭 200g', '紅棗 3顆', '鹽 少許'],
    steps: [
      '芋頭去皮切塊，紅棗洗淨。',
      '放入電鍋內鍋。',
      '外鍋 1.5 杯水蒸至鬆軟。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 180, grains: 2.5, protein: 0.5, vegetables: 0, fruits: 0, dairy: 0, oils: 0 },
    elderlyNote: '芋頭蒸至鬆軟易入口，富含膳食纖維。',
    familyNote: '天然的原型澱粉，提供穩定的能量來源。'
  },
  {
    id: '23',
    name: '香煎洋蔥馬鈴薯餅',
    ingredients: ['馬鈴薯 1顆', '洋蔥 1/4顆', '起司絲 少許'],
    steps: [
      '馬鈴薯刨絲，洋蔥切碎。',
      '拌入起司絲，鋪平於氣炸鍋。',
      '190度烤 15 分鐘至金黃酥脆。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 210, grains: 2, protein: 0.5, vegetables: 0.5, fruits: 0, dairy: 0.5, oils: 1 },
    familyNote: '馬鈴薯提供優質碳水，起司增加鈣質，是孩子喜愛的西式風味。'
  },
  {
    id: '24',
    name: '電鍋版南瓜瘦肉粥',
    ingredients: ['白米 0.5杯', '豬絞肉 50g', '南瓜 100g', '薑絲 少許'],
    steps: [
      '米洗淨，南瓜切小塊。',
      '與絞肉、薑絲放入內鍋，加 4 杯水。',
      '外鍋 1.5 杯水煮至跳起，悶 10 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 260, grains: 2.5, protein: 1.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 0.5 },
    elderlyNote: '南瓜燉煮後自然甜味十足，且質地軟綿。',
    familyNote: '南瓜富含維生素 A，對視力保健很有幫助。'
  },
  {
    id: '25',
    name: '氣炸香料雞腿排',
    ingredients: ['去骨雞腿排 1片', '迷迭香 少許', '橄欖油 1小匙'],
    steps: [
      '雞腿排以鹽、胡椒、迷迭香醃漬。',
      '皮朝上放入氣炸鍋。',
      '180度烤 12 分鐘，轉 200度烤 3 分鐘逼油。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 350, grains: 0, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '迷迭香具有獨特香氣，雞腿排富含蛋白質，支撐成長發育。'
  },
  {
    id: '26',
    name: '電鍋版奶油燉菜',
    ingredients: ['雞胸肉 100g', '紅蘿蔔 1/2條', '馬鈴薯 1/2顆', '牛奶 100ml'],
    steps: [
      '食材切塊放入內鍋，加少許水淹過一半。',
      '外鍋 1 杯水蒸熟。',
      '跳起後加入牛奶與少許麵粉水拌勻，再悶 5 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['family', 'elderly'],
    nutrition: { calories: 260, grains: 1, protein: 2, vegetables: 1, fruits: 0, dairy: 1, oils: 1 },
    elderlyNote: '燉菜質地軟滑，牛奶增加鈣質，非常適合長輩。',
    familyNote: '西式燉菜口感濃郁，能讓孩子攝取更多蔬菜。'
  },
  {
    id: '27',
    name: '氣炸南瓜塊',
    ingredients: ['南瓜 200g', '橄欖油 1小匙', '黑胡椒 少許'],
    steps: [
      '南瓜洗淨去籽切塊（可留皮）。',
      '拌入橄欖油與黑胡椒。',
      '放入氣炸鍋，190度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 120, grains: 1.5, protein: 0.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '原型食物的自然甜味，氣炸後外皮微脆，內裡鬆軟。'
  },
  {
    id: '28',
    name: '電鍋版香菇雞肉飯',
    ingredients: ['白米 1杯', '雞胸肉 100g', '乾香菇 2朵', '青江菜 2把'],
    steps: [
      '米洗淨，雞肉切丁，香菇切絲。',
      '所有食材放入內鍋（青江菜除外）。',
      '正常煮飯程序，跳起前 5 分鐘放青江菜。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['single', 'family'],
    nutrition: { calories: 380, grains: 3, protein: 2.5, vegetables: 1, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '使用新鮮雞肉取代加工肉品，營養更均衡且低負擔。'
  },
  {
    id: '29',
    name: '氣炸義式肉丸 (無麩質)',
    ingredients: ['豬絞肉 150g', '大燕麥片 1大匙', '起司粉 少許', '義式香料 少許'],
    steps: [
      '絞肉與燕麥片、香料拌勻，揉成小丸子。',
      '放入氣炸鍋。',
      '180度烤 12 分鐘，中途翻面。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 290, grains: 0.5, protein: 3, vegetables: 0, fruits: 0, dairy: 0.2, oils: 2 },
    familyNote: '一口一個的小肉丸，孩子最愛，可搭配番茄醬食用。'
  },
  {
    id: '30',
    name: '清蒸鳳梨豆醬魚',
    ingredients: ['鱈魚或鱸魚 1片', '鳳梨豆醬 1大匙', '薑絲 少許'],
    steps: [
      '魚片洗淨抹乾，鋪上鳳梨豆醬與薑絲。',
      '放入電鍋，外鍋 1 杯水。',
      '蒸熟後撒上蔥絲即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 210, grains: 0, protein: 3, vegetables: 0, fruits: 0.2, dairy: 0, oils: 1 },
    elderlyNote: '魚肉極其軟嫩，豆醬提鮮不重鹹。',
    familyNote: '傳統中式蒸魚，利用鳳梨豆醬的甘甜提升層次。'
  },
  {
    id: '31',
    name: '氣炸燕麥香蕉餅',
    ingredients: ['大燕麥片 50g', '熟香蕉 1根', '雞蛋 1顆'],
    steps: [
      '香蕉壓成泥，加入燕麥片與雞蛋拌勻。',
      '分成小圓餅狀放入氣炸鍋。',
      '160度烤 12 分鐘，中途翻面。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 210, grains: 1.5, protein: 1, vegetables: 0, fruits: 1, dairy: 0, oils: 0.5 },
    familyNote: '天然甜味來自香蕉，高纖燕麥提供持久飽足感。'
  },
  {
    id: '32',
    name: '電鍋版鮮菇瘦肉粥',
    ingredients: ['白米 0.5杯', '乾香菇 2朵', '肉絲 50g', '高麗菜絲 少許'],
    steps: [
      '香菇切絲，與米、肉絲放入內鍋，加 4 杯水。',
      '外鍋 1.5 杯水煮至跳起。',
      '加入高麗菜絲悶 5 分鐘，加鹽調味。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 250, grains: 2, protein: 1.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 0.5 },
    elderlyNote: '粥品軟爛易咀嚼，是傳統長輩最愛的早餐。'
  },
  {
    id: '33',
    name: '氣炸起司蛋馬鈴薯',
    ingredients: ['馬鈴薯 1顆', '雞蛋 1顆', '起司絲 少許'],
    steps: [
      '馬鈴薯切半挖凹，打入雞蛋。',
      '撒上起司絲，放入氣炸鍋。',
      '180度烤 15 分鐘至馬鈴薯熟軟。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 260, grains: 2, protein: 1.5, vegetables: 0, fruits: 0, dairy: 0.5, oils: 1 },
    familyNote: '使用馬鈴薯取代吐司，提供更優質的複合式碳水化合物。'
  },
  {
    id: '34',
    name: '電鍋蒸地瓜與水煮蛋',
    ingredients: ['地瓜 1條', '雞蛋 2顆'],
    steps: [
      '地瓜洗淨，與雞蛋一同放入電鍋。',
      '外鍋 1 杯水蒸熟。',
      '取出後地瓜去皮，雞蛋去殼即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'elderly', 'single'],
    nutrition: { calories: 240, grains: 2, protein: 2, vegetables: 0, fruits: 0, dairy: 0, oils: 0.5 },
    elderlyNote: '原型食物最健康，地瓜纖維助排便。'
  },
  {
    id: '35',
    name: '電鍋蒸玉米與毛豆',
    ingredients: ['新鮮玉米 1根', '毛豆仁 50g'],
    steps: [
      '玉米切段，與毛豆放入內鍋。',
      '外鍋 1 杯水蒸熟。',
      '取出後撒少許鹽即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'single', 'family'],
    nutrition: { calories: 180, grains: 2, protein: 1, vegetables: 0, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '原型食物最健康，玉米與毛豆提供豐富纖維與植物蛋白。'
  },
  {
    id: '36',
    name: '電鍋版紅豆紫米粥',
    ingredients: ['紫米 0.3杯', '紅豆 0.2杯', '黑糖 少許'],
    steps: [
      '紫米與紅豆洗淨浸泡 2 小時。',
      '放入內鍋加 5 杯水，外鍋 2 杯水。',
      '跳起後加入黑糖拌勻，悶 20 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 220, grains: 2, protein: 0.5, vegetables: 0, fruits: 0, dairy: 0, oils: 0 },
    elderlyNote: '紅豆補血，紫米高纖，溫熱飲用最舒暢。'
  },
  {
    id: '37',
    name: '氣炸酪梨蛋番茄',
    ingredients: ['大番茄 1顆', '酪梨 1/4顆', '雞蛋 1顆'],
    steps: [
      '番茄切半挖凹，放入酪梨片與蛋。',
      '放入氣炸鍋，170度烤 12 分鐘。',
      '撒上黑胡椒即可。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 220, grains: 0, protein: 1, vegetables: 1, fruits: 0.5, dairy: 0, oils: 2 },
    familyNote: '完全無澱粉的健康早餐，酪梨與蛋提供優質脂肪與蛋白質。'
  },
  {
    id: '38',
    name: '電鍋版麻婆豆腐 (天然提味)',
    ingredients: ['嫩豆腐 1盒', '豬絞肉 50g', '新鮮辣椒 1根', '醬油 1小匙', '蔥花 少許'],
    steps: [
      '豆腐切塊，辣椒切碎。',
      '與絞肉、醬油放入盤中。',
      '電鍋外鍋 1 杯水蒸熟。',
      '取出後撒上蔥花拌勻。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 240, grains: 0, protein: 2.5, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '下飯神菜，電鍋版免油煙，輕鬆搞定午餐。'
  },
  {
    id: '39',
    name: '氣炸雞肉溫沙拉',
    ingredients: ['雞胸肉 100g', '蘿蔓生菜 1把', '橄欖油 1大匙', '檸檬汁 少許'],
    steps: [
      '雞胸肉噴油，氣炸鍋 180度烤 12 分鐘切片。',
      '生菜洗淨切段，放入盤中。',
      '擺上雞肉，淋上橄欖油與檸檬汁。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 280, grains: 0.5, protein: 2.5, vegetables: 1.5, fruits: 0, dairy: 0.5, oils: 2 },
    familyNote: '清爽無負擔的午餐選擇，補充足夠蛋白質與纖維。'
  },
  {
    id: '40',
    name: '電鍋版蒜泥白肉 (清爽版)',
    ingredients: ['五花肉片 150g', '薑片 3片', '蒜泥 1大匙', '醬油 少許'],
    steps: [
      '肉片與薑片放入盤中。',
      '電鍋外鍋 1 杯水蒸熟。',
      '取出瀝乾水份，淋上蒜泥醬油。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 320, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '經典台式家常菜，蒸煮方式保留肉質鮮甜。'
  },
  {
    id: '41',
    name: '氣炸鮭魚排',
    ingredients: ['鮭魚排 1片', '檸檬 1/4顆', '黑胡椒 少許'],
    steps: [
      '鮭魚排抹鹽與黑胡椒。',
      '放入氣炸鍋，180度烤 12-15 分鐘。',
      '食用前擠上檸檬汁。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['elderly', 'family', 'single'],
    nutrition: { calories: 280, grains: 0, protein: 3.5, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    elderlyNote: '鮭魚富含 Omega-3，對心血管健康極有幫助。'
  },
  {
    id: '42',
    name: '氣炸迷迭香羊排',
    ingredients: ['小羊排 2支', '迷迭香 少許', '蒜末 少許'],
    steps: [
      '羊排以鹽、胡椒、迷迭香、蒜末醃 20 分鐘。',
      '放入氣炸鍋，190度烤 12 分鐘。',
      '中途翻面一次。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 340, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '羊排肉質鮮嫩，迷迭香能有效去除羊羶味。'
  },
  {
    id: '43',
    name: '氣炸海鮮拼盤',
    ingredients: ['蝦子 4隻', '透抽 1/2隻', '蛤蜊 6顆'],
    steps: [
      '海鮮洗淨抹乾，噴少許橄欖油。',
      '放入氣炸鍋，180度烤 10 分鐘。',
      '蛤蜊開口即可取出。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 220, grains: 0, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '豐富的海鮮提供多樣微量元素，是豪華的晚餐選擇。'
  },
  {
    id: '44',
    name: '氣炸蔬菜歐姆蛋',
    ingredients: ['雞蛋 3顆', '菠菜碎 少許', '蘑菇片 少許', '起司絲 少許'],
    steps: [
      '蛋液與蔬菜、起司拌勻。',
      '倒入氣炸鍋專用烘焙紙模。',
      '170度烤 12 分鐘至凝固。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 260, grains: 0, protein: 3, vegetables: 1, fruits: 0, dairy: 0.5, oils: 1.5 },
    familyNote: '將蔬菜藏在蛋裡，是讓孩子吃下綠色蔬菜的好方法。'
  },
  {
    id: '45',
    name: '氣炸香草豬排 (燕麥裹粉)',
    ingredients: ['豬里肌排 1片', '綜合香料 少許', '大燕麥片 少許'],
    steps: [
      '豬排拍鬆，沾裹香料與碎燕麥片。',
      '放入氣炸鍋，噴少許油。',
      '180度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 310, grains: 0.5, protein: 3.5, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '外酥內嫩的豬排，氣炸方式比油炸更健康。'
  },
  {
    id: '46',
    name: '營養五穀漿',
    ingredients: ['五穀米 0.5杯', '水 3杯', '冰糖 少許'],
    steps: [
      '五穀米洗淨浸泡 4 小時。',
      '放入電鍋內鍋加水，外鍋 2 杯水蒸熟。',
      '取出放涼後倒入果汁機打成漿，依口味加糖。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 150, grains: 2, protein: 0.5, vegetables: 0, fruits: 0, dairy: 0, oils: 0 },
    elderlyNote: '打成漿後極易吸收，是長輩補充能量的良品。'
  },
  {
    id: '47',
    name: '蒸銀絲卷佐煉乳',
    ingredients: ['銀絲卷 2條', '煉乳 少許'],
    steps: [
      '銀絲卷放入電鍋。',
      '外鍋 0.5 杯水蒸熱。',
      '取出後淋上煉乳即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 220, grains: 2.5, protein: 0.5, vegetables: 0, fruits: 0, dairy: 0.5, oils: 1 },
    familyNote: '經典的中式點心早餐，孩子最愛的甜蜜滋味。'
  },
  {
    id: '48',
    name: '桂圓紅棗小米粥',
    ingredients: ['小米 0.5杯', '桂圓 10g', '紅棗 5顆'],
    steps: [
      '小米洗淨，紅棗去籽。',
      '所有食材放入內鍋加 4 杯水。',
      '外鍋 1.5 杯水煮至跳起，悶 10 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 190, grains: 2, protein: 0.5, vegetables: 0, fruits: 0.5, dairy: 0, oils: 0 },
    elderlyNote: '小米粥溫潤養胃，桂圓紅棗補氣血。'
  },
  {
    id: '49',
    name: '鮮蔬蒸餃',
    ingredients: ['冷凍蒸餃 10顆', '高麗菜葉 1片'],
    steps: [
      '電鍋內鋪上高麗菜葉。',
      '放上蒸餃，外鍋 1 杯水。',
      '蒸至跳起即可食用。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 300, grains: 2.5, protein: 1.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '快速方便的早餐選擇，高麗菜葉可防止沾黏並增加甜味。'
  },
  {
    id: '50',
    name: '芝麻核桃糊',
    ingredients: ['黑芝麻粉 3大匙', '核桃 5顆', '白米 2大匙'],
    steps: [
      '白米洗淨加水，電鍋外鍋 1 杯水煮成稀飯。',
      '與芝麻粉、核桃放入果汁機打碎。',
      '回鍋加熱至微滾即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 250, grains: 1, protein: 1, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    elderlyNote: '黑髮養生，核桃補腦，質地細緻好吞嚥。'
  },
  {
    id: '51',
    name: '蒸地瓜葉蛋餅',
    ingredients: ['地瓜葉 1把', '雞蛋 2顆', '全麥麵粉 2大匙'],
    steps: [
      '地瓜葉切碎，與蛋、麵粉拌勻成糊。',
      '平盤刷油倒入蛋糊。',
      '電鍋外鍋 0.5 杯水蒸熟捲起。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 210, grains: 1, protein: 2, vegetables: 1, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '將深綠色蔬菜融入蛋餅，營養滿分。'
  },
  {
    id: '52',
    name: '藜麥雞肉粥',
    ingredients: ['白米 0.3杯', '藜麥 0.2杯', '雞胸肉 50g'],
    steps: [
      '米與藜麥洗淨，雞肉切絲。',
      '放入內鍋加 4 杯水，外鍋 1.5 杯水。',
      '跳起後加鹽調味即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['elderly', 'family', 'single'],
    nutrition: { calories: 280, grains: 2.5, protein: 2, vegetables: 0, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '藜麥是超級食物，提供完整氨基酸。'
  },
  {
    id: '53',
    name: '蒸饅頭夾蛋',
    ingredients: ['全麥饅頭 1個', '雞蛋 1顆'],
    steps: [
      '饅頭放入電鍋蒸熱。',
      '雞蛋打散放入小碟子同蒸。',
      '饅頭切開夾入蒸蛋即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 260, grains: 3, protein: 1, vegetables: 0, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '簡單紮實的早餐，全麥饅頭更健康。'
  },
  {
    id: '54',
    name: '枸杞山藥粥',
    ingredients: ['山藥 100g', '白米 0.5杯', '枸杞 少許'],
    steps: [
      '山藥去皮切小塊，米洗淨。',
      '放入內鍋加 4 杯水，撒上枸杞。',
      '外鍋 1.5 杯水煮至跳起。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 230, grains: 2.5, protein: 0.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 0 },
    elderlyNote: '山藥健脾胃，枸杞明目，粥品溫潤。'
  },
  {
    id: '56',
    name: '瓜仔肉燥飯',
    ingredients: ['豬絞肉 200g', '花瓜 50g', '醬油 2大匙', '白米 2杯'],
    steps: [
      '花瓜切碎，與絞肉、醬油、少許糖拌勻。',
      '放入內鍋，外鍋 1.5 杯水蒸熟。',
      '淋在剛煮好的白飯上即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 450, grains: 3, protein: 3, vegetables: 0.2, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '超級下飯的家常菜，一次可以做多份。'
  },
  {
    id: '58',
    name: '豆豉蒸排骨',
    ingredients: ['小排骨 200g', '豆豉 1大匙', '蒜末 1大匙'],
    steps: [
      '排骨洗淨，與豆豉、蒜末、少許米酒拌勻。',
      '放入盤中，外鍋 1.5 杯水蒸至軟嫩。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 350, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 3 },
    familyNote: '經典粵式蒸菜，鹹香入味。'
  },
  {
    id: '59',
    name: '樹子蒸鱈魚',
    ingredients: ['鱈魚 1片', '樹子(破布子) 1大匙', '薑絲 少許'],
    steps: [
      '鱈魚洗淨鋪上樹子與薑絲。',
      '外鍋 1 杯水蒸熟。',
      '撒上蔥花即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 240, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    elderlyNote: '鱈魚肉質極細，樹子甘甜開胃。'
  },
  {
    id: '60',
    name: '咖哩雞肉燉飯',
    ingredients: ['白米 1杯', '雞腿肉 100g', '馬鈴薯 1/2顆', '咖哩塊 1塊'],
    steps: [
      '食材切塊，米洗淨。',
      '所有食材與咖哩塊放入內鍋，加水至刻度 1。',
      '正常煮飯程序，跳起後拌勻。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 420, grains: 3, protein: 2, vegetables: 0.5, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '一鍋到底，濃郁咖哩深受孩子喜愛。'
  },
  {
    id: '61',
    name: '蒸蛋佐蛤蜊',
    ingredients: ['雞蛋 2顆', '蛤蜊 6顆', '蔥花 少許'],
    steps: [
      '蛋液加 1.5 倍水拌勻過篩。',
      '放入蛤蜊，外鍋 1 杯水蒸熟。',
      '蓋子留縫可使蛋面平滑。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['elderly', 'family', 'single'],
    nutrition: { calories: 180, grains: 0, protein: 2.5, vegetables: 0, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '蛤蜊的鮮味完全融入蒸蛋中。'
  },
  {
    id: '62',
    name: '蒜泥白肉 (電鍋版)',
    ingredients: ['五花肉片 150g', '薑片 3片', '蒜泥 1大匙'],
    steps: [
      '肉片鋪平在盤中，放上薑片。',
      '外鍋 1 杯水蒸熟。',
      '淋上蒜泥醬油即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 320, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '簡單快速的蛋白質來源。'
  },
  {
    id: '63',
    name: '蒸鑲豆腐',
    ingredients: ['板豆腐 1塊', '豬絞肉 50g', '蝦仁 3隻'],
    steps: [
      '豆腐切塊挖小洞，填入拌勻的絞肉與蝦仁。',
      '放入盤中，外鍋 1 杯水蒸熟。',
      '淋上薄鹽醬油。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 210, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    elderlyNote: '豆腐與肉餡皆軟嫩，營養豐富。'
  },
  {
    id: '65',
    name: '蒸什錦時蔬',
    ingredients: ['玉米筍 4支', '紅蘿蔔片 少許', '青花菜 1/2朵', '香菇 2朵'],
    steps: [
      '蔬菜洗淨切好放入盤中。',
      '外鍋 0.5 杯水蒸熟。',
      '取出後拌入少許鹽與橄欖油。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 110, grains: 0, protein: 0.5, vegetables: 2.5, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '保留蔬菜原味與營養的最佳烹調法。'
  },
  {
    id: '68',
    name: '蒸全雞 (手撕雞)',
    ingredients: ['小土雞 1隻', '蔥段 少許', '薑片 少許'],
    steps: [
      '雞洗淨抹鹽，肚內塞入蔥薑。',
      '放入大盤中，外鍋 2 杯水蒸熟。',
      '取出放涼後撕成絲，淋上雞油。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['family'],
    nutrition: { calories: 450, grains: 0, protein: 6, vegetables: 0, fruits: 0, dairy: 0, oils: 3 },
    familyNote: '全家共享的美味，雞油可拌飯。'
  },
  {
    id: '69',
    name: '佛跳牆 (簡易電鍋版)',
    ingredients: ['排骨酥 5塊', '芋頭 100g', '鳥蛋 4顆', '大白菜 1/4顆'],
    steps: [
      '大白菜鋪底，放入其餘食材。',
      '加入高湯至 8 分滿。',
      '外鍋 2 杯水燉煮至跳起。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['family'],
    nutrition: { calories: 420, grains: 1.5, protein: 3, vegetables: 1.5, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '豐富食材匯聚一鍋，節慶感十足。'
  },
  {
    id: '70',
    name: '蒸臘味飯',
    ingredients: ['白米 1杯', '臘腸 1根', '肝腸 1根'],
    steps: [
      '米洗淨加水，臘腸鋪在米上。',
      '正常煮飯程序。',
      '跳起後取出臘腸切片，再放回拌勻。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 480, grains: 3, protein: 2, vegetables: 0, fruits: 0, dairy: 0, oils: 3 },
    familyNote: '臘味的油脂滲入米飯，香氣撲鼻。'
  },
  {
    id: '72',
    name: '蒸肉燥茄子',
    ingredients: ['茄子 2根', '肉燥 2大匙'],
    steps: [
      '茄子切段放入盤中。',
      '外鍋 0.5 杯水蒸熟（保持紫色可加少許醋）。',
      '淋上熱好的肉燥即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['elderly', 'family', 'single'],
    nutrition: { calories: 180, grains: 0, protein: 1, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1.5 },
    elderlyNote: '茄子蒸軟後極易入口。'
  },
  {
    id: '74',
    name: '蒸冬瓜肉餅',
    ingredients: ['豬絞肉 150g', '醃冬瓜 1小塊', '薑末 少許'],
    steps: [
      '醃冬瓜切碎，與絞肉、薑末拌勻。',
      '平鋪於盤中，外鍋 1 杯水蒸熟。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 280, grains: 0, protein: 2.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 2 },
    elderlyNote: '古早味料理，軟嫩鹹香。'
  },
  {
    id: '76',
    name: '氣炸法式吐司',
    ingredients: ['吐司 2片', '雞蛋 1顆', '牛奶 50ml'],
    steps: [
      '蛋與牛奶拌勻，吐司浸泡至吸飽蛋液。',
      '放入氣炸鍋，180度烤 8 分鐘。',
      '中途翻面，出爐淋上蜂蜜。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 280, grains: 2, protein: 1.5, vegetables: 0, fruits: 0, dairy: 0.5, oils: 1 },
    familyNote: '免煎免油煙，外酥內軟。'
  },
  {
    id: '77',
    name: '氣炸太陽蛋吐司',
    ingredients: ['吐司 1片', '雞蛋 1顆', '起司絲 少許'],
    steps: [
      '吐司中間壓凹，打入雞蛋。',
      '四周撒上起司絲。',
      '氣炸鍋 170度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 240, grains: 1, protein: 1.5, vegetables: 0, fruits: 0, dairy: 0.5, oils: 1 },
    familyNote: '視覺與味覺的雙重享受。'
  },
  {
    id: '78',
    name: '氣炸香蕉燕麥餅',
    ingredients: ['熟香蕉 1根', '大燕麥片 50g', '巧克力豆 少許'],
    steps: [
      '香蕉壓泥，加入燕麥與巧克力豆拌勻。',
      '分成小餅狀放入氣炸鍋。',
      '160度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 220, grains: 1.5, protein: 0.5, vegetables: 0, fruits: 1, dairy: 0, oils: 0.5 },
    familyNote: '天然甜味，高纖健康。'
  },
  {
    id: '79',
    name: '氣炸起司火腿三明治',
    ingredients: ['吐司 2片', '火腿 1片', '起司片 1片'],
    steps: [
      '吐司夾入火腿與起司。',
      '表面噴少許油。',
      '氣炸鍋 180度烤 5 分鐘至酥脆。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 310, grains: 2, protein: 2, vegetables: 0, fruits: 0, dairy: 1, oils: 1.5 },
    familyNote: '熱壓三明治的口感。'
  },
  {
    id: '80',
    name: '氣炸藍莓瑪芬',
    ingredients: ['鬆餅粉 100g', '雞蛋 1顆', '牛奶 30ml', '藍莓 少許'],
    steps: [
      '粉、蛋、奶拌勻，加入藍莓。',
      '倒入小紙杯，放入氣炸鍋。',
      '160度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family'],
    nutrition: { calories: 280, grains: 2, protein: 1, vegetables: 0, fruits: 0.5, dairy: 0.5, oils: 1 },
    familyNote: '現烤瑪芬，開啟優雅早晨。'
  },
  {
    id: '81',
    name: '氣炸薯餅佐青花菜',
    ingredients: ['冷凍薯餅 2片', '青花菜 少許'],
    steps: [
      '薯餅與青花菜直接放入氣炸鍋。',
      '190度烤 12 分鐘。',
      '中途翻面至金黃，青花菜熟透即可。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'single'],
    nutrition: { calories: 240, grains: 2, protein: 0, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '比油炸更清爽。'
  },
  {
    id: '82',
    name: '氣炸酪梨蛋',
    ingredients: ['酪梨 1/2個', '雞蛋 1顆'],
    steps: [
      '酪梨去籽，洞口打入雞蛋。',
      '撒上鹽與黑胡椒。',
      '氣炸鍋 180度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'single'],
    nutrition: { calories: 220, grains: 0, protein: 1.5, vegetables: 0, fruits: 0.5, dairy: 0, oils: 2 },
    familyNote: '優質脂肪與蛋白的組合。'
  },
  {
    id: '83',
    name: '氣炸蘋果派 (簡易版)',
    ingredients: ['吐司 2片', '蘋果丁 少許', '肉桂粉 少許'],
    steps: [
      '吐司去邊壓平，包入拌了糖與肉桂的蘋果丁。',
      '邊緣壓緊，表面刷油。',
      '氣炸鍋 180度烤 8 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family'],
    nutrition: { calories: 210, grains: 1.5, protein: 0.5, vegetables: 0, fruits: 0.8, dairy: 0, oils: 0.5 },
    familyNote: '溫熱的蘋果內餡。'
  },
  {
    id: '84',
    name: '氣炸德式香腸',
    ingredients: ['德式香腸 2根', '花椰菜 少許'],
    steps: [
      '香腸劃刀，與花椰菜一同放入。',
      '氣炸鍋 180度烤 8 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 260, grains: 0, protein: 2, vegetables: 0.5, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '脆口多汁。'
  },
  {
    id: '85',
    name: '氣炸堅果燕麥片',
    ingredients: ['大燕麥片 100g', '綜合堅果 30g', '蜂蜜 2大匙'],
    steps: [
      '燕麥與堅果拌入蜂蜜。',
      '鋪平在氣炸鍋內（用烘焙紙）。',
      '150度烤 15 分鐘，每 5 分鐘翻動。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 320, grains: 2, protein: 1, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '自製 Granola，搭配牛奶或優格。'
  },
  {
    id: '86',
    name: '氣炸雞塊 (自製)',
    ingredients: ['雞胸肉 150g', '蛋液 少許', '麵包粉 少許'],
    steps: [
      '雞肉切塊醃漬，依序沾蛋液與麵包粉。',
      '放入氣炸鍋，噴少許油。',
      '190度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 310, grains: 1, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '孩子最愛的雞塊，自製更安心。'
  },
  {
    id: '87',
    name: '氣炸鯖魚佐洋蔥',
    ingredients: ['薄鹽鯖魚 1片', '洋蔥絲 少許', '檸檬 1/4顆'],
    steps: [
      '鯖魚皮朝上放入氣炸鍋，旁邊鋪上洋蔥絲。',
      '190度烤 12 分鐘。',
      '出爐擠上檸檬汁，搭配洋蔥食用。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'japanese',
    tags: ['elderly', 'family', 'single'],
    nutrition: { calories: 260, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '富含魚油，簡單美味。'
  },
  {
    id: '88',
    name: '氣炸椒鹽蝦',
    ingredients: ['白蝦 8隻', '蒜末 1大匙', '胡椒鹽 少許'],
    steps: [
      '蝦洗淨剪鬚，拌入蒜末與油。',
      '放入氣炸鍋，180度烤 10 分鐘。',
      '撒上胡椒鹽即可。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 180, grains: 0, protein: 3.5, vegetables: 0, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '香脆可口。'
  },
  {
    id: '89',
    name: '氣炸雞肉捲',
    ingredients: ['雞腿排 1片', '蘆筍 3支', '紅蘿蔔條 3條'],
    steps: [
      '雞腿排包入蘆筍與紅蘿蔔捲起。',
      '用棉繩固定或牙籤封口。',
      '氣炸鍋 180度烤 18 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 320, grains: 0, protein: 3.5, vegetables: 0.8, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '切開後色彩繽紛。'
  },
  {
    id: '90',
    name: '氣炸豆腐塊佐蔥花',
    ingredients: ['板豆腐 1塊', '蔥花 少許', '太白粉 少許'],
    steps: [
      '豆腐切塊沾薄薄一層粉。',
      '放入氣炸鍋，噴油。',
      '200度烤 15 分鐘至表皮酥脆，撒上蔥花。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 160, grains: 0.2, protein: 2, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '外酥內嫩，搭配甜辣醬。'
  },
  {
    id: '91',
    name: '氣炸四季豆',
    ingredients: ['四季豆 1把', '蒜末 少許'],
    steps: [
      '四季豆洗淨去頭尾，拌油與蒜末。',
      '氣炸鍋 180度烤 8-10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 90, grains: 0, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '乾煸四季豆的口感。'
  },
  {
    id: '92',
    name: '氣炸甜不辣四季豆',
    ingredients: ['甜不辣 4片', '四季豆 1把', '胡椒粉 少許'],
    steps: [
      '甜不辣切條，四季豆去頭尾切段。',
      '氣炸鍋 180度烤 10 分鐘至膨脹。',
      '撒上胡椒粉拌勻。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['single', 'family'],
    nutrition: { calories: 220, grains: 1.5, protein: 1, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '下午茶或配菜首選。'
  },
  {
    id: '93',
    name: '氣炸洋蔥圈',
    ingredients: ['洋蔥 1顆', '蛋液 少許', '麵包粉 少許'],
    steps: [
      '洋蔥切圈，依序沾粉、蛋、麵包粉。',
      '氣炸鍋 180度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['vegetarian', 'family'],
    nutrition: { calories: 180, grains: 1, protein: 0.5, vegetables: 1, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '自製洋蔥圈，甜味十足。'
  },
  {
    id: '94',
    name: '氣炸牛排丁',
    ingredients: ['牛排 150g', '蒜片 少許'],
    steps: [
      '牛排切丁，與蒜片拌油。',
      '氣炸鍋 200度烤 8 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 320, grains: 0, protein: 3.5, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '骰子牛排，鎖住肉汁。'
  },
  {
    id: '95',
    name: '氣炸杏鮑菇玉米筍',
    ingredients: ['杏鮑菇 2根', '玉米筍 4支', '椒鹽粉 少許'],
    steps: [
      '杏鮑菇切塊，與玉米筍一同噴油。',
      '氣炸鍋 180度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 80, grains: 0, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '多汁彈牙。'
  },
  {
    id: '96',
    name: '氣炸脆皮五花肉',
    ingredients: ['五花肉 300g', '五香粉 少許'],
    steps: [
      '肉皮戳洞抹鹽，肉身抹五香粉。',
      '皮朝上放入氣炸鍋。',
      '180度烤 20 分鐘，轉 200度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['family'],
    nutrition: { calories: 520, grains: 0, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 5 },
    familyNote: '皮脆肉嫩，油脂全逼出。'
  },
  {
    id: '97',
    name: '氣炸烤雞腿佐洋蔥',
    ingredients: ['大雞腿 1隻', '洋蔥塊 少許', '醬油膏 1大匙'],
    steps: [
      '雞腿抹醬醃漬，與洋蔥塊一同放入。',
      '氣炸鍋 180度烤 20 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 380, grains: 0, protein: 4.5, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '晚餐主菜首選。'
  },
  {
    id: '98',
    name: '氣炸肋排',
    ingredients: ['豬肋排 3支', '烤肉醬 少許'],
    steps: [
      '肋排抹醬醃漬。',
      '氣炸鍋 180度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 420, grains: 0, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 3.5 },
    familyNote: '美式風味。'
  },
  {
    id: '99',
    name: '氣炸紙包魚',
    ingredients: ['鯛魚片 1片', '蛤蜊 4顆', '絲瓜片 少許'],
    steps: [
      '烘焙紙包入所有食材與少許米酒。',
      '氣炸鍋 180度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['elderly', 'family', 'single'],
    nutrition: { calories: 210, grains: 0, protein: 3, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1 },
    elderlyNote: '鮮甜多汁，無油煙。'
  },
  {
    id: '100',
    name: '氣炸烤全雞',
    ingredients: ['春雞 1隻', '香料鹽 少許'],
    steps: [
      '全雞抹鹽醃漬。',
      '氣炸鍋 160度烤 30 分鐘，轉 200度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['family'],
    nutrition: { calories: 650, grains: 0, protein: 8, vegetables: 0, fruits: 0, dairy: 0, oils: 4 },
    familyNote: '節慶大餐。'
  },
  {
    id: '101',
    name: '氣炸羊小排佐甜椒',
    ingredients: ['羊小排 2支', '甜椒塊 少許', '孜然粉 少許'],
    steps: [
      '羊排抹孜然粉，與甜椒塊一同放入。',
      '氣炸鍋 190度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 340, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '孜然香氣十足。'
  },
  {
    id: '102',
    name: '氣炸海鮮拼盤',
    ingredients: ['蝦、干貝、透抽 各少許'],
    steps: [
      '海鮮拌油與鹽。',
      '氣炸鍋 180度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 240, grains: 0, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '豐富海味。'
  },
  {
    id: '103',
    name: '氣炸培根捲',
    ingredients: ['培根 3片', '金針菇 1把'],
    steps: [
      '培根捲入金針菇。',
      '氣炸鍋 180度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 280, grains: 0, protein: 1.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '鹹香脆口。'
  },
  {
    id: '104',
    name: '氣炸香料豬里肌佐紅蘿蔔',
    ingredients: ['豬里肌 150g', '紅蘿蔔塊 少許', '義式香料 少許'],
    steps: [
      '豬肉抹香料，與紅蘿蔔塊一同放入。',
      '氣炸鍋 180度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 290, grains: 0, protein: 3.5, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '低脂高蛋白。'
  },
  {
    id: '105',
    name: '氣炸蒜香牛排佐蘆筍',
    ingredients: ['牛排 1片', '蘆筍 5支', '蒜片 少許'],
    steps: [
      '牛排抹鹽與油，與蘆筍一同放入。',
      '氣炸鍋 200度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 350, grains: 0, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '牛排館等級。'
  },
  {
    id: '106',
    name: '日式味噌豆腐湯',
    ingredients: ['嫩豆腐 1/2盒', '海帶芽 少許', '味噌 1.5大匙', '蔥花 少許'],
    steps: [
      '內鍋加水 3 杯，放入海帶芽。',
      '外鍋 0.5 杯水煮滾。',
      '跳起後加入豆腐塊，並將味噌用熱水化開拌入，撒上蔥花。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'japanese',
    tags: ['vegetarian', 'elderly', 'single'],
    nutrition: { calories: 80, grains: 0, protein: 1, vegetables: 0.2, fruits: 0, dairy: 0, oils: 0.5 },
    elderlyNote: '溫熱的味噌湯能喚醒腸胃，豆腐軟嫩好吸收。'
  },
  {
    id: '107',
    name: '日式親子丼 (電鍋版)',
    ingredients: ['雞腿肉 100g', '洋蔥 1/4顆', '雞蛋 1顆', '味醂 1大匙', '白飯 1碗'],
    steps: [
      '洋蔥切絲，雞肉切小塊。',
      '放入盤中加入味醂、醬油與少許水。',
      '外鍋 1 杯水蒸熟，跳起前 2 分鐘淋上蛋液悶熟，淋在飯上。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'japanese',
    tags: ['family', 'single'],
    nutrition: { calories: 420, grains: 3, protein: 2.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '甜甜鹹鹹的口感，是孩子最愛的日式午餐。'
  },
  {
    id: '108',
    name: '日式馬鈴薯燉肉',
    ingredients: ['豬肉片 100g', '馬鈴薯 1顆', '紅蘿蔔 1/2條', '蒟蒻絲 少許'],
    steps: [
      '食材切塊放入內鍋。',
      '加入醬油、味醂、糖與水淹過一半。',
      '外鍋 1.5 杯水燉煮至跳起，悶 15 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'japanese',
    tags: ['elderly', 'family'],
    nutrition: { calories: 350, grains: 2, protein: 2, vegetables: 1, fruits: 0, dairy: 0, oils: 1.5 },
    elderlyNote: '馬鈴薯與紅蘿蔔燉至鬆軟，肉片建議選用薄片更易咀嚼。'
  },
  {
    id: '109',
    name: '鹹豆漿佐蒸饅頭',
    ingredients: ['無糖豆漿 300ml', '白醋 1小匙', '菜脯 少許', '小饅頭 2個'],
    steps: [
      '豆漿放入內鍋，外鍋 0.5 杯水煮熱（不可大滾）。',
      '碗中放醋、菜脯、蝦皮，沖入熱豆漿使其凝固。',
      '饅頭同時間在電鍋上方蒸熱。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 280, grains: 2, protein: 2, vegetables: 0.2, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '傳統中式早餐，豐富的植物性蛋白。'
  },
  {
    id: '110',
    name: '梅乾菜蒸肉',
    ingredients: ['豬絞肉 150g', '梅乾菜 30g', '蒜末 少許'],
    steps: [
      '梅乾菜洗淨切碎，與絞肉、蒜末拌勻。',
      '放入盤中壓平。',
      '電鍋外鍋 1.5 杯水蒸熟。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 320, grains: 0, protein: 2.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '極其下飯的經典客家菜。'
  },
  {
    id: '113',
    name: '鮭魚野菜炊飯',
    ingredients: ['白米 1杯', '鮭魚菲力 100g', '鴻喜菇 少許', '毛豆 少許'],
    steps: [
      '米洗淨加水，鋪上鮭魚、菇類與毛豆。',
      '正常煮飯程序。',
      '跳起後將鮭魚皮除去，肉壓碎與飯拌勻。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'japanese',
    tags: ['elderly', 'family', 'single'],
    nutrition: { calories: 380, grains: 3, protein: 2.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1.5 },
    elderlyNote: '鮭魚油脂豐富且肉質軟，拌入飯中極易入口。'
  },
  {
    id: '114',
    name: '日式鹽烤鯖魚',
    ingredients: ['鯖魚 1片', '鹽 少許', '檸檬 1/4顆'],
    steps: [
      '鯖魚洗淨抹乾，兩面抹薄鹽。',
      '放入氣炸鍋，皮朝上。',
      '190度烤 12 分鐘，出爐擠上檸檬汁。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'japanese',
    tags: ['elderly', 'single'],
    nutrition: { calories: 260, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    elderlyNote: '鯖魚富含 DHA 與 EPA，是長輩護心的好食材。'
  },
  {
    id: '115',
    name: '日式唐揚雞 (氣炸版)',
    ingredients: ['雞腿肉塊 200g', '醬油 1大匙', '蒜泥 少許', '太白粉 少許'],
    steps: [
      '雞肉以醬油、蒜泥醃 15 分鐘。',
      '沾上一層薄薄的太白粉，靜置 5 分鐘回潮。',
      '氣炸鍋 180度烤 12 分鐘，最後 200度烤 2 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'japanese',
    tags: ['family', 'single'],
    nutrition: { calories: 350, grains: 0.5, protein: 3.5, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '外酥內嫩，比油炸更健康。'
  },
  {
    id: '116',
    name: '日式炸豬排 (氣炸版)',
    ingredients: ['豬里肌排 1片', '蛋液 少許', '麵包粉 少許'],
    steps: [
      '豬排拍鬆抹鹽，依序沾麵粉、蛋液、麵包粉。',
      '噴上少許油。',
      '氣炸鍋 180度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'japanese',
    tags: ['family', 'single'],
    nutrition: { calories: 380, grains: 1, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 3 },
    familyNote: '搭配高麗菜絲食用，清爽不油膩。'
  },
  {
    id: '117',
    name: '氣炸蔥油餅',
    ingredients: ['冷凍蔥油餅 1片', '雞蛋 1顆'],
    steps: [
      '蔥油餅直接放入氣炸鍋。',
      '180度烤 8 分鐘至膨脹酥脆。',
      '取出打入蛋再烤 2 分鐘即可。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 320, grains: 2.5, protein: 1, vegetables: 0.2, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '免顧火，快速完成香脆早餐。'
  },
  {
    id: '118',
    name: '氣炸脆皮燒肉',
    ingredients: ['五花肉 300g', '五香粉 少許', '粗鹽 少許'],
    steps: [
      '肉皮戳洞，肉身抹五香粉。',
      '皮朝上鋪滿粗鹽。',
      '氣炸鍋 180度烤 30 分鐘，敲掉鹽再以 200度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['family'],
    nutrition: { calories: 550, grains: 0, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 5 },
    familyNote: '港式餐廳等級的脆皮口感。'
  },
  {
    id: '119',
    name: '左宗棠雞 (氣炸版)',
    ingredients: ['雞胸肉丁 200g', '乾辣椒 少許', '糖醋醬汁 少許'],
    steps: [
      '雞丁沾粉氣炸 180度 12 分鐘。',
      '取出拌入醬汁與乾辣椒。',
      '再回鍋 200度烤 2 分鐘收汁。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['family', 'single'],
    nutrition: { calories: 320, grains: 0.5, protein: 3.5, vegetables: 0, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '酸甜微辣，非常開胃。'
  },
  {
    id: '120',
    name: '氣炸酪梨培根蛋',
    ingredients: ['酪梨 1/2個', '培根 1片', '雞蛋 1顆'],
    steps: [
      '酪梨去籽，洞口鋪上培根碎。',
      '打入雞蛋。',
      '氣炸鍋 170度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 280, grains: 0, protein: 2, vegetables: 0, fruits: 0.5, dairy: 0, oils: 2.5 },
    familyNote: '低碳高蛋白的能量早餐。'
  },
  {
    id: '121',
    name: '義式香料烤雞腿',
    ingredients: ['去骨雞腿排 1片', '義式香料 少許', '橄欖油 少許'],
    steps: [
      '雞腿排抹鹽與香料醃漬。',
      '皮朝上放入氣炸鍋。',
      '180度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['family', 'single'],
    nutrition: { calories: 350, grains: 0, protein: 4, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '皮脆多汁，全家人都愛。'
  },
  {
    id: '122',
    name: '氣炸羊排佐薄荷',
    ingredients: ['小羊排 2支', '薄荷葉 少許', '蒜末 少許'],
    steps: [
      '羊排抹鹽、胡椒、蒜末。',
      '氣炸鍋 190度烤 12 分鐘。',
      '出爐搭配薄荷葉碎。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['single', 'family'],
    nutrition: { calories: 340, grains: 0, protein: 3, vegetables: 0, fruits: 0, dairy: 0, oils: 2.5 },
    familyNote: '西餐廳等級的美味。'
  },
  {
    id: '123',
    name: '日式烤飯糰',
    ingredients: ['白飯 1碗', '肉鬆 少許', '醬油 少許'],
    steps: [
      '白飯包入肉鬆捏成三角形。',
      '表面刷上薄薄醬油。',
      '氣炸鍋 180度烤 8 分鐘至表面微焦。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'japanese',
    tags: ['family', 'single'],
    nutrition: { calories: 220, grains: 3, protein: 0.5, vegetables: 0, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '外層像鍋巴一樣酥脆。'
  },
  {
    id: '124',
    name: '日式雞肉串燒 (Yakitori)',
    ingredients: ['雞腿肉塊 150g', '大蔥段 少許', '照燒醬 少許'],
    steps: [
      '雞肉與蔥段交替串起。',
      '刷上照燒醬。',
      '氣炸鍋 190度烤 12 分鐘，中途翻面補醬。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'japanese',
    tags: ['single', 'family'],
    nutrition: { calories: 280, grains: 0, protein: 3, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '居酒屋風味，在家輕鬆做。'
  },
  {
    id: '125',
    name: '日式炸豆腐 (氣炸版)',
    ingredients: ['雞蛋豆腐 1盒', '柴魚片 少許', '太白粉 少許'],
    steps: [
      '豆腐切塊沾太白粉。',
      '噴油，氣炸鍋 200度烤 12 分鐘。',
      '淋上日式醬油，撒上柴魚片。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'japanese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 180, grains: 0.2, protein: 2, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '外皮酥脆，內部滑嫩。'
  },
  {
    id: '126',
    name: '氣炸起司玉米吐司',
    ingredients: ['吐司 1片', '玉米粒 2大匙', '起司絲 少許'],
    steps: [
      '吐司鋪上玉米粒與起司絲。',
      '放入氣炸鍋，180度烤 5-8 分鐘至起司融化金黃。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 210, grains: 1.5, protein: 1, vegetables: 0.5, fruits: 0, dairy: 0.5, oils: 1 },
    familyNote: '甜甜的玉米搭配濃郁起司，是孩子最愛的早餐。'
  },
  {
    id: '127',
    name: '電鍋版地瓜燕麥粥',
    ingredients: ['大燕麥片 0.5杯', '地瓜 1/2條', '牛奶 200ml'],
    steps: [
      '地瓜切小塊，與燕麥片放入內鍋。',
      '加入牛奶與少許水。',
      '外鍋 1 杯水蒸熟即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 280, grains: 2, protein: 1.5, vegetables: 0.5, fruits: 0, dairy: 1, oils: 0.5 },
    elderlyNote: '地瓜蒸至鬆軟，燕麥粥易於消化吸收。'
  },
  {
    id: '128',
    name: '氣炸五彩時蔬歐姆蛋',
    ingredients: ['雞蛋 2顆', '甜椒碎 少許', '菠菜碎 少許', '起司粉 少許'],
    steps: [
      '蛋液與蔬菜碎、起司粉拌勻。',
      '倒入氣炸鍋專用小烤盤。',
      '170度烤 10 分鐘至凝固。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 190, grains: 0, protein: 2, vegetables: 1, fruits: 0, dairy: 0.2, oils: 1.5 },
    familyNote: '色彩繽紛的歐姆蛋，營養豐富且視覺吸引力強。'
  },
  {
    id: '129',
    name: '電鍋版黑糖紅豆湯',
    ingredients: ['紅豆 0.5杯', '黑糖 少許', '水 4杯'],
    steps: [
      '紅豆洗淨浸泡 2 小時。',
      '放入內鍋加水，外鍋 2 杯水蒸煮。',
      '跳起後加入黑糖拌勻，再悶 20 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 220, grains: 2, protein: 1, vegetables: 0, fruits: 0, dairy: 0, oils: 0 },
    elderlyNote: '溫熱紅豆湯補氣血，口感綿密。'
  },
  {
    id: '130',
    name: '氣炸香蕉花生醬吐司',
    ingredients: ['全麥吐司 1片', '香蕉 1/2根', '無糖花生醬 1大匙'],
    steps: [
      '吐司抹上花生醬，鋪上香蕉片。',
      '放入氣炸鍋，160度烤 5 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 260, grains: 1.5, protein: 1.5, vegetables: 0, fruits: 1, dairy: 0, oils: 2 },
    familyNote: '花生醬提供優質油脂與蛋白，搭配香蕉能量滿分。'
  },
  {
    id: '131',
    name: '電鍋版鮮菇蒸蛋',
    ingredients: ['雞蛋 2顆', '鴻喜菇 少許', '薄鹽醬油 1小匙'],
    steps: [
      '蛋液加 1.5 倍水拌勻過篩。',
      '放入鴻喜菇，外鍋 1 杯水蒸熟。',
      '蓋子留縫可使蛋面平滑。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'single'],
    nutrition: { calories: 160, grains: 0, protein: 2, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1 },
    elderlyNote: '口感滑嫩，鮮菇增加多醣體攝取。'
  },
  {
    id: '132',
    name: '氣炸南瓜堅果沙拉',
    ingredients: ['南瓜塊 150g', '綜合堅果 少許', '生菜 少許'],
    steps: [
      '南瓜塊噴油，氣炸鍋 190度烤 15 分鐘。',
      '出爐後與生菜、堅果拌勻，淋上少許油醋。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 180, grains: 1.5, protein: 0.5, vegetables: 1, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '原型食物的甜味與堅果香氣，提供持久飽足感。'
  },
  {
    id: '133',
    name: '電鍋版紅棗銀耳羹',
    ingredients: ['新鮮銀耳 1朵', '紅棗 5顆', '冰糖 少許'],
    steps: [
      '銀耳撕小朵，紅棗去籽。',
      '放入內鍋加水，外鍋 1.5 杯水蒸煮。',
      '跳起後加糖拌勻即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 110, grains: 0, protein: 0.2, vegetables: 0.5, fruits: 0.5, dairy: 0, oils: 0 },
    elderlyNote: '植物性膠原蛋白，滋潤養生。'
  },
  {
    id: '134',
    name: '氣炸起司馬鈴薯塊',
    ingredients: ['馬鈴薯 1顆', '起司粉 少許', '義式香料 少許'],
    steps: [
      '馬鈴薯切塊噴油，撒上香料。',
      '氣炸鍋 200度烤 15-18 分鐘至酥脆。',
      '出爐撒上起司粉。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 220, grains: 2.5, protein: 0.5, vegetables: 0, fruits: 0, dairy: 0.2, oils: 1.5 },
    familyNote: '取代油炸薯條，更健康且美味。'
  },
  {
    id: '135',
    name: '電鍋版紫米豆漿',
    ingredients: ['紫米 0.2杯', '無糖豆漿 400ml'],
    steps: [
      '紫米洗淨浸泡，放入電鍋蒸熟。',
      '將熟紫米與豆漿放入果汁機打勻。',
      '回鍋加熱至微溫即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 190, grains: 1.5, protein: 1.5, vegetables: 0, fruits: 0, dairy: 0, oils: 0.5 },
    elderlyNote: '高纖紫米搭配豆漿，營養豐富好吸收。'
  },
  {
    id: '136',
    name: '氣炸蘋果肉桂捲 (吐司版)',
    ingredients: ['吐司 2片', '蘋果丁 少許', '肉桂粉 少許'],
    steps: [
      '吐司去邊壓平，包入拌了糖與肉桂的蘋果丁捲起。',
      '表面刷少許油，氣炸鍋 180度烤 8 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 230, grains: 2, protein: 0.5, vegetables: 0, fruits: 1, dairy: 0, oils: 1 },
    familyNote: '溫熱的蘋果內餡與肉桂香氣，是幸福的早餐選擇。'
  },
  {
    id: '137',
    name: '電鍋版山藥薏仁粥',
    ingredients: ['白米 0.3杯', '薏仁 0.2杯', '山藥 100g'],
    steps: [
      '山藥切小塊，米與薏仁洗淨。',
      '放入內鍋加 4 杯水，外鍋 1.5 杯水蒸煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 240, grains: 3, protein: 0.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 0 },
    elderlyNote: '健脾益胃，質地軟綿。'
  },
  {
    id: '138',
    name: '氣炸酪梨番茄三明治',
    ingredients: ['全麥吐司 2片', '酪梨 1/4顆', '大番茄 2片'],
    steps: [
      '吐司夾入酪梨片與番茄片。',
      '放入氣炸鍋，170度烤 5 分鐘至微酥。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 260, grains: 2, protein: 1, vegetables: 0.5, fruits: 0.5, dairy: 0, oils: 2 },
    familyNote: '優質脂肪與維生素的組合，清爽無負擔。'
  },
  {
    id: '139',
    name: '電鍋版芝麻湯圓',
    ingredients: ['冷凍芝麻湯圓 4顆', '酒釀 少許'],
    steps: [
      '內鍋加水煮滾，放入湯圓。',
      '外鍋 0.5 杯水蒸煮至湯圓浮起。',
      '加入少許酒釀提味。'
    ],
    equipment: 'electric_cooker',
    mealType: 'breakfast',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 280, grains: 2.5, protein: 0.5, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    elderlyNote: '溫熱甜品，芝麻補鈣。'
  },
  {
    id: '140',
    name: '氣炸蔬菜烘蛋',
    ingredients: ['雞蛋 3顆', '玉米筍碎 少許', '紅蘿蔔碎 少許'],
    steps: [
      '蛋液與蔬菜碎拌勻。',
      '倒入氣炸鍋專用模具。',
      '170度烤 12 分鐘至全熟。'
    ],
    equipment: 'air_fryer',
    mealType: 'breakfast',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 210, grains: 0, protein: 3, vegetables: 1, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '一鍋到底，輕鬆攝取多種蔬菜與蛋白質。'
  },
  {
    id: '141',
    name: '電鍋版高麗菜什錦炊飯',
    ingredients: ['白米 1杯', '高麗菜 1/4顆', '乾香菇 2朵', '毛豆 少許'],
    steps: [
      '香菇切絲，高麗菜切小片。',
      '米洗淨與食材放入內鍋，加 1:1 的水。',
      '正常煮飯程序，跳起後悶 10 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 360, grains: 3, protein: 1, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '高麗菜的甜味完全滲入米飯，營養均衡。'
  },
  {
    id: '142',
    name: '氣炸味噌豆腐佐蘆筍',
    ingredients: ['板豆腐 1塊', '蘆筍 5支', '味噌醬 1大匙'],
    steps: [
      '豆腐抹上味噌醬。',
      '與蘆筍一同放入氣炸鍋。',
      '180度烤 10-12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'japanese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 180, grains: 0, protein: 2.5, vegetables: 1, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '味噌提鮮，豆腐外焦內嫩，搭配脆口蘆筍。'
  },
  {
    id: '143',
    name: '電鍋版南瓜燉飯',
    ingredients: ['白米 1杯', '南瓜塊 100g', '洋蔥碎 少許', '牛奶 100ml'],
    steps: [
      '食材放入內鍋，加水至淹過食材。',
      '外鍋 1 杯水蒸熟。',
      '跳起後加入牛奶拌勻，再悶 5 分鐘。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'elderly'],
    nutrition: { calories: 380, grains: 3, protein: 1, vegetables: 1, fruits: 0, dairy: 0.5, oils: 1 },
    elderlyNote: '南瓜燉至化開，米飯軟綿易入口。'
  },
  {
    id: '144',
    name: '氣炸義式香料烤時蔬',
    ingredients: ['青花菜 1/2朵', '紅蘿蔔 少許', '玉米筍 4支', '甜椒 1/2顆'],
    steps: [
      '蔬菜切塊拌入橄欖油與香料。',
      '放入氣炸鍋，180度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 140, grains: 0, protein: 0.5, vegetables: 2.5, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '多種蔬菜一次滿足，攝取多元植化素。'
  },
  {
    id: '145',
    name: '電鍋版麻婆豆腐 (素)',
    ingredients: ['嫩豆腐 1盒', '素肉燥 2大匙', '蔥花 少許'],
    steps: [
      '豆腐切塊鋪在盤中，淋上素肉燥。',
      '外鍋 1 杯水蒸熟。',
      '撒上蔥花即可。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 210, grains: 0, protein: 2.5, vegetables: 0, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '下飯神菜，素食者也能享受經典美味。'
  },
  {
    id: '146',
    name: '氣炸杏鮑菇佐椒鹽',
    ingredients: ['杏鮑菇 2根', '椒鹽粉 少許', '九層塔 少許'],
    steps: [
      '杏鮑菇切塊噴油。',
      '氣炸鍋 190度烤 12 分鐘。',
      '出爐拌入九層塔與椒鹽。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 95, grains: 0, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '口感像鹽酥雞一樣誘人，是健康的零嘴配菜。'
  },
  {
    id: '147',
    name: '電鍋版紅燒蘿蔔豆腐',
    ingredients: ['白蘿蔔 1/4條', '板豆腐 1塊', '醬油 2大匙'],
    steps: [
      '蘿蔔與豆腐切塊放入內鍋。',
      '加入醬油、糖與半杯水。',
      '外鍋 1.5 杯水燉煮至入味。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 190, grains: 0, protein: 2, vegetables: 1.2, fruits: 0, dairy: 0, oils: 1 },
    elderlyNote: '蘿蔔燉至軟爛，豆腐吸飽湯汁。'
  },
  {
    id: '148',
    name: '氣炸五彩椒炒豆乾 (氣炸版)',
    ingredients: ['豆乾 3片', '甜椒 1/2顆', '芹菜 少許'],
    steps: [
      '食材切條拌油與醬油。',
      '放入氣炸鍋，180度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 170, grains: 0, protein: 2, vegetables: 1, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '高蛋白豆乾搭配鮮甜彩椒，清爽開胃。'
  },
  {
    id: '149',
    name: '電鍋版香菇芋頭粥',
    ingredients: ['白米 0.5杯', '芋頭塊 100g', '乾香菇 2朵'],
    steps: [
      '食材放入內鍋，加 4 杯水。',
      '外鍋 1.5 杯水煮至跳起。',
      '悶 10 分鐘後加鹽調味。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 280, grains: 3, protein: 0.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 0.5 },
    elderlyNote: '芋頭鬆軟，香菇提鮮，粥品易消化。'
  },
  {
    id: '150',
    name: '氣炸起司焗烤馬鈴薯',
    ingredients: ['馬鈴薯 1顆', '起司絲 少許', '玉米粒 少許'],
    steps: [
      '馬鈴薯切半蒸熟或氣炸熟。',
      '鋪上玉米粒與起司絲。',
      '氣炸鍋 200度烤 5 分鐘至金黃。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 260, grains: 2.5, protein: 1, vegetables: 0.2, fruits: 0, dairy: 0.5, oils: 1.5 },
    familyNote: '濃郁起司風味，深受孩子喜愛。'
  },
  {
    id: '151',
    name: '電鍋版番茄燉豆腐',
    ingredients: ['大番茄 1顆', '板豆腐 1塊', '番茄醬 少許'],
    steps: [
      '番茄切塊，豆腐切塊。',
      '放入內鍋加少許水與番茄醬。',
      '外鍋 1 杯水燉煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 180, grains: 0, protein: 2, vegetables: 1, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '酸甜開胃，富含茄紅素。'
  },
  {
    id: '152',
    name: '氣炸玉米筍佐胡麻醬',
    ingredients: ['玉米筍 1盒', '胡麻醬 1大匙'],
    steps: [
      '玉米筍噴油，氣炸鍋 180度烤 8 分鐘。',
      '出爐後淋上胡麻醬即可。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'japanese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 120, grains: 0, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '保留玉米筍的脆甜，胡麻醬增添風味。'
  },
  {
    id: '153',
    name: '電鍋版青花菜蒸豆腐',
    ingredients: ['青花菜 1/2朵', '嫩豆腐 1盒', '枸杞 少許'],
    steps: [
      '豆腐切塊，青花菜圍邊。',
      '撒上枸杞，外鍋 1 杯水蒸熟。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 160, grains: 0, protein: 2, vegetables: 1, fruits: 0, dairy: 0, oils: 0.5 },
    elderlyNote: '清淡養生，色彩美觀。'
  },
  {
    id: '154',
    name: '氣炸地瓜條佐梅粉',
    ingredients: ['地瓜 1條', '梅粉 少許'],
    steps: [
      '地瓜切條噴油。',
      '氣炸鍋 190度烤 15 分鐘。',
      '撒上梅粉拌勻。'
    ],
    equipment: 'air_fryer',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 210, grains: 2, protein: 0.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '健康的點心式午餐配菜。'
  },
  {
    id: '155',
    name: '電鍋版鮮菇時蔬湯',
    ingredients: ['鴻喜菇 少許', '高麗菜 少許', '紅蘿蔔 少許'],
    steps: [
      '所有食材放入內鍋加水。',
      '外鍋 1 杯水煮滾。'
    ],
    equipment: 'electric_cooker',
    mealType: 'lunch',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 80, grains: 0, protein: 0.2, vegetables: 1.5, fruits: 0, dairy: 0, oils: 0.2 },
    elderlyNote: '清甜好喝，補充水分與纖維。'
  },
  {
    id: '156',
    name: '電鍋版昆布時蔬燉菜',
    ingredients: ['昆布 1片', '白蘿蔔 1/4條', '紅蘿蔔 少許', '香菇 2朵'],
    steps: [
      '食材切塊放入內鍋加水。',
      '外鍋 1.5 杯水燉煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'japanese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 120, grains: 0, protein: 0.5, vegetables: 2, fruits: 0, dairy: 0, oils: 0.2 },
    elderlyNote: '昆布提鮮，蔬菜燉至軟爛。'
  },
  {
    id: '157',
    name: '氣炸起司焗烤南瓜',
    ingredients: ['南瓜塊 200g', '起司絲 少許'],
    steps: [
      '南瓜塊氣炸熟後鋪上起司。',
      '200度烤 5 分鐘至金黃。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 240, grains: 1.5, protein: 1, vegetables: 1, fruits: 0, dairy: 0.5, oils: 1.5 },
    familyNote: '南瓜的甜與起司的鹹完美結合。'
  },
  {
    id: '158',
    name: '電鍋版鳳梨木耳炒時蔬 (電鍋版)',
    ingredients: ['新鮮鳳梨 100g', '黑木耳 2片', '高麗菜 少許'],
    steps: [
      '食材切片放入盤中。',
      '外鍋 0.5 杯水蒸熟拌勻。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'elderly'],
    nutrition: { calories: 110, grains: 0, protein: 0.2, vegetables: 1, fruits: 0.8, dairy: 0, oils: 0.5 },
    familyNote: '鳳梨酵素助消化，木耳高纖。'
  },
  {
    id: '159',
    name: '氣炸味噌烤茄子',
    ingredients: ['茄子 1根', '味噌醬 1大匙'],
    steps: [
      '茄子切半劃刀抹味噌。',
      '氣炸鍋 180度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'japanese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 130, grains: 0, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '日式田樂風味，茄子軟嫩入味。'
  },
  {
    id: '160',
    name: '電鍋版當歸山藥湯',
    ingredients: ['山藥 150g', '當歸 1片', '紅棗 3顆'],
    steps: [
      '山藥切塊與藥材放入內鍋。',
      '外鍋 1.5 杯水燉煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 160, grains: 1.5, protein: 0.5, vegetables: 0.5, fruits: 0.2, dairy: 0, oils: 0 },
    elderlyNote: '溫補養生，山藥綿密。'
  },
  {
    id: '161',
    name: '氣炸香料烤花椰菜',
    ingredients: ['白花椰菜 1/2朵', '咖哩粉 少許', '橄欖油 1大匙'],
    steps: [
      '花椰菜切小朵拌油與咖哩粉。',
      '氣炸鍋 190度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 120, grains: 0, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '氣炸後的花椰菜帶有焦香，口感獨特。'
  },
  {
    id: '162',
    name: '電鍋版百合蓮子燉南瓜',
    ingredients: ['南瓜 150g', '乾百合 少許', '蓮子 少許'],
    steps: [
      '百合蓮子浸泡，與南瓜放入內鍋。',
      '外鍋 1.5 杯水燉煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 180, grains: 1.5, protein: 1, vegetables: 1, fruits: 0, dairy: 0, oils: 0 },
    elderlyNote: '安神養生，質地鬆軟。'
  },
  {
    id: '163',
    name: '氣炸起司彩椒盅',
    ingredients: ['甜椒 1顆', '玉米粒 少許', '起司絲 少許'],
    steps: [
      '甜椒去頭去籽，填入玉米與起司。',
      '氣炸鍋 180度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 190, grains: 0.5, protein: 1, vegetables: 1.5, fruits: 0, dairy: 0.5, oils: 1.5 },
    familyNote: '造型可愛，營養豐富。'
  },
  {
    id: '164',
    name: '電鍋版羅宋湯 (素)',
    ingredients: ['大番茄 1顆', '馬鈴薯 1/2顆', '紅蘿蔔 少許', '西洋芹 少許'],
    steps: [
      '食材切塊放入內鍋加水。',
      '外鍋 1.5 杯水燉煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 150, grains: 1, protein: 0.2, vegetables: 2, fruits: 0, dairy: 0, oils: 0.5 },
    familyNote: '豐富蔬菜精華，清甜營養。'
  },
  {
    id: '165',
    name: '氣炸酥炸鮮菇',
    ingredients: ['綜合菇類 150g', '麵包粉 少許'],
    steps: [
      '菇類沾薄油與麵包粉。',
      '氣炸鍋 190度烤 10 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 160, grains: 0.5, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '酥脆口感，健康版炸物。'
  },
  {
    id: '166',
    name: '電鍋版三杯杏鮑菇 (電鍋版)',
    ingredients: ['杏鮑菇 2根', '麻油 1大匙', '薑片 少許', '九層塔 少許'],
    steps: [
      '杏鮑菇切塊與麻油、薑片放入內鍋。',
      '外鍋 1 杯水蒸煮。',
      '跳起後拌入九層塔。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 180, grains: 0, protein: 0.5, vegetables: 1.5, fruits: 0, dairy: 0, oils: 2 },
    familyNote: '麻油香氣十足，非常下飯。'
  },
  {
    id: '167',
    name: '氣炸義式番茄烤豆腐',
    ingredients: ['板豆腐 1塊', '小番茄 5顆', '義式香料 少許'],
    steps: [
      '豆腐切塊與番茄拌油與香料。',
      '氣炸鍋 190度烤 12 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 190, grains: 0, protein: 2, vegetables: 0.8, fruits: 0, dairy: 0, oils: 1.5 },
    familyNote: '番茄烤過後甜味更濃。'
  },
  {
    id: '168',
    name: '電鍋版清燉白蘿蔔湯',
    ingredients: ['白蘿蔔 1/2條', '玉米筍 4支', '芹菜末 少許'],
    steps: [
      '食材放入內鍋加水。',
      '外鍋 1.5 杯水燉煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 90, grains: 0, protein: 0.2, vegetables: 2, fruits: 0, dairy: 0, oils: 0.2 },
    elderlyNote: '清爽解膩，蘿蔔軟甜。'
  },
  {
    id: '169',
    name: '氣炸香草烤地瓜',
    ingredients: ['地瓜 1條', '迷迭香 少許', '橄欖油 少許'],
    steps: [
      '地瓜切塊拌油與香草。',
      '氣炸鍋 190度烤 15 分鐘。'
    ],
    equipment: 'air_fryer',
    mealType: 'dinner',
    cuisineType: 'western',
    tags: ['vegetarian', 'family', 'single'],
    nutrition: { calories: 220, grains: 2, protein: 0.5, vegetables: 0.5, fruits: 0, dairy: 0, oils: 1 },
    familyNote: '天然甜味與香草氣息。'
  },
  {
    id: '170',
    name: '電鍋版什錦藥膳湯',
    ingredients: ['綜合菇類 少許', '紅棗 3顆', '枸杞 少許', '黃耆 1片'],
    steps: [
      '食材與藥材放入內鍋加水。',
      '外鍋 1.5 杯水燉煮。'
    ],
    equipment: 'electric_cooker',
    mealType: 'dinner',
    cuisineType: 'chinese',
    tags: ['vegetarian', 'elderly', 'family'],
    nutrition: { calories: 110, grains: 0, protein: 0.5, vegetables: 1, fruits: 0.2, dairy: 0, oils: 0.2 },
    elderlyNote: '溫補強身，適合睡前暖胃。'
  }
];
