/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V6.9: 👑 術語圖鑑化重構版。沒收遊戲用語，導入「4 欄 Keyword 卡牌」佈局。每個 Page 嚴選 4 個核心手機廠術語。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            {
                title: "1. 客戶研發端 (Brand R&D)",
                keywords: [
                    { 
                        name: "PRD (產品規格需求書)", 
                        shortDesc: "定義產品靈魂的「天規」，客戶研發端拍板的規格防線",
                        contentHtml: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card"><div class="edu-card-label">⚙️ 工作範疇</div><div class="edu-card-body-text">主導全球市場調研、產品規格定義，發佈交付 PRD 與 2D/3D 工程圖。</div></div>
                                <div class="edu-overview-card"><div class="edu-card-label">🎯 戰術目標</div><div class="edu-card-body-text">追求極致美學與技術參數突破，用高工藝難度拉高品牌壁壘。</div></div>
                                <div class="edu-overview-card"><div class="edu-card-label">👁️ 團隊期待</div><div class="edu-card-body-text">EMS 廠必須 100% 復刻複雜結構，不接受任何因公差導致的設計妥協。</div></div>
                            </div>
                            <div class="dict-panel-card"><strong>🔍 戰術字典：</strong>在開模前剛性攔截不切實際的幻想規格，避免後續修改模具報廢。</div>
                        `
                    },
                    { 
                        name: "ID (工業設計)", 
                        shortDesc: "決定產品的外觀美學，包含 3D 造型與握持感",
                        contentHtml: `<div class="edu-overview-card"><strong>核心目標：</strong>打造具備市場辨識度的獨特外觀。<strong>TPM 提醒：</strong>ID 經常挑戰物理極限，需進行 DFM 評估。</div>`
                    },
                    { 
                        name: "CMF (材質與表面處理)", 
                        shortDesc: "Color, Material, Finishing。決定產品的顏色與手感",
                        contentHtml: `<div class="edu-overview-card"><strong>關鍵：</strong>定義特殊表面（如高光陽極）。初始良率極低，需備足報廢預算，並簽署「限度樣本 (Limit Sample)」。</div>`
                    },
                    { 
                        name: "DFM (可製造性分析)", 
                        shortDesc: "Design for Manufacturing。開模前最後的技術仲裁",
                        contentHtml: `<div class="edu-overview-card"><strong>職責：</strong>分析圖紙是否能被大量生產。攔截拔模角不足、肉厚不均等致命模具設計。</div>`
                    }
                ]
            },
            {
                title: "2. 零件供應商端 (Vendors)",
                keywords: [
                    { 
                        name: "Lead Time (物料交期)", 
                        shortDesc: "從下單到工廠入庫的物理時間，長料期晶片的命門",
                        contentHtml: `<div class="edu-overview-card"><strong>核心：</strong>精確追蹤超過 12 週的稀缺料位。<strong>對策：</strong>一旦斷線立即啟動二線認證 (Dual Source)。</div>`
                    },
                    { 
                        name: "COA (出廠檢驗證明)", 
                        shortDesc: "供應商保證其零件合格的聖經文獻",
                        contentHtml: `<div class="edu-overview-card"><strong>對齊：</strong>EMS 進料 IQC 必須與 COA 規格 100% 互鎖，嚴防進廠原件汙染流水線。</div>`
                    },
                    { 
                        name: "Dual Source (二線備料)", 
                        shortDesc: "為了防止被單一廠商卡死而準備的備援方案",
                        contentHtml: `<div class="edu-overview-card"><strong>戰術：</strong>認證 Pin-to-Pin 相容零件，防止上游災難引發全線停工。</div>`
                    },
                    { 
                        name: "IQC (進料品質檢驗)", 
                        shortDesc: "零件進入工廠後的第一道光學/電性防線",
                        contentHtml: `<div class="edu-overview-card"><strong>目標：</strong>按照抽樣水準（AQL）攔截供應商的不良物料。</div>`
                    }
                ]
            },
            {
                title: "3. 代工製造廠端 (EMS Factory)",
                keywords: [
                    { 
                        name: "FPY (首檢直通率)", 
                        shortDesc: "產品組裝一次就合格的概率，利潤與品質的生死線",
                        contentHtml: `<div class="edu-overview-card"><strong>鐵律：</strong>『不斬入庫良率，只斬直通率！』徹底攔截帶有手工重工內傷的機台。</div>`
                    },
                    { 
                        name: "UPH (每小時產速)", 
                        shortDesc: "流水線每小時能吐出多少成品，EMS 廠賺錢的指標",
                        contentHtml: `<div class="edu-overview-card"><strong>瓶頸控制：</strong>找出 Cycle Time 最長的工位（Bottle-neck）並發動拆彈。</div>`
                    },
                    { 
                        name: "Line Balance (線平衡)", 
                        shortDesc: "整條流水線各工位工時的平均分配程度",
                        contentHtml: `<div class="edu-overview-card"><strong>標準：</strong>低於 85% 代表效率低落，會引發產線集體堆料（WIP）。</div>`
                    },
                    { 
                        name: "4M1E (生產五要素)", 
                        shortDesc: "人員、設備、材料、方法、環境。現場查線的總綱",
                        contentHtml: `<div class="edu-overview-card"><strong>方針：</strong>當良率雪崩，第一時間從這五個維度發動排除法（Root Cause Analysis）。</div>`
                    }
                ]
            }
        ],
        examVault: [
            { q: "當研發端要求極限 Clearance，但工廠稱會撞車，TPM 職責是？", o: ["當傳話筒", "調閱歷史 Cpk 數據，主導跨功能談判", "聽從 RD 指令"], a: 1 },
            { q: "FPY 只有 35% 代表？", o: ["製程受控", "大批機台帶有重工內傷", "直接出貨"], a: 1 },
            { q: "4M1E 中的 E 指的是？", o: ["EE 工程師", "Environment 環境與 ESD", "Economic 預算"], a: 1 }
        ]
    }
];

(function() {
    const v = window.codexCourseEngineData[0].examVault;
    for (let i = v.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [v[i], v[j]] = [v[j], v[i]];
    }
    window.codexCourseEngineData[0].examVault = v.slice(0, 3);
})();


請老闆將這兩份檔案推上生產環境，檢閱這套具備極致縱深、大圖書館級視覺質感的 V6.9 教材星盤！
