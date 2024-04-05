=ARRAYFORMULA({nascimento!A:D, SEERRO(PROCV(nascimento!A:A & nascimento!C:C, {populacao!A:A & populacao!B:B, populacao!C:C}, 2, FALSO), "")})



=ARRAYFORMULA({
    populacao!A:C, 
    SEERRO(PROCV(populacao!A:A & populacao!B:B, {nascimento!A:A & nascimento!C:C, nascimento!D:D}, 2, FALSO), ""), 
    SEERRO(PROCV(populacao!A:A & populacao!B:B, {nascimento!A:A & nascimento!C:C, nascimento!B:B}, 2, FALSO), "")
})


=ARRAYFORMULA({
    nascimento!A:D,
    SEERRO(PROCV(nascimento!A:A & nascimento!C:C, {populacao!A:A & populacao!B:B, populacao!C:C}, 2, FALSO), "")
})



=ARRAYFORMULA({
    resumo_compras!A:G,
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!B:B}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!C:C}, 2, FALSO), "")
})





// esta funciono
=ARRAYFORMULA({
    clientes!A:C,
    SEERRO(PROCV(clientes!A:A, {resumo_compras!A:A, resumo_compras!B:D}, {2, 3, 4}, FALSO), {"", "", ""})
  })


  =ARRAYFORMULA({
    FILTER(clientes!A:C, ÉNÚM(CORRESP(clientes!A:A, resumo_compras!A:A, 0))),
    SEERRO(PROCV(clientes!A:A, {resumo_compras!A:A, resumo_compras!B:D}, {2, 3, 4}, FALSO), {"", "", ""})
  })




//   -------------------------------------------------------------------
=ARRAYFORMULA({
    resumo_compras!A:G,
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!B:B}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!C:C}, 2, FALSO), "")
})

=FILTER(pagina4!A1:I, NÚM.CARACT(pagina4!H1:H) > 0)


// Formula que funciona todo en uno(Aun le falta agragar otras columnas de clientes)
=FILTER(ARRAYFORMULA({
    resumo_compras!A:G,
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!B:B}, 2, FALSO), ""), 
    SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!C:C}, 2, FALSO), "")
}), NÚM.CARACT(SEERRO(PROCV(resumo_compras!A:A, {clientes!A:A, clientes!B:B}, 2, FALSO), "")) > 0)




// Formula final uniendo cliente y resumo_compras
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


// -------     Formula final uniendo cliente y transacoes
=FILTER(ARRAYFORMULA({
    transacoes!A:D,
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!B:B}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!C:C}, 2, FALSO), ""),
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!D:D}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!E:E}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!F:F}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!G:G}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!H:H}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!I:I}, 2, FALSO), "") 
}), NÚM.CARACT(SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!B:B}, 2, FALSO), "")) > 0)



// --------- Uniendo clientes, resumo de compras y transacoes

=FILTER(ARRAYFORMULA({
    transacoes!A:D,
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!B:B}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!C:C}, 2, FALSO), ""),
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!D:D}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!E:E}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!F:F}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!G:G}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!H:H}, 2, FALSO), ""), 
    SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!I:I}, 2, FALSO), "") 
}), NÚM.CARACT(SEERRO(PROCV(transacoes!B:B, {clientes!A:A, clientes!B:B}, 2, FALSO), "")) > 0)




=QUERY({Tabla1!A:B, Tabla2!B:B}, "SELECT Col1, Col2, Col3 WHERE Col1 IS NOT NULL", 1)

=QUERY({clientes!A:I; resumo_compras!A:G; transacoes!A:D}, "SELECT * WHERE Col1 IS NOT NULL", 1)

// 3 en uno - base trans
=ArrayFormula(
    {
        transacoes!A:D,
        PROCV(transacoes!B:B,clientes!A:I,COL(INDIRETO("R1C2:R1C"&COLS(clientes!A:I),0)),0),
        PROCV(transacoes!B:B,resumo_compas!A:G,COL(INDIRETO("R1C2:R1C"&COLS(resumo_compas!A:G),0)),0)
    }
)

// 3 en uno - base clientes
=ArrayFormula(
    {
        clientes!A:I,
        PROCV(clientes!A:A,transacoes!A:D,COL(INDIRETO("R1C2:R1C"&COLS(transacoes!A:D),0)),0),
        PROCV(clientes!A:A,resumo_compras!A:G,COL(INDIRETO("R1C2:R1C"&COLS(resumo_compras!A:G),0)),0)
    }
)

