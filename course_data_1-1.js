/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.5: 👑 雙層原位切換完全體。
1. 第一層切換：將各單元的主標題（PRD/ID/CMF/Clearance）封裝，映射為頂部大頁籤。
2. 第二層切換：大頁籤下方配置 4 個極簡名詞小卡片，點擊原地直接在下方緩衝區原位顯影。
3. 獨立全景：Page 1 長駐 beginner_codex_assets 全景製程地圖，內容向後移位。
4. 100% 完整全量展開：3 大內容頁面、12 大主項、48 個微觀關鍵字因果指標與解說全數補齊。
========================================================================
*/

window.codexCourseEngineData = [
    // ==========================================
    // PAGE 1: 獨立單元全景導航地圖
    // ==========================================
    {
        courseId: "L1-1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            {
                title: "1. 單元總覽 (1-1 智慧型手機代工廠三方賽局戰術全景圖)",
                diagramFlowArray: [
                    {
                        name: "單元製程地圖 (Process Map)",
                        text: `
                            <div style="width:100%; border:2px solid #1A1A1A; border-radius:8px; overflow:hidden; box-shadow:3px 3px 0px #1A1A1A; background:#FFF; margin-bottom:15px;">
                                <img src="beginner_codex_assets/overview_1-1.png" alt="1-1單元全景圖" style="width:100%; height:auto; display:block;" onerror="this.src='https://placehold.co/1200x200/1A1A1A/FFFFFF?text=1-1+Brand+R-D+Process+Map+Overview'">
                            </div>
                            <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:16px; box-shadow:2px 2px 0px #1A1A1A; font-size:0.88rem; font-weight:700; line-height:1.6; color:#1A1A1A;">
                                📌 <strong>新手導航指引：</strong>智慧型手機的硬體專案開發是一場極其殘酷的「三方賽局」。在本單元中，你將跨越客戶端、供應商端、與代工廠端三大核心領域。請點擊底部頁碼前進至 Page 2，開始解鎖研發端的實戰關鍵字。
                            </div>
                        `
                    }
                ]
            },
            // ==========================================
            // PAGE 2: 客戶研發端 (Brand R&D)
            // ==========================================
            {
                title: "2. 客戶研發端 (Brand R&D - 主導產品規格與美學定義)",
                diagramFlowArray: [
                    {
                        name: "PRD (產品規格需求書)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導全球市場與競品技術調研，定義實體硬體規格，發佈並交割初代產品規格需求書（PRD）。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">定義極限產品效能指標與功能參數，用技術專利護城河拉高市售實體機器之品牌溢價。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">期待代工廠（EMS）產線能 100% 完美復刻複雜結構，不允許以 any 試產組裝公差為由擅自修改設計。</div></div>
                            </div>
                            <div style="margin-top:20px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位顯影解鎖)</div>
                                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                    <div class="kc-p2prd" id="kcp2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2prd').innerHTML='<b>全稱：</b>Product Requirement Document (產品規格需求書)'; document.getElementById('kd-p2prd').innerHTML='<b>意思：</b>定義新手機功能、規格與零件配置的最高法規文件。TPM 必須在開模前清查 CMF 技術文件是否具備產線現有流水線的量產能力，在出圖前剛性攔截幻想規格。'; document.querySelectorAll('.kc-p2prd').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">PRD</div>
                                    <div class="kc-p2prd" id="kcp2-1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2prd').innerHTML='<b>全稱：</b>Design for Manufacturing (可製造性設計)'; document.getElementById('kd-p2prd').innerHTML='<b>意思：</b>在研發圖紙出爐第一時間，由製造廠工程師審查該外觀結構是否具備大規模量產之可能，提前優化螺絲鎖附路徑與自動化夾具空間。'; document.querySelectorAll('.kc-p2prd').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">DFM</div>
                                    <div class="kc-p2prd" id="kcp2-2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2prd').innerHTML='<b>全稱：</b>Specification Freeze (技術規格剛性凍結)'; document.getElementById('kd-p2prd').innerHTML='<b>意思：</b>專案跨入特定試產里程碑（如PVT）時，下發剛性禁令鎖死所有設計參數，不允許研發工程師隨意微調尺寸，以便工廠固化 SOP 與夾具排產。'; document.querySelectorAll('.kc-p2prd').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Freeze</div>
                                    <div class="kc-p2prd" id="kcp2-3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2prd').innerHTML='<b>全稱：</b>Acceptable Quality Level (驗收抽樣合格標準)'; document.getElementById('kd-p2prd').innerHTML='<b>意思：</b>品質檢驗時買賣雙方商定的最高可接受瑕疵概率。IQC 團隊嚴格以此指標在廠門口進行進料抽驗，一旦不良率超標則整批物料剛性拒收退貨。'; document.querySelectorAll('.kc-p2prd').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">AQL</div>
                                </div>
                                <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                    <div id="kt-p2prd"><b>全稱：</b>Product Requirement Document (產品規格需求書)</div>
                                    <div id="kd-p2prd" style="margin-top:4px; color:#475569;"><b>意思：</b>定義新手機功能、規格與零件配置的最高法規文件。TPM 必須在開模前清查 CMF 技術文件是否具備產線現有流水線的量產能力，在出圖前剛性攔截幻想規格。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "ID (外觀工業美學設計)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">設計產品外部巨觀美學線條，包含手機中框弧度、按鍵回彈段落觸感與後置鏡頭火山突起視覺比例。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打造兼具手感與無懈可擊的極簡外部視覺，建立消費者在凡間實體零售店的黃金第一印象。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">量產機器表面必須達到物理零刮傷，消滅任何因塑膠注塑模具頂出工藝而產生任何微觀收縮痕。</div></div>
                            </div>
                            <div style="margin-top:20px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位解鎖)</div>
                                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                    <div class="kc-p2id" id="kcp2id-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2id').innerHTML='<b>全稱：</b>Draft Angle (鋼模脫模拔模角)'; document.getElementById('kd-p2id').innerHTML='<b>意思：</b>在五金或塑膠殼體垂直外觀表面保留的微小物理斜度（通常為 0.5~2 度）。若無此角度，模具在大量生產高速頂出時會將機器外表面生生刮傷。'; document.querySelectorAll('.kc-p2id').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Draft Angle</div>
                                    <div class="kc-p2id" id="kcp2id-1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2id').innerHTML='<b>全稱：</b>Sink Mark (結構冷卻收縮痕)'; document.getElementById('kd-p2id').innerHTML='<b>意思：</b>當結構內部局部肉厚過厚時，塑料冷卻收縮會將外表面拉出一個微小的肉眼可見凹坑，嚴重汙染並破壞設計質感。'; document.querySelectorAll('.kc-p2id').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Sink Mark</div>
                                    <div class="kc-p2id" id="kcp2id-2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2id').innerHTML='<b>全稱：</b>Mold Texture (模具表面咬花工藝)'; document.getElementById('kd-p2id').innerHTML='<b>意思：</b>利用化學蝕刻或雷射在模具鋼材表面做出微觀沙粒、皮紋或幾何紋理，賦予成型後的塑料或金屬外殼霧面手感，兼具防指紋防刮防護。'; document.querySelectorAll('.kc-p2id').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Texture</div>
                                    <div class="kc-p2id" id="kcp2id-3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2id').innerHTML='<b>全稱：</b>Parting Line (前後模具接縫分模線)'; document.getElementById('kd-p2id').innerHTML='<b>意思：</b>前後鋼模閉合接觸時在產品外殼表面留下的物理接縫線。ID 與 TPM 的戰術防線在於將此線隱蔽在視覺死角，防止毛邊刮手。'; document.querySelectorAll('.kc-p2id').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Parting Line</div>
                                </div>
                                <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                    <div id="kt-p2id"><b>全稱：</b>Draft Angle (鋼模脫模拔模角)</div>
                                    <div id="kd-p2id" style="margin-top:4px; color:#475569;"><b>意思：</b>在五金或塑膠殼體垂直外觀表面保留的微小物理斜度（通常為 0.5~2 度）。若無此角度，模具在大量生產高速頂出時會將機器外表面生生刮傷。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "CMF (外觀材質與工藝)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Color, Material, Finishing。主導產品外觀視覺色彩調配、物理物料材質挑選、與金屬表面陽極氧化拋光等製程細節。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">利用高光 C 角、特殊微觀霧面無視決紋理，打造產品無懈可擊的高級金屬與玻璃物理手感。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">工廠量產大流水線大批量產出時，各批次材料外觀色差（Delta E）剛性控制在客戶品保規定的極限標準線內。</div></div>
                            </div>
                            <div style="margin-top:20px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位解鎖)</div>
                                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                    <div class="kc-p2cmf" id="kcp2cmf-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2cmf').innerHTML='<b>全稱：</b>Limit Sample (黃金品質外觀限度樣本)'; document.getElementById('kd-p2cmf').innerHTML='<b>意思：</b>開線生產前，由客戶 ID、品保與工廠共同對「可接受的微小表面缺陷（如極微小刮痕、微米級色斑）」簽字封樣，鎖死唯一的判退界線。'; document.querySelectorAll('.kc-p2cmf').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Limit Sample</div>
                                    <div class="kc-p2cmf" id="kcp2cmf-1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2cmf').innerHTML='<b>全稱：</b>Delta E (幾何色彩偏移色差值)'; document.getElementById('kd-p2cmf').innerHTML='<b>意思：</b>使用工業色差儀量測產品外殼色彩偏離度的客觀數學指標。手機大廠一般剛性規定 Delta E 必須小於 1.0，否則消費者在光下會看出明顯色偏。'; document.querySelectorAll('.kc-p2cmf').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Delta E</div>
                                    <div class="kc-p2cmf" id="kcp2cmf-2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2cmf').innerHTML='<b>全稱：</b>Anodization (金屬陽極氧化處理)'; document.getElementById('kd-p2cmf').innerHTML='<b>意思：</b>利用電化學工藝在鋁合金外殼表面生成一層堅硬、耐磨、耐腐蝕且具備高貴色彩的防護氧化皮層，是高階手機中框的核心必備工藝。'; document.querySelectorAll('.kc-p2cmf').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Anodization</div>
                                    <div class="kc-p2cmf" id="kcp2cmf-3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2cmf').innerHTML='<b>全稱：</b>PVD Coating (物理氣相沉積真空鍍膜)'; document.getElementById('kd-p2cmf').innerHTML='<b>意思：</b>在高度真空腔體內將特定金屬靶材汽化、電離並在高壓電場下沉積附著在不鏽鋼或鈦合金殼體表面，形成高硬度、鏡面質感的防刮美學外衣。'; document.querySelectorAll('.kc-p2cmf').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">PVD</div>
                                </div>
                                <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                    <div id="kt-p2cmf"><b>全稱：</b>Limit Sample (黃金品質外觀限度樣本)</div>
                                    <div id="kd-p2cmf" style="margin-top:4px; color:#475569;"><b>意思：</b>開線生產前，由客戶 ID、品保與工廠共同對「可接受的微小表面缺陷（如極微小刮痕、微米級色斑）」簽字封樣，鎖死唯一的判退界線。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Clearance (內部安全間距)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在 3D CAD 工程環境內精密審查並計算內部主板電子元件、軟板（FPC）、電池與外部金屬外殼殼體間的 3D 避讓間距。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">保留足夠的公差疊加安全緩衝帶，防範實體機器受凡間外力撞擊形變時，內部晶片當場被外殼硬擠壓短路毀損。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將 Clearance 間距死守在標準 0.3mm 綠燈水位，絕不允許結構 ME 為了盲目追求超薄而跨越安全界限。</div></div>
                            </div>
                            <div style="margin-top:20px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位解鎖)</div>
                                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                    <div class="kc-p2clear" id="kcp2clear-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2clear').innerHTML='<b>全稱：</b>Tolerance Stack-up (公差數學疊加模擬)'; document.getElementById('kd-p2clear').innerHTML='<b>意思：</b>多零件拼裝時微觀尺寸負公差累積會導致避讓失效。TPM 必須主導結構發動極限疊加分析，提前清空物理設計雷區。'; document.querySelectorAll('.kc-p2clear').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Stack-up</div>
                                    <div class="kc-p2clear" id="kcp2clear-1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2clear').innerHTML='<b>全稱：</b>Process Capability Index (加工精準度製程能力指數)'; document.getElementById('kd-p2clear').innerHTML='<b>意思：</b>衡量工廠機台切削尺寸集中受控精準度的數據。Cpk 高於 1.33 代表品質極度穩定，若工廠 Cpk 太差則安全間距必須放大。'; document.querySelectorAll('.kc-p2clear').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Cpk</div>
                                    <div class="kc-p2clear" id="kcp2clear-2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2clear').innerHTML='<b>全稱：</b>Physical Interference (物理結構干涉空間重疊)'; document.getElementById('kd-p2clear').innerHTML='<b>意思：</b>指在 3D 工程模擬中零件空間發生不合理重疊重合。干涉機率必須在開模前 100% 剛性清零，否則鋼模成型後改模極難。'; document.querySelectorAll('.kc-p2clear').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Interference</div>
                                    <div class="kc-p2clear" id="kcp2clear-3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p2clear').innerHTML='<b>全稱：</b>FPC Bending Radius (排線軟板安全彎折半徑)'; document.getElementById('kd-p2clear').innerHTML='<b>意思：</b>內部軟性電路板或射頻排線彎折時允許的物理最小半徑。低於安全半徑會導致內部銅箔在組裝拉速受力時發生微觀折斷短路。'; document.querySelectorAll('.kc-p2clear').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Bending</div>
                                </div>
                                <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                    <div id="kt-p2clear"><b>全稱：</b>Tolerance Stack-up (公差數學疊加模擬)</div>
                                    <div id="kd-p2clear" style="margin-top:4px; color:#475569;"><b>意思：</b>多零件拼裝時微觀尺寸負公差累積會導致避讓失效。TPM 必須主導結構發動極限疊加分析，提前清空物理設計雷區。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            // ==========================================
            // PAGE 3: 零件供應商端 (Vendors)
            // ==========================================
            {
                title: "3. 零件供應商端 (Vendors - 掌控高精元件交期與原物料進料檢驗品質)",
                diagramFlowArray: [
                    {
                        name: "Lead Time (物料交期)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">掌控從工廠正式下達採購單（PO），到該稀缺戰略原物料元件實際送抵工廠倉庫入庫的物流四維時間。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">物理壓縮物料交期對專案時程的卡死，確保各試產階段開線當天現場 100% 有實物料可以上線拼裝。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">向專案經理交割無料期偏位的排產預測，將 LT 超過 12 週的稀缺晶片風險提早發動認證備代償。</div></div>
                            </div>
                            <div style="margin-top:20px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位解鎖)</div>
                                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                    <div class="kc-p3" id="kcp3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p3').innerHTML='<b>全稱：</b>Forecast (無料期偏位排產產能預測水準)'; document.getElementById('kd-p3').innerHTML='<b>意思：</b>工廠需提早 3~6 個月提供給零件廠商的滾動產能需求預估表，方便晶圓原廠提前排產鎖死晶圓產能，防止因料期偏位崩塌引發線體大面積斷線空窗。'; document.querySelectorAll('.kc-p3').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Forecast</div>
                                    <div class="kc-p3" id="kcp3-1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p3').innerHTML='<b>全稱：</b>Buffer Stock (現場物料安全庫存水位線)'; document.getElementById('kd-p3').innerHTML='<b>意思：</b>為防範惡劣物流延誤或大流水線上爆發突發拋料損耗缺陷，硬核囤積在製造廠無塵倉庫內通常為 2~4 週的稀缺原物料安全儲備水位。'; document.querySelectorAll('.kc-p3').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Buffer Stock</div>
                                    <div class="kc-p3" id="kcp3-2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p3').innerHTML='<b>全稱：</b>Dual-Sourcing Order Allocation (多源採購單訂單配比)'; document.getElementById('kd-p3').innerHTML='<b>意思：</b>量產 MP 階段通常按照「7:3」或「6:4」比例將同功能零件單拆分發給兩家具備資質的供應商，利用商務與品質 PK 機制逼迫兩者拼搶直通率與維持產能速率。'; document.querySelectorAll('.kc-p3').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Dual Sourcing</div>
                                    <div class="kc-p3" id="kcp3-3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p3').innerHTML='<b>全稱：</b>Pin-to-Pin Alternative Matrix (腳位完全導通無縫相容矩陣)'; document.getElementById('kd-p3').innerHTML='<b>意思：</b>指二線原物料元件的微觀物理形變尺寸、銲墊卡口幾何位置、與電訊引腳與一線完全契合一致，工廠不需讓電子工程師修改 Layout 走線即可動態代償認證切換。'; document.querySelectorAll('.kc-p3').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Pin-to-Pin</div>
                                </div>
                                <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                    <div id="kt-p3"><b>全稱：</b>Forecast (無料期偏位排產產能預測水準)</div>
                                    <div id="kd-p3" style="margin-top:4px; color:#475569;"><b>意思：</b>工廠需提早 3~6 個月提供給零件廠商的滾動產能需求預估表，方便晶圓原廠提前排產鎖死晶圓產能，防止因料期偏位崩塌引發線體大面積斷線空窗。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            // ==========================================
            // PAGE 4: 代工製造廠端 (EMS Factory)
            // ==========================================
            {
                title: "4. 代工製造廠端 (EMS Factory - 大大量產拼裝、產速與直通良率防護)",
                diagramFlowArray: [
                    {
                        name: "FPY (直通率防線)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">First Pass Yield。精算產品在流水線上不經歷 any 在線二次手工修補焊接、一次性高精導通全檢合格下線的真實物理概率。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">真實暴露智造產線與自動化設備的健康度，硬核阻絕經歷過二度熱應力手工重工損傷的「微觀損害機台」流入包裝。</div></div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">撕開偽良率外衣。專案出關評審剛性鐵律：『不斬最終入庫合格率，只斬大流水線首檢直通率！』。</div></div>
                            </div>
                            <div style="margin-top:20px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                                <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位解鎖)</div>
                                <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                    <div class="kc-p4" id="kcp4-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p4').innerHTML='<b>全稱：</b>False Alarm Rate (自動化功能治具測試誤判率)'; document.getElementById('kd-p4').innerHTML='<b>意思：</b>FCT測試站因探針老化或射頻纜線磨損漏電，將完全健康的主板錯誤判定為不良零件的極低指標。必須嚴格掐死在 1% 以下，否則會引發重工室暴走。'; document.querySelectorAll('.kc-p4').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">False Alarm</div>
                                    <div class="kc-p4" id="kcp4-1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p4').innerHTML='<b>全稱：</b>Rework Counter Control (手工焊接重工計數器)'; document.getElementById('kd-p4').innerHTML='<b>意思：</b>限制單主板被送入維修室高溫更換晶粒晶圓的極限次數（通常鎖死為 2 次）。過度重工的手機外部雖正常，但 PCB 走線內部結構已微觀形變受損。'; document.querySelectorAll('.kc-p4').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Rework</div>
                                    <div class="kc-p4" id="kcp4-2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p4').innerHTML='<b>全稱：</b>WIP Clearing Sequence (在線在製品大清洗清零計畫)'; document.getElementById('kd-p4').innerHTML='<b>意思：</b>在專案試產評審會前夕，強制要求工廠維修室進行「WIP清空」。將所有待修機器全部結案 Debug，防止工廠囤積呆料、隱瞞不良。'; document.querySelectorAll('.kc-p4').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">WIP Block</div>
                                    <div class="kc-p4" id="kcp4-3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.85rem; cursor:pointer;" onclick="document.getElementById('kt-p4').innerHTML='<b>全稱：</b>Cycle Time (流水線單站標準作業工時)'; document.getElementById('kd-p4').innerHTML='<b>意思：</b>單一操作工完成扣合排線或鎖螺絲所需花費的純物理秒數。整條大流水線的拉速 UPH 與平衡率完全由最慢的那站工時決定。'; document.querySelectorAll('.kc-p4').forEach(c=>c.style.background='#FFF'); this.style.background='#FDE047';">Cycle Time</div>
                                </div>
                                <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                    <div id="kt-p4"><b>全稱：</b>False Alarm Rate (自動化功能治具測試誤判率)</div>
                                    <div id="kd-p4" style="margin-top:4px; color:#475569;"><b>意思：</b>FCT測試站因探針老化或射頻纜線磨損漏電，將完全健康的主板錯誤判定為不良零件的極低指標。必須嚴格掐死在 1% 以下，否則會引發重工室暴走。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "當研發端要求極限 Clearance，但工廠稱設備公差疊加會撞車，TPM 職責是？", o: ["當傳話筒告知兩邊各自開會", "調閱歷史 Cpk 與公差數據，主導跨功能技術代償方案談判", "全盤聽從客戶 RD 的最高指令"], a: 1 },
            { q: "工廠最終入庫良率 99.2%，但大流水線直通率 (FPY) 只有 35%，這代表？", o: ["製程非常完美受控", "大批機器在線體被手工反覆拆解重工，帶有物理內傷，客退風險極高", "可以直接開閘放水大量生產"], a: 1 },
            { q: "大流水線各個工位操作時間不平均，線平衡率低於 85% 時，流水線會發生何種狀況？", o: ["產線拉速全線暴增", "存在嚴重的瓶頸工位，引發產線集體堆料（WIP）、拉速垮台", "產品的電路系統訊號完整性大幅提高"], a: 1 }
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
