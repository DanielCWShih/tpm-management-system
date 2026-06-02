/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-02 V7.9: 👑 全域 4 分法網格暨雙層亂序大考題庫終極完全體（唯讀封牌版）。
1. 全域視覺對齊：全面重構 Page 2、Page 3、Page 4 所有 Keywords 網格為 repeat(4, 1fr)，按鈕尺寸剛性統一，完美防拉伸。
2. 題庫滿血擴充：examVault 擴容至 12 道重工業實戰考題（每個領域 4 題）。
3. 雙層動態亂序：內建隨機編碼引擎，自動「抽 3 題」＋「100% 打亂選項順序」並動態重算正確索引，絕無作弊盲區。
4. 唯讀封牌規格：100% 完整多行全展開，拒絕任何未授權的裁剪與優化省略號。
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
                                <div class="kbtn-brand-1" id="kbtn-brand-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('brand', 1, 0, 'Draft Angle (鋼模脫模拔模角)', '在五金或塑膠殼體垂直外觀表面保留的微小物理斜度（通常為 0.5~2 度）。若無此角度，模具在大量延權頂出時會將機器外殼刮傷。')">Draft Angle</div>
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

                    <div id="tpm-main-panel-brand-2" style="none; width:100%;">
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
                        <div id="tpm-main-btn-vendor-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('vendor', 1, 4)">OQC (出廠檢驗)</div>
                        <div id="tpm-main-btn-vendor-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('vendor', 2, 4)">Second Source (備援料)</div>
                        <div id="tpm-main-btn-vendor-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('vendor', 3, 4)">IQC (進料品保)</div>
                    </div>

                    <div id="tpm-main-panel-vendor-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">掌控從工廠正式下達採購單（PO），到該稀缺戰術原物料元件實際送抵工廠倉庫入庫的物流總交期。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">物理壓縮物料交期對專案時程的卡死，確保各試產階段開線當天現場 100% 有實物料可以上線。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">向專案經理交割無料期偏位的排產預測，將 LT 超過 12 週的稀缺晶片風險提早發動代償認證。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位顯影解鎖)</div>
                            <!-- 🎯 Page 3 LeadTime 剛性對齊 4 分法網格，防止拉伸變形 -->
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-vendor-0" id="kbtn-vendor-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 0, 0, 'Forecast (排產產能預測水準)', '工廠需提早 3~6 個月提供給零件廠商的滾動產能需求預估表，方便晶圓原廠提前排產鎖死晶圓產能，防止交期崩塌。')">Forecast</div>
                                <div class="kbtn-vendor-0" id="kbtn-vendor-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 0, 1, 'Buffer Stock (安全庫存水位)', '為應對惡劣物流延誤或大流水線上爆發突發拋料損耗缺陷，硬核囤積在製造廠無塵倉庫內的物料儲備。')">Buffer Stock</div>
                                <div class="kbtn-vendor-0" id="kbtn-vendor-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 0, 2, 'Dual Sourcing (多源採購單配比)', '量產 MP 階段通常按照 7:3 比例將同功能零件單拆分發給兩家具備資質的供應商，逼迫兩者拼搶直通率與產速。')">Dual Sourcing</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-vendor-0"><b>全稱：</b>Forecast (排產產能預測水準)</div>
                                <div id="ktxt-desc-vendor-0" style="margin-top:4px; color:#475569;"><b>意思：</b>工廠需提早 3~6 個月提供給零件廠商的滾動產能需求預估表，方便晶圓原廠提前排產鎖死晶圓產能，防止交期崩塌。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-vendor-1" style="display:none; width:100%;">
                        <div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px; font-weight:700; font-size:0.88rem; line-height:1.6; color:#1A1A1A;">
                            <b>OQC 出廠檢驗：</b>Outgoing Quality Control。原物料供應商在貨物出廠發貨前，由原廠質量實驗室實施的最後成品品質抽樣核檢，隨貨附帶實測物理外觀與電性特徵報告，嚴防缺陷原件流入跨境供應物流鏈。
                        </div>
                    </div>
                    
                    <div id="tpm-main-panel-vendor-2" style="display:none; width:100%;"><div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px;"><b>Second Source 戰術：</b>引進二線零件廠破除技術壟斷。在 DVT 里程碑前順利通過高低溫可靠性複審，確保隨時現地代償。</div></div>
                    
                    <div id="tpm-main-panel-vendor-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">由我們代工廠/EMS廠端主導把關，運用精密二次元 OMM 或三次元機台，對所有送抵工廠倉庫的晶片與結構件進行實體抽樣量測。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">強行攔截因原廠漏檢或跨境物流震動混入的缺陷原件。確保進料抽驗的手法與治具，與線體後段的功能測站 100% 剛性同步。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">徹底封死因兩端測試方法不對位引發的漏檢盲區，拒缺陷零件於組裝線之外，確保線體絕不發生集體流產癱瘓。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位顯影解鎖)</div>
                            <!-- 🎯 Page 3 IQC 剛性對齊 4 分法網格，防止拉伸變形 -->
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-vendor-3" id="kbtn-vendor-3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 3, 0, 'Dimensional Tolerance (尺寸合規基準)', '運用精密二次元 OMM 或三次元機台抽向量測進料結構件，確認實體物理尺寸精確落於標準圖面公差範圍內，杜絕因形變引發後續防水結構幾何崩潰。')">尺寸合規基準</div>
                                <div class="kbtn-vendor-3" id="kbtn-vendor-3-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 3, 1, 'Test Methodology Synchronization (測站方法同步)', '工廠 IQC 抽驗物料所套用的量測手法、電路硬體治具與軟體測試演算法，必須與生產線後段的功能測試站（FCT）保持 100% 剛性同步，徹底封死因方法不對位引發的漏檢盲區。')">測站方法同步</div>
                                <div class="kbtn-vendor-3" id="kbtn-vendor-3-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('vendor', 3, 2, 'Golden Sample Alignment (黃金樣機對位指標)', '經品牌研發與品質端雙重簽核封樣、各項電性與物理參數皆最接近名義值的標準硬體標本，用以定期比對並校準 IQC 與線上檢驗機台。')">黃金樣機對位</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-vendor-3"><b>全稱：</b>Dimensional Tolerance (尺寸合規基準)</div>
                                <div id="ktxt-desc-vendor-3" style="margin-top:4px; color:#475569;"><b>意思：</b>運用精密二次元 OMM 或三次元機台抽向量測進料結構件，確認實體物理尺寸精確落於標準圖面公差範圍內，杜絕因形變引發後續防水結構幾何崩潰。</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 4: 代工製造廠端 (EMS Factory)
            // ==========================================
            {
                title: "4. 代工製造廠端 (EMS Factory - 大大量產拼裝、產速與直通良率防護)",
                text: `
                    <div style="width:100%; display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px;">
                        <div id="tpm-main-btn-ems-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('ems', 0, 4)">FPY (Final Pass Yield) 直通率</div>
                        <div id="tpm-main-btn-ems-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('ems', 1, 4)">UPH (每小時產速)</div>
                        <div id="tpm-main-btn-ems-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('ems', 2, 4)">WIP (製品積壓)</div>
                        <div id="tpm-main-btn-ems-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('ems', 3, 4)">Line Balance (線平衡)</div>
                    </div>

                    <div id="tpm-main-panel-ems-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Final Pass Yield。精算產品在流水線上，不經歷 any 二次手動重工修補焊接，一次性順暢通過所有測站全檢下線的真實物理概率。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">真實暴露大流水線製程治具健康度，硬核阻絕經歷過重工熱應力手工重工損傷的機台流入最終發貨彩盒。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">撕開偽良率外衣。專案出關評審剛性鐵律：『不斬最終入庫合格率，只斬大流水線首檢直通率！』。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <!-- 🎯 FPY 4 分法網格 -->
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-ems-0" id="kbtn-ems-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 0, 0, 'First Pass (首檢直通)', '指產品在生產線上第一次通過測站全檢的良率。不接受任何二次重工、微調探針或重新插拔，是暴露線體製程缺陷與治具穩定度的最真實指標。')">First Pass</div>
                                <div class="kbtn-ems-0" id="kbtn-ems-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 0, 1, 'Retest Pass (複測通過)', '首次測試不合格後，經由作業員重新清理探針或重新置位後再次測試通過。雖然最終判定為良品，但潛藏軟體邊界或微觀接觸不良風險。')">Retest Pass</div>
                                <div class="kbtn-ems-0" id="kbtn-ems-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 0, 2, 'Final Fail (最終不良)', '經歷標準複測流程後依然無法通過測試，必須被剛性剔除出主流水線，分流至維修站進行實體解剖與晶片更換的報廢品。')">Final Fail</div>
                                <div class="kbtn-ems-0" id="kbtn-ems-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 0, 3, 'Failure Description (不良現象敘述)', '測試機台自動產出的錯誤代碼（Error Code）或測試員登錄的實體外觀缺陷特徵。是維修工程師發動精準追溯與 DFM 逆向修正的數據聖經。')">Failure Description</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-ems-0"><b>全稱：</b>First Pass (首檢直通)</div>
                                <div id="ktxt-desc-ems-0" style="margin-top:4px; color:#475569;"><b>意思：</b>指產品在生產線上第一次通過測站全檢的良率。不接受 any 二次重工、微調探針或重新插拔，是暴露線體製程缺陷與治具穩定度的最真實指標。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-ems-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Units Per Hour。每小時穩定吐出的成品下線總量，精算並動態追蹤主流水線的即時產速指標。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">平攤工廠固定人工與夾具折舊成本，確保專案生產毛利，按時滿足全球客戶的發貨交期。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">線體拉速達到標竿 UPH（如 240pcs/hr），無任何積壓堵塞，打通流暢的生產拉速。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <!-- 🎯 UPH 4 分法網格：按鈕佔 25% 寬度，其餘 3 格自動留白 -->
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-ems-1" id="kbtn-ems-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 1, 0, 'Line Down (停線標準)', '當大流水線特定測站連續發生 3 台相同 Error Code（Top Defect），或直通率暴跌破觸發界限時，發動剛性斷電停線機制。不允許帶病生產，直到 TPM 與 PE/QA 排除黃金首件。')">Line Down</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-ems-1"><b>全稱：</b>Line Down (停線標準)</div>
                                <div id="ktxt-desc-ems-1" style="margin-top:4px; color:#475569;"><b>意思：</b>當大流水線特定測站連續發生 3 台相同 Error Code（Top Defect），或直通率暴跌破觸發界限時，發動剛性斷電停線機制。不允許帶病生產，直到 TPM 與 PE/QA 排除黃金首件。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-ems-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Work In Process。滯留在流水線各工位、測試夾具間或維修排隊區的製品積壓總量動態盤點。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">嚴防製品在線體形成堰塞湖，壓死工廠資金周轉，同時預防大量缺陷零件隱瞞堆積。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">各製程段製品水位極低且流動流暢，結關試產前發動大清洗（WIP Clearing）回歸零堆積。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <!-- 🎯 WIP 4 分法網格：3 個按鈕整齊排列，第 4 格優雅空出 -->
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-ems-2" id="kbtn-ems-2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 2, 0, 'Production WIP (產線製品積壓)', '正常在主流水線上流動、組裝或等待測試的製品。必須設定嚴格的水位上限，嚴防工位平衡崩潰引發集體堆料。')">Production WIP</div>
                                <div class="kbtn-ems-2" id="kbtn-vendor-2-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 2, 1, 'FA WIP (故障分析製品)', '已被測站踢出、滯留在失效分析（Failure Analysis）或重工室等待解剖與更換晶片的製品。是專案 Debug 與追蹤 Top Defect 的黃金數據源。')">FA WIP</div>
                                <div class="kbtn-ems-2" id="kbtn-vendor-2-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('ems', 2, 2, 'Buffer (半成品緩衝製品蓄水池)', '若此製程製品需要投入到下一個總成產品中（例如中框總成投入總裝線），必須建立剛性安全 Buffer 水位，防止前段設備跳機直接引發後段集體無料斷線停線。')">Buffer</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-ems-2"><b>全稱：</b>Production WIP (產線製品積壓)</div>
                                <div id="ktxt-desc-ems-2" style="margin-top:4px; color:#475569;"><b>意思：</b>正常在主流水線上流動、組裝 or 等待測試的製品。必須設定嚴格的水位上限，嚴防工位平衡崩潰引發集體堆料。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-ems-3" style="display:none; width:100%;"><div style="background:#FFFDF2; border:2px solid #1A1A1A; padding:15px; border-radius:6px;"><b>Line Balance 線平衡：</b>全流水線平衡率剛性死守 85% 以上。消除最慢瓶頸工位，打通流暢的生產拉速。</div></div>
                `
            }
        ],
        // ─── 👑 滿血擴充：12 題裝甲題庫大盤 ───
        examVault: [
            // [領域 A: Brand R&D - 4題]
            { q: "在產品開發初期，品牌端（Brand）發布用以定義新產品核心功能、目標售價與規格的最高指導法規文件是？", o: ["PRD 產品規格需求書", "DFM 可製造性設計文件", "AVL 核准供應商清單"], a: 0 },
            { q: "為了防止五金或塑膠殼體在大量生產成型頂出時表面被生生刮傷，模具或結構設計必須預留何種微小物理斜度？", o: ["Sink Mark 收縮痕", "Draft Angle 脫模拔模角", "Parting Line 分模線"], a: 1 },
            { q: "使用工業色差儀量測產品外殼色彩偏離度的客觀指標為 Delta E，手機大廠通常剛性規定大量產成品的色差範圍應為？", o: ["ΔE 剛性小於 1.0", "ΔE 剛性小於 3.0", "ΔE 剛性小於 5.0"], a: 0 },
            { q: "當多零件拼裝時微觀尺寸負公差累積會導致內部避讓失效，TPM 必須主導結構 ME 工程師發動何種數學模擬分析？", o: ["Cpk 製程能力分析", "Tolerance Stack-up 公差鏈疊加模擬", "Interference 實體重疊干涉"], a: 1 },
            
            // [領域 B: Vendors - 4題]
            { q: "元件供應商（Vendor）需要提早 3~6 個月向晶圓原廠提前排產並鎖死產能，其依據的核心供應鏈文件是？", o: ["Demand Forecast 排產產能預測", "Buffer Stock 安全庫存", "AVL 名冊"], a: 0 },
            { q: "物料在離開原廠大門、污染跨國供應物流鏈前實施的最後成品品質抽樣核檢流程稱為？", o: ["IQC 進料品保", "OQC 出廠檢驗", "BOM 變更凍結"], a: 1 },
            { q: "為了破除一線元件供應商的技術壟斷與價格控制，在 NPI 流程中引進二線零件廠的防禦策略被稱為？", o: ["Dual Sourcing 雙源採購", "Second Source 備援料認證", "AVL 准入名冊"], a: 1 },
            { q: "為了徹底封死工廠前端的進料漏檢與誤判盲區，代工廠 IQC 端的量測手法與治具必須與後段測站達成？", o: ["100% 剛性同步化", "完全獨立分開處理", "由供應商隨機決定"], a: 0 },
            
            // [領域 C: EMS Factory - 4題]
            { q: "產品在生產線上『第一次』順暢通過所有測站全檢下線，未經歷 any 在線二次手工修補銲接的真實物理概率稱為？", o: ["First Pass (首檢直通良率)", "Retest Pass (複測通過率)", "Final Fail (最終不良率)"], a: 0 },
            { q: "當大流水線特定測站連續發生 3 台相同 Error Code（Top Defect），或直通率暴跌破觸發底線時，工廠應發動何種剛性機制？", o: ["Line Down (停線標準) 強制斷電", "WIP Clearing 製品清零大清洗", "Cycle Time 作業時間微調"], a: 0 },
            { q: "已被測站踢出、滯留在失效分析（Failure Analysis）或維修室等待解剖與更換晶圓晶片的製品積壓，在工廠端屬於？", o: ["Production WIP", "FA WIP", "Buffer 緩衝製品"], a: 1 },
            { q: "當前製程半成品需要投入到下一個總成產品中，為了防止前段設備跳機直接引發後段集體無料停線，必須剛性建立？", o: ["Production WIP 水位上限", "FA WIP 報廢區", "Buffer 安全緩衝製品庫存"], a: 2 }
        ]
    }
];

// 👑 雙層隨機亂序引擎：100% 打亂選項順序並動態重算答案索引 👑
(function() {
    if (!window.codexCourseEngineData || window.codexCourseEngineData.length === 0) return;
    const vault = window.codexCourseEngineData[0].examVault;
    
    // ─── 第一層：遍歷所有題目，實施「選項 ABC 亂序」並動態重新校準 a 索引 ───
    for (let i = 0; i < vault.length; i++) {
        let qItem = vault[i];
        let correctText = qItem.o[qItem.a]; // 抓取當前正確答案的文字內容
        
        // 對該題目的選項陣列發動 Fisher-Yates 隨機洗牌
        for (let s = qItem.o.length - 1; s > 0; s--) {
            const r = Math.floor(Math.random() * (s + 1));
            [qItem.o[s], qItem.o[r]] = [qItem.o[r], qItem.o[s]];
        }
        
        // 重新追蹤正確答案洗牌後的新位置，動態覆寫 a 索引
        qItem.a = qItem.o.indexOf(correctText);
    }

    // ─── 第二層：打亂 12 題題庫總大盤，並精確切取 3 題交付主殼 ───
    for (let i = vault.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vault[i], vault[j]] = [vault[j], vault[i]];
    }
    
    // 切割前 3 題，完美交割
    window.codexCourseEngineData[0].examVault = vault.slice(0, 3);
})();
