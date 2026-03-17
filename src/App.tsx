/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Utensils, 
  ChefHat, 
  Users, 
  Flame, 
  CheckCircle2, 
  Info, 
  RefreshCw,
  Zap,
  Waves,
  Leaf,
  Heart,
  ShoppingCart,
  DollarSign,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SPRING_RECIPES, Recipe, CHEAPEST_VEGETABLES, WEEKLY_SHOPPING_LIST, NUTRITION_GUIDELINES_2026 } from './constants';

type TargetType = 'elderly' | 'family' | 'single' | 'vegetarian';
type EquipmentType = 'electric_cooker' | 'air_fryer';
type MealTypeFilter = 'all' | 'breakfast' | 'lunch' | 'dinner';
type CuisineTypeFilter = 'all' | 'chinese' | 'western' | 'japanese';

interface RecipeCardProps {
  recipe: Recipe;
  idx: number;
  isChecked: boolean;
  toggleCheck: (id: string) => void;
  target: TargetType;
  generatedMenu: Recipe[];
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, idx, isChecked, toggleCheck, target, generatedMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ 
        opacity: isChecked ? 0.6 : 1, 
        y: 0,
        scale: isChecked ? 0.98 : 1
      }}
      transition={{ delay: idx * 0.1 }}
      className={`bg-white rounded-3xl overflow-hidden border transition-all flex flex-col relative ${
        isChecked ? 'border-[#FF8C42] bg-[#FFF5F0]' : 'border-[#FAD4C0] shadow-sm hover:shadow-xl'
      }`}
    >
      {isChecked && (
        <div className="absolute top-4 right-4 z-10 text-[#FF8C42]">
          <CheckCircle2 size={32} fill="white" />
        </div>
      )}

      <div className="p-8 flex-1">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            <div className="bg-[#FFF5F0] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#A68B7C] flex items-center gap-1">
              {recipe.equipment === 'electric_cooker' ? <Waves size={12} /> : <Flame size={12} />}
              {recipe.equipment === 'electric_cooker' ? '電鍋' : '氣炸鍋'}
            </div>
            <div className="bg-[#FFF9F5] border border-[#FAD4C0] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#A68B7C] flex items-center gap-1">
              {recipe.cuisineType === 'chinese' ? '中式' : '西式'}
            </div>
          </div>
          <span className="text-xs font-serif italic text-[#A68B7C]">Recipe {String(generatedMenu.indexOf(recipe) + 1).padStart(2, '0')}</span>
        </div>

        <h5 className={`text-2xl font-serif font-bold mb-4 transition-colors ${isChecked ? 'text-[#A68B7C] line-through' : 'text-[#4A2D1F]'}`}>
          {recipe.name}
        </h5>
        
        <div className="mb-6">
          <h6 className="text-[11px] font-bold uppercase tracking-wider text-[#A68B7C] mb-3 border-b border-[#FFF5F0] pb-1">所需食材</h6>
          <ul className="space-y-1">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className={`text-sm flex items-center gap-2 transition-colors ${isChecked ? 'text-[#A68B7C]' : 'text-[#8C6B5A]'}`}>
                <div className={`w-1 h-1 rounded-full ${isChecked ? 'bg-[#A68B7C]' : 'bg-[#FF8C42]'}`} />
                {ing}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h6 className="text-[11px] font-bold uppercase tracking-wider text-[#A68B7C] mb-3 border-b border-[#FFF5F0] pb-1">極簡步驟</h6>
          <div className="space-y-3">
            {recipe.steps.map((step, i) => (
              <div key={i} className="flex gap-3">
                <span className={`text-xs font-serif italic mt-0.5 ${isChecked ? 'text-[#A68B7C]' : 'text-[#FF8C42]'}`}>0{i + 1}</span>
                <p className={`text-sm leading-relaxed transition-colors ${isChecked ? 'text-[#A68B7C]' : 'text-[#4A2D1F]'}`}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {target === 'elderly' && recipe.elderlyNote && (
          <div className="bg-[#FFF9F5] border border-[#FAD4C0] p-4 rounded-xl mt-4">
            <div className="flex items-center gap-2 text-[#FF8C42] mb-1">
              <Heart size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">營養師叮嚀 (長輩)</span>
            </div>
            <p className="text-xs text-[#8C6B5A] leading-relaxed italic">
              {recipe.elderlyNote}
            </p>
          </div>
        )}

        {target === 'family' && recipe.familyNote && (
          <div className="bg-[#FFF9F5] border border-[#FAD4C0] p-4 rounded-xl mt-4">
            <div className="flex items-center gap-2 text-[#FF8C42] mb-1">
              <Users size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">營養師叮嚀 (發育期)</span>
            </div>
            <p className="text-xs text-[#8C6B5A] leading-relaxed italic">
              {recipe.familyNote}
            </p>
          </div>
        )}
      </div>
      
      <button 
        onClick={() => toggleCheck(recipe.id)}
        className={`px-8 py-4 border-t transition-colors flex items-center justify-between group ${
          isChecked ? 'bg-[#FAD4C0] border-[#FF8C42]' : 'bg-[#FFF5F0] border-[#FAD4C0] hover:bg-[#FAD4C0]'
        }`}
      >
        <div className="flex items-center gap-1 text-[#A68B7C]">
          <Flame size={14} />
          <span className="text-xs font-bold">{recipe.nutrition.calories} kcal</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-bold uppercase tracking-wider transition-opacity ${isChecked ? 'opacity-100 text-[#FF6321]' : 'opacity-0 group-hover:opacity-100 text-[#A68B7C]'}`}>
            {isChecked ? '已完成' : '標記完成'}
          </span>
          <CheckCircle2 size={20} className={isChecked ? 'text-[#FF6321]' : 'text-[#FFD8C4] group-hover:text-[#FF8C42]'} />
        </div>
      </button>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'menu' | 'shopping'>('menu');
  const [target, setTarget] = useState<TargetType>('family');
  const [cuisineType, setCuisineType] = useState<CuisineTypeFilter>('all');
  const [equipmentPrefs, setEquipmentPrefs] = useState<Record<string, EquipmentType | 'all'>>({
    breakfast: 'all',
    lunch: 'all',
    dinner: 'all',
  });
  const [generatedMenu, setGeneratedMenu] = useState<Recipe[]>([]);
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const handleSendEmail = async () => {
    const email = window.prompt('請輸入您的電子郵件地址：');
    if (!email) return;

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('請輸入有效的電子郵件地址');
      return;
    }

    setIsSendingEmail(true);
    const currentShoppingList = dynamicShoppingList.length > 0 ? dynamicShoppingList : WEEKLY_SHOPPING_LIST;
    const totalCost = currentShoppingList.reduce((acc, s) => acc + s.items.reduce((sum, i) => sum + i.price, 0), 0);

    try {
      let shoppingListHtml = `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #4A2D1F; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #FAD4C0; border-radius: 24px; background-color: #FFFFFF;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #FF6321; margin: 0; font-size: 28px;">旬味食譜計算機</h1>
            <p style="color: #A68B7C; margin: 5px 0 0 0;">您的專屬春季營養採買計畫</p>
          </div>
          
          <div style="background-color: #FFF5F0; padding: 20px; border-radius: 16px; margin-bottom: 30px;">
            <h2 style="color: #FF6321; font-size: 20px; margin-top: 0; border-bottom: 1px solid #FAD4C0; padding-bottom: 10px;">一週菜單摘要</h2>
            <ul style="padding-left: 20px; margin-bottom: 0;">
      `;

      if (generatedMenu.length > 0) {
        generatedMenu.forEach(recipe => {
          const isSelected = checkedIds.has(recipe.id);
          shoppingListHtml += `
            <li style="margin-bottom: 8px; ${isSelected ? 'font-weight: bold; color: #FF6321;' : 'color: #8C6B5A;'}">
              [${recipe.mealType === 'breakfast' ? '早' : recipe.mealType === 'lunch' ? '午' : '晚'}] ${recipe.name}
              ${isSelected ? ' (已選定)' : ''}
            </li>
          `;
        });
      } else {
        shoppingListHtml += `<li style="color: #8C6B5A;">尚未產生個人化菜單</li>`;
      }

      shoppingListHtml += `
            </ul>
          </div>

          <h2 style="color: #FF6321; font-size: 20px; margin-bottom: 15px;">採買清單 (動態計算)</h2>
      `;

      currentShoppingList.forEach(section => {
        shoppingListHtml += `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #FF8C42; font-size: 16px; margin-bottom: 10px; background-color: #FFF9F5; padding: 8px 12px; border-radius: 8px;">${section.category}</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 2px solid #FAD4C0;">
                  <th style="text-align: left; padding: 10px; font-size: 14px; color: #A68B7C;">品項</th>
                  <th style="text-align: left; padding: 10px; font-size: 14px; color: #A68B7C;">數量</th>
                  <th style="text-align: right; padding: 10px; font-size: 14px; color: #A68B7C;">預估價格</th>
                </tr>
              </thead>
              <tbody>
        `;
        section.items.forEach(item => {
          shoppingListHtml += `
            <tr style="border-bottom: 1px solid #FFF5F0;">
              <td style="padding: 12px 10px; font-size: 15px; font-weight: bold;">
                ${item.name} ${(item as any).isCore ? '<span style="color: #FF8C42; font-size: 10px;">[核心]</span>' : ''}
              </td>
              <td style="padding: 12px 10px; font-size: 14px; color: #8C6B5A;">${item.qty} ${item.unit}</td>
              <td style="padding: 12px 10px; font-size: 15px; text-align: right; color: #FF6321; font-family: monospace;">$${item.price}</td>
            </tr>
          `;
        });
        shoppingListHtml += `</tbody></table></div>`;
      });

      shoppingListHtml += `
          <div style="margin-top: 40px; padding: 30px; background-color: #FF6321; color: white; border-radius: 20px; text-align: center; box-shadow: 0 10px 20px rgba(255, 99, 33, 0.2);">
            <div style="font-size: 14px; opacity: 0.9; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">預算總計 (4人份)</div>
            <div style="font-size: 42px; font-weight: bold; font-family: serif;">$${totalCost}</div>
          </div>
          
          <div style="margin-top: 30px; border-top: 1px solid #FAD4C0; pt: 20px; text-align: center;">
            <p style="font-style: italic; color: #A68B7C; font-size: 14px; margin-bottom: 10px;">
              「不時，不食。」—— 順應天時，品嚐最純粹的土地滋味。
            </p>
            <p style="font-size: 12px; color: #D1BDB0;">
              本郵件由 旬味食譜計算機 自動發送。價格僅供參考，實際以市場行情為準。
            </p>
          </div>
        </div>
      `;

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          subject: '您的旬味食譜採買清單',
          content: shoppingListHtml
        })
      });

      const result = await response.json();
      if (result.success) {
        alert('郵件已成功寄出！');
      } else {
        alert('寄送失敗：' + (result.error || '未知錯誤'));
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('寄送過程發生錯誤，請稍後再試。');
    } finally {
      setIsSendingEmail(false);
    }
  };

  const dynamicShoppingList = useMemo(() => {
    const checkedRecipes = generatedMenu.filter(r => checkedIds.has(r.id));
    if (checkedRecipes.length === 0) return [];

    const ingredientMap: Record<string, { qty: number; unit: string; isCore: boolean; price: number }> = {};

    // Base prices from WEEKLY_SHOPPING_LIST
    const basePrices: Record<string, { price: number; unit: string; isCore: boolean }> = {};
    WEEKLY_SHOPPING_LIST.forEach(section => {
      section.items.forEach(item => {
        basePrices[item.name] = { price: item.price, unit: item.unit, isCore: !!(item as any).isCore };
      });
    });

    checkedRecipes.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        const parts = ing.split(/\s+/);
        let name = parts[0];
        const rawQty = parts[1] || '少許';

        // Normalize name
        let matchedName = name;
        Object.keys(basePrices).forEach(baseName => {
          if (name.includes(baseName)) {
            matchedName = baseName;
          }
        });

        const baseInfo = basePrices[matchedName];
        
        if (!ingredientMap[matchedName]) {
          ingredientMap[matchedName] = {
            qty: 0,
            unit: baseInfo?.unit || (rawQty.match(/[^\d.]+/) ? rawQty.replace(/[\d.]+/, '') : '份'),
            isCore: baseInfo?.isCore || false,
            price: baseInfo?.price || 50
          };
        }

        const qtyMatch = rawQty.match(/[\d.]+/);
        if (qtyMatch) {
          ingredientMap[matchedName].qty += parseFloat(qtyMatch[0]);
        } else {
          ingredientMap[matchedName].qty += 0.2;
        }
      });
    });

    const coreItems = Object.entries(ingredientMap)
      .filter(([_, info]) => info.isCore)
      .map(([name, info]) => ({ name, ...info }));
    
    const otherItems = Object.entries(ingredientMap)
      .filter(([_, info]) => !info.isCore)
      .map(([name, info]) => ({ name, ...info }));

    const sections = [];
    if (coreItems.length > 0) sections.push({ category: '核心食材 (本週推薦)', items: coreItems });
    if (otherItems.length > 0) sections.push({ category: '其他所需食材', items: otherItems });
    
    return sections;
  }, [generatedMenu, checkedIds]);

  const checkedStats = useMemo(() => {
    const checkedRecipes = generatedMenu.filter(r => checkedIds.has(r.id));
    const calories = checkedRecipes.reduce((sum, r) => sum + r.nutrition.calories, 0);
    // Use dynamic cost if available, otherwise estimate
    const cost = dynamicShoppingList.length > 0 
      ? dynamicShoppingList.reduce((acc, s) => acc + s.items.reduce((sum, i) => sum + i.price, 0), 0)
      : checkedRecipes.reduce((sum, r) => {
          if (r.mealType === 'breakfast') return sum + 50;
          return sum + 120;
        }, 0);
    return { calories, cost };
  }, [generatedMenu, checkedIds, dynamicShoppingList]);

  const toggleCheck = (id: string) => {
    const newChecked = new Set(checkedIds);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedIds(newChecked);
  };

  const generateMenu = () => {
    setIsGenerating(true);
    setCheckedIds(new Set());
    
    // Filter recipes based on target and cuisine
    let baseFiltered = SPRING_RECIPES;
    
    // Cuisine Type filter
    if (cuisineType !== 'all') {
      baseFiltered = baseFiltered.filter(r => r.cuisineType === cuisineType);
    }

    // Vegetarian filter: must have 'vegetarian' tag
    const targetTag = target === 'vegetarian' ? 'vegetarian' : target;
    baseFiltered = baseFiltered.filter(r => r.tags.includes(targetTag));

    const selected: Recipe[] = [];
    
    ['breakfast', 'lunch', 'dinner'].forEach(mType => {
      const pref = equipmentPrefs[mType];
      const equipmentsToUse: EquipmentType[] = pref === 'all' ? ['electric_cooker', 'air_fryer'] : [pref];
      
      const mealFiltered = baseFiltered.filter(r => r.mealType === mType && equipmentsToUse.includes(r.equipment));
      const shuffled = [...mealFiltered].sort(() => 0.5 - Math.random());
      // Take up to 7 recipes for each meal type total to simulate a week
      selected.push(...shuffled.slice(0, 7));
    });

    setTimeout(() => {
      setGeneratedMenu(selected);
      setIsGenerating(false);
    }, 800);
  };

  const totalNutrition = useMemo(() => {
    return generatedMenu.reduce((acc, recipe) => ({
      calories: acc.calories + recipe.nutrition.calories,
      grains: acc.grains + recipe.nutrition.grains,
      protein: acc.protein + recipe.nutrition.protein,
      vegetables: acc.vegetables + recipe.nutrition.vegetables,
      fruits: acc.fruits + recipe.nutrition.fruits,
      dairy: acc.dairy + recipe.nutrition.dairy,
      oils: acc.oils + recipe.nutrition.oils,
    }), { calories: 0, grains: 0, protein: 0, vegetables: 0, fruits: 0, dairy: 0, oils: 0 });
  }, [generatedMenu]);

  return (
    <div className="min-h-screen bg-[#FFF5F0] text-[#4A2D1F] font-sans selection:bg-[#FFD8C4]">
      {/* Header */}
      <header className="border-b border-[#FAD4C0] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF6321] p-2 rounded-lg">
              <ChefHat className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-serif font-bold tracking-tight text-[#4A2D1F]">
              旬味食譜計算機
              <span className="text-sm font-sans font-normal text-[#A68B7C] ml-2 block sm:inline">
                Spring Edition · 3月號
              </span>
            </h1>
          </div>
          <nav className="flex bg-[#FFF5F0] p-1 rounded-xl border border-[#FAD4C0]">
            <button 
              onClick={() => setActiveTab('menu')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'menu' ? 'bg-white text-[#FF6321] shadow-sm' : 'text-[#A68B7C] hover:text-[#FF6321]'}`}
            >
              <Utensils size={16} /> 菜單
            </button>
            <button 
              onClick={() => setActiveTab('shopping')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'shopping' ? 'bg-white text-[#FF6321] shadow-sm' : 'text-[#A68B7C] hover:text-[#FF6321]'}`}
            >
              <ShoppingCart size={16} /> 採買結算
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {activeTab === 'menu' ? (
          <>
            {/* Hero Section */}
            <section className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#4A2D1F] mb-6 leading-tight">
              春意盎然，<br className="sm:hidden" />吃出當季的健康滋味
            </h2>
            <p className="text-lg text-[#8C6B5A] max-w-2xl mx-auto mb-10 font-medium">
              當季鮮貨輕鬆煮，營養精算省荷包，健康爽吃沒煩惱！
            </p>
          </motion.div>

          {/* Controls */}
          <div className="bg-white rounded-3xl shadow-sm border border-[#FAD4C0] p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Target Selection */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#A68B7C]">
                  <Users size={14} /> 選擇對象
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'elderly', label: '老人', icon: Heart },
                    { id: 'family', label: '小家庭', icon: Users },
                    { id: 'single', label: '單身族', icon: Zap },
                    { id: 'vegetarian', label: '素食者', icon: Leaf },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTarget(item.id as TargetType)}
                      className={`flex items-center justify-start gap-3 py-3 px-4 rounded-xl border text-sm transition-all ${
                        target === item.id 
                          ? 'bg-[#FF6321] border-[#FF6321] text-white shadow-md' 
                          : 'bg-white border-[#FAD4C0] text-[#8C6B5A] hover:border-[#FF6321]'
                      }`}
                    >
                      <item.icon size={16} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cuisine Selection */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#A68B7C]">
                  <ChefHat size={14} /> 料理風格
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { id: 'all', label: '全部風格', icon: ChefHat },
                    { id: 'chinese', label: '中式料理', icon: Utensils },
                    { id: 'western', label: '西式料理', icon: Utensils },
                    { id: 'japanese', label: '日式料理', icon: Utensils },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCuisineType(item.id as CuisineTypeFilter)}
                      className={`flex items-center justify-start gap-3 py-3 px-4 rounded-xl border text-sm transition-all ${
                        cuisineType === item.id 
                          ? 'bg-[#FF6321] border-[#FF6321] text-white shadow-md' 
                          : 'bg-white border-[#FAD4C0] text-[#8C6B5A] hover:border-[#FF6321]'
                      }`}
                    >
                      <item.icon size={16} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Equipment Preferences per Meal Type */}
            <div className="mb-8 p-6 bg-[#FFF9F5] rounded-2xl border border-[#FAD4C0]">
              <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#A68B7C] mb-4">
                <Zap size={14} /> 餐別設備偏好 (電鍋/氣炸鍋)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'breakfast', label: '早餐' },
                  { id: 'lunch', label: '午餐' },
                  { id: 'dinner', label: '晚餐' },
                ].map((meal) => (
                  <div key={meal.id} className="space-y-2">
                    <div className={`text-xs font-bold px-3 py-1 rounded-lg inline-block border border-orange-100/30 ${
                      meal.id === 'breakfast' ? 'bg-[#FFF7ED] text-[#C2410C]' : 
                      meal.id === 'lunch' ? 'bg-[#FFEDD5] text-[#9A3412]' : 
                      'bg-[#FEEBD0] text-[#7C2D12]'
                    }`}>
                      {meal.label}
                    </div>
                    <div className="flex bg-white p-1 rounded-xl border border-[#FAD4C0] w-full">
                      {[
                        { id: 'all', label: '全部', icon: ChefHat },
                        { id: 'electric_cooker', label: '電鍋', icon: Waves },
                        { id: 'air_fryer', label: '氣炸', icon: Flame },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setEquipmentPrefs(prev => ({ ...prev, [meal.id]: opt.id as any }))}
                          className={`flex-1 py-2 px-1 rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1 ${
                            equipmentPrefs[meal.id] === opt.id 
                              ? 'bg-[#FF6321] text-white shadow-sm' 
                              : 'text-[#A68B7C] hover:text-[#FF6321]'
                          }`}
                        >
                          <opt.icon size={10} />
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={generateMenu}
              disabled={isGenerating}
              className="w-full bg-[#FF8C42] hover:bg-[#E87A30] disabled:bg-[#FFD8C4] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#FF8C42]/20 flex items-center justify-center gap-3 transition-all transform active:scale-95"
            >
              {isGenerating ? (
                <RefreshCw className="animate-spin" />
              ) : (
                <ChefHat />
              )}
              {isGenerating ? '正在調配營養比例...' : (
                <div className="flex items-center gap-2">
                  <span>旬味菜單</span>
                  {checkedIds.size > 0 && (
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-sm">
                      <ArrowRight size={14} />
                      <span>{checkedIds.size}</span>
                    </div>
                  )}
                </div>
              )}
            </button>
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-[#A68B7C] font-medium">
                打勾會自動結算 預估採買金額 一人一天攝取熱量
              </p>
              {checkedIds.size > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-6 text-[#FF6321] font-bold"
                >
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} />
                    <span>採買結算: ${checkedStats.cost}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame size={16} />
                    <span>攝取熱量: {checkedStats.calories} kcal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight size={16} />
                    <span>已完成: {checkedIds.size}</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {generatedMenu.length > 0 && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Nutrition Dashboard */}
              <div className="bg-[#FFF5F0] rounded-[2rem] p-8 md:p-12 border border-[#FAD4C0]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#A68B7C] mb-2">Nutrition Dashboard</h3>
                    <h4 className="text-3xl font-serif text-[#4A2D1F]">菜單營養看板</h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { label: '全穀雜糧', value: totalNutrition.grains, target: 21, unit: '份', color: 'bg-[#FFD8C4]' },
                    { label: '豆魚蛋肉', value: totalNutrition.protein, target: 42, unit: '份', color: 'bg-[#FFB0B0]' },
                    { label: '蔬菜類', value: totalNutrition.vegetables, target: 21, unit: '份', color: 'bg-[#B0C5A4]' },
                    { label: '水果類', value: totalNutrition.fruits, target: 14, unit: '份', color: 'bg-[#FFD4B0]' },
                    { label: '乳品類', value: totalNutrition.dairy, target: 10, unit: '份', color: 'bg-[#B0D4E5]' },
                    { label: '油脂類', value: totalNutrition.oils, target: 35, unit: '份', color: 'bg-[#FFD8B0]' },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-[#FAD4C0] flex flex-col items-center text-center">
                      <div className={`w-3 h-3 rounded-full ${stat.color} mb-3`} />
                      <span className="text-xs font-bold text-[#A68B7C] mb-1 uppercase tracking-wider">{stat.label}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-serif font-bold text-[#4A2D1F]">{stat.value}</span>
                        <span className="text-xs text-[#A68B7C]">/ {stat.target} {stat.unit}</span>
                      </div>
                      <div className="w-full bg-[#FFF5F0] h-1 rounded-full mt-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min((stat.value / stat.target) * 100, 100)}%` }}
                          className={`h-full ${stat.color.replace('bg-', 'bg-opacity-100 bg-')}`}
                          style={{ backgroundColor: stat.color.includes('[#') ? stat.color.match(/\[(.*?)\]/)?.[1] : undefined }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recipe Cards - Separated by Equipment */}
              <div className="space-y-24">
                {['electric_cooker', 'air_fryer'].map((eqType) => {
                  const recipesForEq = generatedMenu.filter(r => r.equipment === eqType);
                  if (recipesForEq.length === 0) return null;

                  return (
                    <div key={eqType} className="space-y-12">
                      <div className="bg-[#FF6321] text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-xl shadow-[#FF6321]/20">
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4 opacity-80">
                            {eqType === 'electric_cooker' ? <Waves size={24} /> : <Flame size={24} />}
                            <span className="text-sm font-bold uppercase tracking-[0.3em]">Weekly Plan</span>
                          </div>
                          <h3 className="text-4xl md:text-6xl font-serif mb-6">
                            {eqType === 'electric_cooker' ? '電鍋一週健康計畫' : '氣炸鍋一週美味計畫'}
                          </h3>
                          <p className="text-lg opacity-80 max-w-xl">
                            {eqType === 'electric_cooker' 
                              ? '利用水蒸氣循環，鎖住食材原味與營養，最適合忙碌家庭的無油煙料理。' 
                              : '透過高速熱風循環，達成外酥內嫩的口感，減少 80% 油脂攝取，健康享受美味。'}
                          </p>
                        </div>
                        {/* Decorative background icon */}
                        <div className="absolute -right-10 -bottom-10 opacity-10">
                          {eqType === 'electric_cooker' ? <Waves size={300} /> : <Flame size={300} />}
                        </div>
                      </div>

                      <div className="space-y-16">
                        {['breakfast', 'lunch', 'dinner'].map((mType) => {
                          const mealRecipes = recipesForEq.filter(r => r.mealType === mType);
                          if (mealRecipes.length === 0) return null;

                          return (
                            <div key={mType} className={`space-y-8 p-6 md:p-10 rounded-[3rem] transition-colors ${
                              mType === 'breakfast' ? 'bg-[#FFF7ED]/40' : 
                              mType === 'lunch' ? 'bg-[#FFEDD5]/40' : 
                              'bg-[#FEEBD0]/40'
                            }`}>
                              <div className="flex items-center gap-4">
                                <div className={`px-6 py-2.5 rounded-2xl flex items-center gap-3 shadow-sm border border-orange-100/50 ${
                                  mType === 'breakfast' ? 'bg-white' : 
                                  mType === 'lunch' ? 'bg-white' : 
                                  'bg-white'
                                }`}>
                                  <div className={`p-1.5 rounded-lg ${
                                    mType === 'breakfast' ? 'bg-[#FF8C42] text-white' : 
                                    mType === 'lunch' ? 'bg-[#FF6321] text-white' : 
                                    'bg-[#E65100] text-white'
                                  }`}>
                                    {mType === 'breakfast' ? <Zap size={16} /> : mType === 'lunch' ? <Utensils size={16} /> : <Heart size={16} />}
                                  </div>
                                  <h5 className={`text-xl font-serif font-bold whitespace-nowrap ${
                                    mType === 'breakfast' ? 'text-[#C2410C]' : 
                                    mType === 'lunch' ? 'text-[#9A3412]' : 
                                    'text-[#7C2D12]'
                                  }`}>
                                    {mType === 'breakfast' ? '晨光早餐' : mType === 'lunch' ? '活力午餐' : '溫馨晚餐'}
                                  </h5>
                                </div>
                                <div className="h-px flex-1 bg-[#FAD4C0] opacity-40" />
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {mealRecipes.map((recipe, idx) => (
                                  <RecipeCard 
                                    key={recipe.id} 
                                    recipe={recipe} 
                                    idx={idx} 
                                    isChecked={checkedIds.has(recipe.id)}
                                    toggleCheck={toggleCheck}
                                    target={target}
                                    generatedMenu={generatedMenu}
                                  />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Note */}
              <div className="text-center text-[#A68B7C] text-sm pt-12 border-t border-[#FAD4C0]">
                <p className="mb-2 italic">「不時，不食。」—— 順應天時，品嚐最純粹的土地滋味。</p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="flex items-center gap-1"><Leaf size={14} /> 產地直送</span>
                  <span className="flex items-center gap-1"><Heart size={14} /> 營養均衡</span>
                  <span className="flex items-center gap-1"><Zap size={14} /> 極簡烹飪</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

            {!generatedMenu.length && !isGenerating && (
              <div className="flex flex-col items-center justify-center py-20 text-[#A68B7C]">
                <div className="w-20 h-20 bg-[#FFF5F0] rounded-full flex items-center justify-center mb-6">
                  <ChefHat size={40} className="opacity-20" />
                </div>
                <p className="text-lg font-serif italic">準備好開始您的春季健康之旅了嗎？</p>
                <p className="text-sm">選擇您的需求並點擊上方按鈕生成菜單。</p>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            {/* Shopping Hero */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-4xl font-serif text-[#4A2D1F] mb-4">營養師一週採買計畫</h2>
              <p className="text-[#8C6B5A]">
                基於 2026 營養指南，我們為您規劃了「8 大核心食材」採買策略，達成營養均衡且零浪費。
              </p>
            </div>

            {/* 2026 Guidelines Card */}
            <div className="bg-[#FF6321] rounded-[2rem] p-8 mb-12 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Info size={20} />
                </div>
                <h3 className="text-2xl font-serif">{NUTRITION_GUIDELINES_2026.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {NUTRITION_GUIDELINES_2026.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-[#FFD8C4] font-bold">0{i+1}</div>
                    <p className="text-sm leading-relaxed opacity-90">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top 5 Vegetables */}
            <div className="bg-white rounded-[2rem] p-8 border border-[#FAD4C0] shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#FF8C42] p-2 rounded-lg text-white">
                  <Leaf size={20} />
                </div>
                <h3 className="text-2xl font-serif text-[#4A2D1F]">春季平價食材 Top 5 (電鍋友善)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {CHEAPEST_VEGETABLES.map((veg, i) => (
                  <div key={i} className="bg-[#FFF5F0] border border-[#FFD8C4] p-5 rounded-2xl">
                    <div className="text-xs font-bold text-[#FF8C42] mb-1">RANK 0{i+1}</div>
                    <div className="text-xl font-bold text-[#4A2D1F] mb-2">{veg.name}</div>
                    <div className="text-sm text-[#FF6321] font-bold mb-3">約 ${veg.price} / {veg.unit}</div>
                    <p className="text-xs text-[#A68B7C] leading-relaxed">{veg.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shopping List Table */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {(dynamicShoppingList.length > 0 ? dynamicShoppingList : WEEKLY_SHOPPING_LIST).map((section, idx) => (
                  <div key={idx} className="bg-white rounded-3xl border border-[#FAD4C0] overflow-hidden">
                    <div className="bg-[#FFF5F0] px-6 py-4 border-b border-[#FAD4C0] font-bold text-[#FF6321] flex items-center gap-2">
                      <CheckCircle2 size={18} />
                      {section.category}
                    </div>
                    <div className="divide-y divide-[#FFF5F0]">
                      {section.items.map((item, i) => (
                        <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-[#FFF9F5] transition-colors">
                          <div className="flex items-center gap-4">
                            <div className={`w-2 h-2 rounded-full ${(item as any).isCore ? 'bg-[#FF8C42]' : 'bg-[#FFD8C4]'}`} />
                            <div>
                              <div className="font-bold text-[#4A2D1F] flex items-center gap-2">
                                {item.name}
                                {(item as any).isCore && (
                                  <span className="bg-[#FF8C42]/10 text-[#FF8C42] text-[10px] px-2 py-0.5 rounded-full font-bold">核心</span>
                                )}
                              </div>
                              <div className="text-xs text-[#A68B7C]">{item.qty} {item.unit}</div>
                            </div>
                          </div>
                          <div className="text-[#FF6321] font-mono font-bold">${item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Card */}
              <div className="space-y-6">
                <div className="bg-[#FF6321] text-white rounded-3xl p-8 shadow-xl sticky top-24">
                  <div className="flex items-center gap-2 mb-6 opacity-80">
                    <DollarSign size={20} />
                    <span className="text-sm font-bold uppercase tracking-widest">預算總計</span>
                  </div>
                  <div className="mb-8">
                    <div className="text-5xl font-serif font-bold mb-2">
                      ${(dynamicShoppingList.length > 0 ? dynamicShoppingList : WEEKLY_SHOPPING_LIST).reduce((acc, s) => acc + s.items.reduce((sum, i) => sum + i.price, 0), 0)}
                    </div>
                    <div className="text-sm opacity-70">預估採買食材總花費 (4人份)</div>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">採買食材清單</div>
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                        {(dynamicShoppingList.length > 0 ? dynamicShoppingList : WEEKLY_SHOPPING_LIST).map((section, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            {section.items.map((item, iIdx) => (
                              <div key={iIdx} className="flex justify-between text-xs opacity-90">
                                <span>{item.name}</span>
                                <span className="font-mono">{item.qty}{item.unit}</span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3 text-sm">
                      <Flame size={16} className="opacity-60" />
                      <span>每人每日熱量總約計算：{Math.round(totalNutrition.calories / 7)} kcal</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Info size={16} className="opacity-60" />
                      <span>價格參考：農產品批發市場交易行情站 農糧署</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleSendEmail}
                    disabled={isSendingEmail}
                    className="w-full bg-white/10 hover:bg-white/20 border border-white/20 mt-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSendingEmail ? <RefreshCw className="animate-spin" size={16} /> : null}
                    {isSendingEmail ? '正在寄送...' : 'Email 寄資料'}
                  </button>
                </div>

                <div className="bg-[#FFF5F0] rounded-3xl p-6 border border-[#FAD4C0]">
                  <h4 className="font-bold text-[#4A2D1F] mb-3 flex items-center gap-2">
                    <Info size={16} className="text-[#FF8C42]" />
                    Email 功能設定
                  </h4>
                  <p className="text-xs text-[#8C6B5A] leading-relaxed">
                    寄送功能需在系統設定中配置 <strong>SMTP</strong> 環境變數（如 <code>SMTP_USER</code>, <code>SMTP_PASS</code>）。若未設定，寄送將會失敗。
                  </p>
                </div>

                <div className="bg-[#FFF5F0] rounded-3xl p-6 border border-[#FAD4C0]">
                  <h4 className="font-bold text-[#4A2D1F] mb-3 flex items-center gap-2">
                    <Heart size={16} className="text-[#FF8C42]" />
                    營養師省錢秘訣
                  </h4>
                  <ul className="text-xs text-[#8C6B5A] space-y-2 leading-relaxed">
                    <li>• <strong>高麗菜</strong>可分兩次煮，外層炒、內層蒸，口感層次多。</li>
                    <li>• <strong>洋蔥</strong>與<strong>紅蘿蔔</strong>耐放，建議一次買足一週份量。</li>
                    <li>• <strong>白蘿蔔</strong>蒸煮後水份多，是天然的甜味劑，可減少調味料使用。</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Floating Action for Mobile */}
      {generatedMenu.length > 0 && (
        <div className="fixed bottom-8 right-8 md:hidden">
          <button 
            onClick={generateMenu}
            className="bg-[#FF6321] text-white p-4 rounded-full shadow-2xl active:scale-95 transition-transform"
          >
            <RefreshCw size={24} className={isGenerating ? 'animate-spin' : ''} />
          </button>
        </div>
      )}
    </div>
  );
}
