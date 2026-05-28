/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-05-28 V4.1: 👑 數據層重大改組：將原本堆疊的通篇內文拆解解耦，注入 diagramFlowArray 的各個獨立節點 text 屬性中，供外殼進行點擊式分步抽換。全量展開，嚴禁省略。
2026-05-28 V4.0: 全域同步內部多維互動子矩陣分流數據結構，禁止一行流縮寫。
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
                        text: "【1. 客戶研發端 (Client / Brand R&D)】\n\n主導新產品的概念發想與市場調研。權責完全涵蓋產品最初的外觀工業設計（ID）與內部硬體結構設計（ME）。其核心職責是將凡間使用者的原始痛點與欲望數據，精準量化為最初始的「產品規格書（PRD）」，並輸出神聖的 2D/3D 工程圖紙（2D Drawing）。客戶端追求的是極致的美學設計、品牌溢價與市場領先的技術參數防線。" 
                    },
                    { 
                        name: "零件廠商 (Vendors)", 
                        highlight: false,
                        text: "【2. 零件廠商 / 供應商 (Component Vendors)】\n\n控制特定核心元件晶圓材料的技術研發端（例如：晶片晶圓廠、相機鏡頭模組廠、射頻感測器廠、特定防水點膠膠材廠）。負責向代工廠提供初期驗證樣品（Samples），並在專案跨入大量生產（MP）時，向代工廠輸送零件原料物料（Components）。零件廠的「長料期（Lead Time）」穩定度與產能高低，直接左右整條生產線的生死存亡。" 
                    },
                    { 
                        name: "代工製造廠 (EMS Factory)", 
                        highlight: false,
                        text: "【3. 代工製造廠 (EMS Factory / Foxconn / FIH)】\n\n即我們的製造基地。接過客戶端輸出的工程圖紙指令，吞下供應商輸送過來的零件原料。在極限的設備公差疊加、操作工位工時上限與產線拉速時程的邊界下，進行硬體實體化的大規模複製組裝。\n\n身為代工廠的 System TPM，核心任務是在試產不良發生時，發起跨部門協調，透過數據分析找出不良的根本原因（Root Cause），並在不觸動客戶端外觀設計的前提下，提出內部結構修正或規格優化的代償解決方案，最終主導信賴性可靠性驗證（Reliability Testing），確保產品安全落地。" 
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
                                text: "【Proto (原型機驗證階段)】\n\n利用 3D 列印或手工快速打樣製作的初級樣機。此階段研發圖紙尚未成形，核心目的在於快速確認產品的微觀外觀美學比例、結構概念是否可行，進行物理堆疊（Stack-up）的微觀檢視。" 
                            },
                            { 
                                name: "EVT 工程驗證", 
                                highlight: true,
                                text: "【EVT (Engineering Verification Test / 工程驗證測試)】\n\n研發設計的首版實體化。核心目標是實現主機板的「首版通電打通（Power-on）」。確認基本電路系統、訊號流向完整，各項核心硬體功能正常，且除錯接口（Debug Interface）能順利抓到工程訊號。" 
                            },
                            { 
                                name: "DVT 設計驗證", 
                                highlight: false,
                                text: "
