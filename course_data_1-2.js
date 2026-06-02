/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-02 V7.95-L12: 👑 子單元 1-2 數據架構剛性對位完璧版。
1. 視覺全域同步：Page 1~3 所有大頁籤、奶油卡片與關鍵詞全面綁定 repeat(4, 1fr) 黃金對位網格。
2. 唯讀封牌外殼：100% 完美相容 750 列的 HTML 播放器外殼，絕不動用或修改外部主控代碼。
3. 題庫滿血擴充：examVault 內建 12 道硬核實戰 NPI 里程碑考題，附帶選項與題目雙層隨機亂序大腦。
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
        courseId: "L1-2", 
        menuTitle: "1-2: 硬體生命週期與 NPI 交付",
        subPages: [
            // ==========================================
            // PAGE 1: 研發設計驗證階段
            // ==========================================
            {
                title: "1. 研發設計驗證階段 (Proto to DVT 里程碑)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-proto-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('proto', 0, 4)">Proto (原型打樣)</div>
                        <div id="tpm-main-btn-proto-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('proto', 1, 4)">EVT (工程驗證)</div>
                        <div id="tpm-main-btn-proto-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('proto', 2, 4)">DVT (設計驗證)</div>
                        <div id="tpm-main-btn-proto-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('proto', 3, 4)">Design Limit (設計限制)</div>
                    </div>

                    <div id="tpm-main-panel-proto-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">利用 3D 列印或 CNC 機械手工切削打樣結構外殼，拼裝無實體電性功能的基礎模型。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">快速實體化驗證工業設計 (ID) 巨觀視覺比例、外部握持手感、與外觀美學之可行性。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">完成歷史首次整機物理堆疊 (Stack-up) 微觀檢視，為後續正式電路板佈線清空干涉雷區。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-proto-0" id="kbtn-proto-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 0, 0, 'Soft Tooling (臨時軟模具)', '在專案最前端為了快速驗證少量結構件而開製的鋁模或矽膠模，開模速度快，但壽命極短。')">Soft Tooling</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="get-title-proto-0"><b>全稱：</b>Soft Tooling (臨時軟模具)</div>
                                <div id="get-desc-proto-0" style="margin-top:4px; color:#475569;"><b>意思：</b>在專案最前端為了快速驗證少量結構件而開製的鋁模或矽膠模，開模速度快，但壽命極短。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-proto-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在車間發動首版實體主機板 PCB 的自動化貼片總裝，組裝出首批具備通電大腦的測試骨架。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">實現硬體核心主板的歷史首次「通電點亮 (Power-on)」，調試基頻射頻訊號並抓取初期除錯 Log。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">驗證電路訊號完整性 (SI)，各通訊接口 100% 順暢導通，排除嚴重的硬體短路死機缺陷。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-proto-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">正式大量產鋼模具 (Hard Tooling) 正式開模，使用開模結構金屬與塑膠件進行整機總裝。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將整機成品送入高強度的環境可靠性（高低溫熱衝擊、滾筒摔落、防水）實驗室進行物理折磨。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">強制暴露硬體設計極限，並在大批量複製前，完成對正式鋼模具的微調優化修改。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-proto-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">透過精密儀器加壓過載測試，壓測手機外殼、螢幕玻璃與金屬中框所能承受的物理極限應力。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">找出超出標準 PRD 規範以外的物理強度裕度 (Margin)，摸清結構在極限形變下的安全天花板。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">確保產品在極端物流運送或使用者意外跌落時，內部核心晶片零件不發生銲點脫落碎裂。</div></div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 2: 工廠量產爬坡階段
            // ==========================================
            {
                title: "2. 工廠量產爬坡階段 (PVT to MP 里程碑)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-pvt-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('pvt', 0, 4)">PVT (生產驗證)</div>
                        <div id="tpm-main-btn-pvt-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('pvt', 1, 4)">MP (大量量產)</div>
                        <div id="tpm-main-btn-pvt-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('pvt', 2, 4)">Freeze (圖紙凍結)</div>
                        <div id="tpm-main-btn-pvt-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('pvt', 3, 4)">Pre-order (提前長料)</div>
                    </div>

                    <div id="tpm-main-panel-pvt-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">研發端圖紙全面凍結，在工廠大流水線上完全動用正式作業員與正式自動化夾具進行大批量試產。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">全面測試工廠大規模複製組裝能力，調校產線平衡率與各工位作業秒數，進行拉速總驗收。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">優化操作程序，在試產結關前推動維修室 WIP 製品大清洗清零，以極高直通率跨入 MP 階段。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-pvt-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">智能大流水線日夜班並行全面啟動，產品全速開閘，大批量流入全球市場與終端使用者手中。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">以穩定的超高直通良率與 UPH 產速進行大量複製，平攤固定成本，捍衛專案製造毛利。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">平穩安全地導入後續 ECO 工程變更，並將專案開發經驗凝結成 Lessons Learned 歷史文獻。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-pvt-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在進入工廠大線上大批量試產前，發布剛性禁令，全面凍結鎖死所有 2D/3D 設計圖紙。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">為工廠端鎖定一個神聖不可更改的製造基準，以便固化自動化治具設計與編寫標準 SOP。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">研發工程師絕不允許在 Freeze 後私自變更尺寸，嚴防引發大流水線工具裝配集體撞車。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-pvt-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">針對交期極長的稀缺核心主晶片，在當前專案評審未正式開閘前，提前向元件廠商下單。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">物理壓縮物料交期對時程的無情卡死，強行保證後續開線當天線體有實物料可用。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精密重疊風險，不允許盲目 Pre-order 導致後續方案變更時上游爆發巨大財務呆料報廢。</div></div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 3: ECO 工程設計變更
            // ==========================================
            {
                title: "3. ECO 工程設計變更 (動態技術控管與財務索賠防線)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-eco-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('eco', 0, 4)">ECO (工程設計變更)</div>
                        <div id="tpm-main-btn-eco-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('eco', 1, 4)">Cut-in Batch (切換批次)</div>
                        <div id="tpm-main-btn-eco-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('eco', 2, 4)">Scrap Liability (呆料索賠)</div>
                        <div id="tpm-main-btn-eco-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('eco', 3, 4)">IMEI Track (身分碼追溯)</div>
                    </div>

                    <div id="tpm-main-panel-eco-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Engineering Change Order。量產期遭遇缺陷修正時，由研發端發布的剛性變更通知指令。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導流水線現地新舊零件、自動化治具的配比調校，實現產線平穩的動態現地切換。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精確核算在庫與在途原物料之財務損失，嚴防上游變更引發工廠端大面積呆料報廢黑洞。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-eco-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精確記錄並釘死新舊零件在流水線實體切換當天的實體生產批次號、時間戳記與線號。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">明確劃分品質責任邊界，確保第一台更換為新安全規格零件的機台具備清晰可查的歷史憑證。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">配合包裝產線將此變更批次號強行編入全球唯一機身識別碼資料庫。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-eco-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">全面盤點並清算因為變更引發的線上舊件、維修室 WIP 與在途原物料報廢總金額。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">釐清設計缺陷責任，白紙黑字向發起工程變更的客戶 R&D 端發動硬核呆料損失追償。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">不允許工廠盲目自行吞下因客戶研發失誤導致的報廢，死守製造毛利防線。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-eco-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在包裝線上向每台通關出廠的成品機台晶片內，剛性燒錄全球唯一的 15 位身分識別編碼。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將成品實物、PCB中板版號與 ECO 變更批次進行數據綁定，鎖死售後品保追溯防護網。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">當市場爆發集體失效災難時，能一鍵精確逆向追查出當年在工廠生產時的原物料不良批號。</div></div>
                        </div>
                    </div>
                `
            }
        ],
        // ─── 👑 滿血擴充：12 題 1-2 專屬硬核大考題庫 ───
        examVault: [
            { q: "在硬體開發生命週期中，哪一個里程碑主要動用 3D 列印或 CNC 手工件驗證工業設計外觀，完全不具備電性大腦功能？", o: ["Proto 原型打樣階段", "EVT 工程驗證階段", "DVT 設計驗證階段"], a: 0 },
            { q: "NPI 開發週期中，哪一個里程碑的核心 Exit Criteria 是『實現首版實體電路主機板的通電點亮 (Power-on)』？", o: ["EVT 工程驗證", "PVT 生產驗證", "MP 大量量產"], a: 0 },
            { q: "在進入 DVT 設計驗證階段時，工廠主要動用何種規格的模具進行結構零件的沖壓或注塑總裝？", o: ["Soft Tooling 臨時軟模", "Hard Tooling 正式大量產鋼模", "3D 列印快打樣模"], a: 1 },
            { q: "為防止大量產階段爆發致命組裝偏位，在跨入工廠大線上大量試產前，全面凍結鎖死 2D/3D 設計圖紙的動作稱為？", o: ["Spec Freeze 圖紙剛性凍結", "BOM Cost 成本凍結", "AVL AVL准入審查"], a: 0 },
            { q: "針對交期極長的戰術晶片原物料，在專案評審尚未正式開閘前，提早向供應商下單採購的動作是？", o: ["Demand Forecast", "Pre-order 提前長料採購", "Buffer Stock 水位調節"], a: 1 },
            { q: "在 PVT 試產結關評審前夕，TPM 強制要求製造廠維修室進行何種動作，以防工廠囤積呆料、隱瞞不良良率？", o: ["WIP Clearing 在線製品清洗清零", "UPH 產速拉高", "SOP 重組優化"], a: 0 },
            { q: "產品在大量產 MP 階段遭遇缺陷需要修正時，由研發端發布的剛性工程變更指令檔案簡稱為？", o: ["PRD 規格需求書", "DFM 審查意見", "ECO 工程設計變更"], a: 2 },
            { q: "當發起 ECO 指令時，新舊零件在代工廠流水線上進行物理切換的當天，必須釘死什麼以利品質責任界定？", o: ["Cut-in Batch 切換批次號", "Cycle Time 作業工時", "AQL 檢驗計畫"], a: 0 },
            { q: "因客戶研發失誤引發設計變更，導致工廠產生巨大在途舊料損耗時，TPM 應發動何種機制向客戶端索賠以捍衛毛利？", o: ["Scrap Liability 呆料索賠防線", "Dual Sourcing 採購調整", "ECO 設計重新凍結"], a: 0 },
            { q: "在手機包裝線上，向通關成品機台的大腦晶片內，剛性燒錄全球唯一的 15 位身分識別編碼是？", o: ["BOM 碼", "IMEI 碼", "SOP 碼"], a: 1 },
            { q: "設計限制（Design Limit）階段透過精密儀器進行嚴重加壓過載壓測，其核心戰術目的是？", o: ["單純破壞產品外殼", "找出超出標準 PRD 規範以外的物理強度裕度 (Margin)", "迎合極致超薄美學"], a: 1 },
            { q: "硬體生命週期跨入 MP 階段後，智能大流水線日夜班並行啟動，此時最關鍵的核心戰術指標是？", o: ["追求全新設計變更", "維持穩定的超高直通良率與 UPH 產速", "頻繁修改 SOP 書"], a: 1 }
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
