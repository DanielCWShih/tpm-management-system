/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.0: 👑 子單元 1-2 專業還原完全體。全面剝離所有玄幻遊戲用語。Page Headings 剛性還原為標準手機廠 NPI 開發生命週期架構。每頁配置 4 個核心專業關鍵字變數，完美相容 HTML V6.3 的流程 Tab 導航控制邏輯。代碼 100% 完整全量展開，絕無縮寫。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A2", 
        menuTitle: "1-2: 硬體生命週期與 NPI 交付",
        subPages: [
            {
                title: "1. Proto to DVT 階段 (手機案硬體研發設計與鋼模可靠性驗證)",
                diagramFlowArray: [
                    {
                        name: "Proto (原型打樣機)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">利用 3D 列印或 CNC 機械手工切削打樣塑料與金屬外殼，拼裝無實體功能的微觀模型。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">快速實體化驗證產品初代工業設計（ID）巨觀比例、內部握持手感、與外觀貼圖意向之可行性。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">完成歷史首次機身結構物理堆疊（Stack-up）微觀檢視，為後續正式 Layout 主板電路清空物理干涉撞車雷區。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "EVT (工程驗證階段)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">Engineering Verification Test。在淨化車間發動首版真實電路原理圖主機板 PCB 的實體打樣貼片與總裝。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">實現主機板的歷史首次通電點亮通訊（Power-on），調試基本軟體 Image、核心晶片基頻訊號與各接口 Debug。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">驗證基礎電子設計電性訊號完整性（SI），確保除錯接口能 100% 順暢與工程主機通訊抓取錯誤 Log。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "DVT (設計驗證階段)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">Design Verification Test。壽命達十萬模次以上的量產鋼模具（Hard Tooling）正式開模，進行完整整機裝配。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">將正式開模的金件機台，送入高強度的極限摔落、高溫高濕環境熱衝擊、與防水等級可靠性（Reliability）試煉。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">強制暴露出結構硬體缺陷，並在大批量生產複製前，主導製程 ME 與結構 ME 完成細微模具修模修正。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A; margin-top:20px;">
                                <div style="font-weight:900; font-size:0.85rem; color:#475569; margin-bottom:10px;">📖 專業技術字典</div>
                                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px;">
                                    <button style="background:#FFF; border:2px solid #1A1A1A; padding:10px; border-radius:6px; font-weight:800; font-size:0.8rem; text-align:left; cursor:pointer;" onclick="showTacticalDict('【DVT 應力折斷修模】：DVT 摔落測試中，若特定角度連續跌落時內部卡鉤發生斷裂，重新出模具需耗費數十萬。TPM 應主導局部改模 DOE，在圖紙上精確追加去角（Radius）與內部加固肋條（Rib）補強，最低代價保住強度。')">🔍 DVT 卡鉤失效修模防線 ➔</button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin-top:12px; font-size:0.85rem; font-weight:700; line-height:1.5; display:none;"></div>
                            </div>
                        `
                    },
                    {
                        name: "Design Limit (設計限制)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">透過拉力計、撞擊機等精密治具，測試手機外殼材料、按鍵、螢幕所能承受的極限物理破壞應力公理邊界。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">找出超出正常 PRD 規範以外的設計強度裕度（Margin），精準抓出設計結構撞車的潛在隱患點。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">確保產品跌落臨界點高於市場平均摔落水位，絕不允許因結構強度脆弱引發大規模 DOA 客退。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. PVT to MP 階段 (智造工廠流水線爬坡、圖紙凍結與拉速驗收)",
                diagramFlowArray: [
                    {
                        name: "PVT (生產驗證階段)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">Production Verification Test。研發端圖紙剛性凍結，在大流水線上完全動用正式操作工、正式自動化治具開展大批量生產。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">全面測試驗證大流水線大規模複製組裝的能力，調校工位 UPH 作業產速，進行線平衡與拉速總驗收。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">優化操作 SOP 工步，在試產結關前強行推動維修室 WIP（在製品）積壓清零，以極高直通率（FPY）安全跨入 MP。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "MP (大量量產階段)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">Mass Production。大流水線日夜班並行全面啟動大規模複製組裝，機器開閘出貨，大批量流入凡間實體零售市場。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">以穩定的超高直通率與極速 UPH 拉速進行極限大量複製，滿足市場 Forecast 供貨交期，死守製造利潤。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">安全平穩地主導 ECO 工程變更導入切換，並將本專案血淚研發經驗凝結提煉為 Lessons Learned 歷史文獻。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Freeze (研發設計圖紙凍結)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">在 DVT 跨入 PVT 前夕，下發神聖的剛性禁令，全面凍結鎖死所有 2D/3D 結構圖紙、電路原理圖與 CMF 技術文件。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">為智造智造廠鎖定一個神聖不可隨意改動的製造基準，以便工廠固化鋼網、治具設計與編寫生產線 SOP。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">研發工程師絕不允許在 Freeze 後私自找工廠現地修改任何微觀尺寸，嚴防引發大規模開線撞車失效。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Pre-order (長料期長料提前採購)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">針對 Lead Time 交期長達 12 週以上的稀缺高精晶片或特種物料，在當前專案里程碑出關評審尚未開完前，提前下單採購。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">物理壓縮長有料期沙漏對時程的無情卡死，強行保證後續 DVT 或 PVT 開線當天線體有實物料可用。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">精密算準時程重疊風險。絕不允許盲目 Pre-order 導致后續變更時上游爆發巨大財務呆料報廢。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. ECO 變更工程指令 (爬坡爬坡期重大缺陷修正與在庫呆料清算防線)",
                diagramFlowArray: [
                    {
                        name: "ECO (工程設計變更)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">Engineering Change Order。當產品在試產期遭遇結構短路或重大設計變更時，由研發端下發的剛性工程變更指令檔案。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">主導大流水線現地新舊零件、新舊鋼網、自動化治具的配比調校與動態平穩上線切換。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">在毫秒級時延內下達全線凍結，精確核算在庫呆料財務損失，嚴防不對齊指令產生報廢財務黑洞。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Cut-in Batch (新舊物料切換批次)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">精確紀錄並釘死新舊零件切換當天大流水線的實體開線批次號、時間戳記、與生產線工位線號。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">界定邊界防線。確保第一台更換為新 ECO 安全零件的機器具備白紙黑字的物理切換界線。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">配合包裝線將此批次號強行互鎖編入全球唯一機身追溯 IMEI 碼鏈條，嚴防未來售後追溯鏈斷線。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Scrap Liability (呆料索賠財務防線)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">精確盤點並核算因為此次 ECO 工程設計變更，所導致的線上舊版零件、維修室 WIP 在製品、供應商在庫材料、在途中在單長料期物料的財務總損失金額。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">釐清責任歸屬，白紙黑字向發起設計變更的責任方（如客戶或上游供應商）發動硬核呆料虧損財務索賠。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">卡死每一分財務虧損防線，絕不允許智造代工廠盲目自行吞下因研發除錯失誤引發的物理報廢金額。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "IMEI Track (國際移動識別碼追溯)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">International Mobile Equipment Identity。在 FATP 包裝線上向每一台通關機器的晶片大腦內，剛性燒錄全球唯一的 15 位身分證編碼。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">將整機實體、主板版號、ECO元件批次與物流終端使用者強行進行一對一數據綁定。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">在客退品爆發集體失效時，能一鍵在系統後台天眼逆向追查出當年在工廠開線時的 Lot 原物料批號病灶。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "在 NPI 開發生命週期中，哪一個里程碑的 Exit Criteria 是『實現電路原理圖與 PCB Layout 的首版通電點亮（Power-on）』？", o: ["EVT 工程驗證階段", "PVT 生產驗證階段", "Mass Production 大量量產"], a: 0 },
            { q: "當研發圖紙與 CMF 技術文件全面剛性凍結（Freeze），產品的開發重心正式轉移到哪一個階段？", o: ["Proto 樣機調研", "PVT 大批量試產與工廠拉速驗收", "市場概念設計"], a: 1 },
            { q: "當發起 ECO 工程變更指令時，TPM 在財務管理範疇上最核心的戰術動作是？", o: ["坐等採購核算費用", "在 24 小時內凍結產線、核算線上 WIP 與在途舊料，完成財務呆料索賠防線", "直接要求設計師修改圖紙"], a: 1 }
        ]
    }
];
