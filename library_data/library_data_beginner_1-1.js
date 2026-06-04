/* ========================================================================
DATA PACK: library_data_beginner_1-1.js
========================================================================
核心作用：存放 Beginner 1-1 知識圖書館 - 客戶研發端 (Brand R&D) 核心規格文獻。
對位規範：4x2 矩陣外擴主殼，支持 4 大類別分頁與 4 大關鍵詞 3D 節點動態原位改寫。
========================================================================
*/

window.libraryCourseEngineData = [
  {
    courseId: "1-1",
    subPages: [
      // ─── PAGE 1: PRD (產品規格) ───
      {
        title: "上層類別：PRD (產品規格需求書) 戰術專題",
        text: "請點擊上方黃金導航節點，切換調閱不同的核心關鍵詞 (Keywords) 釋義書。",
        diagramFlowArray: [
          {
            name: "🔑 關鍵詞：PRD",
            text: "<h3 class='library-h3'>全稱：Product Requirement Document (產品規格需求書)</h3>" +
                  "<div class='library-blockquote'>意思：由品牌客戶端（Brand R&D）在專案最初期擊發的剛性聖經。它定義了這台硬體產品的全局技術規格、市場定位、目標售價以及功能底線。</div>" +
                  "<p>在 TPM 的戰術視野中，PRD 是所有工程變更（ECO）與排產驗證的最初源頭。如果 PRD 在開案初期標稱定義模糊，將會引發後續 EVT/DVT 階段無限流產與模具報廢。</p>"
          },
          {
            name: "🔑 關鍵詞：DFM",
            text: "<h3 class='library-h3'>全稱：Design for Manufacturing (製造導向設計)</h3>" +
                  "<div class='library-blockquote'>意思：代工廠（EMS）與設計端（R&D）高頻賽局的核心戰術文件。由工廠品質與工程團隊在 R&D 規格出海前，提前清查線體組裝極限，確保設計能被高良率、量產出來。</div>" +
                  "<p>DFM 的核心價值在於硬核干預。例如檢檢 A 殼射出成型時的拔模角度、PCB 點膠的零件間距，在開模前把潛在的應力裂紋與加工死鎖當場擊落。</p>"
          },
          {
            name: "🔑 關鍵詞：Freeze",
            text: "<h3 class='library-h3'>全稱：Spec Freeze (規格/設計凍結)</h3>" +
                  "<div class='library-blockquote'>意思：硬體研發生命週期中神聖不可侵犯的里程碑節點。一旦 Freeze 擊發，代表產品規格與 BOM 表正式鎖定，任何工程變更都必須走極嚴格的 CCB（變更審查會）審批。</div>" +
                  "<p>如果專案在 DVT 階段遲遲無法進行 Spec Freeze，線體將無法進行鋼模排產，物料進料亦會發生大面積排隊呆料流產。</p>"
          },
          {
            name: "🔑 關鍵詞：AQL",
            text: "<h3 class='library-h3'>全稱：Acceptable Quality Level (驗收抽樣合格標準)</h3>" +
                  "<div class='library-blockquote'>意思：品質檢驗時買賣雙方商定的最高可接受瑕疵概率。IQC 團隊嚴格以此指標在廠門口進行進料抽驗，一旦不良率超標則整批物料剛性拒收退貨。</div>" +
                  "<p>AQL 是工廠門口的最後裝甲。一但進料抽驗的缺損率跨越 AQL 閾值，TPM 必須剛性發動退貨拒收，絕不在線體組裝公差導通上做任何妥協投降。</p>"
          }
        ]
      },
      
      // ─── PAGE 2: ID (外觀美學) ───
      {
        title: "上層類別：ID (工業外觀美學) 戰術專題",
        text: "請點擊上方黃金導航節點，切換調閱不同的外觀美學控制指標釋義。",
        diagramFlowArray: [
          {
            name: "🔑 關鍵詞：ID",
            text: "<h3 class='library-h3'>全稱：Industrial Design (工業設計/外觀美學)</h3>" +
                  "<div class='library-blockquote'>意思：決定產品第一眼美學與握持手感的頂層特徵。ID 設計師追求極致的線條與視覺衝擊，通常是引發後續結構工程師與工廠大打出手的源頭。</div>" +
                  "<p>當 ID 提出一個超窄邊框或高難度雙曲面玻璃時，TPM 必須立刻在背景啟動公差鏈評估，嚴防線體貼合溢膠與跌落測試流產。</p>"
          },
          {
            name: "🔑 關鍵詞：DFM",
            text: "<h3 class='library-h3'>外觀面 DFM：外觀分界線與縫隙審查</h3>" +
                  "<div class='library-blockquote'>意思：針對 ID 標稱的外觀外殼縫隙（Gap）與段差（Step），工廠端進行組裝極限校正，嚴防大量產時出現參差不齊的呆料。</div>" +
                  "<p>工廠會透過 DFM 談判，強迫客戶在外殼交接處增加美工線（Groove），用視覺代償手段隱蔽組裝累積公差。</p>"
          },
          {
            name: "🔑 關鍵詞：Freeze",
            text: "<h3 class='library-h3'>全稱：ID Freeze (外觀設計凍結)</h3>" +
                  "<div class='library-blockquote'>意思：外觀造型全面封牌。此節點一過，產品的 3D 造型、按鍵位置、鏡頭開孔大小等絕對不准再做任何微調，全面交割給結構（MD）開展詳細設計。</div>"
          },
          {
            name: "🔑 關鍵詞：AQL",
            text: "<h3 class='library-h3'>外觀 AQL：限度樣品與外觀瑕疵規範</h3>" +
                  "<div class='library-blockquote'>意思：定義在特定的光源與距離下，外殼表面容許的微型劃傷、黑點、點狀凹陷的最大數量。超過 AQL 則判定為外觀殘廢。</div>" +
                  "<p>OQC（出貨檢驗）團隊會手持買賣雙方簽核的「限度樣品（Limit Sample）」，以此 AQL 指標對成品進行開箱嚴檢。</p>"
          }
        ]
      },

      // ─── PAGE 3: CMF (材質工藝) ───
      {
        title: "上層類別：CMF (材質、顏色、表面工藝) 戰術專題",
        text: "請點擊上方黃金導航節點，切換調閱材質與表面製程的剛性指標。",
        diagramFlowArray: [
          {
            name: "🔑 關鍵詞：CMF",
            text: "<h3 class='library-h3'>全稱：Color, Materials, Finish (顏色、材質、表面處理)</h3>" +
                  "<div class='library-blockquote'>意思：賦予硬體產品實體質感的微米級工藝。包含陽極氧化、噴塗、電鍍、PVD（物理氣相沉積）以及材料改性（如 PC+GF30 補強）。</div>" +
                  "<p>CMF 是信賴性折磨的重災區。不同的表面塗層如果與膠水產生化學排斥，會引發 DVT 階段防水結構的黏著力幾何崩潰。</p>"
          },
          {
            name: "🔑 關鍵詞：DFM",
            text: "<h3 class='library-h3'>製程 DFM：表面處理上掛與工藝窗口審查</h3>" +
                  "<div class='library-blockquote'>意思：清查外殼在進行陽極或電鍍時，有沒有預留「掛具孔（Plating Hook Hole）」，以及材料在高溫烘烤下的形變極限。</div>" +
                  "<p>如果 CMF 設計未通過製程 DFM 審查，外殼在外觀陽極氧化時會因沒有上掛夾點而發生掉落，或者高溫烘烤後直接幾何翹曲變形。</p>"
          },
          {
            name: "🔑 關鍵詞：Freeze",
            text: "<h3 class='library-h3'>全稱：CMF Freeze (工藝與色彩凍結)</h3>" +
                  "<div class='library-blockquote'>意思：色號（如潘通色號 Pantone）與表面質地完全封牌。代工廠依此調配塗料與採買陽極藥水，進入 DVT 里程碑進行良率拉升。</div>"
          },
          {
            name: "🔑 關鍵詞：AQL",
            text: "<h3 class='library-h3'>CMF AQL：色差 Delta E 抽驗與百格測試規範</h3>" +
                  "<div class='library-blockquote'>意思：進料檢驗時，使用分光儀測試表面顏色色差 ΔE 是否小於 1.0，並用百格刀進行塗層附著力抽驗，掉漆率超越 AQL 則整批退貨。</div>"
          }
        ]
      },

      // ─── PAGE 4: Clearance (零件間距) ───
      {
        title: "上層類別：Clearance (堆疊與零件安全問距) 戰術專題",
        text: "請點擊上方黃金導航節點，調閱結構防撞與安全間距之剛性看盤規格。",
        diagramFlowArray: [
          {
            name: "🔑 關鍵詞：Clearance",
            text: "<h3 class='library-h3'>全稱：Mechanical Clearance (零件堆疊安全間距)</h3>" +
                  "<div class='library-blockquote'>意思：在 3D 結構堆疊中，為了代償大量產時的組裝公差、材料膨脹以及衝擊形變，而在內部元件之間剛性預留的物理空隙。</div>" +
                  "<p>例如：電池膨脹 Clearance 必須剛性預留 0.3mm，螢幕背哥與中板防撞 Clearance 必須預留 0.15mm。一旦 Clearance 被壓縮，跌落測試必當場碎屏死機。</p>"
          },
          {
            name: "🔑 關鍵詞：DFM",
            text: "<h3 class='library-h3'>堆疊 DFM：三次元公差鏈與防撞干涉審查</h3>" +
                  "<div class='library-blockquote'>意思：工廠端運用三次元量測數據，對 Brand 提供的 CAD 進行動態干涉模擬，抓出在 Worst-Case 下會發生物理撞擊硬碰硬的雷區。</div>" +
                  "<p>當線體組裝下壓時，若 DFM 查出 Clearance 不足，TPM 必須強迫 R&D 修改外形或削肉減薄，絕不在 Clearance 上退讓讓步。</p>"
          },
          {
            name: "🔑 關鍵詞：Freeze",
            text: "<h3 class='library-h3'>全稱：Stackup Freeze (結構堆疊與間距凍結)</h3>" +
                  "<div class='library-blockquote'>意思：內部 3D 空間與 Clearance 尺寸完全封牌。代工廠據此發動工廠治具的實體鋼鐵開模，準備迎接開線 PVT 的直通率大考。</div>"
          },
          {
            name: "🔑 關鍵詞：AQL",
            text: "<h3 class='library-h3'>Clearance AQL：關鍵尺寸 CPK 與 IQC 厚度抽驗標準</h3>" +
                  "<div class='library-blockquote'>意思：對關鍵泡棉、雙面膠的實體厚度進行進料精密抽驗，厚度波動超出 AQL 範圍則判定為阻抗異常，直接退貨，防止組裝後頂屏爆開。</div>"
          }
        ]
      }
    ]
  }
];
