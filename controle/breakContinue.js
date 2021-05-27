const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
       break // Break age no bloco mais próximo dele
       // O break irá interromper o laço e vai sair para a próxima sentença de código fora do laço
   
    }
    console.log(`x = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) { // continur não age em cima do if
      continue // Irá interromper a repetição atual e vai direto para a próxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}
// externa é um rótulo, e o break que está agindo nele é um break rotulado
externa: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externa
        console.log(`Par = ${a}, ${b}`)
    }
}