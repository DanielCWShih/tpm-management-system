/**
 * System TPM Guild - Module Content Pack
 * 定版代碼代號: 0528-V3.2 // 淨化玄幻詞、解鎖動態流程圖數據陣列包
 */

codexCourseEngineData = [
    {
        courseId: "L1-A1", 
        menuTitle: "單元 1-1: 基礎通識世界觀模型",
        subPages: [
            {
                title: "1. 產品供應鏈定位模型",
                // 👑 核心優化：為流程圖引擎提供實體節點數據，交給外殼渲染
                diagramFlowArray: [
                    { name: "客戶研發端 (Brand R&D)", highlight: true },
                    { name: "零件廠商 (Vendors)", highlight: false },
                    { name: "代工製造廠 (EMS Factory)", highlight: false }
                ],
                text: "在硬體專案管理的世界中，運行著「三方一鏈」的實務實體化鏈條。\n\n1. 客戶端 (Client / Brand R&D)：權責包括市場調查、外觀工業設計（ID）與結構設計（ME）。其核心職責是將使用者的原始痛點與需求，量化為初始的產品規格書（PRD），並輸出 2D/3D 工程圖紙（2D Drawing）。客戶追求的是極致的美學與領先的規格。\n\n2. 零件廠商 / 供應商 (Component Vendors)：控制特定核心元件晶圓材料的技術研發端（如：相機鏡頭模組、射頻感測器、特定防水膠材）。負責提供樣品（Samples），並在大量生產時向代工廠輸送零件物料（Components）。其長料期（Lead Time）穩定度直接左右產線生死。\n\n3. 代工製造廠 (EMS Factory)：即我們（Foxconn / FIH）製造基地。接過客戶端的圖紙指令，吞下廠商的零件原料。在設備公差、操作工時與生產時程的邊界下，進行硬體實體化的大規模複製組裝。\n\n身為代工廠的 System TPM，核心任務是在試產不良發生時，發起跨部門協調，透過數據分析找出不良的根本原因（Root Cause），並在不觸動客戶外觀設計的前提下，提出內部結構修正或規格優化的解決方案，最終主導可靠性驗證（Reliability Testing），確保產品安全落地。"
            },
            {
                title: "2. NPI 四大生命週期分期",
                diagramFlowArray: [
                    { name: "Proto 原型機", highlight: false },
                    { name: "EVT 工程驗證", highlight: true },
                    { name: "DVT 設計驗證", highlight: false },
                    { name: "PVT 生產驗證", highlight: false },
                    { name: "MP 大量量產", highlight: false }
                ],
                text: "新產品導入（NPI / New Product Introduction）是指一款產品從無到有的完整研發製造生命週期。標準的硬體開發包含四大階段，每個階段都設有嚴格的出關評審基準（Exit Criteria）：\n\n1. Proto (原型機驗證)：利用 3D 列印或手工打樣製作的初級樣機，用來快速確認產品外觀與結構概念。\n\n2. EVT (Engineering Verification Test / 工程驗證測試)：核心目標是實現主機板的「通電打通（Power-on）」。確認基本電路與硬體功能正常，除錯接口（Debug Interface）能順利抓到訊號。\n\n3. DVT (Design Verification Test / 設計驗證測試)：此時量產模具正式開模（Hard Tooling）。產品必須組裝完整，並接受最嚴苛的信賴性與可靠性拷問 ── 包括摔落測試（Drop Test）、高低溫環境衝擊、防水氣密測試（Leak Test）等。\n\n4. PVT (Production Verification Test / 生產驗證測試)：設計圖紙全面凍結（Freeze）。重心完全轉移到工廠，目的在於測試產線的每小時產能速率（UPH）、治具複製能力、操作工位線平衡（Line Balance），確保工廠具備大量複製的製程能力。\n\n5. MP (Mass Production / 大量量產)：正式大量生產並流入市場。\n\n⚠️ 智慧型手機產業現實壓縮：\n在手機業務中，試產週期被極限壓縮至 6 到 9 個月。哪怕是 Proto 階段，我們也被迫要一邊通電跑訊號，一邊開Hard Tooling鋼模進行機構驗證。EVT 與 DVT 階段發生大面積「平行重疊（Overlap）」，這是必須面對的修羅場。"
            },
            {
                title: "3. 通用硬體與手機組裝工序流向",
                diagramFlowArray: [
                    { name: "PCBA 主板製程", highlight: false },
                    { name: "SUB 次級預組線", highlight: false },
                    { name: "CG/BG 真空壓合", highlight: true },
                    { name: "Final Assembly 總裝", highlight: false },
                    { name: "Final Test 最終測試", highlight: false }
                ],
                text: "硬體產品的架構不同，決定了工廠流水線不同的組裝與測試工序流向（Process Flow / Route）。System TPM 必須先看懂該產品別的生產線結構，才能在產線現場精準定位瓶頸工位。\n\n1. 通用硬體四大線體 (Generic Flow)\n- 主板站（PCBA Process）：在無塵車間進行鋼網錫膏印刷、高速貼片機元件拍打，最後過迴流焊熔爐（Reflow Oven），鑄造出產品「大腦」。\n- 組裝站（Assembly Line）：將主板、外殼、螢幕、排線與防護螺絲拼裝成一個實體機身。\n- 測試站（Test Station）：將機器插入自動化測試治具，強行檢驗其螢幕、喇叭、Wifi 訊號等功能。\n- 包裝站（Packaging）：套上防塵膜、塞入彩盒與配件，最後裝箱封膠出貨。\n\n2. 高階手機微縮精細線體 (Smartphone Flow)\n手機為了在極小空間塞入最多功能，線體被精細拆解為：SMT 主板製程 ─> SUB 次級預組線 ─> CG/BG 玻璃蓋板真空防水壓合 ─> Final Assembly 最終組裝線 ─> Final Test 最終功能與射頻天線測試 ─> Packing 外盒包裝出貨。"
            },
            {
                title: "4. 智慧無人機機電共生線體",
                diagramFlowArray: [
                    { name: "SMT 主控與電調焊接", highlight: false },
                    { name: "SUB 動力手臂預組", highlight: false },
                    { name: "Final Assembly 機電總裝", highlight: false },
                    { name: "IMU 感測器動態校正", highlight: true },
                    { name: "Packing 安全防震包裝", highlight: false }
                ],
                text: "無人機等物聯網（IoT）裝置屬於多軸飛行器，其工序流向充滿了動力機械與無線通訊的交織，與手機有著根本上的差異：\n\n1. SMT 製程：除了飛控大腦，還需要焊接 ESC（Electronic Speed Controller / 電子調速器，俗稱電調板），用來控制馬達的高頻電流。\n\n2. SUB 動力預組線：副線開火，將高轉速無刷馬達（Brushless Motor）與碳纖維機臂預先拼裝焊接。\n\n3. Final Assembly 機電總裝線：將動力機臂固定上無人機主骨架，並嵌入三軸機械雲台（Gimbal）與鏡頭模組。這一步涉及大量的精密排線防水密封工藝。\n\n4. Final Test 感測器動態校正站：無人機不上傳統流水線測試，而是固定在專屬的三軸旋轉治具上，進行 IMU（Inertial Measurement Unit / 慣性測量單元、包含陀螺儀與加速度計）與電子羅盤的「動態六面翻轉校正（Calibration）」，確保它升空後不會失控炸機。\n\n5. Packing 包裝站：由於主機體積大且有高能量鋰電池，採用巨大的防震泡棉內托進行安全保護包裝。"
            }
        ],
        examVault: [
            { q: "當零件廠商突然突發長料期（Lead Time）晶片斷線，直接衝擊工廠試產進度，代工廠 TPM 第一動是？", o: ["要求客戶修改 ID 外觀設計圖紙封死空間", "發起跨部門協調、清查 Common Pool 資源，並進行二線備料可製造性評估", "坐在辦公室等工廠自行處理通報"], a: 1 },
            { q: "工廠回報最終入庫良率高達 99%，但直通率（FPY）只有 30%，這代表什麼工程警訊？", o: ["產品品質極其良好，製程非常健康", "超過三分之二的機器被手工拆解重修過，帶有隱形物理內傷，極易發生開箱即損（DOA）", "可以直接開閘放水進入 MP 大量量產生產"], a: 1 },
            { q: "在何種 NPI 里程碑生命週期，TPM 必須強制拦截專案，要求 ME 進行極限公差疊加分析以防 Hard Tooling 模具報廢？", o: ["MP 大量生產出貨階段", "EVT 工程驗證結束、準備開模進入 DVT 前", "最初的產品 PRD 市場調研階段"], a: 1 },
            { q: "在 DVT 階段進行氣密測試（Leak Test）時特定角落連續漏氣，ME 說是工廠膠水問題，TPM 該如何主導技術拆彈？", o: ["開單懲罰工廠點膠站員工", "利用千分尺精密量測組裝間隙，安排鎖附扭力對比與膠路寬度微調的 DOE 實驗驗證", "直接向客戶提議將防水規格從 IPX8 降到 IPX4"], a: 1 },
            { q: "客戶 ID 為了美學堅持做出銳利無拔模角外殼，工廠警告開模會發生嚴重縮水痕，代工廠 TPM 應？", o: ["全盤聽從 ID，良率與模具損壞隨便工廠去死", "在不觸動客戶 ID 外觀的前提下，從內部結構與肉厚微調提出建議，並優化噴砂工藝以遮蓋收縮痕", "直接跟客戶吵架並強行取消該專案"], a: 1 },
            { q: "主機板過完迴流焊熔爐（Reflow Oven）後，AOI 光學天眼集體回報晶片偏移與虛焊，這屬於哪一站的製程異常？", o: ["FATP 後段組裝線站", "SMT 前段焊接製程流水線站", "後段包裝 Packing 站"], a: 1 },
            { q: "在 PVT 階段，產線主管抱怨某一測試工位的操作時間（Cycle Time）過長引發瓶頸，這直接摧毀了什麼？", o: ["客戶的 PRD 產品規格定義", "流水線的線平衡率（Line Balance）與每小時產能產速（UPH）", "CMF 表面處理視覺貼圖"], a: 1 },
            { q: "天線工程師與結構 ME 為了 0.2mm 的 clearance 防護間距在會議上僵持不下，TPM 的技術本質是？", o: ["作為傳話筒，將兩邊吵架的字句如實發出會議記錄", "調閱決策代償矩陣（Trade-off Matrix），主導跨功能技術仲裁以逼出工程妥協點", "叫兩邊去走廊打架，贏的人說了算"], a: 1 },
            { q: "產品在凡間市場發生開箱即損（DOA）故障率超標，客退品應送往何處進行屍檢剖析？", o: ["產品市場調研部", "早期失效分析中繼站 (EFFA / DOA Autopsy Line)", "直接扔回 SMT 熔爐重新過火"], a: 1 },
            { q: "什麼指標是用來量產前評估工廠流水線對特定公差尺寸的「製程能力指數」？", o: ["BOM Cost 成本清冊", "Cpk 能力指數", "PRD 需求文件"], a: 1 },
            { q: "在 SMT 前段製程中，架設在鋼網錫膏印刷機後方、用來攔截錫膏印偏或厚度不均的關鍵 3D 量測設備是？", o: ["AOI 自動光學檢測儀", "SPI 錫膏檢查儀", "X-Ray 射線斷層掃描"], a: 1 },
            { q: "防水橡膠圈（O-Ring）在結構鎖附壓合時，其物理受壓形變率必須嚴格維持在多少黃金區間？", o: ["1% ~ 5% 極微形變", "25% ~ 40% 黃金壓縮比", "90% ~ 100% 徹底擠壓"], a: 1 },
            { q: "高階相機模組為了排除微米級組裝公差，在點亮動態下利用六軸機器手臂微調至最清晰交點的製程叫？", o: ["ICT 電路針床測試", "AA 主動對位技術 (Active Alignment)", "表面陽極氧化化學工藝"], a: 1 },
            { q: "各國強制的通訊協議與電磁輻射法規認證（如 FCC、CE），在 NPI 架構中屬於？", o: ["EMS Factory 代工製造廠範疇", "太古聖堂 (國家運營商與法規界防線)", "人才資源 Common Pool"], a: 1 },
            { q: "在 EVT（工程驗證生命週期）階段，研發與電子團隊的核心攻堅指標是什麼？", o: ["實現電路原理圖與 PCB Layout 的首版通電打通（Power-on）", "大量複製一萬台量產裝置以確認生產線速率", "設計彩盒外包裝與說明書"], a: 0 },
            { q: "當專案進度正式跨入 PVT 階段時，代表以下何種硬體狀態已經發生？", o: ["產品還在進行最初步的市場概念調研", "研發設計檔案全面凍結（Freeze），重心全力轉移至工廠量產能力複製與拉速", "外殼噴砂顆粒度與材質尚未決定"], a: 1 },
            { q: "金屬鋁合金外殼表面為了防刮、抗氧化且吸附裝飾色彩而進行的電化學工藝叫？", o: ["Reflow 迴流焊工藝", "Anodization (陽極氧化工藝)", "Dispensing 點膠製程"], a: 1 },
            { q: "BOM Cost 在專案控管與財務審查中是指什麼？", o: ["代工廠試產線的開火電費", "物料清單清冊硬體總成本", "技術專案經理的加班費"], a: 1 },
            { q: "專案完成大量配合生產（MP）開閘出貨後，TPM 必須將本次戰役的經驗凝結成什麼文件傳送回大圖書館？", o: ["PRD 產品規格書", "Lessons Learned (歷史經驗教訓與血淚戰役史詩)", "CAD 3D 元件原始模型"], a: 1 },
            { q: "若新人在本堂 1-1 大考位階考核中答對率低於 60%（Fail），系統的剛性法則是？", o: ["自動放水算他過關", "不給予點亮通關認證，系統執行強退回溯，逼迫重新研讀教材重考", "發放黃金勳章卡片"], a: 1 }
        ]
    }
];
