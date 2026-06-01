/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.0: 👑 子單元 1-3 專業還原體。全面物理解除所有遊戲化、玄幻用語。Page Headings 剛性還原為標準手機代工廠通用產線與查線排查架構。每頁配置 4 個核心專業關鍵字卡牌，完美互鎖底層 V6.3 大腦的分支控制邏輯。代碼 100% 完整全展開。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A3", 
        menuTitle: "1-3: 工廠地理與 4M1E 線體通識",
        subPages: [
            {
                title: "1. SMT to FATP 四大通用線體",
                subMatrixBranches: [
                    {
                        branchLabel: "通用製造流水線體",
                        keywords: [
                            { name: "SMT", shortDesc: "裸板主板晶片高速銲接貼片製程 (Surface Mount)" },
                            { name: "SPI", shortDesc: "熔爐前錫膏 3D 印刷厚度厚度檢查 (Solder Paste Inspection)" },
                            { name: "FATP", shortDesc: "整機物理總裝、功能測試到包裝總稱 (Final Assembly & Test)" },
                            { name: "Reflow Oven", shortDesc: "高溫加熱液化完成化學熔焊之高溫熔爐 (Reflow Profile)" }
                        ],
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">主導裸板在淨化車間內進行鋼網網印錫膏、貼片焊接，並送往 FATP 後段流水線鎖附附件彩盒封箱出貨。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">在毫秒間將高精密晶片固化焊接於電路板，優化後段手工組裝 Cycle Time，消滅各站工位堆料瓶頸。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">過爐焊接 100% 導通、BGA 焊點內部零氣泡、零虛焊、包裝線克級磅秤精確秤重防錯，實現零漏塞零錯配件包裝良率。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:16px;box-shadow:3px 3px 0px var(--border-heavy);margin-top:20px;">
                                <div class="edu-card-label" style="font-weight:900;font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">📖 核心關鍵字戰術字典 (點擊解鎖深層手機廠工藝避坑指南)</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【SPI 銲前卡口】：在主板送入高溫熔爐前，攔截錫膏印偏、刮錫，這是在 SMT 製程中成本最低、效益最高的剛性攔截點。')"><span>🔍 SPI 錫膏檢查 (銲前厚度檢驗)</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【Reflow 爐溫 Profile 漂移】：若熔爐第三溫區加熱速度漂移，會引發大面積冷銲、虛焊缺陷。必須立刻勒令工廠工程師架設溫測線進爐實測。')"><span>🔍 爐溫 Profile 曲線 (高溫焊接熔爐)</span><span>➔</span></button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:14px;margin-top:12px;font-size:0.85rem;font-weight:700;display:none;"></div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 防水與感測器高端精密工序",
                subMatrixBranches: [
                    {
                        branchLabel: "高端高精技術站點",
                        keywords: [
                            { name: "Leak Test", shortDesc: "高壓氣密性非浸水防水檢測 (Leakage Detection)" },
                            { name: "IMU Cal", shortDesc: "慣性核心加速度羅盤多面翻轉校正 (Calibration)" },
                            { name: "AA Process", shortDesc: "六軸手臂動態對焦微米級AA主動對位 (Active Alignment)" },
                            { name: "Poka-Yoke", shortDesc: "實體硬體與操作結構治具防呆防錯 (Error Proofing)" }
                        ],
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">💡 主導多軸自動化點膠機噴塗防水膠路，並將整機送入專屬陀螺儀動態治具進行翻轉多面校正。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">建立 IP68 黃金氣密測試防線，精確洗淨陀螺儀與羅盤指南針零偏，排除凡間使用者升空漂移炸機隱患。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">防水防水橡膠圈鎖附形變維持 25%~40% 黃金壓縮比，治具測試誤判率（False Alarm）嚴格控制在 1% 以下。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:16px;box-shadow:3px 3px 0px var(--border-heavy);margin-top:20px;">
                                <div class="edu-card-label" style="font-weight:900;font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">📖 核心關鍵字戰術字典 (點擊解鎖深層手機廠工藝避坑指南)</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【AA 影像對位製程】：高階相機或影像模組為了排除微米級組裝公差，在點亮動態下利用六軸機器手臂微調至最清晰焦點的精密製程工藝。')"><span>🔍 AA 影像主動對位 (攝像對焦製程)</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【Poka-Yoke 現場防呆】：為了防止操作工因日夜班交接疲勞將排線反塞或漏裝附件，在線體上加裝的塑料防錯導向物理結構。')"><span>🔍 Poka-Yoke 防呆機制 (產線實體防錯)</span><span>➔</span></button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:14px;margin-top:12px;font-size:0.85rem;font-weight:700;display:none;"></div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. 4M1E 現地查線因果排查戰術",
                subMatrixBranches: [
                    {
                        branchLabel: "現場大排除因果矩陣",
                        keywords: [
                            { name: "Man", shortDesc: "人員異動與日夜班轉廠交接檢查 (Operator State)" },
                            { name: "Machine", shortDesc: "設備探針磨損與電動起子鎖附扭力 (Tool Calibration)" },
                            { name: "Material", shortDesc: "上游料號IQ檢驗原始Lot追溯 (Lot Number)" },
                            { name: "Method / Env", shortDesc: "映像檔軟體版本與無塵室ESD破窗 (Software & ESD)" }
                        ],
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">當大流水線測試站良率遭遇無預警無預警雪崩下跌時，第一時間趕赴現地調閱日誌發動排除法。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">地毯式清查 IQC 進料報告與生產首件檢查（FAI）數據，精確核對物料批號，嚴防混料汙染。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">在兩小時內查出究竟是探針變形、新人未受訓上崗、電動螺絲刀扭力偏離、還是無塵室靜電防護 ESD 破窗。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:16px;box-shadow:3px 3px 0px var(--border-heavy);margin-top:20px;">
                                <div class="edu-card-label" style="font-weight:900;font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">📖 核心關鍵字戰術字典 (點擊解鎖深層手機廠工藝避坑指南)</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【日夜班轉廠交接】：產線交接（Shift Transition）往往是良率下跌高發期。趕往現場應立即調閱交接班金件點檢日誌（Setup Verification Log）。')"><span>🔍 轉廠交接點檢 (日夜轉班排查)</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【IQC 與 COA 互鎖】：全面追蹤進料原始報告與供應商 Lot Number，檢查物料在倉庫至產線間的防潮與保存期限有無破窗。')"><span>🔍 物料批號追溯 (料號與Lot檢驗)</span><span>➔</span></button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:14px;margin-top:12px;font-size:0.85rem;font-weight:700;display:none;"></div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "在 SMT 貼片製程中，架設在鋼網印刷機正後方、用來在過爐前及時攔截錫膏印偏或刮錫的 3D 量測設備是？", o: ["AOI 自動光學檢測儀", "SPI 錫膏檢查儀", "X-Ray 斷層掃描"], a: 1 },
            { q: "自動化功能測試站治具的誤判率 (False Alarm) 若飆高到 15% 以上，會引發何種製程災難？", o: ["引發大量健康主板被誤判送去手工拆解重工，人為破壞元件，直通率與利潤垮台", "提升產品在市場的定價", "縮短物料交期"], a: 0 },
            { q: "4M1E 現場查線戰術核心矩陣中，不包含以下哪一項？", o: ["Machine 設備治具與扭力校正", "Economic 專案開發經濟財務預算", "Environment 無塵室 ESD 靜電與溫濕度"], a: 1 }
        ]
    }
];
