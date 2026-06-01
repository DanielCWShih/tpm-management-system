/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.0: 👑 子單元 1-2 專業還原體。全面物理解除所有遊戲化、玄幻用語。Page Headings 剛性還原為標準手機廠 NPI 開發生命週期架構。每頁配置 4 個核心專業關鍵字卡牌，完美互鎖底層 V6.3 大腦的分支控制邏輯。代碼 100% 完整全展開。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A2", 
        menuTitle: "1-2: 硬體生命週期與 NPI 交付",
        subPages: [
            {
                title: "1. Proto to DVT 階段 (研發設計驗證)",
                subMatrixBranches: [
                    {
                        branchLabel: "設計驗證開模防線",
                        keywords: [
                            { name: "Proto", shortDesc: "手工外殼概念打樣機 (3D Print / CNC Sample)" },
                            { name: "EVT", shortDesc: "首版主板工程驗證通電 (Engineering Verification)" },
                            { name: "DVT", shortDesc: "量產鋼模設計可靠性驗證 (Design Verification)" },
                            { name: "Design Limit", shortDesc: "硬體結構破壞應力極限測試 (Design Margin)" }
                        ],
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">主導首版實體主機板 PCB 的無塵自動化貼片，並正式開啟壽命達十萬模次以上的量產硬模具（Hard Tooling）。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">實現硬體核心主板的歷史首次通電通訊（Power-on），並將開模拼裝後的整機成品送入高強度的環境與摔落拷問。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">透過應力失效強制暴露出設計限制缺陷（Design Limit），並在進入大批量複製前，主導完成對模具的細微局部修模修正。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:16px;box-shadow:3px 3px 0px var(--border-heavy);margin-top:20px;">
                                <div class="edu-card-label" style="font-weight:900;font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">📖 核心關鍵字戰術字典 (點擊解鎖深層手機廠工藝避坑指南)</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【EVT 通電防線】：此階段不開鋼模、不貼外觀，重心死守在電子原理圖與 Layout 的 Debug，確保訊號完整性（SI）能順利抓取 Log。')"><span>🔍 EVT 通電解讀 (工程驗證)</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【DVT 摔落失效拆彈】：若在 DVT 摔落測試中爆發內部塑膠卡鉤斷裂，必須主導發動局部改模 DOE，在圖紙上精確追加去角（Radius）與內部加固肋條（Rib），用最低代價死守結構強度。')"><span>🔍 DVT 修模防線 (設計驗證階段)</span><span>➔</span></button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:14px;margin-top:12px;font-size:0.85rem;font-weight:700;display:none;"></div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. PVT to MP 階段 (工廠爬坡量產)",
                subMatrixBranches: [
                    {
                        branchLabel: "工廠試產拉速防線",
                        keywords: [
                            { name: "PVT", shortDesc: "量產大流水線大批量試產 (Production Verification)" },
                            { name: "MP", shortDesc: "全自動化大規模複製量產 (Mass Production)" },
                            { name: "Freeze", shortDesc: "研發設計圖紙剛性凍結限制 (Design Freeze)" },
                            { name: "Pre-order", shortDesc: "長料期戰略元件提前採購 (Advance Procurement)" }
                        ],
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">研發端圖紙、CMF 外觀技術文件全面關閘凍結，重心正式移交智造廠，在標準大線上開闢大流水線進行大批量試產。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">全面測試大流水線上自動化治具的複製精準度，調校工位作業工時，進行開線生產拉速與線平衡總驗收。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">優化操作工步，強制清空維修室 WIP（在製品）積壓呆料，以極高的一秒一機直通率（FPY）綠燈跨入 MP 量產出貨。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:16px;box-shadow:3px 3px 0px var(--border-heavy);margin-top:20px;">
                                <div class="edu-card-label" style="font-weight:900;font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">📖 核心關鍵字戰術字典 (點擊解鎖深層手機廠工藝避坑指南)</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【PVT 圖紙凍結】：此階段不允許研發隨意改動設計，工廠據此標準製定操作 SOP 與自動化手臂治具。')"><span>🔍 PVT 剛性條件 (量產前驗證)</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【並行現實與 Pre-order】：在內捲專案中，往往 EVT 評審未開完，就必須對 DVT 晶片進行 Pre-order（提前採購）。這極度考驗 TPM 對設計變更的風控手腕。')"><span>🔍 長料期物料對決 (提前備料)</span><span>➔</span></button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:14px;margin-top:12px;font-size:0.85rem;font-weight:700;display:none;"></div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. ECO 變更工程指令 (動態技術控管)",
                subMatrixBranches: [
                    {
                        branchLabel: "變更控制與財務索賠",
                        keywords: [
                            { name: "ECO", shortDesc: "工程設計變更管理指令 (Engineering Change Order)" },
                            { name: "Cut-in Batch", shortDesc: "新舊零件切換批次號鎖定 (Batch Control)" },
                            { name: "IMEI Track", shortDesc: "全球唯一機身識別追溯碼 (Traceability Link)" },
                            { name: "Scrap Liability", shortDesc: "舊料在庫庫存財務索賠防線 (Financial Claim)" }
                        ],
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">當量產期遭遇缺陷修正或元件優化時，接收研發變更指令，主導大流水線新舊零件配比動態現地對位切換。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">在 24 小時內迅速下達指令凍結產線，精算線上舊版零件、在製品（WIP）以及在途在單長料期物料的財務總損失。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-cut-label" style="font-family:monospace;font-weight:900;color:var(--text-secondary);border-bottom:1px dashed #ccc;padding-bottom:4px;margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text" style="font-size:0.9rem;font-weight:700;line-height:1.5;color:var(--text-main);">白紙黑字向責任方或客戶索賠呆料財務總成本，並精確追蹤換料 Cut-in 批次，防止全球 IMEI 追溯條碼斷線。</div>
                                </div>
                            </div>
                            <div class="grid-panel-card" style="background:#FFF;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:16px;box-shadow:3px 3px 0px var(--border-heavy);margin-top:20px;">
                                <div class="edu-card-label" style="font-weight:900;font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">📖 核心關鍵字戰術字典 (點擊解鎖深層手機廠工藝避坑指南)</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【ECO 財務防線】：發起變更時，若不第一時間凍結產線核算舊料呆料（Scrap Liability），工廠多生產一秒就會多產生一秒的報廢財務黑洞。')"><span>🔍 ECO 呆料損益 (工程變更變動)</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【IMEI 精確綁定】：在包裝線上必須將新版 ECO 零件版號與 IMEI 碼強行互鎖，確保未來消費者退貨時能精確定位物料來源。')"><span>🔍 IMEI 追溯鏈條 (國際機身身分證)</span><span>➔</span></button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2;border:2px solid var(--border-heavy);border-radius:var(--radius-sm);padding:14px;margin-top:12px;font-size:0.85rem;font-weight:700;display:none;"></div>
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
