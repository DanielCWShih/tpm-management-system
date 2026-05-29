/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-29 V6.0: 👑 子單元 1-1 純淨化版本。專注於「三方賽局世界觀」。將 NPI 時程與生產線體剝離。考題縮減為 10 題庫隨機抽 3 題，達成微學習閉環。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            {
                title: "1. 眾神殿 ── 客戶研發端 (Brand R&D)",
                diagramFlowArray: [
                    { 
                        name: "市場預言 (PRD)", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 客戶會做什麼</div>
                                    <div class="edu-card-body-text">主導全球市場調研，撰寫初代產品規格需求書（PRD）。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">追求極致規格與品牌溢價，用突破性技術拉高市場牆。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">期待 EMS 廠能 100% 復刻 3D 藍圖，不允許因製造能力而犧牲美學。</div>
                                </div>
                            </div>
                            <button onclick="showTacticalDict('【PRD 規格防線】：TPM 必須在開模前，攔截不切實際的幻想規格，避免模具報廢。')">🔍 解鎖戰術細節</button>
                        `
                    },
                    { 
                        name: "幻化幻化 (ID/CMF)", 
                        text: `<div class="edu-overview-card"><strong>會做什麼：</strong>定義色彩、材質、工藝。<strong>核心目標：</strong>打造完美產品視覺。</div>`
                    }
                ]
            },
            {
                title: "2. 萬物星塵 ── 廠商材料端 (Vendors)",
                diagramFlowArray: [
                    { 
                        name: "物料冶煉", 
                        text: `<div class="edu-overview-card"><strong>會做什麼：</strong>研發核心晶片、感測器或特種膠材。<strong>核心目標：</strong>穩定供應鏈長料期原件。</div>`
                    }
                ]
            },
            {
                title: "3. 物質深淵 ── 代工智造端 (EMS Factory)",
                diagramFlowArray: [
                    { 
                        name: "機械熔爐", 
                        text: `<div class="edu-overview-card"><strong>會做什麼：</strong>將圖紙化為實體大批量複製。<strong>核心目標：</strong>死守直通率（FPY）與每小時產速（UPH）。</div>`
                    }
                ]
            }
        ],
        examVault: [
            { q: "當矽谷研發端要求 0.1mm 的極限間距，但工廠稱無法達成，TPM 職責是？", o: ["當傳話筒告知兩邊各自開會", "調閱歷史 Cpk 數據，主導技術代償方案談判", "全盤聽從客戶 RD 的行政命令"], a: 1 },
            { q: "工廠良率 99%，直通率 (FPY) 只有 40%，代表？", o: ["製程非常完美", "大批機器帶有手工重工內傷，DOA 風險極高", "可以直接開閘放水出貨"], a: 1 },
            { q: "何謂 PRD？", o: ["代工廠的排班表", "產品需求規格書", "物料清單"], a: 1 },
            { q: "TPM 在三方賽局中的定位是？", o: ["客戶的秘書", "工廠的品保", "跨功能的仲裁者與技術橋樑"], a: 2 },
            { q: "為何要破除『便籤條』傳話筒習慣？", o: ["為了節省紙張", "TPM 必須經過消化與行動項比對，才具備管理價值", "因為主管不喜歡看便籤"], a: 1 },
            { q: "Vendor 的 Lead Time 突然變長，TPM 第一動是？", o: ["要求工廠停工", "坐在辦公室等報告", "清查 Common Pool 資源並啟動二線備料評估"], a: 2 },
            { q: "EMS 廠最在意的獲利指標是？", o: ["BOM 報價單", "UPH 每小時產速與 FPY 直通率", "產品外包裝美感"], a: 1 },
            { q: "客戶 RD 郵件中的隱性行政命令通常包裝在？", o: ["專業的技術修辭中", "粗俗的大白話", "附件的 Excel 表格裡"], a: 0 },
            { q: "誰擁有決定神器（產品）靈魂的至高權力？", o: ["代工廠", "供應商", "客戶 (天界)"], a: 2 },
            { q: "4M1E 中的 E 指的是？", o: ["EE 工程師", "Environment 無塵室溫濕度與 ESD 靜電環", "Economic 經濟預算"], a: 1 }
        ]
    }
];

// 👑 Fisher-Yates 抽題引擎：10 抽 3 👑
(function() {
    const v = window.codexCourseEngineData[0].examVault;
    for (let i = v.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [v[i], v[j]] = [v[j], v[i]];
    }
    // 👑 剛性切割：只保留前 3 題，完美對位微學習閉環 👑
    window.codexCourseEngineData[0].examVault = v.slice(0, 3);
})();


---

### 🚀 結案收工指南

1.  **Dashboard 點亮**：現在一進來，右側會顯示一個大大的 **「百分比進度卡」**。它會掃描您的註冊表。目前的百分比會是 0%，因為您還沒有通關。
2.  **自動化關聯**：如果您未來追加了 `course_data_1-2.js` 到註冊表，大廳會自動顯示 `完成進度: 0 / 2`。
3.  **單元 1-1 降臨**：點選左側或大廳進入 1-1，內容已經被「淨化」為純粹的世界觀教材，且考試只需答對 3 題即可點亮該單元的綠燈憑證！

請老闆將這兩份代碼推上生產環境，檢閱 V6.0 戰略看板的威力！
