/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.2: 👑 術語子頁籤零滾動完全體。
1. 沒收滾輪：所有細部工序全量映射至橫向防錯 Tab 鈕，內容原地切換。
2. 4欄位矩陣：每頁剛性配置 4 個術語卡牌按鈕，按鈕內僅保留純名詞與白話括號。
3. 頂部全景圖：首頁內容區最頂端剛性預留 beginner_codex_assets 專用圖像網格。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            {
                title: "1. 客戶研發端 (Brand R&D - 主導產品規格與美學定義)",
                diagramFlowArray: [
                    {
                        name: "PRD (產品規格需求書)",
                        text: `
                            <div style="margin-bottom:15px; text-align:center; border:2px solid #1A1A1A; border-radius:6px; overflow:hidden;">
                                <img src="beginner_codex_assets/overview_1-1.png" alt="1-1單元全景圖" style="width:100%; height:auto; display:block;" onerror="this.src='https://placehold.co/1200x180/1A1A1A/FFFFFF?text=1-1+Brand+R-D+Process+Map'">
                            </div>
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導全球市場用戶調研與硬體規格定義，交割初代產品規格需求書（PRD）。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">追求極致的硬體功能參數與技術指標，用專利護城河拉高市售產品溢價。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">代工廠產線能 100% 完美復刻微觀複雜結構，不接受任何組裝公差導致的設計妥協。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin-top:12px; font-size:0.8rem; font-weight:700; line-height:1.4;">
                                💡 <strong>術語精確釋義：</strong>PRD 是定義產品靈魂的最高技術天規。TPM 必須在開模前剛性清查 CMF 是否具備產線現有流水線的量產能力，在出圖前剛性攔截幻想規格。
                            </div>
                        `
                    },
                    {
                        name: "ID (外觀美學設計)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導外部微觀線條美學，包含手機中框弧度、按鍵彈片觸感與鏡頭火山突起視覺比例。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打造具備強烈辨識度的機身握持比例，死守實體線下零售店的黃金第一眼購買意願。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">量產機器外殼表面達到物理零刮傷，消滅任何因塑膠注蘇模具頂出工藝產生的微觀收縮痕。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin-top:12px; font-size:0.8rem; font-weight:700; line-height:1.4;">
                                💡 <strong>術語精確釋義：</strong>Industrial Design 工業設計。主掌產品的肉眼顏值與人體工學邊界。
                            </div>
                        `
                    },
                    {
                        name: "CMF (材料表面處理)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Color, Material, Finishing。調配產品打樣色彩、挑選特種原物料材質、定義拋光陽極氧化等表面處理。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">利用高光 C 角、特種 PVD 鍍膜，建立產品細緻的金屬與玻璃外部實體物理觸感。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">各批次量產材料色差（Delta E）剛性受控。必須在開線前共同簽名核准外觀「限度樣本 (Limit Sample)」。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Clearance (零件間距分析)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在 3D 工程模擬環境內，精算主板電子元件、軟板（FPC）、電池與外部金屬外殼間的安全避讓距離。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">預留公差疊加緩衝，防範機器受凡間外力撞擊形變時，內部晶片當場被外殼硬擠壓短路毀損。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將間距死守在標準 0.3mm 綠燈安全水位，不允許結構為盲目追求超薄而跨越安全界限。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 零件供應商端 (Vendors - 控制核心元件交期與原物料檢驗品質)",
                diagramFlowArray: [
                    {
                        name: "Lead Time (物料交期控制)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">掌控從工廠下採購單到該高精元件實際運抵工廠倉庫入庫的實體週轉物流沙漏時間。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">物理控制並打破長料期物料對開線時程的卡死，確保各試產階段開線當天全線物料水位達標。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">向專案經理交付精確的排產預測，將 LT 超過 12 週的晶圓風險提早發動供應鏈認證進行代償。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "COA (出廠品質證明書)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Certificate of Analysis。出廠前由原廠品質實驗室簽發的實測物理形變與電性特徵報告。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">向代工廠證明此批次原物料物理與電性公差完全受控，沒有夾帶缺陷汙染流水線。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">工廠進料檢驗（IQC）與 COA 報告 100% 互鎖。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Second Source (二線材料)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">技術引進並認證第二家在電路引腳上 100% 物理引腳相容（Pin-to-Pin）的代償二線零件廠。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打破一線原廠壟斷，降低採購成本，並在上游爆發天災停產時建立不斷線安全應變防線。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">二線原物料在 DVT 開線前順利通過高低溫可靠性複審，具備随时現地無時延切換實力。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "IQC (進料品質檢驗)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Incoming Quality Control。物料抵達碼頭後，由工廠品保開展進料常規抽樣檢驗與電性測試。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">嚴格遵循 AQL 品質抽樣水準，在廠門口將不良公差物料就地擊落，一概拒收，死守源頭。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">攔截進料不良，與原廠重校治具探針，保證不汙染後續大線上組裝。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. 代工製造廠端 (EMS Factory - 大智造流水線總裝、拉速與直通良率防禦)",
                diagramFlowArray: [
                    {
                        name: "FPY (首檢直通率)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🛠️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">First Pass Yield。精算機器不經歷任何在線二次重工拆解修補、一次性全檢通關之剛性概率。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">真實暴露流水線治具健康度，將夾帶有高溫焊接「微觀內傷」的單板卡死攔截在包裝前。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">破除偽良率。專案結關硬核對位剛性鐵律：『不斬最終入庫良率，只斬首檢直通率！』。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "UPH (實實產速產能)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🛠️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Units Per Hour。在大流水線各段架設計時看板，動態精算全線每小時穩定流出下線的成品總量。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">用極速拉速平攤固定製造費用與人工工時，在極限交期沙漏內死守智造廠純毛利潤。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">試產爬坡期完成 UPH 速率總驗收，順利將新手機製程以一秒一台速度推向正式大量生產。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "WIP (待修在製品)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🛠️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Work In Process。滯留在流水線各工位、或堆積在維修室內等待更換晶片解鎖的在製品呆料。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">清查死鎖在流水線上的物料資產，防止大批主板囤積變成壞帳，被迫在季末發動報廢。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在階段試產爬坡結關前，剛性發起「維修室 WIP 清空審查」，徹底清空並解鎖產線淤泥。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Line Balance (平衡率控制)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🛠️ 1. 會做什麼</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精算大流水線各手工組裝工位（如扣排線、鎖扭力螺絲）操作工時（Cycle Time）的對稱度。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">消除產線瓶頸工位，防範前段操作工瘋狂堆料、後段大面積人員發愣閒置之製程畸形現況。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.8rem; font-weight:700; line-height:1.4; color:#1A1A1A;">全流水線線平衡率剛性銲死在 85% 以上黃金水平線，消除阻塞，流暢釋放開線。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "當研發端要求極限 Clearance，但工廠稱會撞車，TPM 職責是？", o: ["當傳話筒", "調閱歷史 Cpk 數據，主導跨功能談判", "聽從 RD 指令"], a: 1 },
            { q: "FPY 只有 35% 代表？", o: ["製程受控", "大批機台帶有手工重工內傷，風險極高", "直接出貨"], a: 1 },
            { q: "4M1E 現場查線戰術核心矩陣中，不包含以下哪一項？", o: ["Machine 設備治具與扭力校正", "Economic 專案開發經濟財務預算", "Environment 無塵室 ESD 靜電與溫濕度"], a: 1 }
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
