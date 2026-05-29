/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-29 V5.2: 👑 內容乾貨大平反：徹底掃除「Google 名詞解釋」式的垃圾廢話。文字全面封裝為 HTML 富文本實戰卡牌結構。注入「🎯 TPM 核心戰術指標」、「💥 試產現場災難還原案例」、「📝 剛性避坑 Checklist」，以及「🔍 互動大腦拷問盲點」，將含金量拉到極致。20 題考題全量產出，嚴禁刪減！
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
                        text: "<div class='tactical-alert-card'><strong>🎯 TPM 核心戰術指標：規格範疇管控（Scope Management）</strong><br>在硬體概念發想與市場調研階段，TPM 必須死守產品規格書（PRD）與 2D/3D 工程圖紙，防止客戶端工程師（Brand R&D）發生『功能無限蔓延（Scope Creep）』，在未估算成本代價前盲目追加極致技術參數。</div><div class='tactical-danger-card'><strong>💥 試產現場災難還原案例：銳利拔模角引發的黑洞</strong><br>某手機大廠客戶 ID 設計師追求美學，在圖紙上強行設計了『0 拔模角』的銳利外殼。代工廠量產時，因為模具無法順利頂出，外殼表面集體爆發嚴重的『收縮痕（Sink Marks）』，導致 EVT 良率直接跌到 12%。TPM 當時未能及時在 DFM 審查中拦截此設計，被迫與客戶 ME 徹夜談判，最終說服其在不影響正面視覺的前提下，將內部隱蔽肉厚微調減薄 0.15mm，並搭配特殊噴砂工藝遮蓋缺陷，才勉強保住量產時程。</div><div class='tactical-alert-card'><strong>📝 研發階段 TPM 剛性避坑 Checklist：</strong><br><div class='tactical-grid-2'><div class='tactical-check-item'><span>✔️</span> 產品規格書（PRD）中的 CMF（色彩、材質、工藝）是否具備代工廠量產製程能力？</div><div class='tactical-check-item'><span>✔️</span> 客戶 3D 堆疊（Stack-up）工程圖，是否已由 ME 團隊進行極限公差疊加分析（Tolerance Stack Analysis）？</div></div></div><div class='tactical-alert-card' style='background:#FAF9F5;'><strong>🔍 互動盲點拷問：</strong><br>當客戶 R&D 為了產品美感，強行要求將內部 Clearance 安全防護間距壓縮至 0.1mm 時，作為代工廠 TPM，你應該直接聽從，還是調閱決策代償矩陣進行跨功能技術仲裁？</div>" 
                    },
                    { 
                        name: "零件廠商 (Component Vendors)", 
                        highlight: false,
                        text: "<div class='tactical-alert-card'><strong>🎯 TPM 核心戰術指標：料期與可供性防線（Lead Time Control）</strong><br>掌握核心物料（如相機模組、特種防水點膠膠材、感測器晶片）的研發與交貨節奏。TPM 必須精確追蹤供應商的樣品（Samples）到位時程，長料期晶片的排產計畫，直接對接長料期沙漏。</div><div class='tactical-danger-card'><strong>💥 試產現場災難還原案例：被一滴防水膠掐死的流水線</strong><br>DVT 試產前夕，原定配合的日本特種防水膠廠突然發生化學藥水配方漂移，導致出廠的膠材固化時間延長了一倍，直接癱瘓了 FATP 組裝線的點膠站工位（Cycle Time 暴增）。TPM 在半小時內啟動備援機制，清查 Common Pool 資源，調用國內二線備料廠樣品進行 12 小時極速可靠性點亮驗證，最終在不變動 ME 結構的前提下成功替換膠材，保住了開線計畫。</div><div class='tactical-alert-card'><strong>📝 供應商階段 TPM 剛性避坑 Checklist：</strong><br><div class='tactical-grid-2'><div class='tactical-check-item'><span>✔️</span> 所有核心元件的 Lead Time 是否有超過 12 週的長料期品？二線供應商（Dual Source）是否已完成認證？</div><div class='tactical-check-item'><span>✔️</span> 供應商樣品進廠時，IQC（進料檢驗）的良率數據與出廠報告（COA）是否完全對齊？</div></div></div>" 
                    },
                    { 
                        name: "代工製造廠 (EMS Factory)", 
                        highlight: false,
                        text: "<div class='tactical-alert-card'><strong>🎯 TPM 核心戰術指標：實體化複製與生產拉速（UPH & FPY）</strong><br>這是我們（Foxconn / FIH）的主戰場。TPM 的核心天職是帶領工廠工程團隊，在有限的產線設備公差、操作工時與拉速時程邊界下，將研發圖紙 100% 不失真地進行大規模複製組裝，死守直通率（FPY）防線。</div><div class='tactical-danger-card'><strong>💥 試產現場災難還原案例：98% 良率背後的重工騙局</strong><br>某專案 PVT 結案報告上，工廠回報入庫良率高達 98.5%，看似一片大好。但 TPM 現場查線調閱數據發現，產線的直通率（FPY）竟然只有慘烈的 35%！這意味著過半的手機在流水線上都被打下來，在後段手工工位（Rework Station）經歷了拆解、二度加熱焊接與修復。這種經歷過度折騰的機器帶有嚴重的隱形物理應力內傷，運到凡間市場必然引發開箱即損（DOA）海嘯。TPM 當場拦截專案，拒絕出關 MP，勒令工廠重調鋼網厚度與治具夾持公差。</div><div class='tactical-alert-card'><strong>📝 製造現場 TPM 剛性避坑 Checklist：</strong><br><div class='tactical-grid-2'><div class='tactical-check-item'><span>✔️</span>流水線的線平衡率（Line Balance）是否達到 85% 以上？是否存在嚴重的瓶頸工位？</div><div class='tactical-check-item'><span>✔️</span> 產線測試治具（ICT/FCT）的誤判率（False Alarm）是否在剛性標準 1% 以下？</div></div></div>" 
                    }
                ],
                text: "在硬體專案管理的世界中，運行著「三方一鏈」的實務實體化鏈條。請點擊上方流程圖方塊，逐一研讀各節點權責防線。"
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
                                text: "<div class='tactical-alert-card'><span class='tactical-badge'>PROTO</span><strong>核心目的：美學比例與架構可行性微觀檢視</strong><br>利用 3D 列印或手工快速打樣。此階段研發圖紙與電路原理圖（Schematic）還處於概念期，主要用來評估整機的物理堆疊（Stack-up）架構是否會發生嚴重的空間硬干涉。</div>" 
                            },
                            { 
                                name: "EVT 工程驗證", 
                                highlight: true,
                                text: "<div class='tactical-alert-card'><span class='tactical-badge'>EVT</span><strong>核心目的：主機板首版通電打通（Power-on）</strong><br>這是研發設計的首度實體化複製。TPM 在 EVT 階段的剛性 Exit Criteria（出關基準）是：主機板必須 100% 通電打通，基本電路與基本功能運作正常，且除錯接口（Debug Interface）能順利抓到訊號、跑通軟體。</div>" 
                            },
                            { 
                                name: "DVT 設計驗證", 
                                highlight: false,
                                text: "<div class='tactical-alert-card'><span class='tactical-badge'>DVT</span><strong>核心目的：量產鋼模正式開模與嚴苛信賴性拷問</strong><br>此階段五金與塑膠模具正式開模（Hard Tooling）。產品必須實現整機完整組裝，並開始強制接受摔落測試（Drop Test）、高低溫環境衝擊、以及防水氣密測試（Leak Test）等摧毀性的信賴性試煉，用數據修正公差缺陷。</div>" 
                            },
                            { 
                                name: "PVT 生產驗證", 
                                highlight: false,
                                text: "<div class='tactical-alert-card'><span class='tactical-badge'>PVT</span><strong>核心目的：設計圖紙全面凍結，考驗產線大量複製能力</strong><br>研發端的設計文件與 CMF 貼圖全面剛性凍結（Freeze），禁止任何ECO變更。專案重心完全移交給代工製造廠。目的在於測試工廠流水線的每小時產能速率（UPH）、測試治具防錯能力，驗證工廠製程能力指數（Cpk）。</div>" 
                            },
                            { 
                                name: "MP 大量量產", 
                                highlight: false,
                                text: "<div class='tactical-alert-card'><span class='tactical-badge'>MP</span><strong>核心目的：良率出關，放水流入凡間市場</strong><br>通過代工廠 FPY 良率剛性指標，新產品導入流程（NPI）宣告正式功德圓滿，產品開閘放水進入大規模流水線生產並出貨。</div>" 
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
                                text: "<div class='tactical-danger-card'><span class='tactical-badge'>REALITY</span><strong>手機修羅場：Proto 戰線就必須並行</strong><br>在極度內捲的智慧型手機產業，研發試產週期被極限壓縮至 6 到 9 個月。我們完全沒有等圖紙的餘裕，在 Proto 原型機階段，EE 團隊還在通電調試訊號的同時，ME 團隊就已經被迫提前開啟 Hard Tooling 量產鋼模。</div>" 
                            },
                            { 
                                name: "EVT / DVT 階段高度重疊", 
                                highlight: true,
                                text: "<div class='tactical-danger-card'><span class='tactical-badge'>REALITY</span><strong>手機修羅場：EVT 與 DVT 平行並行 overlap</strong><br>因市場時程卡死，EVT 尚未出關，DVT 階段的長期物料（Long-lead Components）就必須強制提前下單。這導致研發除錯與量產模具缺陷優化在線體上同時爆發，身為手機 TPM，隨時要在動態設計變更（ECO）與工廠停線危機中拆彈。</div>" 
                            },
                            { 
                                name: "PVT 產線極速拉速拉偏", 
                                highlight: false,
                                text: "<div class='tactical-danger-card'><span class='tactical-badge'>REALITY</span><strong>手機修羅場：PVT 只有黃金一週的拉速期</strong><br>手機 PVT 測試在線體上通常只有 3 到 5 天的轉廠期，工廠必須在極短工時內將 UPH（每小時產速）強行拉到大批量生產規格。任何一個治具卡死或工位平衡（Line Balance）失調，都會直接摧毀開線計畫。</div>" 
                            }
                        ],
                        text: "【智慧型手機產業的極限壓縮現實】在高度成熟的手機產品線中，傳統生命週期被市場競爭徹底粉碎。請點擊方塊切換研讀手機修羅場實務。"
                    }
                ]
            },
            {
                title: "3. 生產線體與組裝測試工序",
                subMatrixBranches: [
                    {
                        branchLabel: "⚙️ 通用四大線體 (Generic)",
                        diagramFlowArray: [
                            { 
                                name: "PCBA 主板製程", 
                                highlight: true,
                                text: "<div class='tactical-alert-card'><strong>⚙️ SMT 前段焊接製程流水線站</strong><br>在高度潔淨防靜電的無塵車間進行。將最核心的主晶片、電阻、電容元件，透過鋼網網印錫膏、3D 錫膏檢查儀（SPI）攔截印偏、高速貼片機精準拍打零件，最後過迴流焊熔爐（Reflow Oven）進行高溫熔焊，鑄造出核心主機板 PCBA，這便是裝置的智慧大腦。</div>" 
                            },
                            { 
                                name: "Assembly 組裝線", 
                                highlight: false,
                                text: "<div class='tactical-alert-card'><strong>⚙️ FATP 後段總裝流水線（Assembly）</strong><br>將產出的主板 PCBA 送往大流水線。由工位操作員與自動化手臂協作，將外殼骨架、螢幕模組、大容量電池、相機排線與防護螺絲嚴密拼裝鎖附，形成實體整機機身。</div>" 
                            },
                            { 
                                name: "Test 功能測試站", 
                                highlight: false,
                                text: "<div class='tactical-alert-card'><strong>⚙️ FATP 測試線（Test Station）</strong><br>整機流入自動化測試屏蔽治具（ICT 針床/FCT 功能治具）。通電強行注入工程除錯軟體，毫米級檢驗其螢幕視覺、喇叭音頻、Wi-Fi 與藍牙無線訊號、相機功能是否完全合格，發動第一道天眼攔截防線。</div>" 
                            },
                            { 
                                name: "Packaging 包裝線", 
                                highlight: false,
                                text: "<div class='tactical-alert-card'><strong>⚙️ Packing 包裝出貨站</strong><br>完全通過功能測試的健康整機，在此處由人工撕去保護膜、塞入說明書彩盒、配件與充電器。進行最後的整箱防錯秤重（防止少塞物料）並封膠裝箱出貨。</div>" 
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
                                text: "<div class='tactical-danger-card'><strong>📱 手機精細線體：SMT 高密度雙面貼片</strong><br>手機主板屬於極高密度雙面貼片（Dual-side SMT）。主晶片與被動元件極度微縮。必須通過 3D 錫膏厚度檢驗（SPI）與熔爐後 AOI 光學天眼雙重篩查，絕不容許任何虛焊或缺件流入後段。</div>" 
                            },
                            { 
                                name: "SUB 次級預組線", 
                                highlight: false,
                                text: "<div class='tactical-danger-card'><strong>📱 手機精細線體：SUB 次級預組線（副線開火）</strong><br>為了不佔用大裝流水線工時（Cycle Time），在此處將相機鏡頭模組、振動馬達、指紋解鎖晶片與天線軟板，在副線預先拼裝熔焊成小模組件，提升總裝效率。</div>" 
                            },
                            { 
                                name: "CG/BG 真空防水壓合", 
                                highlight: true,
                                text: "<div class='tactical-danger-card'><strong>📱 手機精細線體：CG/BG 真空防水壓合（IP68核心）</strong><br>利用多軸精密自動點膠機（Dispensing Machine），以微米級精度在金屬中框邊緣噴塗防水膠路。將前後玻璃蓋板送入真空壓合治具進行強制保壓密合，建立 IP68 黃金氣密測試防線。</div>" 
                            },
                            { 
                                name: "Final Assembly 總裝線", 
                                highlight: false,
                                text: "<div class='tactical-danger-card'><strong>📱 手機精細線體：Final Assembly 總裝線</strong><br>將 SUB 次級預組件、PCBA 主板、大容量鋰電池強行嵌入防水壓合完畢的玻璃中框。此步驟涉及大量極細排線扣合與高精度螺絲鎖附防扭力滑牙工藝。</div>" 
                            },
                            { 
                                name: "Final Test 最終綜合測試", 
                                highlight: false,
                                text: "<div class='tactical-danger-card'><strong>📱 手機精細線體：Final Test 最終射頻與 IMEI 碼燒錄</strong><br>手機送入全密封射頻干涉屏蔽房（Chamber）。校正 4G/5G/Wi-Fi 射頻天線參數，並向晶圓內剛性燒錄全球唯一的通訊身分證 ── IMEI 碼，完成客退品早期失效分析（EFFA）溯源防線。</div>" 
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
                                text: "<div class='tactical-danger-card'><strong>🛸 智慧無人機線體：SMT 飛控與電調焊接</strong><br>除了主導大腦運算的核心飛控板 PCBA，在此處必須同步焊接高頻大電流的 ESC 電子調速器（電調板），用來精準反饋控制無刷馬達的極高轉速與扭力平衡。</div>" 
                            },
                            { 
                                name: "SUB 動力手臂預組", 
                                highlight: false,
                                text: "<div class='tactical-danger-card'><strong>🛸 智慧無人機線體：SUB 動力手臂預組</strong><br>無人機副線。將高強度碳纖維機臂、高轉速無刷馬達與大功率 LED 指示燈進行手工焊接預組，並全面檢驗馬達轉子空載電流是否異常偏高。</div>" 
                            },
                            { 
                                name: "Final Assembly 機電總裝", 
                                highlight: false,
                                text: "<div class='tactical-danger-card'><strong>🛸 智慧無人機線體：Final Assembly 機電總裝線</strong><br>將動力手臂剛性鎖附上無人機主骨架，並嵌入精密三軸機械穩定雲台（Gimbal）與 4K 影像鏡頭。涉及極多大功率動力電源線的密封防水防震工藝。</div>" 
                            },
                            { 
                                name: "IMU 感測器動態校正", 
                                highlight: true,
                                text: "<div class='tactical-danger-card'><strong>🛸 智慧無人機線體：IMU 慣性核心動態校正站（飛行防禦）</strong><br>無人機特有核心。不上傳統流水線測試，而是固定在專屬的三軸旋轉陀螺儀治具上，進行飛控大腦內部 IMU（包含加速度計、陀螺儀、指南針）的『動態六面翻轉校正（Calibration）』，確保升空後絕對不發生漂移炸機。</div>" 
                            }
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
