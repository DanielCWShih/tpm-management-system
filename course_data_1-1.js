/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.3: 👑 內置關鍵詞圖鑑版。
1. 沒收彈窗：全面移除所有彈窗按鈕，改為下方空白區直接呈現 3-5 個關聯關鍵字組。
2. 獨立全景：Page 1 常常駐 beginner_codex_assets 全景製程地圖，內容順延至 P2, P3, P4。
3. 小白通解：專為新手設計（名詞 / 白話通解 / 實戰因果），100% 全量多行展開。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            {
                title: "1. 單元總覽 (1-1 戰術全景地圖導航)",
                diagramFlowArray: [
                    {
                        name: "單元製程地圖 (Process Map)",
                        text: `
                            <div style="width:100%; border:2px solid #1A1A1A; border-radius:8px; overflow:hidden; box-shadow:3px 3px 0px #1A1A1A; background:#FFF; margin-bottom:15px;">
                                <img src="beginner_codex_assets/overview_1-1.png" alt="1-1單元全景圖" style="width:100%; height:auto; display:block;" onerror="this.src='https://placehold.co/1200x220/1A1A1A/FFFFFF?text=1-1+Brand+R-D+Process+Map+Overview'">
                            </div>
                            <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:16px; box-shadow:2px 2px 0px #1A1A1A; font-size:0.88rem; font-weight:700; line-height:1.6; color:#1A1A1A;">
                                📌 <strong>新手導航指引：</strong>智慧型手機的硬體專案開發是一場極其殘酷的「三方賽局」。在本單元中，你將像真正的 TPM 一樣，跨越三大核心領域。請點擊底部頁碼前進至 Page 2，開始解鎖客戶端的實戰關鍵字。
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 客戶研發端 (Brand R&D - 主導產品規格與美學定義)",
                diagramFlowArray: [
                    {
                        name: "PRD (產品規格需求書)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導全球市場與競品技術調研，定義實體硬體規格，發佈並交割初代產品規格需求書（PRD）。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">定義極限產品效能指標與功能參數，用技術專利護城河拉高市售實體機器之品牌溢價。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">期待代工廠（EMS）產線能 100% 完美復刻複雜結構，不接受任何組裝公差導致的設計妥協。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 PRD 評審防線 (量產可行性清查)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">TPM 必須在開模前清查客戶的技術文件是否具備現有產線的加工製程能力，在出圖前剛性攔截幻想規格，避免後續改模導致數十萬模具報廢。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 CMF 文件 (外觀材質說明書)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">Color, Material, Finishing。客戶用來規定手機外殼顏色、使用材質（如鋁合金或玻璃）以及表面處理工藝的剛性規格書。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Spec Freeze (規格剛性凍結)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">在進入工廠大線上大批量試產前，發布剛性禁令，全面鎖死所有規格參數，不允許研發工程師私自改動設計。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "ID (外觀美學設計)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">設計產品外部巨觀美學線條，包含手機中框弧度、按鍵回彈段落觸感與後置鏡頭火山突起視覺比例。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打造兼具手感與無懈可擊的極簡外部視覺，建立消費者在凡間實體零售店的黃金第一印象。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">量產機器表面必須達到物理零刮傷，消滅任何因塑膠注塑模具頂出工藝而產生任何微觀收縮痕。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 拔模角 (Draft Angle - 順利脫模的關鍵斜度)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">在塑膠外殼設計時，垂直表面必須保留微小的物理斜度（通常 0.5~2 度），否則模具在大量生產頂出時會把機器表面生生刮傷。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 縮水痕 (Sink Mark - 塑料冷卻不均的表面凹陷)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">當外殼內部骨架肉厚過厚時，塑料冷卻收縮會把外表面拉出一個微小的肉眼可見凹坑，嚴重破壞工業設計（ID）質感。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 DFM (可製造性評審)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">Design for Manufacturing。在開模前，由製造工程師對研發圖紙進行全盤清查，挑出結構上無法被工廠流水線大規模量產複製的致命缺陷。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "CMF (外觀材質與特殊工藝)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Color, Material, Finishing。主導產品外觀視覺色彩調配、物理物料材質挑選、與金屬表面處理（如陽極氧化、噴砂）。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">利用高光 C 角、特殊微觀霧面無視覺紋理，打造產品無懈可擊的高級金屬與玻璃物理手感。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">工廠量產大流水線大批量產出時，各批次材料外觀色差（Delta E）剛性控制在客戶品保規定的極限標準線內。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Limit Sample (外觀限度樣本 - 黃金判定邊界線)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">開線生產前，由客戶 ID、品保與工廠共同對「可接受的微小表面缺陷（如微小微米級白點）」簽字會審，銲死唯一的判退界線。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Delta E (國際幾何色差指標)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">用精密色差儀量測外殼色彩偏差的數學指標。手機大廠一般剛性規定 Delta E 必須小於 1.0，否則消費者會看出明顯色偏。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 PVD 鍍膜 (物理氣相沉積高階工藝)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">在高度真空腔體內將金屬汽化、電離並沉積附著在外殼表面，形成高硬度、極具金屬鏡面質感的防刮美學外衣。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Clearance (物理安全間距)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在 3D CAD 環境內精密審查並計算內部主板電子元件、軟板（FPC）、電池與外部金屬外殼殼體間的 3D 避讓間距。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">保留足夠的公差疊加安全緩衝帶，防範實體機器受凡間外力撞擊形變時，內部晶片當場被外殼硬擠壓短路毀損。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將 Clearance 間距死守在標準 0.3mm 綠燈水位，絕不允許結構 ME 為了盲目迎合極致超薄而跨越安全界限。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 公差疊加分析 (Tolerance Stack-up - 誤差累積形變)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">當多個零件拼裝時，各零件正負公差累積會導致最終安全間距崩塌。TPM 必須在 EVT 階段強行發動極限公差數學疊加模擬。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Cpk (製程能力指數 - 評估工廠精準度的照妖鏡)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">用來量測工廠機台加工尺寸集中精準度的核心指標。Cpk 高於 1.33 代表加工極度穩定；低於 1.0 代表公差偏移嚴重，開線必撞車。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 硬干涉 (Physical Interference - 物理空間撞車)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">在 3D CAD 設計中零件物理空間發生重疊。硬干涉機率必須在開模前 100% 剛性清零，否則出鋼模後改模代價極大。</div></div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. 零件供應商端 (Vendors - 掌控高精元件交期與原物料進料檢驗品質)",
                diagramFlowArray: [
                    {
                        name: "Lead Time (物料交期控制)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">掌控從工廠正式下達採購單（PO），到該稀缺戰略原物料元件實際送抵工廠倉庫入庫的物流四維時間。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">物理壓縮物料交期對專案時程的卡死，確保各試產階段開線當天現場 100% 有實物料可以上線拼裝。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">向專案經理交割無料期偏位的排產預測，將 LT 超過 12 週的稀缺晶片風險提早發動認證備代償。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Forecast (無料期偏位之排產預測)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">工廠提早 3~6 個月提供給零件廠商的滾動產能需求預估表，方便晶圓原廠提前排產，防範供應鏈斷線。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Buffer Stock (產線物料安全庫存)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">為應對物流延誤或線上突發缺陷拋料，囤積在工廠倉庫內通常 2~4 週的額外安全原物料儲備水位。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Pre-order (長料提前採購下單)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">在當前專案試產里程碑出關評審尚未開完前，對 LT 極長的核心元件提前特批簽核、強制下 PO 單採購。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "COA (原廠出廠品質報告書)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Certificate of Analysis。元件發貨進廠前，由供應商質量實驗室簽發出的實測物理形變與電性特徵測量數據報告。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">白紙黑字以品質實測報告自證零件公差未超標，保障出廠原物料品質不對代工廠大線上造成製程汙染。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">智造智造廠進料抽檢數據與 COA 報告 100% 互鎖。TPM 應嚴密監控供應商有無修改數據隱瞞製程偏移之惡意行為。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 AQL抽樣標準 (Acceptable Quality Level)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">國際可接受品質水準指標。規定進料時允許的最高瑕疵個數，是品保與供應商談判扣款與退貨的基準。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 OQC (供應商出貨檢驗)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">Outgoing Quality Control。廠商物料出自家工廠大門前的最後一道全檢/抽檢品保關卡，COA 即在此時產生。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 缺陷混料汙染 (Lot Contamination)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">當原廠包裝標籤錯置，導致不同公差等級的晶圓原件混合在一起，這會直接在工廠大流水線上引發集體故障災難。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Second Source (備援廠商代償策略)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">引進並技術認證第二家在電路原理與物理引腳上 100% 相容（Pin-to-Pin）的代償二線零件供應商。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">破除一線原廠的產能與商務壟斷，提高採購商控制議價權，防範單一上游爆發不可抗力災難時卡死專案。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">二線原物料在 DVT 里程碑前順利通過高低溫可靠性複審點亮，在主線上具備隨時無時延動態 Cut-in 頂替之實力。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Pin-to-Pin 完全相容 (硬體腳位無縫對位)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">指二線零件的物理形變尺寸、銲墊位置與電訊引腳與一線完全一致，不需 EE 工程師重新 Layout 修改主板即可更換。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Reliability點亮驗證 (可靠性破壞試驗)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">引進二線物料時，必須送入可靠性暗室經歷 48 小時高低溫環境形變衝擊與震動，排除短期正常但長期短路之缺陷。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Dual-Sourcing比例配比 (多元供貨控制)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">量產期通常按照「7:3」或「6:4」比例將採購單分給兩家供應商，以此逼迫兩者拼搶良率與維持產速穩定。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "IQC (進料品質品保攔截點)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Incoming Quality Control。原物料運抵工廠碼頭後，由工廠品保團隊架設量測針床與光學天眼開展常規抽樣檢驗。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在廠門口將公差偏移、針腳污損之瑕疵原件就地擊落並開具紅單退貨，死守第一道製程品質控制閘門。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">確保上線材料零瑕疵。若遇工廠檢驗與供應商規格衝突，及時召開 SQE 품질會審，排除設備治具應力形變干擾。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Blind Audit (盲測抽檢機制)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">不告知檢驗員原廠批號，進行隨機盲測。用來防範因長期熟絡引發的品保放水人為重大缺陷漏洞。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 MRB 審查不合格控制委員會 (Material Review Board)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">當 IQC 判定退貨但產線面臨特急待料時召開的緊急裁決會議，由 TPM、PM 與品保總監動態權衡是否發起特採。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 特採特批特許導入 (Concession / Waiver)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">在瑕疵不影響核心通訊、電路與安全性前提下，為防範空窗停線而簽字強行夾帶放行的妥協性品質程序。</div></div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "4. 代工製造廠端 (EMS Factory - 大流水線總裝、拉速與直通良率防禦)",
                diagramFlowArray: [
                    {
                        name: "FPY (首檢直通率指標)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">First Pass Yield。精算產品在流水線上不經歷任何二次手工修補焊接、一次性高精導通全檢合格下線的真實物理概率。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">真實暴露智造產線與自動化設備的健康度，硬核阻絕經歷過二度熱應力重工損傷的「微觀損害機台」流入包裝。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">撕開偽良率外衣。專案出關節點剛性咬合指標：『不斬入庫合格率，只斬流水線首檢直通率！』，死守產線良心。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 偽良率陷阱 (手動重工偽造良率)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">工廠常用經過維修拆解更換主晶片後的「入庫良率 99%」搪塞專案組。TPM 必須調閱後台測試初檢數據，扒出直通率本相。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 二度焊接手工熱內傷 (烙鐵二次破壞)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">瑕疵機台在維修室經歷手工高溫烙鐵二度烘烤時，PCB 銅箔與金件極易發生微觀脆化，流入市場後在震動下必崩潰。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 缺陷直通熔斷防線 (FPY Trigger)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">大廠規定，一旦前段測試 FPY 低於 50% 剛性警戒水位，必須勒令全線停線重調機台治具，不允許盲目帶病拼裝。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "UPH (每小時產出速率)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Units Per Hour。在大流水線各段總裝架設計時看板，動態實時精算、追蹤全線每小時穩定流出下線的最終機器產出總量。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">用極速拉速產能平攤車間固定折舊與人均工時，在極限壓縮的交期內，死死卡位捍衛代工廠智造微薄純利潤。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">試產爬坡期完成 UPH 產速峰值達標總驗收，消除所有點膠、打螺絲等手工操作工位瓶頸，平穩切換過渡到大量量產。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Cycle Time (單站標準作業工時)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">單一工位操作工完成一次組裝或除錯卡口鎖附的物理秒數。大線上各站 Cycle Time 必須精確對位微調。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Bottle-neck (產線製程瓶頸阻塞點)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">整條流水線上 Cycle Time 最長、耗時最久的工位站點。整線的 UPH 產速上限完全由這個瓶頸阻塞點殘忍決定。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 拋料率失控懲罰 (Component Scrap Rate)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">高頻高速自動貼片機因吸嘴磨損變形，將晶粒原件吸歪並無效打入廢料盒的報廢概率。高於 0.3% 會直接卡死拉速。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "WIP (在線在製品積壓)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Work In Process。因為測試Fail、外觀污損等原因，停滯在流水線工位間或大量堆積在實體維修室內的未完工單板。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">盤點、控制積壓在流水線後端的流轉半成品呆料資產，防止大批高價值主板囤積死鎖變成壞帳。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在階段試產爬坡大考驗結關前，強行下達「維修室 WIP 清空審查行動」，物理逼出隱性不良原物料批號病灶。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 Repair Room (產線實體維修室黑洞)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">大線上出事單板的集結地。若不加以周轉限制，工廠常將 1-1 不良主板無限期囤積在此以假報線上高良率。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 WIP 淤積淤泥效應 (真實缺陷掩蓋)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">大量 WIP 堆積會導致研發無法拿到足夠的失效樣品（FA Sample）開展切片，導致隱性治具故障公差持續偏離。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 試產清線動態行動 (Line Clearance)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">在 EVT 或 DVT 結束當天，強行下令產線停止吃料，將線上所有 WIP 實物機器清空完工，清算真實報廢率。</div></div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Line Balance (工位平衡率)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精算大流水線各個手工組裝與功能測試工位（如扣排線、鎖扭力螺絲）操作工時（Cycle Time）的平均分配度。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精確消除產線瓶頸工位，防範前段手工操作工瘋狂堆料、後段大面積測試治具人員發愣閒置之內耗。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">整流水線平衡率剛性死守在 85% 以上黃金水平線，消除決策阻塞，打通一秒一機流暢連貫的生產拉速脈絡。</div></div>
                            </div>
                            <div style="margin-top:15px; background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.88rem; color:#1A1A1A; border-bottom:2px solid #1A1A1A; padding-bottom:6px; margin-bottom:12px;">💡 關聯關鍵詞圖鑑 (Keywords Lexicon)</div>
                                <div style="display:flex; flex-direction:column; gap:8px;">
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 IE 工業工程動作優化 (IE Motion Study)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">利用雙手微動經濟原則，優化操作工抓取螺絲、扣排線的實體動向，極限壓縮單站工時以求對齊平衡。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 淤積堆料黑洞 (WIP Bottleneck Jam)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">平衡率低於 85% 時發生的物理連鎖反應。全線操作工被迫降速等待最慢的瓶頸站，造成製造效率嚴重內耗。</div></div>
                                    <div style="background:#FFF; border:1.5px solid #1A1A1A; border-radius:6px; padding:8px 12px;"><strong style="font-size:0.82rem; color:#005088;">📌 工位工時拆解優化 (Line Balancing Realignment)</strong><div style="font-size:0.78rem; font-weight:700; margin-top:2px; color:#475569;">TPM 主導將瓶頸站點之部分手工複合工步，拆分挪移給後段閒置工位，原地實現全線拉速效率配比最優解。</div></div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "當研發端要求 0.1mm 的極限間距，但工廠稱設備公差疊加會撞車，TPM 職責是？", o: ["當傳話筒告知兩邊各自開會", "調閱歷史 Cpk 與公差數據，主導跨功能技術談判", "全盤聽從客戶最高指令"], a: 1 },
            { q: "工廠最終入庫良率 99.2%，但大流水線直通率 (FPY) 只有 35%，這代表？", o: ["製程非常完美", "大批機器在線體被手工拆解重工，帶有物理內傷", "可以開閘拉速"], a: 1 }
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
    window.codexCourseEngineData[0].examVault = vault.slice(0, 3);
})();
