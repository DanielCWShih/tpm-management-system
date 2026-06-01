/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.0: 👑 子單元 1-3 專業還原完全體。全面剝離所有玄幻遊戲用語。Page Headings 剛性還原為標準手機代工廠通用產線與查線排查架構。每頁配置 4 個核心專業關鍵字變數，完美相容 HTML V6.3 的流程 Tab 導航控制邏輯。代碼 100% 完整全量展開，絕無縮寫。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A3", 
        menuTitle: "1-3: 工廠地理與 4M1E 線體通識",
        subPages: [
            {
                title: "1. SMT to FATP 手機通用四大實體線體 (表面貼片與整機後段工序流程導航)",
                diagramFlowArray: [
                    {
                        name: "SMT (主板表面貼片車間)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">在萬級超高潔淨度無塵室內，主導裸板 PCB 鋼網錫膏網印、3D 檢查、高速貼片機晶片拍打、與迴流焊化學熔焊固化。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">在毫秒級時間內將數百個微米級被動元件與大腦 CPU 精確固化銲接在主板上，鑄造出核心 PCBA。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">過爐後電路導通率 100%，BGA 晶片內部銲點零氣泡、零虛銲、零空銲，消滅一切隱性物理內傷。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "SPI (過爐前錫膏檢驗儀)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">Solder Paste Inspection。架設在鋼網錫膏印刷機正後方、貼片機群正前方，利用 3D 雷射光學檢測錫膏厚度、面積與高度公差偏移。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">在元件尚未貼下去、尚未送入高溫爐熔焊前，將漏印、印歪、刮錫、錫膏厚度不足之瑕疵主板就地攔截。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">建立 SMT 初始最前段品質天眼。此階段攔截重工只需用洗板水刷掉錫膏即可，重工材料損耗成本幾乎為零。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A; margin-top:20px;">
                                <div style="font-weight:900; font-size:0.85rem; color:#475569; margin-bottom:10px;">📖 專業技術字典</div>
                                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px;">
                                    <button style="background:#FFF; border:2px solid #1A1A1A; padding:10px; border-radius:6px; font-weight:800; font-size:0.8rem; text-align:left; cursor:pointer;" onclick="showTacticalDict('【SPI 銲前攔截比】：大廠製程中，70%的後段虛焊短路根源都在前段錫膏印刷。死守 SPI 攔截精準度是 SMT 製程降本增效的第一鐵律。')">🔍 SPI 錫膏檢查工藝機制 ➔</button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin-top:12px; font-size:0.85rem; font-weight:700; line-height:1.5; display:none;"></div>
                            </div>
                        `
                    },
                    {
                        name: "Reflow Oven (高溫迴流銲爐)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">內部橫跨 10 到 12 個獨立高溫充氮加熱溫區。主板隨流水線皮帶緩慢進爐，經受最高達 260°C 的高溫化學受熱曲線拷問。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">將主板表面的錫膏完全液化融化、激發化學松香活性，隨後在冷卻溫區精確固化凝結完成電路機械熔焊。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">定時架設溫測線（Profiler）進爐實測，鎖死加熱速率，杜絕厚銅板因散熱過快升溫不足導致大面積冷銲虛焊。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A; margin-top:20px;">
                                <div style="font-weight:900; font-size:0.85rem; color:#475569; margin-bottom:10px;">📖 專業技術字典</div>
                                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px;">
                                    <button style="background:#FFF; border:2px solid #1A1A1A; padding:10px; border-radius:6px; font-weight:800; font-size:0.8rem; text-align:left; cursor:pointer;" onclick="showTacticalDict('【爐溫 Profile 曲線】：若測試站爆發大面積虛焊（Solder Skip），工廠老手常甩鍋給研發板材設計。TPM 應立即下令產線停線，實測 Profile 曲線，鐵證往往會指向工廠熔爐溫區溫控老化漂移。')">🔍 拆彈過爐焊接缺陷 ➔</button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin-top:12px; font-size:0.85rem; font-weight:700; line-height:1.5; display:none;"></div>
                            </div>
                        `
                    },
                    {
                        name: "FATP (後段物理總裝線)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">Final Assembly, Testing & Packaging。大流水線整機拼裝。操作員扣合螢幕、主板、鎖附扭力螺絲、隨後流入自動化測試房、最後包裝封箱。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">優化各操作工位工時（Cycle Time），高頻率拉速，一網打盡色彩、音頻、射頻電性缺陷，守住出貨時程。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">測試站治具誤判率（False Alarm）嚴格掐死在 1% 以下，彩盒磅秤整箱電子秤重防錯，實現廠門之內零缺陷流出。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 高階手機防水氣密與感測器精密工序 (高端高精專用核心技術站點)",
                diagramFlowArray: [
                    {
                        name: "Leak Test (防水氣密測試)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">利用高精密氣密測試儀向密封殼體腔內注入微量高壓氣體，在不將手機扔進水裡的狀態下，動態感測氣壓漏氣偏移率。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">建立 IP68 行業黃金防水阻絕防線。透過微量形變波形快速解讀整機密封結構的物理防水完好度。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">防水防水橡膠圈（O-Ring）在結構鎖附壓合時，其物理受壓形變率剛性維持在 25%~40% 黃金壓縮比區間，防範漏氣爆倉。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "IMU Cal (慣性核心校正站)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">無人機與高階防手震手機特有工序。將機器綁定在專屬高精三軸旋轉陀螺儀動態校正治具上，開展精密動態六面翻轉。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">強行注入動態校正演算法 Image，將機器內部的加速度計、氣壓計、指南針羅盤的晶圓零偏誤差徹底「洗淨抹平」。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">死守感測器精準度。防範終端消費者拿到實物機器在戶外起飛後發生嚴重的羅盤漂移或空中失控炸機災難。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "AA Process (主動影像對位)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">Active Alignment。高階影像模組製程。利用六軸高精密度機器手臂，在鏡頭模組動態點亮點燃的狀態下，微米級微調鏡頭與 CMOS 晶片間的相對軸向角度。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">利用實時圖像演算法反饋調整，物理排除鏡片組與感光元件組裝微觀公差疊加引起的「邊緣模糊、焦點偏移」硬傷。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">實現畫面中央與四周 100% 均勻最清晰對焦解像力。此高精站點之自動化夾具與標定板光源強度必須每日剛性對位校正。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Poka-Yoke (產線防呆防錯)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">在流水線治具上加裝特定塑料防錯導向導軌、非對稱卡槽、紅外線防漏感應探頭、或軟體強制互鎖校驗鎖死程序。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">防範一線操作工因日夜班長途交接轉廠引發的生理疲勞，剛性阻絕人為發生的「排線反塞、配件漏塞、螺絲漏鎖」等低級缺陷。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">實現「愚巧化防錯」，讓錯誤的操作在物理結構上根本無法扣合成立，用硬體治具剛性托底直通率。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. 4M1E 現地查線因果排查戰術 (良率海嘯雪崩時的現地技術排查總綱)",
                diagramFlowArray: [
                    {
                        name: "Man & Machine (人员與設備排查)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">當測試良率無預警大跌時，第一時間衝往現地。檢查操作員是否違反 SOP 操作、是否剛更換新人，同時調閱起子扭力日誌與 ICT 測試針床探針磨損變形度。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">排除因「人員操作不當」或「自動化治具精度偏移、探針針床老化漏電」引發的局部測試異常。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">迅速判定病灶。若在日夜班交接（Shift Transition）時良率突變，應立即調閱交接班金件點檢日誌（Setup Verification Log）與首件檢查（FAI）數據。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Material (進料原物料追溯)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">在 ERP 品質系統中一鍵逆向調閱此批次出事機台的進料 IQC 原始報告、原廠 COA 品質檔案、與料號 Lot Number。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">清查是否在線體上遭遇了供應商特定批次的隱性材料公差缺陷，核實倉庫到線體間有無發生混料汙染。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">精準鎖定缺陷物料的波及層級，及時發動在製品（WIP）剛性隔離，防止帶病材料夾帶流入最終包裝出貨。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Method & Env (工藝軟體與環境防護)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">核對功能測試站點的測試韌體（FTM Image）版本代號是否正確，並現地動態點檢操作工的 ESD 靜電手環、靜電皮帶有無破窗失效。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">排除因「測試軟體灌錯版本引發的誤判」，以及死守無塵車間溫濕度與 ESD 防護，嚴防晶片遭遇微觀靜電擊穿擊傷。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">環境因子與工藝標準完全在控。兩小時內閉環輸出 Root Cause 技術排除分析日誌，讓拉速重新重回綠燈水位。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "FAI (首件檢查防線)",
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div class="edu-card-body-text">First Article Inspection。在每日清晨開線、白夜班交接轉廠、或線體更換 ECO 零件後的歷史第一台機器，必須強制進行整機尺寸與電性的剛性地毯式全檢。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 2. 目的 (戰術核心目標)</div>
                                    <div class="edu-card-body-text">在流水線尚未啟動大规模大量複製前，用實物樣品驗證設備狀態、鋼網對位、與程序參數的絕對正確性。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div class="edu-card-body-text">FAI 首件量測數據完全契合圖紙公差，由品保、製程工程師聯合簽字放行，大流水線方可准許開閘拉速。</div>
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
