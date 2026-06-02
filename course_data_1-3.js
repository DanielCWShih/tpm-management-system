/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-02 V7.95-L13: 👑 子單元 1-3 數據架構剛性對位完璧版。
1. 視覺全域同步：Page 1~3 所有大頁籤、奶油卡片與關鍵詞全面綁定 repeat(4, 1fr) 黃金對位網格。
2. 唯讀封牌外殼：100% 完美相容 750 列的 HTML 播放器外殼，絕不動用或修改外部主控代碼。
3. 題庫滿血擴充：examVault 內建 12 道硬核實戰工廠 4M1E 考題，附帶選項與題目雙層隨機亂序大腦。
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
            // PAGE 1: 工廠地理與產線拓撲
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
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-geo-0"><b>全稱：</b>Factory Layout (車間地理佈局規劃)</div>
                                <div id="ktxt-desc-geo-0" style="margin-top:4px; color:#475569;"><b>意思：</b>工廠各車間與流水線的空間地理規劃，講求最短物流動線，防止物料搬運過程發生二次碰撞凹折。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-geo-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">表面黏著車間。在高度潔淨環境下動用高速貼片機與回流焊爐，將晶片精確電性焊接至 PCB 中板。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打通整機系統的電氣通路，智造出具備極高功能密度的實體電路主機板主體。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">爐後 AOI 光學全檢直通良率跨越 99.2% 鋼鐵底線，消滅空銲、短路與立碑死鎖缺陷。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-geo-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">總裝流水線。主導多工位人工與氣動夾具協作，將主板、螢幕、鏡頭與外殼進行實體物理總裝。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將前段所有的半成品與 3D 設計圖紙，完整落地復刻轉化為可交付市場的實體手機。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">線平衡率剛性達標 85% 以上，杜絕任何特定工位卡死引發的在線製品（WIP）堰塞湖。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-geo-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">包裝發貨線。對總裝與 FCT 測試完好的成品機台，實施貼膜、附帶配件、封入發貨彩盒。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">賦予產品最終出廠的商業包裝，並由 QA 團隊在發貨前進行最後一關的剛性拒收攔截。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">成品防禦完全閉環，附件無缺失、條碼掃描綁定無遺漏，全機以標竿產速安全入庫。</div></div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 2: 4M1E 人機料法剛性管制
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
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-core4m-0"><b>全稱：</b>OJT (現地崗位教育訓練)</div>
                                <div id="ktxt-desc-core4m-0" style="margin-top:4px; color:#475569;"><b>意思：</b>On-the-Job Training。在生產大流水線上由班組長進行的實體工位手把手教學，是用以固化 DL 實體手法與防呆意識的核心機制。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-core4m-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">對自動化點膠機、高速貼片機、功能測試夾具進行定期的精密物理點檢與精度校準。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">強制保持車間設備處於穩定最高狀態，嚴防探針老化磨損、真空吸嘴漏氣引發大面積誤判拋料。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">落實 PM 預防性保養計畫，封死突發跳機隱患，確保量產拉速全開時不因治具故障掉速停線。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-core4m-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在線體上嚴格執行原物料的批次控管、防潮真空標籤核檢與溫濕度敏感元件壽命追蹤。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">防範過期錫膏或受潮晶片流入焊接爐，引發不可逆的內部空銲脫落災難。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">剛性貫徹 FIFO 先進先出大腦鐵律，全料件具備完整條碼鏈條，實現 100% 逆向追溯防火牆。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-core4m-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將研發端的 PRD 設計藍圖，現地轉化為圖文並茂、具備剛性螺絲扭力與壓付行程限制的作業指導書。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">為操作員鎖定唯一的實體總裝工藝基準，防範因個人手法差異導致的結構變形與氣密失效。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">指導書常駐工位前方，DL 100% 依規執行，嚴防研發與工廠端在方法學上不對位咬合。</div></div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 3: 4M1E 環境與品質特徵
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

                    <div id="tpm-main-panel-quality-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">嚴格管制無塵車間的微粒數量、靜電防護接地（ESD）與環境恆溫恆濕參數。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">阻絕空氣微塵污染光學鏡頭，並徹底封死微觀靜電高壓擊穿內部敏感 IC 晶片的神祕盲區。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">線體潔淨指標、靜電點檢全量綠燈，設備生還環境完美，扼殺肉眼不可見的神祕暗病缺陷。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-quality-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Standard Operating Procedure。將複雜工藝全面圖像化、硬核規範操作員下壓行程與扭力的規章聖經。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">鎖定唯一的現地量產製造基準，防止因為人工隨意組裝引發累積公差大撞車。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">100% 常駐操作工視線前方，實現製程能力高度受控，徹底消滅人為手法參差不齊。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-quality-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Open Box Audit。產品完成總裝與彩盒包裝後、入庫發貨前，由獨立品保發動的開箱抽樣嚴審。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">模擬最終消費者開箱的第一視覺，嚴防配件漏附、條碼歪斜或機身微觀刮傷流入發貨通路。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">一旦 OBA 發現缺陷超標，品保擁有一鍵全量鎖庫權限，剛性阻斷劣質成品流入實體市場。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-quality-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Ongoing Reliability Test。大量產 MP 階段，每天定時從入庫成品中盲抽隨機樣本送回實驗室進行信賴性摧毀。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">動態監控工廠大規模複製時的隱形品質波動，防止上游材料微觀變異引發大批量潛伏性客退死鎖。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">高溫高濕、物理疲勞測試週期性綠燈，鎖死大量複製期的品質神經防火牆。</div></div>
                        </div>
                    </div>
                `
            }
        ],
        // ─── 👑 滿血擴充：12 題 1-3 專屬硬核大考題庫 ───
        examVault: [
            { q: "在工廠地理拓撲中，原物料送抵EMS廠倉庫後，進入的第一道最前端抽檢量測、清查公差的鋼鐵防線是？", o: ["IQC 進料品保車間", "SMT 貼片線爐後 AOI", "OBA 出貨前抽檢"], a: 0 },
            { q: "工廠車間中，將錫膏印刷、高速貼片機與爐後自動光學 AOI 全檢完美串聯一體的高速自動化精密焊接生產線是？", o: ["SMT 生產線", "Assembly 總裝流水線", "Packout 包裝線"], a: 0 },
            { q: "組裝大流水線（Assembly Line）在配置各工位作業秒數、拉速 UPH 與清除淤泥堆料時，最核心的衡量指標是？", o: ["Line Balancing 線平衡率", "PM 預防性維護計畫", "OBA 缺陷標準"], a: 0 },
            { q: "產品完成包裝入庫後、發貨前，由獨立品保模擬最終消費者開箱，嚴查附件缺失與條碼歪斜的審查機制稱為？", o: ["IQC 抽樣加嚴", "OBA (開箱審查)", "ORT 持續信賴性"], a: 1 },
            { q: "4M1E 核心要素中，針對一線流水線操作人員（Man），工廠最依賴何種原地教育機制來固化其手法？", o: ["AVLAVL認證名冊", "OJT 現地教育訓練", "ECO 工程變更指令"], a: 1 },
            { q: "4M1E 要素中，為了防範點膠機堵嘴、探針老化漏電引發大面積誤判拋料，設備工程師必須定期落實？", o: ["PM 預防性保養計畫", "SOP 重新修訂", "WIP Clearing"], a: 0 },
            { q: "4M1E 要素中，針對物料（Material）控管，線體上為了嚴防錫膏過期、晶片受潮引發空銲，必須剛性貫徹？", o: ["FIFO (先進先出) 鐵律與條碼追溯", " AVL 准入許可", "圖紙全面 Freeze"], a: 0 },
            { q: "4M1E 要素中，用來指導並規範操作員螺絲鎖付扭力、壓付下壓行程與防呆手法圖文並茂的規章聖經是？", o: ["SOP (標準作業程序書)", "PRD 技術需求書", "OBA 開箱判定書"], a: 0 },
            { q: "4M1E 生產要素中，為防止微觀靜電高壓擊穿內部敏感 IC 晶片引發神祕暗病，車間內必須落實管制？", o: ["SMT 爐溫曲線", "ESD 靜電防護接地與環境溫濕度", "Cpk 製程精準度"], a: 1 },
            { q: "大量產 MP 階段，每天定時從成品中盲抽隨機機台送入實驗室，發動環境與物理疲勞摧毀的壽命監控大考稱為？", o: ["OQC 成品抽驗", "ORT (持續信賴性測試)", "DFM 設計審查"], a: 1 },
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
