=ArrayFormula(
    {
        transacoes!A:D,
        PROCV(transacoes!B:B,clientes!A:I,COL(INDIRETO("R1C2:R1C"&COLS(clientes!A:I),0)),0),
        PROCV(transacoes!B:B,resumo_compras!A:G,COL(INDIRETO("R1C2:R1C"&COLS(resumo_compras!A:G),0)),0)
    }
)


=ArrayFormula(
    {
        clientes!A:J,
        PROCV(clientes!A:A,resumo_compras!A:G,COL(INDIRETO("R1C2:R1C"&COLS(resumo_compras!A:G),0)),0)
    }
)



// --------------------------------------------------------------------------------
// Original
=FILTER(ARRAYFORMULA({
    resumo_compras!A:G,
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!B:B}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!C:C}, 2, FALSO), ""),
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!D:D}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!E:E}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!F:F}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!G:G}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!H:H}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!I:I}, 2, FALSO), "") 
}), NÚM.CARACT(SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!B:B}, 2, FALSO), "")) > 0)


// ---------- 
=ARRAYFORMULA({
    clientes!A:I,
    SEERRO(PROCV(clientes!A:A, {resumo_compras!A:A, resumo_compras!B:B}, 2, FALSO), ""), 
    SEERRO(PROCV(clientes!A:A, {resumo_compras!A:A, resumo_compras!C:C}, 2, FALSO), ""),
    SEERRO(PROCV(clientes!A:A, {resumo_compras!A:A, resumo_compras!D:D}, 2, FALSO), ""), 
    SEERRO(PROCV(clientes!A:A, {resumo_compras!A:A, resumo_compras!E:E}, 2, FALSO), ""), 
    SEERRO(PROCV(clientes!A:A, {resumo_compras!A:A, resumo_compras!F:F}, 2, FALSO), ""), 
    SEERRO(PROCV(clientes!A:A, {resumo_compras!A:A, resumo_compras!G:G}, 2, FALSO), "")
    
})




=SE(M2 < 30, "Jovens",
    SE(M2 <= 50, "Adultos Jovens",
        SE(M2 <= 70, "Adultos Mais Velhos",
        SE(M2 <= 100, "Idosos", "")
    )
    ))
