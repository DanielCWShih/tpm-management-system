/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-29 V6.1: 👑 子單元 1-2 滿血進化版。更正最新時間。全量多行展開。全面導入「會做什麼、核心目標、終極期待」三維戰術矩陣。精準填補 Proto、EVT、DVT、PVT、MP 完整大畫布，10題題庫隨機抽 3 題。
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
                                    <div class="edu-card-label">⚙️ 研發會做什麼</div>
                                    <div class="edu-card-body-text">利用 3D 列印或 CNC 手工打樣外殼，進行初步整機配置配置檢點。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">快速驗證硬體概念的可行性、握持手感比例、與基礎結構設計方向。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">完成整機物理堆疊（Stack-up）微觀檢視，為首版 PCB Layout 開闢一條安全通道。</div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【物理堆疊審查】：在 3D CAD 環境內強行清查主板晶片、排線、電池與外殼間的干涉公差，將硬干涉機率提前清零。')"><span>🔍 Stack-up 堆疊防線</span><span>➔</span></button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "EVT 工程驗證", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 研發會做什麼</div>
                                    <div class="edu-card-body-text">發動首版實體主機板 PCB 無塵貼片與實體電子零組件總裝。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">實現主機板的歷史首次通電點亮（Power-on），進行基礎軟硬體功能 Debug。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">驗證基本電路訊號完整性（SI），確保除錯接口能 100% 順利與工程 PC 通訊抓取 Log。</div>
                                </div>
                            </div>
                        `
                    },
                    { 
                        name: "DVT 設計驗證", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 研發會做什麼</div>
                                    <div class="edu-card-body-text">量產十萬模次鋼模（Hard Tooling）正式開模，使用實體開模金件進行整機 100% 封閉裝配。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">將整機成品送入摧毀性的可靠性（Reliability）試煉，強制暴露設計極限。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">追蹤機器在經歷嚴苛跌落、高溫高濕熱衝擊後的失效表現，完成大批量生產前的修模防線。</div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策沙盒（學以致用模擬演練）</div>
                                <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>DVT 跌落測試中，產品在特定角度連續跌落時內部卡鉤集體應力斷裂。模具已開好，改模重新出鋼模需要高達 50 萬代價與 1 個月時程，你該如何拆彈？</div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：客退海嘯引爆！</strong><br>你選擇在 MP 線上增加人工雙面膠帶貼死補強。結果運到凡間後因快遞震動，卡鉤在彩盒內大面積斷裂，DOA 良率炸裂！')">方案 A：拒絕修改模具，要求工廠在 MP 線上用人工加貼膠帶死補強。</button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：精準拆彈，最低代價完美出關！</strong><br>你主導局部改模 DOE，在圖紙上精確追加去角（Radius）與內部加固肋條（Rib）補強。只花 3 萬改模費就死守住剛性結構防線！')">方案 B：發動極速 DOE，在原模具局部追加去角並增設內部補強肋條（Rib）。</button>
                                </div>
                                <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "PVT 生產驗證", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">研發端圖紙、CMF 文件全面剛性凍結（Freeze），重心移交智造廠，在標準大線上開闢大流水線。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">全面測試大流水線的複製速率（UPH），調校工位作業工時，進行開線生產拉速與線平衡總驗收。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">優化操作工步，嚴格執行維修室 WIP（在製品）清空計劃，排除一切治具潛在缺陷。</div>
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
                                    <div class="edu-card-body-text">大規模流水線全面日夜並行開火總裝，產品開閘放水，大批量流入凡間實體市場。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">在剛性出關指標（Exit Criteria）的護航下，維持超高直通率與 UPH 產速峰值，守住代工利潤。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">安全導入後續動態變更（ECO），並將開發期血淚遭遇提煉凝結成 Lessons Learned 歷史文獻。</div>
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
                        text: `<div class="edu-overview-container"><div class="edu-overview-card"><div class="edu-card-label">📋 產業畸形現實</div><div class="edu-card-body-text">在極度內捲的手機專案中，研發試產被極限壓縮至 6 個月。EE 團隊還在對首版主板進行通電調試 Debug 的同時，ME 團隊被迫同步提前開啟量產鋼模，逼迫結構與電路進行雙線並行對決。</div></div></div>`
                    },
                    { 
                        name: "階段高度重疊", 
                        text: `<div class="edu-overview-container"><div class="edu-overview-card"><div class="edu-card-label">📋 產業畸形現實</div><div class="edu-card-body-text">因市場時程（Time-to-Market）卡死，EVT 階段的出關評審尚未召開，DVT 階段的長料期元件就必須提前強制下單（Pre-order）。研發端除錯與工廠端模具修改在線體上平行爆發，考驗 TPM 極強的變更控制手段。</div></div></div>`
                    }
                ]
            },
            {
                title: "3. 變更工程管理 (ECO 投產防線)",
                diagramFlowArray: [
                    { 
                        name: "ECO 發起與呆料結算", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ TPM會做什麼</div>
                                    <div class="edu-card-body-text">當接收到研發變更指令（Engineering Change Order）時，必須在 24 小時內剛性凍結流水線物料。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">精算線上舊版零件、在製品（WIP）以及在途長料期物料的呆料財務總成本，白字黑字向客戶索賠，卡死財務防線。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">主導新版治具與鋼網現地切換，精確紀錄新舊版切換批次（Cut-in Batch）並銲入 IMEI 碼，防止全球追溯鏈斷線。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "在標準 NPI 生命週期中，哪一個里程碑的 Exit Criteria 是『實現電路原理圖與 PCB Layout 的首版通電打通（Power-on）』？", o: ["EVT 工程驗證生命週期", "PVT 生產驗證生命週期", "MP 大量量產階段"], a: 0 },
            { q: "專案進度正式跨入 PVT 里程碑時，代表以下何種硬體狀態已經發生？", o: ["產品還在進行最初步的市場概念與 ID 美學調研", "研發設計檔案與 CMF 貼圖全面剛性凍結（Freeze），重心全力轉移至工廠量產複製與拉速", "外殼鋼模尚未開模，還在等待結構 ME 出圖"], a: 1 },
            { q: "量產五金與塑膠硬模具（Hard Tooling）正式開啟通常是在哪一個生命週期階段？", o: ["Proto 階段", "EVT 階段", "DVT 階段"], a: 2 },
            { q: "當客戶為趕時程強行要求在 EVT 未過關前直接下單開啟量產鋼模，TPM 的最佳防禦路徑是？", o: ["盲目簽字放行，滿足美學堅持", "出示極限公差疊加分析與 DFM 報告，用數據實證良率懲罰危險度", "直接跟客戶研發團隊開會開展罵戰"], a: 1 },
            { q: "在 PVT 試產拉速結案前，維修室（Repair Room）大量堆積在製品（WIP），TPM 應採取何種剛性行動？", o: ["放任不管，直接宣布進入大量量產 (MP)", "強行勒令執行維修室 WIP 清空計劃，徹底清查故障根本原因 (Root Cause)", "將這批 WIP 直接偷偷打包出貨給終端使用者"], a: 1 },
            { q: "什麼是 ECO (Engineering Change Order)？", o: ["代工廠大流水線的開線排班表", "工程設計變更管理指令矩陣", "採購部門核算的材料成本單清冊"], a: 1 },
            { q: "在成熟手機案中，因時程壓縮導致 EVT 出關評審尚未開完，就必須提前對 DVT 的長料期原件進行 Pre-order。此現象被稱作？", o: ["時程生命週期高度重疊與並行現實", "地毯式全面覆蓋", "正常預設時程導航"], a: 0 },
            { q: "當發起 ECO 設計變更時，TPM 職責在財務範疇上最核心的一動是？", o: ["要求電子工程師立即修改 Layout 圖紙", "在 24 小時內結算、凍結線體舊物料，完成庫存呆料財務結算與向客戶索賠防線", "直接要求工廠自行吞下虧損"], a: 1 },
            { q: "DVT 階段進行可靠性高低溫環境衝擊測試後，外殼螺絲孔發生應力斷裂。此失效最可能屬於？", o: ["工廠操作工的組裝扭力手法問題", "設計限制 (Design Limit) 的結構強度缺陷", "測試暗室功能治具誤判所致"], a: 1 },
            { q: "如何確保在 MP 量產期導入 ECO 變更後，客退機台依然具備精確的可追溯性？", o: ["口頭交代工廠日夜班注意切換即可", "在線體上精確綁定並追蹤新舊版切換批次（Cut-in Batch）與 IMEI 碼鏈條", "要求工廠把舊零件通通倒進垃圾桶"], a: 1 }
        ]
    }
];

(function() {
    if (!window.codexCourseEngineData || window.codexCourseEngineData.length === 0) return;
    const vault = window.codexCourseEngineData[0].examVault;
    for (let i = vault.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vault[i], vault[j]] = [vault[j], vault[i]];
    }
    vault.forEach(q => {
        const originalCorrectOptionText = q.o[q.a];
        for (let i = q.o.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.o[i], q.o[j]] = [q.o[j], q.o[i]];
        }
        q.a = q.o.indexOf(originalCorrectOptionText);
    });
    window.codexCourseEngineData[0].examVault = vault.slice(0, 3);
})();
