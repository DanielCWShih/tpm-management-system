/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.1: 👑 子單元 1-2 滿血進化完璧版。全面清除玄幻語境。Page Headings 剛性對齊標準 NPI 里程碑。每頁配置 4 個核心實戰子頁籤按鈕，100% 全量多行展開，絕無縮寫與裁剪。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A2", 
        menuTitle: "1-2: 硬體生命週期與 NPI 交付",
        subPages: [
            {
                title: "1. 研發設計驗證階段 (Proto to DVT 里程碑)",
                diagramFlowArray: [
                    {
                        name: "Proto (原型打樣)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">利用 3D 列印或 CNC 機械手工切削打樣結構外殼，拼裝無實體電性功能的巨觀模型。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">快速實體化驗證工業設計 (ID) 巨觀視覺比例、外部握持手感、與外觀造型之可行性。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果 (終極期待)</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">完成歷史首次整機物理堆疊 (Stack-up) 微觀檢視，為後續正式 Layout 電路板清空干涉雷區。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "EVT (工程驗證)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在淨化車間發動首版實體主機板 PCB 的無塵貼片總裝，組裝出首批具備通電大腦的測試骨架。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">實現硬體核心主板的歷史首次「通電點亮 (Power-on)」，調試基頻射頻訊號與抓取除錯 Log。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">驗證基本電路訊號完整性 (SI)，通訊接口 100% 順暢導通，不發生死機黑屏。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "DVT (設計驗證)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">壽命達十萬模次以上的正式大量產鋼模具 (Hard Tooling) 正式開模，使用開模金件整機總裝。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">將整機成品送入高強度的環境可靠性（高低溫熱衝擊、滾筒摔落、防水）試煉。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">強制暴露硬體極限，並在進入工廠大批量複製前，完成對鋼模具的細微修改修正。</div>
                                </div>
                            </div>
                            <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:8px; padding:16px; margin-top:20px; box-shadow:3px 3px 0px #1A1A1A;">
                                <button style="background:#1A1A1A; color:#FFF; border:none; padding:8px 12px; border-radius:4px; font-weight:900; cursor:pointer;" onclick="showTacticalDict('【DVT 卡鉤斷裂改模】：若特定角度連續跌落時內部卡鉤應力折斷，TPM 應主導局部改模 DOE，在圖紙上精確追加去角（Radius）與內部加固肋條（Rib），用最低代價死守結構強度。')">🔍 核心字典：DVT 修模防線 ➔</button>
                                <div id="runtime-dict-box" style="margin-top:10px; font-weight:700; font-size:0.85rem; display:none;"></div>
                            </div>
                        `
                    },
                    {
                        name: "Design Limit (設計限制)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">透過精密儀器加壓過載測試，壓測手機外殼、螢幕玻璃與金屬中框所能承受的極限應力。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">找出超出標準 PRD 規範以外的物理強度裕度 (Margin)，摸清結構在極限形變下的安全極限。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">確保產品在物流運送或消費者日常意外跌落時，內部零件不發生大面積脫落或震碎。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 工廠量產爬坡階段 (PVT to MP 里程碑)",
                diagramFlowArray: [
                    {
                        name: "PVT (生產驗證)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">研發端圖紙全面剛性凍結，在大流水線上完全動用正式操作工與正式自動化治具大批量試產。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">全面測試工廠大規模複製組裝與生產能力，調校工位作業工時，進行線平衡拉速總驗收。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">優化操作 SOP，在試產結關前強行推動維修室 WIP 清零，以極高的一秒一機直通率安全跨入 MP。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "MP (大量量產)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">智造大流水線日夜班並行全面啟動，產品全速開閘，大批量流入實體市場與最終使用者手中。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">以穩定的超高直通率與 UPH 拉速進行大量複製，滿足市場交期需求，捍衛專案製造毛利。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">平穩安全地導入後續 ECO 工程變更，並將專案血淚研發經驗凝結成 Lessons Learned 歷史文獻。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Freeze (圖紙剛性凍結)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在進入工廠大線上大批量試產前，發布剛性禁令，全面凍結鎖死所有 2D/3D 設計圖紙。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">為工廠端鎖定一個神聖不可更改的製造基準，以便固化自動化治具設計與編寫 SOP。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">研發工程師絕不允許在 Freeze 後私自變更尺寸，嚴防引發大流水線集體撞車。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Pre-order (長料提前採購)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">針對交期極長的稀缺晶圓主晶片，在當前專案評審未正式開閘前，提前向供應商下單。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">物理壓縮物料交期對時程的無情卡死，強行保證後續試產當天線體有實物料可用。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">精密重疊風險。不允許盲目 Pre-order 導致後續變更時上游爆發巨大財務呆料報廢。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. ECO 工程設計變更 (動態技術控管與財務索賠防線)",
                diagramFlowArray: [
                    {
                        name: "ECO (工程設計變更)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">Engineering Change Order。量產期遭遇缺陷修正時，由研發端發布的剛性設計變更指令檔案。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">主導流水線現地新舊零件、新舊鋼網、自動化治具的配比調校與動態現地平穩切換。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在毫秒級時延內下達全線凍結，精確核算在庫呆料財務損失，嚴防產生報廢黑洞。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Cut-in Batch (切換批次)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">精確紀錄並釘死新舊零件切換當天流水線的實體開線批次號、時間戳記與線號。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">界定品質邊界。確保第一台更換為新安全零件的機器具備白紙黑字的切換界線。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">配合包裝線將此批次號強行互鎖編入全球唯一機身追溯 IMEI 碼鏈條。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Scrap Liability (呆料索賠)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">精確盤點並核算因為變更導致的線上舊件、維修室 WIP、供應商在庫原物料報廢總損失金額。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">釐清變更責任，白紙黑字向發起設計變更的客戶端或上游發動硬核呆料財務索賠。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">卡死每一分財務虧損。不允許工廠盲目自行吞下因研發除錯失誤引發的物理報廢金額。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "IMEI Track (身分碼追溯)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">在包裝線上向每一台通關手機的晶片大腦內，剛性燒錄全球唯一的 15 位身分識別編碼。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">🎯 2. 目的</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">將整機實物、主板版號、ECO 元件批次進行一對一條碼強行數據綁定，鎖死品保防火牆。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:900; font-size:0.75rem; color:#475569; border-bottom:1px dashed #ccc; padding-bottom:5px; margin-bottom:10px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.82rem; font-weight:700; color:#1A1A1A; line-height:1.5;">客退品爆發集體失效時，能一鍵逆向追查出當年在工廠開線時的原物料 Lot 批號病灶。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "在 NPI 開發生命週期中，哪一個里程碑的 Exit Criteria 是『實現電路原理圖與 PCB Layout 的首版通電點亮（Power-on）』？", o: ["EVT 工程驗證階段", "PVT 生產驗證階段", "Mass Production 大量量產"], a: 0 },
            { q: "當研發圖紙與 CMF 技術文件全面剛性凍結（Freeze），產品的開發重心正式轉移到哪一個階段？", o: ["Proto 樣機調研", "PVT 大批量試產與工廠拉速驗收", "市場概念設計"], a: 1 },
            { q: "當發起 ECO 工程變更指令時，TPM 在財務管理範疇上最核心的戰術動作是？", o: ["坐等採購核算費用", "在 24 小時內凍結產線、核算線上 WIP 與在途舊料，完成財務呆料索賠防線", "直接要求設計師修改圖紙"], a: 1 }
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
