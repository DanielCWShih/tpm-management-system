/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.2: 👑 術語子頁籤模式。
1. 沒收滾輪：將術語封裝為頂部 Tab 按鈕，內容原地切換。
2. 術語卡片化：每個 Page 剛性配置 4 個術語按鈕，點擊即更新下方 3 欄位指標。
3. 全景圖植入：Page 1 內容區頂部預留全域全景示意圖槽位。
4. 專業語境：100% 還原 Brand/Vendor/EMS 三方賽局，小白括號補充。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            {
                title: "1. 客戶研發端 (Brand R&D - 定義規格與美學)",
                diagramFlowArray: [
                    {
                        name: "PRD (產品規格書)",
                        text: `
                            <div style="margin-bottom:20px; text-align:center; border:2px solid #1A1A1A; border-radius:8px; overflow:hidden; background:#EEE;">
                                <img src="assets/img/overview_1-1.png" alt="1-1 單元全景示意圖" style="width:100%; height:auto; display:block;" onerror="this.src='https://placehold.co/1200x250/1A1A1A/FFFFFF?text=1-1+Standard+Brand+R-D+Overview+Map'">
                            </div>
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">⚙️ 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">主導市場調研，交付初代產品規格需求說明書 (PRD) 與開發圖紙。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">🎯 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">定義極限技術參數，建立品牌專利與技術護城河，拉高產品溢價。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">代工廠 100% 復刻複雜結構，不接受任何因組裝公差引起的設計妥協。</div>
                                </div>
                            </div>
                            <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:12px; margin-top:15px; font-weight:700; font-size:0.82rem; line-height:1.5;">
                                💡 <strong>TPM 避坑字典：</strong>在開模前剛性攔截不切實際的幻想規格，避免後續改模造成數十萬報廢。
                            </div>
                        `
                    },
                    {
                        name: "ID (工業外觀設計)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">⚙️ 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">繪製手機殼體美學線條，定義按鍵回彈感、鏡頭比例與握持手感。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">🎯 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">打造無懈可擊的極簡外部視覺，建立實體零售店的第一眼購買意願。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">量產機器表面零刮傷、零色差，絕對消滅注塑模具頂出工藝產生的收縮痕。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "CMF (材質與工藝)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">⚙️ 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">Color, Material, Finishing。定義顏色配比、材質選取與表面陽極氧化工藝。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">🎯 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">利用特殊視覺紋理或 PVD 鍍膜，打造高階的金屬與玻璃物理觸感。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">大批量產出色差死守 Delta E 標準。必須簽封「限度樣本」防止判定糾紛。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Clearance (安全間距)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">⚙️ 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">計算內部主板元件、電池、軟板與外殼中框間的 3D 物理避讓距離。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">保留公差疊加緩衝，防範機器受撞擊時內部晶片因物理擠壓短路毀損。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">死守標準 0.3mm 綠燈水位，不允許結構為追求極致超薄而跨越安全界限。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 零件供應商端 (Vendors - 控制核心晶片與交期)",
                diagramFlowArray: [
                    {
                        name: "Lead Time (物料交期)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">⚙️ 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">管控從工廠下單到元件運抵倉庫的週轉沙漏時間。針對長有料期晶圓進行水位控管。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">🎯 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">破除長料期物料對時程的卡死，確保開線當天全線物料 100% 水位達標。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">精算時程重疊風險。絕不允許 Pre-order 引發巨大的財務呆料報廢與虧損。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "COA (出廠檢驗證明)",
                        text: `<div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;"><div style="font-size:0.8rem; font-weight:700; color:#1A1A1A;">Certificate of Analysis。元件出廠前由原廠實驗室簽發的實測合格報告，證明公差受控。</div></div>`
                    },
                    {
                        name: "Second Source (備援料)",
                        text: `<div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;"><div style="font-size:0.8rem; font-weight:700; color:#1A1A1A;">引進 Pin-to-Pin 完全相容的二線零件。目的在於破除原廠壟斷、降低成本、並防止天災斷供。</div></div>`
                    },
                    {
                        name: "IQC (進料檢驗品保)",
                        text: `<div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;"><div style="font-size:0.8rem; font-weight:700; color:#1A1A1A;">Incoming Quality Control。物料進廠後的第一道光學與針床抽檢防線，嚴格攔截瑕疵料件。</div></div>`
                    }
                ]
            },
            {
                title: "3. 代工製造廠端 (EMS Factory - 總裝、拉速與直通良率)",
                diagramFlowArray: [
                    {
                        name: "FPY (首檢直通率)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">⚙️ 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">First Pass Yield。精算產品一次性組裝測試通關、未經歷重工維修的剛性良率。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:8px;">🎯 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">暴露線體真實健康度，攔截帶有二次手工焊接「內傷」的機台流入包裝。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; color:#1A1A1A; line-height:1.5;">TPM 鐵律：『不斬入庫良率，只斬直通率！』以此死守出貨品質紅線。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "UPH (每小時產速)",
                        text: `<div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;"><div style="font-size:0.8rem; font-weight:700; color:#1A1A1A;">Units Per Hour。每小時實體下線機器數。優化各站作業 Cycle Time，消滅瓶頸工位 (Bottle-neck)。</div></div>`
                    },
                    {
                        name: "WIP (在線在製品)",
                        text: `<div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;"><div style="font-size:0.8rem; font-weight:700; color:#1A1A1A;">Work In Process。滯留在線體或維修室的待修主板，需及時發動「WIP 清空計劃」排查病灶。</div></div>`
                    },
                    {
                        name: "Line Balance (線平衡)",
                        text: `<div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;"><div style="font-size:0.8rem; font-weight:700; color:#1A1A1A;">整線平衡率死守 85% 以上。防止前段瘋狂堆料、後段大面積閒置，打通順暢拉速脈絡。</div></div>`
                    }
                ]
            }
        ],
        examVault: [
            { q: "當研發端要求 0.1mm 的極限間距，但工廠稱會撞車，TPM 職責是？", o: ["當傳話筒各自開會", "調閱歷史 Cpk 數據，主導跨功能談判", "聽從 RD 最高指令"], a: 1 },
            { q: "工廠良率 99.2%，但直通率 (FPY) 只有 35%，這代表？", o: ["製程受控", "大批機台帶有手工重工內傷，風險極高", "可以直接出貨"], a: 1 }
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
