/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-04 V8.01-FIXED: 👑 LEVEL 3 首發單元 3-1 語法剛性修復版。
1. 修正致命缺陷：全面排查並修復第 125 行字串字體斷行引起的 SyntaxError，確保瀏覽器 100% 編譯通過。
2. 結構完璧歸位：維持最穩健之 1-1 雙層原位切換大腦。
========================================================================
*/

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
        courseId: "L3-1", 
        menuTitle: "3-1: SYSTEM TPM 天職與 TechOps 核心",
        subPages: [
            {
                title: "1. 單元總覽 (LEVEL 3 系統級大腦戰術全景圖)",
                text: `
                    <div style="width:100%; border:2px solid #1A1A1A; border-radius:8px; overflow:hidden; box-shadow:3px 3px 0px #1A1A1A; background:#FFF; margin-bottom:15px;">
                        <img src="beginner_codex_assets/overview_3-1.png" alt="3-1單元全景圖" style="width:100%; height:auto; display:block;" onerror="this.src='https://placehold.co/1200x220/1A1A1A/FFFFFF?text=LEVEL+3+SYSTEM+TPM+思维逻辑+Process+Map+Overview'">
                    </div>
                    <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:16px; box-shadow:2px 2px 0px #1A1A1A; font-size:0.88rem; font-weight:700; line-height:1.6; color:#1A1A1A;">
                        📌 <strong>系統大腦指引：</strong>歡迎跨入高階戰術領域。SYSTEM TPM 的終極核心思考邏輯，是跨越純技術與純管理的「系統級工程解包大腦」。在 Page 2 我們將率先解鎖 TPM 的四大核心「天職」；並在 Page 3 傳授重工業級產線除錯與技術防禦的「TechOps Playbook」實戰劇本。請點擊底部頁碼前進至 Page 2。
                    </div>
                `
            },
            {
                title: "2. SYSTEM TPM 天職 (跨維度技術掌控與高頻賽局主導)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-duty-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('duty', 0, 4)">圖紙公差代償</div>
                        <div id="tpm-main-btn-duty-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('duty', 1, 4)">良率攻堅攻守</div>
                        <div id="tpm-main-btn-duty-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('duty', 2, 4)">供應鏈產能調度</div>
                        <div id="tpm-main-btn-duty-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('duty', 3, 4)">跨職能技術主導</div>
                    </div>

                    <div id="tpm-main-panel-duty-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">審查品牌端發布的 2D/3D 原始設計圖紙，進行微觀公差鏈 analysis，主導 DFM 落地。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在鋼模具開模前，剛性攔截所有脫離工廠 Cpk 加工極限的幻想設計，清空重合干涉雷區。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">確保實體外殼、螢幕總成總裝時，微米級的 GAP 段差縫隙一次對位合規，不發生組裝短路。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-duty-0" id="kbtn-duty-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('duty', 0, 0, 'Worst-Case Tolerance (最壞狀況公差鏈模擬)', '假設所有零件在加工時均落入負公差極限，計算疊加後的幾何位移。用以剛性把關物理安全 Clearance。')">Worst-Case</div>
                                <div class="kbtn-duty-0" id="kbtn-duty-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('duty', 0, 1, 'Statistical RSS (統計學均方根公差法)', '利用機率分佈模擬累積公差，避免因 Worst-Case 過於保守而生生放大設計間距、犧牲產品美學。')">RSS Method</div>
                                <div class="kbtn-duty-0" id="kbtn-duty-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('duty', 0, 2, 'Cpk Capability (製程能力受控底線)', '衡量代工廠機台的切削尺寸集中度。Cpk 低於 1.33 代表機台能力不足，圖紙公差必須剛性放寬以防產線集體判退。')">Cpk Index</div>
                                <div class="kbtn-duty-0" id="kbtn-duty-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('duty', 0, 3, 'Geometric Interference (物理幾何空間干涉)', '指在 3D 工程模擬中零件空間發生不合理重疊。TPM 必須主導結構 ME 在 Freeze 前將干涉機率 100% 清零。')">Interference</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:4px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-duty-0"><b>全稱：</b>Worst-Case Tolerance (最壞狀況公差鏈模擬)</div>
                                <div id="ktxt-desc-duty-0" style="margin-top:4px; color:#475569;"><b>意思：</b>假設所有零件在加工時均落入負公差極限，計算疊加後的幾何位移。用以剛性把關物理安全 Clearance。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-duty-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">動態死守大流水線的首檢直通率（FPY），發動跨部門戰術會議進行 Top Defect 缺陷大攻堅。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">撕開最終入庫良率的偽善外衣，硬核阻絕帶有重工熱應力手工硬傷的主板流出發貨大門。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">一次直通率跨越 95% 鋼鐵底線，將重工室的製品積壓（WIP）徹底清洗拉乾，死守專案毛利。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-duty-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">審查元件供應商的物料交期（Lead Time），動態追蹤核心晶圓長料進料進度。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">解除因天災、壟斷或原廠漏檢引起的斷料死鎖，建立蓄水池以應對流水線上的拋料損耗。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">專案隨時維持 Second Source 熱備援狀態，物料一次直通，開線現場 100% 無料料編位風險。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-duty-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">作為專案的「核心技術中樞大腦」，在品牌 R&D、元件廠與 EMS 代工線體間行使指揮權。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打破單一職能盲人摸象。當遭遇突發流產停線時，秒速界定責任，擊發 ECO 變更與財務索賠。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">卡死每一分利潤虧損，將 Lessons Learned 歷史經驗凝結成標準法律，主導高頻開發大盤。</div></div>
                        </div>
                    </div>
                `
            },
            {
                title: "3. TechOps Playbook (重工業級製程落地與除錯劇本)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-playbook-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('playbook', 0, 4)">貼片爐後除錯</div>
                        <div id="tpm-main-btn-playbook-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('playbook', 1, 4)">總裝線平衡拉速</div>
                        <div id="tpm-main-btn-playbook-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('playbook', 2, 4)">氣密失效 DOE</div>
                        <div id="tpm-main-btn-playbook-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.tpmSwitchMainTab('playbook', 3, 4)">售後逆向追溯</div>
                    </div>

                    <div id="tpm-main-panel-playbook-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">對 SMT 車間回流焊後的 AOI 報警進行大數據追蹤，精算吸嘴拋料率與元件立碑概率。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">阻絕空銲短路。將機台誤判率（False Alarm）壓制在 1% 以下，防止重工室暴走摧毀 PCB 銅箔。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">優化爐溫溫區 Profile，SMT 一次直通率剛性跨越 99.2% 鋼鐵防線，實現板級零暗病。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-playbook-0" id="kbtn-playbook-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('playbook', 0, 0, 'False Alarm Rate (自動化光學檢測治具誤判率)', '因探針老化、落塵或纜線漏電，將完全健康的主板誤判為不良。若高於 1% 會引發修模重工暴走。')">False Alarm</div>
                                <div class="kbtn-playbook-0" id="kbtn-playbook-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('playbook', 0, 1, 'Top Defect (製程終端最核心缺陷病灶)', '排產報告中引發流產、拋料損耗排名前三的致命元兇。TPM 必須現地發動跨功能小組（CFT）圍剿擊落。')">Top Defect</div>
                                <div class="kbtn-playbook-0" id="kbtn-playbook-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('playbook', 0, 2, 'Profile Tuning (回流焊爐溫曲線現地調校)', '針對爐後少錫、立碑，調整 10-12 個溫區的慢升與熔融斜率，用熱敏物理規律鎖死銲接良率。')">Profile Tuning</div>
                                <div class="kbtn-playbook-0" id="kbtn-playbook-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('playbook', 0, 3, 'Component Scrap (高頻吸嘴拋料報廢損耗)', '貼片機吸嘴真空度不足或供料器震動，導致晶片被生生拋入廢料盒。拋料率超過 0.3% 必須剛性停線。')">Comp Scrap</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-playbook-0"><b>全稱：</b>False Alarm Rate (自動化光學檢測治具誤判率)</div>
                                <div id="ktxt-desc-playbook-0" style="margin-top:4px; color:#475569;"><b>意思：</b>因探針老化、落塵或纜線漏電，將完全健康的主板誤判為不良。若高於 1% 會引發修模重工暴走。</div>
                            </div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-playbook-1" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">編制組裝大流水線 SOP，精密微調單工位節拍工時（Tact Time），發動 Line Down 停線標準。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">消除瓶頸工位，將流水線平衡率強行死守在 85% 以上。平攤直接人工成本，拉升產能 UPH。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">線體流暢無淤泥堆料，當特定工位發生連續 3 台相同缺失時，剛性熔斷停線以阻絕成批報廢。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-playbook-2" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">針對 IPX8 高階防水產品在大流水線上爆發的氣密大撕裂，現地主導正負壓差 DOE 矩陣實驗。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">排除干擾因子。交叉驗證到底是外殼點膠路徑偏位、機構件射出變形，還是防水織物透氣膜破裂。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">用客觀數學模型鎖定最優製程參數（如壓力、保壓秒數），就地固化防呆防火牆。</div></div>
                        </div>
                    </div>

                    <div id="tpm-main-panel-playbook-3" style="display:none; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">當凡間市場端爆發集體失效客退品時，憑單一 15 位 IMEI 身分碼鎖死全域追溯鏈條。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精確逆向調閱該機台當年在無塵車間開線時的 Date Code、原廠 Lot 號、乃至當時線體的溫濕度。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在 24 小時內精確發動倉庫高風險品現地隔離，啟動工程索賠，杜絕損害蔓延。</div></div>
                        </div>
                    </div>
                `
            }
        ],
        examVault: [
            { q: "在鋼模具正式發動開模前，TPM 為了防範多零件拼裝時微觀尺寸負公差累積導致避讓失效，天職動作是主導？", o: ["Worst-Case / RSS 公差鏈數學疊加模擬", "放任工程師私自微調", "坐等量產發生撞車再修改"], a: 0 },
            { q: "當工廠加工機台的尺寸受控集中精準度太差，即其哪項指標低於 1.33 時，TPM 必須要求放寬圖紙公差或升級設備？", o: ["OQC 合格率", "Cpk 製程能力指數", "SOP 版本號"], a: 1 },
            { q: "TPM 職責要求『不斬最終入庫合格率，只斬大流水線首檢直通率』，其硬核防禦的核心指標簡稱為？", o: ["AQL 基準", "FPY 一次直通良率", "BOM 成本"], a: 1 },
            { q: "當專案生命週期跨入特定里程碑、下發設計參數全面鎖死的剛性禁令後，任何變更都必須交由哪一個委員會審批？", o: ["CCB 變更審查委員會", "OBA 抽檢小組", "OJT 教導團"], a: 0 },
            { q: "SMT 車間回流焊爐後，自動光學檢測治具（AOI）若因探針老化或落塵將完全健康的主板誤判為缺陷，此指標稱為？", o: ["False Alarm Rate 誤判率", "Top Defect 缺陷病灶", "Comp Scrap 拋料率"], a: 0 },
            { q: "當大流水線特定測站連續發生 3 台相同 Error Code 缺失時，線體必須剛性啟動何種機制以絕成批報廢？", o: ["WIP 堰塞湖堆料", "Line Down 剛性停線機制", "SOP 無紙化換裝"], a: 1 },
            { q: "針對高階手機在總裝線遭遇惡性氣密大面積失效、無法界定干擾因子時，TPM 應主導發動何種科學實驗矩陣？", o: ["Profile 爐溫微調", "DOE 製程參數驗證實驗", "FIFO 先進先出盤點"], a: 1 },
            { q: "當市場售後端爆發集體惡性失效、需要一鍵逆向精確調閱當年原廠 Lot 號與生產週別時，其唯一的數據鑰匙是？", o: ["BOM 碼", "15位 IMEI 身分識別碼", "OBA 簽核檔案"], a: 1 },
            { q: "4M1E 要素控管中，針對容易吸附空氣水分、一旦拆封受潮過爐會引發微觀爆米花銲裂的晶片元件，稱為？", o: ["MSD 溫濕度敏感元件", "FIFO 先進料件", "AVL 准入組件"], a: 0 },
            { q: "組裝流水線開線前，為了消除最慢瓶頸工位、確保人工手速秒數恆定以拉升 UPH，IE 製造部必須核檢？", o: ["Line Balancing 大流水線工位平衡率", "OQC 出廠憑證", "ORT 持續信賴性"], a: 0 },
            { q: "因客戶研發除錯失誤頻繁下發 ECO 設計變更、生生導致工廠產生大面積線上製品報廢時，TPM 應發動？", o: ["Scrap Liability 呆料財務索賠防線", "放任自行吞下虧損", "修改設備 Cpk"], a: 0 },
            { q: "大量產 MP 階段，每天定時從入庫成品彩盒中盲抽隨機樣本送回地獄實驗室物理摧毀的壽命監控機制簡稱為？", o: ["SPI 檢測", "ORT 持續信賴性測試", "OBA 開箱隨機審查"], a: 1 }
        ]
    }
];

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
