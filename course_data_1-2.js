/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-29 V6.0: 👑 子單元 1-2 滿血全量版。專注於「硬體生命週期與 NPI 交付」。全面導入「會做什麼、核心目標、終極期待」三維戰術矩陣。10 題核心庫經由 Fisher-Yates 洗牌引擎動態 Slice(0,3) 進行微學習抽題。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A2", 
        menuTitle: "1-2: 硬體生命週期與 NPI 交付",
        subPages: [
            {
                title: "1. 標準 NPI 時程里程碑 (Proto ~ MP)",
                diagramFlowArray: [
                    { 
                        name: "Proto 原型機", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 研會做什麼</div>
                                    <div class="edu-card-body-text">利用 3D 列印或 CNC 手工打樣外殼。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">快速驗證產品的概念巨觀美學與結構可行性。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">完成整機物理堆疊（Stack-up）微觀檢視，清空干涉。</div>
                                </div>
                            </div>
                            <button onclick="showTacticalDict('【Proto 防線】：此階段不開鋼模，專注用最低成本打樣抓出嚴重的結構撞車。')">🔍 解鎖戰術細節</button>
                        `
                    },
                    { 
                        name: "EVT 工程驗證", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 研會做什麼</div>
                                    <div class="edu-card-body-text">發動首版主機板 PCB 的實體化無塵貼片與總裝。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">實現主機板的歷史首次通電打通（Power-on）。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">確認基本電路訊號完整，除錯接口順理抓到 Log 訊號。</div>
                                </div>
                            </div>
                        `
                    },
                    { 
                        name: "DVT 設計驗證", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 研會做什麼</div>
                                    <div class="edu-card-body-text">量產鋼模（Hard Tooling）正式開模，進行完整拼裝。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">全面送入高強度摔落、熱衝擊與防水可靠性拷問。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">強制暴露設計限制（Design Limit）並對模具細微修正。</div>
                                </div>
                            </div>
                        `
                    },
                    { 
                        name: "PVT 生產驗證", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">研發圖紙剛性凍結，在正式量產線上開闢流水線。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">測試大批量複製組裝能力，優化操作工位與拉速 UPH。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">驗證治具複製精準度，清空維修室在製品（WIP）呆料。</div>
                                </div>
                            </div>
                        `
                    },
                    { 
                        name: "MP 大量量產", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">流水線日夜並行全面啟動大規模複製組裝。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">以極高的直通率（FPY）大批量出貨，死守代工毛利。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">配合動態工程變更（ECO），安全將神器導入實體市場。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 手機線重疊現實 (Reality Overlap)",
                diagramFlowArray: [
                    { 
                        name: "並行 Proto", 
                        text: `<div class="edu-overview-card"><strong>時間壓縮現況：</strong>研發試產被壓縮至 6-9 個月。在 EE 還在通電調試主板 Debug 時，ME 被迫同步提前開啟量產鋼模（Hard Tooling）以搶佔市場空窗。</div>`
                    },
                    { 
                        name: "階段高度重疊", 
                        text: `<div class="edu-overview-card"><strong>長料期雷區：</strong>市場時程 Time-to-Market 卡死，EVT 階段的出關審查尚未開完，DVT 階段的長料期元件（如稀缺主晶片）就必須提前強制下單（Pre-order）。</div>`
                    },
                    { 
                        name: "PVT 極速拉速", 
                        text: `<div class="edu-overview-card"><strong>線體拷問：</strong>大流水線上通常只有 3 至 5 天的試產拉速期。任何治具公差偏移都會引發全盤癱瘓，極度考驗現場即時拆彈防線。</div>`
                    }
                ]
            },
            {
                title: "3. 變更工程管理 (ECO 投產防線)",
                diagramFlowArray: [
                    { 
                        name: "ECO 變更發起", 
                        text: `<div class="edu-overview-card"><strong>定義：</strong>Engineering Change Order。當量產爬坡期遭遇重大缺陷或設計優化時，由研發端發起的神聖設計變更指令。</div>`
                    },
                    { 
                        name: "庫存呆料結算", 
                        text: `<div class="edu-overview-card"><strong>核算防線：</strong>TPM 必須在 24 小時內凍結線體物料，精算線上舊版零件、在製品（WIP）以及長料期在途物料的呆料財務總成本，向客戶索賠。</div>`
                    },
                    { 
                        name: "線體動態導入", 
                        text: `<div class="edu-overview-card"><strong>實體上線：</strong>主導新版鋼網與自動化治具現地對位，並追蹤新舊版切換批次（Cut-in Batch），確保全球 IMEI 追溯鏈條不斷線。</div>`
                    }
                ]
            }
        ],
        examVault: [
            { q: "在 NPI 生命週期模型中，哪一個里程碑的 Exit Criteria 是『實現電路原理圖與 PCB Layout 的首版通電打通（Power-on）』？", o: ["EVT 工程驗證生命週期", "PVT 生產驗證生命週期", "MP 大量量產階段"], a: 0 },
            { q: "專案進度正式跨入 PVT 里程碑時，代表以下何種硬體狀態已經發生？", o: ["產品還在進行最初步的市場概念與 ID 美學調研", "研發設計檔案與 CMF 貼圖全面剛性凍結（Freeze），重心全力轉移至工廠量產複製與拉速", "外殼鋼模尚未開模，還在等待結構 ME 出圖"], a: 1 },
            { q: "量產五金與塑膠硬模具（Hard Tooling）正式開啟通常是在哪一個生命週期階段？", o: ["Proto 階段", "EVT 階段", "DVT 階段"], a: 2 },
            { q: "當客戶為趕時程強行要求在 EVT 未過關前直接下單開啟量產鋼模，TPM 的最佳防禦路徑是？", o: ["盲目簽字，放行不切實際的政治幻想", "出示極限公差疊加分析與 DFM 報告，用良率懲罰危險度讓數據說話", "直接向客戶研發團隊發起罵戰"], a: 1 },
            { q: "在 PVT 試產拉速結案前，維修室（Repair Room）大量堆積在製品（WIP），TPM 應採取何種剛性行動？", o: ["放任不管，直接宣布進入大量量產 (MP)", "強行勒令執行維修室 WIP 清空計劃，徹底清查故障 Root Cause", "將這批 WIP 直接偷偷打包出貨給客戶"], a: 1 },
            { q: "什麼是 ECO (Engineering Change Order)？", o: ["工廠的生產開線排班表", "工程變更管理指令", "採購部門的成本物料單"], a: 1 },
            { q: "在手機案中，因時程壓縮導致 EVT 出關評審尚未開完，就必須提前對 DVT 的長料期原件進行 Pre-order。此現象被稱作？", o: ["階段高度重疊與並行現實", "地毯式全面覆蓋", "常規化預設時程"], a: 0 },
            { q: "當發起 ECO 設計變更時，TPM 職責在財務範疇上最核心的一動是？", o: ["要求電子工程師去改原理圖", "在 24 小時內結算、凍結線體舊物料，完成庫存呆料財務結算與索賠防線", "坐在辦公室等工廠提報費用"], a: 1 },
            { q: "DVT 階段進行可靠性高低溫環境衝擊測試後，外殼螺絲孔發生應力斷裂。此失效最可能屬於？", o: ["工廠操作工的組裝手法問題", "設計限制 (Design Limit) 的結構強度缺陷", "測試治具漏電所致"], a: 1 },
            { q: "如何確保在 MP 量產期導入 ECO 變更後，客退品依然具備精確的可追溯性？", o: ["口頭交代工廠注意新舊切換即可", "在包裝線上精確綁定並追蹤新舊版切換批次（Cut-in Batch）與 IMEI 碼鏈條", "直接在機器外殼用簽字筆做標記"], a: 1 }
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
    window.codexCourseEngineData[0].examVault = v.slice(0, 3);
})();
