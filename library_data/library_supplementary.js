/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-04 V9.00-SUPP: 👑 全球增補詞條大辭典中心（獨立解耦版）
1. 職能解耦：專門存放課程（.js）以外的額外增補詞條與戰術補充，嚴防主殼臃腫。
2. 剛性鍵值互鎖：採用 [Type]-[ID]（如 codex-1-1）作為剛性導通金鑰，底層大腦自動合流。
========================================================================
*/

window.globalSupplementaryDictionary = {
    // 🎯 初心者 Level 1 單元 1-1 的額外補充詞條
    "codex-1-1": [
        { 
            name: "🔑 增補：AVL 戰術准入白名單", 
            text: "<h3>全稱：Approved Vendor List (認證供應商清冊)</h3><div style='background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin:12px 0; font-weight:700;'>意思：只有列入品牌客戶此份白名單的核心原廠元器件，才准許上線排產。</div><p style='line-height:1.6; font-weight:700; color:#475569;'>在 TPM 的戰術防線中，嚴防 R&D 團隊在最前端誤用非 AVL 廠商的散料。一旦在 NPI 開線當天被客戶稽核抓到未列入 AVL，整條產線將當場流產、就地熔斷報廢！</p>" 
        },
        {
            name: "🔑 增補：MCO 專案管理變更資金",
            text: "<h3>全稱：Management Change Order (管理級工程變更令)</h3><div style='background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin:12px 0; font-weight:700;'>意思：非技術圖紙原因、純因商務談判、大客突發變更或跨境物流時程追趕引發的管理變更財務憑證。</div><p style='line-height:1.6; font-weight:700; color:#475569;'>例如遭遇碼頭大罷工緊急動用海運改空運突發溢價，這筆巨額虧損代償責任必須走 MCO 機制向客戶端發動硬核追償，死守專案智造利潤底線。</p>"
        }
    ],
    
    // 🎯 初心者 Level 1 單元 1-2 的額外補充詞條
    "codex-1-2": [
        { 
            name: "🔑 增補：Lessons Learned 歷史知識庫", 
            text: "<h3>全稱：Lessons Learned 歷史血淚經驗文獻庫</h3><div style='background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin:12px 0; font-weight:700;'>意思：在前代專案生命週期中踩過的所有技術圖紙、公差鏈變異與流產停線大坑的剛性存檔文獻。</div><p style='line-height:1.6; font-weight:700; color:#475569;'>新專案在車間發動 Kick-off 當天，TPM 必須強制主導 CFT 小組清查 Lessons Learned 歷史庫，嚴防在新生產線上重複爆發相同的外殼偏位裝配手傷。</p>" 
        }
    ],

    // 🎯 冒險者手冊 Level 1 單元 1-1 的額外補充詞條
    "handbook-1-1": [
        {
            name: "🔑 增補：AQL 門檻降維打擊",
            text: "<h3>全稱：Acceptable Quality Level (接收質量極限抽樣水準)</h3><div style='background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin:12px 0; font-weight:700;'>意思：工廠進料大門口判定整批物料是直接就地剛性拒收（Reject）還是收料放行的數理統計抽樣防線。</div><p style='line-height:1.6; font-weight:700; color:#475569;'>一旦在 IQC 車間發現原物料的微觀缺陷率跨越 AQL 剛性臨界值，TPM 必須一鍵發動 RTV 退回原廠程序，絕不允許殘次品污染後段智能流水線。</p>"
        }
    ]
};
