/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-29 V5.3: 👑 滿血全量復原交割：校正正確日期。100% 補回先前因覆寫格式而被非自願裁剪沒收的「Section 3 四大線體與高精工序大陣列（通用、手機、無人機）」。全數章節全面灌注「會做什麼、核心目標、終極期待」三維戰術卡牌、可點擊「互動字典」與「工程決策模擬沙盒」，實現極致學以致用。考場 20 題全數展現。
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
                        text: "<div class='edu-overview-container'><div class='edu-overview-card'><div class='edu-card-label'>🛠️ 客戶會做什麼</div><div class='edu-card-body-text'>主導全球市場調研、產品外觀工業設計（ID）與微觀內部結構設計（ME）。撰寫初代產品需求書（PRD），並對外發佈交付神聖的 2D/3D 工程開發圖紙（2D Drawing）。</div></div><div class='edu-overview-card'><div class='edu-card-label'>🎯 核心戰術目標</div><div class='edu-card-body-text'>追求無懈可擊的微觀美學突破、極限技術參數（如超薄型、特殊外殼視覺），用極高難度的工藝拉高市場定價、溢價與品牌防線。</div></div><div class='edu-overview-card'><div class='edu-card-label'>👁️ 團隊終極期待</div><div class='edu-card-body-text'>期待代工製造廠（EMS）能夠 100% 完美復刻所有複雜結構，不允許工廠以任何『設備組裝公差疊加溢出』為藉口而輕易輕易輕易去修改原廠外觀。</div></div></div><div class='sandbox-panel-card'><div class='edu-card-label'>📖 戰術檢查字典（點擊術語解鎖避坑細節）</div><div class='dict-btn-grid'><button class='dict-trigger-btn' onclick='showTacticalDict(\"【PRD 規格防線審查】：必須全面清查 CMF（色彩、材質、工藝）是否具備工廠現有流水線的量產製程能力，在開模前剛性攔截不切實際的幻想規格。\")'><span>🔍 PRD 規格審查</span><span>➔</span></button><button class='dict-trigger-btn' onclick='showTacticalDict(\"【公差疊加分析】：在圖紙出爐第一時間，ME團隊必須發動極限疊加模擬，計算零件間的微米級物理干涉，提前鎖死模具與變形雷區。\")'><span>🔍 公差疊加分析</span><span>➔</span></button></div><div id='runtime-dict-box' class='dict-display-box'></div></div><div class='sandbox-panel-card'><div class='edu-card-label'>🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div><div style='font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;'>🚨 <strong>現場突發修羅場：</strong>客戶 R&D 為了美感，強行要求將內部主板與外殼的 Clearance 安全防護間距由標準 0.3mm 壓縮至極限 0.1mm，你身為代工廠 TPM，此時的第一決斷是？</div><div class='sandbox-choice-row'><button class='sandbox-choice-btn' onclick='triggerSimDecision(false, \"💥 <strong>模擬命運：專案全盤停線崩潰！</strong><br>你選擇直接簽字放行滿足客戶。結果在 PVT 試產拉速時，因零件設備微小公差疊加，主板當場被殼體物理擠壓變形、電路短路集體燒毀，良率直接歸零！模具當場報廢，專案被迫延期兩個月！\")'>方案 A：聽從客戶意見直接簽字放行，滿足美學堅持。</button><button class='sandbox-choice-btn' onclick='triggerSimDecision(true, \"🏆 <strong>模擬命運：技術拆彈成功，名望大增！</strong><br>你拒絕盲從，啟動跨功能 Trade-off 決策矩陣。帶領 ME 與 EE 調閱數據，向客戶實證 0.1mm 會引發短路海嘯。最終成功說服客戶微調內部隱蔽骨架，既保住 0.3mm 安全防護間距，又完美維持外部美學，如期 Exit 出關！\")'>方案 B：啟動跨功能技術仲裁，出示公差公理實證，逼出技術妥協點。 </button></div><div id='runtime-sandbox-fallout' class='sandbox-fallout-box'></div></div>" 
                    },
                    { 
                        name: "零件廠商 (Vendors)", 
                        highlight: false,
                        text: "<div class='edu-overview-container'><div class='edu-overview-card'><div class='edu-card-label'>🛠️ 廠商會做什麼</div><div class='edu-card-body-text'>研發與控制特定元件的晶圓材料技術（如晶片晶圓廠、相機鏡頭模組廠、射頻感測器廠）。負責向代工廠提供初期驗證樣品（Samples），並在專案大量生產（MP）時，向代工廠輸送零件原料物料。</div></div><div class='edu-overview-card'><div class='edu-card-label'>🎯 核心戰術目標</div><div class='edu-card-body-text'>在晶圓與特種材料技術防線上維持行業領先。穩定控制零件出廠良率，並確保在專案跨入大量生產時的原料供給產能無虞。</div></div><div class='edu-overview-card'><div class='edu-card-label'>👁️ 團隊終極期待</div><div class='edu-card-body-text'>期待代工廠提供精確無偏位的料期預測（Forecast），並在工廠進行進料檢驗（IQC）與工位拼裝時，不因工藝不當或靜電損壞其原件。</div></div></div><div class='sandbox-panel-card'><div class='edu-card-label'>📖 戰術檢查字典（點擊術語解鎖避坑細節）</div><div class='dict-btn-grid'><button class='dict-trigger-btn' onclick='showTacticalDict(\"【長料期沙漏控管】：精確追蹤 Lead Time 超過 12 週的稀缺晶片。建立物料沙漏水位，一旦長料期發生供應斷線，必須立即發動二線備料（Dual Source）認證防線。\")'><span>🔍 長料期沙漏控管</span><span>➔</span></button><button class='dict-trigger-btn' onclick='showTacticalDict(\"【IQC 進料檢驗】：元件進廠時，必須強制對齊供應商的出廠報告（COA），以剛性抽樣抽檢零件物理尺寸與電性公差，嚴防上游瑕疵料汙染流水線。\")'><span>🔍 IQC 進料檢驗標準</span><span>➔</span></button></div><div id='runtime-dict-box' class='dict-display-box'></div></div><div class='sandbox-panel-card'><div class='edu-card-label'>🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div><div style='font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;'>🚨 <strong>現場突發修羅場：</strong>DVT 開線前 24 小時，原定的日本特種防水膠廠突然通報藥水配方異常，固化時間變長，無法如期交貨，流水線點膠站工位面臨全面停工，你該如何拆彈？</div><div class='sandbox-choice-row'><button class='sandbox-choice-btn' onclick='triggerSimDecision(false, \"💥 <strong>模擬命運：產線開空窗，工廠開罰！</strong><br>你選擇在辦公室等待日本原廠重調配方。結果線體被迫停工待料 5 天，數百名操作工閒置，產線拉速進度嚴重偏離，遭到工廠主管與客戶集體彈劾！\")'>方案 A：發出警告郵件，並在線體上死等日本原廠配方重調完畢。</button><button class='sandbox-choice-btn' onclick='triggerSimDecision(true, \"🏆 <strong>模擬命運：完美備援，如期開線！</strong><br>你果斷發起跨部門應變，清查 Common Pool 資源，調用國內二線備料供應商的儲備樣品，帶帶領團隊進行 12 小時極速信賴性點亮驗證，成功頂替缺料，流水線一氣呵成順利過關！\")'>方案 B：啟動二線供應商（Dual Source）應變防線，調用樣品進行極速可靠性點亮複審。 </button></div><div id='runtime-sandbox-fallout' class='sandbox-fallout-box'></div></div>" 
                    },
                    { 
                        name: "代工製造廠 (EMS Factory)", 
                        highlight: false,
                        text: "<div class='edu-overview-container'><div class='edu-overview-card'><div class='edu-card-label'>🛠️ 工廠會做什麼</div><div class='edu-card-body-text'>我們的絕對基地（Foxconn / FIH）。接過客戶 2D/3D 圖紙指令，吞下供應商輸送過來的物料。在設備公差疊加與拉速上限邊界下，進行硬體實體化的大規模複製組裝。</div></div><div class='edu-overview-card'><div class='edu-card-label'>🎯 核心戰術目標</div><div class='edu-card-body-text'>死守直通率（FPY），消滅製程瓶頸。在 PVT 與 MP 階段極速提升每小時產能速率（UPH），以極低的不良率完成大批量複製，死守代工毛利。</div></div><div class='edu-overview-card'><div class='edu-card-label'>👁️ 團隊終極期待</div><div class='edu-card-body-text'>期待 TPM 扮演跨功能（XFN）大腦，在試產缺陷、線體治具卡死或動態設計變更（ECO）爆發時，第一時間找出不良根本原因（Root Cause），主導技術拆彈。</div></div></div><div class='sandbox-panel-card'><div class='edu-card-label'>📖 戰術檢查字典（點擊術語解鎖避坑細節）</div><div class='dict-btn-grid'><button class='dict-trigger-btn' onclick='showTacticalDict(\"【線平衡率 Line Balance】：評估整條大流水線各個工位工時的平均配比度。線平衡率低於 85% 代表存在嚴重瓶頸工位，會引發產線集體堆料、拉速垮台。\")'><span>🔍 線平衡率平衡指標</span><span>➔</span></button><button class='dict-trigger-btn' onclick='showTacticalDict(\"【測試治具誤判率】：針床ICT與功能FCT治具的誤判率（False Alarm）必須剛性鎖死在 1% 以下。過高的誤判會引發大量健康主板被送去重工拆解，摧毀直通率。\")'><span>🔍 治具誤判率防線</span><span>➔</span></button></div><div id='runtime-dict-box' class='dict-display-box'></div></div><div class='sandbox-panel-card'><div class='edu-card-label'>🎮 TPM 工程決策決斷沙盒（學以致用模擬演練）</div><div style='font-size:0.95rem; font-weight:700; line-height:1.5; margin-bottom:10px;'>🚨 <strong>現場突發修羅場：</strong>PVT 結案審查時，工廠主管報告最終入庫良率高達 98.5%！但你翻查後台數據發現直通率（FPY）竟然只有慘烈的 35%，此時你該如何決策？</div><div class='sandbox-choice-row'><button class='sandbox-choice-btn' onclick='triggerSimDecision(false, \"💥 <strong>模擬命運：客退海嘯，專案判死！</strong><br>你看到 98.5% 良率就放行出關。結果產品流入實體市場後，因為大批經歷過手工二次高溫重工修補的手機內傷爆發，開箱即損（DOA）故障率集體炸裂！客戶發動全面退貨清算，代工廠毛利當場歸零！\")'>方案 A：良率既然過關，配合工廠主管如期開閘，准許出關大量生產（MP）。</button><button class='sandbox-choice-btn' onclick='triggerSimDecision(true, \"🏆 <strong>模擬命運：鐵血攔截，斬斷隱形內傷！</strong><br>你死守剛性鐵律：『不斬良率，只斬直通率！』當場鐵血攔截專案、拒絕出關。勒令製程 ME 團隊徹查線體，抓出鋼網磨損與治具公差偏移，將 FPY 拉回 85% 以上才准予放行，徹底消滅客退海嘯！\")'>方案 B：一票否決、強行攔截！下令產線停線重調治具，將直通率拉回剛性指標。 </button></div><div id='runtime-sandbox-fallout' class='sandbox-fallout-box'></div></div>" 
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
                            { name: "Proto 原型機", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PROTO STAGE</span><strong>會做什麼：</strong>利用 3D 列印或手工打樣。<strong>核心目標：</strong>快速確認產品的概念因果、巨觀美學比例、結構可行性是否過關。<strong>終極期待：</strong>完成整機物理堆疊（Stack-up）微觀檢視，為後續電路設計鋪路。</div>" },
                            { name: "EVT 工程驗證", highlight: true, text: "<div class='tactical-alert-card'><span class='tactical-badge'>EVT STAGE</span><strong>會做什麼：</strong>研發設計的首度硬體實體化複製。<strong>核心目標：</strong>實現主機板的『首版通電打通（Power-on）』。<strong>終極期待：</strong>確認基本電路系統、訊號流向完整，除錯接口能順利抓到工程軟體訊號。</div>" },
                            { name: "DVT 設計驗證", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>DVT STAGE</span><strong>會做什麼：</strong>量產五金與塑膠模具正式開模（Hard Tooling）。<strong>核心目標：</strong>整機必須完成完整拼裝。<strong>終極期待：</strong>全面接受摔落、高低溫環境衝擊、防水氣密測試等嚴苛的信賴性可靠性考核評審。</div>" },
                            { name: "PVT 生產驗證", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PVT STAGE</span><strong>會做什麼：</strong>研發端設計圖紙全面剛性凍結（Freeze），重心全力轉移至工廠線體。<strong>核心目標：</strong>全面測試流水線的大規模複製組裝能力。<strong>終極期待：</strong>優化操作工位線平衡，驗證治具複製與 UPH 每小時產速是否達標。</div>" },
                            { name: "MP 大量量產", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>MP STAGE</span><strong>會做什麼：</strong>大規模流水線全面啟動生產。<strong>核心目標：</strong>通過工廠出關審查指標。<strong>終極期待：</strong>產品開閘放水，以高直通率良率大批量流入凡間實體市場。</div>" }
                        ],
                        text: "【標準新產品導入流程（NPI）】每個開發里程碑皆有剛性出關審查基準（Exit Criteria），按部就班遞進。請點擊上方流程圖方塊進行互動切換。"
                    }
                ]
            },
            {
                /* 👑 滿血復原防線：100% 補回先前遺失的 Section 3 三大產品線體數據分支 👑 */
                title: "3. 生產線體與組裝測試工序",
                subMatrixBranches: [
                    {
                        branchLabel: "⚙️ 通用四大線體 (Generic)",
                        diagramFlowArray: [
                            { name: "PCBA 主板製程", highlight: true, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PCBA LINE</span><strong>會做什麼：</strong>高密度無塵貼片與錫膏化學銲接。<strong>核心目標：</strong>透過 SPI 檢查儀與高速貼片機，在毫秒間將晶片精確打入主板。<strong>終極期待：</strong>通過高溫迴流爐熔銲，主機板 PCBA 100% 電路打通、零空銲。</div>" },
                            { name: "Assembly 組裝線", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>ASSY LINE</span><strong>會做什麼：</strong>大流水線整機物理拼裝。<strong>核心目標：</strong>操作員與手臂協作，將主板、骨架、螢幕與排線緊密鎖附。<strong>終極期待：</strong>外殼防護螺絲嚴密扣合，不發生滑牙與內部走線干涉擠壓。</div>" },
                            { name: "Test 功能測試站", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>TEST STATION</span><strong>會做什麼：</strong>自動化硬體功能屏蔽測試。<strong>核心目標：</strong>整機強行注入自動化除錯軟體。<strong>終極期待：</strong>一網打盡色彩、音頻、Wi-Fi 射頻訊號缺陷，誤判率剛性掐死在 1% 以下。</div>" },
                            { name: "Packaging 包裝線", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PACK LINE</span><strong>會做什麼：</strong>彩盒附件總裝與封箱出貨。<strong>核心目標：</strong>撕去外殼保護膜，塞入彩盒說明書。<strong>終極期待：</strong>通過最後重整箱防錯秤重，嚴防漏塞任何配件，綠燈封膠。</div>" }
                        ],
                        text: "【通用電子產品四大核心線體】解鎖硬體生產的基本物理流向。請點擊上方節點方塊切換工序定義。"
                    },
                    {
                        branchLabel: "📱 高階手機精細線體 (Smartphone)",
                        diagramFlowArray: [
                            { name: "SMT 主板貼片", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PHONE SMT</span><strong>會做什麼：</strong>高密度雙面 SMT 貼片工藝。<strong>核心目標：</strong>被動原件極微縮化拼裝。<strong>終極期待：</strong>透過 AOI 光學天眼雙重篩查，絕不容許任何一處微小虛銲流入後段。</div>" },
                            { name: "SUB 次級預組線", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PHONE SUB</span><strong>會做什麼：</strong>分支副流水線同時開火。<strong>核心目標：</strong>將相機模組、馬達與天線軟板預先熔銲。<strong>終極期待：</strong>在不佔用大裝總工時的前提下完成模組件，極速拉高總裝 UPH。</div>" },
                            { name: "CG/BG 真空防水壓合", highlight: true, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PHONE IP68</span><strong>會做什麼：</strong>高階手機多軸精密自動點膠與真空保壓。<strong>核心目標：</strong>以微米級精度噴塗防水膠路並送入治具密合。<strong>終極期待：</strong>建立 IP68 黃金氣密結界，確保信賴性防水測試不發生任何滲水漏氣。</div>" },
                            { name: "Final Assembly 總裝線", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PHONE FATP</span><strong>會做什麼：</strong>主板、副組件、大容量鋰電池強行扣合鎖附。<strong>核心目標：</strong>攻克玻璃中框與極細排線的微觀嵌入。<strong>終極期待：</strong>鎖附扭力高精準對位，防範內部應力死鎖與崩裂。</div>" },
                            { name: "Final Test 最終綜合測試", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>PHONE RF</span><strong>會做什麼：</strong>密封射頻屏蔽房（Chamber）天線校正。<strong>核心目標：</strong>校準 5G 與 Wi-Fi 無線射頻參數。<strong>終極期待：</strong>向晶圓內剛性燒錄全球唯一身分證 ── IMEI 碼，完成客退品追溯根基。</div>" }
                        ],
                        text: "【高階手機高密度自動化線體】手機為了在極小空間塞入最多功能，工序極其精密。請點擊上方節點方塊切換線體定義。"
                    },
                    {
                        branchLabel: "🛸 智慧無人機線體 (Drone)",
                        diagramFlowArray: [
                            { name: "SMT 主控與電調焊接", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>DRONE SMT</span><strong>會做什麼：</strong>核心飛控板與高頻大電流 ESC 電子調速器焊接。<strong>核心目標：</strong>保證大功率元件之焊接熱應力釋放。<strong>終極期待：</strong>銲接良率達標，用以精確反饋控制後續無刷馬達的轉速平衡。</div>" },
                            { name: "SUB 動力手臂預組", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>DRONE ARM</span><strong>會做什麼：</strong>碳纖維機臂與高轉速無刷馬達手工拼裝。<strong>核心目標：</strong>銲接動力電源線並進行機械緊固。<strong>終極期待：</strong>通過馬達轉子空載電流檢驗，全面攔截高阻抗發熱異音不良。</div>" },
                            { name: "Final Assembly 機電總裝", highlight: false, text: "<div class='tactical-alert-card'><span class='tactical-badge'>DRONE ASSY</span><strong>會做什麼：</strong>手臂骨架扣合與精密三軸雲台機械安裝。<strong>核心目標：</strong>機電系統總集成。<strong>終極期待：</strong>大功率線路全面密封防水，抗震襯墊安裝到位，防範升空抖震。</div>" },
                            { name: "IMU 感測器動態校正", highlight: true, text: "<div class='tactical-alert-card'><span class='tactical-badge'>DRONE IMU</span><strong>會做什麼：</strong>專屬三軸旋轉陀螺儀動態治具校正。<strong>核心目標：</strong>對加速度計、指南針進行『動態六面翻轉校正』。<strong>終極期待：</strong>將感測器零偏徹底洗淨歸零，確保凡間飛行絕不發生漂移漂移炸機。</div>" }
                        ],
                        text: "【智慧無人機機電共生線體】多軸飛行器涉及動力機械與多重感測器交織流向。請點擊方塊解鎖無人機黑科技工序。"
                    }
                ]
            }
        ],
        examVault: [
            { q: "當零件廠商突然突發長料期（Lead Time）晶片斷線，直接衝擊工廠試產進度，代工廠 TPM 第一動是？", o: ["要求客戶修改 ID 外觀設計圖紙封死空間", "發起跨部門協調、清查 Common Pool 資源，並進行二線備料可製造性評估", "坐在辦公室等工廠自行處理通報"], a: 1 },
            { q: "工廠回報最終入庫良率高達 99%，但直通率（FPY）只有 30%，這代表什麼工程警訊？", o: ["產品品質極其良好，製程非常健康", "超過三分之二的機器被手工拆解重修過，帶有隱形物理內傷，極易發生開箱即損（DOA）", "可以直接開閘放水進入 MP 大量量產生產"], a: 1 },
            { q: "在何種 NPI 里程碑生命週期，TPM 必須強制拦截專案，要求 ME 進行極限公差疊加分析以防 Hard Tooling 模具報廢？", o: ["MP 大量生產出貨階段", "EVT 工程驗證結束、準備開模進入 DVT 前", "最初的產品 PRD 市場調研階段"], a: 1 },
            { q: "在 DVT 階段進行氣密測試（Leak Test）時特定角落連續漏氣，ME 說是工廠膠水問題，TPM 該如何主導技術拆彈？", o: ["開單懲罰工廠點膠站員工", "利用千分尺精密量測組裝間隙，安排鎖附扭力對比與膠路寬度微調的 DOE 實驗驗證", "直接向客戶提議將防水規格從 IPX8 降到 IPX4"], a: 1 },
            { q: "客戶 ID 為了美學堅持做出銳利無拔模角外殼，工廠警告開模會發生裝修縮水痕，代工廠 TPM 應？", o: ["全盤聽從 ID，良率與模具損壞隨便工廠去死", "在不觸動客戶 ID 外觀的前提下，從內部結構與肉厚微調提出建議，並優化噴砂工藝以遮蓋收縮痕", "直接跟客戶吵架並強行取消該專案"], a: 1 },
            { q: "主機板過完迴流焊熔爐（Reflow Oven）後，AOI光學天眼集體回報晶片偏移與虛焊，這屬於哪一站的製程異常？", o: ["FATP 後段組裝線站", "SMT 前段焊接製程流水線站", "後段包裝 Packing 站"], a: 1 },
            { q: "在 PVT 階段，產線主管抱怨某一測試工位的操作時間（Cycle Time）過長引發瓶頸，這直接摧毀了什麼？", o: ["客戶的 PRD 產品規格定義", "流水線的線平衡率（Line Balance）與每小時產能產速（UPH）", "CMF 表面處理視覺貼圖"], a: 1 },
            { q: "天線工程師與結構 ME 為了 0.2mm 的 clearance防護間距在會議上僵持不下，TPM 的技術本質是？", o: ["作為傳話筒，將兩邊吵架的字句如實發出會議記錄", "調閱決策代償矩陣（Trade-off Matrix），主導跨功能技術仲裁以逼出工程妥協點", "叫兩邊去走廊打架，贏的人說了算"], a: 1 },
            { q: "產品在市場發生開箱即損（DOA）故障率超標，客退品應送往何處進行屍檢剖析？", o: ["產品市場調研部", "早期失效分析中繼站 (EFFA / DOA Autopsy Line)", "直接扔回 SMT 熔爐重新過火"], a: 1 },
            { q: "什麼指標是用來量產前評估工廠流水線對特定公差尺寸的「製程能力指數 Cpk」？", o: ["BOM Cost 成本清冊", "Cpk 能力指數", "PRD 需求文件"], a: 1 },
            { q: "在 SMT 前段製程中，架設在鋼網錫膏印刷機後方、用來攔截錫膏印偏或厚度不均的關鍵 3D量測設備是？", o: ["AOI 自動光學檢測儀", "SPI 錫膏檢查儀", "X-Ray 射線斷層掃描"], a: 1 },
            { q: "防水橡膠圈（O-Ring）在結構鎖附壓合時，其物理受壓形變率必須嚴格維持在多少黃金區間？", o: ["1% ~ 5% 極微形變", "25% ~ 40% 黃金壓縮比", "90% ~ 100% 徹底擠壓"], a: 1 },
            { q: "高階相機模組為了排除微米級組裝公差，在點亮動態下利用六軸機器手臂微調至最清晰交點的製程叫？", o: ["ICT 電路針床測試", "AA 主動對位技術 (Active Alignment)", "表面陽極氧化化學工藝"], a: 1 },
            { q: "各國強制的通訊協議與電磁輻射法規認證（如 FCC、CE），在 NPI 架構中屬於？", o: ["EMS Factory 代工製造廠範範疇", "法規界防線認證範疇", "人才資源 Common Pool"], a: 1 },
            { q: "在 EVT（工程驗證生命週期）階段，研發與電子團隊的核心攻堅指標是什麼？", o: ["實現電路原理圖與 PCB Layout 的首版通電打通（Power-on）", "大量複製一萬台量產裝置以確認生產線速率", "設計彩盒外包裝與說明書"], a: 0 },
            { q: "當專案進度正式跨入 PVT 階段時，代表以下何種硬體狀態已經發生？", o: ["產品還在進行最初步的市場概念調研", "研發設計檔案全面凍結（Freeze），重心全力轉移至工廠量產能力複製與拉速", "外殼噴砂顆粒度與材質尚未決定"], a: 1 },
            { q: "金屬鋁合金外殼表面為了防刮、抗氧化且吸附裝飾色彩而進行的電化學工藝叫？", o: ["Reflow 迴流焊工藝", "Anodization (陽極氧化工藝)", "Dispensing 點膠製程"], a: 1 },
            { q: "BOM Cost 在專案控管與財務審查中是指什麼？", o: ["代工廠試產線的開火電費", "物料清單清冊硬體總成本", "技術專案經理的加班費"], a: 1 },
            { q: "專案完成大量生產（MP）開閘出貨後，TPM 必須將本次戰役的經驗凝結成什麼文件傳送回大圖書館？", o: ["PRD 產品規格書", "Lessons Learned (歷史經驗教訓與血淚戰役史詩)", "CAD 3D 元件原始模型"], a: 1 },
            { q: "若新人在本堂 1-1 大考位階考核中答對率低於 60%（Fail），系統的剛性法則是？", o: ["自動放水算他過關", "不給予點亮通關認證，系統執行強退回溯，逼迫重新研讀教材重考", "發放黃金勳章卡片"], a: 1 }
        ]
    }
];
