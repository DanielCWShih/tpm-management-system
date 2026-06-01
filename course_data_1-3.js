/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V6.7: 👑 滿版教科書合流優化版。更正時間。配合外殼 70% 縮放與無 Canvas 長文引擎，將 SMT、Assembly、Test、Packaging 以及 4M1E 現場查線全面釋放。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A3", 
        menuTitle: "1-3: 工廠地理與 4M1E 線體通識",
        subPages: [
            {
                title: "1. 地理導航與通用四大線體",
                diagramFlowArray: [
                    { 
                        name: "PCBA 主板製程", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">在高度潔淨的無塵車間進行。通過自動化鋼網網印錫膏、3D 錫膏檢查儀（SPI）量測、高速貼片機精準拍打晶片，最後送入迴流焊熔爐（Reflow Oven）進行化學熔焊。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">將數百個微米級被動元件與大腦 CPU 鎖死在 PCB 裸板上，鑄造出核心主機板 PCBA，死守第一道製程天眼良率。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">過完迴流焊熔爐後電路 100% 完美焊接打通。BGA 焊點內部零氣泡、零虛銲、零浮起，徹底杜絕隱形物理內傷。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【SPI 錫膏厚度檢查】：3D 錫膏厚度檢驗儀。在貼片元件前攔截漏印、印歪、刮錫，是 SMT 最具代價效益的攔截點。')"><span>🔍 SPI 錫膏厚度檢驗</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【Reflow 迴流熔爐】：利用高溫控制曲線（Profile）將錫膏液化、化學熔焊。必須定時架設測溫線（Profiler）進爐實測，防止局部冷銲。')"><span>🔍 迴流焊爐溫 Profile</span><span>➔</span></button>
                                </div>
                                <div class="dict-display-box"></div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策大沙盒</div>
                                <div style="font-size:0.82rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>產線突發修羅場：</strong>SMT 過完爐後，AOI 光學天眼集體回報晶片引腳爆發大面積虛焊（Solder Skip），工廠主管堅持是 EE 板材散熱過快，要求停線修改 Layout，你應？</div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：研發周期失鎖！</strong><br>你盲目聽信改圖。結果重過 Layout 耗費兩週，工廠大模具晾在現場，生產排程全盤垮台，被客戶當場編錄發配邊疆！')">方案 A：相信工廠，開單攔截專案並退回給 EE 重新修改 Layout 圖紙。</button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：鐵血實證，2小時滿血復活！</strong><br>你剛性調閱爐溫曲線！發動溫測線實測，鐵證證實是工廠熔爐第三溫區加熱速度漂移。下令工廠 2 小時內重調爐溫，良率瞬間滿血回復 99.5%！')">方案 B：鐵血卡死產線！勒令工廠工程師架設溫測線進爐，實測熔爐真實 Profile 曲線。</button>
                                </div>
                                <div class="sandbox-fallout-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "Assembly 組裝線", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">將 PCBA 送往大流水線（FATP 後段總裝）。由操作工與氣動手臂協作，將外殼骨架、螢幕、大鋰電池、排線進行實體化總裝。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">人機極高契合度協作，以極致優化的 Cycle Time（作業工時）將各個硬體模組拼裝，建立宏觀整機機身，拼搶拉速。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">排線扣合緊密，螺絲鎖附扭力（Torque）高精準對位，不發生內部物理應力擠壓。外觀無縫隙，消滅劃痕瑕疵。</div>
                                </div>
                            </div>
                        `
                    },
                    { 
                        name: "Test 功能測試站", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">整機流入全密封自動化屏蔽測試房（Chamber）與自動化測試治具（ICT/FCT），強行通電強行注入工程測試除錯軟體。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">毫米級動態檢驗整機螢幕色彩、喇叭音頻阻抗、Wifi/藍牙無線天線射頻（RF）與核心傳感器是否完全合格，發起第一道攔截。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">將治具誤判率（False Alarm）控制在剛性標準 1% 以下。一網打盡所有硬體電性缺陷，絕不放過任何一台瑕疵機流入市場。</div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策大沙盒</div>
                                <div style="font-size:0.82rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>產線突發修羅場：</strong>功能測試站突然集體拋出 Wifi 天線射頻失敗（Fail），工廠大喊設計垮台、強烈要求全面停線，你該如何拆彈？</div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：被專家數據打臉，顏面掃地！</strong><br>你相信工廠大喊。結果被客戶射頻專家調閱數據當場打臉，證實是工廠治具沒校正，專業度淪為公會笑柄！')">方案 A：相信工廠直覺，立刻在系統發出紅燈停線通報，並要求研發進行技術改圖。</button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：天眼破案！抓出治具漏電！</strong><br>你物理點亮黃金母板，發現同樣報 Fail！這鐵證證實天線沒壞，而是測試房內部的射頻纜線（RF Cable）磨損漏電。更換纜線瞬間滿血拉速！')">方案 B：強制調用 Golden Board（黃金標準母板）送入治具開展對比校正測試。</button>
                                </div>
                                <div class="sandbox-fallout-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "Packaging 包裝線", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">完全通關功能測試的健康裝置流入此處。人工撕去保護膜、塞入彩盒、說明書、充電頭附件，送入克（g）級電子磅秤。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">建立最後一道外觀品質門戶。向晶圓大腦晶片內剛性燒錄全球唯一的通訊身分證 ── IMEI 碼，並開展整箱秤重防錯。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">100% 零漏塞、零錯附件物料封膠出貨。所有標籤貼紙條碼對位精準，包裝良率穩穩綠燈流入實體市場。</div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策大沙盒</div>
                                <div style="font-size:0.82rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>產線突發修羅場：</strong>包裝秤重磅秤站突然發出連續警報，自動化擊落了 5 箱成品，顯示整體物理重量比標準少了 12 克，你第一移動是？</div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：大面積退貨，商譽重創！</strong><br>你盲目調高磅秤公差。結果產品運到凡間後被消費者集體投訴爆發：彩盒內竟然沒有說明書與退卡針！')">方案 A：認為是磅秤傳感器微小偏移，直接在系統調高公差容忍值，放行出貨。</button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：攔截附件失誤，死守出貨防線！</strong><br>你現場卡死、物理開箱屍檢！抓到是副線操作工漏塞了剛性說明書。當場勒令補齊並徹底清查前段，成功將外觀物料疏漏攔截在廠門之內！')">方案 B：剛性卡死開閘通訊！勒令這 5 箱機器原地退單，發動實體開箱開盒屍檢。 </button>
                                </div>
                                <div class="sandbox-fallout-box"></div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 手機/無人機高精專用線",
                diagramFlowArray: [
                    { 
                        name: "防水真空壓合", 
                        text: `<div class="edu-overview-container"><div class="edu-overview-card"><div class="edu-card-label">📱 高階手機製程</div><div class="edu-card-body-text">多軸精密自動點膠機噴塗防水膠路，並送入真空治具高壓密合。建立 IP68 黃金氣密測試（Leak Test）防線，確保形變率剛性維持在 25%~40% 黃金壓縮比。</div></div></div>`
                    },
                    { 
                        name: "IMU 感測器校正", 
                        text: `<div class="edu-overview-container"><div class="edu-overview-card"><div class="edu-card-label">🛸 智慧無人機核心站</div><div class="edu-card-body-text">專屬三軸旋轉陀螺儀動態治具校正。對加速度計、指南針進行『動態六面翻轉校正（Calibration）』，將感測器零偏洗淨，防範升空漂移炸機。</div></div></div>`
                    }
                ]
            },
            {
                title: "3. 4M1E 現場查線戰術",
                diagramFlowArray: [
                    { 
                        name: "4M1E 總綱點檢", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🔍 Man 人員動態</div>
                                    <div class="edu-card-body-text">作業員是否嚴格遵循 SOP？線體有無剛經歷日夜班交接轉廠（Shift Transition）？操作工是否剛換新人上崗？</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🔍 Machine 設備治具</div>
                                    <div class="edu-card-body-text">測試針床 ICT 的探針是否磨損變形？電動螺絲刀的鎖附扭力（Torque）是否每日校正？氣壓管道壓力是否穩定？</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🔍 Material / Method / Env</div>
                                    <div class="edu-card-body-text">全面追蹤进料 IQC 原始報告與物料批號（Lot Number），核對供應商出廠 COA；點檢測試軟體版本與無塵室 ESD 靜電環防護。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "在 SMT 製程中，架設在鋼網錫膏印刷機正後方、用來在過爐前及時攔截錫膏印偏或厚度不均的 3D 量測設備是？", o: ["AOI 自動光學檢測儀", "SPI 錫膏檢查儀", "X-Ray 射線斷層掃描儀"], a: 1 },
            { q: "在組裝與自動化線體中，為了防止操作工因手法疲勞而將排線塞反或漏裝附件，在線體上加裝的塑料防錯導向結構治具被稱作？", o: ["Poka-Yoke 防呆機制", "BOM Cost 物料清單", "Reflow 溫度熔爐"], a: 0 },
            { q: "高階相機或影像模組為了排除微米級組裝公差，在點亮動態下利用六軸機器手臂微調至最清晰焦點的精密製程工藝叫？", o: ["ICT 電路針床測試技術", "AA 主動對位技術 (Active Alignment)", "表面陽極氧化化學皮層工藝"], a: 1 },
            { q: "4M1E 現場查線戰術考核中，核心通識點檢矩陣不包含以下哪一項？", o: ["Machine 設備治具與扭力校正", "Economic 專案開發經濟財政預算", "Environment 無塵室 ESD 靜電防護與溫濕度"], a: 1 },
            { q: "智慧無人機在 FATP 線體總裝完畢後，為防止升空飛行後發生嚴重的羅盤漂移或炸機災難，必須強制架設哪一個特有測試站工位？", o: ["ICT 主板電路漏電針床站", "IMU 慣性核心動態六面翻轉校正站 (Calibration)", "包裝 Packing 秤重防錯站"], a: 1 },
            { q: "在 SMT 製程中，若迴流焊熔爐的溫度焊接曲線因厚銅板散熱過快導致升溫不足，主板元件最容易爆發何種微觀銲接缺陷？", o: ["元件外殼表面嚴重燒焦痕跡", "冷銲、虛銲與假銲 (Cold Solder / Pseudo Solder) 引發後期電路斷線", "主板 PCB 發生大面積碳化收縮"], a: 1 },
            { q: "流水線在日夜班交接轉廠（Shift Transition）時，良率突然無預警雪崩下跌 40%，TPM 趕往現場第一時間應調閱什麼？", o: ["當班的生產 UPH 產速報表", "交接班金件點檢日誌（Setup Verification Log）與首件檢查（FAI）數據", "採購部門的 BOM 報價單"], a: 1 },
            { q: "自動化測試治具的誤判率 (False Alarm) 若飆高到 15% 以上，會引發何種製程災難？", o: ["引發工廠後段瘋狂拆解重工，人為污損破壞硬體元件，直通率與毛利垮台", "提高產品在凡間實體市場的品牌溢價防線", "直接導致原件出廠的 Lead Time 縮短"], a: 0 },
            { q: "防水橡膠圈（O-Ring）在結構鎖附壓合時，其物理受壓形變率必須剛性維持在多少黃金區間，方能死守 IP68 氣密測試？", o: ["1% ~ 5% 極微形變區間", "25% ~ 40% 黃金壓縮比區間", "90% ~ 100% 徹底擠扁擠碎區間"], a: 1 },
            { q: "包裝線 FATP 包裝磅秤站連續擊落 5 箱成品，顯示整體重量少了 12 克，TPM 應下達何種現地技術決斷？", o: ["直接調高磅秤公差放行出貨", "勒令這 5 箱機器原地退單，發動實體開箱開盒屍檢，攔截漏塞說明書等組件疏漏", "開除摔落測試站的操作工"], a: 1 }
        ]
    }
];

(function() {
    if (!window.codexCourseEngineData || window.codexCourseEngineData.length === 0) return;
    const vault = window.codexCourseEngineData[0].examVault;
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
    window.codexCourseEngineData[0].examVault = vault.slice(0, 3);
})();
