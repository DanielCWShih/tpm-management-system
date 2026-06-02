/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-02 V8.00-EXPAND: 👑 子單元 1-2 數據關鍵詞重工業級全量大擴容（封牌版）。
1. 全域 4 分法網格：100% 覆蓋 Page 1~3 所有子面板，關鍵詞數量統一擴充至 4 個，全面套用 repeat(4, 1fr) 拓撲。
2. 剛性焊接：Page 3 Cut-in Batch 面板精確焊接納入「Date Code」實戰卡牌與顯影事件。
3. 結構全量咬合：100% 維持 V7.5 雙層原位切換大腦，全代碼多行全展開，絕不裁剪。
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
            // PAGE 1: 研發設計驗證階段 (Scope: proto)
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
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords (點擊卡片顯影)</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-proto-0" id="kbtn-proto-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 0, 0, 'Soft Tooling (臨時軟模具)', '在專案最前端為了快速驗證少量結構件而開製的鋁模或矽膠模，開模速度快，但壽命極短。')">Soft Tooling</div>
                                <div class="kbtn-proto-0" id="kbtn-proto-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 0, 1, 'CNC Mockup (數控精密打樣件)', '利用高精數控工具機直接切削實體材料，不需開模即可產出高精準度實體樣件，用以初期 ID 比例驗證。')">CNC Mockup</div>
                                <div class="kbtn-proto-0" id="kbtn-proto-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 0, 2, '3D Printing (3D列印快速成型)', '運用積層製造工藝，以樹脂或塑料線材快速固化出複雜的微觀幾何結構，適合極早期的堆疊干涉排查。')">3D Printing</div>
                                <div class="kbtn-proto-0" id="kbtn-proto-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 0, 3, 'Appearance Sample (外觀工藝精裝樣機)', '完全不具備電子通電大腦、但外觀色澤、段差縫隙控制 100% 復刻真實量產機形象的頂級展示手工機。')">Appearance</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-proto-0"><b>全稱：</b>Soft Tooling (臨時軟模具)</div>
                                <div id="ktxt-desc-proto-0" style="margin-top:4px; color:#475569;"><b>意思：</b>在專案最前端為了快速驗證少量結構件而開製的鋁模或矽膠模，開模速度快，但壽命極短。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-proto-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在車間發動首版實體主機板 PCB 的自動化貼片總裝，組裝出首批具備通電大腦的測試骨架。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">實現硬體核心主板的歷史首次「通電點亮 (Power-on)」，調試基頻射頻訊號並抓取初期除錯 Log。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">驗證電路訊號完整性 (SI)，各通訊接口 100% 順暢導通，排除嚴重的硬體短路死機缺陷。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-proto-1" id="kbtn-proto-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 1, 0, 'Power-On Log (開機除錯日誌)', '主板通電歷史首次點亮時，由基頻與微控制器吐出的底層串口 Log。是硬體工程師排查訊號死鎖的第一手線索。')">Power-On Log</div>
                                <div class="kbtn-proto-1" id="kbtn-proto-1-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 1, 1, 'Signal Integrity (訊號完整性測試)', '動用高頻示波器量測高速數據總線（如 DDR, PCIe）的電壓眼圖與時延波動，確保高速訊號在主板走線中不發生畸變。')">SI Test</div>
                                <div class="kbtn-proto-1" id="kbtn-proto-1-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 1, 2, 'Bill of Materials Check (物料清單核對審查)', '清查首批上線貼片的所有電子元件品名、規格、腳位包裝是否與電路原理圖 100% 導通一致，嚴防呆料錯料上線。')">BOM Check</div>
                                <div class="kbtn-proto-1" id="kbtn-proto-1-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 1, 3, 'Hardware Debugging (硬體電路除錯)', '在首版實體主板上動用微型電烙鐵進行飛線、銲接電容電阻，現地搶救設計缺陷以打通基本通訊。')">Debug Fix</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-proto-1"><b>全稱：</b>Power-On Log (開機除錯日誌)</div>
                                <div id="ktxt-desc-proto-1" style="margin-top:4px; color:#475569;"><b>意思：</b>主板通電歷史首次點亮時，由基頻與微控制器吐出的底層串口 Log。是硬體工程師排查訊號死鎖的第一手線索。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-proto-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">正式大量產鋼模具 (Hard Tooling) 正式開模，使用開模結構金屬與塑膠件進行整機總裝。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將整機成品送入高強度的環境可靠性（高低溫熱衝擊、滾筒摔落、防水）實驗室進行物理折磨。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">強制暴露硬體設計極限，並在大批量複製前，完成對正式鋼模具的細微修改與修模優化。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-proto-2" id="kbtn-proto-2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 2, 0, 'Hard Tooling (大量產正式鋼模具)', '壽命達十萬模次以上、採用高級模具鋼打造的正式大量產模具，其射出成型件的尺寸與縮水率代表工廠的剛性極限。')">Hard Tooling</div>
                                <div class="kbtn-proto-2" id="kbtn-proto-2-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 2, 1, 'Reliability Environmental Test (環境可靠性大考)', '將整機送入高溫、高濕、高腐蝕等極端模擬環境，進行週期性折磨，用以強制暴露硬體在消費者手中的潛在壽命病灶。')">Reliability Test</div>
                                <div class="kbtn-proto-2" id="kbtn-proto-2-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 2, 2, 'Free Drop Test (自由跌落應力大考)', '將機器從特定高度與角度連續跌落，檢驗內部結構卡鉤與銲點是否發生斷裂脫落。')">Drop Test</div>
                                <div class="kbtn-proto-2" id="kbtn-proto-2-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 2, 3, 'Thermal Shock Test (冷熱高低溫應力衝擊)', '在極短時間內將整機在 -40°C 與 85°C 之間進行毫秒級來回切換循環，考驗不同原物料間因熱脹冷縮係數不一引發的幾何撕裂。')">Thermal Shock</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-proto-2"><b>全稱：</b>Hard Tooling (大量產正式鋼模具)</div>
                                <div id="ktxt-desc-proto-2" style="margin-top:4px; color:#475569;"><b>意思：</b>壽命達十萬模次以上、採用高級模具鋼打造的正式大量產模具，其射出成型件的尺寸與縮水率代表工廠的剛性極限。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-proto-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">透過精密儀器加壓過載測試，壓測手機外殼、螢幕玻璃與金屬中框所能承受的物理極限應力。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">找出超出標準 PRD 規範以外的物理強度裕度 (Margin)，摸清結構在極限形變下的安全天花板。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">確保產品在極端物流運送或使用者意外跌落時，內部核心晶片零件不發生銲點脫落碎裂。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-proto-3" id="kbtn-proto-3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 3, 0, 'Stress Margin (物理應力裕度)', '指結構零件超出 PRD 剛性標準之外所擁有的物理抗壓能力。裕度越高代表產品應對日常意外形變時的生還率越高。')">Stress Margin</div>
                                <div class="kbtn-proto-3" id="kbtn-proto-3-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 3, 1, 'Overload Stress Test (極限加壓過載測試)', '動用推拉力計與動態萬能材料試驗機，對手機中框或螢幕表面持續施加超越規格書數倍的過載牛頓力，摸清物理崩潰的臨界點。')">Overload Test</div>
                                <div class="kbtn-proto-3" id="kbtn-proto-3-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 3, 2, 'Destructive Limit Test (物理極限破壞性測試)', '不惜把機台生生折斷、砸碎的測試手段。用以精確捕捉材料結構在幾何形變下的斷裂軌跡，為下代專案儲備 Lessons Learned。')">Destructive Test</div>
                                <div class="kbtn-proto-3" id="kbtn-proto-3-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('proto', 3, 3, 'Yield Point (材料屈服極限點)', '固體材料受力發生不可逆形變（塑性變形）的物理臨界指標。TPM 必須確保日常物理受力絕不能跨越此極限。')">Yield Point</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-proto-3"><b>全稱：</b>Stress Margin (物理應力裕度)</div>
                                <div id="ktxt-desc-proto-3" style="margin-top:4px; color:#475569;"><b>意思：</b>指結構零件超出 PRD 剛性標準之外所擁擁有的物理抗壓能力。裕度越高代表產品應對日常意外形變時的生還率越高。</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 2: 工廠量產爬坡階段 (Scope: pvt)
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
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-pvt-0" id="kbtn-pvt-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 0, 0, 'Line Speed Rate (工廠流水線產能拉速)', '大流水線輸送帶的物理運轉速度。PVT 戰術核心在於通過拉速總驗收，將產速由初期調試狀態逼近 MP 大批量產標竿。')">Line Speed</div>
                                <div class="kbtn-pvt-0" id="kbtn-pvt-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 0, 1, 'Standard Operating Procedure Lock (作業指導書剛性鎖定)', '將工位工序、螺絲鎖付扭力與壓付行程完全在 SOP 上寫死，不允許線長與工人私自微調，以固化大量產複製基準。')">SOP Lock</div>
                                <div class="kbtn-pvt-0" id="kbtn-pvt-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 0, 2, 'Operator On-the-Job Training (操作工現地訓練)', '動用正式大量產的大流水線操作工進行現地持證上崗考核，調校工位作業工時，確保沒有任何 DL 因手法生疏拖垮 UPH。')">Operator OJT</div>
                                <div class="kbtn-pvt-0" id="kbtn-pvt-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 0, 3, 'Yield Ramp-up Target (產線爬坡良率達標線)', '試產結關評審會的神聖指標。只有大流水線的一次直通率與維修 WIP 清零速度雙雙跨越剛性達標線，專案才准予發動 MP。')">Yield Target</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-pvt-0"><b>全稱：</b>Line Speed Rate (工廠流水線產能拉速)</div>
                                <div id="ktxt-desc-pvt-0" style="margin-top:4px; color:#475569;"><b>意思：</b>大流水線輸送帶的物理運轉速度。PVT 戰術核心在於通過拉速總驗收，將產速由初期調試狀態逼近 MP 大批量產標竿。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-pvt-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">智能大流水線日夜班並行全面啟動，產品全速開閘，大批量流入全球市場與終端使用者手中。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">以穩定的超高直通良率與 UPH 產速進行大量複製，平攤固定成本，捍衛專案製造毛利。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">平穩安全地導入後續 ECO 工程變更，並將專案開發經驗凝結成 Lessons Learned 歷史文獻。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-pvt-1" id="kbtn-pvt-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 1, 0, 'Mass Duplication (大批量無塵大量複製)', '智造大流水線日夜班全面啟動、進入一秒一機的高速大量智造階段，追求製程能力高度受控與品質高一致性。')">Mass Duplication</div>
                                <div class="kbtn-pvt-1" id="kbtn-pvt-1-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 1, 1, 'Units Per Hour Defense (每小時產速守護)', '量產期的核心大盤。TPM 必須協調 PE/IE 工程師排除任何引發產線掉速的瓶頸工序，守住製造毛利。')">UPH Defense</div>
                                <div class="kbtn-pvt-1" id="kbtn-pvt-1-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 1, 2, 'Lessons Learned (專案血淚經驗歷史文獻)', '將 NPI 開發生命週期中踩過的所有技術圖紙、公差鏈干涉與產線流產缺陷，凝結成標準規範文獻，防堵下個專案撞車。')">Lessons Learned</div>
                                <div class="kbtn-pvt-1" id="kbtn-pvt-1-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 1, 3, 'ECO Running Change (量產期工程設計變更導入)', '在大量產期間不停線的情況下，主導現地新舊零件、新舊鋼網的動態平穩切換批次管理，嚴防爆發報廢黑洞。')">ECO Injection</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-pvt-1"><b>全稱：</b>Mass Duplication (大批量無塵大量複製)</div>
                                <div id="ktxt-desc-pvt-1" style="margin-top:4px; color:#475569;"><b>意思：</b>智造大流水線日夜班全面啟動、進入一秒一機的高速大量智造階段，追求製程能力高度受控與品質高一致性。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-pvt-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在進入工廠大線上大批量試產前，發布剛性禁令，全面凍結鎖死所有 2D/3D 設計圖紙。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">為工廠端鎖定一個神聖不可更改的製造基準，以便固化自動化治具設計與編寫標準 SOP。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">研發工程師絕不允許在 Freeze 後私自變更尺寸，嚴防引發大流水線工具裝配集體撞車。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-pvt-2" id="kbtn-pvt-2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 2, 0, '2D/3D CAD Drawing Lock (設計圖紙剛性鎖死)', '硬體開發中神聖的里程碑。下發剛性禁令禁止研發工程師私自微調任何 3D 數模與 2D 圖面，以便工廠鎖定夾具基礎。')">2D/3D Lock</div>
                                <div class="kbtn-pvt-2" id="kbtn-pvt-2-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 2, 1, 'Change Control Board Approval (變更審查會審批)', '圖紙 Freeze 後任何 BOM 表與參數變更，都必須走跨功能審查委員會審批，簽字背書財務與時程風險。')">CCB Approval</div>
                                <div class="kbtn-pvt-2" id="kbtn-pvt-2-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 2, 2, 'Golden Manufacturing Baseline (製造初始神聖基準)', '經由產線與研發雙重驗證通過的初始黃金參數，是工廠調校自動化測試治具、功能量測探針唯一的依據。')">Golden Base</div>
                                <div class="kbtn-pvt-2" id="kbtn-pvt-2-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 2, 3, 'Drawing Revision Control (圖紙版本剛性控制)', '嚴格防範產線誤用舊版圖紙。新發布版本必須伴隨 ECN 指令在毫秒級時延內全線同步，舊版即刻回收。')">Revision</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-pvt-2"><b>全稱：</b>2D/3D CAD Drawing Lock (設計圖紙剛性鎖死)</div>
                                <div id="ktxt-desc-pvt-2" style="margin-top:4px; color:#475569;"><b>意思：</b>硬體開發中神聖的里程碑。下發剛性禁令禁止研發工程師私自微調任何 3D 數模與 2D 圖面，以便工廠鎖定夾具基礎。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-pvt-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">針對交期極長的稀缺核心主晶片，在當前專案評審未正式開閘前，提前向元件廠商下單。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">物理壓縮物料交期對時程的無情卡死，強行保證後續開線當天線體有實物料可以上線使用。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精密重疊風險，不允許盲目 Pre-order 導致後續方案變更時上游爆發巨大財務呆料報廢。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-pvt-3" id="kbtn-pvt-3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 3, 0, 'Long Lead Time (稀缺物料戰術長交期)', '指特定核心電子元件從正式下 PO 到實物抵達工廠倉庫所需的物流總時程，常長達 12 週以上。')">Long LT</div>
                                <div class="kbtn-pvt-3" id="kbtn-pvt-3-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 3, 1, 'Risk Buy (風險提前採購決策)', '在產品設計尚未 100% 凍結前，為了死守上市時程，採購團隊承擔呆料風險提前向原廠下單長料的商務戰術。')">Risk Buy</div>
                                <div class="kbtn-pvt-3" id="kbtn-pvt-3-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 3, 2, 'BOM Cost Locking (物料成本邊界鎖定)', '透過長料提前議價與排產鎖定，把產品生命週期的 BOM Cost 固定在預算邊界內，打擊價格波動。')">Cost Lock</div>
                                <div class="kbtn-pvt-3" id="kbtn-pvt-3-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('pvt', 3, 3, 'Inventory Liability (庫存財務呆料責任)', '一旦 Pre-order 後研發方案變更、導致長料作廢，對此批在途物料必須釐清是由哪方承擔報廢損失。')">Liability</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-pvt-3"><b>全稱：</b>Long Lead Time (稀缺物料戰術長交期)</div>
                                <div id="ktxt-desc-pvt-3" style="margin-top:4px; color:#475569;"><b>意思：</b>指特定核心電子元件從正式下 PO 到實物抵達工廠倉庫所需的物流總時程，常長達 12 週以上。</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 3: ECO 工程設計變更 (Scope: eco)
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
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Engineering Change Order。量產期遭遇缺陷修正時，由研發端發布的剛性設計變更指令檔案。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導流水線現地新舊零件、自動化治具的配比調校與動態現地平穩切換。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在毫秒級時延內下達全線凍結，精確核算在庫呆料財務損失，嚴防產生報廢黑洞。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-eco-0" id="kbtn-eco-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 0, 0, 'Engineering Change Notice (工程變更通知書)', '伴隨 ECO 擊發的變更指導文本，白紙黑字寫明原因、受影響 BOM、新舊料號對位以及現地執行切換手法。')">ECN Notice</div>
                                <div class="kbtn-eco-0" id="kbtn-eco-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 0, 1, 'WIP Hold Sequence (在線製品毫秒級隔離)', '當重大設計 Bug 被擊發時，TPM 必須一鍵發動在線製品全面暫停流動，強行封鎖受污染批次，防止不良品流入後段。')">WIP Hold</div>
                                <div class="kbtn-eco-0" id="kbtn-eco-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 0, 2, 'Tooling Modify DOE (模具現地改模驗證)', '若變更涉及結構尺寸，必須將大量產鋼模具移下線體進行局部火花機加工或燒焊。TPM 應主導局部改模 DOE 以最低代償守住強度。')">Tooling Mod</div>
                                <div class="kbtn-eco-0" id="kbtn-eco-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 0, 3, 'Netlist Schematic Revision (電路圖網路變更)', '涉及 PCB 內部走線或中樞元器件電性引腳的邏輯變更。必須經過極其嚴密的仿真測試，防止引發主板燒毀。')">Netlist Chg</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-eco-0"><b>全稱：</b>Engineering Change Notice (工程變更通知書)</div>
                                <div id="ktxt-desc-eco-0" style="margin-top:4px; color:#475569;"><b>意思：</b>伴隨 ECO 擊發的變更指導文本，白紙黑字寫明原因、受影響 BOM、新舊料號對位以及現地執行切換手法。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-eco-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精確紀錄並釘死新舊零件切換當天流水線的實體開線批次號、時間戳記與線號。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">界定品質邊界。確保第一台更換為新安全零件的機器具備白紙黑字的切換界線。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">配合包裝線將此批次號強行編入全球唯一機身追溯 IMEI 碼鏈條與售後防火牆。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-eco-1" id="kbtn-eco-1-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 1, 0, 'Date Code (生產日期週別代碼)', '標記在半導體晶片或電子元件表面、代表原廠封裝製造年份與週別的 4 位剛性代碼（如 2615 代表 2026 年第 15 週）。是追查材料微觀變異的核心數據。')">Date Code</div>
                                <div class="kbtn-eco-1" id="kbtn-eco-1-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 1, 1, 'Lot Number (原物料實體批次號)', '隨貨同行、記錄該批物料初始物理與化學特徵的唯一批號。代工廠組裝線必須精確記錄 Lot 號切換分界線，鎖死品質防火牆。')">Lot Number</div>
                                <div class="kbtn-eco-1" id="kbtn-eco-1-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 1, 2, 'Line Configuration (現地變更環境配置)', '指切換新舊零件當天，大流水線上夾具防呆塊、貼片機程式與測試演算法的同步切換狀態，嚴防產線出現混料撞車。')">Line Config</div>
                                <div class="kbtn-eco-1" id="kbtn-eco-1-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 1, 3, 'First Piece Sign-off (黃金首件簽核放行)', '在新變更批次正式 Cut-in 後，線體產出的第一台實體機台必須進行全量功能量測，確認合格簽字後產線才准予拉速。')">First Piece</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-eco-1"><b>全稱：</b>Date Code (生產日期週別代碼)</div>
                                <div id="ktxt-desc-eco-1" style="margin-top:4px; color:#475569;"><b>意思：</b>標記在半導體晶片或電子元件表面、代表原廠封裝製造年份與週別的 4 位剛性代碼（如 2615 代表 2026 年第 15 週）。是追查材料微觀變異的核心數據。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-eco-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精確盤點並核算因為變更導致的線上舊件、維修室 WIP、供應商在庫原物料報廢總損失金額。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">釐清變更責任，白紙黑字向發起設計變更的客戶端或上游發動硬核呆料財務索賠。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">卡死每一分財務虧損。不允許工廠盲目自行吞下因研發除錯失誤引發的物理報廢金額。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-eco-2" id="kbtn-eco-2-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 2, 0, 'Financial Scrap Loss (變更呆料財務損失)', '因變更下發導致線上舊件、重工製品與在途物料無法使用，生生造成的物理報廢總財務黑洞金額。')">Scrap Loss</div>
                                <div class="kbtn-eco-2" id="kbtn-eco-2-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 2, 1, 'WIP Valuation (在線製品資產清算)', '對滯留在工廠流水線、維修室或倉庫內的所有受變更波及的半成品機台，進行精確的實體盤點與工程核算。')">WIP Value</div>
                                <div class="kbtn-eco-2" id="kbtn-eco-2-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 2, 2, 'Vendor Indemnity Claim (責任方索賠追償)', '釐清變更責任歸屬。若因客戶設計失誤引起，代工廠必須出具白紙黑字的數據發動硬核呆料損失索賠。')">Indemnity</div>
                                <div class="kbtn-eco-2" id="kbtn-eco-2-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 2, 3, 'Material Write-off (呆料庫存除帳銷毀)', '完成索賠清算後，受波及的殘次零件必須在財務流程中進行除帳並實施物理銷毀，防止混料二次污染。')">Write-off</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-eco-2"><b>全稱：</b>Financial Scrap Loss (變更呆料財務損失)</div>
                                <div id="ktxt-desc-eco-2" style="margin-top:4px; color:#475569;"><b>意思：</b>因變更下發導致線上舊件、重工製品與在途物料無法使用，生生造成的物理報廢總財務黑洞金額。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-eco-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在包裝線上向每一台通關手機的晶片大腦內，剛性燒錄全球唯一的 15 位身分識別編碼。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將整機實物、主板版號、ECO 元件批次進行一對一條碼強行數據綁定，鎖死品保售後追溯防禦網。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">客退品爆發集體失效時，能一鍵逆向追查出當年在工廠開線時的原物料 Lot 批號病灶。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-eco-3" id="kbtn-eco-3-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 3, 0, 'IMEI Data Binding (身分碼強行數據綁定)', '在包裝線上利用高速條碼槍，將全球唯一的 15 位身分碼與主電路板 MAC 位址、晶片 Lot 號進行一對一條碼強行互鎖。')">IMEI Binding</div>
                                <div class="kbtn-eco-3" id="kbtn-eco-3-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 3, 1, 'Reverse Traceability Firewall (逆向追溯防火牆)', '當市場端爆發失效客退時，售後團隊能憑單一 IMEI 碼，反向調閱出該機器當年在流水線組裝時的所有 4M1E 歷史記錄。')">Reverse Trace</div>
                                <div class="kbtn-eco-3" id="kbtn-eco-3-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 3, 2, 'Lot Traceability (原物料 Lot 號追查機制)', '從 IMEI 逆向解包，精確鎖定故障機器到底是混入了哪一個日期的變異原物料批次，從而在全域倉庫發動精準庫存隔離。')">Lot Trace</div>
                                <div class="kbtn-eco-3" id="kbtn-eco-3-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('eco', 3, 3, 'Field Failure Analysis (客退品集體失效分析)', '收集市場退回的故障機台進行解剖與 X-Ray 探傷，摸清是量產工藝疲勞還是初始 Clearance 設計限制不足。')">Field Failure</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-eco-3"><b>全稱：</b>IMEI Data Binding (身分碼強行數據綁定)</div>
                                <div id="ktxt-desc-eco-3" style="margin-top:4px; color:#475569;"><b>意思：</b>在包裝線上利用高速條碼槍，將全球唯一的 15 位身分碼與主電路板 MAC 位址、晶片 Lot 號進行一對一條碼強行互鎖。</div>
                            </div>
                        </div>
                    </div>
                `
            }
        ],
        // ─── 👑 滿血題庫大盤 ───
        examVault: [
            { q: "在硬體開發生命週期中，哪一個里程碑主要動用 3D 列印或 CNC 手工件驗證工業設計外觀，完全不具備電性功能？", o: ["Proto 原型打樣階段", "EVT 工程驗證階段", "DVT 設計驗證階段"], a: 0 },
            { q: "NPI 開發週期中，哪一個里程碑的核心 Exit Criteria 是『實現首版實體電路主機板的通電點亮 (Power-on)』？", o: ["EVT 工程驗證", "PVT 生產驗證", "MP 大量量產"], a: 0 },
            { q: "在進入 DVT 設計驗證階段時，工廠主要動用何種規格的模具進行結構零件的沖壓或注塑總裝？", o: ["Soft Tooling 臨時軟模", "Hard Tooling 正式大量產鋼模", "3D 列印快打樣模"], a: 1 },
            { q: "為防止大量產階段爆發致命組裝偏位，在跨入工廠大線上大量試產前，全面凍結鎖死 2D/3D 設計圖紙的動作稱為？", o: ["Spec Freeze 圖紙剛性凍結", "BOM Cost 成本凍結", "AVL 准入審查"], a: 0 },
            { q: "針對交期極長的戰術晶片原物料，在專案評審尚未正式開閘前，提前向供應商下單採購的動作是？", o: ["Demand Forecast", "Pre-order 提前長料採購", "Buffer Stock 水位調節"], a: 1 },
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
