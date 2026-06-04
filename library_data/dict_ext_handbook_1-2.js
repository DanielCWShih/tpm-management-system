/**
 ========================================================================
 FILE: library_data/dict_ext_handbook_1-2.js
 VERSION: 2026-06-04 V1.00-LEXICON-EXT
 DESCRIPTION: 👑 冒險者手冊 1-2 獨立擴展技術名詞辭典（由圖書館全自動熱掛載）
 ========================================================================
 */
window.tpmStandaloneKeywords = [
    {
        name: "幾何流產",
        text: `<h3>幾何流產 (Geometric Failure)</h3>
               <div style="background:#FEF2F2; border:1px solid #FCA5A5; padding:10px; border-radius:4px; font-weight:700; color:#B91C1C; margin:10px 0;">
                   ⚠️ 系統 TPM 核心工程盲區
               </div>
               <p style="line-height:1.6;">指實體物料在公差疊加（Tolerance Stack-up）下發生的尺寸失效。例如：當機殼防水槽被 CNC 挖得太深（公差上限），同時膠條做得太細（公差下限），兩者相撞會導致實體壓縮率低於 15% 物理紅線，引發大規模進水流產不良。</p>`
    },
    {
        name: "Worst-Case 模擬",
        text: `<h3>Worst-Case 最壞情況極限模擬</h3>
               <p style="line-height:1.6;">研發與製程在產品定義初期必修的剛性數學防線。不使用統計學的機率平均值（RSS），而是強行將所有零件調校至『最大上限』與『最小下限』的極端狀態進行對位編排碰撞，用以 100% 封死量產階段任何幾何流產的盲區。</p>`
    }
];
