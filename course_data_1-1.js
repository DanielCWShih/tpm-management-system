/* ========================================================================
DATA PACK: course_data_1-1.js
========================================================================
REVISION HISTORY / VERSION LOG
2026-06-02 V2.60-HOTFIX: 👑 絕殺全域命名衝突之萬能相容完全體（封牌版）。
1. 隔離裝甲導入：全量改採 IIFE 閉包封裝，徹底根除「Identifier has already been declared」流產 Bug。
2. 數據全量回歸：100% 拒絕裁剪，完整保留 Page 1~4 的 21 個硬核戰術關鍵詞與說明。
3. 變更精確咬合：OQC 更名完畢、Pin-to-Pin 實體絕殺、工廠端 IQC 尺寸與測站同步化重砲擴寫。
========================================================================
*/

(function() {
  // 📥 將數據鎖定在封閉區域環境中，防止污染瀏覽器全域記憶體
  var PACK_INTERNAL_PAYLOAD = [
    // ─── 🗺️ PAGE 1 / 4: 大廳導讀 ───
    {
      pageTitle: "1. 核心大廳導讀：硬體世界的權力對位",
      tabs: [
        {
          tabName: "戰術導讀",
          what: "主導並梳理品牌客戶廠（Brand）、元件供應商（Vendor）與代工製造廠（EMS）三方在高頻專案排產與量產中的利益糾葛與賽局關係。",
          purpose: "徹底打破單一職能的盲人摸象視角，建立系統級 TPM 大局觀，透視各端在品質、成本、交期上的核心底線與談判籌碼。",
          expectation: "期待學員不再盲目看盤，在未來產線開線、發生突發流產時，能秒速抓出是哪一方的圖面、公差或物料呆料在引發產線癱瘓，並給出代償方案。",
          keywords: [
            { 
              name: "三方賽局", 
              fullName: "Three-Party Game Theory", 
              meaning: "硬體開發中品牌、元件廠、代工廠之間，基於技術實力、採購總量與產能分配進行的動態利益博弈與權力平衡。" 
            },
            { 
              name: "TPM 大局觀", 
              fullName: "Technical Project Management Overview", 
              meaning: "跨越純技術與純專案管理的綜合視野，能同時看懂研發圖面公差、供應鏈交期風險與工廠線體直通率的核心大腦。" 
            }
          ]
        }
      ]
    },

    // ─── 📱 PAGE 2 / 4: 客戶研發端 (Brand R&D) ───
    {
      pageTitle: "2. 客戶研發端 (Brand R&D - 主導產品規格與美學定義)",
      tabs: [
        {
          tabName: "PRD (產品規格)",
          what: "主導全球市場與競品技術調研，定義硬體核心技術參數，發佈專案全局技術規格需求書 (PRD)。",
          purpose: "追求極致的硬體功能參數與技術指標，用獨家技術專利與規格護城河，拉高市售機台之品牌溢價與市場佔有率。",
          expectation: "期待代工廠（EMS）產線能 100% 完美復刻複雜結構與電路，在製程良率上全力配合，不接受任何組裝公差導致的功能妥協。",
          keywords: [
            { 
              name: "PRD", 
              fullName: "Product Requirement Document", 
              meaning: "產品規格需求書。由品牌端擊發的技術聖經，定義了產品的全局技術規格、市場定位、目標售價以及功能底線。" 
            },
            { 
              name: "DFM 審查", 
              fullName: "Design for Manufacturing", 
              meaning: "製造導向設計審查。在開模前由代工廠清查線體組裝極限，防止研發端設計出無法量產的短路或結構死鎖。" 
            },
            { 
              name: "Spec Freeze", 
              fullName: "Specification Freeze", 
              meaning: "規格/設計凍結。硬體生命週期中神聖的里程碑，此後任何 BOM 表變更都必須走極嚴格的變更審查會（CCB）審批。" 
            },
            { 
              name: "AQL 基準", 
              fullName: "Acceptable Quality Level", 
              meaning: "驗收抽樣合格標準。品質檢驗時買賣雙方商定的最高可接受瑕疵概率，是工廠拒收退貨的剛性底線。" 
            }
          ]
        },
        {
          tabName: "ID (外觀美學)",
          what: "主導產品的工業造型、線條比例、幾何曲面與極致的視覺張力，決定產品第一眼的美學靈魂。",
          purpose: "打造無可挑剔的視覺賣點與品牌高定辨識度，激發消費者的購買慾望，維護品牌高端形象。",
          expectation: "要求產線在實體總裝時，外殼交接處的段差與縫隙控制必須達到極致零瑕疵，嚴防視覺參差不齊。",
          keywords: [
            { 
              name: "ID 造型", 
              fullName: "Industrial Design Identity", 
              meaning: "工業設計特徵。追求極致的線條與視覺衝擊，通常是引發後續結構工程師與工廠線體大打出手的源頭。" 
            },
            { 
              name: "GAP 管制", 
              fullName: "Gap and Step Alignment", 
              meaning: "外殼組裝縫隙與段差微米級剛性管制。若線體能力不足，會導致外觀出現肉眼可見的歪斜或割手感。" 
            },
            { 
              name: "美工線", 
              fullName: "Groove Design", 
              meaning: "在結構交接處故意設計的微型凹槽（美工線），用視覺代償手段隱蔽大量產時不可避免的累積公差。" 
            }
          ]
        },
        {
          tabName: "CMF (材質工藝)",
          what: "定義產品實體的色彩（Color）、基礎材質（Material）與表面處理工藝（Finish，如陽極、PVD、噴塗）。",
          purpose: "賦予冰冷硬體尊榮的實體觸感、色澤張力，並提供耐磨、抗指紋、抗鹽霧腐蝕的信賴性防護裝甲。",
          expectation: "要求代工廠在噴塗與陽極產線上的良率必須維持在 95% 以上，且量產成品在經歷紫外線照射後絕不變色。",
          keywords: [
            { 
              name: "PVD 製程", 
              fullName: "Physical Vapor Deposition", 
              meaning: "物理氣相沉積。在高真空下將金屬汽化並沉積在工件表面，形成極致高光與極高硬度的金屬鍍層工藝。" 
            },
            { 
              name: "陽極氧化", 
              fullName: "Anodizing Process", 
              meaning: "鋁合金專屬表面處理。透過電化學反應在鋁材表面生成一層堅硬且可染色的氧化膜，兼顧視覺與耐刮性。" 
            },
            { 
              name: "色差 Delta E", 
              fullName: "Color Difference Delta E", 
              meaning: "量測色彩偏差的絕對物理指標。通常要求大量產成品的 ΔE 必須小於 1.0，否則消費者會看出明顯色差。" 
            }
          ]
        },
        {
          tabName: "Clearance (零件間距)",
          what: "在內部 3D 結構堆疊（Stackup）中，規劃各電子元件與外殼之間的物理安全安全防撞問距。",
          purpose: "預留物理空隙以代償大量產時的零件形變、材料熱脹冷縮，嚴防內部撞擊擠壓引發線路短路或死機。",
          expectation: "要求樣機在經歷嚴酷的信賴性折磨（如 1.5 米自由跌落、微型定規滾筒、高低溫循環測試）後全量綠燈通關。",
          keywords: [
            { 
              name: "公差鏈分析", 
              fullName: "Tolerance Stackup Analysis", 
              meaning: "運用數學模型模擬所有零件公差在最壞狀況（Worst-Case）下疊加後的尺寸偏位，嚴防實體干涉。" 
            },
            { 
              name: "膨脹間距", 
              fullName: "Expansion Clearance", 
              meaning: "針對如鋰電池等在充放電過程中會發生實體膨脹的元件，必須剛性預留不低於 0.3mm 的物理空隙。" 
            },
            { 
              name: "信賴性大考", 
              fullName: "Reliability Test Standard", 
              meaning: "模擬使用者極端情境的物理摧毀測試，包含跌落、扭曲、熱震，檢驗結構 Clearance 是否安全合規。" 
            }
          ]
        }
      ]
    },

    // ─── 📦 PAGE 3 / 4: 零件供應商端 (Vendors) ───
    {
      pageTitle: "3. 零件供應商端 (Vendors - 掌控高精元件交期與原物料進料檢驗品質)",
      tabs: [
        {
          tabName: "Lead Time (物料交期)",
          what: "掌控從工廠正式下達採購單（PO），到該稀缺戰術原物料元件實際抵達工廠倉庫入庫的物流總交期。",
          purpose: "物理壓縮物料交期對專案時程的卡死，確保各試產階段開線當天現場 100% 有實物物料可以上線。",
          expectation: "向專案經理交割無料預估的排產預測，將 LT 超過 12 週的稀缺晶片風險提早發動代償認證。",
          keywords: [
            { 
              name: "Forecast", 
              fullName: "Demand Forecast", 
              meaning: "客戶端發出的滾動式排產需求預測。供應商據此提前準備晶圓 or 長料，是供應鏈防禦的第一步。" 
            },
            { 
              name: "Buffer Stock", 
              fullName: "Buffer Stock Management", 
              meaning: "安全庫存水位防禦。在代工廠或供應商端建立的蓄水池庫存，用以代償爆單或天災斷料風險。" 
            },
            { 
              name: "Dual Sourcing", 
              fullName: "Dual Sourcing Strategy", 
              meaning: "雙料源分散斷料風險戰術。同一個零件認證兩家供應商，打破獨家壟斷，同時在季降成本（CD）上取得主動權。" 
            }
          ]
        },
        {
          tabName: "OQC (出廠檢驗)",
          what: "監督原物料供應商在貨物出廠前實施的最後成品品質檢驗（Outgoing Quality Control），確保品質合格並要求隨貨附帶出廠檢驗報告。",
          purpose: "在物料離開供應商大門前進行第一道品質防線攔截，防堵劣質缺陷品污染跨國供應物流鏈。",
          expectation: "進料一次直通，原廠出貨合格率穩定維持在 99.95% 以上。",
          keywords: [
            { 
              name: "OQC 報告", 
              fullName: "Outgoing Quality Control Report", 
              meaning: "出廠檢驗報告。隨貨同行的品質憑證，記錄了該批次零件的出廠物理特徵與關鍵尺寸實測值。" 
            },
            { 
              name: "抽樣計畫", 
              fullName: "Statistical Sampling Plan", 
              meaning: "依據統計學（如 MIL-STD-105E）進行的隨機抽樣計畫。用最小的抽驗樣本數，精確推算整批貨物的缺損率。" 
            }
          ]
        },
        {
          tabName: "Second Source (備援料)",
          what: "認證並評估第二、第三料源供應商元件，進行電氣特性與實體結構的全面對位開線認證。",
          purpose: "打擊一線供應商的價格壟斷，解除單一料源隨時可能因天災、產能引發的斷料死鎖。",
          expectation: "專案 BOM 表隨時維持雙料源熱備援狀態，物料成本（BOM Cost）逐季剛性下壓。",
          keywords: [
            { 
              name: "AVL 名冊", 
              fullName: "Approved Vendor List", 
              meaning: "核准供應商清單。只有通過研發與品質團隊雙重嚴格認證的供應商，才能進入此名冊並獲得採購下單資格。" 
            },
            { 
              name: "交叉認證", 
              fullName: "Cross Qualification", 
              meaning: "將二線料源實體焊接至主板上，進行 100% 相同規格的功能與信賴性測試，確保效能完全等價代償。" 
            }
          ]
        },
        {
          tabName: "IQC (進料品保)",
          what: "這【絕對不是】供應商自家的檢驗，而是由我們代工廠/EMS廠這邊主導、在工廠門口架設的鋼鐵防線（Incoming Quality Control）。針對所有送抵工廠倉庫的實體原物料、晶片、外殼，實施最嚴格的實體抽樣核檢。",
          purpose: "在最前端強行攔截因跨境運輸震動、或原廠 OQC 漏檢而混入的缺陷呆料，確保只有 100% 完美的零件能流向生產線，徹底杜絕不良零件一上線就引發整條線癱瘓流產的連鎖災難。",
          expectation: "工廠 IQC 端的量測治具、電性手法與檢驗規格，與後段實際生產線 100% 完全校準咬合，達成缺陷零件零漏檢。",
          keywords: [
            { 
              name: "尺寸合規審查", 
              fullName: "Dimensional Tolerance Verification", 
              meaning: "運用精密二次元或三次元 OMM 機台，嚴格抽向量測進料結構件之物理外觀。確認實體尺寸精確落於標準圖面公差鏈範圍內，杜絕因射出成型形變引發後續防水結構幾何崩潰。" 
            },
            { 
              name: "測站同步化", 
              fullName: "Test Methodology Synchronization", 
              meaning: "工廠 IQC 在抽驗原物料時所套用的量測手法、電路硬體治具與軟體測試演算法，必須與生產線後段的實體量產測站（如射頻 RF 測試站、功能功能校正 FCT 測站）保持 100% 剛性同步，徹底封死因兩端測試方法不對位引發的誤判 or 漏檢盲區。" 
            },
            { 
              name: "AQL 抽樣加嚴", 
              fullName: "Acceptable Quality Level Tightening", 
              meaning: "針對高風險或歷史曾發生嚴重 Bug 的核心電子元件，動態收緊抽樣孔徑，強制發動加嚴檢驗水準。" 
            }
          ]
        }
      ]
    },

    // ─── ⚙️ PAGE 4 / 4: 代工廠生產端 (EMS / Factory) ───
    {
      pageTitle: "4. 代工廠生產端 (EMS / Factory - 實體量產、工藝落地與良率攻堅大盤)",
      tabs: [
        {
          tabName: "SMT (表面黏著)",
          what: "發動高速貼片機與錫膏印刷機，將微型主動與被動電子元件精確焊接至主電路板（PCB）上。",
          purpose: "建立硬體產品的核心運算、電源分配與射頻通訊神經中樞系統。",
          expectation: "要求 SMT 銲接線體之一次直通率（FPY）必須剛性跨越 99.2% 以上的鋼鐵防線，嚴防爐後空銲缺陷。",
          keywords: [
            { 
              name: "SPI 檢測", 
              fullName: "Solder Paste Inspection", 
              meaning: "錫膏印刷後 3D 檢測。在貼片前，以紅外線雷射 100% 掃描主板錫膏之厚度、體積與偏位，將錫少短路當場擊落。" 
            },
            { 
              name: "回流焊爐", 
              fullName: "Reflow Soldering Oven", 
              meaning: "設置 10 到 12 個獨立溫區，依據熱敏元件特性調配剛性爐溫曲線（Profile），使錫膏完美熔融固化。" 
            },
            { 
              name: "AOI 光學全檢", 
              fullName: "Automated Optical Inspection", 
              meaning: "自動光學檢測。運用高解析相機與演算法，在爐後 100% 抓出零件錯位、極性反向、立碑與錫橋短路。" 
            }
          ]
        },
        {
          tabName: "Assembly (組裝線)",
          what: "主導自動化與人工線體，將主電路板、前殼結構件、螢幕、相機鏡頭模組與電池進行實體物理總裝。",
          purpose: "將前段所有的半成品與概念圖面，完整轉化為符合市場出貨規格的成品實體機台。",
          expectation: "嚴格實施線體平衡（Line Balancing），使各工位作業時間對位秒數恆定，產線直通率剛性達標 95% 以上。",
          keywords: [
            { 
              name: "SOP 指南", 
              fullName: "Standard Operating Procedure", 
              meaning: "標準作業程序書。產線開線的剛性規章，用圖文並茂的剛性步驟限制操作員的下壓行程與螺絲鎖付扭力。" 
            },
            { 
              name: "氣密測試治具", 
              fullName: "Waterproof Leakage Tester", 
              meaning: "針對高階 IPX8 防水產品，在總裝後往機身內部充入微量正壓空氣，量測漏氣速率以判定防水結構是否生還。" 
            },
            { 
              name: "FCT 終檢站", 
              fullName: "Functional Circuit Test", 
              meaning: "功能終檢測試站。對成品進行 100% 的軟硬體功能轟炸量測（螢幕、喇叭、藍牙、相機），是出廠前的最後裝甲。" 
            }
          ]
        }
      ]
    }
  ];

  // 👑 絕殺全域衝突之自適應原位沖刷映射
  window.courseData = PACK_INTERNAL_PAYLOAD;
  window.courseEngineData = {
    courseId: "1-1",
    pages: PACK_INTERNAL_PAYLOAD
  };
  window.courseEngineDataArray = [window.courseEngineData];
})();
