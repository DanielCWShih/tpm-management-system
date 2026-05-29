/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-29 V5.12: 👑 數據層終極進化交割：校正正確時間。將 Section 2 與 Section 3 數據層發動史詩級教育學重組，全數看齊 Section 1 的「會做什麼、核心目標、終極期待」三維矩陣。所有章節節點全面解鎖可點擊互動之「戰術檢查字典」與「工程決策模擬沙盒」。代碼 100% 全量多行展開，絕無縮寫與裁剪。
========================================================================
*/

codexCourseEngineData = [
    {
        courseId: "L1-A1", 
        menuTitle: "單元 1-1: 基礎通識世界觀模型",
        subPages: [
            {
                title: "1. 產品供應鏈定位模型",
                diagramFlowArray: [
                    { 
                        name: "客戶研發端 (Brand R&D)", 
                        highlight: true,
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 客戶會做什麼</div>
                                    <div class="edu-card-body-text">
                                        主導全球市場調研、產品外觀工業設計（ID）與微觀內部結構設計（ME）。
                                        撰寫初代產品規格需求書（PRD），並對外發佈交付神聖的 2D/3D 工程開發圖紙（2D Drawing）。
                                    </div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">
                                        追求無懈可擊的微觀美學突破、極致技術參數（如超薄型、特殊外殼視覺），
                                        用極高難度的工藝拉高市場定價、溢價與品牌防線。
                                    </div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">
                                        期待代工製造廠（EMS）能夠 100% 完美復刻所有複雜結構，
                                        不允許工廠以任何『設備組裝公差疊加溢出』為藉口而輕易去修改原廠外觀。
                                    </div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【PRD 規格防線審查】：必須全面清查 CMF（色彩、材質、工藝）是否具備工廠現有流水線的量產製程能力，在開模前剛性攔截不切實際的幻想規格。')">
                                        <span>🔍 PRD 規格審查</span><span>➔</span>
                                    </button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【公差疊加分析】：在圖紙出爐第一時間，ME團隊必須發動極限疊加模擬，計算零件間的微米級物理干涉，提前鎖死模具與變形雷區。')">
                                        <span>🔍 公差疊加分析</span><span>➔</span>
                                    </button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box"></div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">
                                    🚨 <strong>現場突發修羅場：</strong>客戶 R&D 為了美感，強行要求將內部主板與外殼的 Clearance 安全防護間距由標準 0.3mm 壓縮至極限 0.1mm，你身為代工廠 TPM，此時的第一決斷是？
                                </div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：專案全盤停線崩潰！</strong><br>你選擇直接簽字放行滿足客戶。結果在 PVT 試產拉速時，因零件設備微小公差疊加，主板當場被殼體物理擠壓變形、電路短路集體燒毀，良率直接歸零！模具當場報廢，專案被迫延期兩個月！')">
                                        方案 A：聽從客戶意見直接簽字放行，滿足美學堅持。
                                    </button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：技術拆彈成功，名望大增！</strong><br>你拒絕盲從，啟動跨功能 Trade-off 決策矩陣。帶領 ME 與 EE 調閱數據，向客戶實證 0.1mm 會引發短路海嘯。最終成功說服客戶微調內部隱蔽骨架，既保住 0.3mm 安全防護間距，又完美維持外部美學，如期 Exit 出關！')">
                                        方案 B：啟動跨功能技術仲裁，出示公差公理實證，逼出技術妥協點。
                                    </button>
                                </div>
                                <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "零件廠商 (Vendors)", 
                        highlight: false,
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 廠商會做什麼</div>
                                    <div class="edu-card-body-text">
                                        研發與控制特定元件的晶圓材料技術（如晶片晶圓廠、相機鏡頭模組廠、射頻感測器廠）。
                                        負責向代工廠提供初期驗證樣品（Samples），並在大量生產（MP）時向代工廠輸送零件原料。
                                    </div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">
                                        在晶圓與特種材料技術防線上維持行業領先。
                                        穩定控制零件出廠良率，並確保在專案跨入大量生產時的原料供給產能無虞。
                                    </div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">
                                        期待代工廠提供精確無偏位的料期預測（Forecast），
                                        並在工廠進行進料檢驗（IQC）與工位拼裝時，不因工藝不當或靜電損壞其原件。
                                    </div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【長料期沙漏控管】：精確追蹤 Lead Time 超過 12 週的稀缺晶片。建立物料沙漏水位，一旦長料期發生供應斷線，必須立即發動二線備料（Dual Source）認證防線。')">
                                        <span>🔍 長料期沙漏控管</span><span>➔</span>
                                    </button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【IQC 進料檢驗】：元件進廠時，必須強制對齊供應商的出廠報告（COA），以剛性抽樣抽檢零件物理尺寸與電性公差，嚴防上游瑕疵料汙染流水線。')">
                                        <span>🔍 IQC 進料檢驗標準</span><span>➔</span>
                                    </button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box"></div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">
                                    🚨 <strong>現場突發修羅場：</strong>DVT 開線前 24 小時，原定的日本特種防水膠廠突然通報藥水配方異常，固化時間變長，無法如期交貨，流水線點膠站工位面臨全面停工，你該如何拆彈？
                                </div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：產線開空窗，工廠開罰！</strong><br>你選擇在辦公室等待日本原廠重調配方。結果線體被迫停工待料 5 天，數百名操作工閒置，產線進度嚴重偏離，遭到主管與客戶集體彈劾！')">
                                        方案 A：發出警告郵件，並在線體上死等日本原廠配方重調完畢。
                                    </button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：完美備援，如期開線！</strong><br>你果斷發起跨部門應變，清查 Common Pool 資源，調用國內二線備料供應商的儲備樣品，帶領團隊進行 12 小時極速信賴性點亮驗證，成功頂替缺料，流水線一氣盒成順利過關！')">
                                        方案 B：啟動二線供應商（Dual Source）應變防線，調用樣品進行極速可靠性點亮複審。
                                    </button>
                                </div>
                                <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "代工製造廠 (EMS Factory)", 
                        highlight: false,
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🛠️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">
                                        我們的絕對基地（Foxconn / FIH）。接過客戶 2D/3D 圖紙指令，吞下供應商輸送過來的物料。
                                        在設備公差疊加與拉速上限邊界下，進行硬體實體化的大規模複製組裝。
                                    </div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">
                                        死守直通率（FPY），消滅製程瓶頸。
                                        在 PVT 與 MP 階段極速提升每小時產能速率（UPH），以極低的不良率完成大批量複製，死守代工毛利。
                                    </div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">
                                        期待 TPM 扮演跨功能（XFN）大腦，在試產缺陷、線體治具卡死或動態設計變更（ECO）爆發時，
                                        第一時間找出不良根本原因（Root Cause），主導技術拆彈。
                                    </div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【線平衡率 Line Balance】：評估整條大流水線各個工位工時的平均配比度。線平衡率低於 85% 代表存在嚴重瓶頸工位，會引發產線集體堆料、拉速垮台。')">
                                        <span>🔍 線平衡率平衡指標</span><span>➔</span>
                                    </button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【測試治具誤判率】：針床ICT與功能FCT治具的誤判率（False Alarm）必須剛性鎖死在 1% 以下。過高的誤判會引發大量健康主板被送去重工拆解，摧毀直通率。')">
                                        <span>🔍 治具誤判率防線</span><span>➔</span>
                                    </button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box"></div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">
                                    🚨 <strong>現場突發修羅場：</strong>PVT 結案審查時，工廠主管報告最終入庫良率高達 98.5%！但你翻查後台數據發現直通率（FPY）竟然只有慘烈的 35%，此時你在開線評審中該如何決策？
                                </div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：客退海嘯，專案判死！</strong><br>你看到 98.5% 良率就放行出關。結果產品流入實體市場後，因為大批經歷過手工二次高溫重工修補的手機內傷爆發，開箱即損（DOA）故障率集體炸裂！客戶發動全面退貨清算，代工廠毛利當場歸零！')">
                                        方案 A：良率既然過關，配合工廠主管如期開閘，准許出關大量生產（MP）。
                                    </button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：鐵血攔截，斬斷隱形內傷！</strong><br>你死守剛性鐵律：『不斬良率，只斬直通率！』當場鐵血攔截專案、拒絕出關。勒令製程 ME 團隊徹查線體，抓出鋼網磨損與治具公差偏移，將 FPY拉回 85% 以上才准予放行，徹底消滅客退海嘯！')">
                                        方案 B：一票否決、強行攔截！下令產線停線重調治具，將直通率拉回剛性指標。
                                    </button>
                                </div>
                                <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                            </div>
                        `
                    }
                ],
                text: "在硬體專案管理的世界中，運行著「三方一鏈」的實務實體化鏈條。請點擊上方流程圖方塊，進入互動決策演練。"
            },
            {
                title: "2. NPI 生命週期分期與產業現實",
                subMatrixBranches: [
                    {
                        branchLabel: "📋 正常預設時程 (Conceptual)",
                        diagramFlowArray: [
                            { 
                                name: "Proto 原型機", 
                                highlight: false, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">⚙️ 研發會做什麼</div>
                                            <div class="edu-card-body-text">利用 3D 列印、CNC 或是手工快速打樣製作初始概念外殼。進行最原初的物理堆疊（Stack-up）架構確認，完全不需要開模具。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">快速確認產品的美學外觀比例、握持手感是否符合 PRD 定義，並在第一時間抓出嚴重的內部零件物理硬干涉黑洞。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">期待堆疊架構在微米級公差下安全出關，將干涉機率清零，為後續首版 PCB 電路 Layout 鋪平一條乾淨的通道。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【物理堆疊審查】：在 3D CAD 環境內，強制清查外殼骨架與內部核心物料（如主晶片、大電池、相機）的微米級干涉值，防堵空窗期。')"><span>🔍 Stack-up 堆疊防線</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【快速打樣工藝】：使用軟膠或 CNC 樹脂快速產出實體。用來預演產品實體化後的視覺死角，不花費開模代價。')"><span>🔍 快速打樣驗證</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>Proto 階段進行 3D 巡檢時，發現晶片降壓電感與大容量鋰電池物理安全間距（Clearance）只有 0.05mm，結構工程師稱這只是模型可以先放行，你該如何決斷？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：專案首爐開線當場報廢！</strong><br>你選擇放行。結果到 EVT 階段首爐貼片時，因零件微小物理公差漂移疊加，主板當場被電池外殼物理擠壓、電路應力斷線，主板通電（Power-on）直接黑屏暴斃！專案重創！')">方案 A：聽從結構工程師意見放行，等 EVT 出樣品再說。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：完美防禦，首爐點亮大獲全勝！</strong><br>你果斷按下拦截鈕，發起跨功能對決，強迫 ME 與 EE 將主板Layout挪移拉伸，剛性拉出 0.3mm 的安全間距，徹底封鎖了後續開爐貼片的變形雷區！')">方案 B：鐵血拦截！要求團隊重新優化 Layout，剛性拉出安全間距防線。</button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            },
                            { 
                                name: "EVT 工程驗證", 
                                highlight: true, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">⚙️ 研發會做什麼</div>
                                            <div class="edu-card-body-text">發動首版主機板 PCB 的實體化貼片（SMT）打樣，並將整機所有核心電路、排線、螢幕模組進行歷史首次總裝組裝。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">實現主機板的『首版通電點亮（Power-on）』，深度除錯，驗證訊號流向、電壓軌電性參數與基礎軟硬體相容防線。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">期待除錯接口（Debug Interface）能 100% 順利與工程 PC 建立通訊，打通整機系統大腦，進入底層除錯測試階段。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【Power-on 點亮流程】：硬體試產最神聖的一動。通電量測主電壓軌（Power Rails）有無對地短路，嚴防一插電瞬間燒毀大腦主晶片。')"><span>🔍 首版通電點亮</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【Debug 訊號中樞】：建立 UART、JTAG 等通訊金鑰引腳。允許工程軟體強行注入底層代碼，實時抓取硬體系統核心異常 Log。')"><span>🔍 除錯接口中樞</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>EVT 首次通電開線時，主電壓軌突然爆發大電流短路，EE 堅稱是工廠貼片短路，工廠質疑是 EE 內部層 Layout 短路，兩方瘋狂踢皮球，你該？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：現場停擺，TPM 遭到撤換！</strong><br>你只當傳話筒發群信要兩邊自行開會。結果產線停擺 3 天待料，客戶研發副總親自打電話痛罵，專案進度徹底垮台！')">方案 A：發出會議記錄，請兩邊研發團隊各自回辦公室查代碼與治具。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：鐵證如山，1小時一錘定音！</strong><br>你果斷發動現場 X-Ray 與 Cross-section 切片屍檢！1小時內抓到是工廠熔爐後鋼网磨損導致錫膏溢出短路。工廠當場認賠重新開爐趕工，保住試產時程！')">方案 B：親自帶隊發動現場 X-Ray 與解剖分析（Cross-section），拿實證切片說話。</button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            },
                            { 
                                name: "DVT 設計驗證", 
                                highlight: false, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">⚙️ 研發會做什麼</div>
                                            <div class="edu-card-body-text">正式開啟十萬模次的大批量量產鋼模（Hard Tooling）。整機實現 100% 完整物理外殼拼裝，不再依靠手工打樣零件。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">將整機送入摧毀性的可靠性（Reliability）試煉。強制接受嚴苛摔落、高低溫熱衝擊、以及極限防水氣密拷問。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">利用摧毀性數據強制暴露結構應力剛性缺陷與多重元件的公差疊加，迫使研發進行大量模具細微修正，保住安全下限。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【量產鋼模 Hard Tooling】：開啟百萬級五金與塑膠鋼模。一旦開啟代表機構外觀大局已定，後續任何一次 ECO 改模都需要耗費數十萬代價與數週時程。')"><span>🔍 量產硬模代價</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【信賴性拷問】：包括 1.2米整機滾筒跌落、鹽霧腐蝕與高溫高濕。用以模擬凡間使用者最極端的操作環境，死守開箱品質防線。')"><span>🔍 信賴性可靠性測試</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>DVT 摔落測試中，產品在特定角度跌落時內部結構卡鉤連續應力斷裂。模具已開好，改模重新出鋼模需要高達 50 萬代價，你該？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：客退海嘯引爆財務黑洞！</strong><br>你選擇投機。結果產品運到凡間後因快遞震動，內部卡鉤集體在彩盒內斷裂，開箱即損（DOA）良率炸裂，代工廠被客戶全面清算！')">方案 A：拒絕修改鋼模，要求工廠在 MP 生產線上增加人工用雙面膠帶貼死補強。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：精準拆彈，最低代價完美出關！</strong><br>你發動極速 DOE，實證在模具局部追加銳角去角（Radius）並增設內部補強肋條（Rib）。只花了 3 萬改模費就保住剛性防線，順利通關結案！')">方案 B：主導局部改模 DOE，在圖紙上追加去角與內部加固肋條（Rib）補強。</button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            },
                            { 
                                name: "PVT 生產驗證", 
                                highlight: false, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                            <div class="edu-card-body-text">研發端設計圖紙、CMF 與工藝文件全面剛性凍結（Freeze）。專案指揮棒完全移交製造廠，在正式量產線上開闢大流水線。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">全面考核工廠流水線的大規模複製組裝速率（UPH）。調校每道操作工位的作業工時，進行開線生產拉速與線平衡總驗收。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">剛性验证自動化測試治具（ICT/FCT）的防錯能力與工廠製程能力指數（Cpk），確保複製出來的一萬台設備毫無失真。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【設計凍結 Freeze】：全面沒收研發工程師任意修改 ECO 的權限。所有規格寫死，全力鎖死工廠製程良率，準備開閘。')"><span>🔍 圖紙設計凍結</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【每小時產速 UPH】：Units Per Hour。考核線體在標準作業拉速下，每小時能穩定吞吐總裝多少成品。是 EMS 代工廠賺錢的生命防線。')"><span>🔍 每小時產能拉速</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>PVT 生產拉速當天，外觀功能品檢站（Cosmetic站）因對劃痕刮傷定義不同發生班別衝突、集體塞車堆料（WIP），徹底摧毀了整線 UPH，你應？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：漏檢大爆發，工廠面臨巨額索賠！</strong><br>你催促工人加快手腳。結果大批嚴重刮傷缺陷機流入包裝 पैकिंग 站，客檢當場判定集體退貨，工廠開線成本開出大空窗！')">方案 A：口頭催促品檢員加快人工掃描手腳，避免堆料。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：天天亮眼，塞車瓶頸瞬間瓦解！</strong><br>你主導客戶 ID、QA 與工廠召開現地判定會，1 小時內剛性產出『黃金樣品與限度樣本（Golden & Limit Samples）』銲死在工位上，標準一統，產線瞬間恢復滿血拉速！')">方案 B：現地召集客戶 ID 與品保 QA，剛性產出『限度樣本（Limit Samples）』鎖死在工位上方。</button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            },
                            { 
                                name: "MP 大量量產", 
                                highlight: false, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                            <div class="edu-card-body-text">正式開閘放水，大批量流水線全線日夜並行啟動總裝複製，物料卡車瘋狂進出，進入專案生命週期的結算期。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">在剛性 Exit Criteria（出關指標）的護航下，維持極高直通率（FPY > 95%）與 UPH 產速峰值，壓低代工不良耗損成本。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-card-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">新產品导入（NPI）功德圓滿。TPM 必須將本次戰役的所有缺陷、開線死鎖、模具血淚教訓凝結成文件，傳送回大圖書館大庫。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【出關基準 Exit Criteria】：進入 MP 前必須跨過的剛性門檻。包含 FPY 達標、Cpk > 1.33、法規Compliance 認證完全解鎖。')"><span>🔍 量產出關剛性指標</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【大圖書館經驗傳承】：將專案開發期遭遇的炸機、漏膠、斷線與客退屍檢教訓，轉化為 Lessons Learned 歷史文獻，防堵新人踩同一個雷。')"><span>🔍 歷史血淚經驗教訓</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>MP 大批量出貨一週後，實體凡間市場傳來嚴重回報，特定批次鋰電池因日常充放電發生物理膨脹引發起火客退，此時你的第一移動是？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：全盤召回，代工廠直接破產！</strong><br>因缺少精準追溯碼，你無法證明其他機器的安全性，被迫發動全全球幾萬台產品的全面大召回，財務黑洞全面引爆！')">方案 A：因良率已過，發信推託責任給供應商，坐在辦公室等報告。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：精準隔離，力挽狂瀾挽救公會！</strong><br>你立即調閱 IMEI 碼與 SMT 材料批次（Lot Number）射頻天眼防線，在系統內精準屍檢，2 小時內將受汙染的 500 台封鎖隔離在倉庫內，拯救全盤大局！')">方案 B：立即啟動系統內 IMEI 碼與物料批次（Lot Number）追溯天眼防線，進行精確隔離。</button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            }
                        ],
                        text: "【標準新產品導入流程（NPI）】每個開發里程碑皆有剛性出關審查基準（Exit Criteria），按部就班遞進。請點擊上方流程圖方塊進行互動切換。"
                    }
                ]
            },
            {
                title: "3. 📦 生產線體與組裝測試工序",
                subMatrixBranches: [
                    {
                        branchLabel: "⚙️ 通用四大線體 (Generic)",
                        diagramFlowArray: [
                            { 
                                name: "PCBA 主板製程", 
                                highlight: true, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">⚙️ 工廠會做什麼</div>
                                            <div class="edu-card-body-text">在高度潔淨防靜電的無塵車間進行。通過自動化鋼網網印錫膏、3D 錫膏檢查儀（SPI）量測、高速貼片機精準拍打晶片，最後送入迴流焊熔爐（Reflow Oven）進行化學熔焊。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">將數百個微米級被動元件與大腦 CPU 鎖死在 PCB 裸板上，鑄造出核心主機板 PCBA，死守第一道製程天眼良率。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">過完迴流焊熔爐後電路 100% 完美焊接打通。BGA 焊點內部零氣泡、零虛銲、零浮起，徹底杜絕隱形物理內傷。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【SPI 錫膏厚度檢查】：3D 錫膏厚度檢驗儀。在貼片貼片貼片元件前拦截漏印、印歪、刮錫，是 SMT 最具代價效益的攔截點。')"><span>🔍 SPI 錫膏厚度檢驗</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【Reflow 迴流熔爐】：利用高溫控制曲線（Profile）將錫膏液化、化學熔焊。必須定時架設測溫線（Profiler）進爐實測，防止局部冷銲。')"><span>🔍 迴流焊爐溫 Profile</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>產線突發修羅場：</strong>SMT 過完爐後，AOI 光學天眼集體回報晶片引腳爆發大面積虛焊（Solder Skip），工廠主管堅持是 EE 板材散熱過快，要求停線修改 Layout，你應？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：研發周期失鎖，專案判死！</strong><br>你盲從聽信改圖。結果重過 Layout 耗費兩週，工廠大模具晾在現場，生產排程全盤垮台，被客戶當場降級發配邊疆！')">方案 A：相信工廠，開單拦截專案並退回給 EE 重新修改 Layout 圖紙。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：鐵血實證，2小時滿血復活！</strong><br>你剛性調閱爐溫曲線！發動溫測線實測，鐵證證實是工廠熔爐第三溫區加熱速度漂移。下令工廠 2 小時內重調爐溫，良率瞬間滿血回復 99.5%！')">方案 B：鐵血卡死產線！勒令工廠工程師架設溫測線進爐，實測熔爐真實 Profile 曲線。</button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            },
                            { 
                                name: "Assembly 組裝線", 
                                highlight: false, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">⚙️ 工廠會做什麼</div>
                                            <div class="edu-card-body-text">將 PCBA 送往大流水線（FATP 後段總裝）。由操作工與氣動手臂協作，將外殼骨架、螢幕、大鋰電池、排線進行實體化總裝。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">人機極高契合度協作，以極致優化的 Cycle Time（作業工時）將各個硬體模組拼裝，建立宏觀整機機身，拼搶拉速。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">排線扣合緊密，螺絲鎖附扭力（Torque）高精準對位，不發生內部物理應力擠壓。外觀無縫隙，消滅劃痕瑕疵。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【Cycle Time 瓶頸控制】：單一操作工位完成任務所需耗費的極限秒數。任何一個工位超標，都會引發整條大流水線集體堆料癱瘓。')"><span>🔍 工位作業工時</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【Torque 鎖附防線】：電動螺絲刀的扭力限制設定。過重引發五金滑牙、塑膠爆裂；過輕引發摔落鬆脫，必須每日進行剛性校正。')"><span>🔍 鎖附扭力標準</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>產線突發修羅場：</strong>組裝線工位爆發集體相機排線扣合受損，產線主管大喊排線設計過短太難扣，要求停線改圖重做模具，你第一動是？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：改模成本黑洞爆發！</strong><br>你聽從改圖。結果引發一連串五金骨架變更連鎖黑洞，舊模具直接報廢，專案開發預算當場爆表，被財會部門剛性彈劾！')">方案 A：答應工廠要求，發 ECO 找客戶 ME 改 3D 結構圖紙並重新修改模具。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：Poka-Yoke 零成本完美拆彈！</strong><br>你現地觀戰！發現是工人用大拇指指甲硬塞。你當場在線體加裝一組塑料防錯導向治具（Poka-Yoke），不花一毛改模費，良率原地滿血復活！')">方案 B：下線現地解剖手法！清查操作工是否遵循 SOP，並評估加裝防錯導向治具。 </button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            },
                            { 
                                name: "Test 功能測試站", 
                                highlight: false, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">⚙️ 工廠會做什麼</div>
                                            <div class="edu-card-body-text">整機流入全密封自動化屏蔽測試房（Chamber）與自動化測試治具（ICT/FCT），強行通電強行注入工程測試除錯軟體。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">毫米級動態檢驗整機螢幕色彩、喇叭音頻阻抗、Wifi/藍牙無線天線射頻（RF）與核心傳感器是否完全合格，發起第一道拦截。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">將治具誤判率（False Alarm）控制在剛性標準 1% 以下。一網打盡所有硬體電性缺陷，絕不放過任何一台瑕疵機流入市場。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【Chamber 射頻防線】：完全密封阻絕凡間一切電磁波干擾的鋼化小屏蔽房。唯有在此環境，天線射頻引腳才能測量出最真實的電磁輻射參數。')"><span>🔍 測試屏蔽房</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【False Alarm 誤判指標】：將健康主板誤判為瑕疵料的比例。過高會引發線體後段瘋狂拆解重工，人為踩出物理應力二度內傷。')"><span>🔍 治具誤判率防線</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>產線突發修羅場：</strong>功能測試站突然集體拋出 Wifi 天線射頻失敗（Fail），工廠大喊設計垮台、強烈要求全面停線，你前往現場第一動是？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：被客戶專家數據打臉，顏面掃地！</strong><br>你相信工廠大喊，急忙回報客戶說天線設計垮了。結果被客戶射頻專家調閱金鑰數據當場打臉，證實是工廠治具沒校正，專業度淪為公會笑柄！')">方案 A：相信工廠直覺，立刻在系統發出紅燈停線通報，並要求研發進行技術改圖。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：天眼破案！抓出治具漏電！</strong><br>你物理點亮黃金母板，發現同樣報 Fail！這鐵證證實天線沒壞，而是測試房內部的射頻纜線（RF Cable）磨損漏電。下令更換纜線，線體 10 分鐘滿血拉速！')">方案 B：強制調用 Golden Board（黃金標準母板）送入治具開展對比校正測試。</button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            },
                            { 
                                name: "Packaging 包裝線", 
                                highlight: false, 
                                text: `
                                    <div class="edu-overview-container">
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">⚙️ 工廠會做什麼</div>
                                            <div class="edu-card-body-text">完全通關功能測試的健康裝置流入此處。人工撕去保護膜、塞入彩盒、說明書、充電頭附件，送入克（g）級電子磅秤。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">🎯 核心戰術目標</div>
                                            <div class="edu-card-body-text">建立最後一道外觀品質門戶。向晶圓大腦晶片內剛性燒錄全球唯一的通訊身分證 ── IMEI 碼，並開展整箱秤重防錯。</div>
                                        </div>
                                        <div class="edu-overview-card">
                                            <div class="edu-overview-label">👁️ 團隊終極期待</div>
                                            <div class="edu-card-body-text">100% 零漏塞、零錯附件物料封膠出貨。所有標籤貼紙條碼對位精準，包裝良率穩穩綠燈流入實體市場。</div>
                                        </div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">📖 戰術檢查字典（點擊術語解鎖避坑細節）</div>
                                        <div class="dict-btn-grid">
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【克級防錯磅秤】：精準度達克級的電子秤防線。自動比對出廠標準重量，一旦少放說明書或小傳輸線，當場剛性擊落警報。')"><span>🔍 整箱秤重防錯</span><span>➔</span></button>
                                            <button class="dict-trigger-btn" onclick="showTacticalDict('【IMEI 通訊身分證】：全球行動裝置識別碼。在包裝線最終燒錄，是產品客退早期失效分析（EFFA）追溯材料 Lot 號的終極鑰匙。')"><span>🔍 IMEI 碼硬燒錄</span><span>➔</span></button>
                                        </div>
                                        <div id="runtime-dict-box" class="dict-display-box"></div>
                                    </div>
                                    <div class="sandbox-panel-card">
                                        <div class="edu-card-label">🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div>
                                        <div style="font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>產線突發修羅場：</strong>包裝秤重磅秤站突然發出連續警報，自動化擊落了 5 箱成品，顯示整體物理重量比標準少了 12 克，你第一移動是？</div>
                                        <div class="sandbox-choice-row">
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：大面積退貨，商譽重創！</strong><br>你盲目調高磅秤公差。結果產品運到凡間後被消費者集體投訴爆發：『彩盒內竟然沒有說明書與退卡針！』被迫全班停線返工，虧損百萬！')">方案 A：認為是磅秤傳感器微小偏移，直接在系統調高公差容忍值，放行出貨。</button>
                                            <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：攔截附件失誤，死守出貨防線！</strong><br>你剛性卡死、物理開箱屍檢！抓到是副線操作工漏塞了剛性說明書。當場勒令補齊並徹底清查前段，成功將外觀物料疏漏拦截在廠門之內！')">方案 B：剛性卡死開閘通訊！勒令這 5 箱機器原地退單，發動實體開箱開盒屍檢。 </button>
                                        </div>
                                        <div id="runtime-sandbox-fallout" class="sandbox-fallout-box"></div>
                                    </div>
                                ` 
                            }
                        ],
                        text: "【精密產品高精工序大陣列】解鎖硬體生產的基本物理流向。請點擊上方分流標籤與節點方塊切換線體定義。"
                    }
                ]
            }
        ],
        examVault: [
            { 
                q: "當零件廠商（Vendor）通知核心晶片的料期（Lead Time）因上游晶圓廠產能吃緊，從 8 週暴增至 24 週，直接撞上專案 PVT 時程，身為 EMS 廠的 TPM 最佳拆彈路徑是？", 
                o: ["要求工廠全面停線，發信指責供應商並死等對方產能恢復", "要求客戶修改產品規格書（PRD），調降晶片效能以改用現貨舊晶片", "立即清查 Common Pool 呆料資源，調研相容晶片引腳（Pin-to-Pin）代償可行性，並發動備援二線（Dual Source）極速可靠性認證防線"], 
                a: 2 
            },
            { 
                q: "工廠匯報 FATP 結案數據：入庫良率高達 99.2%，但流水線直通率（FPY）只有 28%。此時 TPM 應做出何種技術決斷？", 
                o: ["良率極高，代表製程完美受控，可以開閘直接宣佈進入大量量產（MP）", "一票否決！高度懷疑過半機器在線體被手工反覆拆解重工（Rework），帶有物理內傷，極易引發 DOA，應勒令停線徹查治具與公差缺陷", "認定工廠員工偷懶，要求產線主管對操作工進行懲罰性扣薪"], 
                a: 1 
            },
            { 
                q: "在高階手機專案進入 EVT 里程碑末期，ME 團隊準備開啟外殼硬模（Hard Tooling）前，TPM 必須剛性要求團隊交付哪一項工程實證報告以防止開模失敗引發百萬巨損？", 
                o: ["客戶的 CMF 貼圖與表面美學樣板說明", "100% 滿載的極慢公差疊加分析（Tolerance Stack Analysis）與 DFM 可製造性最終審查", "工廠目前的每小時產速（UPH）預估報告"], 
                a: 1 
            },
            { 
                q: "在 DVT 階段進行整機氣密測試（Leak Test）時，發現金屬框與玻璃接縫處集體爆發漏氣，工廠工程師宣稱是防水膠固化劑調配不均，TPM 該如何利用數據主導技術拆彈？", 
                o: ["全盤聽從工廠說法，要求日本膠水原廠直接退款補償", "發起鎖附扭力對比、外殼微觀間隙量測與膠路寬度微調的 DOE 實驗驗證，以數據斷定是結構應力干涉還是材料失效", "直接向客戶提議將防水規格從 IPX8 降為 IPX4 以順利出關"], 
                a: 1 
            },
            { 
                q: "客戶 ID 設計師為了產品極致美感，在 3D 藍圖上堅持做出『0 拔模角』的銳利邊緣外殼。工廠警告量產頂出會發生嚴重裝修收縮痕（Sink Marks），TPM 應如何從跨功能（XFN）視角進行技術仲裁？", 
                o: ["全盤聽從 ID，要求工廠工程師不惜代價強行開模，良率虧損由製造廠自行吞下", "在不觸動客戶正面外觀的前提下，主導 ME 微調內部隱蔽骨架肉厚，並協調工廠在噴砂工藝上優化，利用光線漫反射遮蓋痕跡", "強行發起投票取消該專案，避免後續虧損"], 
                a: 1 
            },
            { 
                q: "主機板過完 SMT 迴流焊熔爐（Reflow Oven）後，AOI 光學天眼集體回報晶片焊盤爆發大量錫橋短路（Bridging）。TPM 應帶領團隊優先溯源檢查哪一個工位的數據與治具？", 
                o: ["後段 FATP 的人工組裝扣合工位", "前段 SMT 的印刷錫膏印刷站（SPI）厚度數據與鋼網（Stencil）磨損狀況", "包裝 Packing 站的整箱秤重感測器設定"], 
                a: 1 
            },
            { 
                q: "在 PVT 試產階段，產線主管抱怨 FCT 功能測試工位的 Cycle Time（操作時間）過長，導致整條流水線出現嚴重的堆料（WIP）。這項缺陷會直接摧毀工廠的哪一項核心指標？", 
                o: ["客戶研發端的 BOM Cost 成本範疇", "流水線的線平衡率（Line Balance）與整線每小時產能產速（UPH）", "產品的信賴性可靠性生命週期"], 
                a: 1 
            },
            { 
                q: "天線射頻工程師要求追加 0.5mm 的安全 Clearance 間距，結構 ME工程師則抗議此舉會造成手機厚度超標、美學垮台，兩方在會議上相持不下。TPM 的天職職責是？", 
                o: ["作為傳話筒，將兩邊吵架的字句如實發出會議記錄，不作評判", "調閱決策代償矩陣（Trade-off Matrix），精算天線效能與外殼肉厚代償方案，主導跨功能技術仲裁逼出黃金折衷點", "直接宣佈會議無限期延長，直到其中一方認輸"], 
                a: 1 
            },
            { 
                q: "產品在市場發生開箱即損（DOA）故障率超標，客退品應送往何處進行屍檢剖析？", 
                o: ["產品市場行銷與概念調研部", "早期失效分析中繼站（EFFA / DOA Autopsy Line）進行物理開殼分析與缺陷追溯", "直接推回 SMT 熔爐重新過火"], 
                a: 1 
            },
            { 
                q: "在精密五金 enclosure 外殼試產中，用來量產前評估工廠沖壓流水線對特定公差尺寸的『製程能力指數』是？", 
                o: ["BOM Cost 物料清單硬體總成本", "Cpk 製程能力指數", "PRD 產品需求需求規格書"], 
                a: 1 
            },
            { 
                q: "在 SMT 製程中，架設在鋼網錫膏印刷機正後方、用來在過爐前及時攔截錫膏印偏 or 厚度不均的 3D 量測關鍵天眼設備是？", 
                o: ["AOI 自動光學檢測儀", "SPI 錫膏檢查儀", "X-Ray 射線斷層掃描儀"], 
                a: 1 
            },
            { 
                q: "高階相機模組為了排除微米級公差，在點亮動態下利用六軸機器手臂微調至最清晰交點的製程工藝叫？", 
                o: ["ICT 電路針床測試技術", "AA 主動對位技術（Active Alignment）", "表面陽極氧化化學皮層工藝"], 
                a: 1 
            },
            { 
                q: "防水橡膠圈（O-Ring）在結構鎖附壓合時，為了防範回彈力不足漏水或應力疲勞崩潰，其物理受壓形變率必須剛性維持在多少黃金區間？", 
                o: ["1% ~ 5% 極微形變區間", "25% ~ 40% 黃金壓縮比區間", "90% ~ 100% 徹底擠壓擠扁區間"], 
                a: 1 
            },
            { 
                q: "各國強制的無線通訊協議與電磁輻射法規認證（如美國 FCC、歐盟 CE），在 NPI 生命周期中屬於哪一範疇的剛性防線？", 
                o: ["EMS Factory 代工製造廠製程範疇", "Compliance 法規法遵界防線認證範疇", "Vendor 零件廠商材料範疇"], 
                a: 1 
            },
            { 
                q: "在 NPI 生命周期模型中，哪一個試產里程碑的 Exit Criteria（出關基準）是『實現電路原理圖與 PCB Layout 的首版通電打通（Power-on）』？", 
                o: ["EVT 工程驗證測試生命週期", "PVT 生產驗證測試生命週期", "MP 大量量產階段"], 
                a: 0 
            },
            { 
                q: "專案進度正式跨入 PVT 里程碑時，代表以下何種硬體狀態已經發生？", 
                o: ["產品還在進行最初步的市場概念與 ID 美學調研", "研發設計檔案與 CMF 貼圖全面剛性凍結（Freeze），重心全力轉移至工廠量產複製與拉速", "外殼鋼模尚未開模，還在等待結構 ME 出圖"], 
                a: 1 
            },
            { 
                q: "金屬鋁合金外殼表面為了達到防刮、抗氧化且吸附裝飾色彩的目的，在化學池中進行的電化學工藝叫？", 
                o: ["Reflow 迴流焊熔焊工藝", "Anodization（陽極氧化工藝）", "Dispensing 精密自動點膠製程"], 
                a: 1 
            },
            { 
                q: "BOM Cost 在專案財務審查與 TPM 開發防線中，代表的核心含意是指？", 
                o: ["代工廠流水線開線的試產電費與耗材成本", "物料清冊清單硬體總組裝成本", "技術專案經理的加班費總和"], 
                a: 1 
            },
            { 
                q: "智慧無人機在 FATP 線體總裝完畢後，為防止升空飛行後發生嚴重的羅盤漂移或炸機災難，必須強制架設哪一個特有測試站工位？", 
                o: ["ICT 主板電路漏電針床站", "IMU 慣性核心動態六面翻轉校正站（Calibration）", "包裝 Packing 秤重防錯防缺料站"], 
                a: 1 
            },
            { 
                q: "若新人在本堂 L1 考場位階考核中答對率低於 60%（Fail），系統的剛性連動法則會觸發何種後果？", 
                o: ["系統自動放水，算他及格並發放戰力勳章", "不予點亮天賦樹認證，系統執行強退回溯，逼迫重新研讀實戰知識核心並重考", "直接跳轉至 L2 進階專科領域"], 
                a: 1 
            },
            { 
                q: "在 SMT 製程中，若迴流焊熔爐的溫度焊接曲線（Profile）因厚銅板散熱過快導致升溫不足，主板元件最容易爆發何種微觀銲接缺陷？", 
                o: ["元件外殼表面嚴重燒焦痕痕跡", "冷銲、虛銲與假銲（Cold Solder / Pseudo Solder）引發後期電路斷線", "主板 PCB 發生大面積碳化收縮"], 
                a: 1 
            },
            { 
                q: "為了在開線試產的第一時間檢驗 SMT 線體設備的抓取精度與溫度穩定度，不浪費昂貴核心晶片的戰術備料作法是？", 
                o: ["直接把百萬級核心晶片推上流水線進行盲測", "使用空板與過爐 dummy 樣片進行『空板過爐測試（Dummy Board Test）』進行製程打光確認", "坐在辦公室等 SMT 課長口頭保證"], 
                a: 1 
            },
            { 
                q: "工廠 FATP 組裝線發生集體螢幕刮傷不良，工廠品保稱是前段進料問題，TPM 該如何快速在現場釐清權責邊界？", 
                o: ["直接判定為上游 Vendor 賠償，開單罰款", "調閱 IQC（進料檢驗）原始抽檢數據報告，對比流水線 Assembly 拆解卡具的物理刮擦軌跡，精準判定是進料瑕疵還是線體治具刮傷", "不做任何調查，直接要求設計師修改 PRD 提高刮傷容忍公差"], 
                a: 1 
            },
            { 
                q: "為防範高能量鋰電池在專案大量生產 MP 後，因日常充放電自然膨脹擠壓主板導致起火，TPM 在結構 DFM 階段必須死守什麼？", 
                o: ["電池彩盒彩盒的美觀度", "電池四周必須剛性留出足夠的『膨脹安全 Clearance 安全間距Layout』", "要求電子 EE 將電池容量調降至 10%"], 
                a: 1 
            },
            { 
                q: "在 fine-pitch BGA 晶片高密度貼片中，為了防範引腳錫膏發生物理橋接短路，TPM 應要求工廠定期維護哪一個關鍵治具？", 
                o: ["後段組裝使用的防靜電手環", "SMT 錫膏網印鋼網（Stencil）的雷射開孔平整度與清洗頻率", "包裝箱使用的膠帶保壓器"], 
                a: 1 
            },
            { 
                q: "流水線在日夜班交接轉廠（Shift Transition）時，良率突然無預警雪崩下跌 40%，TPM 趕往現場第一時間應調閱什麼？", 
                o: ["當班的生產 UPH 產速報表", "交接班金件點檢日誌（Setup Verification Log）與首件檢查（First Article Inspection）數據", "採購部門的 BOM 報價單清冊"], 
                a: 1 
            },
            { 
                q: "在 EVD 階段整機摔落測試（Drop Test）中，產品在特定角度連續跌落時內部結構卡鉤發生集體應力斷裂，TPM 應主導？", 
                o: ["開除摔落測試站的操作工，認定其手法過於粗暴", "召集結構 ME 發動快速 DOE，評估局部肋條（Rib）增厚代償或更換高抗衝擊 PC-ABS 材料的結構補強", "發信給客戶要求取消摔落測試項目以順利結案"], 
                a: 1 
            },
            { 
                q: "高階相機模組在進行自動化六軸對位（Active Alignment）時，治具回報 False Alarm（誤判率）高達 15%，導致大量合格品被扣留，這會造成何種連帶災難？", 
                o: ["直接導致產品的 Lead Time 減少", "引發工廠後段瘋狂拆解重工，人為汙染光學鏡頭，直通率與毛利雙重垮台", "提高產品在凡間實體市場的溢價空間"], 
                a: 1 
            },
            { 
                q: "二線備料廠（Dual Source）交付的元件宣稱規格與一線完全相同，TPM 准許其全面上線量產的剛性防線是？", 
                o: ["直接相信其出廠報告，不需經過線體試產直接在 MP 大量導入", "在 EVT 或 DVT 階段安排專屬小批量（Split Run）線體對比測試，通過完整可靠性信賴性交叉比對驗證後方能解鎖放行", "由 TPM 課長口頭簽字放行認證"], 
                a: 1 
            },
            { 
                q: "大流水線 FATP 的外觀品檢站（Cosmetic Inspection），為防範不同班別操作員對刮傷定義不一引發誤判 or 漏檢，TPM 必須主導線體建立？", 
                o: ["取消外觀檢查站，全數交由凡間使用者自行發現不良", "主導客戶 ID、品保 QA 與工廠三方會審，剛性產出『黃金樣品與邊界限度樣本（Golden & Limit Samples）』銲死在工位上", "要求操作工自行憑感覺判定刮傷嚴重度"], 
                a: 1 
            }
        ]
    }
];

/* 👑 核心執行：IIFE 雙重動態隨機亂序抽題與選項打亂引擎 👑 */
(function() {
    const vault = codexCourseEngineData[0].examVault;
    for (let i = vault.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vault[i], vault[j]] = [vault[j], vault[i]];
    }
    vault.forEach(q => {
        const originalCorrectOptionText = q.o[q.a];
        for (let i = q.o.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.o[i], q.o[j]] = [q.o[j], q.o[i]];
        }
        q.a = q.o.indexOf(originalCorrectOptionText);
    });
    codexCourseEngineData[0].examVault = vault.slice(0, 20);
})();
