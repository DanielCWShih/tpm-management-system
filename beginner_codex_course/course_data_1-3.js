/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-02 V8.00-GEO4M: 👑 子單元 1-3 數據關鍵詞重工業級全量大擴容（封牌版）。
1. 全域 4 分法網格：100% 覆蓋 Page 1~3 所有子面板，關鍵詞數量統一擴充至 4 個，全面套用 repeat(4, 1fr) 拓撲防變形。
2. 唯讀封牌外殼：100% 完美相容 750 列的 HTML 播放器外殼，不更動全域路由機制。
3. 題庫與大腦：內建 12 道硬核 4M1E 實戰題庫，附帶選項與題目雙層隨機亂序大腦，尾端括號 100% 閉合導通。
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
        courseId: "L1-3", 
        menuTitle: "1-3: 工廠地理與 4M1E 線體通識",
        subPages: [
            // ==========================================
            // PAGE 1: 工廠地理與產線拓撲 (Scope: geo)
            // ==========================================
            {
                title: "1. 工廠地理與產線拓撲 (Factory Layout 通識)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-geo-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('geo', 0, 4)">IQC 車間 (進料把關)</div>
                        <div id="tpm-main-btn-geo-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('geo', 1, 4)">SMT 車間 (晶片銲接)</div>
                        <div id="tpm-main-btn-geo-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('geo', 2, 4)">Assembly 流水線 (實體組裝)</div>
                        <div id="tpm-main-btn-geo-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('geo', 3, 4)">Packout 區 (包裝發貨)</div>
                    </div>

                    <!-- ─── IQC Panel ─── -->
                    <div id="tpm-main-panel-geo-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">對送抵工廠的所有外部戰術零件、外殼與半導體元件，進行物理尺寸與電性的最前端抽檢把關。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在工廠大門口攔截一切不良品與跨境震動損傷件，嚴防有缺陷的零件流向新生產線。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">死守品質最前端，達成缺陷原物料零漏檢，徹底免除後段因無料或劣料導致的開線流產。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-geo-0" id="kbtn-geo-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 0, 0, 'Factory Layout (車間地理佈局規劃)', '工廠各車間與流水線的空間地理規劃，講求最短物流動線，防止物料搬運過程發生二次碰撞凹折。')">Factory Layout</div>
                                <div class="kbtn-geo-0" id="kbtn-geo-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 0, 1, 'AQL Sampling (加嚴抽樣計畫基準)', '品保部門依據統計學建立的物料抽驗孔徑。一旦抽驗不良率跨越臨界防線，整批高價晶片或外殼將就地剛性拒收。')">AQL Sampling</div>
                                <div class="kbtn-geo-0" id="kbtn-geo-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 0, 2, 'Material Segregation (缺陷物料物理隔離)', '在 IQC 車間被判定不合格的呆料瑕疵品，必須實體鎖入紅線隔離區，嚴防發生人為誤用、混料上線的災難。')">Segregation</div>
                                <div class="kbtn-geo-0" id="kbtn-geo-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 0, 3, 'RTV Process (不合格原物料退回原廠流程)', 'Return to Vendor。對 IQC 判退物料開具缺失報告，強行發動商務退貨與退款流程，將財務黑洞推回元件廠。')">RTV Process</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-geo-0"><b>全稱：</b>Factory Layout (車間地理佈局規劃)</div>
                                <div id="ktxt-desc-geo-0" style="margin-top:4px; color:#475569;"><b>意思：</b>工廠各車間與流水線的空間地理規劃，講求最短物流動線，防止物料搬運過程發生二次碰撞凹折。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── SMT Panel ─── -->
                    <div id="tpm-main-panel-geo-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">表面黏著車間。在高度潔淨環境下動用高速貼片機與回流焊爐，將晶片精確電性焊接至 PCB 中板。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打通整機系統的電氣通路，智造出具備極高功能密度的實體電路主機板主體。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">爐後 AOI 光學全檢直通良率跨越 99.2% 鋼鐵底線，消滅空銲、短路與立碑死鎖缺陷。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-geo-1" id="kbtn-geo-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 1, 0, 'Reflow Temperature Profile (回流焊爐焊接溫區曲線)', '設置 10 到 12 個獨立物理溫區，依據不同半導體熱敏元件剛性調配加熱慢升、熔融、固化的溫度時間曲線。')">Reflow Profile</div>
                                <div class="kbtn-geo-1" id="kbtn-geo-1-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 1, 1, 'SPI 3D Inspection (錫膏印刷後 3D 鐳射掃描)', '在精密貼片前，以紅外線鐳射 100% 掃描主板鋼網印刷後的錫膏厚度、體積與幾何偏位，提前擊落少錫短路。')">SPI 3D Scan</div>
                                <div class="kbtn-geo-1" id="kbtn-geo-1-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 1, 2, 'AOI Post-Reflow Verification (自動光學爐後全檢演算法)', '運用高解析相機與光學演算法，在出爐後 100% 自動清查零件错位、極性反向、空銲立碑與微觀錫橋短路。')">AOI Check</div>
                                <div class="kbtn-geo-1" id="kbtn-geo-1-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 1, 3, 'Solder Paste Exposure Life (錫膏常溫曝露壽命)', '錫膏開盒解凍後、在鋼網刮刀上允許暴露的極限物理秒數。超時會導致助焊劑揮發、發生惡性黏落缺陷。')">Solder Life</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-geo-1"><b>全稱：</b>Reflow Temperature Profile (回流焊爐焊接溫區曲線)</div>
                                <div id="ktxt-desc-geo-1" style="margin-top:4px; color:#475569;"><b>意思：</b>設置 10 到 12 個獨立物理溫區，依據不同半導體熱敏元件剛性調配加熱慢升、熔融、固化的溫度時間曲線。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── Assembly Panel ─── -->
                    <div id="tpm-main-panel-geo-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">總裝流水線。主導多工位人工與氣動夾具協作，將主板、螢幕、鏡頭與外殼進行實體物理總裝。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將前段所有的半成品與 3D 設計圖紙，完整落地復刻轉化為可交付市場的實體手機。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">線平衡率剛性達標 85% 以上，杜絕任何特定工位卡死引發的在線製品（WIP）堰塞湖。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-geo-2" id="kbtn-geo-2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 2, 0, 'Line Balancing (大流水線工位時程平衡率)', '精算並消除瓶頸工位，使整條總裝線各工位作業時間咬合相同，消除無謂的人工等待浪費。')">Line Balancing</div>
                                <div class="kbtn-geo-2" id="kbtn-geo-2-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 2, 1, 'Tact Time (產線單工位產能節拍物理秒數)', '指輸送帶流經單一操作工面前所允許的標準物理停留秒數（如 12 秒/站）。是編排生產拉速的基本刻度。')">Tact Time</div>
                                <div class="kbtn-geo-2" id="kbtn-geo-2-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 2, 2, 'Poka-Yoke (實體機械防呆治具)', '在組裝夾具上設置非對稱剛性防呆銷、或紅外線定位感測，限制操作工手法，使零件反向或錯位時生生無法塞入。')">Poka-Yoke</div>
                                <div class="kbtn-geo-2" id="kbtn-geo-2-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 2, 3, 'WIP Accumulation Buffer (在線製品安全水位防線)', '在半成品測站（如氣密終檢）前規劃的物理蓄水池，用以代償前後工位因換料或微小跳機引起的拉速坍塌。')">WIP Buffer</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-geo-2"><b>全稱：</b>Line Balancing (大流水線工位時程平衡率)</div>
                                <div id="ktxt-desc-geo-2" style="margin-top:4px; color:#475569;"><b>意思：</b>精算並消除瓶頸工位，使整條總裝線各工位作業時間咬合相同，消除無謂的人工等待浪費。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── Packout Panel ─── -->
                    <div id="tpm-main-panel-geo-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">包裝發貨線。對總裝與 FCT 測試完好的成品機台，實施貼膜、附帶配件、封入發貨彩盒。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">賦予產品最終出廠的商業包裝，並由 QA 團隊在發貨前進行最後一關的剛性拒收攔截。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">成品防禦完全閉環，附件無缺失、條碼掃描綁定無遺漏，全機以標竿產速安全入庫。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-geo-3" id="kbtn-geo-3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 3, 0, 'OBA Random Check (開箱審查隨機抽驗)', '模擬消費者視野。從已封箱彩盒中剛性盲抽，嚴查外觀微觀刮傷或說明書漏附，是出廠發貨前的最終攔截。')">OBA Check</div>
                                <div class="kbtn-geo-3" id="kbtn-geo-3-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 3, 1, 'IMEI Data Burning (唯一身分識別碼燒錄連鎖)', '將全球唯一身分識別碼強行燒錄至手機閃存，同步以高速條碼槍將整機、彩盒、外箱標籤達成三碼數據綁定。')">IMEI Burn</div>
                                <div class="kbtn-geo-3" id="kbtn-geo-3-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 3, 2, 'Carton Seal (發貨外箱捆包防撕封籤)', '對大包裝外相進行自動化膠帶束緊、並貼上防偽一次性標籤。是跨境長途海空運物流鏈防潮、防盜的核心防線。')">Carton Seal</div>
                                <div class="kbtn-geo-3" id="kbtn-geo-3-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('geo', 3, 3, 'Palletization (棧板重疊幾何堆疊防護)', '依據力學規律將發貨紙箱在木質或塑料棧板上進行矩陣打包、並包裹拉伸纏繞膜，鎖死跨境堆疊運輸防震大盤。')">Palletize</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-geo-3"><b>全稱：</b>OBA Random Check (開箱審查隨機抽驗)</div>
                                <div id="ktxt-desc-geo-3" style="margin-top:4px; color:#475569;"><b>意思：</b>模擬消費者視野。從已封箱彩盒中剛性盲抽，嚴查外觀微觀刮傷或說明書漏附，是出廠發貨前的最終攔截。</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 2: 4M1E 人機料法剛性管制 (Scope: core4m)
            // ==========================================
            {
                title: "2. 4M1E 人機料法剛性管制 (EMS 生產要素盤點)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-core4m-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('core4m', 0, 4)">Man (人員編制)</div>
                        <div id="tpm-main-btn-core4m-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('core4m', 1, 4)">Machine (機台治具)</div>
                        <div id="tpm-main-btn-core4m-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('core4m', 2, 4)">Material (物料防護)</div>
                        <div id="tpm-main-btn-core4m-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('core4m', 3, 4)">Method (工藝方法)</div>
                    </div>

                    <!-- ─── Man Panel ─── -->
                    <div id="tpm-main-panel-core4m-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導對一線流水線操作員（DL）的崗前培訓、手法糾正與現地認證考核。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">杜絕因作業員私自變更操作順序或動作不熟練，導致精細排線被生生折斷或組裝重工內傷。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">DL 100% 持證上崗，嚴格按秒計代償動作差距，實現全流水線作業工時恆定平穩。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊下方卡片直接原位顯影解鎖)</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-core4m-0" id="kbtn-core4m-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 0, 0, 'OJT (現地崗位教育訓練)', 'On-the-Job Training。在生產大流水線上由班組長進行的實體工位手把手教學，是用以固化 DL 實體手法與防呆意識的核心機制。')">OJT</div>
                                <div class="kbtn-core4m-0" id="kbtn-core4m-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 0, 1, 'DL Efficiency (直接人工生產效率指標)', '直接作業員在特定班次內實際吐出產品總量與標準產能理論值的百分比。用以追蹤線體人工產出效率。')">DL Efficiency</div>
                                <div class="kbtn-core4m-0" id="kbtn-core4m-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 0, 2, 'Skill Matrix (DL 崗位技能認證矩陣)', '工廠班組長現地建立的員工資質矩陣圖。只有通過高難度工位（如關鍵鎖付、氣密檢測）認證的 DL 才有權上崗。')">Skill Matrix</div>
                                <div class="kbtn-core4m-0" id="kbtn-core4m-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 0, 3, 'Fatigue Control ( DL 換班與疲勞度控管)', '大流水線高強度重複機械動作易引發工人疲勞盲區。工廠必須落實嚴格的定時輪調與強制換班，扼殺漏裝。')">Fatigue Ctrl</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-core4m-0"><b>全稱：</b>OJT (現地崗位教育訓練)</div>
                                <div id="ktxt-desc-core4m-0" style="margin-top:4px; color:#475569;"><b>意思：</b>On-the-Job Training。在生產大流水線上由班組長進行的實體工位手把手教學，是用以固化 DL 實體手法與防呆意識的核心機制。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── Machine Panel ─── -->
                    <div id="tpm-main-panel-core4m-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">對自動化點膠機、高速貼片機、功能測試夾具進行定期的精密物理點檢與精度校準。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">強制保持車間設備處於穩定最高狀態，嚴防探針老化磨損、真空吸嘴漏氣引發大面積誤判拋料。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">落實 PM 預防性保養計畫，封死突發跳機隱患，確保量產拉速全開時不因治具故障掉速停線。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-core4m-1" id="kbtn-core4m-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 1, 0, 'Preventive Maintenance (機台設備預防性定期保養)', '依照時間表強制對高速貼片機等核心機台進行拆解清理、更換磨損皮帶與潤滑。用前期防護扼殺意外跳機災難。')">PM Plan</div>
                                <div class="kbtn-core4m-1" id="kbtn-core4m-1-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 1, 1, 'Calibration (精密儀器度量衡校準基準)', '定期動用標準物理量塊與第三方電學儀器，對測試機台進行微米級物理基準校正，嚴防量測數據產生宏觀飄移。')">Calibration</div>
                                <div class="kbtn-core4m-1" id="kbtn-core4m-1-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 1, 2, 'Fixture Aging Monitor (功能測試夾具探針老化監控)', '測試射頻、電路的黃銅黃金探針具有剛性插拔壽命極限。必須設定插拔次數觸發警報，超時強制報廢更換。')">Probe Aging</div>
                                <div class="kbtn-core4m-1" id="kbtn-core4m-1-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 1, 3, 'Overall Equipment Effectiveness (設備綜合效率特徵指標)', '量測車間自動化設備在時間、性能與直通品質三個維度下發揮出的真實淨產出效率。是評估線體健康的最高客觀指標。')">OEE Indicator</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-core4m-1"><b>全稱：</b>Preventive Maintenance (機台設備預防性定期保養)</div>
                                <div id="ktxt-desc-core4m-1" style="margin-top:4px; color:#475569;"><b>意思：</b>依照時間表強制對高速貼片機等核心機台進行拆解清理、更換磨損皮帶與潤滑。用前期防護扼殺意外跳機災難。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── Material Panel ─── -->
                    <div id="tpm-main-panel-core4m-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在線體上嚴格執行原物料的批次控管、防潮真空標籤核檢與溫濕度敏感元件壽命追蹤。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">防範過期錫膏或受潮晶片流入焊接爐，引發不可逆的內部空銲脫落災難。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">剛性貫徹 FIFO 先進先出大腦鐵律，全料件具備完整條碼鏈條，實現 100% 逆向追溯防火牆。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-core4m-2" id="kbtn-core4m-2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 2, 0, 'FIFO Control (原物料先進先出防線)', 'First-In, First-Out。限制高價原物料在倉庫與線邊的堆放順序。最先入庫的物料強制最先被消耗上線，封死呆料過期黑洞。')">FIFO Control</div>
                                <div class="kbtn-core4m-2" id="kbtn-core4m-2-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 2, 1, 'MSD Handling (溫濕度敏感元件暴露壽命)', 'Moisture Sensitive Devices。針對容易吸附空氣水分的核心晶片，一旦真空包裝拆封，必須在規定小時內貼片過爐，嚴防爆米花空銲。')">MSD Exposure</div>
                                <div class="kbtn-core4m-2" id="kbtn-core4m-2-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 2, 2, 'Traceability Matrix (原物料 Lot 號追溯鏈條)', '利用二維條碼強行將單機實物與元件供應商的出廠 Lot 號綁定。當發生惡性材料缺陷時，可毫秒級鎖定全域高風險危險品。')">Trace Matrix</div>
                                <div class="kbtn-core4m-2" id="kbtn-core4m-2-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 2, 3, 'Kitting Line-Side Box (線邊備料按單發料盒)', '嚴禁DL私自在倉庫抓取散料。必須由倉儲物流部按照生產專案 BOM 排程，精確點數配比打包送抵線邊，杜絕錯混料。')">Kitting Box</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-core4m-2"><b>全稱：</b>FIFO Control (原物料先進先出防線)</div>
                                <div id="ktxt-desc-core4m-2" style="margin-top:4px; color:#475569;"><b>意思：</b>First-In, First-Out。限制高價原物料在倉庫與線邊的堆放順序。最先入庫的物料強制最先被消耗上線，封死呆料過期黑洞。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── Method Panel ─── -->
                    <div id="tpm-main-panel-core4m-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將研發端的 PRD 設計藍圖，現地轉化為圖文並茂、具備剛性螺絲扭力與壓付行程限制的作業指導書。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">為操作員鎖定唯一的實體總裝工藝基準，防範因個人手法差異導致的結構變形與氣密失效。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">指導書常駐工位前方，DL 100% 依規執行，嚴防研發與工廠端在方法學上不對位咬合。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-core4m-3" id="kbtn-core4m-3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 3, 0, 'SOP Standard (標準作業程序書指導指南)', '大流水線開線的剛性法律。用高清晰拆解圖面與剛性指示，剛性限制操作工的手法與卡扣扣合極限秒數。')">SOP Standard</div>
                                <div class="kbtn-core4m-3" id="kbtn-core4m-3-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 3, 1, 'Process Flow Routing (工藝製程指導路由圖)', '定義半成品在車間各大站別間流轉的剛性路由。禁止跨站、跳站測試，用資料庫網頁鎖死產品製程邏輯。')">Process Flow</div>
                                <div class="kbtn-core4m-3" id="kbtn-core4m-3-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 3, 2, 'Torque Lock Control (智慧型電動螺絲起子扭力管制)', '總裝關鍵組裝站（如電池、屏幕固持）使用的電批。其扭力波形必須動態回傳伺服器，不合規者當場鎖死。')">Torque Lock</div>
                                <div class="kbtn-core4m-3" id="kbtn-core4m-3-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('core4m', 3, 3, 'DOE Parameter Validation (新工藝參數驗證實驗)', 'Design of Experiments。當產線良率低迷需要微調（如點膠氣壓、爐溫波形）時發動的科學實驗，用數據鎖定最優解。')">DOE Project</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-core4m-3"><b>全稱：</b>SOP Standard (標準作業程序書指導指南)</div>
                                <div id="ktxt-desc-core4m-3" style="margin-top:4px; color:#475569;"><b>意思：</b>大流水線開線的剛性法律。用高清晰拆解圖面與剛性指示，剛性限制操作工的手法與卡扣扣合極限秒數。</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 3: 4M1E 環境與品質特徵 (Scope: quality)
            // ==========================================
            {
                title: "3. 4M1E 環境與品質特徵 (車間防禦完全體)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-quality-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('quality', 0, 4)">Environment (環境管制)</div>
                        <div id="tpm-main-btn-quality-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('quality', 1, 4)">SOP (作業程序書)</div>
                        <div id="tpm-main-btn-quality-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('quality', 2, 4)">OBA (開箱審查)</div>
                        <div id="tpm-main-btn-quality-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('quality', 3, 4)">ORT (持續信賴性)</div>
                    </div>

                    <!-- ─── Environment Panel ─── -->
                    <div id="tpm-main-panel-quality-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">嚴格管制無塵車間的微粒數量、靜電防護接地（ESD）與環境恆溫恆濕參數。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">阻絕空氣微塵污染光學鏡頭，並徹底封死微觀靜電高壓擊穿內部敏感 IC 晶片的神祕盲區。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">線體潔淨指標、靜電點檢全量綠燈，設備生還環境完美，扼殺肉眼不可見的神祕暗病缺陷。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-quality-0" id="kbtn-quality-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 0, 0, 'ESD Protection (靜電防護安全防線網格)', '車間剛性規章。員工必須穿戴靜電衣、靜電手環，產線桌面配置防靜電綠皮，嚴防瞬間上千伏特高壓擊穿晶片微觀電路。')">ESD Protect</div>
                                <div class="kbtn-quality-0" id="kbtn-quality-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 0, 1, 'Clean Room Class (無塵潔淨度車間等級防禦)', '針對相機鏡頭與顯示總成工位設定的 Class 100 淨化標準。限制每立方英尺空氣中的微米級微粒數量，嚴防塵埃入鏡。')">Clean Room</div>
                                <div class="kbtn-quality-0" id="kbtn-quality-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 0, 2, 'Humidity and Temp Control (恆溫恆濕剛性管制指標)', '車間大環境與線邊錫膏、膠材儲存點的物理管制。濕度過高引發氣孔，濕度低引發靜電暴走，必須24小時動態控管。')">Humid Control</div>
                                <div class="kbtn-quality-0" id="kbtn-quality-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 0, 3, 'Particle Counter (空氣微粒感測監控儀)', '常駐於高精貼裝測站上方的即時監測儀。一旦濾網老化引起落塵數超標，會自動阻斷貼片程式，絕不妥協。')">Particle Counter</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-quality-0"><b>全稱：</b>ESD Protection (靜電防護安全防線網格)</div>
                                <div id="ktxt-desc-quality-0" style="margin-top:4px; color:#475569;"><b>意思：</b>車間剛性規章。員工必須穿戴靜電衣、靜電手環，產線桌面配置防靜電綠皮，嚴防瞬間上千伏特高壓擊穿晶片微觀電路。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── SOP Panel ─── -->
                    <div id="tpm-main-panel-quality-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Standard Operating Procedure。將複雜工藝全面圖像化、硬核規範操作員下壓行程與扭力的規章聖經。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">鎖定唯一的現地量產製造基準，防止因為人工隨意組裝引發累積公差大撞車。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">100% 常駐操作工視線前方，實現製程能力高度受控，徹底消滅人為手法參差不齊。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-quality-1" id="kbtn-quality-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 1, 0, 'Visual Instruction Guide (圖像化生產防呆指南)', '拒絕枯燥文字。總裝線工位指導書必須採用真機微觀拆解彩色照片，標明箭頭與防呆扣合行程，防止工人錯漏。')">Visual Guide</div>
                                <div class="kbtn-quality-1" id="kbtn-quality-1-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 1, 1, 'Revision Document Control (程序書版本剛性變更控制)', '當涉及 ECO 變更時，IE 製造部必須在 24 小時內強行將舊版紙質 SOP 撕下銷毀，全線換裝新版，扼殺混料死鎖。')">Revision Ctrl</div>
                                <div class="kbtn-quality-1" id="kbtn-quality-1-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 1, 2, 'E-SOP Board System (無紙化電子工位看板)', '高階智造產線架設的電子螢幕系統。由中央數據大腦統一派發變更指令，杜絕人工派發紙張引起的時間差錯漏。')">E-SOP System</div>
                                <div class="kbtn-quality-1" id="kbtn-quality-1-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 1, 3, 'Compliance Process Audit ( DL 現地合規性清查)', '由品質稽核（IPQC）每天不定時發動的巡檢。強行比對 DL 實際總裝動作與 SOP 標準規章是否咬合，杜絕私自改動。')">Process Audit</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-quality-1"><b>全稱：</b>Visual Instruction Guide (圖像化生產防呆指南)</div>
                                <div id="ktxt-desc-quality-1" style="margin-top:4px; color:#475569;"><b>意思：</b>拒絕枯燥文字。總裝線工位指導書必須採用真機微觀拆解彩色照片，標明箭頭與防呆扣合行程，防止工人錯漏。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── OBA Panel ─── -->
                    <div id="tpm-main-panel-quality-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Open Box Audit。產品完成總裝與彩盒包裝後、入庫發貨前，由獨立品保發動的開箱抽樣嚴審。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">模擬最終消費者開箱的第一視覺，嚴防配件漏附、條碼歪斜或機身微觀刮傷流入發貨通路。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">一旦 OBA 發現缺陷超標，品保擁有一鍵全量鎖庫權限，剛性阻斷劣質成品流入實體市場。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-quality-2" id="kbtn-quality-2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 2, 0, 'Box Audit Standard (發貨前打包大開箱嚴審)', '出廠前的最高防務。不屬於在線品保、完全獨立行使判退權力，以最終用戶挑剔視角排查整機美學特徵。')">Box Audit</div>
                                <div class="kbtn-quality-2" id="kbtn-quality-2-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 2, 1, 'Defect Classification (品質瑕疵極限判退分類)', '將開箱缺失硬核拆分為：致命缺陷 CR、重大缺失 MA、輕微視覺瑕疵 MI。任何一項跨越臨界值則全量鎖庫。')">Defect Class</div>
                                <div class="kbtn-quality-2" id="kbtn-quality-2-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 2, 2, 'Quality Gatekeeping (低級外觀缺陷攔截防線)', '工廠發貨大門前的鐵閘。其核心使命在於防堵前段總裝漏附說明書、IMEI 標籤貼歪等低級失誤逃逸出廠。')">Gatekeeping</div>
                                <div class="kbtn-quality-2" id="kbtn-quality-2-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 2, 3, 'Lot Rejection Lockdown (不良超標全庫存剛性鎖庫)', '一旦 OBA 發現相同類別缺失超標，品保一鍵扣動系統警報，將在庫數千台成品彩盒就地剛性封鎖、發動大返工。')">Lot Rejection</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-quality-2"><b>全稱：</b>Box Audit Standard (發貨前打包大開箱嚴審)</div>
                                <div id="ktxt-desc-quality-2" style="margin-top:4px; color:#475569;"><b>意思：</b>出廠前的最高防務。不屬於在線品保、完全獨立行使判退權力，以最終用戶挑剔視角排查整機美學特徵。</div>
                            </div>
                        </div>
                    </div>

                    <!-- ─── ORT Panel ─── -->
                    <div id="tpm-main-panel-quality-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Ongoing Reliability Test。大量產 MP 階段，每天定時從入庫成品中盲抽隨機樣本送回實驗室進行信賴性摧毀。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">動態監控工廠大規模複製時的隱形品質波動，防止上游材料微觀變異引發大批量潛伏性客退死鎖。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">高溫高濕、物理疲勞測試週期性綠燈，鎖死大量複製期的品質神經防火牆。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-quality-3" id="kbtn-quality-3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 3, 0, 'Ongoing Reliability Sampling (大量產成品信賴性週期盲抽)', '大批量複製期的深層監視器。每天定時從入庫成品大盤中隨機抽取盲樣，重新送回地獄實驗室物理摧毀。')">ORT Sample</div>
                                <div class="kbtn-quality-3" id="kbtn-quality-3-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 3, 1, 'Thermal Cycling Stress (環境加速疲勞循環高低溫大考)', '將抽檢良品送入恆溫濕熱測試腔，進行高低溫交變高壓折磨，嚴防大量產期元器件引腳材料疲勞劣化。')">Thermal Cycle</div>
                                <div class="kbtn-quality-3" id="kbtn-quality-3-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 3, 2, 'Transportation Vibration Simulation (模擬遠途海空物流物理震動試驗)', '將整箱成品置於震動台，模擬跨國運輸惡劣颠簸。考驗內置電池固持鋼片與軟板卡扣在受力時是否鬆脫生還。')">Vibration Test</div>
                                <div class="kbtn-quality-3" id="kbtn-quality-3-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('quality', 3, 3, 'Salt Spray Corrosion Test (鹽霧抗腐蝕耐候性指標壓測)', '針對金屬中框陽極或 PVD 鍍層實施的週期性強酸鹽霧噴淋。確保產品流向凡間高濕熱、高鹽分沿海地區時不剝落。')">Salt Spray</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-quality-3"><b>全稱：</b>Ongoing Reliability Sampling (大量產成品信賴性週期盲抽)</div>
                                <div id="ktxt-desc-quality-3" style="margin-top:4px; color:#475569;"><b>意思：</b>大批量複製期的深層監視器。每天定時從入庫成品大盤中隨機抽取盲樣，重新送回地獄實驗室物理摧毀。</div>
                            </div>
                        </div>
                    </div>
                `
            }
        ],
        // ─── 👑 1-3 12 題重裝考題大盤 ───
        examVault: [
            { q: "在工廠地理拓撲中，原物料送抵EMS廠倉庫後，進入的第一道最前端抽檢量測、清查公差的鋼鐵防線是？", o: ["IQC 進料品保車間", "SMT 貼片線爐後 AOI", "OBA 出貨前抽檢"], a: 0 },
            { q: "工廠車間中，將錫膏印刷、高速貼片機與爐後自動光學 AOI 全檢完美串聯一體的高速自動化精密焊接生產線是？", o: ["SMT 生產線", "Assembly 總裝流水線", "Packout 包裝線"], a: 0 },
            { q: "組裝大流水線（Assembly Line）在配置各工位作業秒數、拉速 UPH 與清除淤泥堆料時，最核心的衡量指標是？", o: ["Line Balancing 線平衡率", "PM 預防性維護計畫", "OBA 缺陷標準"], a: 0 },
            { q: "產品完成包裝入庫後、發貨前，由獨立品保模擬最終消費者開箱，嚴查配件缺失與條碼歪斜的審查機制稱為？", o: ["IQC 抽樣加嚴", "OBA (開箱審查)", "ORT 持續信賴性"], a: 1 },
            { q: "4M1E 核心要素中，針對一線流水線操作人員（Man），工廠最依賴何種原地教育機制來固化其手法？", o: ["AVL 認證名冊", "OJT 現地教育訓練", "ECO 工程變更指令"], a: 1 },
            { q: "4M1E 要素中，為了防範點膠機堵嘴、探針老化漏電引發大面積誤判拋料，設備工程師必須定期落實？", o: ["PM 預防性保養計畫", "SOP 重新修訂", "WIP Clearing"], a: 0 },
            { q: "4M1E 要素中，針對物料（Material）控管，線體上為了嚴防錫膏過期、晶片受潮引發空銲，必須剛性貫徹？", o: ["FIFO (先進先出) 鐵律與條碼追溯", " AVL 准入許可", "圖紙全面 Freeze"], a: 0 },
            { q: "4M1E 要素中，用來指導並規範操作員螺絲鎖付扭力、壓付下壓行程與防呆手法圖文並茂的規章聖經是？", o: ["SOP (標準作業程序書)", "PRD 技術需求書", "OBA 開箱判定書"], a: 0 },
            { q: "4M1E 生產要素中，為防止微觀靜電高壓擊穿內部敏感 IC 晶片引發神祕暗病，車間內必須落實管制？", o: ["SMT 爐溫曲線", "ESD 靜電防護接地與環境溫濕度", "Cpk 製程精準度"], a: 1 },
            { q: "開線大量產 MP 階段，每天定時從成品中盲抽隨機機台送入實驗室，發動環境與物理疲勞摧毀的壽命監控大考稱為？", o: ["OQC 成品抽驗", "ORT (持續信賴性測試)", "DFM 設計審查"], a: 1 },
            { q: "如果大流水線工位作業時間不平均，線平衡率低於 85% 防線時，產線體上最直接引發的連鎖災難是？", o: ["訊號完整性提高", "特定瓶頸工位製品（WIP）暴增堵塞，拉速垮台", "UPH 產速暴增"], a: 1 },
            { q: "工廠車間地理佈局規劃（Factory Layout）的核心宗旨是？", o: ["追求高貴華麗外觀", "規劃最短物流動線，嚴防物料搬運發生二次碰撞凹折", "放任製品無限堆料"], a: 1 }
        ]
    }
];

// 👑 雙層隨機亂序引擎
(function() {
    if (!window.codexCourseEngineData || window.codexCourseEngineData.length === 0) return;
    const vault = window.codexCourseEngineData[0].examVault;
    
    for (let i = 0; i < vault.length; i++) {
        let qItem = vault[i];
        let correctText = qItem.o[qItem.a]; 
        for (let s = qItem.o.length - 1; s > 0; s--) {
            const r = Math.floor(Math.random() * (s + 1));
            [qItem.o[s], qItem.o[r]] = [qItem.o[r], qItem.o[s]];
        }
        qItem.a = qItem.o.indexOf(correctText);
    }

    for (let i = vault.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vault[i], vault[j]] = [vault[j], vault[i]];
    }
    
    window.codexCourseEngineData[0].examVault = vault.slice(0, 3);
})();
