/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-02 V7.2: 👑 子單元 1-1 萬能架構剛性對位完璧版。
1. 引擎合流：100% 複製 1-2 鋼鐵骨架，採用 window.codexCourseEngineData 陣列與 subPages 拓撲。
2. 視覺對位：全面改寫為內嵌 HTML 三重奶油卡片（會做什麼/目的/期望結果），完美咬合主殼渲染器。
3. 實戰變更：OQC 更名完成、Pin-to-Pin 實體絕殺、工廠端 IQC 尺寸與測站同步化重工業級擴充。
4. 唯讀封牌規格：內建 1-1 專屬大考題庫與隨機亂序 IIFE 防線，全代碼多行全展開，絕不裁剪。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            // ─── 🗺️ PAGE 1: 核心大廳導讀 ───
            {
                title: "1. 核心大廳導讀 (三方權力賽局對位)",
                diagramFlowArray: [
                    {
                        name: "戰術導讀",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">主導並梳理品牌客戶廠（Brand）、元件供應商（Vendor）與代工製造廠（EMS）三方在高頻專案排產與量產中的利益糾葛。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">徹底打破單一職能的盲人摸象視角，建立系統級 TPM 大局觀，透視各端在品質、成本、交期上的核心底線與談判籌碼。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果 (終極期待)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">學員不再盲目看盤，開線發生突發流產時，能秒速抓出是哪一方的圖面、公差或物料呆料在引發癱瘓並給出代償方案。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },

            // ─── 📱 PAGE 2: 客戶研發端 (Brand R&D) ───
            {
                title: "2. 客戶研發端 (Brand R&D - 主導規格與美學定義)",
                diagramFlowArray: [
                    {
                        name: "PRD (產品規格)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">主導全球市場與競品技術調研，定義硬體核心技術參數，發佈專案全局技術規格需求書 (PRD)。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">追求極致的硬體功能參數與技術指標，用技術專利與規格護城河，拉高市售機台之品牌溢價與市佔率。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">期待代工廠產線能 100% 完美復刻複雜結構，在製程良率上全力配合，不接受公差導致的功能妥協。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "ID (外觀美學)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">主導產品的工業造型、線條比例、幾何曲面與極致的視覺張力，決定產品第一眼的美學靈魂。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">打造無可挑剔的視覺賣點與品牌高定辨識度，最大化激發消費者的購買慾望，維護品牌高端形象。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">要求產線在實體總裝時，外殼交接處的段差與縫隙控制必須達到極致零瑕疵，嚴防視覺參差不齊。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "CMF (材質工藝)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">定義產品實體的色彩（Color）、基礎材質（Material）與表面處理工藝（Finish，如陽極、PVD、噴塗）。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">賦予冰冷硬體尊榮的實體觸感、色澤張力，並提供耐磨、抗指紋、抗鹽霧腐蝕的信賴性防護裝甲。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">要求代工廠在噴塗與陽極產線上的良率維持在 95% 以上，且量產成品在長期使用下絕不褪色剝落。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Clearance (零件間距)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在內部 3D 結構堆疊（Stackup）中，規劃各電子元件、PCB 晶片與外殼之間的物理安全防撞間距。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">預留物理空隙以代償大量產時的零件形變、材料熱脹冷縮，嚴防內部撞擊擠壓引發線路短路或死機。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">要求樣機在經歷嚴酷的信賴性折磨（如自由跌落、定規滾筒、高低溫循環測試）後全量綠燈通關。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },

            // ─── 📦 PAGE 3: 零件供應商端 (Vendors) ───
            {
                title: "3. 零件供應商端 (Vendors - 掌控高精元件交期與原物料進料檢驗品質)",
                diagramFlowArray: [
                    {
                        name: "Lead Time (物料交期)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">掌控從工廠正式下達採購單（PO），到該稀缺戰術原物料元件實際抵達工廠倉庫入庫的物流總交期。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">物理壓縮物料交期對專案時程的卡死，確保各試產階段開線當天現場 100% 有實物物料可以上線。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">向專案經理交割無料預估的排產預測，將 LT 超過 12 週的稀缺晶片風險提早發動代償認證。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "OQC (出廠檢驗)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">監督原物料供應商在貨物出廠前實施的最後成品品質檢驗（Outgoing Quality Control），並隨貨附帶檢驗報告。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在物料離開供應商大門前進行第一道品質防線攔截，防堵劣質缺陷品污染跨國供應物流鏈。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">進料一次直通，原廠隨貨憑證齊全，出貨合格率穩定維持在 99.95% 以上的剛性藍圖標準。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Second Source (備援料)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">認證並評估第二、第三料源供應商元件，進行電氣特性與實體結構的全面對位開線認證。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">打擊一線供應商的價格壟斷，解除單一料源隨時可能因天災、產能引發的斷料死鎖。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">專案 BOM 表隨時維持雙料源熱備援狀態，物料成本（BOM Cost）逐季剛性下壓。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "IQC (進料品保)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">由我們代工廠/EMS端主導門口防線，運用精密二次元OMM或三次元，對進料結構件抽驗量測尺寸公差，嚴防幾何形變。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">強行攔截原廠漏檢缺陷件。確保 IQC 抽驗套用的量測手法、電路治具與軟體演算法，與後段生產線實體測站 100% 剛性同步。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">徹底封死因兩端測試方法不對位引發的漏檢盲區，拒不良零件於線上之外，確保一線上絕不引發整條流水線癱瘓流產。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },

            // ─── ⚙️ PAGE 4: 代工廠生產端 (EMS / Factory) ───
            {
                title: "4. 代工廠生產端 (EMS / Factory - 實體量產與良率攻堅)",
                diagramFlowArray: [
                    {
                        name: "SMT (表面黏著)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">發動高速貼片機與錫膏印刷機，將微型主動與被動電子元件精確焊接至主電路板（PCB）上。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">建立硬體產品的核心運算、電源分配與射頻通訊神經中樞系統，打通實體電氣通路。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">要求 SMT 銲接線體之一次直通率（FPY）必須剛性跨越 99.2% 以上，嚴防爐後空銲缺陷。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Assembly (組裝線)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">主導自動化與人工線體，將主電路板、前殼結構件、螢幕、相機鏡頭模組與電池進行實體物理總裝。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">將前段所有的半成品與概念圖面，完整轉化為符合市場出貨規格的成品實體機台。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">嚴格實施線體平衡，作業時間秒數恆
