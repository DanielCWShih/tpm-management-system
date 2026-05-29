/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-29 V5.6: 👑 滿血多行展開對齊版：更正最新時間。HTML 全面採用標準縮排展開，Section 1~3（含手機現實、三大精細流水線）內容 100% 完整，30 題實戰情境試題庫配合 Fisher-Yates 雙重洗牌引擎完璧歸位，嚴禁任何形式的代碼縮寫、留白與裁剪。
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
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【公差疊加分析】：在圖紙出爐第一時間，ME團隊必須發動極慢疊加模擬，計算零件間的微米級物理干涉，提前鎖死模具與變形雷區。')">
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
                                    🚨 <strong>現場突發修羅場：</strong>PVT 結案審查時，工廠主管報告最終入庫良率高達 98.5%！但你翻查後台數據發現直通率（FPY）竟然只有慘烈的 35%，此時你該如何決策？
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
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PROTO STAGE</span>
                                        <strong>會做什麼：</strong>利用 3D 列印或手工打樣。<br>
                                        <strong>核心目標：</strong>快速確認產品的概念因果、巨觀美學比例、結構可行性是否過關。<br>
                                        <strong>終極期待：</strong>完成整機物理堆疊（Stack-up）微觀檢視，為後續電路設計鋪路。
                                    </div>
                                ` 
                            },
                            { 
                                name: "EVT 工程驗證", 
                                highlight: true, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">EVT STAGE</span>
                                        <strong>會做什麼：</strong>研發設計的首度硬體實體化複製。<br>
                                        <strong>核心目標：</strong>實現主機板的『首版通電打通（Power-on）』。<br>
                                        <strong>終極期待：</strong>確認基本電路系統、訊號流向完整，除錯接口能順利抓到工程軟體訊號。
                                    </div>
                                ` 
                            },
                            { 
                                name: "DVT 設計驗證", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">DVT STAGE</span>
                                        <strong>會做什麼：</strong>量產五金與塑膠模具正式開模（Hard Tooling）。<br>
                                        <strong>核心目標：</strong>整機必須完成完整拼裝。<br>
                                        <strong>終極期待：</strong>全面接受摔落、高低溫環境衝擊、防水氣密測試等嚴苛的信賴性可靠性考核評審。
                                    </div>
                                ` 
                            },
                            { 
                                name: "PVT 生產驗證", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PVT STAGE</span>
                                        <strong>會做什麼：</strong>研發端設計圖紙全面剛性凍結（Freeze），重心全力轉移至工廠線體。<br>
                                        <strong>核心目標：</strong>全面測試流水線的大規模複製組裝能力。<br>
                                        <strong>終極期待：</strong>優化操作工位線平衡，驗證治具複製與 UPH 每小時產速是否達標。
                                    </div>
                                ` 
                            },
                            { 
                                name: "MP 大量量產", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">MP STAGE</span>
                                        <strong>會做什麼：</strong>大規模流水線全面啟動生產。<br>
                                        <strong>核心目標：</strong>通過工廠出關審查指標。<br>
                                        <strong>終極期待：</strong>產品開閘放水，以高直通率良率大批量流入凡間實體市場。
                                    </div>
                                ` 
                            }
                        ],
                        text: "【標準新產品導入流程（NPI）】每個開發里程碑皆有剛性出關審查基準（Exit Criteria），按部就班遞進。請點擊上方流程圖方塊進行互動切換。"
                    },
                    {
                        branchLabel: "📱 智慧型手機現實 (Smartphone)",
                        diagramFlowArray: [
                            { 
                                name: "Proto 階段 (機構/通電並行)", 
                                highlight: true, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">REALITY PROTO</span>
                                        <strong>會做什麼：</strong>在極度內捲的手機案中，研發試產被壓縮至 6-9 個月。<br>
                                        <strong>核心目標：</strong>EE 團隊還在對首版主板進行通電調試 Debug 的同時，ME 團隊被迫同步提前開啟量產鋼模（Hard Tooling）。<br>
                                        <strong>終極期待：</strong>完全打破傳統前後遞進時程，審查結構與電路進行雙線預演對決。
                                    </div>
                                ` 
                            },
                            { 
                                name: "EVT / DVT 階段高度重疊", 
                                highlight: true, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">REALITY OVERLAP</span>
                                        <strong>會做什麼：</strong>因市場時程（Time-to-Market）卡死，EVT 階段的出關評審尚未召開，DVT 階段的長料期原件就必須提前強制下單（Pre-order）。<br>
                                        <strong>核心目標：</strong>研發端除錯與工廠端模具修改在線體上平行爆發。<br>
                                        <strong>終極期待：</strong>考驗 TPM 極強的變更範疇控制手段，隨時應對設計變更（ECO）引發的震盪。
                                    </div>
                                ` 
                            },
                            { 
                                name: "PVT 產線極速拉速", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">REALITY PVT</span>
                                        <strong>會做什麼：</strong>手機 PVT 在大流水線上通常只有極短的 3 至 5 天評審期。<br>
                                        <strong>核心目標：</strong>工廠必須在極短工時內將每小時產速（UPH）強行拉到 MP 大批量生產規格。<br>
                                        <strong>終極期待：</strong>任何治具卡死或工位瓶頸（Bottle-neck）都會引發全盤癱瘓，考驗現場即時拆彈防線。
                                    </div>
                                ` 
                            }
                        ],
                        text: "【智慧型手機產業的極限壓縮現實】在高度成熟的手機產品線中，傳統生命週期被市場競爭徹底粉碎。請點擊方塊切換研讀手機修羅場實務。"
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
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PCBA LINE</span>
                                        <strong>會做什麼：</strong>高密度無塵貼片與錫膏化學銲接。<br>
                                        <strong>核心目標：</strong>透過 SPI 檢查儀與高速貼片機，在毫秒間將晶片精確打入主板。<br>
                                        <strong>終極期待：</strong>通過高溫迴流爐熔銲，主機板 PCBA 100% 電路打通、零空銲。
                                    </div>
                                ` 
                            },
                            { 
                                name: "Assembly 組裝線", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">ASSY LINE</span>
                                        <strong>會做什麼：</strong>大流水線整機物理拼裝。<br>
                                        <strong>核心目標：</strong>操作員與手臂協作，將主板、骨架、螢幕與排線緊密鎖附。<br>
                                        <strong>終極期待：</strong>外殼防護螺絲嚴密扣合，不發生滑牙與內部走線干涉擠壓。
                                    </div>
                                ` 
                            },
                            { 
                                name: "Test 功能測試站", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">TEST STATION</span>
                                        <strong>會做什麼：</strong>自動化硬體功能屏蔽測試。<br>
                                        <strong>核心目標：</strong>整機強行注入自動化除錯軟體。<br>
                                        <strong>終極期待：</strong>一網打盡色彩、音頻、Wi-Fi 射頻訊號缺陷，誤判率剛性掐死在 1% 以下。
                                    </div>
                                ` 
                            },
                            { 
                                name: "Packaging 包裝線", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PACK LINE</span>
                                        <strong>會做什麼：</strong>彩盒附件總裝與封箱出貨。<br>
                                        <strong>核心目標：</strong>撕去外殼保護膜，塞入彩盒說明書。<br>
                                        <strong>終極期待：</strong>通過最後重整箱防錯秤重，嚴防漏塞任何配件，綠燈封膠。
                                    </div>
                                ` 
                            }
                        ],
                        text: "【通用電子產品四大核心線體】解鎖硬體生產的基本物理流向。請點擊上方節點方塊切換工序定義。"
                    },
                    {
                        branchLabel: "📱 高階手機精細線體 (Smartphone)",
                        diagramFlowArray: [
                            { 
                                name: "SMT 主板貼片", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PHONE SMT</span>
                                        <strong>會做什麼：</strong>高密度雙面 SMT 貼片工藝。<br>
                                        <strong>核心目標：</strong>被動原件極微縮化拼裝。<br>
                                        <strong>終極期待：</strong>透過 AOI 光學天眼雙重篩查，絕不容許任何一處微小虛銲流入後段。
                                    </div>
                                ` 
                            },
                            { 
                                name: "SUB 次級預組線", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PHONE SUB</span>
                                        <strong>會做什麼：</strong>分支副流水線同時開火。<br>
                                        <strong>核心目標：</strong>將相機模組、馬達與天線軟板預先熔銲。<br>
                                        <strong>終極期待：</strong>在不佔用大裝總工時的前提下完成模組件，極速拉高總裝 UPH。
                                    </div>
                                ` 
                            },
                            { 
                                name: "CG/BG 真空防水壓合", 
                                highlight: true, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PHONE IP68</span>
                                        <strong>會做什麼：</strong>高階手機多軸精密自動點膠與真空保壓。<br>
                                        <strong>核心目標：</strong>以微米級精度噴塗防水膠路並送入治具密合。<br>
                                        <strong>終極期待：</strong>建立 IP68 黃金氣密測試防線，確保信賴性防水測試不發生任何滲水漏氣。
                                    </div>
                                ` 
                            },
                            { 
                                name: "Final Assembly 總裝線", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PHONE FATP</span>
                                        <strong>會做什麼：</strong>主板、副組件、大容量鋰電池強行扣合鎖附。<br>
                                        <strong>核心目標：</strong>攻克玻璃中框與極細排線的微觀嵌入。<br>
                                        <strong>終極期待：</strong>鎖附扭力高精準對位，防範內部應力死鎖與崩裂。
                                    </div>
                                ` 
                            },
                            { 
                                name: "Final Test 最終綜合測試", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">PHONE RF</span>
                                        <strong>會做什麼：</strong>密封射頻屏蔽房（Chamber）天線校正。<br>
                                        <strong>核心目標：</strong>校準 5G 與 Wi-Fi 無線射頻參數。<br>
                                        <strong>終極期待：</strong>向晶圓內剛性燒錄全球唯一身分證 ── IMEI 碼，完成客退品追溯根基。
                                    </div>
                                ` 
                            }
                        ],
                        text: "【高階手機高密度自動化線體】手機為了在極小空間塞入最多功能，工序極其精密。請點擊上方節點方塊切換線體定義。"
                    },
                    {
                        branchLabel: "🛸 智慧無人機線體 (Drone)",
                        diagramFlowArray: [
                            { 
                                name: "SMT 主控與電調焊接", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">DRONE SMT</span>
                                        <strong>會做什麼：</strong>核心飛控板與高頻大電流 ESC 電子調速器焊接。<br>
                                        <strong>核心目標：</strong>保證大功率元件之焊接熱應力釋放。<br>
                                        <strong>終極期待：</strong>銲接良率達標，用以精確反饋控制後續無刷馬達的轉速平衡。
                                    </div>
                                ` 
                            },
                            { 
                                name: "SUB 動力手臂預組", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">DRONE ARM</span>
                                        <strong>會做什麼：</strong>碳纖維機臂與高轉速無刷馬達手工拼裝。<br>
                                        <strong>核心目標：</strong>銲接動力電源線並進行機械緊固。<br>
                                        <strong>終極期待：</strong>通過馬達轉子空載電流檢驗，全面攔截高阻抗發熱異音不良。
                                    </div>
                                ` 
                            },
                            { 
                                name: "Final Assembly 機電總裝", 
                                highlight: false, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">DRONE ASSY</span>
                                        <strong>會做什麼：</strong>手臂骨架扣合與精密三軸雲台機械安裝。<br>
                                        <strong>核心目標：</strong>機電系統總集成。<br>
                                        <strong>終極期待：</strong>大功率線路全面密封防水，抗震襯墊安裝到位，防範升空抖震.
                                    </div>
                                ` 
                            },
                            { 
                                name: "IMU 感測器動態校正", 
                                highlight: true, 
                                text: `
                                    <div class="tactical-alert-card">
                                        <span class="tactical-badge">DRONE IMU</span>
                                        <strong>會做什麼：</strong>專屬三軸旋轉陀螺儀動態治具校正。<br>
                                        <strong>核心目標：</strong>對加速度計、指南針進行『動態六面翻轉校正』。<br>
                                        <strong>終極期待：</strong>將感測器零偏徹底洗淨歸零，確保凡間飛行絕對不發生漂移炸機。
                                    </div>
                                ` 
                            }
                        ],
                        text: "【智慧無人機機電共生線體】多軸飛行器涉及動力機械與多重感測器交織流向。請點擊方塊解鎖無人機黑科技工序。"
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
                q: "天線射頻工程師要求追加 0.5mm 的安全 Clearance 間距，結構 ME 工程師則抗議此舉會造成手機厚度超標、美學垮台，兩方在會議上相持不下。TPM 的技術本質職責是？", 
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
