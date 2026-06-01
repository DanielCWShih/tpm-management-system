/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.1: 👑 子單元 1-3 滿血進化完璧版。全面清除玄幻語境。Page Headings 剛性還原為標準手機代工廠通用產線與查線排查架構。每頁配置 4 個核心專業關鍵字，代碼 100% 完整全量展開。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A3", 
        menuTitle: "1-3: 工廠地理與 4M1E 線體通識",
        subPages: [
            {
                title: "1. SMT to FATP 四大通用線體 (貼片車間與整機後段總裝工序)",
                diagramFlowArray: [
                    {
                        name: "SMT (貼片製程車間)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在恆溫無塵車間內，主導裸板 PCB 鋼網自動網印錫膏、高速貼片機晶片精密拍打。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在毫秒級時間內將微米級被動元件與主晶片固定在電路板上，鑄造核心主機板 PCBA。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果 (終極期待)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">確保主板電路導通率 100%，大批量高速貼片製程不發生拋料與原件人為碎裂。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "SPI (錫膏 3D 檢查儀)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">Solder Paste Inspection。架設在網印錫膏機正後方，利用光學天眼掃描錫膏厚度、高度。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在晶片尚未貼下去、尚未過高溫爐前，將漏印、印歪、連錫之瑕疵板現地攔截。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">建立 SMT 品質最省錢的防線。此階段重工只需洗掉錫膏重印，耗損成本幾乎為零。</div>
                                </div>
                            </div>
                            <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; margin-top:20px; box-shadow:3px 3px 0px #1A1A1A;">
                                <button style="background:#1A1A1A; color:#FFF; border:none; padding:8px 12px; border-radius:4px; font-weight:900; cursor:pointer;" onclick="showTacticalDict('【SPI 銲前卡口】：手機大廠統計 70% 的後段虛焊、短路短路本源都在前段錫膏印刷。死守 SPI 攔截精準度是防範 SMT製程暴走的第一鐵律。')">🔍 核心字典：SPI 錫膏檢查防線 ➔</button>
                                <div id="runtime-dict-box" style="margin-top:10px; font-weight:700; font-size:0.85rem; display:none;"></div>
                            </div>
                        `
                    },
                    {
                        name: "Reflow Oven (迴流銲爐)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">主板隨流水線傳送帶緩慢進爐，經受 10 到 12 個加熱溫區、高達 260°C 的高溫洗禮。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">將主板表面的錫膏液化、融化，激發松香化學活性，冷卻後固化凝結完成電路熔焊。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">BGA 內部零氣泡、零空焊、零假焊。定時進爐實測 Profile 爐溫曲線，防止溫區漂移。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "FATP (後段總裝線)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">大流水線整機拼裝。操作員與氣動工具協作，鎖附螺絲、組裝螢幕、進行軟體功能測試與封箱。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">壓縮各站作業 Cycle Time，消滅瓶頸工位，極速拉升每小時產能速率 (UPH)。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">測試治具誤判率掐死在 1% 以下，彩盒磅秤整箱秤重防錯，絕不塞錯配件附件。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 防水與感測器高端高精專用工序 (手機與無人機核心精密站點)",
                diagramFlowArray: [
                    {
                        name: "Leak Test (氣密性防水)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">利用氣密儀向密封手機腔內強行注入微量高壓空氣，精密感測腔內氣壓漏氣波形。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">建立 IP68 行業黃金防水阻絕檢驗防線，不需將實體手機扔進水裡即可排查縫隙。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">防水防水橡膠圈鎖附形變量剛性維持在 25%~40% 黃金壓縮比，防止過度擠壓碎裂。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "IMU Cal (感測器校正)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">將智慧裝置強行綁定在三軸旋轉陀螺儀高精動態治具上，開展精密六面翻轉。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">校正並洗淨加速度計、陀螺儀、羅盤指南針晶圓出廠零偏，將硬體系統動態重置。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">排除升空航向漂移。防範凡間終端使用者在實體環境飛行時爆發失控炸機悲劇。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "AA Process (主動影像對位)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">Active Alignment。在鏡頭點亮點燃狀態下，利用六軸高精機器手臂微調鏡片組與 CMOS 間的微米級相對傾角。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">利用圖像反饋演算法，排除微觀鏡頭多層鏡片組裝累積公差造成的「邊緣模糊、對焦不均」缺陷。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">畫面中央與四周 100% 均勻最清晰。此高精精密站點光源與夾具必須每日定期標定。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Poka-Yoke (產線防呆機制)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在流水線特定工位治具加裝非對稱防插導軌、限位物理卡口、或光電防漏鎖感測探頭。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">防範一線操作工因高頻率拉速或交接班轉廠生理疲勞引發的「排線反插、配件漏塞」低級缺陷。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">實現「愚巧防錯」，讓錯誤的操作工步在實體治具上根本無法扣合扣死，硬體托底直通率。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. 4M1E 現地查線因果排查戰術 (良率海嘯雪崩時的現地排查總綱)",
                diagramFlowArray: [
                    {
                        name: "Man & Machine (人員與設備)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">第一時間衝往現地。清查當班操作工有無遵循 SOP，點檢電動起子鎖附扭力（Torque）日誌。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">排除因「新人未受訓上崗人為硬傷」或「自動化測試針床 ICT 探針變形老化漏電」病灶。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">若突變爆發在白夜班轉廠（Shift Transition），立即調閱金件點檢日誌（Setup Verification Log）。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Material (物料批號追溯)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">一鍵逆向追溯出事機台的進料原始 IQC 報告、供應商原廠 COA 特徵與 Lot Number 批號。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">徹查是否遭遇了上游零件隱性物理形變公差偏離，排查線體有無發生混料二次汙染。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">精準圈定不良料件波及圈，果斷執行在製品 (WIP) 剛性封鎖隔離，嚴防瑕疵流入最終包裝。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Method & Env (工藝與環境)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">核對測試站測試韌體 (FTM Image) 版本，現地點檢作業工位 ESD 靜電手環防護有無漏電。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">排除測試軟體誤判海嘯，死守無塵室溫濕度與 ESD 防線，嚴防晶片晶圓微觀擊穿傷。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">兩小時內精準閉環技術排查因果日誌，排除一切環境破窗變數，拉回綠燈產速。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "FAI (首件檢查防線)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">First Article Inspection。白夜班交接、或線體更換 ECO 零件後的歷史第一台裝置，全面剛性量測。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在大流水線大規模複製開閘前，用單一實物樣品動態檢驗程序、治具、鋼網之對位精準。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">首件數據完全合格，由品保、製程工程師聯合簽署交割日誌，產線准許全面大量拉速。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "在 SMT 貼片製程中，架設在鋼網印刷機正後方、用來在過爐前及時攔截錫膏印偏或刮錫的 3D 量測設備是？", o: ["AOI 自動光學檢測儀", "SPI 錫膏檢查儀", "X-Ray 斷層掃描"], a: 1 },
            { q: "自動化功能測試站治具的誤判率 (False Alarm) 若飆高到 15% 以上，會引發何種製程災難？", o: ["引發大量健康主板被誤判送去手工拆解重工，人為破壞元件，直通率與利潤垮台", "提升產品在市場的定價", "縮短物料交期"], a: 0 },
            { q: "4M1E 現場查線戰術核心矩陣中，不包含以下哪一項？", o: ["Machine 設備治具與扭力校正", "Economic 專案開發經濟財務預算", "Environment 無塵室 ESD 靜電與溫濕度"], a: 1 }
        ]
    }
];

(function() {
    const v = window.codexCourseEngineData[0].examVault;
    for (let i = v.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [v[i], v[j]] = [v[j], v[i]];
    }
    window.codexCourseEngineData[0].examVault = v.slice(0, 3);
})();
