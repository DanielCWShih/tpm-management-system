var courseData = [
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
            meaning: "客戶端發出的滾動式排產需求預測。官方元件廠據此提前長料、準備晶圓產能，是供應鏈防禦的第一步。" 
          },
          { 
            name: "Buffer Stock", 
            fullName: "Buffer Stock Management", 
            meaning: "安全庫存水位防禦。在代工廠或供應商端建立的實體蓄水池，用以代償突發爆單或天災斷料風險。" 
          },
          { 
            name: "Dual Sourcing", 
            fullName: "Dual Sourcing Strategy", 
            meaning: "雙料源分散斷料風險戰術。同一個零件認證兩家供應商，打破獨家價格壟斷，提升採購議價彈性。" 
          },
          { 
            name: "Pin-to-Pin", 
            fullName: "Pin-to-Pin Compatibility", 
            meaning: "腳位完全導通無縫相容。指二線原物料元件的微觀物理外形、尺寸與引腳位置與一線完全契合，工廠不需修改 Layout 即可代償切換。" 
          }
        ]
      },
      {
        tabName: "COA (出廠檢驗)",
        what: "監督原物料供應商在貨物出廠前隨貨附帶的真實品質檢驗憑證（Certificate of Analysis），確保規格合規。",
        purpose: "在最前端對供應商產出的晶片或材料進行基礎黑箱數據把關，防止大批量惡性不良零件流入跨國物流鏈。",
        expectation: "原廠隨貨憑證 100% 齊全，出廠外觀與電性測量數據完全符合買賣雙方最初簽核的藍圖標準。",
        keywords: [
          { 
            name: "COA 報告", 
            fullName: "Certificate of Analysis", 
            meaning: "原廠材質/電性檢驗合格書。用以追溯物料批次初始物理特性，是硬體品質防禦的第一道文字裝甲。" 
          },
          { 
            name: "限度樣品", 
            fullName: "Limit Sample Verification", 
            meaning: "針對難以量化的外觀或特徵，雙方工程師共同簽核的模糊地帶邊界標本，作為出廠檢驗的剛性對位參考。" 
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
        what: "在代工廠端（EMS）對所有送抵工廠倉庫的原物料實施抽樣核檢（Incoming Quality Control）。",
        purpose: "在最前端強行攔截因跨境運輸震動或原廠漏檢而混入的缺陷呆料，嚴防劣質零件污染組裝線。",
        expectation: "工廠 IQC 端的量測治具與檢驗規格與原廠 OQC 100% 校準咬合，達成缺陷零件零漏檢。",
        keywords: [
          { 
            name: "IQC 抽驗", 
            fullName: "Incoming Quality Control", 
            meaning: "進料檢驗。原物料進入生產線前的最後品質裝甲，不合格者一律在廠門口剛性拒收退貨。" 
          },
          { 
            name: "黃金樣機", 
            fullName: "Golden Sample Alignment", 
            meaning: "經研發端簽核認證、各項參數皆完美的標準物理標本，用以校準產線所有測試治具的初始基準線。" 
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
