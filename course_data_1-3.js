/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-29 V6.0: 👑 子單元 1-3 滿血全量版。專注於「工廠地理與 4M1E 線體通識」。全面導入「會做什麼、核心目標、終極期待」三維戰術矩陣。10 題核心庫經由 Fisher-Yates 洗牌引擎動態 Slice(0,3) 進行微學習抽題。
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
                                    <div class="edu-card-body-text">通過網印錫膏、SPI 檢測、高速貼片機將晶片打入主板並送入迴流焊熔爐。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">在毫秒間將晶片精確固化銲接在 PCB 裸板上，打造核心 PCBA。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">過爐後電路 100% 焊接打通，BGA 內部零氣泡、零空焊。</div>
                                </div>
                            </div>
                            <button onclick="showTacticalDict('【SPI 與 AOI 防線】：SPI 在過爐前攔截錫膏印偏；AOI 在過爐後攔截晶片虛焊與錫橋短路。')">🔍 解鎖戰術細節</button>
                        `
                    },
                    { 
                        name: "Assembly 組裝線", 
                        text: `<div class="edu-overview-card"><strong>會做什麼：</strong>大流水線整機物理拼裝。操作員與手臂協作將外殼、主板、螢幕與排線緊密鎖附。<strong>核心目標：</strong>優化操作 Cycle Time，防範螺絲鎖附滑牙與內部應力干涉。</div>`
                    },
                    { 
                        name: "Test 功能測試站", 
                        text: `<div class="edu-overview-card"><strong>會做什麼：</strong>自動化硬體功能屏蔽測試（ICT/FCT）。強行注入測試韌體。<strong>核心目標：</strong>一網打盡色彩、音頻、Wifi射頻參數缺陷，誤判率剛性掐死在 1% 以下。</div>`
                    },
                    { 
                        name: "Packaging 包裝線", 
                        text: `<div class="edu-overview-card"><strong>會做什麼：</strong>彩盒附件總裝、燒錄 IMEI 碼與封箱出貨。<strong>核心目標：</strong>透過克級磅秤進行最後整箱秤重防錯，嚴防漏塞任何配件。</div>`
                    }
                ]
            },
            {
                title: "2. 手機/無人機高精專用線",
                diagramFlowArray: [
                    { 
                        name: "防水真空壓合", 
                        text: `<div class="edu-overview-card"><strong>高階手機製程：</strong>多軸精密自動點膠機噴塗防水膠路，並送入真空治具高壓密合。建立 IP68 黃金氣密測試（Leak Test）防線，確保形變率剛性維持在 25%~40% 黃金壓縮比。</div>`
                    },
                    { 
                        name: "雲台機電總裝", 
                        text: `<div class="edu-overview-card"><strong>智慧無人機工序：</strong>手臂骨架扣合與精密三軸雲台機械手工拼裝。保證動力大電流 ESC 電子調速器焊接熱應力釋放，抗震襯墊安裝到位。</div>`
                    },
                    { 
                        name: "IMU 感測器校正", 
                        text: `<div class="edu-overview-card"><strong>無人機核心站：</strong>專屬三軸旋轉陀螺儀動態治具校正。對加速度計、指南針進行『動態六面翻轉校正（Calibration）』，將感測器零偏洗淨，防範升空漂移炸機。</div>`
                    }
                ]
            },
            {
                title: "3. 4M1E 現場查線戰術",
                diagramFlowArray: [
                    { 
                        name: "Man 人員動態", 
                        text: `<div class="edu-overview-card"><strong>點檢方針：</strong>作業員是否嚴格遵循 SOP？線體有無剛經歷日夜班交接轉廠（Shift Transition）？操作工是否剛換新人上崗？</div>`
                    },
                    { 
                        name: "Machine 設備治具", 
                        text: `<div class="edu-overview-card"><strong>點檢方針：</strong>測試針床 ICT 的探針是否磨損變形？電動螺絲刀的鎖附扭力（Torque）是否每日校正？氣壓管道壓力是否穩定？</div>`
                    },
                    { 
                        name: "Material 物料批號", 
                        text: `<div class="edu-overview-card"><strong>點檢方針：</strong>全面追蹤進料 IQC 原始報告與物料批號（Lot Number），核對供應商出廠 COA，嚴查線體有無發生混料汙染。</div>`
                    },
                    { 
                        name: "Method / Env 環境方法", 
                        text: `<div class="edu-overview-card"><strong>點檢方針：</strong>測試站軟體版本（FTM Image）是否正確？打螺絲順序是否對位？無塵室溫濕度與 ESD 靜電環落實度有無破窗？</div>`
                    }
                ]
            }
        ],
        examVault: [
            { q: "在 SMT 貼片製程中，架設在鋼網錫膏印刷機正後方、用來在過爐前及時攔截錫膏印偏或厚度不均的 3D 量測設備是？", o: ["AOI 自動光學檢測儀", "SPI 錫膏檢查儀", "X-Ray 射線斷層掃描儀"], a: 1 },
            { q: "在組裝與自動化線體中，為了防止操作工因手法疲勞而將排線塞反或漏裝附件，在線體上加裝的塑料防錯導向結構治具被稱作？", o: ["Poka-Yoke 防呆機制", "BOM Cost 物料清單", "Reflow 溫度熔爐"], a: 0 },
            { q: "高階相機或影像模組為了排除微米級組裝公差，在點亮動態下利用六軸機器手臂微調至最清晰焦點的精密製程工藝叫？", o: ["ICT 電路針床測試技術", "AA 主動對位技術 (Active Alignment)", "表面陽極氧化化學皮層工藝"], a: 1 },
            { q: "4M1E 現場查線戰術考核中，核心通識矩陣不包含以下哪一項？", o: ["Machine 設備治具與扭力校正", "Economic 專案開發經濟財政預算", "Environment 無塵室 ESD 靜電防護與溫濕度"], a: 1 },
            { q: "智慧無人機在 FATP 線體總裝完畢後，為防止升空飛行後發生嚴重的羅盤漂移或炸機災難，必須強制架設哪一個特有測試站工位？", o: ["ICT 主板電路漏電針床站", "IMU 慣性核心動態六面翻轉校正站 (Calibration)", "包裝 Packing 秤重防錯站"], a: 1 },
            { q: "在 SMT 製程中，若迴流焊熔爐的溫度焊接曲線（Profile）因厚銅板散熱過快導致升溫不足，主板元件最容易爆發何種微觀銲接缺陷？", o: ["元件外殼表面嚴重燒焦痕跡", "冷銲、虛銲與假銲 (Cold Solder / Pseudo Solder) 引發後期電路斷線", "主板 PCB 發生大面積碳化收縮"], a: 1 },
            { q: "流水線在日夜班交接轉廠（Shift Transition）時，良率突然無預警雪崩下跌 40%，TPM 趕往現場第一時間應調閱什麼？", o: ["當班的生產 UPH 產速報表", "交接班金件點檢日誌（Setup Verification Log）與首件檢查（FAI）數據", "採購部門的 BOM 報價單"], a: 1 },
            { q: "自動化測試治具的誤判率 (False Alarm) 若飆高到 15% 以上，會引發何種製程災難？", o: ["引發工廠後段瘋狂拆解重工，人為污損破壞硬體元件，直通率與毛利垮台", "提高產品在市場的定價防線", "直接導致產品的長料期交貨時程縮短"], a: 0 },
            { q: "防水橡膠圈（O-Ring）在結構鎖附壓合時，其物理受壓形變率必須剛性維持在多少黃金區間，方能死守 IP68 氣密測試？", o: ["1% ~ 5% 極微形變區間", "25% ~ 40% 黃金壓縮比區間", "90% ~ 100% 徹底擠扁擠碎區間"], a: 1 },
            { q: "包裝線 FATP 包裝磅秤站連續擊落 5 箱成品，顯示整體重量少了 12 克，TPM 應下達何種現地技術決斷？", o: ["直接調高磅秤公差放行出貨", "勒令這 5 箱機器原地退單，發動實體開箱開盒屍檢，拦截漏塞說明書等組件疏漏", "開除摔落測試站的操作工"], a: 1 }
        ]
    }
];

// 👑 Fisher-Yates 抽題引擎：10 抽 3 👑
(function() {
    const v = window.codexCourseEngineData[0].examVault;
    for (let i = v.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [v[i], v[j]] = [v[j], v[i]];
    }
    window.codexCourseEngineData[0].examVault = v.slice(0, 3);
})();
