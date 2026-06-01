/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.5: 👑 雙層原位切換圖鑑完全體。
1. 外殼完全唯讀：100% 不動用、不修改 750 列的 HTML 播放器外殼。
2. 第一層切換（大頁籤）：PRD、ID、CMF、Clearance 橫向大按鈕封裝在內容最頂部，原地互斥隱藏。
3. 第二層切換（小卡片）：大頁籤下方常駐 4 個「極簡純名詞卡片」，點擊原位刷新解鎖全稱與意思。
4. 獨立全景分頁：Page 1 長駐 beginner_codex_assets 全景流程圖，專案三大領域順延。
========================================================================
*/

// 👑 全自動現地註冊：全域防崩潰雙層動態切換大腦 👑
(function() {
    window.tpmSwitchMainTab = function(blockScope, activeIdx, totalCount) {
        for (let i = 0; i < totalCount; i++) {
            const panel = document.getElementById(`tpm-main-panel-${blockScope}-${i}`);
            const btn = document.getElementById(`tpm-main-btn-${blockScope}-${i}`);
            if (panel) panel.style.display = (i === activeIdx) ? 'block' : 'none';
            if (btn) {
                if (i === activeIdx) {
                    btn.style.background = '#FDE047';
                    btn.style.transform = 'translate(2px, 2px)';
                    btn.style.boxShadow = '1px 1px 0px #1A1A1A';
                } else {
                    btn.style.background = '#FFFFFF';
                    btn.style.transform = 'none';
                    btn.style.boxShadow = '3px 3px 0px #1A1A1A';
                }
            }
        }
    };

    window.tpmSwitchSubKwd = function(blockScope, panelIdx, kwdIdx, fullName, definition) {
        document.querySelectorAll(`.kbtn-${blockScope}-${panelIdx}`).forEach(btn => {
            btn.style.background = '#FFFFFF';
            btn.style.transform = 'none';
            btn.style.boxShadow = '2px 2px 0px #1A1A1A';
        });
        const activeBtn = document.getElementById(`kbtn-${blockScope}-${panelIdx}-${kwdIdx}`);
        if (activeBtn) {
            activeBtn.style.background = '#FDE047';
            activeBtn.style.transform = 'translate(1px, 1px)';
            activeBtn.style.boxShadow = '1px 1px 0px #1A1A1A';
        }
        const titleEl = document.getElementById(`ktxt-title-${blockScope}-${panelIdx}`);
        const descEl = document.getElementById(`ktxt-desc-${blockScope}-${panelIdx}`);
        if (titleEl) titleEl.innerHTML = `<b>全稱：</b>${fullName}`;
        if (descEl) descEl.innerHTML = `<b>意思：</b>${definition}`;
    };
})();

window.codexCourseEngineData = [
    {
        courseId: "L1-1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            // ==========================================
            // PAGE 1: 獨立全景導航地圖
            // ==========================================
            {
                title: "1. 單元總覽 (1-1 智慧型手機代工廠三方賽局戰術全景圖)",
                text: `
                    <div style="width:100%; border:2px solid #1A1A1A; border-radius:8px; overflow:hidden; box-shadow:3px 3px 0px #1A1A1A; background:#FFF; margin-bottom:15px;">
                        <img src="beginner_codex_assets/overview_1-1.png" alt="1-1單元全景圖" style="width:100%; height:auto; display:block;" onerror="this.src='https://placehold.co/1200x220/1A1A1A/FFFFFF?text=1-1+Brand+R-D+Process+Map+Overview'">
                    </div>
                    <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:16px; box-shadow:2px 2px 0px #1A1A1A; font-size:0.88rem; font-weight:700; line-height:1.6; color:#1A1A1A;">
                        📌 <strong>新手導航指引：</strong>智慧型手機的硬體專案開發是一場極其殘酷的「三方賽局」。在本單元中，你將跨越客戶端、供應商端、與代工廠端三大核心領域。請點擊底部頁碼前進至 Page 2，開始解鎖研發端的實戰關鍵字。
                    </div>
                `
            },
            // ==========================================
            // PAGE 2: 客戶研發端 (Brand R&D)
            // ==========================================
            {
                title: "2. 客戶研發端 (Brand R&D - 主導產品規格與美學定義)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-brand-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('brand', 0, 4)">PRD (產品規格)</div>
                        <div id="tpm-main-btn-brand-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('brand', 1, 4)">ID (外觀美學)</div>
                        <div id="tpm-main-btn-brand-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('brand', 2, 4)">CMF (材質工藝)</div>
                        <div id="tpm-main-btn-brand-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('brand', 3, 4)">Clearance (零件間距)</div>
                    </div>

                    <div id="tpm-main-panel-brand-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導全球市場與競品技術調研，定義硬體規格，發佈產品規格需求書（PRD）。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">追求極致的硬體功能參數，用技術專利護城河拉高市售機台之品牌溢價。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">期待代工廠（EMS）產線能 100% 完美復刻複雜結構，不接受任何組裝公差導致的妥協。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位顯影解鎖)</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-brand-0" id="kbtn-brand-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 0, 0, 'Product Requirement Document (產品規格需求書)', '定義新手機功能、規格與零件配置的最高法規。TPM 必須在開模前清查 CMF 技術文件是否具備產線現有流水線的量產能力，在出圖前剛性攔截幻想規格。')">PRD</div>
                                <div class="kbtn-brand-0" id="kbtn-brand-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 0, 1, 'Design for Manufacturing (可製造性設計)', '在產品設計初期，由代工廠製造工程師評估該結構是否符合流水線的大規模量產複製工藝。用來提前抓出外殼拔模角不足等致命模具設計瑕疵。')">DFM</div>
                                <div class="kbtn-brand-0" id="kbtn-brand-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 0, 2, 'Specification Freeze (技術規格剛性凍結)', '專案跨入特定試產里程碑（如PVT）時，下發剛性禁令鎖死所有設計參數，不允許研發工程師隨意微調尺寸，以便工廠固化 SOP 與夾具排產。')">Freeze</div>
                                <div class="kbtn-brand-0" id="kbtn-brand-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 0, 3, 'Acceptable Quality Level (驗收抽樣合格標準)', '品質檢驗時買賣雙方商定的最高可接受瑕疵概率。IQC 團隊嚴格以此指標在廠門口進行進料抽驗，一旦不良率超標則整批物料剛性拒收退貨。')">AQL</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:4px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-brand-0"><b>全稱：</b>Product Requirement Document (產品規格需求書)</div>
                                <div id="ktxt-desc-brand-0" style="margin-top:4px; color:#475569;"><b>意思：</b>定義新手機功能、規格與零件配置的最高法規。TPM 必須在開模前清查 CMF 技術文件是否具備產線現有流水線的量產能力，在出圖前剛性攔截幻想規格。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-brand-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">設計產品外部巨觀美學線條，包含手機中框弧度、按鍵回彈段落觸感與後置鏡頭火山突起視覺比例。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打造兼具手感與無懈可擊的極簡外部視覺，建立消費者在凡間實體零售店的黃金第一印象。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">量產機器表面必須達到物理零刮傷，消滅任何因塑膠注塑模具頂出工藝而產生任何微觀收縮痕。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-brand-1" id="kbtn-brand-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 1, 0, 'Draft Angle (鋼模脫模拔模角)', '在五金或塑膠殼體垂直外觀表面保留的微小物理斜度（通常為 0.5~2 度）。若無此角度，模具在大量生產頂出時會將機器外殼刮傷。')">Draft Angle</div>
                                <div class="kbtn-brand-1" id="kbtn-brand-1-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 1, 1, 'Sink Mark (結構冷卻收縮痕)', '當結構內部局部肉厚過厚時，塑料冷卻收縮會將外表面拉出一個微小的肉眼可見凹坑，嚴重汙染並破壞設計質感。')">Sink Mark</div>
                                <div class="kbtn-brand-1" id="kbtn-brand-1-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 1, 2, 'Mold Texture (模具表面咬花工藝)', '利用化學蝕刻或雷射在模具鋼材表面做出微觀沙粒、皮紋或幾何紋理，賦予成型後的塑料或金屬外殼霧面手感。')">Texture</div>
                                <div class="kbtn-brand-1" id="kbtn-brand-1-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 1, 3, 'Parting Line (分模接縫線)', '前後鋼模閉合接觸時在產品外殼表面留下的物理接縫線。ID 與 TPM 的戰術防線在於將此線隱蔽在視覺死角，防止毛邊刮手。')">Parting Line</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-brand-1"><b>全稱：</b>Draft Angle (鋼模脫模拔模角)</div>
                                <div id="ktxt-desc-brand-1" style="margin-top:4px; color:#475569;"><b>意思：</b>在五金或塑膠殼體垂直外觀表面保留的微小物理斜度（通常為 0.5~2 度）。若無此角度，模具在大量生產頂出時會將機器外表面生生刮傷。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-brand-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Color, Material, Finishing。主導產品外觀視覺色彩調配、物理物料材質挑選、與金屬表面陽極氧化拋光等製程細節。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">利用高光 C 角、特殊微觀霧面無視覺紋理，打造產品無懈可擊的高級金屬與玻璃物理手感。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">工廠量產大流水線大批量產出時，各批次材料外觀色差（Delta E）剛性控制在客戶品保規定的極限標準線內。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-brand-2" id="kbtn-brand-2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 2, 0, 'Limit Sample (黃金品質外觀限度樣本)', '開線生產前，由客戶 ID、品保與工廠共同對「可接受的微小表面缺陷」簽字封樣，鎖死唯一的判退界線。')">Limit Sample</div>
                                <div class="kbtn-brand-2" id="kbtn-brand-2-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 2, 1, 'Delta E (幾何色彩偏移色差值)', '使用工業色差儀量測產品外殼色彩偏離度的客觀數學指標。手機大廠一般剛性規定 Delta E 必須小於 1.0。')">Delta E</div>
                                <div class="kbtn-brand-2" id="kbtn-brand-2-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 2, 2, 'Anodization (金屬陽極氧化處理)', '利用電化學工藝在鋁合金外殼表面生成一層堅硬、耐磨、耐腐蝕且具備高貴色彩的防護氧化皮層。')">Anodization</div>
                                <div class="kbtn-brand-2" id="kbtn-brand-2-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 2, 3, 'PVD Coating (物理氣相沉積真空鍍膜)', '在高度真空腔體內將特定金屬靶材汽化並沉積附著在不鏽鋼表面，形成高硬度、鏡面質感的防刮美學外衣。')">PVD</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-brand-2"><b>全稱：</b>Limit Sample (黃金品質外觀限度樣本)</div>
                                <div id="ktxt-desc-brand-2" style="margin-top:4px; color:#475569;"><b>意思：</b>開線生產前，由客戶 ID、品保與工廠共同對「可接受的微小表面缺陷」簽字封樣，鎖死唯一的判退界線。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-brand-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在 3D CAD 工程環境內精密審查並計算內部主板電子元件、電池與外部金屬外殼殼體間的 3D 避讓間距。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">保留足夠的公差疊加安全緩衝帶，防範機器受凡間外力撞擊形變時，內部晶片當場被外殼硬擠壓短路毀損。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將 Clearance 間距死守在標準 0.3mm 綠燈水位，絕不允許結構 ME 為了盲目迎合極致超薄而跨越安全界限。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-brand-3" id="kbtn-brand-3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 3, 0, 'Tolerance Stack-up (公差數學疊加模擬)', '多零件拼裝時微觀尺寸負公差累積會導致避讓失效。TPM 必須主導結構發動極限疊加分析，提前清空物理設計雷區。')">Stack-up</div>
                                <div class="kbtn-brand-3" id="kbtn-brand-3-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 3, 1, 'Process Capability Index (加工精準度製程能力指數)', '衡量工廠機台切削尺寸集中受控精準度的數據。Cpk 高於 1.33 代表品質極度穩定，若工廠 Cpk 太差則安全間距必須放大。')">Cpk</div>
                                <div class="kbtn-brand-3" id="kbtn-brand-3-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 3, 2, 'Physical Interference (物理結構干涉空間重疊)', '指在 3D 工程模擬中零件空間發生不合理重疊重合。干涉機率必須在開模前 100% 剛性清零。')">Interference</div>
                                <div class="kbtn-brand-3" id="kbtn-brand-3-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 3, 3, 'FPC Bending Radius (排線軟板安全彎折半徑)', '內部軟性電路板或射頻排線彎折時允許的物理最小半徑。低於安全半徑會導致內部銅箔在拉速受力時發生折斷。')">Bending</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-brand-3"><b>全稱：</b>Tolerance Stack-up (公差數學疊加模擬)</div>
                                <div id="ktxt-desc-brand-3" style="margin-top:4px; color:#475569;"><b>意思：</b>多零件拼裝時微觀尺寸負公差累積會導致避讓失效。TPM 必須主導結構發動極限疊加分析，提前清空物理設計雷區。</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 3: 零件供應商端 (Vendors)
            // ==========================================
            {
                title: "3. 零件供應商端 (Vendors - 掌控高精元件交期與原物料進料檢驗品質)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-vendor-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('vendor', 0, 4)">Lead Time (物料交期)</div>
                        <div id="tpm-main-btn-vendor-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('vendor', 1, 4)">COA (出廠檢驗)</div>
                        <div id="tpm-main-btn-vendor-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('vendor', 2, 4)">Second Source (備援料)</div>
                        <div id="tpm-main-btn-vendor-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('vendor', 3, 4)">IQC (進料品保)</div>
                    </div>

                    <div id="tpm-main-panel-vendor-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">掌控從工廠正式下達採購單（PO），到該稀缺戰略原物料元件實際送抵工廠倉庫入庫的物流總交期。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">物理壓縮物料交期對專案時程的卡死，確保各試產階段開線當天現場 100% 有實物料可以上線。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">向專案經理交割無料期偏位的排產預測，將 LT 超過 12 週的稀缺晶片風險提早發動代償認證。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-vendor-0" id="kbtn-vendor-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 0, 0, 'Forecast (排產產能預測水準)', '工廠需提早 3~6 個月提供給零件廠商的滾動產能需求預估表，方便晶圓原廠提前排產鎖死晶圓產能，防止交期崩塌。')">Forecast</div>
                                <div class="kbtn-vendor-0" id="kbtn-vendor-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 0, 1, 'Buffer Stock (安全庫存水位)', '為應對惡劣物流延誤或大流水線上爆發突發拋料損耗缺陷，硬核囤積在製造廠無塵倉庫內的物料儲備。')">Buffer Stock</div>
                                <div class="kbtn-vendor-0" id="kbtn-vendor-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 0, 2, 'Dual Sourcing (多源採購單配比)', '量產 MP 階段通常按照 7:3 比例將同功能零件單拆分發給兩家具備資質的供應商，逼迫兩者拼搶直通率與產速。')">Dual Sourcing</div>
                                <div class="kbtn-vendor-0" id="kbtn-vendor-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 0, 3, 'Pin-to-Pin (腳位完全導通無縫相容)', '指二線原物料元件的微觀物理形變尺寸、銲墊位置與一線完全契合一致，工廠不需修改 Layout 即可代償切換。')">Pin-to-Pin</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-vendor-0"><b>全稱：</b>Forecast (排產產能預測水準)</div>
                                <div id="ktxt-desc-vendor-0" style="margin-top:4px; color:#475569;"><b>意思：</b>工廠需提早 3~6 個月提供給零件廠商的滾動產能需求預估表，方便晶圓原廠提前排產鎖死晶圓產能，防止交期崩塌。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-vendor-1" style="display:none; width:100%;"><div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px;"><b>COA 品質控制：</b>Certificate of Analysis。出廠前由原廠質量實驗室簽發出的實測物理形變與電性特徵測量數據報告，防止帶病原件流入。</div></div>
                    <div id="tpm-main-panel-vendor-2" style="display:none; width:100%;"><div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px;"><b>Second Source 戰術：</b>引進二線零件廠破除技術壟斷。在 DVT 里程碑前順利通過高低溫可靠性複審，確保随時現地代償。</div></div>
                    <div id="tpm-main-panel-vendor-3" style="display:none; width:100%;"><div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px;"><b>IQC 進料品保：</b>Incoming Quality Control。嚴格遵循 AQL 抽樣水準，在廠門口將瑕疵原件就地擊落退貨，死守品質源頭。</div></div>
                `
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
                            <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                                <div id="tpm-main-btn-ems-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('ems', 0, 4)">FPY (直通率)</div>
                                <div id="tpm-main-btn-ems-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('ems', 1, 4)">UPH (每小時產速)</div>
                                <div id="tpm-main-btn-ems-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('ems', 2, 4)">WIP (製品積壓)</div>
                                <div id="tpm-main-btn-ems-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('ems', 3, 4)">Line Balance (線平衡)</div>
                            </div>

                            <div id="tpm-main-panel-ems-0" style="display:block; width:100%;">
                                <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                    <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">First Pass Yield。精算機器不經歷 any 在線二次手工修補焊接、一次性高精導通全檢合格下線的真實物理概率。</div></div>
                                    <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">真實暴露大流水線治具健康度，硬核阻絕經歷過二度熱應力手工重工損傷的機台流入最終發貨彩盒。</div></div>
                                    <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">撕開偽良率外衣。專案出關評審剛性鐵律：『不斬最終入庫合格率，只斬大流水線首檢直通率！』。</div></div>
                                </div>
                                <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                                    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                        <div class="kbtn-ems-0" id="kbtn-ems-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 0, 0, 'False Alarm Rate (治具測試誤判率)', 'FCT測試站因探針老化或射頻纜線磨損漏電，將完全健康的主板錯誤判定為不良零件的極低指標。必須嚴格掐死在 1% 以下。')">False Alarm</div>
                                        <div class="kbtn-ems-0" id="kbtn-ems-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 0, 1, 'Rework Counter Control (手工重工次數限制)', '限制單主板被送入維修室高溫更換晶片晶圓的極限次數。過度重工會導致 PCB 走線內部結構硬傷微觀形變受損。')">Rework</div>
                                        <div class="kbtn-ems-0" id="kbtn-ems-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 0, 2, 'WIP Clearing Sequence (在線製品大清洗清零)', '在專案試產評審會前夕，強制要求工廠維修室進行在製品清空並結案 Debug，防止工廠囤積呆料、隱瞞不良。')">WIP Block</div>
                                        <div class="kbtn-ems-0" id="kbtn-ems-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 0, 3, 'Cycle Time (標準作業工時)', '單一操作工完成扣合排線或鎖螺絲所需花費的純物理秒數。整條大流水線的拉速 UPH 與平衡率完全由最慢的那站決定。')">Cycle Time</div>
                                    </div>
                                    <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                        <div id="ktxt-title-ems-0"><b>全稱：</b>False Alarm Rate (自動化功能治具測試誤判率)</div>
                                        <div id="ktxt-desc-ems-0" style="margin-top:4px; color:#475569;"><b>意思：</b>FCT測試站因探針老化或射頻纜線磨損漏電，將完全健康的主板錯誤判定為不良零件的極低指標。必須嚴格掐死在 1% 以下，否則會引發重工室暴走。</div>
                                    </div>
                                </div>
                            </div>

                            <div id="tpm-main-panel-ems-1" style="display:none; width:100%;"><div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px;"><b>UPH 產速控制：</b>Units Per Hour。每小時穩定吐出的成品下線總量，平攤人工成本，捍衛製造毛利。</div></div>
                            <div id="tpm-main-panel-ems-2" style="display:none; width:100%;"><div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px;"><b>WIP 在製品盤點：</b>Work In Process。滯留在流水線各工位或維修室的半成品，開線大會前必須強制發動清線清除淤泥。</div></div>
                            <div id="tpm-main-panel-ems-3" style="display:none; width:100%;"><div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px;"><b>Line Balance 線平衡：</b>全流水線平衡率剛性死守 85% 以上。消除最慢瓶頸工位，打通流暢的生產拉速。</div></div>
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
